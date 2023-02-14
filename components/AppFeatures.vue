<script>
export default {
  name: "AppFeatures",

  data(){
    return {
      features: [
        {
          id: 1,
          title: "Composting",
          description: 'Collect a mix of brown and green materials, such as dry leaves and kitchen scraps, and add them to your compost bin or pile.',

        },

        {
          id: 2,
          title: "Foraging",
          description: 'Monitor and maintain the compost, keeping it moist and well-aerated to help the microbes break down the organic matter.',


        },
        {
          id: 3,
          title: "Garden Design",
          description: 'Use the finished compost as a natural fertilizer and soil amendment for your garden or landscape.',


        },



      ]

    }
  }

}
</script>

<template>
  <section id="features " class="w-full pb-40 flex flex-col items-center text-green-800" data-aos="fade-up" data-aos-duration="300ms">
  <p class="pre-title text-gray-500 text-lg pt-8" data-aos="zoom-in-up">Explore</p>
<h2 class="text-3xl pb-32" data-aos="zoom-in-up">Find all the information you need.</h2>

    <div class=" flex flex-col md:grid grid-cols-3 feature-card-container m-auto">

      <div class=" features-card flex flex-col items-center text-center feature-card rounded mb-8 p-6 md:p-16 mx-8 space-y-8 shadow-lg hover:shadow-2xl  bg-gray-100" data-aos="flip-left" data-aos-duration="1500" v-for="feature in features">
        <img :src="feature.icon" alt="icon" class="feature-icon  bg-gray-200 ">
            <strong class="text-xl">{{feature.title}}</strong>
          <p>{{feature.description}}</p>

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

.features-card:nth-child(){
    animation-delay: 10ms;

}



</style>
