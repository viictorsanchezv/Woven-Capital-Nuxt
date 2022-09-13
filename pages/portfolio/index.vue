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
      nuro: [
        {
          title: "Woven Capital Makes Its First Investment, Backing Nuro",
          description:
            "Woven Capital, an $800 million global investment fund that supports growth-stage companies in mobility, made an equity investment in Nuro...",
        },
        {
          title:
            "TechCrunch: Woven Capital kicks off portfolio with investment in autonomous delivery company Nuro",
          description:
            "Woven Capital, the investment arm of Toyota’s innovation-focused subsidiary Woven Planet, has announced an investment into Silicon...",
        },
      ],
      ridecell: [
        {
          title:
            "Woven Capital Invests in Ridecell to Accelerate Global Growth in IoT-driven Automation for Mobility and Fleet Businesses",
          description:
            "Woven Capital, L.P. today announced that it has made an investment in Ridecell Inc., a leading platform powering digital transformations and IoT...",
        },
      ],
      whill: [
        {
          title:
            "WHILL Secures Funding from Woven Capital to Scale Short-Distance Mobility Service Globally",
          description:
            "WHILL, Inc., a leading developer and service provider of short-distance mobility, announced today it closed new funding led by a strategic...",
        },
      ],
      portfoliosCont: {},
      investmentsCont: {},
      slide: 0,
      sliding: null,
    };
  },
  async asyncData() {
    const portf = await client.getEntries({
      content_type: "portfolioNwc",
      order: "fields.order",
    });

    const investmentsC = await client.getEntries({
      content_type: "investmentsNwc",
    });

    return { portfoliosCont: portf.items, investmentsCont: investmentsC.items };
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
  <main>
    <portfolio-header></portfolio-header>
    <template v-for="(portfolio, index) in portfoliosCont">
      <section-columns
        class="page-section"
        :id="'partner=' + portfolio.fields.title"
        :key="index"
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
            <h5 class="company-new-title mb-4 text-medium">Company News</h5>
            <company-news
              v-for="(item, index) in nuro"
              :key="index"
              :companyInfo="item"
            ></company-news>
          </div>
        </template>
      </section-columns>
    </template>

    <section-columns id="lp-investiments">
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
                <b-carousel-slide
                  :key="index"
                >
                 <template #img>
                  <img :src="gallery.fields.file.url" alt="" class="vh-50 image-slide d-block w-100">
       
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

.image-slide{
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
  margin-top: 3rem;
}
@media (max-width: 768px) {
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
}
</style>
