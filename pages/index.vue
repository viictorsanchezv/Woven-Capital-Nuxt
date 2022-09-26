<script>
import ButtomPrimary from "@/components/ButtomPrimary.vue";
import titleSecundary from "@/components/TitleSecundary.vue";
import newLast from "@/components/LastNew.vue";
import cardPortfolio from "@/components/CardPortfolio.vue";
import CardInsights from "@/components/CardInsights.vue";
import client from "@/plugins/contentful.js";

export default {
  data() {
    return {
      portfoliosCont: {},
      insightsCont: {},
      pressReleasesCont: {},
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      sectionOffsetO: {},
    };
  },
  head: {
    title: "Woven Capital",
  },
  components: {
    ButtomPrimary,
    titleSecundary,
    newLast,
    cardPortfolio,
    CardInsights,
  },
  methods: {
    dateForm(dateI) {
      const options = { year: "numeric", month: "long", day: "numeric" };
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
      let elemtInt =
        document.getElementsByClassName("section-content")[this.activeSection];
      let elemtExt =
        document.getElementsByClassName("col-content")[this.activeSection];
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
  mounted() {
    this.calculateSectionOffsets();
    this.hideFooter();

    document.getElementById("footer-container").style.display = "none";

    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel); // Other browsers
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
  },
  async asyncData() {
    const portf = await client.getEntries({
      content_type: "portfolioNwc",
      order: "fields.order",
    });

    const insig = await client.getEntries({
      content_type: "insightsNwc",
      order: "-fields.publishDate",
      limit: "3",
    });

    const pressReleases = await client.getEntries({
      content_type: "pressReleasesNwc",
    });

    return {
      portfoliosCont: portf.items,
      insightsCont: insig.items,
      pressReleasesCont: pressReleases.items,
    };
  },
};
</script>
<template>
  <main class="homePage">
    <div class="container-homepage">
      <!-- hero image -->
      <Transition  mode="out-in">
        <section
          v-show="activeSection == 0"
          :class="{active : activeSection == 0}"
          class="fullpage hero-image vh-hero d-flex flex-column align-items-center w-100"
        >
          <div class="position-relative w-100 hero-container">
            <div
              class="content-hero row align-items-start text-md-center justify-content-center m-0"
            >
              <div
                class="col-12 m-0 p-0 d-flex justify-content-center flex-column align-items-center hero-info"
              >
                <div class="content-logos">
                  <a
                    href="https://www.woven-planet.global/"
                    class="woven-planet logo"
                    target="_blank"
                  >
                    <img
                      src="../assets/image/WovenPlanet Logo.png"
                      alt="Logo Woven Planet"
                    />
                  </a>
                  <a
                    href="https://www.woven-planet.global/"
                    class="woven-city logo"
                    target="_blank"
                  >
                    <img
                      src="../assets/image/Woven-City-Logo.png"
                      alt="Logo Woven City"
                    />
                  </a>
                  <a
                    href="https://global.toyota/"
                    class="toyota logo"
                    target="_blank"
                  >
                    <img
                      src="../assets/image/Toyota-Logo.png"
                      alt="Logo Toyota"
                    />
                  </a>
                  
                  
                </div>
                <div class="m-0">
                  <div
                    class="logo-hero mt-0 mb-4 mr-0 ml-0 p-0 w-100 align-items-start text-md-center justify-content-center"
                  >
                    <img
                      src="../assets/image/Logo_text.png"
                      alt=""
                      width="325"
                      height="45"
                    />
                  </div>
                  <h1 class="title-home">Building Mobility at Scale</h1>
                  <buttom-primary
                    class="d-flex justify-content-center align-items-start"
                    text_buttom="Read our Story"
                    link_buttom="/about"
                  ></buttom-primary>
                </div>
              </div>
            </div>
            <video
              class="vh-hero w-100 object-cover"
              src="@/assets/video/Woven-Capital-Animated.mp4"
              autoplay="true"
              muted="true"
              loop="true"
              poster=""
            ></video>
          </div>
        </section>
      </Transition>
      <!-- portfolio -->
      <Transition  mode="out-in">
        <section
          v-show="activeSection == 1"
          :class="{active : activeSection == 1}"
          class="fullpage our-portfolio w-100"
        >
          <div class="position-relative w-100 portf-col">
            <div
              class="new-last-post m-0 p-0 position-relative d-flex justify-content-center"
            >
              <!-- <div class="position-relative w-100">
                <div class="row m-0 p-0">
                  <div class="col-12 m-0 p-0">
                    <new-last
                      :titleLast="insightsCont[0].fields.title"
                      :urlLast="insightsCont[0].fields.urlSlug"
                      :urlExternalLast="insightsCont[0].fields.externalLink"
                    ></new-last>
                  </div>
                </div>
              </div> -->
            </div>
            <div
              class="row text-md-center justify-content-center m-0 position-relative our-portfolio-content"
            >
              <div class="col-12 m-0 p-0">
                <title-secundary
                  class="justify-content-center"
                  titleH2="Meet the leaders shaping the world of tomorrow, "
                  spanTitleH2="today"
                ></title-secundary>

                <p class="text-medium text-portfolio">Our Portfolio</p>

                <div class="d-flex m-0 p-0 w-100 justify-content-center">
                  <a href="/portfolio" class="w-100 h-100 m-0 p-0">
                    <img src="../assets/image/chevron-down.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="row content-portfolio mt-4 mb-0 mr-0 ml-0 p-0">
              <template v-for="(portfolio, index) in portfoliosCont">
                <card-portfolio
                  :key="index"
                  :iconPort="portfolio.fields.logo.fields.file.url"
                  :imagePort="portfolio.fields.coverImage.fields.file.url"
                  :linkPort="portfolio.fields.slug"
                ></card-portfolio>
              </template>
            </div>
          </div>
        </section>
      </Transition>
      <!-- partner -->
      <Transition  mode="out-in">
        <section
        :class="{active : activeSection == 2}"
          v-show="activeSection == 2"
          class="fullpage partner-together w-100"
        >
          <div class="position-relative w-100 m-0 p-0">
            <div class="row m-0 partner-col">
              <div class="col-12 m-0">
                <title-secundary
                  class="justify-content-center"
                  titleH2="Partner together"
                ></title-secundary>

                <p class="p-0 text-medium text-partner">
                  If you share our vision and your company would like to be
                  considered for investment by Woven Capital, we want to hear
                  from you.
                </p>

                <buttom-primary
                  class="mb-1 mr-0 ml-0 mt-0 p-0 justify-content-center align-items-start"
                  text_buttom="Tell us about yourself"
                  link_buttom="/pitch"
                ></buttom-primary>
              </div>
              <img
                src="../assets/image/partner.png"
                class="p-0 partner-img"
                alt=""
              />
            </div>
          </div>
        </section>
      </Transition>
      <!-- Insights-->

      <Transition mode="out-in">
        <section v-show="activeSection == 3" class="fullpage w-100 section-insight"
        :class="{active : activeSection == 3}"
        >
          <div class="w-100 container-insight">
            <div class="content-insights m-0">
              <template v-for="(post, index) in insightsCont">
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
            <div
              class="d-flex justify-content-center flex-column align-item-center text-center p-2 read-more-insight"
            >
              <div class="d-flex m-0 p-0 w-100 justify-content-center">
                <buttom-primary
                    class="d-flex justify-content-center align-items-start"
                    text_buttom="Meet the Team"
                    link_buttom="/team"
                  ></buttom-primary>
              </div>
            </div>
          </div>
        </section>
      </Transition>
    </div>
  </main>
</template>
<style>
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
}
}
.hero-image{
  z-index: 50;
}

