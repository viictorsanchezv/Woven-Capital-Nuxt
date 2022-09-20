<script>
import CardInsights from "@/components/CardInsights.vue";
import client from "@/plugins/contentful.js";
export default {
  data() {
    return {
      insightsCont: {},
      insightsResult: [],
      insightArray: [],
      cantPosts: 3,
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      sectionOffsetO: {},
      cantSections: 0,
    };
  },
  head: {
    title: "Insight - Woven Capital",
  },
  components: {
    CardInsights,
  },
  methods: {
    dateForm(dateI) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      const month = new Date(dateI);

      return new Date(month).toLocaleDateString("en", options);
    },
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
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
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

      if (this.activeSection < 0) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1)
        this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;
      setTimeout(() => {
        this.inMove = false;
      }, 400);
      this.hideFooter();
    },
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
  },
  async asyncData() {
    const insig = await client.getEntries({
      content_type: "insightsNwc",
      order: "-fields.publishDate",
    });

    const result = insig.items.length % 3;
    var resulArr = [];
    
    const ctPost = 3;
    var arrayInsig = [];

    if (result > 0) {
      resulArr = insig.items.splice(
        insig.items.length - result,
        result
      );
    }
   
    const numbSections = insig.items.length / 3;

    for (let i = 0; i < numbSections; i++) {
      arrayInsig[i] = insig.items.splice(
        insig.items.length - ctPost,
        ctPost
      );
    }

    return { insightsCont: insig.items, insightsResult : resulArr , cantSections : numbSections, insightArray:arrayInsig};
  },
  mounted() {
    


    this.hideFooter();

    document.getElementById("footer-container").style.display = "none";

    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel); // Other browsers

    this.calculateSectionOffsets();
  },
};
</script>

<template>
  <main class="content-main insights-page">
    <div class="w-100 container-insights">
      <template v-for="(arrayI, index) in insightArray">
        <Transition :key="index">
          <section
            class="content-insights fullpage"
            v-show="activeSection == index"
          >
            <template v-for="(post, index) in arrayI">
              <card-insights
                :key="index"
                :titleInsights="post.fields.title"
                :slugInsights="post.fields.urlSlug"
                :externalslugInsights="post.fields.externalLink"
                :imageInsights="post.fields.coverImage.fields.file.url"
                :dateInsights="dateForm(post.fields.publishDate)"
              >
              </card-insights>
            </template>
          </section>
        </Transition>
      </template>
      <Transition>
        <section
          v-show="activeSection == cantSections"
          class="result-insights fullpage"
          v-if="this.insightsResult.length > 0"
        >
          <template v-for="(result, index) in this.insightsResult">
            <card-insights
              :key="index"
              :titleInsights="result.fields.title"
              :slugInsights="result.fields.urlSlug"
              :externalslugInsights="result.fields.externalLink"
              :imageInsights="result.fields.coverImage.fields.file.url"
              :dateInsights="dateForm(result.fields.publishDate)"
            >
            </card-insights>
          </template>
        </section>
      </Transition>
    </div>
  </main>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  -webkit-animation: slide-in-top 0.5s ease;
  animation: slide-in-top 0.53s ease;
}
.v-enter-from,
.v-leave-to {
  -webkit-animation: slide-out-top 0.5s ease;
  animation: slide-out-top 0.5s ease;
  opacity: 0;
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
}
@keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
}
.content-insights {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  grid-auto-rows: calc(50vh - 5px);
  grid-gap: 10px;
  margin: 0;
}
section.content-insights.fullPage {
  margin-bottom: 10px;
}
.result-insights {
  height: 100vh;
  margin-top: 0px;
  display: flex;
}
@media(min-width:768px) and (max-width:1024px){
  main.insights-page{
        margin-top: 85px;
    height: calc( 100vh - 85px);
  }
}
@media(min-width:1024px){
  main.insights-page{
     height: 100vh;
  }
}
@media (min-width: 768px) {
  .fullpage {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
  }
  main.insights-page {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .container-insights {
    height: 100%;
    position: relative;
  }
}
@media (max-width: 768px) {
  .content-insights {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-auto-rows: calc(50vh - 5px);
    grid-gap: 20px;
  }
  .result-insights {
    flex-direction: column;
  }
  .result-insights {
    height: 100%;
  }
  .fullpage{
    display: block!important;
  }
}
</style>
