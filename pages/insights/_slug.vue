<script>
import client from "@/plugins/contentful.js";
export default {
  data() {
    return {};
  },
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "insightsNwc",
        "fields.urlSlug": params.slug,
      })
      .then((entries) => {
        return { insight: entries.items[0] };
      })
      .catch((e) => console.log(e));
  },
  methods: {
    dateForm(dateI) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      const month = new Date(dateI);

      return new Date(month).toLocaleDateString("en", options);
    },
  },
};
</script>
<template>
  <div class="row m-0">
    <div class="col-12 m-0 p-0">
      <template v-if="insight.fields.typeArticle === 'insight'">
        <div class="row m-0">
          <div class="col-12 content_post-insight">
            <h1 class="post_insight-title mb-4 h1-45">
              {{ insight.fields.title }}
            </h1>
            <p class="text-medium">{{ insight.fields.shortDescription }}</p>
            <p class="post_insight-date mb-4 text-small">
              {{ dateForm(insight.fields.publishDate) }}
            </p>
            <img
              class="w-100 object-cover p-0 image-insight"
              :src="insight.fields.coverImage.fields.file.url"
              alt=""
            />
            <div
               v-html="$md.render(insight.fields.content)"
              class="post_insight-content text-small"
            ></div>
            
          </div>
        </div>
      </template>
      <template v-else-if="insight.fields.typeArticle === 'press releases'">
        <div class="row m-0">
          <div class="col-md-6 m-0 p-0 content-img">
            <img
              class="w-100 object-cover m-0 p-0 image-insight v-100 h-100"
              :src="insight.fields.coverImage.fields.file.url"
              alt=""
            />
          </div>
          <div class="col-md-6 content_post-insight">
            <h1 class="post_insight-title mb-4 h1-45">
              {{ insight.fields.title }}
            </h1>
            <p>{{ insight.fields.shortDescription }}</p>
            <p class="post_insight-date mb-4 text-small">
              {{ dateForm(insight.fields.publishDate) }}
            </p>
           <div
               v-html="$md.render(insight.fields.content)"
              class="post_insight-content text-small"
            ></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.content_post-insight {
  padding: 5%;
  min-height: calc(100vh - 74px);
}
.post_insight-title {
  color: var(--color--secondary);
}
.post_insight-content,
.post_insight-date {
  color: var(--color--secondary);
}
.image-insight {
    margin-bottom: 20px;
}
.content-img {
  position: sticky;
  height: 100vh;
  top: 0;
}
</style>
