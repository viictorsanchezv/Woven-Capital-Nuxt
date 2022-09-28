<script>
import client from "@/plugins/contentful.js";
import Error404 from "@/layouts/error.vue";
export default {
  data() {
    return {
      teamInsight: {},
      insightCont: {},
    };
  },
  head: {
    title: "Insight - Woven Capital",
  },
  async asyncData({ params, error }) {
    const insightP = await client.getEntries({
      content_type: "insightsNwc",
      "fields.urlSlug": params.slug,
    });
    let teamP = [];

    if (insightP.items[0]) {
      
      if (insightP.items[0].fields.author) {
        const authorI = insightP.items[0].fields.author;
        teamP = await client.getEntries({
          content_type: "teamNwc",
          "fields.slug": authorI,
        });
         teamP = teamP.items;
      }

     
    } else {
      error({ statusCode: 404, mensaje: "Publicación no encontrada" });
    }

    return { insightCont: insightP.items, teamInsight: teamP };
  },
  methods: {
    dateForm(dateI) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const month = new Date(dateI);

      return new Date(month).toLocaleDateString("en", options);
    },
  },
   mounted() {
    document.getElementById("footer-container").style.display = "block";
   }
};
</script>
<template>
  <main class="row">
    <section v-if="insightCont[0]" class="w-100">
      <template v-if="insightCont[0].fields.typeArticle === 'article'">
        <div class="row m-0">
          <div class="col-md-6 m-0 p-0 content-img">
            <img
              v-if="insightCont[0].fields.coverImage"
              class="w-100 m-0 p-0 image-insight img-article"
              :src="insightCont[0].fields.coverImage.fields.file.url"
              alt=""
            />
            <img
              v-if="insightCont[0].fields.internaImage"
              class="w-100 m-0 p-0 image-insight img-article"
              :src="insightCont[0].fields.internaImage.fields.file.url"
              alt=""
            />
          </div>
          <div class="col-md-6 content_post-insight">
            <h1
              class="post_insight-title mb-4 h1-45"
              v-if="insightCont[0].fields.title"
            >
              {{ insightCont[0].fields.title }}
            </h1>
            <div class="info-post" >
              <p class="text-small name-team" v-if="teamInsight[0]">
                By:
                <a
                  v-if="teamInsight[0].fields.slug"
                  :href="`/team/${teamInsight[0].fields.slug}`"
                  class="text-small author-post"
                  >{{ teamInsight[0].fields.title }}</a
                >
              </p>
              <p
                class="post_insight-date mb-4 text-small article"
                v-if="insightCont[0].fields.publishDate"
              >
                {{ dateForm(insightCont[0].fields.publishDate) }}
              </p>
            </div>
          
            <div
              v-if="insightCont[0].fields.content"
              v-html="$md.render(insightCont[0].fields.content)"
              class="post_insight-content text-small"
            ></div>

            <div
              v-if="insightCont[0].fields.subtitle1"
              v-html="$md.render(insightCont[0].fields.subtitle1)"
              class="post_insight-content text-small info-wrapper"
            ></div>
            <div
              v-if="insightCont[0].fields.content2"
              v-html="$md.render(insightCont[0].fields.content2)"
              class="post_insight-content text-small"
            ></div>
            <div
              v-if="insightCont[0].fields.subtitle2"
              v-html="$md.render(insightCont[0].fields.subtitle2)"
              class="post_insight-content text-small info-wrapper"
            ></div>
            <div
              v-if="insightCont[0].fields.content3"
              v-html="$md.render(insightCont[0].fields.content3)"
              class="post_insight-content text-small"
            ></div>

            <div class="author-information" v-if="teamInsight[0]">
              <img
                v-if="teamInsight[0].fields.profilePic.fields.file.url"
                :src="teamInsight[0].fields.profilePic.fields.file.url"
                alt=""
              />
              <div class="information">
                <h5 class="title-author">About the Author</h5>
                <p
                  class="text-small"
                  v-if="teamInsight[0].fields.descriptionDesignation"
                >
                  {{ teamInsight[0].fields.descriptionDesignation }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template
        v-else-if="insightCont[0].fields.typeArticle === 'press releases'"
      >
        <div class="row m-0">
          <div class="col-12 content_post-insight">
            <h1
              class="post_insight-title mb-4 h1-45"
              v-if="insightCont[0].fields.title"
            >
              {{ insightCont[0].fields.title }}
            </h1>
            <p
              class="text-medium"
              v-if="insightCont[0].fields.shortDescription"
            >
              {{ insightCont[0].fields.shortDescription }}
            </p>
            <p
              class="post_insight-date mb-4 text-small pl-0"
              v-if="insightCont[0].fields.publishDate"
            >
              {{ dateForm(insightCont[0].fields.publishDate) }}
            </p>
            <img
              class="w-100 object-cover p-0 image-insight"
              v-if="insightCont[0].fields.internaImage"
              :src="insightCont[0].fields.internaImage.fields.file.url"
              alt=""
            />
            <div
              v-if="insightCont[0].fields.content"
              v-html="$md.render(insightCont[0].fields.content)"
              class="post_insight-content text-small"
            ></div>
          </div>
        </div>
      </template>
    </section>
  </main>
</template>

<style scoped>
.name-team::after{
  content: "";
  margin: 0 10px;
  border-right: 2px solid #a4a4a4;
}
.author-information {
  display: flex;
  margin: 30px 0 0 0;
  padding: 30px 0 0 0;
  justify-content: flex-start;
}
.author-information img {
  height: 150px;
  width: 150px;
  object-fit: contain;
  border-radius: 100%;
}
.author-information .information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  max-width: 414px;
}
.author-information .title-author {
  border-bottom: 2px solid var(--bg--primary);
  width: max-content;
  font-size: 16px;
  margin-bottom: 15px;
}
.author-post {
  font-weight: 600;
  padding-right: 0;
  color: var(--color--secondary);
  text-decoration: revert;
}
.post_insight-date {
  padding-left: 10px;
}
.article.post_insight-date{
  padding: 0;
}
.info-post {
  display: flex;
}
.info-wrapper {
  border-left: 3px solid var(--bg--primary);
  padding-left: 2rem;
  margin-top: 8px;
  font-weight: 600;
}
.img-article {
  height: 50vh;
  object-fit: cover;
}
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
  min-height: 313px;
  object-fit: cover;
}
.content-img {
  position: sticky;
  height: 100vh;
  top: 0;
}
@media (max-width: 1024px) {
  .content_post-insight {
    padding: 10% 6%;
  }
}
@media (max-width: 767px) {
  .post_insight-content div{
    display: block!important;
    display: flex; margin-bottom: 15px; align-items: center; background: rgb(49,49,49);
background: linear-gradient(90deg, rgba(49,49,49,1) 40%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);;
  }
  .content-img {
    height: auto;
    position: relative;
  }
  .content-img img {
    position: relative;
    height: 50vh;
  }
  .content_post-insight {
    padding: 60px 40px 40px;
  }
  .image-insight {
    margin-bottom: 20px;
    min-height: 230px;
    object-fit: cover;
  }
}
</style>
