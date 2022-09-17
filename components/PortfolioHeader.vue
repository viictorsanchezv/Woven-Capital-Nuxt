<script>
export default {
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      sectionOffsetO: {},
    };
  },
  methods: {
    hideFooter() {
      let footerS = document.getElementById("footer-container");

      let sections = document.getElementsByClassName("fullpage");
      let sectionsLength = sections.length;

      if (this.activeSection == this.offsets.length - 1) {
        footerS.style.display = "block";
      } else {
        footerS.style.display = "none";
      }
    },
    calculateSectionOffsets() {
      let sections = document.getElementsByClassName("fullpage");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        this.sectionOffsetO = {
          title: sections[i].title,
          sectionOffset: sections[i].offsetTop,
        };

        this.offsets.push(this.sectionOffsetO);
      }
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      // if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
      if (this.activeSection > this.offsets.length - 1)
        this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document
        .getElementsByClassName("fullpage")
        [id].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
      this.hideFooter();
    },
    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },
  },
  mounted() {
    this.calculateSectionOffsets();

    document.getElementById("footer-container").style.display = "none";

    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
  },
};
</script>

<template>
  <header class="py-4 position-fixed header-portfolio">
    <div class="w-100 m-0 p-0 d-flex justify-content-center">
      <span
        class="linkPortfolio"
        v-bind:class="{ active: activeSection == index }"
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
  width: 100%;
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
.header-portfolio {
  top: 0;
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
