<script>
import client from "@/plugins/contentful.js";
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
  async asyncData({ params }) {
    const insightP = await client.getEntries({
      content_type: "insightsNwc",
      "fields.urlSlug": params.slug,
    });
    
    const authorI = insightP.items[0].fields.author;
    
     const  teamP = await client.getEntries({
      content_type: "teamNwc",
      "fields.slug": authorI,
    });
  

    return { insightCont: insightP.items, teamInsight: teamP.items };
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
  <main class="row">
    <template v-if="insightCont[0].fields.typeArticle === 'article'">
      <div class="row m-0">
        <div class="col-md-6 m-0 p-0 content-img">
          <img
            class="w-100 m-0 p-0 image-insight img-article"
            :src="insightCont[0].fields.coverImage.fields.file.url"
            alt=""
          />
          <img
            class="w-100 m-0 p-0 image-insight img-article"
            :src="insightCont[0].fields.internaImage.fields.file.url"
            alt=""
          />
        </div>
        <div class="col-md-6 content_post-insight">
          <h1 class="post_insight-title mb-4 h1-45" v-if="insightCont[0].fields.title">
            {{ insightCont[0].fields.title }}
          </h1>
          <div class="info-post">
            <p class="text-small">
              By:
              <a v-if="teamInsight[0].fields.slug"
                :href="`/team/${teamInsight[0].fields.slug}`"
                class="text-small author-post"
                >{{ teamInsight[0].fields.title }}</a
              >
            </p>
            <p class="post_insight-date mb-4 text-small">
              {{ dateForm(insightCont[0].fields.publishDate) }}
            </p>
          </div>
          <p v-if="insightCont[0].fields.shortDescription">{{ insightCont[0].fields.shortDescription }}</p>

          <div v-if="insightCont[0].fields.subtitle1"
            v-html="$md.render(insightCont[0].fields.subtitle1)"
            class="post_insight-content text-small info-wrapper"
          ></div>
          <div v-if="insightCont[0].fields.content"
            v-html="$md.render(insightCont[0].fields.content)"
            class="post_insight-content text-small"
          ></div>
          <div v-if="insightCont[0].fields.subtitle2"
            v-html="$md.render(insightCont[0].fields.subtitle2)"
            class="post_insight-content text-small info-wrapper"
          ></div>
          <div v-if="insightCont[0].fields.content2"
            v-html="$md.render(insightCont[0].fields.content2)"
            class="post_insight-content text-small"
          ></div>

          <div class="author-information ">
            <img v-if="teamInsight[0].fields.profilePic.fields.file.url"
              :src="teamInsight[0].fields.profilePic.fields.file.url"
              alt=""
            />
            <div class="information">
              <h5 class="title-author">About the Author</h5>
              <p class="text-small" v-if="teamInsight[0].fields.descriptionDesignation">
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
          <h1 class="post_insight-title mb-4 h1-45">
            {{ insightCont[0].fields.title }}
          </h1>
          <p class="text-medium">
            {{ insightCont[0].fields.shortDescription }}
          </p>
          <p class="post_insight-date mb-4 text-small">
            {{ dateForm(insightCont[0].fields.publishDate) }}
          </p>
          <img
            class="w-100 object-cover p-0 image-insight"
            :src="insightCont[0].fields.coverImage.fields.file.url"
            alt=""
          />
          <div
            v-html="$md.render(insightCont[0].fields.content)"
            class="post_insight-content text-small"
          ></div>
        </div>
      </div>
    </template>
  </main>
</template>

<style scoped>
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
  border-right: 2px solid #a4a4a4;
  padding-right: 15px;
}
.post_insight-date {
  padding-left: 10px;
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
}
.content-img {
  position: sticky;
  height: 100vh;
  top: 0;
}
@media (max-width: 1024px) {
  .content_post-insight{
    padding: 10%;
  }
}
@media (max-width: 767px) {
  .content-img{
    height: auto;
    position: relative;
  }
  .content-img img {
    position: relative;
    height: 50vh;
  }
  .content_post-insight{
    padding: 60px 40px 40px;
  }
}
</style>
