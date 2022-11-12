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

      pitchForm: {
        firstName: { messField: "", flagField: false, value: "" },
        lastName: { messField: "", flagField: false, value: "" },
        company: { messField: "", flagField: false, value: "" },
        email: { messField: "", flagField: false, value: "" },
        phone: { messField: "", flagField: false, value: "" },
        companyWebsiteUrl: { messField: "", flagField: false, value: "" },
        valueProposition: { messField: "", flagField: false, value: "" },
        stageVenture: { messField: "", flagField: false, value: "" },
        investment: { messField: "", flagField: false, value: "" },
        pitchDemo: { messField: "", flagField: false , value: ""},
        
      },
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
    showModal() {
      this.$refs["modal-pitch"].show();
    },
    hideModal() {
      this.$refs["modal-pitch"].hide();
    },
    validateForm() {
      let invalidForm = false;

   

      Object.entries(this.pitchForm).forEach(([key, value]) => {
        if (value.value == '') {

          this.pitchForm[key].messField = "Field Required";
          this.pitchForm[key].flagField= true;
          invalidForm = true;

        } else{

          this.pitchForm[key].flagField= false;
          
        }
      })
     
      return invalidForm;
    },
    scrollToTop() {
       window.scrollTo(0, 0);
    },
    onSubmit() {
      if (this.validateForm()) {
        this.scrollToTop();
        return;
      }
      let data = {
        firstName: this.pitchForm.firstName.value,
        lastName: this.pitchForm.lastName.value,
        company: this.pitchForm.company.value,
        email: this.pitchForm.email.value,
        phone: this.pitchForm.phone.value,
        companyWebsiteUrl: this.pitchForm.companyWebsiteUrl.value,
        valueProposition: this.pitchForm.valueProposition.value,
        stageVenture: this.pitchForm.stageVenture.value,
        investment: this.pitchForm.investment.value,
        pitchDemo: this.pitchForm.pitchDemo.value,
      };

      axios
        .post(
          "https://getform.io/f/c133cc78-fab9-4ae2-9c88-ef142e6c22e7",
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

            this.$refs["modal-pitch"].show();
            this.pitchForm.firstName.value = "";
            this.pitchForm.lastName.value = "";
            this.pitchForm.company.value = "";
            this.pitchForm.email.value = "";
            this.pitchForm.phone.value = "";
            this.pitchForm.companyWebsiteUrl.value = "";
            this.pitchForm.valueProposition.value = "";
            this.pitchForm.stageVenture.value = "";
            this.pitchForm.investment.value = "";
            this.pitchForm.pitchDemo.value = "";
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
          src="@/assets/image/pitch/pitch.png"
          alt=""
        />
        <h1 class="title-pitch">Tell us about your company</h1>
      </div>
      <div class="col-12 col-md-6 form-pitch">
        <div id="form-pitch">
          <form class="row m-0" method="POST">
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="first-name"
                >First Name*</label
              >
              <input
              :class="{ errormess : pitchForm.firstName.flagField == true }"
                class="rounded w-100"
                type="text"
                id="first-name"
                placeholder="Enter your First Name"
                required
                v-model="pitchForm.firstName.value"
              />
              <span class="error-message" v-show="pitchForm.firstName.flagField">{{pitchForm.firstName.messField}}</span>
            </div>
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="last-name"
                >Last Name*</label
              >
              <input
              :class="{ errormess : pitchForm.lastName.flagField == true }"
                class="rounded w-100"
                type="text"
                id="last-name"
                placeholder="Enter your Last Name"
                required
                v-model="pitchForm.lastName.value"
              />
              <span class="error-message" v-show="pitchForm.lastName.flagField">{{pitchForm.lastName.messField}}</span>
            </div>
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="company"
                >Company*</label
              >
              <input
              :class="{ errormess : pitchForm.company.flagField == true }"
                class="rounded w-100"
                type="text"
                id="company"
                placeholder="Enter your Company Name"
                required
                v-model="pitchForm.company.value"
              />
              <span class="error-message" v-show="pitchForm.company.flagField">{{pitchForm.company.messField}}</span>
            </div>
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="email">Email*</label>
              <input
              :class="{ errormess : pitchForm.email.flagField == true }"
                class="rounded w-100"
                type="email"
                id="email"
                placeholder="Enter your Email Address"
                required
                v-model="pitchForm.email.value"
              />
              <span class="error-message" v-show="pitchForm.email.flagField">{{pitchForm.email.messField}}</span>
            </div>
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="phone-number"
                >Phone Number*</label
              >
              <input
              :class="{ errormess : pitchForm.phone.flagField == true }"
                class="rounded w-100"
                type="text"
                id="phone-number"
                placeholder="Enter your Phone Number"
                required
                v-model="pitchForm.phone.value"
              />
              <span class="error-message" v-show="pitchForm.phone.flagField">{{pitchForm.phone.messField}}</span>
            </div>
            <div class="mb-4 col-md-6 col-12">
              <label class="mb-1 w-100 text-small" for="company-website-url"
                >Company Website URL*</label
              >
              <input
              :class="{ errormess : pitchForm.companyWebsiteUrl.flagField == true }"
                class="rounded w-100"
                type="url"
                id="company-website-url"
                placeholder="http://"
                required
                v-model="pitchForm.companyWebsiteUrl.value"
              />
              <span class="error-message" v-show="pitchForm.companyWebsiteUrl.flagField">{{pitchForm.companyWebsiteUrl.messField}}</span>
            </div>

            <div class="mb-4 col-12">
              <label class="mb-1 w-100 text-small" for="value-proposition"
                >Value Proposition*</label
              >
              <textarea
                required
                :class="{ errormess : pitchForm.valueProposition.flagField == true }"
                class="rounded w-100"
                placeholder="Briefly describe the problem your company solves "
                id="value-proposition"
                rows="5"
                v-model="pitchForm.valueProposition.value"
              ></textarea>
              <span class="error-message" v-show="pitchForm.valueProposition.flagField">{{pitchForm.valueProposition.messField}}</span>
            </div>
            <div class="mb-4 col-12">
              <label class="mb-1 w-100 text-small" for="stage-of-your-venture"
                >Stage of your Venture*</label
              >
              <textarea
              :class="{ errormess : pitchForm.stageVenture.flagField == true }"
                required
                class="rounded w-100"
                placeholder="At what stage is your venture? (ie. Idea, Product development, Post product, Post revenue) "
                id="stage-of-your-venture"
                rows="5"
                v-model="pitchForm.stageVenture.value"
              ></textarea>
              <span class="error-message" v-show="pitchForm.stageVenture.flagField">{{pitchForm.stageVenture.messField}}</span>
            </div>
            <div class="mb-4 col-12">
              <label class="mb-1 w-100 text-small" for="investment"
                >Investment*</label
              >
              <textarea
              :class="{ errormess : pitchForm.investment.flagField == true }"
                required
                class="rounded w-100"
                placeholder="To date, how much have you raised, and from whom? "
                id="investment"
                rows="5"
                v-model="pitchForm.investment.value"
              ></textarea>
              <span class="error-message" v-show="pitchForm.investment.flagField">{{pitchForm.investment.messField}}</span>
            </div>
            <div class="mb-4 col-12">
              <label
                class="mb-1 w-100 text-small"
                for="pitch-deck-or-product-demo"
                >Pitch Deck or Product Demo*</label
              >
              <input
              :class="{ errormess : pitchForm.pitchDemo.flagField == true }"
                class="rounded w-100"
                type="url"
                id="pitch-deck-or-product-demo"
                placeholder="http://"
                required
                v-model="pitchForm.pitchDemo.value"
              />
              <span class="error-message" v-show="pitchForm.pitchDemo.flagField">{{pitchForm.pitchDemo.messField}}</span>
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
              <button
                type="submit"
                class="text-center button-primary"
                @click.prevent="onSubmit()"
              >
                Submit info
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <b-modal
      id="bv-modal-pitch"
      hide-footer
      hide-header
      border-bottom-0
      ref="modal-pitch"
      centered
    >
      <div class="container-modal">
        <div class="close-modal">
          <button @click="hideModal" class="buttom-close">
            <img src="@/assets/image/close.png" alt="" />
          </button>
        </div>
        <div class="d-block text-center title-modal">
          <h3>Thank you for your submission.</h3>
        </div>
        <buttom-primary
          class="d-flex buttom-error align-items-center justify-content-center"
          text_buttom="Back to Homepage"
          link_buttom="/"
        ></buttom-primary>
      </div>
    </b-modal>
  </main>
</template>

<style scoped>
.errormess {
    border-color: red!important;
}
span.error-message{
  color: red;
  font-size: 12px;
}
.close-modal {
  display: flex;
  justify-content: flex-end;
}
button.buttom-close {
  border: 0;
  background: unset;
}
.title-modal {
  margin: 24px 0;
}
.container-modal {
  padding: 10px 10px 25px 10px;
}
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
  object-fit: cover;
  object-position: right;
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
