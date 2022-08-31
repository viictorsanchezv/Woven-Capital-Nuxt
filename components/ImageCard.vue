<template>
  <div>
    <img class="mb-3 h-50"  :src="require(`@/assets/image${imageInfo.image}`)" :alt="imageInfo.imageAlt">
    <p class="text-card">{{imageInfo.text}}</p>
  </div>
</template>
<script setup>
  defineProps({
        imageInfo: Object
    });
</script>
<style scoped>
    p.text-card{
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 38px;
      color: var(--color--secondary);
    }
</style>
