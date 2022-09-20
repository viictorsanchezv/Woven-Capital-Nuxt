<script>
export default {
  data() {
    return {
      sectActive: 0,
    };
  },
  props: {
    offsets: Array,
    activeSection: Number,
  },
  methods: {
    scrollToSection(index) {
    
      this.$emit("sectActive", index);
    },
  },
};
</script>

<template>
  <header class="py-4 position-fixed header-portfolio">
    <div class="w-100 m-0 p-0 d-flex justify-content-center">
      <span
        class="linkPortfolio"
        :class="{ active: activeSection == index }"
        @click="scrollToSection(index)"
        v-for="(offset, index) in offsets"
        v-bind:key="index"
        >{{ offset.title }}
      </span>
    </div>
  </header>
</template>
<style scoped>
.header-portfolio {
  display: flex;
  justify-content: center;
  width: auto;
  z-index: 10000000000000000;
  top: 0;
}
.linkPortfolio.active {
  background: var(--color--secondary);
  color: #fff;
}
.linkPortfolio {
  border-radius: 8px;
  padding: 4px 16px;
  margin: 10px;
  background-color: #fff;
  display: block;
  transition: all 0.4s ease;
  cursor: pointer;
}

.scroll-active {
  background: var(--color--secondary);
  color: white;
}
li a {
  color: var(--color--secondary);
}
header {
  z-index: 996;
}
.linkPortfolio.active .refPortfolio {
  background: var(--color--secondary);
  color: var(--color-white);
}
.linkPortfolio .refPortfolio {
  padding: 4px 8px;
  border-radius: 8px;
}
.linkPortfolio:not(.active) .refPortfolio {
  color: var(--color--secondary);
}
@media (max-width: 767px) {
  .header-portfolio {
    display: none;
  }
}
</style>
