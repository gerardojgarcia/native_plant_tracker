<script>
import AppVideoButton from "./AppVideoButton";
export default {
  name: "AppHero",
  components: {AppVideoButton},
  data(){
    return {
      images: [
        {
          id:1,
          src: '/img/californiapoppy.png',
          alt: "image of california poppy"

        },
        {
          id:2,
          src: '/img/hummingbirdsage.png',
          alt: "image of hummingbird sage"

        },
        {
          id:3,
          src: '/img/monkeyflower.png',
          alt: "image of sticky monkeyflower"

        },
        {
          id:4,
          src: '/img/redflower.png',
          alt: "image of california poppy"

        },
        {
          id:5,
          src: '/img/Screenshot from 2022-11-29 19-59-37.png',
          alt: "image of california poppy"

        },
        {
          id:6,
          src: '/img/Screenshot from 2022-11-29 19-59-50.png',
          alt: "image of california poppy"

        },


      ]
    }
  }

}
</script>

<template>
  <section id="hero" class="grid grid-cols-2 px-16 h-screen ">

    <div class="hero-left-container green-text pt-52 pl-24" data-aos="fade-down" data-aos-delay="300" >

      <h1 class="text-6xl mb-16">Join the Native Plant Revolution!</h1>
      <strong class="title pr-80 text-xl" > home while strengthening the ecosystem of Los Angeles for generations to come. </strong>




      <div class="flex justify-between w-1/2 items-center">

        <AppButton link="Show Me How" class="mt-24"/>
        <AppVideoButton title="Watch Video"/>

      </div>

    </div>
    <div class="hero-right-container grid grid-cols-3 self-center pt-8 " data-aos="fade-left" data-aos-delay="300">

      <div class="images m-4 overflow-hidden " v-for="image in images" :key="image.src" >
        <img class="rounded-xl shadow-lg  border-green-700  hover:shadow-2xl " :src="image.src" :alt="image.alt" data-aos="zoom-in-up" >

      </div>



    </div>


  </section>
</template>

<style scoped>

.green-text {
  color: #2D583A;
}

.images:nth-child(2){
  transform: translateY(-4rem);
}

.images:nth-child(5){
  transform: translateY(-4rem);
}

img {
  cursor: pointer;
  transition: all ease-in-out;
  transition-duration: 300ms;
}

img:hover {

  transform: scale(2);


}


</style>