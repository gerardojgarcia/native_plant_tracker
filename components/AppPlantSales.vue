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

        },
        {
          id: 1,
          img: '/img/hummingbirdsage.png',
          title: 'Hummingbird Sage',
          rating: '5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio eaque optio provident quasi similique voluptate. ',
          price: '35',
          link: '/'

        },
        {
          id: 1,
          img: '/img/monkeyflower.png',
          title: 'Sticky Monkey Flower',
          rating: '4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio eaque optio provident quasi similique voluptate. ',
          price: '35',
          link: '/'

        },
        {
          id: 1,
          img: '/img/redflower.png',
          title: 'Lemonade Berry',
          rating: '4.7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio eaque optio provident quasi similique voluptate. ',
          price: '35',
          link: '/'

        },
        {
          id: 1,
          img: '/img/californiapoppy.png',
          title: 'California Poppy',
          rating: '5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio eaque optio provident quasi similique voluptate. ',
          price: '35',
          link: '/'

        },
        {
          id: 1,
          img: '/img/californiapoppy.png',
          title: 'California Poppy',
          rating: '4.8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio eaque optio provident quasi similique voluptate. ',
          price: '35',
          link: '/'

        },
      ]

    }
  }
}
</script>

<template>
  <section class="pt-32 text-center pb-32">

    <p class="pre-title text-gray-500 text-lg pt-8" data-aos="zoom-in-up">Find Your Plant</p>
    <h2 class="text-4xl pb-24 text-green-800" data-aos="zoom-in-up">Native Plants that best fit your home</h2>

    <div class="plant-cards m-auto  overflow-x-scroll flex flex-row space-x-8  " data-aos="zoom-in-up" ata-aos-delay="300ms" >

      <!--Plant Card-->
        <div class="plant-card flex flex-col min-w-80 bg-gray-100 rounded shadow-md hover:shadow-xl cursor-pointer" v-for="plant in items" :key="plant.id" data-aos="zoom-in-up" d>

          <img  :src="plant.img" alt="" >
          <div class="flex flex-col">
            <div class="self-start pl-4 py-2 flex  justify-between w-full" ><strong class=" plant-title" >{{plant.title}}</strong>


              <!--Plant Card Rating-->
              <div class="flex items-center justify-end space-x-2 pr-4 w-24">


                <img class="gold-star" src="/img/Gold_Star.svg" > <p class=" text-lg ">{{plant.rating}}</p>

              </div>


            </div>

            <p class="plant-card-description pl-4 py-2 px-4 text-left">
              {{plant.description}}
            </p>


          <div class="flex justify-between items-center w-full mb-6 my-6">
            <p class="plant-card-price self-start pl-4 text-xl font-bold "> Price: ${{plant.price}}</p>
            <AppButton class="self-center mr-8" link="Buy Now"/>

          </div>

          </div>


        </div>



    </div>

  </section>
</template>

<style scoped>

.plant-cards {
  max-width: 85%;
  overflow: scroll;
  padding: 2.5rem;
  //box-shadow: inset 6px 0 10px rgba(0,0,0,0.1)
}

.plant-card {
  min-width: 25%;
  min-height: 80%;
}

.plant-title {
  font-size:1vw;
}

.gold-star {
  max-width: 1.5rem;
}


.plant-card>img {

  border-radius: .2rem .2rem 0 0 ;

}

</style>