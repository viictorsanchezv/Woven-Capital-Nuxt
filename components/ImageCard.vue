<template>
  <div>
    <img class="mb-3 h-50"  :src="require(`@/assets/image${imageInfo.image}`)" :alt="imageInfo.imageAlt">
    <p class="text-card text-24">{{imageInfo.text}}</p>
  </div>
</template>
<script >
  export default{
    props: {
      imageInfo: Object
    }
  }

</script>
<style scoped>
    .text-card{
      color: var(--color--secondary);
    }
</style>
