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
    };
  },
  head: {
    title: "Portfolio - Woven Capital",
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
        })
      );
    });

    dataInfo = await Promise.all(promiseArray);

    dataInfo = dataInfo.map((element) => {
      return element.items;
    });

    return {
      portfoliosCont: portf.items,
      investmentsCont: investmentsC.items,
      insightsPortf: dataInfo,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<template>
  <main class="portfolio">
    <portfolio-header></portfolio-header>
    <template v-for="(portfolio, index) in portfoliosCont">
      <section-columns
        class="fullpage"
        :id="portfolio.fields.slug"
        :key="index"
        :title="portfolio.fields.title"
      >
        <template #left>
          <div
            class="col-md-6 col-12 border-box p-0 justify-content-start vh-100 col-sticky"
          >
            <img
              class="vh-50 pb-5x w-100 object-cover"
              :src="portfolio.fields.mediaTop.fields.file.url"
              alt=""
            />
            <img
              class="vh-50 pt-5x w-100 object-cover"
              :src="portfolio.fields.mediaBottom.fields.file.url"
              alt=""
            />
          </div>
        </template>
        <template #right>
          <div
            class="overflow-y-auto col-md-6 col-12 border-box p-7 col-content"
          >
            <portfolio-title
              :title="portfolio.fields.location"
              :image="portfolio.fields.logoblack.fields.file.url"
              :linkWeb="portfolio.fields.link"
              :linkLinkedin="portfolio.fields.linkedinUrl"
            ></portfolio-title>

            <p class="portfolio-description mb-5 text-small">
              {{ portfolio.fields.content }}
            </p>
            <div class="info-wrapper mb-5 text-small">
              <p>
                {{ portfolio.fields.testimonial }}
              </p>
            </div>
            <div class="text-center mb-4">
              <h5 class="m-0">{{ portfolio.fields.authorTestimonial }}</h5>
              <p>{{ portfolio.fields.designationTestimonial }}</p>
            </div>

            <hr class="mb-4" />

            <template v-if="insightsPortf[index].length > 0">
              <h5 class="company-new-title mb-4 text-medium">Company News</h5>

              <company-news
                v-for="(item, index) in insightsPortf[index]"
                :key="index"
                :companyInfo="item"
              ></company-news>
            </template>
          </div>
        </template>
      </section-columns>
    </template>

    <section-columns id="lp-investiments" class="fullpage" title="LP Investments">
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
        <div class="overflow-y-auto col-md-6 col-12 border-box p-7 col-content">
          <title-secundary
            class="justify-content-start"
            :titleH2="investmentsCont[0].fields.title"
            spanTitleH2=""
          ></title-secundary>
          <p class="portfolio-description text-small">
            {{ investmentsCont[0].fields.description }}
          </p>
          <div class="img-wrapper-logo">
            <template v-for="(logo, index) in investmentsCont[0].fields.logos">
              <img :key="index" :src="logo.fields.file.url" alt="" />
            </template>
          </div>
        </div>
      </template>
    </section-columns>
  </main>
</template>
<style scoped>

main.portfolio{
  overflow: hidden;
  height: 100vh;
      display: flex;
    flex-direction: column;
    align-items: center;
}
.fullpage {
  height: 100vh;
  width: 100%;
  position: relative;
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
@media (min-width: 768px) and (max-width:1024px){
main.portfolio{
      margin-top: 75px;
    height: calc(100vh - 75px);
}
}

@media (max-width: 767px) {
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
  main.portfolio{
    overflow: unset;
    height: 100%;
  }
  .fullpage{
    height: 100%;
  }
}
</style>
