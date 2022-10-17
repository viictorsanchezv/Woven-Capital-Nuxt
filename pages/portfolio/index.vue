<script>
import PortfolioHeader from "@/components/PortfolioHeader.vue";
import SectionColumns from "@/components/SectionColumns.vue";
import PortfolioTitle from "@/components/PortfolioTitle.vue";
import CompanyNews from "@/components/CompanyNews.vue";
import client from "@/plugins/contentful.js";

export default {
  components: {
    PortfolioHeader,
    SectionColumns,
    PortfolioTitle,
    CompanyNews,
  },
  data() {
    return {
      portfoliosCont: {},
      investmentsCont: {},
      insightsPortf: {},
      slide: 0,
      sliding: null,
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      sectionOffsetO: {},
      dirScroll: 0,
      activeScrollUp: false,
      activeScrollDown: false,
      mousePoint: 0,
      metaContent: {},
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
  async asyncData() {
    let dataInfo = [];
    const promiseArray = [];

    const portf = await client.getEntries({
      content_type: "portfolioNwc",
      order: "fields.order",
    });

    const investmentsC = await client.getEntries({
      content_type: "investmentsNwc",
    });

    portf.items.forEach((portfolio) => {
      promiseArray.push(
        client.getEntries({
          content_type: "insightsNwc",
          "fields.company": portfolio.fields.slug,
          limit: "2",
          order: "-fields.publishDate",
        })
      );
    });

    dataInfo = await Promise.all(promiseArray);

    dataInfo = dataInfo.map((element) => {
      return element.items;
    });

    const metaPage = await client.getEntries({
      content_type: "metaPage",
      "fields.slugPage": "portfolio",
    });

    return {
      portfoliosCont: portf.items,
      investmentsCont: investmentsC.items,
      insightsPortf: dataInfo,
      metaContent: metaPage.items,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    hideFooter() {
      let footerS = document.getElementById("footer-container");

      let sections = document.getElementsByClassName("fullpage");
      let sectionsLength = sections.length;

      if (this.activeSection == this.offsets.length - 1) {
         setTimeout(() => {
          footerS.style.display = "block";
        }, 1000);
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
      let elemtInt =
        document.getElementsByClassName("section-content")[this.activeSection];
      let elemtExt =
        document.getElementsByClassName("col-content")[this.activeSection];
      if (
        e.wheelDelta < -30 &&
        !this.inMove &&
        elemtExt.offsetHeight + elemtExt.scrollTop >= elemtInt.scrollHeight - 1
      ) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove && elemtExt.scrollTop <= 0) {
        this.moveDown();
      } else if (
        e.wheelDelta < 0 &&
        !this.inMove &&
        elemtExt.offsetHeight + elemtExt.scrollTop >= elemtInt.scrollHeight - 1
      ) {
        this.moveDown();
      } else if (e.wheelDelta > 0 && !this.inMove && elemtExt.scrollTop <= 0) {
        this.moveUp();
      }
      setTimeout(() => {
        e.preventDefault();
      }, 100);
      return false;
    },
    handleMouseWheelDOM: function (e) {
      let elemtInt =
        document.getElementsByClassName("section-content")[this.activeSection];
      let elemtExt =
        document.getElementsByClassName("col-content")[this.activeSection];

      if (
        e.detail > 0 &&
        !this.inMove &&
        elemtExt.offsetHeight + elemtExt.scrollTop >= elemtInt.scrollHeight - 1
      ) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove && elemtExt.scrollTop <= 0) {
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
    handleSection(value) {
      this.activeSection = value;
    },
    touchStart(e) {
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },
    mouseUpHandler(e) {
      if (this.mousePoint > e.pageY) {
        this.moveUp();
      } else if (this.mousePoint < e.pageY) {
        this.moveDown();
      }
      e.preventDefault();
    },
    mouseDownHandler(e) {
      this.mousePoint = e.pageY;
      e.preventDefault();
    },
    endedVideo(event) {
      let video = event.srcElement;

      video.classList.add("remove-video");
      video.nextSibling.nextElementSibling.classList.remove("remove-video");
    },
  },
  mounted() {
    this.calculateSectionOffsets();
    this.hideFooter();

    if (this.$route.hash == "#nuro") {
      this.activeSection = 0;
    } else if (this.$route.hash == "#ridecell") {
      this.activeSection = 1;
    } else if (this.$route.hash == "#whill") {
      this.activeSection = 2;
    }

    document.getElementById("footer-container").style.display = "none";

    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel); // Other browsers
    window.addEventListener("touchstart", this.touchStart, { passive: false }); // mobile devices
    window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices

    document.addEventListener("mouseup", this.mouseUpHandler);
    document.addEventListener("mousedown", this.mouseDownHandler);
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.removeEventListener("touchstart", this.touchStart); // mobile devices
    window.removeEventListener("touchmove", this.touchMove); // mobile devices
    document.removeEventListener("mouseup", this.mouseUpHandler);
    document.removeEventListener("mousedown", this.mouseDownHandler);
  },
};
</script>

<template>
  <main class="portfolio">
    <div class="container-portfolio">
      <!-- <portfolio-header
        :offsets="offsets"
        :activeSection="activeSection"
        v-on:sectActive="handleSection"
      >
      </portfolio-header> -->

      <template v-for="(portfolio, index) in portfoliosCont">
        <Transition :key="index" mode="out-in">
          <section-columns
            class="fullpage"
            :class="{ active: activeSection == index }"
            :id="portfolio.fields.slug"
            :title="portfolio.fields.title"
            v-show="activeSection == index"
          >
            <template #left>
              <div
                class="col-md-6 col-12 border-box p-0 justify-content-start vh-100 col-sticky"
              >
                <img
                  class="vh-50 pt-0 w-100 object-cover pb-5x"
                  :src="portfolio.fields.mediaTop.fields.file.url"
                  alt=""
                />
                <img
                  v-if="
                    portfolio.fields.mediaBottom.fields.file.contentType ==
                    'image/png'
                  "
                  class="vh-50 w-100 object-cover"
                  :src="portfolio.fields.mediaBottom.fields.file.url"
                  alt=""
                />
                <template
                  v-else-if="
                    portfolio.fields.mediaBottom.fields.file.contentType ==
                    'video/mp4'
                  "
                >
                  <video
                    class="w-100 object-cover vh-50 video-poster"
                    autoplay="false"
                    controls
                    @ended="endedVideo($event)"
                    :src="portfolio.fields.mediaBottom.fields.file.url"
                    :poster="portfolio.fields.posterVideo.fields.file.url"
                  ></video>
                  <img
                    class="vh-50 w-100 object-cover img-poster remove-video"
                    :src="portfolio.fields.posterVideo.fields.file.url"
                    alt=""
                  />
                </template>
              </div>
            </template>
            <template #right>
              <div
                class="overflow-y-auto col-md-6 col-12 border-box p-0 col-content w-100"
              >
                <div class="p-14 m-0 section-content">
                  <portfolio-title
                    :title="portfolio.fields.location"
                    :image="portfolio.fields.logoblack.fields.file.url"
                    :linkWeb="portfolio.fields.link"
                    :linkLinkedin="portfolio.fields.linkedinUrl"
                  ></portfolio-title>
                  <div
                    v-if="portfolio.fields.content"
                    v-html="$md.render(portfolio.fields.content)"
                    class="post_insight-content text-small"
                  ></div>
                  <div class="info-wrapper mb-5 text-small">
                    <p>
                      {{ portfolio.fields.testimonial }}
                    </p>
                  </div>
                  <div class="text-center mb-4">
                    <h5 class="m-0">
                      {{ portfolio.fields.authorTestimonial }}
                    </h5>
                    <p>{{ portfolio.fields.designationTestimonial }}</p>
                  </div>

                  <hr class="mb-4" />

                  <template v-if="insightsPortf[index].length > 0">
                    <h5 class="company-new-title mb-4 text-medium">
                      Company News
                    </h5>

                    <company-news
                      v-for="(item, index) in insightsPortf[index]"
                      :key="index"
                      :companyInfo="item"
                    ></company-news>
                  </template>
                </div>
              </div>
            </template>
          </section-columns>
        </Transition>
      </template>

      <Transition mode="out-in">
        <section-columns
          id="lp-investiments"
          class="fullpage"
          :class="{ active: activeSection == this.offsets.length - 1 }"
          title="LP Investments"
          v-show="activeSection == offsets.length - 1"
        >
          <template #left>
            <div
              class="col-md-6 col-12 border-box p-0 justify-content-start col-sticky vh-100"
            >
              <img
                class="vh-50 pb-5x w-100 object-cover"
                :src="investmentsCont[0].fields.coverImage.fields.file.url"
                alt=""
              />

              <div class="vh-50 section-carousel">
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  style="text-shadow: 1px 1px 2px #333"
                  class="w-100 h-100"
                  img-width="100"
                  img-height="100"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <template
                    v-for="(gallery, index) in investmentsCont[0].fields
                      .galleryImages"
                  >
                    <b-carousel-slide :key="index">
                      <template #img>
                        <img
                          :src="gallery.fields.file.url"
                          alt=""
                          class="vh-50 image-slide d-block w-100"
                        />
                      </template>
                    </b-carousel-slide>
                  </template>
                </b-carousel>
              </div>
            </div>
          </template>
          <template #right>
            <div
              class="overflow-y-auto col-md-6 col-12 border-box p-0 col-content"
            >
              <div class="p-14 m-0 section-content">
                <title-secundary
                  class="justify-content-start"
                  :titleH2="investmentsCont[0].fields.title"
                  spanTitleH2=""
                ></title-secundary>
                <p class="portfolio-description text-small">
                  {{ investmentsCont[0].fields.description }}
                </p>
                <div class="img-wrapper-logo">
                  <template
                    v-for="(logo, index) in investmentsCont[0].fields.logos"
                  >
                    <img :key="index" :src="logo.fields.file.url" alt="" />
                  </template>
                </div>
              </div>
            </div>
          </template>
        </section-columns>
      </Transition>
    </div>
  </main>
</template>

<style scoped>
.remove-video {
  display: none;
}
.img-poster {
  position: absolute;
  left: 0;
  z-index: 0;
  bottom: 0;
}
.video-poster {
  z-index: 2;
}
@media (min-width: 768px) {
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
  .fullpage {
    opacity: 0;
  }
  .fullpage.active {
    opacity: 1;
  }
}
.fullpage {
  display: block !important;
  z-index: 88;
}
.fullpage.active {
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

.container-portfolio {
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  display: flex;
}

div.p-14 {
  padding: 14%;
}
main.portfolio {
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fullpage {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.image-slide {
  object-fit: cover;
  object-position: top;
}
.portfolio-description {
  margin-bottom: 50px;
}
#lp-investiments .img-wrapper-logo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#lp-investiments .img-wrapper-logo img {
  object-fit: contain;
  width: 33.33%;
  padding: 0 20px 0 0;
  height: 60px;
}

p.portfolio-description {
  font-weight: 400;
}
.info-wrapper {
  border-left: 3px solid var(--bg--primary);
  padding-left: 2rem;
  margin-top: 8px;
}
.info-wrapper p {
  font-weight: 600;
}

div.text-center h5 {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: #313131;
}

div.text-center p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #818181;
}

.company-new-title {
  font-weight: 600;
  color: #313131;
}
.col-sticky {
  position: sticky;
  top: 0;
}
.col-content {
  margin-top: 0;
  overflow-y: auto;
  height: 100%;
}
@media (min-width: 768px) and (max-width: 1024px) {
  main.portfolio {
    margin-top: 75px;
    height: calc(100vh - 75px);
  }
}

@media (max-width: 767px) {
  .container-portfolio {
    display: block;
  }
  .fullpage {
    display: block !important;
    position: relative;
  }
  div.p-14 {
    padding: 60px 40px 40px;
  }
  .col-sticky {
    position: relative;
    top: unset;
    order: 1;
  }
  .col-content {
    order: 2;
    margin: 0;
    padding: 40px;
  }
  #lp-investiments .img-wrapper-logo img {
    width: 50%;
    padding: 20px 0;
    height: 100px;
  }
  main.portfolio {
    overflow: unset;
    height: 100%;
  }
  .fullpage {
    height: 100%;
  }
}
</style>
