<script>
import { ofetch } from 'ofetch';

export default {
  name: "AppTestimonials",
  data(){
    return {
      testimonials: [
        {
          id: 1,
          img: '/img/yessica_headshot.webp',
          name: "Yessica Christy",
          location: 'Boyle Heights',
          rating: '4.7',
          testimonial: 'I was blown away by the selection of native plants. The staff was incredibly knowledgeable and helpful in guiding me towards plants that would thrive in my garden. I love the way my new native plants are bringing life and beauty to my space!',
          alt: 'image of yessica christy'

        },

        {
          id: 2,
          img: '/img/david_blanco_screenshot.webp',
          name: "David Blanco",
          location: 'East Los Angeles',
          rating: '4.3',
          testimonial: 'I am thrilled with the native plants I purchased from ELACompost. Not only are they a gorgeous addition to my garden, but I know that by choosing native plants, I am supporting local ecosystems and doing my part to conserve water and other resources. Thank you for your commitment to sustainability!',
          alt: 'image of David Blanco'

        },
        {
          id: 3,
          img: '/img/stephanie_headshot.webp',
          name: "Stephanie Prado",
          location: 'Boyle Heights',
          rating: '4.2',
          testimonial: 'I can\'t say enough good things about ELACompost and the native plants I purchased from them. The staff was incredibly helpful and knowledgeable, and the plants are thriving in my garden. I will definitely be returning for more in the future!',
          alt: 'image of Stephanie Prado'

        },

      ]
    }
  }
}
</script>

<template>
  <section id="testimonials" class="text-center pb-32"  data-aos="fade-up" data-aos-duration="300ms">

    <h4 class="text-4xl text-green-800 pb-8"  data-aos="fade-up" data-aos-duration="300ms">Trusted by Thousands of Happy Planters</h4>
    <p class="text-xl mb-24">They found the information they needed to help reclaim their yards and plan out a sustainable, beautiful oasis in the city.</p>
<!--plant testimonial flex container-->
    <div class="plant-testimonials w-4/5 flex justify-center m-auto space-x-8"  data-aos="fade-up" data-aos-duration="300ms">



      <!--plant testimonial card-->
      <div class="plant-testimonial-card flex flex-col justify-start rounded-lg bg-gray-100 pt-4 pb-8 shadow-lg hover:shadow-2xl" v-for="testimonial in testimonials" :key="testimonial.id">

        <!--Testimonial Card Header-->
        <div class="card-header flex justify-between items-center px-8">



          <div class="card-reviewer text-left flex w-full mb-8 items-center">  
            <img :src="testimonial.img" :alt=" testimonial.alt" class="w-24 h-24 rounded-full object-cover object-center">
            <div class="px-4" >
            <strong class="text-lg">{{  testimonial.name }}</strong>
            <p class="text-sm">{{ testimonial.location }}</p>
              </div>
          </div>

          <div class="rating flex w-24 justify-end space-x-2">
            <img class="gold-star" src="/img/Gold_Star.svg" alt="image of a gold star">
            <p>{{testimonial.rating}}</p>


          </div>
        </div>
        <p class="mt-8 text-left px-8 text-center">"{{ testimonial.testimonial }}"</p>
      </div>

    </div>


  </section>
</template>

<style scoped>

.plant-testimonial-card {
  max-width: 28%;
}

.gold-star {
  max-width: 1.5rem;
}

</style>