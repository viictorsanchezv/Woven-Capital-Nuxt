<script>
export default {
  props: {
    titleLast: String,
    urlLast: String,
    urlExternalLast: String,
  },
  methods: {
    urlInsight(urlSlug, externalLink) {
      if (externalLink != undefined) {
        return externalLink;
      } else return `/insights/${urlSlug}`;
    },
  }
};
</script>

<template>
  <div class="last-new m-0 overflow-hidden position-relative">
    <a :href="urlInsight(urlLast, urlExternalLast)" class="w-100 text-new content-text fw-normal p-text m-0 p-0">{{ titleLast }}</a>
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
.last-new a {
  color: var(--color-white);
  display: block;
  width: 100%;
  transform: translateX(100%);
  animation: move 40s linear infinite;
  white-space: nowrap;
}
.last-new a:hover{
  color: var(--bg--primary);
  text-decoration: none;
}
@keyframes move {
  to {
    transform: translateX(-100%);
  }
}
</style>
