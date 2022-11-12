<script>
export default {
  props: {
    titleH2: String,
    spanTitleH2: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="d-flex mt-0 mr-0 ml-0 p-0 w-100 container-secundary">
    <h2 class="title-secundary">
      {{ titleH2 }} <span v-if="spanTitleH2 != ''"> {{ spanTitleH2 }} </span>
    </h2>
  </div>
</template>

<style scoped>
.container-secundary{
  margin-bottom: 1.5rem;
}
.our-portfolio .container-secundary, 
.partner-together .container-secundary{
  margin: 0px;
}
.title-secundary,
.title-secundary span {
  font-weight: 500;
  font-style: normal;
  letter-spacing: -2px;
}
.title-secundary {
  color: var(--color--secondary);
}
.title-secundary span {
  color: var(--bg--primary);
}
.limit-width h2.title-secundary {
  width: 401px;
}
@media (min-width: 1441px) {
  .title-secundary,
  .title-secundary span {
    font-size: 45px;
    line-height: 51.75px;
  }
  .our-portfolio h2.title-secundary,
  .our-partner-together h2.title-secundary {
    width: 610px;
  }
}
@media (max-width: 1440px) {
  .title-secundary,
  .title-secundary span {
    font-size: 40px;
    line-height: 48px;
  }
  .our-portfolio h2.title-secundary,
  .our-partner-together h2.title-secundary {
    width: 570px;
  }
}
@media (max-width: 767px) {
  .limit-width h2.title-secundary {
    width: 100%;
  }
  h2.title-secundary {
    padding: 0;
  }
  h2.title-secundary {
    font-size: 35px;
    line-height: 39px;
  }
  h2.title-secundary span {
    font-size: 35px;
    line-height: 39px;
  }
}
</style>
