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
  head() {
    if (this.teamCont[0] && this.teamCont[0].fields.titleMeta && this.teamCont[0].fields.descriptionMeta && this.teamCont[0].fields.imageMeta.fields.file.url) {
      return {
        title: this.teamCont[0].fields.titleMeta,
        meta: [
          {
            name: "description",
            content: this.teamCont[0].fields.descriptionMeta,
          },
          {
            hid: "og:image",
            content: this.teamCont[0].fields.imageMeta.fields.file.url,
          },
          {
            name: "keywords",
            content: this.teamCont[0].fields.descriptionMeta
          },
          { hid: "og:title", content: this.teamCont[0].fields.titleMeta },
          {
            hid: "og:image",
            content: this.teamCont[0].fields.imageMeta.fields.file.url
          },
          {
            hid: "og:description",
            content: this.teamCont[0].fields.descriptionMeta
          },
          {
            name: "twitter:title",
            content: this.teamCont[0].fields.titleMeta,
          },
          {
            name: "twitter:description",
            content: this.teamCont[0].fields.descriptionMeta
          },
          {
            name: "twitter:image",
            content: this.teamCont[0].fields.imageMeta.fields.file.url
          },
        ],
      };
    }
  },
  async asyncData({ params, error }) {

    const teamItem = await client.getEntries({
      content_type: "teamNwc",
      "fields.slug": params.slug,
    });

    const insights = await client.getEntries({
      content_type: "insightsNwc",
      "fields.author": params.slug,
      limit: "2",
      order: "-fields.publishDate",
    });

    if(!teamItem.items[0] ){
      error ({ statusCode: 404, mensaje: 'Publicación no encontrada' }) ;
    }

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
          <img v-if="teamCont[0].fields.image.fields.file.url"
            class=" object-cover m-0 p-0 team-image"
            :src="teamCont[0].fields.image.fields.file.url"
            alt=""
          />
        </div>
      </template>
      <template #right>
        <div class="col-md-6 col-12 border-box p-7">
          <h1 v-if="teamCont[0].fields.title" class="h1-45 name-team">{{ teamCont[0].fields.title }}</h1>
          <p class="text-medium job-team">
            {{ teamCont[0].fields.designation }}
          </p>
          <div class="social">
            <a :href="teamCont[0].fields.linkedInUrl" class="linkedin-logo" target="_blank" v-if="teamCont[0].fields.linkedInUrl">
              <img
                class="image-social object-cover"
                src="@/assets/image/icon/linkedin.png"
                alt=""
              />
            </a>
            <a :href="`mailto:${teamCont[0].fields.emailId}`" v-if="teamCont[0].fields.emailId">
              <img
                class="image-social object-cover"
                src="@/assets/image/icon/email.png"
                alt=""
              />
            </a>
          </div>
          <p v-if="teamCont[0].fields.description" class="desc-team text-small mt-4">
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
.linkedin-logo{
  margin: 0 16px 0 0;
}
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
h1.h1-45.name-team {
    line-height: 43px;
}
@media (max-width: 767px) {
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
