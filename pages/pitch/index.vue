<script>
import InputGroup from "@/components/InputGroup.vue";
import ButtomPrimary from "@/components/ButtomPrimary.vue";
import client from "@/plugins/contentful.js";
import axios from "axios";

export default {
  name: "PitchPage",
  data() {
    return {
      inputData: [],
      metaContent: {},
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      companyWebsiteUrl: "",
      valueProposition: "",
      stageVenture: "",
      investment: "",
      pitchFemo: "",
    };
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
  components: {
    InputGroup,
    ButtomPrimary,
  },
 
  mounted() {
    document.getElementById("footer-container").style.display = "block";
  },
  async asyncData() {
    const metaPage = await client.getEntries({
      content_type: "metaPage",
      "fields.slugPage": "pitch",
    });
    return {
      metaContent: metaPage.items,
    };
  },
  methods: {
    onSubmit() {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        company: this.company,
        email: this.email,
        phone: this.phone,
        companyWebsiteUrl: this.companyWebsiteUrl,
        valueProposition: this.valueProposition,
        stageVenture: this.stageVenture,
        investment: this.investment,
        pitchFemo: this.pitchFemo,
      };
     
      axios
        .post(
          "https://getform.io/f/f347ebeb-1b79-4946-a64a-9b1f39ed67a1",
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
            document.getElementById("form-pitch").style.display = "none";
            document.getElementById("text-pitch").style.display = "block";
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
  <main>
    <section class="h-100 row m-0">
      <div class="col-12 col-md-6 sect-image section-sticky top-0">
        <img
          class="h-100 w-100 img-pitch"
          src="@/assets/image/pitch/frame-1.png"
          alt=""
        />
        <h1 class="title-pitch">Tell us about your company</h1>
      </div>
      <div class="col-12 col-md-6 form-pitch">
        <div id="form-pitch">
          <form v-on:submit.prevent="onSubmit()" class="row m-0" method="POST">
            
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="first-name">First Name</label>
              <input
                class="rounded w-100"
                type="text"
                id="first-name"
                placeholder="Enter your First Name"
                required
                v-model="firstName"
              />
            </div>
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="last-name">Last Name</label>
              <input
                class="rounded w-100"
                type="text"
                id="last-name"
                placeholder="Enter your Last Name"
                required
                v-model="lastName"
              />
            </div>
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="company">Company</label>
              <input
                class="rounded w-100"
                type="text"
                id="company"
                placeholder="Enter your Company Name"
                required
                v-model="company"
              />
             
            </div>
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="email">Email</label>
              <input
                class="rounded w-100"
                type="email"
                id="email"
                placeholder="Enter your Email Address"
                required
                v-model="email"
              />
             
            </div>
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="phone-number">Phone Number</label>
              <input
                class="rounded w-100"
                type="text"
                id="phone-number"
                placeholder="Enter your Phone Number"
                required
                v-model="phone"
              />
             
            </div>
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="company-website-url">Company Website URL</label>
              <input
                class="rounded w-100"
                type="url"
                id="company-website-url"
                placeholder="http://"
                required
                v-model="companyWebsiteUrl"
              />
            </div>

            <div class="mb-4 col-12">
              <label class="mb-1 w-100 text-small" for="value-proposition">Value Proposition</label>
              <textarea
                required
                class="rounded w-100"
                placeholder="Briefly describe the problem your company solves "
                id="value-proposition"
                rows="5"
                v-model="valueProposition"
              ></textarea>
            </div>
            <div class="mb-4 col-12">
              <label class="mb-1 w-100 text-small" for="stage-of-your-venture">Stage of your Venture</label>
              <textarea
                required
                class="rounded w-100"
                placeholder="At what stage is your venture? (ie. Idea, Product development, Post product, Post revenue) "
                id="stage-of-your-venture"
                rows="5"
                v-model="stageVenture"
              ></textarea>
            </div>
            <div class="mb-4 col-12">
              <label class="mb-1 w-100 text-small" for="investment">Investment</label>
              <textarea
                required
                class="rounded w-100"
                placeholder="o date, how much have you raised, and from whom? "
                id="investment"
                rows="5"
                v-model="investment"
              ></textarea>
            </div>
            <div class="mb-4 col-12">
              <label class="mb-1 w-100 text-small" for="pitch-deck-or-product-demo">Pitch Deck or Product Demo</label>
              <input
                class="rounded w-100"
                type="url"
                id="pitch-deck-or-product-demo"
                placeholder="http://"
                required
                v-model="pitchFemo"
              />
             
            </div>

            <div class="col-12 mb-2">
              <h5 class="mb-4 text-small">*Required Field</h5>
              <p class="text-12">
                By submitting this proposal to Woven Capital Management Company,
                LLC, you represent and warrant that you have the authority to
                disclose this information to Woven Capital Management Company,
                LLC. You acknowledge that you make your submissions voluntarily.
                You agree that no relationship is established or implied by
                Woven Capital Management Company, LLC’s acceptance or evaluation
                of the submitted material.
              </p>
              <p class="text-12">
                Please do not send Woven Capital Management Company, LLC
                anything that constitutes a trade secret or confidential or
                proprietary information. You agree that no confidential relation
                is established by or is to be inferred from your submissions or
                the consideration of your submissions by Woven Capital
                Management Company, LLC.
              </p>
            </div>

            <div
              class="col-12 mb-5 d-flex flex-column align-items-center justify-content-center"
            >
              <h4 class="text-medium mb-4">Stay Connected</h4>
              <button type="submit" class="text-center button-primary">
                Submit info
              </button>
            </div>
          </form>
        </div>

        <h2 id="text-pitch">
          we have received your email, we will contact you as soon as possible.
        </h2>
      </div>
    </section>
  </main>
</template>

<style scoped>
input,
textarea {
  padding: 8px 0;
  padding-left: 10px;
  border: 1px solid #a4a4a4;
}
input::placeholder {
  font-size: 13px;
}
input::placeholder,
textarea::placeholder {
  color: #a4a4a4;
}
button.button-primary {
  font-weight: 500;
  font-style: normal;
  background-color: var(--color--secondary);
  border-radius: 4px;
  padding: 8px 16px;
  color: var(--color-white) !important;
  font-size: 16px;
  max-width: 150px;
  border: 0;
}
button.button-primary:hover {
  background-color: var(--color-btn-hover);
  color: var(--color-white);
  border: 0;
}
#form-pitch {
  display: block;
}
#text-pitch {
  display: none;
}
h1.title-pitch {
  color: var(--color--secondary);
  font-weight: 500;
  letter-spacing: -4px;
  margin-bottom: 3rem;
  position: absolute;
  z-index: 9;
  top: 18%;
  left: 10%;
  max-width: 485px;
}
.sect-image {
  height: 100vh;
}
@media (min-width: 1441px) {
  h1.title-pitch {
    font-size: 70px;
    line-height: 80px;
  }
}
@media (max-width: 1440px) {
  h1.title-pitch {
    font-size: 63px;
    line-height: 76px;
  }
}
@media (max-width: 768px) {
  .sect-image {
    height: 100%;
  }
  h1.title-pitch {
    width: 100%;
    font-size: 35px;
    line-height: 49px;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    letter-spacing: -2px;
    left: 0;
    top: 13%;
    padding: 0 10%;
  }
}
.form-pitch {
  padding: 7% 7% 7% 4%;
}
.img-pitch {
  object-fit: contain;
  object-position: top;
}
.sect-image {
  padding: 0 5% 5% 5% 0;
}
.section-sticky {
  position: sticky;
}
@media (max-width: 768px) {
  .sect-image {
    padding: 0;
  }
  .img-pitch {
    object-position: center left;
  }
  .form-pitch {
    padding: 7%;
  }
  .form-pitch .col-12 {
    padding: 0;
  }
  .section-sticky {
    position: relative;
  }
}
</style>
