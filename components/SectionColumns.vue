<template>
  <section class="v-100 row border-box m-0 section-colums">
    <div class="v-100 row section-container w-100">
      <slot name="left"> </slot>
      <slot name="right"></slot>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.section-colums {
  display: flex;
}
.section-container {
  margin: 0;
  padding: 0;
}
.portfolio .section-container {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: white;
}
@media (max-width: 767px) {
  .portfolio .section-container {
    height: 100%;
    position: relative;
  }
}
</style>
