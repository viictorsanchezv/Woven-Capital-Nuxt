<template>
  <section class="v-100  row border-box m-0 section-colums">
    <slot name="left"> </slot>
    <slot name="right"></slot>
  </section>
</template>
<script setup></script>
<style scoped>
.section-colums{
  display: flex;
}
</style>
