<template>
  <vue-cookies-consent class="cookies-consent">
    <template #title>We use website cookies</template>
    <template #description>
      <p>
        Cookies are used to give you the best experience on our site, to deliver
        3rd party services and tools, to help us understand and improve how the
        site works, and for advertising.
      </p>
    </template>
    <template #button>I Agree</template>
  </vue-cookies-consent>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.cookies-consent {
  z-index: 997 !important;
  bottom: 0 !important;
  width: calc(100% - 85px);
  border-radius: 0 !important;
  display: flex;
  justify-content: center;
  padding: 0px !important;
}
.cookies-consent .vcc-window__grid {
  display: flex !important;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 920px;
  padding: 20px !important;
}
.cookies-consent p.vcc-window__title {
  font-size: 12px;
  line-height: 24px;
  font-weight: 600;
  font-family: "Poppins";
}
.cookies-consent .vcc-window__description{
  margin: 0px;
}
.cookies-consent .vcc-window__description p {
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  font-family: "Poppins";
}
.cookies-consent .vcc-window__action {
    margin-top: 12px;
}
.cookies-consent .vcc-window__btn {
  width: auto;
  height: auto;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  display: block;
  padding: 6px 32px;
  background: #15a419;
}
.cookies-consent .vcc-window__btn:hover{
  background: var(--color--secondary);
}
@media(max-width: 1024px){
  .cookies-consent {
    left: 0!important;
    width: 100%;
  }
  .cookies-consent .vcc-window__action {
    margin-top: 0px;
  }
}
@media(min-width: 1025px){
  
  .cookies-consent {
    left: 85px !important;
  }
}
</style>
