<script>
export default {
  props: {
    titleLast: String,
  },
};
</script>

<template>
  <div class="last-new m-0 overflow-hidden position-relative">
    <p class="w-100 content-text fw-normal p-text m-0 p-0">{{ titleLast }}</p>
  </div>
</template>

<style>
.last-new {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color--secondary);
  padding: 18px 0;
}
.last-new p {
  color: var(--color-white);
  display: block;
  width: 100%;
  transform: translateX(100%);
  animation: move 40s linear infinite;
  white-space: nowrap;
}
@keyframes move {
  to {
    transform: translateX(-100%);
  }
}
</style>
