<template>
  <div class="mb-4" :class="[widthCol(inputInfo.column)]">
    <label class="mb-1 w-100 text-18" :for="inputInfo.id">{{ inputInfo.label }}{{inputInfo.required?'*':''}}</label>
    <input
      v-if="inputInfo.type!=='textarea'"
      class="rounded w-100"
      :type="inputInfo.type"
      :id="inputInfo.id"
      :placeholder="inputInfo.placeholder"
      :required="inputInfo.required"
    />
    <textarea :required="inputInfo.required"  class="rounded w-100" v-else :placeholder="inputInfo.placeholder" :id="inputInfo.id" rows="5"></textarea>
  </div>
</template>
<script>
export default {
  props: {
    inputInfo: Object,
  },
  methods: {
    widthCol(count) {
      switch (count) {
        case 1:
          return 'col-12';
          break;
        case 2:
          return 'col-md-6 col-12';
          break;
        case 3:
          return 'col-md-4 col-12';
          break;
        default:
          return 'col-12';
          break;
      }
    }
  }
};
</script>
<style scoped>
  input, textarea {
   padding: 8px 0;
   padding-left: 10px;
   border: 1px solid #A4A4A4;
  }
  input::placeholder{
    font-size: 13px;
  }
  input::placeholder , textarea::placeholder{
    color:#A4A4A4;
  }

 </style>
