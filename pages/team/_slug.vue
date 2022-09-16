<script>
import SectionColumns from "@/components/SectionColumns.vue";
import client from "@/plugins/contentful.js";
import CompanyNews from "@/components/CompanyNews.vue";

export default {
  data() {
    return {
      teamCont: {},
      teamInsight: {},
    };
  },
  components: {
    SectionColumns,
  },
  head: {
    title: "Team - Woven Capital",
  },
  async asyncData({ params }) {
    const teamItem = await client.getEntries({
      content_type: "teamNwc",
      "fields.slug": params.slug,
    });
    const insights = await client.getEntries({
      content_type: "insightsNwc",
      "fields.author": params.slug,
      limit: "2",
    });

    return { teamCont: teamItem.items, teamInsight: insights.items };
  },
};
</script>
<template>
  <main>
    <section-columns>
      <template #left>
        <div
          class="col-md-6 col-12 border-box p-0 justify-content-start image-profile"
        >
          <img
            class=" object-cover m-0 p-0 team-image"
            :src="teamCont[0].fields.image.fields.file.url"
            alt=""
          />
        </div>
      </template>
      <template #right>
        <div class="col-md-6 col-12 border-box p-7">
          <h1 class="h1-45 name-team">{{ teamCont[0].fields.title }}</h1>
          <p class="text-medium job-team">
            {{ teamCont[0].fields.designation }}
          </p>
          <div class="social">
            <a :href="teamCont[0].fields.linkedInUrl" class="mr-2">
              <img
                class="image-social object-cover"
                src="@/assets/image/icon/linkedin.png"
                alt=""
              />
            </a>
            <a :href="`mailto:${teamCont[0].fields.emailId}`">
              <img
                class="image-social object-cover"
                src="@/assets/image/icon/email.png"
                alt=""
              />
            </a>
          </div>
          <p class="desc-team text-small mt-4">
            {{ teamCont[0].fields.description }}
          </p>
          <hr class="mb-4" />

          <template v-if="teamInsight.length > 0">
            <h5 class="more-from mb-4 text-medium">
              More From {{ teamCont[0].fields.title }}
            </h5>

            <company-news
              v-for="(item, index) in teamInsight"
              :key="index"
              :companyInfo="item"
            ></company-news>
          </template>
        </div>
      </template>
    </section-columns>
  </main>
</template>

<style scoped>
.image-profile {
  position: sticky;
  height: 100vh;
  top: 0;
  width: 100%;
}
.image-profile img {
  height: 100vh;
  width: 100%;
}
.more-from {
  font-weight: 600;
}
.team-image {
  object-position: top;
}
.name-team {
  padding-bottom: 20px;
  border-bottom: 2px solid var(--bg--primary);
  width: fit-content;
  line-height: 25px;
}
.job-team {
  color: #818181;
}
.image-social {
  width: 26px;
  height: 22px;
}
.desc-team {
  white-space: pre-line;
  color: var(--color--secondary);
}
@media (max-width: 768px) {
  .image-profile {
    position: relative;
    height: 50vh;
  }
  .image-profile img {
    height: 50vh;
    width: 100%;
  }
}
</style>
