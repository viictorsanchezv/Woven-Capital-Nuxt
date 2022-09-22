<script>
import titleSecundary from "@/components/TitleSecundary.vue";
import client from "@/plugins/contentful.js";

export default {
  data() {
    return {};
  },
  components: {
    titleSecundary,
  },
  head: {
    title: "Team - Woven Capital",
  },
  asyncData() {
    return client
      .getEntries({
        content_type: "teamNwc",
        order: "fields.order",
      })
      .then((entries) => {
        return { posts: entries.items };
      })
      .catch((e) => console.log(e));
  },
};
</script>
<template>
  <main>
    <section class="team-section">
      <div class="p-7 m-0">
        <div class="row m-0 p-0">
          <div
            class="col-md-12 p-0 m-0 align-items-center d-flex flex-column text-center"
          >
            <title-secundary
              titleH2="Who we are"
              class="justify-content-center"
            ></title-secundary>
            <p class="text-medium text-team">
              We’re a team of investors, innovators, and industry experts
              passionate about developing the next-generation of life-changing
              mobility technologies.
            </p>
          </div>
        </div>
        <div class="container-team p-0">
          <card-Team
            v-for="(team, index) in posts"
            :key="index"
            :teamName="team.fields.title"
            :teamJob="team.fields.designation"
            :teamImage="team.fields.profilePic.fields.file.url"
            :teamEmail="team.fields.emailId"
            :teamSlug="team.fields.slug"
          >
          </card-Team>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.text-team {
  color: var(--color--secondary);
  width: 80%;
}
.container-team {
  margin-top: 4%;
}
p.text-team {
  max-width: 1022px;
}
.team-section{
  min-height: 97vh;
}
@media(max-width:1024px){
.team-section{
  min-height: 100%;
}
}
</style>
