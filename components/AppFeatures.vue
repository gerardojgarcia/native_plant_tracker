<script>
export default {
  name: "AppFeatures",

  data(){
    return {
      features: [
        {
          id: 1,
          title: "Something Something",
          description: 'Lorem ipsum dipsum chipsum',


        },

        {
          id: 2,
          title: "Something Something",
          description: 'Lorem ipsum dipsum chipsum',


        },
        {
          id: 3,
          title: "Something Something",
          description: 'Lorem ipsum dipsum chipsum',


        }, {
          id: 4,
          title: "Something Something",
          description: 'Lorem ipsum dipsum chipsum',


        },



      ]

    }
  }

}
</script>

<template>
  <section id="features " class="w-full pb-32 flex flex-col items-center text-green-800" data-aos="fade-up" data-aos-duration="300ms">
  <p class="pre-title text-gray-500 text-lg pt-8" data-aos="zoom-in-up">Explore</p>
<h2 class="text-3xl pb-32" data-aos="zoom-in-up">Find all the information you need.</h2>

    <div class=" grid grid-cols-4 feature-card-container m-auto">

      <div class=" flex flex-col items-center text-center feature-card rounded p-16 mx-8 space-y-8 shadow-lg hover:shadow-2xl  bg-gray-100" data-aos="zoom-in-up"  v-for="feature in features">
        <img :src="feature.icon" alt="icon" class="feature-icon  bg-gray-200 ">
            <strong>{{feature.title}}</strong>
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

</style>