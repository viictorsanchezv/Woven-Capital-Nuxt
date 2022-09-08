<script>
import InputGroup from '@/components/InputGroup.vue';
import ButtomPrimary from '@/components/ButtomPrimary.vue';
export default({
  name: 'PitchPage',
  data() {
    return {
      inputData: [],
    }
  },
  components: {
    InputGroup,
    ButtomPrimary
  },
  created() {
    this.inputData.push({
      id:'first-name',
      label: 'First Name',
      required: true,
      type: 'text',
      placeholder: 'Enter your First Name',
      column: 2
    });

    this.inputData.push({
      id:'last-name',
      label: 'Last Name',
      required: true,
      type: 'text',
      placeholder: 'Enter your Last Name',
      column: 2
    });

    this.inputData.push({
      id:'company',
      label: 'Company',
      required: true,
      type: 'text',
      placeholder: 'Enter your Company Name',
      column: 2
    });

    this.inputData.push({
      id:'email',
      label: 'Email',
      required: true,
      type: 'email',
      placeholder: 'Enter your Email Address',
      column: 2
    });

    this.inputData.push({
      id:'phone-number',
      label: 'Phone Number',
      required: true,
      type: 'text',
      placeholder: 'Enter your Phone Number',
      column: 2
    });

    this.inputData.push({
      id:'company-website-url',
      label: 'Company Website URL',
      required: true,
      type: 'url',
      placeholder: 'http://',
      column: 2
    });

    this.inputData.push({
      id:'value-proposition',
      label: 'Value Proposition',
      required: true,
      type: 'textarea',
      placeholder: 'Briefly describe the problem your company solves (360 characters max)',
      column: 1
    });

    this.inputData.push({
      id:'stage-of-your-venture',
      label: 'Stage of your Venture',
      required: true,
      type: 'textarea',
      placeholder: 'At what stage is your venture? (ie. Idea, Product development, Post product, Post revenue) (360 characters max)',
      column: 1
    });

    this.inputData.push({
      id:'investment',
      label: 'Investment',
      required: true,
      type: 'textarea',
      placeholder: 'To date, how much have you raised, and from whom? (160 characters max)',
      column: 1
    });

    this.inputData.push({
      id:'pitch-deck-or-product-demo',
      label: 'Pitch Deck or Product Demo',
      required: true,
      type: 'url',
      placeholder: 'http://',
      column: 1
    });

  }
})

</script>
<template>
  <main>
    <section class="h-100 row m-0 ">
      <div class="col-12 vh-100 col-md-6 sect-image section-sticky top-0">
        <img class="h-100 w-100 img-pitch" src="@/assets/image/pitch/frame-1.png" alt="">
      </div>
      <div class="col-12 col-md-6 form-pitch">
        <form @submit.prevent="" class="row m-0">
          <template v-for="inputItem in inputData" >
            <input-group  :key="inputItem.id" :inputInfo="inputItem" ></input-group>
          </template>

          <div class="col-12 mb-2">
            <h5 class="mb-4 text-small">*Required Field</h5>
            <p class="text-12">By submitting this proposal to Woven Capital Management Company, LLC, you represent and warrant that you have the authority to disclose this information to Woven Capital Management Company, LLC. You acknowledge that you make your submissions voluntarily. You agree that no relationship is established or implied by Woven Capital Management Company, LLC’s acceptance or evaluation of the submitted material.</p>
            <p class="text-12">Please do not send Woven Capital Management Company, LLC anything that constitutes a trade secret or confidential or proprietary information. You agree that no confidential relation is established by or is to be inferred from your submissions or the consideration of your submissions by Woven Capital Management Company, LLC.</p>
          </div>

          <div class="col-12 mb-5 d-flex flex-column align-items-center justify-content-center">
            <h4 class="text-medium mb-4">Stay Connected</h4>
            <buttom-primary text_buttom="Submit info" class="text-center"></buttom-primary>

          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .form-pitch{
    padding: 7% 7% 7% 4%;
  }
  .img-pitch{
    object-fit: cover;
    object-position: top;
  }
  .sect-image{
    padding: 0 5% 5% 5% 0;
  }
  .section-sticky{
    position: sticky;
  }
  @media(max-width:768px){
    .sect-image{
      padding: 0;
    }
    .img-pitch{
      object-position: center left;
    }
    .form-pitch{
      padding: 7%;
    }
    .form-pitch .col-12{
      padding: 0;
    }
    .section-sticky{
      position: relative;
    }
  }
</style>