.fullpage{
  display: block!important;
  z-index: 1;
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

p.text-insight {
  margin: 0;
  line-height: 26px;
}
.hero-info {
  z-index: 9;
}
.container-homepage {
  width: 100%;
  height: 100%;
  position: relative;
}
.hero-image {
  height: 100vh;
}
.hero-container,
video.vh-hero {
  height: 100vh;
}
.new-last-post {
  width: 100%;
}
.partner-img {
  margin: 3rem 0 0 0;
}
.content-logos {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 20px 70px;
  border-bottom: 2px solid var(--color--secondary);
  margin-bottom: 70px;
  background: var(--color-white);
}
.content-logos .woven-city {
  padding: 0 15px;
  border-left: 1px solid #a4a4a4;
  margin: 0px 15px;
  border-right: 1px solid #a4a4a4;
}
.content-logos a {
  height: 25px;
}
.content-logos img {
  padding: 0;
  object-fit: contain;
}
.content-logos .toyota img {
  width: 90.39px;
}
.content-logos .woven-planet img {
  width: 180.46px;
}
.content-logos .woven-city img {
  width: 204.73px;
}
h1.title-home {
  color: var(--color--secondary);
  font-weight: 500;
  letter-spacing: -4px;
  margin-bottom: 3rem;
}
.hero-image {
  background-position: center;
  background-size: cover;
}
.content-hero {
  padding-top: 0px;
}
.text-partner {
  margin: 1rem 0;
}
.text-portfolio,
.text-partner {
  color: var(--color--secondary);
}
.portf-col {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.partner-col {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 4vh 0 0 0;
}
.partner-col .col-12 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
}
.our-portfolio .our-portfolio-content {
  padding: 4vh 0 0 0;
}
.our-portfolio,
.partner-together {
  height: 100vh;
  padding: 0;
  align-items: flex-end;
}
.content-insights {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  grid-auto-rows: calc(50vh - 10px);
  grid-gap: 10px;
}
.card-view:first-child,
.card-view:nth-child(3n + 1) {
  grid-row: span 2;
}
.partner-together img {
  height: 54vh;
}

@media (min-width: 1441px) {
  .hero-image h1.title-home {
    font-size: 70px;
    line-height: 80px;
  }
  .text-partner {
    width: 737px;
  }
}
@media (max-width: 1440px) {
  .hero-image h1.title-home {
    font-size: 63px;
    line-height: 76px;
  }
  .text-partner {
    width: 600px;
  }
}
@media (min-width: 1080px) {
  .content-hero .logo-hero {
    display: block;
  }
}
@media (max-width: 1079px) {
  .hero-image video {
    margin-top: -2px;
  }
  .vh-hero {
    height: calc(100vh - 83px);
  }
  .content-hero {
    padding-top: 0px;
  }
  .content-hero .logo-hero {
    display: none;
  }
}
@media (min-width: 768px) {
  .homePage .content-insights {
    grid-auto-rows: calc(45vh - 5px);
    height: 90vh;
  }
  .read-more-insight {
    height: 10vh;
  }
  .container-insight {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  .fullpage {
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background: white;
    position: absolute;
    overflow: hidden;
  }
  main.homePage {
    overflow: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  video.vh-hero {
    position: absolute;
    top: 0;
    left: 0;
  }
}

@media (max-width: 767px) {
  .read-more-insight{
    margin-bottom: 15px;
  }
  .homePage .content-insights {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-auto-rows: 400px;
    grid-gap: 20px;
  }
  .content-insights {
    display: block;
  }
  .fullpage {
    display: block !important;
  }
  video.vh-hero {
    height: 500px;
    object-fit: cover;
  }
  .content-logos {
    justify-content: center;
    padding: 10px 20px;
    margin-bottom: 46px;
  }
  .content-logos a.logo {
    height: auto;
  }
  main.homePage {
    overflow: unset;
    height: 100%;
  }
  .homePage .fullpage,
  .homePage .portf-col {
    height: 100%;
  }
  .hero-image h1.title-home {
    width: 100%;
    font-size: 35px;
    line-height: 49px;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    letter-spacing: -2px;
  }
  .content-hero img {
    max-width: 100%;
    object-fit: contain;
    padding: 6px;
  }
  .our-portfolio,
  .partner-col {
    padding: 0;
    height: 100%;
  }
  .partner-col {
    justify-content: flex-start;
  }
  .partner-together .partner-col {
    padding: 0;
  }
  .our-portfolio .our-portfolio-content,
  .partner-together .partner-col .col-12 {
    text-align: center;
    padding: 90px 40px 20px 40px;
  }
  h2.title-secundary,
  h2.title-secundary span {
    width: 100%;
    font-size: 35px;
    text-align: center;
    line-height: 39px;
  }
  p.text-medium.text-portfolio {
    text-align: center;
    margin: 15px 0 0 0;
  }
  .text-partner {
    width: 100%;
  }
  .content-portfolio {
    height: auto !important;
  }
  .content-portfolio .portfolio {
    height: 500px !important;
    margin: 0 0 20px 0;
    background-position: center top;
  }
  .content-portfolio .portfolio:nth-child(3) {
    margin: 0;
  }
  .partner-img {
    width: 100% !important;
  }
  .container-homepage,
  .hero-container,
  .hero-image {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .text-partner {
    margin: 15px 0 30px 0;
  }
  .partner-together img {
    height: 100%;
    object-fit: contain;
  }
}
</style>
