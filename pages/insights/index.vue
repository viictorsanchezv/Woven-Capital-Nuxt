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
      const options = { year: "numeric", month: 'long', day: "numeric" };
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
    window.removeEventListener("mousewheel", this.handleMouseWheel); 
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); 
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
      resulArr = insig.items.splice(insig.items.length - result, result);
    }
   
    const numbSections = insig.items.length / 3;

    for (let i = numbSections -1 ; i >= 0; i--) {
      arrayInsig[i] = insig.items.splice(  insig.items.length - ctPost, ctPost );
    }

    return {
      insightsCont: insig.items,
      insightsResult: resulArr,
      cantSections: numbSections,
      insightArray: arrayInsig,
    };
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
      
      <template v-for="(arrayI, index) in insightArray"  >
        <Transition :key="index"  mode="out-in">
          <section 
          :class="{active : activeSection == index }"
            class="content-insights fullpage"
            v-show="activeSection == index"
          >
          <div class="content-insights">

          
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
            </div>
          </section>
        </Transition>
      </template>
      <Transition  mode="out-in">
        <section
          v-show="activeSection == cantSections"
          class="result-insights fullpage"
          :class="{active : activeSection == this.offsets.length - 1}"
          v-if="this.insightsResult.length > 0"
        >
        <div class="result-insights">

        
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
          </div>
        </section>
      </Transition>
    </div>
  </main>
</template>
<style scoped>
@media(min-width:768px){
.v-enter-active,
.v-leave-active {
  -webkit-animation: slide-in-bottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
  z-index: 100;
  
}
.v-enter-from,
.v-leave-to {
  -webkit-animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    reverse forwards;
  animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
    forwards;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
  z-index: 99;
}
}
.fullpage{
  display: block!important;
  z-index: 88;
}
.fullpage.active{
  z-index: 99;

}
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    opacity: 0;
  
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
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
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
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
main.insights-page .fullpage{
  overflow: hidden;
}
@media (min-width: 768px) and (max-width: 1024px) {
  main.insights-page {
    margin-top: 85px;
    height: calc(100vh - 85px);
  }
}
@media (min-width: 1024px) {
  main.insights-page {
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
    grid-auto-rows: 400px;
    grid-gap: 20px;
    margin-bottom: 10px;
  }
  .result-insights {
    flex-direction: column;
  }
  .result-insights {
    height: 100%;
  }
  .fullpage {
    display: block !important;
  }
}
</style>
