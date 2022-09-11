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
    };
  },
  async asyncData() {
    const portf = await client.getEntries({
      content_type: "portfolioNwc",
      order: "fields.order",
    });

    return { portfoliosCont: portf.items };
  },
};
</script>

<template>
  <main>
    <portfolio-header></portfolio-header>
    <template v-for="(portfolio, index) in portfoliosCont">
      <section-columns :id="'partner='+portfolio.fields.title" :key="index">
        <template #left>
          <div
            class="col-md-6 col-12 border-box p-0 justify-content-start position-sticky vh-100 top-0"
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
          <div class="overflow-y-auto col-md-6 col-12 mt-5 border-box p-7 pb-2">
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
          class="col-md-6 col-12 border-box p-0 justify-content-start position-sticky vh-100 top-0"
        >
          <img
            class="vh-50 pb-5x w-100 object-cover"
            src="@/assets/image/portfolio/rectangle-619.png"
            alt=""
          />
          <img
            class="vh-50 pt-5x w-100 object-cover"
            src="@/assets/image/portfolio/rectangle-619.png"
            alt=""
          />
        </div>
      </template>
      <template #right>
        <div class="overflow-y-auto col-md-6 col-12 border-box p-7 pb-2">
          <img src="@/assets/image/portfolio/logo/lp-Investments.png" alt="" />
          <p class="portfolio-description mb-5 pb-5 text-small">
            Fund-of-Fund investments in early-stage venture funds that
            complement our geographic coverage.
          </p>
          <div class="img-wrapper d-flex justify-content-between mt-5">
            <img src="@/assets/image/portfolio/ballistic.png" alt="" />
            <img src="@/assets/image/portfolio/2150.png" alt="" />
            <img src="@/assets/image/portfolio/uppartners.png" alt="" />
          </div>
        </div>
      </template>
    </section-columns>
  </main>
</template>
<style scoped>
.info-wrapper {
  border-left: 3px solid var(--bg--primary);
  padding-left: 2rem;
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

.img-wrapper img {
  width: 30%;
}
</style>
