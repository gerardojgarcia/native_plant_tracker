<script>
export default {
  name: "AppPlantSales",
  data(){
    return {
      items: [
        {
          id: 1,
          img: '/img/californiapoppy.png',
          title: 'California Poppy',
          rating: '5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio eaque optio provident quasi similique voluptate. ',
          price: '35',
          link: '/'

        }
      ]

    }
  }
}
</script>

<template>
  <section class="pt-32 text-center pb-32">

    <p class="pre-title text-gray-500 text-lg pt-8" data-aos="zoom-in-up">Find Your Plant</p>
    <h2 class="text-3xl pb-32 text-green-800" data-aos="zoom-in-up">Native Plants that best fit your home</h2>

    <div class="plant-cards px-52" v-for="plant in items" :key="plant.id">
        <div class="plant-card flex flex-col w-80 rounded shadow-md hover:shadow-xl cursor-pointer">

          <img  :src="plant.img" alt="">
          <div class="flex flex-col">
            <div class="self-start pl-4 py-2 flex  justify-between w-full" ><strong class="text-xl" >{{plant.title}}</strong> <p class="pr-8 text-lg ">{{plant.rating}}</p></div>

            <p class="plant-card-description pl-4 py-2 text-left">
              {{plant.description}}
            </p>

            <p class="plant-card-price self-start pl-4 text-xl font-bold"> Price: ${{plant.price}}</p>
          </div>


        </div>



    </div>

  </section>
</template>

<style scoped>

.plant-card>img {

  border-radius: .2rem .2rem 0 0 ;

}

</style>