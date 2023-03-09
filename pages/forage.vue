<script>
export default {
  name: "forage",

  data() {
    return {
      plants: {
        id: 1,
        name: "California Poppy",
        description: "text text ext text",
        tags: "non-forage,",
      },
    }
  },
};
</script>
<template>
  <Head>
    <Title> Foraging</Title>
    <Meta name="Learn the best practices for foraging locally" content="Learn the best practices for foraging locally" ></Meta>

  </Head>
  <div>
    <div class="flex flex-col mt-24">
      <div class="px-8">
        <div class="py-6 flex flex-col md:flex-row hero w-full">
          <div class="hero-header self-center md:pr-16">
            <h1 class="text-6xl font-bold pb-6">The Power of Foraging</h1>
            <strong class="text-2xl">Learn how to find nature's bounty!</strong>
          </div>

          <nuxt-img
            src="/img/foraging.webp"
            sizes="sm:100vw md:100vw lg:80vw"
            height="75vh"
          />
        </div>
        <div class="space-y-16 px-4 md:px-16 md:w-5/6 m-auto text-lg mt-24">
          <strong class="text-3xl">
            Foraging Best Practices in Los Angeles: A Guide to Sustainable
            Harvesting</strong
          >
          <article>
            <p class="text-2xl">
              Foraging is the act of searching for and gathering wild food, whether it be
              fruits, nuts, vegetables, or herbs. In Los Angeles, there are a variety of
              natural spaces where foraging can take place, including parks, public lands,
              and even private property (with permission, of course).
            </p> 
            
            </article>
            <article>
            
            <p>
              However, it's
              important to remember that foraging should always be done in a sustainable
              manner, to ensure the health and longevity of the local ecosystem. In this
              article, we'll go over some of the best practices to follow when foraging in
              Los Angeles. Know the Laws and Regulations Before you start foraging, it's
              important to familiarize yourself with the local laws and regulations
              regarding foraging. In Los Angeles, foraging is generally allowed in public
              parks and on public lands, but there may be specific rules regarding what can
              be harvested and how much. It's also important to avoid foraging on private
              property without permission, as this can be considered trespassing.
            </p>
          </article>
          <div  class="space-y-8 text-xl  ">
          <article>
            <strong>Identify the Plants and Fungi</strong> 
            <p>
              Before harvesting any wild plants or fungi, it's
              important to properly identify them. This will help you avoid harvesting any
              toxic or endangered species, and also ensure that you're harvesting at the
              right time of year. There are many resources available online and in print to
              help with plant identification, including guidebooks and local foraging
              groups.</p>
            </article>  
              <article>
                 <strong>Harvest Sustainably</strong> <p>When foraging, it's important to harvest
                sustainably to ensure the health of the local ecosystem. This means taking
                only what you need and leaving enough for the plant or fungi to continue
                growing and reproducing. As a general rule, avoid harvesting more than one
                third of any given plant or fungi, and never harvest endangered species or
                those that are protected by law.
              </p>
            </article>
            <article>
               <strong>Respect the Environment</strong> <p> Foraging should 
              always be done with respect for the local environment. This means avoiding
              damage to plants or their surrounding habitat, and leaving the area as you
              found it. Never uproot plants, as this can damage the surrounding soil and
              potentially harm the plant
            </p>.
            </article>
            </div>
            
            <article>
            Additionally, be aware of any animals that may be using the area for food or
            shelter, and avoid disrupting their habitat. Clean and Prepare Properly Before
            consuming any wild plants or fungi, it's important to clean and prepare them
            properly. This includes washing them thoroughly to remove any dirt or debris,
            and checking for any signs of insect or animal damage. Additionally, be sure
            to cook any fungi before consuming, as this can help eliminate any harmful
            toxins. In conclusion, foraging in Los Angeles can be a rewarding and
            sustainable way to connect with nature and access fresh, local food. However,
            it's important to always follow best practices to ensure the health and
            longevity of the local ecosystem. By knowing the laws, identifying plants and
            fungi, harvesting sustainably, respecting the environment, and cleaning and
            preparing properly, you can enjoy the many benefits of foraging while
            minimizing your impact on the natural world.
            </article>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
