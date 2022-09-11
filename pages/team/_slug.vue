<script>
import SectionColumns from "@/components/SectionColumns.vue";
import client from "@/plugins/contentful.js";

export default {
  data() {
    return {};
  },
  components: {
    SectionColumns,
  },
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "teamNwc",
        "fields.slug": params.slug,
      })
      .then((entries) => {
        return { team: entries.items[0] };
      })
      .catch((e) => console.log(e));
  },
};
</script>
<template>
  <main>
    <section-columns>
      <template #left>
        <div
          class="col-md-6 col-12 border-box p-0 justify-content-start position-sticky vh-100 top-0"
        >
          <img
            class="vh-100 w-100 object-cover m-0 p-0 team-image"
            :src="team.fields.image.fields.file.url"
            alt=""
          />
        </div>
      </template>
      <template #right>
        <div class="col-md-6 col-12 border-box p-7">
          <h1 class="h1-45 name-team">{{ team.fields.title }}</h1>
          <p class="text-medium job-team">{{ team.fields.designation }}</p>
          <div class="social">
            <a :href="team.fields.linkedInUrl" class="mr-2">
              <img
                class="image-social object-cover"
                src="@/assets/image/icon/linkedin.png"
                alt=""
              />
            </a>
            <a :href="`mailto:${team.fields.emailId}`">
              <img
                class="image-social object-cover"
                src="@/assets/image/icon/email.png"
                alt=""
              />
            </a>
          </div>
          <p class="desc-team text-small mt-4">{{ team.fields.description }}</p>
        </div>
      </template>
    </section-columns>
  </main>
</template>

<style scoped>
.team-image {
  object-position: top;
}
.name-team {
  padding-bottom: 20px;
  border-bottom: 2px solid var(--bg--primary);
  width: fit-content;
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
</style>
