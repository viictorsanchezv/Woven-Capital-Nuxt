<script>
import titleSecundary from "@/components/TitleSecundary.vue";
import SectionColumns from "@/components/SectionColumns.vue";
import ImageCard from "@/components/ImageCard.vue";
export default {
  data() {
    return {
      imageCardInfo: [],
    };
  },
  head: {
    title: "About - Woven Capital",
  },
  components: {
    titleSecundary,
    SectionColumns,
    ImageCard,
  },
  created() {
    this.imageCardInfo.push({
      image: "/about/IA.png",
      text: "Artificial Intelligence",
      imageAlt: "Artificial Intelligence",
    });

    this.imageCardInfo.push({
      image: "/about/automation.png",
      text: "Automation",
      imageAlt: "Automation",
    });

    this.imageCardInfo.push({
      image: "/about/connectivity.png",
      text: "Connectivity",
      imageAlt: "Connectivity",
    });

    this.imageCardInfo.push({
      image: "/about/data-analytics.png",
      text: "Data & Analytics",
      imageAlt: "Data & Analytics",
    });

    this.imageCardInfo.push({
      image: "/about/mobility.png",
      text: "Mobility",
      imageAlt: "Mobility",
    });

    this.imageCardInfo.push({
      image: "/about/woven-city.png",
      text: "Woven City",
      imageAlt: "Woven City",
    });
  },
};
</script>

<template>
  <main>
    <section-columns class="">
      <template #left>
        <div class="col-md-6 col-12 border-box p-7">
          <h1 class="mb-4 h1-45">
            Our <span class="text-green h1-45">Mission</span>
          </h1>
          <p class="text-sect text-small">
            We are in the business of investing in the future of mobility and
            driving innovation in adjacent industries by offering resources and
            expertise to entrepreneurs and visionaries across core technologies
            and disciplines.
          </p>
          <p class="text-sect text-small">
            As the $800 million investment arm of the
            <a
              href="https://www.woven-planet.global/"
              class="text-green text-small"
              >Woven Planet</a
            >, founded by
            <a href="https://global.toyota/en/" class="text-green text-small"
              >Toyota Motor Corporation</a
            >, our aim is to broaden the group’s global reach and accelerate
            innovation by investing in exceptional growth-stage ventures.
          </p>
          <p class="text-sect text-small">
            Woven Capital and Woven Planet share a common goal: discover and
            develop groundbreaking technologies that will help people all over
            the world lead happier, healthier, richer lives.
          </p>
          <p class="text-sect text-small">
            We invite you to partner with us and gain access to the world’s
            largest platform for mobility.
          </p>
        </div>
      </template>
      <template #right>
        <div class="col-md-6 col-12 border-box p-0 section-sticky vh-100 top-0">
          <img
            class="vh-50 pb-5x w-100 object-cover object-center"
            src="@/assets/image/about/rectangle-401.png"
            alt=""
          />
          <img
            class="vh-50 pt-5x w-100 object-cover object-center"
            src="@/assets/image/about/rectangle-442.png"
            alt=""
          />
        </div>
      </template>
    </section-columns>

    <section-columns class="m-0">
      <template #left>
        <div
          class="col-md-6 col-12 border-box p-0 justify-content-start section-sticky vh-100 top-0"
        >
          <video
            class="w-100 object-cover vh-50"
            src="@/assets/video/overview.mp4"
            autoplay="false"
            muted="false"
            controls
          ></video>
          <img
            class="vh-50 pt-5x w-100 object-cover object-center"
            src="@/assets/image/about/Rectangle-371.png"
            alt=""
          />
        </div>
      </template>
      <template #right>
        <div class="col-md-6 col-12 border-box p-7">
          <title-secundary
            class="mb-4 limit-width"
            titleH2="Capital is only the "
            spanTitleH2="starting point"
          ></title-secundary>
          <p class="text-sect text-small">
            What gets us up in the morning? Building up and investing in
            technologies that will drive the future. We look years ahead at what
            we think will unfold, but also stop to ask, “What can we build now?”
          </p>
          <p class="text-sect text-small">
            When we back a startup, we don’t write a check and step away. We
            take an active role by connecting portfolio companies to our global
            network and in-house experts to refine ideas, provide guidance,
            build prototypes and accelerate global scaleup.
          </p>
          <p class="text-sect text-small">
            Through open collaboration and investment, combined with Woven
            Planet’s own innovation projects, we hope to realize the promise of
            technology in solving the world’s most difficult challenges.
          </p>
        </div>
      </template>
    </section-columns>

    <section class="m-3p row p-6p ">
      <div class="text-center col-12 mt-0 mb-5 ml-0 mr-0 p-0">
        <title-secundary
          class="mb-4 justify-content-center"
          titleH2="We see tomorrow, "
          spanTitleH2="today"
        ></title-secundary>
        <p class="text-sect text-small">
          Let’s set our sights beyond the horizon to create a bright future
          through technology. <br />Key areas of development include:
        </p>
      </div>
      <image-card
        v-for="(image, index) in imageCardInfo"
        :key="index"
        :imageInfo="image"
        class="col-md-4 text-center image-card"
      ></image-card>
    </section>

    <section-columns>
      <template #left>
        <div class="col-md-6 col-12 m-0 border-box p-7">
          <title-secundary
            class="mb-5 justify-content-start p-0"
            titleH2="Our "
            spanTitleH2="Commitment"
          ></title-secundary>
          <p class="mb-2 mt-5 text-comm text-medium">
            “We engage with entrepreneurs and innovators in an array of
            disciplines and give them the resources they need to take a chance
            and change the world. This requires ambition. It requires
            imagination. It requires the courage to look past the possible and
            see a better world and make it real. This is our commitment.”
          </p>
          <p class="mb-0 author-sect text-small">George Kellerman</p>
          <p class="author-sect text-small">Managing Director, Woven Capital</p>
        </div>
      </template>
      <template #right>
        <div class="col-md-6 col-12 border-box p-0 section-sticky top-0 commitment">
          <img
            class=" w-100 ima-comm object-cover object-top"
            src="@/assets/image/about/Rectangle-405.png"
            alt=""
          />
        </div>
      </template>
    </section-columns>
  </main>
</template>

<style scoped>
.ima-comm, 
.commitment{
  height: 100vh;
}
p.text-sect,
.author-sect,
p.text-comm {
  color: var(--color--secondary);
}
.object-top {
  object-position: top;
}
.object-center {
  object-position: center;
}
.m-6p {
  margin: 6% 0;
}
.m-3p {
  margin: 3% 0;
}
.p-6p {
  padding: 6%;
}
.image-card {
  margin: 3rem 0;
}
.section-sticky {
  position: sticky;
}
a:hover {
  color: var(--bg--primary);
}
@media (max-width: 767px) {
  .section-sticky {
    order: 2;
  }
  .image-card {
    margin: 0;
    height: 200px;
  }
  .m-6p {
    margin: 0;
    padding: 7%;
  }
  .section-sticky {
    position: relative;
  }
  .ima-comm, 
  .commitment{
    height: 50vh;
  }
  .p-6p{
    padding: 40px;
    margin: 0;
  }
}
</style>
