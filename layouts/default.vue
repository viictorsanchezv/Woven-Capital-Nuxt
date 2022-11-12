<template>
  <div class="d-flex align-items-center m-0 flex-column">
    <!-- header -->
    <TheHeader class="content-main p-0" />
    <!-- body -->
    <Nuxt class="content-main" />
    <!-- footer -->
    <TheFooter class="content-main" />
    <CookiesConsent />
  </div>
</template>
<style>
main.content-main {
  margin-right: 0px;
  margin-left: 0px;
}
@media (min-width: 1025px) {
  .content-main {
    width: 100%;
    padding: 0 0 0 85px;
  }
}
@media (max-width: 1024px) {
  main.content-main {
    width: 100%;
    padding: 0;
    margin-top: 75px;
  }
  main.homePage.content-main {
    margin-top: 80px;
  }
}

@media (max-width: 768px) {
  .content-main {
    width: 100%;
    padding: 0;
    margin: 0;
  }
}
</style>
