<script>
export default {
  props: {
     title: String,
     image: String,
     icons: {
      type: Boolean,
      default: true,
     }
  }
}
</script>
<template>
  <section>
    <img class="mb-4" :src="require(`@/assets/image/portfolio/logo/${image}`)" alt="">
    <p class="m-0 mb-4">{{title}}</p>
    <div class="mb-5" v-show="icons===true">
      <img src="@/assets/image/icon/linkedin.png" alt="">
      <img src="@/assets/image/icon/Vector.png" alt="">
    </div>
  </section>
</template>

<style scoped>
  section > img {
    width:40%;
  }

  section p {
    font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 32px;
color: #818181;
  }

  section > div > img {
    height: 22px;
    width: 22px;
    margin-right:10px;
  }
</style>
