<template>
  <main>
    <section class="m-0" v-if="error.statusCode === 404" id="error-404">
      <div class="col-12 col-md-6 sect-image">
        <img class="img-error" src="@/assets/image/error.png" alt="" />
      </div>
      <div class="col-12 col-md-6 content-error">
        <p class="text-medium desc-error">Page not found</p>
        <h1 class="title-error">Error 404</h1>
        <p class="text-medium desc-error mb-4">
          This page doesn't exist or was removed. We suggest you go back to the
          homepage.
        </p>
        <buttom-primary
          class="d-flex buttom-error align-items-start"
          text_buttom="Back to Homepage"
          link_buttom="/"
        ></buttom-primary>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
  mounted() {
    console.log("1");
    const footerH = document.getElementById("footer-container");
    const footerHeight = footerH.clientHeight;
    console.log(footerHeight);
    const sectionError = document.getElementById("error-404");
    if (sectionError) {
      console.log(typeof footerHeight);
      sectionError.style.height = "calc(100vh - " + footerHeight + "px)";
    }
  },
};
</script>

<style scoped>
#error-404 {
  display: flex;
}
.sect-image {
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.sect-image img {
  object-fit: cover;
  width: auto;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}
.content-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}
h1.title-error {
  color: var(--color--secondary);
  font-weight: 500;
  letter-spacing: -4px;
}
.desc-error {
  max-width: 433px;
  color: #666666;
  margin-bottom: 7px;
}
.img-error {
  object-fit: cover;
}
.buttom-error{
  justify-content: start;
}
@media (min-width: 1441px) {
  h1.title-error {
    font-size: 70px;
    line-height: 80px;
  }
}

@media (max-width: 1440px) {
  h1.title-error {
    font-size: 63px;
    line-height: 76px;
  }
}
@media (max-width: 768px) {
  #error-404 {
    display: block;
    height: 100% !important;
  }
  #error-404 .content-error {
    text-align: center;
    padding: 40px;
  }
  #error-404 p,
  #error-404 h1 {
    width: 100%;
    max-width: 100%;
  }
  .buttom-error{
  justify-content: center;
}
}
</style>
