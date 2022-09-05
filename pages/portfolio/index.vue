<script>
import PortfolioHeader from '@/components/PortfolioHeader.vue';
import SectionColumns from '@/components/SectionColumns.vue';
import PortfolioTitle from '@/components/PortfolioTitle.vue';
import CompanyNews from '@/components/CompanyNews.vue';

export default {
  components: {
    PortfolioHeader,
    SectionColumns,
    PortfolioTitle,
    CompanyNews
  },
  data() {
    return {
      nuro: [
        {
          title: 'Woven Capital Makes Its First Investment, Backing Nuro',
          description: 'Woven Capital, an $800 million global investment fund that supports growth-stage companies in mobility, made an equity investment in Nuro...'
        },
        {
          title: 'TechCrunch: Woven Capital kicks off portfolio with investment in autonomous delivery company Nuro',
          description: 'Woven Capital, the investment arm of Toyota’s innovation-focused subsidiary Woven Planet, has announced an investment into Silicon...'
        }
      ],
      ridecell: [
        {
          title: 'Woven Capital Invests in Ridecell to Accelerate Global Growth in IoT-driven Automation for Mobility and Fleet Businesses',
          description: 'Woven Capital, L.P. today announced that it has made an investment in Ridecell Inc., a leading platform powering digital transformations and IoT...'
        }
      ],
      whill: [
        {
          title: 'WHILL Secures Funding from Woven Capital to Scale Short-Distance Mobility Service Globally',
          description: 'WHILL, Inc., a leading developer and service provider of short-distance mobility, announced today it closed new funding led by a strategic...'
        }
      ]
    }
  }
}
</script>

