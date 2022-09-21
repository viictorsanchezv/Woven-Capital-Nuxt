<script>
export default {
  props: {
    textLink: String,
    linkLink: String,
  },
  methods: {
    activeHeader() {
      this.$emit("expanded", false);
    },
  },
};
</script>
<template>
  <li
    @click="activeHeader()"
    class="list-item text-decoration-none text-center m-0"
  >
    <nuxt-link class="text-decoration-none content-text-menu" :to="linkLink">{{
      textLink
    }}</nuxt-link>
  </li>
</template>
<style scoped>
.list-item a.nuxt-link-exact-active,
.list-item a:hover {
  border-bottom: 2px solid var(--bg--primary);
}
.content-text-menu {
  white-space: pre;
}
header .content-text-menu {
  color: var(--color--secondary);
  padding: 8px 16px;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}
footer .content-text-menu,
footer .company .content-text {
  color: var(--color-white);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
footer .content-text-menu:hover {
  color: var(--bg--primary);
}
@media (min-width: 1280px) {
  footer .content-text-menu {
    padding: 8px 16px;
  }
}
@media (max-width: 1280px) {
  footer .content-text-menu {
    padding: 8px;
  }
}
</style>
