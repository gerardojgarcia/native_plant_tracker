<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "AppFeatures",
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      features: [
        {
          id: 1,
          title: "Composting",
          description:
            "Collect a mix of brown and green materials, such as dry leaves and kitchen scraps, and add them to your compost bin or pile.",
          cardicon: "fa-solid fa-recycle",
        },

        {
          id: 2,
          title: "Foraging",
          description:
            "Monitor and maintain the compost, keeping it moist and well-aerated to help the microbes break down the organic matter.",
          cardicon: "fa-solid fa-bowl-food",
        },
        {
          id: 3,
          title: "Garden Design",
          description:
            "Use the finished compost as a natural fertilizer and soil amendment for your garden or landscape.",
          cardicon: "fa-solid fa-worm",
        },
      ],
    };
  },
};
</script>

<template>
  <section  
    id="features "
    class="w-full pb-40 flex flex-col items-center text-green-800"
    data-aos="fade-up"
    data-aos-duration="300ms"
  >
    <div>
      <p class="pre-title text-gray-500 text-center text-lg pt-8" data-aos="zoom-in-up">Explore</p>
      <h2 class="text-3xl pb-32 text-center" data-aos="zoom-in-up">
        Find all the information you need.
      </h2>
    </div>

    <div class="feature-card-container flex  flex-col md:flex-row  m-auto">
      <div class="features-card flex flex-col items-center text-center feature-card rounded mb-8 p-6 md:p-16 mx-8 md:space-y-10 shadow-lg hover:shadow-2xl bg-gray-100" data-aos="flip-left" data-aos-duration="1500" v-for="features in features" :key="features.id">
       <!-- <font-awesome-icon :icon="features.cardicon" class="text-3xl text-green-800" /> -->

       

        <strong class="text-3xl">{{ features.title }}</strong>
        <p class="pt-8">{{ features.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.features-card {
  transition: 250ms;
}

.features-card:nth-child() {
  animation-delay: 10ms;
}
</style>
