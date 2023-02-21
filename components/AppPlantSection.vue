<script>
export default {
  name: "AppPlantSection",

}
</script>

<template>
  <section class="pb-36 flex flex-col md:grid grid-cols-2 items-center " data-aos="fade-up" data-aos-duration="300ms">


    <!--Image Container-->
    <div class="plant-image-container flex md:flex-row flex-col  " data-aos="fade-left" data-aos-duration="450ms">
      <div class="md: mr-16" >
        <nuxt-img src="/img/californiapoppy.webp" alt="" height="700px" data-aos="zoom-in-up" />
        <nuxt-img src="/img/redflower.webp" alt="" height="350px" width="200px" style="margin-left: 200px" data-aos="zoom-in-up"/>
      </div>

      <div class="two-image-container flex flex-col ">
        <img src="/img/hummingbirdsage.webp" alt="" height="350px" width="200px" style="margin-left: 50px" data-aos="zoom-in-up">
        <img src="/img/monkeyflower.webp" alt="" height="350px" data-aos="zoom-in-up">
      </div>

    </div>
    <div class="space-y-16 px-6 md:p-24 flex flex-col" data-aos="fade-right" data-aos-duration="450ms">

      <!--TExt container-->
      <h3 class="text-6xl text-green-800">Discover the benefits of planting native in Southern California</h3>
      <p class="plant-description md:pl-60 text-gray-600 text-right text-lg"><span>Shop our wide selection of native plants, sourced from the best local growers in Southern California</span></p>

      <div class="flex md:flex-row flex-col justify-end w-full items-center self-end">

        <AppButton link="Show Me How" to="species" class="md:mr-8 mt-24"/>
        <AppVideoButton title="Watch Video"/>

        

      </div>
    </div>




  </section>
</template>

<style scoped>

img{
  margin: 2rem;
  border-radius: 1.7rem;
  transition: 150ms ease-in-out;
  box-shadow: 0 2px 5px 2px lightgray;

}

img:hover  {
  box-shadow: 1px 2px 10px 10px lightgray;
  cursor: pointer;

}
.plant-image-container {
min-height: 700px;
margin-bottom: 4rem;


}

.two-image-container{
  max-height: 700px;
  object-fit: contain;
}

</style>
