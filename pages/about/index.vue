<script setup>
import { onMounted, ref } from "vue";
import TitleH2 from "@/components/TitleH2.vue";
import SectionColumns from "@/components/SectionColumns.vue";
import ImageCard from "@/components/ImageCard.vue";

const imageCardInfo = ref([]);
onMounted(() => {
  imageCardInfo.value.push({
    image: "/about/IA.png",
    text: "Artificial Intelligence",
    imageAlt: "Artificial Intelligence",
  });

  imageCardInfo.value.push({
    image: "/about/automation.png",
    text: "Automation",
    imageAlt: "Automation",
  });

  imageCardInfo.value.push({
    image: "/about/connectivity.png",
    text: "Connectivity",
    imageAlt: "Connectivity",
  });

  imageCardInfo.value.push({
    image: "/about/data-analytics.png",
    text: "Data & Analytics",
    imageAlt: "Data & Analytics",
  });

  imageCardInfo.value.push({
    image: "/about/mobility.png",
    text: "Mobility",
    imageAlt: "Mobility",
  });

  imageCardInfo.value.push({
    image: "/about/woven-city.png",
    text: "Woven City",
    imageAlt: "Woven City",
  });
});
</script>

<template>
  <main>
    <section-columns class="">
      <template #left>
        <div class="col-md-6 col-12 border-box d-flex justify-content-center flex-column template-col">
          <h1 class="mb-4">Our <span class="text-green h1">Mission</span></h1>
          <p class="text-sect">
            We are in the business of investing in the future of mobility and
            driving innovation in adjacent industries by offering resources and
            expertise to entrepreneurs and visionaries across core technologies
            and disciplines.
          </p>
          <p class="text-sect">
            As the $800 million investment arm of the
            <span class="text-green">Woven Planet</span>, founded by
            <span class="text-green">Toyota Motor Corporation</span>, our aim is
            to broaden the group’s global reach and accelerate innovation by
            investing in exceptional growth-stage ventures.
          </p>
          <p class="text-sect">
            Woven Capital and Woven Planet share a common goal: discover and
            develop groundbreaking technologies that will help people all over
            the world lead happier, healthier, richer lives.
          </p>
          <p class="text-sect">
            We invite you to partner with us and gain access to the world’s
            largest platform for mobility.
          </p>
        </div>
      </template>
      <template #right>
        <div class="col-md-6 col-12 border-box p-0 ">
          <img
            class="vh-50 pb-5x w-100 object-fill"
            src="@/assets/image/about/rectangle-401.png"
            alt=""
          />
          <img
            class="vh-50 pt-5x w-100 object-fill"
            src="@/assets/image/about/rectangle-442.png"
            alt=""
          />
        </div>
      </template>
    </section-columns>

    <section-columns class="mb-5 align-items-center">
      <template #left>
        <div class="col-md-6 col-12 border-box p-0">
          <img
            class="vh-50 pb-5x w-100 object-fill"
            src="@/assets/image/about/Rectangle-621.png"
            alt=""
          />
          <img
            class="vh-50 pt-5x w-100 object-fill"
            src="@/assets/image/about/Rectangle-371.png"
            alt=""
          />
        </div>
      </template>
      <template #right>
        <div class="col-md-6 col-12 border-box justify-content-start template-col">
          <title-h2 class="mb-4" titleH2="Capital is only the " spanTitleH2="starting point"></title-h2>
          <p class="text-sect">
            What gets us up in the morning? Building up and investing in
            technologies that will drive the future. We look years ahead at what
            we think will unfold, but also stop to ask, “What can we build now?”
          </p>
          <p class="text-sect">
            When we back a startup, we don’t write a check and step away. We
            take an active role by connecting portfolio companies to our global
            network and in-house experts to refine ideas, provide guidance,
            build prototypes and accelerate global scaleup.
          </p>
          <p class="text-sect">
            Through open collaboration and investment, combined with Woven
            Planet’s own innovation projects, we hope to realize the promise of
            technology in solving the world’s most difficult challenges.
          </p>
        </div>
      </template>
    </section-columns>

    <section class="mt-5 mb-5 row m-0">
      <div class="text-center col-12 my-5">
        <title-h2 class="mb-4 justify-content-center" titleH2="We see tomorrow, " spanTitleH2="today"></title-h2>
        <p class="text-sect">
          Let’s set our sights beyond the horizon to create a bright future
          through technology. <br />Key areas of development include:
        </p>
      </div>

      <image-card
        v-for="(image, index) in imageCardInfo"
        :key="index"
        :imageInfo="image"
        class="col-md-4 text-center my-5"
      ></image-card>
    </section>

    <section-columns >
      <template #left>
        <div class="col-md-6 col-12 mt-5 pt-5 border-box template-col justify-content-start">
          <title-h2 class="mb-5 justify-content-start" titleH2="Our " spanTitleH2="Commitment"></title-h2>
          <p class="mb-2 mt-5 text-comm"> 
            “We engage with entrepreneurs and innovators in an array of disciplines and give them the resources they need to take a chance and change the world. This requires ambition. It requires imagination. It requires the courage to look past the possible and see a better world and make it real. This is our commitment.”
          </p>
          <p class="mb-0 author-sect">
            George Kellerman
          </p>
          <p class="author-sect">
            Managing Director, Woven Capital
          </p>
        </div>
      </template>
      <template #right>
        <div class="col-md-6 col-12 border-box p-0">
          <img
            class="vh-100 w-100 ima-comm"
            src="@/assets/image/about/Rectangle-405.png"
            alt=""
          />
        </div>
      </template>
    </section-columns>
  </main>
</template>
<style scoped>
  .vh-50 {
    height: 50vh;
  }

  .border-box {
    box-sizing: border-box;
  }

  .object-fill {
    object-fit: fill;
  }
  img.ima-comm{
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  p,
  p > span {
    font-size: 1.2rem;
    line-height: 32px;
  }

  .text-green {
    color: var(--bg--primary);
  }

  .pr-10 {
    padding-right: 6rem;
  }
  .pr-14 {
    padding-right: 7rem;
  }
  .pt-5x{
    padding-top: 5px;
  }
  .pb-5x{
    padding-bottom: 5px;
  }
  .template-col{
    padding: 3%;
  }
  .template-col h1{
    font-size: 45px;
    font-weight: 500;
    font-style: normal;
    line-height: 51.75px;
    letter-spacing: -2px;
  }
  p.text-sect, .author-sect{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: var(--color--secondary);
  }
  p.text-comm{
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 38px;
      color: var(--color--secondary);
    }
</style>