<template>
  <main>
    <portfolio-header></portfolio-header>
    <section-columns id="nuro">
      <template #left>
        <div class="col-md-6 col-12 border-box p-0 justify-content-start position-sticky vh-100 top-0">
          <img
            class="vh-50 pb-5x w-100 object-cover"
            src="@/assets/image/portfolio/rectangle-414.png"
            alt=""
          />
          <img
            class="vh-50 pt-5x w-100 object-cover"
            src="@/assets/image/portfolio/rectangle-416.png"
            alt=""
          />
        </div>
      </template>
      <template  #right>
        <div class="overflow-y-auto col-md-6 col-12 mt-5 border-box p-5rem pb-0">
          <portfolio-title title="Mountain View, CA, USA" image="nuro.png"></portfolio-title>
          <p class="portfolio-description mb-5">Nuro is the leader in autonomous delivery using robotics to improve everyday life. The company's fleet of on-road vehicles that are fully autonomous and require no human riders are designed to deliver everyday goods to consumers, ranging from groceries to pizzas to prescriptions in a way that is quick, affordable—and most importantly—safe.</p>
          <div class="info-wrapper mb-5">
            <p>“Woven Capital's focus on safe mobility and leading-edge technology, as well as their roots in Toyota, make them an ideal investment partner. Their team has a deep understanding and appreciation of our work to create a real-world, autonomous delivery service. And with their backing, we are excited to shape the future of mobility and improve people's lives.”</p>
          </div>
          <div class="text-center mb-4">
            <h5 class="m-0">Dave Ferguson</h5>
            <p>President and Co-Founder, Nuro</p>
          </div>
          <hr class="mb-4">
          <h5 class="company-new-title mb-4">Company News</h5>
          <company-news v-for="(item, index) in nuro" :key="index" :companyInfo="item"></company-news>
        </div>
      </template>
    </section-columns >
    <section-columns id="ridecell">
      <template #left>
        <div class="col-md-6 col-12 border-box p-0 justify-content-start position-sticky vh-100 top-0">
          <img
            class="vh-50 pb-5x w-100 object-cover"
            src="@/assets/image/portfolio/rectangle-580.png"
            alt=""
          />
          <img
            class="vh-50 pt-5x w-100 object-cover"
            src="@/assets/image/portfolio/rectangle-581.png"
            alt=""
          />
        </div>
      </template>
      <template  #right>
        <div class="overflow-y-auto col-md-6 col-12  border-box p-5rem pb-0">
          <portfolio-title title="San Francisco, CA, USA" image="ridecell.png"></portfolio-title>
          <p class="portfolio-description mb-5">Ridecell is a leading platform powering digital transformations and IoT automation for fleet-driven businesses. The company’s IoT-driven automation and mobility platform helps businesses modernize and monetize their fleets by combining data insights with digital vehicle control to turn today’s manual processes into automated workflows, which improves efficiency and control for shared services, motorpool, rental, and logistics fleets.</p>
          <div class="info-wrapper mb-5">
            <p>"This investment with Woven Capital will be highly strategic as Ridecell continues to expand into new markets. We are excited to have Woven Capital as our investor to bring Ridecell automation and mobility innovations that use automation and digital vehicle control to help create safe and secure mobility.”</p>
          </div>
          <div class="text-center mb-4">
            <h5 class="m-0">Aarjav Trivedi</h5>
            <p>Founder & CEO, Ridecell</p>
          </div>
          <hr class="mb-4">
          <h5 class="company-new-title mb-4">Company News</h5>
          <company-news v-for="(item, index) in ridecell" :key="index" :companyInfo="item"></company-news>
        </div>
      </template>
    </section-columns>
    <section-columns id="whill">
      <template #left>
        <div class="col-md-6 col-12 border-box p-0 justify-content-start position-sticky vh-100 top-0">
          <img
            class="vh-50 pb-5x w-100 object-cover"
            src="@/assets/image/portfolio/rectangle-583.png"
            alt=""
          />
          <img
            class="vh-50 pt-5x w-100 object-cover"
            src="@/assets/image/portfolio/rectangle-584.png"
            alt=""
          />
        </div>
      </template>
      <template  #right>
        <div class="overflow-y-auto col-md-6 col-12  border-box p-5rem pb-0">
          <portfolio-title title="Tokyo, Japan" image="whill.png"></portfolio-title>
          <p class="portfolio-description mb-4">It all began with a single user’s voice: “I’ve given up on even going to the grocery store just two blocks away.”</p>
          <p class="portfolio-description mb-4">In 2010, this statement from a close friend was the start of it all. He was a wheelchair user who didn’t like the negative attention he received while out in public. WHILL’s founders knew him to be an amazingly independent, fun-loving, and social person, and they were determined to create a mobility device that would allow him to live his life with confidence and enthusiasm.</p>
          <p class="portfolio-description mb-4">This is why they founded WHILL.</p>
          <p class="portfolio-description mb-4">Since that time, WHILL’s mission has been to transform today’s antiquated power wheelchair and scooter experiences into a new kind of empowering device: an intelligent personal electric vehicle (EV). Named one of TIME’s Best Inventions of 2018, WHILL is reinventing the personal mobility industry by combining state-of-the-art technology with aesthetically pleasing design.</p>
          <hr class="mb-4">
          <h5 class="company-new-title mb-4">Company News</h5>
          <company-news v-for="(item, index) in whill" :key="index" :companyInfo="item"></company-news>
        </div>
      </template>
    </section-columns>
    <section-columns id="lp-investiments">
      <template #left>
        <div class="col-md-6 col-12 border-box p-0 justify-content-start position-sticky vh-100 top-0">
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
      <template  #right>
        <div class="overflow-y-auto col-md-6 col-12  border-box p-5rem pb-0">
          <portfolio-title :icons="false" title="" image="lp-Investments.png"></portfolio-title>
          <p class="portfolio-description mb-5 pb-5">Fund-of-Fund investments in early-stage venture funds that complement our geographic coverage.</p>
          <div class="img-wrapper d-flex justify-content-between mt-5">
            <img src="@/assets/image/portfolio/ballistic.png" alt="">
            <img src="@/assets/image/portfolio/2150.png" alt="">
            <img src="@/assets/image/portfolio/uppartners.png" alt="">
          </div>
        </div>
      </template>
    </section-columns>
  </main>
</template>
<style scoped>
      .info-wrapper {
      border-left : 3px solid var(--bg--primary);
      padding-left: 2rem;
    }

    p.portfolio-description {
      font-weight:400;
      font-size:18px;
      line-height: 32px;
    }

    .info-wrapper p {
      font-size: 18px;
      font-weight: 600;
      line-height: 32px;
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
      font-size: 24px;
      line-height: 34px;
      color: #313131;
    }

    .img-wrapper img {
      width: 30%;
    }
</style>
