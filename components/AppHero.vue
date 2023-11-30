<script>
import AppVideoButton from "./AppVideoButton";
export default {
  name: "AppHero",
  components: { AppVideoButton },
  props: {
    heroTitle: String,
    heroSubtitle: String,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          src: "/img/california_poppy_watercolor.webp",
          alt: "image of california poppy",
        },
        {
          id: 2,
          src: "/img/hummingbird_sage_watercolor.webp",
          alt: "image of hummingbird sage",
        },
        {
          id: 3,
          src: "/img/monkey_flower_watercolor.webp",
          alt: "image of sticky monkeyflower",
        },
        {
          id: 4,
          src: "/img/redflower.webp",
          alt: "image of california poppy",
        },
        {
          id: 5,
          src: "/img/white-flower.webp",
          alt: "image of california poppy",
        },
        {
          id: 6,
          src: "/img/fuschia.webp",
          alt: "image of california poppy",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="hero" class="flex flex-col md:grid grid-cols-2 px-16 md:h-screen">
    <div
      class="hero-left-container green-text md:pt-52 md:pl-18 "
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <h1 class="text-6xl mb-16">{{ heroTitle }}</h1>
      <p class="title md:pr-80 text-xl font-bold ">
        {{ heroSubtitle }}
      </p>

      <div class="flex md:flex-row flex-col justify-between md:w-1/2 items-center">
        <AppButton link="Learn More" to="species" class="mt-24" />
        <AppVideoButton title="Watch Video" to="https://www.youtube.com/results?search_query=foraging "  />
      </div>
    </div>
    <div
      class="hero-right-container grid grid-cols-3 self-center pt-8"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <div class="images hidden md:flex m-4 overflow-hidden" v-for="image in images" :key="image.src">
        <nuxt-img
          class="image rounded-xl shadow-lg border-green-700 hover:shadow-2xl"
          :src="image.src"
          :alt="image.alt"
          data-aos="zoom-in-up"
          sizes="sm:100vw md:100vw lg:100vw"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.green-text {
  color: #2d583a;
}

.images:nth-child(2) {
  transform: translateY(-4rem);
}

.images:nth-child(5) {
  transform: translateY(-4rem);
}

.image {
  cursor: pointer;
  transition: all ease-in-out;
  transition-duration: 300ms;
}

.image:hover {
  transform: scale(1);
}
</style>
