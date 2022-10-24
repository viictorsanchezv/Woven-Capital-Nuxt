<script>
import ButtomPrimary from "@/components/ButtomPrimary.vue";
import titleSecundary from "@/components/TitleSecundary.vue";
import client from "@/plugins/contentful.js";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
    };
  },
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
  },
  methods: {
    onSubmit() {
      let data = {
        email: this.email,
      };
      axios
        .post(
          "https://getform.io/f/cc7bd9e1-14e8-4131-a380-dd5b41f7059c",
          data,
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then(
          (response) => {
            this.isSuccess = response.data.success ? true : false;
            document.getElementById("form-contact").style.display = "none";
            document.getElementById("text-contact").style.display = "block";
          },
          (response) => {
            // Error
          }
        );
    },
  },
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
        <div id="mc_embed_signup">
          <form
            action="https://victorsanchezdev.us21.list-manage.com/subscribe/post?u=932311c109f0f40bbee942eda&amp;id=1699fbb953&amp;f_id=000dc3e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_self"
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                  placeholder="Enter your email"
                  required
                />
                <div class="clear foot">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                
                </div>
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
              </div>
              <div id="mce-responses" class="clear foot">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display: none"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none"
                ></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                  type="text"
                  name="b_932311c109f0f40bbee942eda_1699fbb953"
                  tabindex="-1"
                  value=""
                />
              </div>
            </div>
          </form>
        </div>

        <h2 id="text-contact">Thank you for submitting.</h2>
        <p class="info-p">
          This submission constitutes my consent to Woven Capital Management
          Company, LLC, and its affiliates sending me news and updates by email.
          I understand that I can opt out at any time. View
          <a href="/privacy-notice">Privacy Policy</a> for more information.
          <a
            href="https://www.woven-planet.global/en/woven-capital-contact"
            target="_blank"
          >
            Form 20-2</a
          >.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
#mc_embed_signup .mc-field-group {
    display: flex;
    width: 100%;
}
input#mc-embedded-subscribe {
  font-weight: 500;
  font-style: normal;
  background-color: var(--color--secondary);
  border-radius: 4px;
  padding: 8px 16px;
  color: var(--color-white) !important;
  font-size: 16px;
  max-width: 120px;
  border: 0;
  width: 100%!important;
}
input#mc-embedded-subscribe:hover {
  background-color: var(--color-btn-hover);
  color: var(--color-white);
  border: 0;
}
#form-contact {
  display: block;
}
#text-contact {
  display: none;
}
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
.info-p,
.info-p a {
  font-size: 12px;
  padding-right: 0;
  max-width: 519px;
}
.info-contact {
  padding: 0 0 0 4%;
  margin-bottom: 3rem;
}
#mc_embed_signup form input#mce-EMAIL  {
  padding: 8px 16px;
  border: 1px solid #c1c1c1;
  width: 53%;
  margin-right: 5px;
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
#mc_embed_signup .mc-field-group{
  margin-bottom: 14px;
}
@media (max-width: 767px) {
  .info-wrapper {
    margin-bottom: 25px;
  }
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
