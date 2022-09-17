<script>
export default {
  props: {
    iconPort: String,
    imagePort: String,
    linkPort: String,
  },
};
</script>
<template>
  <div
    class="col-12 col-md-4 col-lg-4 p-0 portfolio"
    :style="{ 'background-image': `url(${imagePort})` }"
  >
    <a :href="`portfolio#${linkPort}`" class="w-100 h-100 m-0 p-0">
      <div
        class="overlay w-100 h-100 d-flex align-items-center justify-content-center m-0 p-0"
      >
        <img :src="iconPort" alt="" />
      </div>
    </a>
  </div>
</template>
<style>

.content-portfolio .portfolio {
  background-position: center;
  background-size: cover;
  height: 50vh;
}
.content-portfolio .portfolio .overlay {
  background-color: #00000078;
  opacity: 0;
}
.content-portfolio .portfolio:hover .overlay {
  opacity: 1;
}
.content-portfolio .portfolio img {
  width: 226px;
}
@media (min-width: 768px) {
  .content-portfolio .portfolio {
    width: calc(33.33333333% - 4px);
    flex: 0 0 calc(33.33333333% - 4px) !important;
    max-width: calc(33.33333333% - 4px) !important;
  }
  .portfolio:first-child {
  margin: 0 4px 0 0;
}
.portfolio:nth-child(2) {
  margin: 0 2px;
}
.portfolio:nth-child(3) {
  margin: 0 0 0 4px;
}
}
</style>
