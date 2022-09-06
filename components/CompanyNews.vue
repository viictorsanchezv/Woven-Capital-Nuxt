<script>
export default {
  props: {
    companyInfo: Object
  }
}
</script>
<template>
  <div class="company-new-info mb-5">
    <h6 class="m-0">{{companyInfo.title}}</h6>
    <p class="m-0">{{companyInfo.description}}</p>
    <a href="#">Read More <img src="@/assets/image/icon/arrow.png" alt="" /></a>
  </div>
</template>


<style scoped>
  h6{
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    color: #313131;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #313131;
  }
  a{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #15A419;
  }
</style>
