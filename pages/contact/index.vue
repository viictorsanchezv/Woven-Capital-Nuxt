<script>
  import ButtomPrimary from '@/components/ButtomPrimary.vue';
  import titleH2 from '@/components/TitleH2.vue';
export default {
  components: {
    ButtomPrimary,
    titleH2,
  }
}
</script>


<template>
  <main>
    <section class="row m-0">
      <div class="col-12 col-md-6 p-0">
        <img class="w-100 image-contact object-cover " src="@/assets/image/contact/rectangle-444.png" alt="">
      </div>
      <div class="col-12 col-md-6 column-padding d-flex justify-content-end flex-column content-contact">
        <h1 class="h1-45">Get in touch</h1>
        <p class=" first-p pb-2 text-18">If you share our vision and your company would like to be considered for investment by Woven Capital, we want to hear from you.</p>
        <buttom-primary class="mb-5 mr-0 ml-0 mt-0 p-0 d-flex justify-content-start" text_buttom="Pitch your company" link_buttom="https://nuxtjs.org/"></buttom-primary>
        <div class="m-0 p-0 d-flex justify-content-start mail-wrapper">
          <div class=" col-md-6 p-0" >
            <h4 class="text-24 wight-600">General</h4>
            <a class="text-18"  href="mailto:hello@woven.vc">hello@woven.vc</a>
          </div>
          <div class="col-md-6 p-0">
            <h4 class="text-24 wight-600">Media</h4>
            <a class="text-18" href="mailto:press@woven.vc">press@woven.vc</a>
          </div>
        </div>
      </div>
    </section>
    <section class="my-5 pb-5 row m-0 d-flex align-items-start">
      <div class="col-12 col-md-6 p-0 mb-5 d-flex justify-content-center">
        <div class="info-wrapper col-md-8 d-flex justify-content-center flex-column">
          <h5 class="text-18 wight-600">Japan (Tokyo)</h5>
          <p class="text-18 m-0">Nihonbashi Muromachi Mitsui Tower,</p>
          <p class="text-18 m-0">3-2-1 Nihonbashimuromachi, Chuo-ku,</p>
          <p class="text-18 m-0">Tokyo, 103-0022, JAPAN</p>
        </div>
        <div class="info-wrapper col-md-4 d-flex justify-content-center flex-column">
          <h5 class="text-18 wight-600">USA (Silicon Valley)</h5>
          <p class="text-18 m-0">900 Arastradero Rd</p>
          <p class="text-18 m-0">Palo Alto, CA 94304</p>
          <p class="text-18 m-0">USA</p>
        </div>
      </div>
      <div class="col-12 left-column col-md-6 column-padding d-flex content-news justify-content-end flex-column">
        <h4 class="text-24 wight-600 mb-3"> Stay <span class="text-green text-24 wight-600">connected</span></h4>
        <form class="mb-4" @submit.prevent="">
          <div>
            <input type="email" placeholder="Enter your email" name="email" id="email" />
            <a class="button-primary content-text text-decoration-none"  role="button">Subscribe</a>
          </div>
        </form>
        <p class="info-p"> This submission constitutes my consent to Woven Capital Management Company, LLC, and its affiliates sending me news and updates by email. I understand that I can opt out at any time. View Privacy Policy for more information. Form 20-2.</p>
      </div>
    </section>
  </main>
</template>


<style scoped>
    h5.wight-600, 
    h4.wight-600, 
    span.wight-600{
      font-weight: 600;
    }
    .content-contact{
      padding: 5rem 5rem 0 5rem;
    }
    .content-news{
      padding: 0 5rem;
    }
    .info-wrapper {
      border-left : 3px solid var(--bg--primary);
      padding-left: 2rem;
    }
    .image-contact {
      min-height: 50vh;
    }
    .mail-wrapper  a, .column-padding p.first-p{
        color: var(--color--secondary);
    }
    .info-p {
      font-size: 12px;
      padding-right: 2rem;
    }
    form input {
      padding: 8px 16px;

    }
  </style>
