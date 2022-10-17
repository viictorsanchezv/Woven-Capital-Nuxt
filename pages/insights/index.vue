<script>
import CardInsights from "@/components/CardInsights.vue";
import client from "@/plugins/contentful.js";
export default {
  data() {
    return {
      insightsCont: {},
      insightsResult: [],
      insightArray: [],
      cantPosts: 3,
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      sectionOffsetO: {},
      cantSections: 0,
      mousePoint: 0,
      metaContent: {},
    };
  },
  head() {
    if (
      this.metaContent[0] &&
      this.metaContent[0].fields.title &&
      this.metaContent[0].fields.description &&
      this.metaContent[0].fields.image.fields.file.url
    ) {
      return {
        title: this.metaContent[0].fields.title,
        meta: [
          {
            name: "description",
            content: this.metaContent[0].fields.description,
          },
          {
            hid: "og:image",
            content: this.metaContent[0].fields.image.fields.file.url,
          },
          {
            name: "keywords",
            content: this.metaContent[0].fields.description,
          },
          { hid: "og:title", content: this.metaContent[0].fields.title },
          {
            hid: "og:image",
            content: this.metaContent[0].fields.image.fields.file.url,
          },
          {
            hid: "og:description",
            content: this.metaContent[0].fields.description,
          },
          {
            name: "twitter:title",
            content: this.metaContent[0].fields.title,
          },
          {
            name: "twitter:description",
            content: this.metaContent[0].fields.description,
          },
          {
            name: "twitter:image",
            content: this.metaContent[0].fields.image.fields.file.url,
          },
        ],
      };
    }
  },
  components: {
    CardInsights,
  },
  methods: {
    dateForm(dateI) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const month = new Date(dateI);

      return new Date(month).toLocaleDateString("en", options);
    },
  },
  
  async asyncData() {
    const insig = await client.getEntries({
      content_type: "insightsNwc",
      order: "-fields.publishDate",
    });

    const result = insig.items.length % 3;
    var resulArr = [];

    const ctPost = 3;
    var arrayInsig = [];

    if (result > 0) {
      resulArr = insig.items.splice(insig.items.length - result, result);
    }

    const numbSections = insig.items.length / 3;

    for (let i = numbSections - 1; i >= 0; i--) {
      arrayInsig[i] = insig.items.splice(insig.items.length - ctPost, ctPost);
    }

    const metaPage = await client.getEntries({
      content_type: "metaPage",
      "fields.slugPage": "insights",
    });

    return {
      insightsCont: insig.items,
      insightsResult: resulArr,
      cantSections: numbSections,
      insightArray: arrayInsig,
      metaContent: metaPage.items,
    };
  },

};
</script>

<template>
  <main class="content-main insights-page">
    <div class="w-100 container-insights">
      <template v-for="(arrayI, index) in insightArray" >
      
          <section :key="index"
            class="content-insights fullpage"
          >
            <div class="content-insights">
              <template v-for="(post, index) in arrayI">
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
          </section>
       
      </template>
      
        <section
          class="result-insights fullpage"
          v-if="this.insightsResult.length > 0"
        >
          <div class="result-insights">
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
        </section>
   
    </div>
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
section.content-insights.fullPage {
  margin-bottom: 10px;
}
.result-insights {
  height: 100vh;
  margin-top: 0px;
  display: flex;
}
main.insights-page .fullpage {
  overflow: hidden;
  height: 100vh;
  width: 100%;
}
@media (min-width: 768px) and (max-width: 1024px) {
  main.insights-page {
    margin-top: 85px;
  }
}
@media (min-width: 768px) {
  .fullpage {
    width: 100%;
    background: white;
  }
  main.insights-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .container-insights {
    height: 100%;
    position: relative;
  }
}
@media (max-width: 768px) {
  .content-insights {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-auto-rows: 400px;
    grid-gap: 20px;
    margin-bottom: 10px;
  }
  .result-insights {
    flex-direction: column;
  }
  .result-insights {
    height: 100%;
  }
  .fullpage {
    display: block !important;
  }
}
</style>
