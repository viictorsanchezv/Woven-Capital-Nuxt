<script>
import ButtomPrimary from "@/components/ButtomPrimary.vue";
import titleSecundary from "@/components/TitleSecundary.vue";
import client from "@/plugins/contentful.js";
export default {
  components: {
    ButtomPrimary,
    titleSecundary,
    metaContent: {},
  },
  head() {
    if (
      this.metaContent[0] &&
      this.metaContent[0].fields.title &&
      this.metaContent[0].fields.description &&
      this.metaContent[0].fields.image.fields.file.url
    ) {
      return {
        title: this.metaContent[0].fields.title,
        meta: [
          {
            name: "description",
            content: this.metaContent[0].fields.description,
          },
          {
            hid: "og:image",
            content: this.metaContent[0].fields.image.fields.file.url,
          },
          {
            name: "keywords",
            content: this.metaContent[0].fields.description,
          },
          { hid: "og:title", content: this.metaContent[0].fields.title },
          {
            hid: "og:image",
            content: this.metaContent[0].fields.image.fields.file.url,
          },
          {
            hid: "og:description",
            content: this.metaContent[0].fields.description,
          },
          {
            name: "twitter:title",
            content: this.metaContent[0].fields.title,
          },
          {
            name: "twitter:description",
            content: this.metaContent[0].fields.description,
          },
          {
            name: "twitter:image",
            content: this.metaContent[0].fields.image.fields.file.url,
          },
        ],
      };
    }
  },
   async asyncData() {

   

    const metaPage = await client.getEntries({
      content_type: "metaPage",
      "fields.slugPage": "contact",
    });

    return {
      metaContent: metaPage.items,
    };
  },
   mounted() {
    document.getElementById("footer-container").style.display = "block";
   }
};
</script>

<template>
  <main class="contact-page">
    <section class="row m-0">
      <div class="col-12 col-md-6 p-0">
        <img
          class="w-100 image-contact object-cover"
          src="@/assets/image/contact/rectangle-444.png"
          alt=""
        />
      </div>
      <div
        class="col-12 col-md-6 column-padding d-flex justify-content-end flex-column content-contact"
      >
        <h1 class="h1-45">Get in touch</h1>
        <p class="first-p pb-2 text-small">
          If you share our vision and your company would like to be considered
          for investment by Woven Capital, we want to hear from you.
        </p>
        <buttom-primary
          class="mb-5 mr-0 ml-0 mt-0 p-0 d-flex justify-content-start"
          text_buttom="Pitch your company"
          link_buttom="/pitch"
        ></buttom-primary>
        <div class="p-0 d-flex justify-content-start mail-wrapper">
          <div class="col-md-5 p-0">
            <h4 class="text-medium wight-600">General</h4>
            <a class="text-small" href="mailto:hello@woven.vc"
              >hello@woven.vc</a
            >
          </div>
          <div class="col-md-7 p-0">
            <h4 class="text-medium wight-600">Media</h4>
            <a class="text-small" href="mailto:press@woven.vc"
              >press@woven.vc</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="row d-flex align-items-start col-info">
      <div class="col-12 col-md-6 d-flex justify-content-start info-contact">
        <div
          class="info-wrapper col-md-7 col-12 d-flex justify-content-center flex-column"
        >
          <h5 class="text-small wight-600">Japan (Tokyo)</h5>
          <p class="text-small m-0">Nihonbashi Muromachi Mitsui Tower,</p>
          <p class="text-small m-0">3-2-1 Nihonbashimuromachi, Chuo-ku,</p>
          <p class="text-small m-0">Tokyo, 103-0022, JAPAN</p>
        </div>
        <div
          class="info-wrapper col-md-5 col-12 d-flex justify-content-start flex-column"
        >
          <h5 class="text-small wight-600">USA (Silicon Valley)</h5>
          <p class="text-small m-0">900 Arastradero Rd</p>
          <p class="text-small m-0">Palo Alto, CA 94304</p>
          <p class="text-small m-0">USA</p>
        </div>
      </div>
      <div
        class="col-12 left-column col-md-6 column-padding d-flex content-news justify-content-end flex-column"
      >
        <h4 class="text-medium wight-600 mb-3">
          Stay <span class="text-green text-medium wight-600">connected</span>
        </h4>
        <form class="mb-4" @submit.prevent="">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
            />
            <a
              class="button-primary content-text text-decoration-none"
              role="button"
              >Subscribe</a
            >
          </div>
        </form>
        <p class="info-p">
          This submission constitutes my consent to Woven Capital Management
          Company, LLC, and its affiliates sending me news and updates by email.
          I understand that I can opt out at any time. View <a href="/privacy-notice">Privacy Policy</a> for
          more information. <a href="https://www.woven-planet.global/en/woven-capital-contact" target="_blank"> Form 20-2</a>.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: calc(100vh - 74px);
}
h5.wight-600,
h4.wight-600,
span.wight-600 {
  font-weight: 600;
}
.content-contact {
  padding: 5rem 5rem 0 5rem;
}
.content-news {
  padding: 0 5rem;
}
.info-wrapper {
  border-left: 3px solid var(--bg--primary);
  padding-left: 2rem;
  margin-top: 8px;
}
.image-contact {
  min-height: 50vh;
}
.mail-wrapper {
  margin: 0 0 10% 0;
}
.mail-wrapper a,
.column-padding p.first-p {
  color: var(--color--secondary);
}
input#email {
  width: 53%;
}
.info-p, .info-p a {
  font-size: 12px;
  padding-right: 0;
  max-width: 519px;
}
.info-contact {
  padding: 0 0 0 4%;
  margin-bottom: 3rem;
}
form input {
  padding: 8px 16px;
  border: 1px solid #c1c1c1;
}
.first-p {
  max-width: 524px;
}
.col-info {
  padding-top: 4%;
  margin: 0;
}
.col-info {
  word-break: break-word;
}
@media (max-width: 767px) {
  .content-contact,
  .col-info {
    padding: 7%;
    margin: 0;
  }
  .info-contact {
    padding: 0;
    flex-wrap: wrap;
  }
  .mail-wrapper {
    margin: 0;
  }
  .content-news {
    padding: 0;
  }
}
</style>
