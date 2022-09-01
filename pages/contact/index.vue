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
        <img class="w-100 image-contact" src="@/assets/image/contact/rectangle-444.png" alt="">
      </div>
      <div class="col-12 col-md-6 column-padding d-flex justify-content-end flex-column">
        <h1>Get in touch</h1>
        <p class=" first-p pb-2">If you share our vision and your company would like to be considered for investment by Woven Capital, we want to hear from you.</p>
        <a class="button-primary content-text text-decoration-none"  role="button">Pitch your company</a>
        <div class="my-5 pt-4 d-flex justify-content-start mail-wrapper">
          <div class="mr-5">
            <h4>General</h4>
            <a href="mailto:hello@woven.vc">hello@woven.vc</a>
          </div>
          <div class="mx-5">
            <h4>Media</h4>
            <a href="mailto:press@woven.vc">press@woven.vc</a>
          </div>
        </div>
      </div>
    </section>
    <section class="my-5 pb-5 row m-0">
      <div class="col-12 col-md-6 p-0 mb-5 d-flex justify-content-center">
        <div class="info-wrapper">
          <h5>Japan (Tokyo)</h5>
          <p>Nihonbashi Muromachi Mitsui Tower,</p>
          <p>3-2-1 Nihonbashimuromachi, Chuo-ku,</p>
          <p>Tokyo, 103-0022, JAPAN</p>
        </div>
        <div class="info-wrapper ml-5">
          <h5>USA (Silicon Valley)</h5>
          <p>900 Arastradero Rd</p>
          <p>Palo Alto, CA 94304</p>
          <p>USA</p>
        </div>
      </div>
      <div class="col-12 left-column col-md-6 column-padding d-flex justify-content-end flex-column">
        <h4 class="mb-3"> Stay <span class="text-green">connected</span></h4>
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
.info-wrapper {
  border-left : 3px solid #21CB25;
  padding-left: 2rem;
  display: flex;
    flex-direction: column;
    justify-content: center;
}
div.column-padding {
  padding: 0 6.4em;
}
  a.button-primary{
      font-weight: 500;
      font-style: normal;
      background-color: var( --color--secondary);
      border-radius: 4px;
      padding: 8px 16px;
      color: var(--color-white);
      width:fit-content;
      font-size: 1.15rem;
  }
  a.button-primary:hover{
      background-color: var( --color-btn-hover );
      color: var(--color-white);
  }
  .image-contact {
    min-height: 50vh;
    object-fit: cover;
  }
  .mail-wrapper  a, .column-padding p.first-p{
    color: #313131;
    font-size: 1.3rem;
  }



  .mail-wrapper h4 {
    font-size: 1.7rem;
  }

  .text-green {
    color: var( --bg--primary);
  }

  .left-column h4, .left-column h4 span {
    font-size: 1.7rem;
  }

  .info-p {
    font-size: 0.9rem;
    padding-right: 2rem;
  }

  form input {
    padding: 8px 16px;

  }
  </style>
