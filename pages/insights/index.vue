<script>
import CardInsights from "@/components/CardInsights.vue";
import client from "@/plugins/contentful.js";
export default {
  data() {
    return {
      insightsCont: {},
      insightsResult: [],
    };
  },
  head: {
    title: "Insight - Woven Capital",
  },
  components: {
    CardInsights,
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
      order: "-fields.publishDate",
    });

    return { insightsCont: insig.items };
  },
  mounted() {
    const result = this.insightsCont.length % 3;

    if (result > 0) {
      this.insightsResult = this.insightsCont.splice(
        this.insightsCont.length - result,
        result
      );
    }
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
        <div class="result-insights" v-if="this.insightsResult.length > 0">
          <template v-for="(result, index) in this.insightsResult">
            <card-insights
              :key="index"
              :titleInsights="result.fields.title"
              :slugInsights="result.fields.urlSlug"
              :externalslugInsights="result.fields.externalLink"
              :imageInsights="result.fields.coverImage.fields.file.url"
              :dateInsights="dateForm(result.fields.publishDate)"
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
.result-insights {
  height: 50vh;
  margin-top: 10px;
  display: flex;
}
@media (max-width: 768px) {
  .content-insights {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-auto-rows: calc(50vh - 5px);
    grid-gap: 20px;
  }
  .result-insights{
    flex-direction: column;
  }
  .result-insights{
    height: 100vh;
  }
}
</style>
