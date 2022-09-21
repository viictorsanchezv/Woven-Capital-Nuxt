<script>
export default {
  props: {
    companyInfo: Object,
  },
  methods: {
    urlInsight(urlSlug, externalLink) {
      if (externalLink != undefined) {
        return externalLink;
      } else return `/insights/${urlSlug}`;
    },
  },
};
</script>
<template>
  <div class="company-new-info mb-5">
    <h6 class="m-0 text-small post-title">{{ companyInfo.fields.title }}</h6>
    <div
      v-html="$md.render(companyInfo.fields.content.substring(0, 300) + '...')"
      class="post_insight-content text-small"
      maxlength="10"
    ></div>
    <a
      :target="companyInfo.fields.externalLink != undefined ? '_blank' : '_self'"
      :href="
        urlInsight(companyInfo.fields.urlSlug, companyInfo.fields.externalLink)
      "
      >Read More <img src="@/assets/image/icon/arrow.png" alt=""
    /></a>
  </div>
</template>

<style scoped>
.more-from .post-title{
  padding-bottom: 20px;
}
h6 {
  font-weight: 600;
  color: #313131;
}
p {
  font-weight: 400;
  color: #313131;
}
a {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #15a419;
}
</style>
