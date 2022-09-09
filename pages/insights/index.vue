<script>
import CardInsights from "@/components/CardInsights.vue";
import client from "@/plugins/contentful.js";
import { insightsData } from "@/data/data.js";
export default {
  data() {
    return {
      insights: insightsData,
      insightsCont: {},
    };
  },
  methods: {
    dateForm(dateI) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      const month = new Date(dateI);

      return new Date(month).toLocaleDateString("en", options);
    },
  },
  async asyncData() {
    const insig = await client.getEntries({
      content_type: "insightsNwc",
    });

    return { insightsCont: insig.items };
  },
};
</script>

<template>
  <main>
    <section>
      <div class="w-100">
        <div class="content-insights">
          <template v-for="(post, index) in insightsCont">
            <card-insights
              :key="index"
              :titleInsights="post.fields.title"
              :slugInsights="post.fields.urlSlug"
              :externalslugInsights="post.fields.externalLink"
              :imageInsights="post.fields.coverImage.fields.file.url"
              :dateInsights="dateForm(post.fields.publishDate)"
            >
            </card-insights>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.content-insights {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  grid-auto-rows: calc(50vh - 5px);
  grid-gap: 10px;
  margin: 0;
}
@media (max-width: 768px) {
  .content-insights {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-auto-rows: calc(50vh - 5px);
    grid-gap: 40px;
  }
}
</style>
