<script>
export default {
  name: "compost",
};
</script>
<template>

  <div>
    <Head>     
     <Title> Composting</Title>      
     <Meta name="Learn the best practices for composting at home    " content="Learn the best practices for composting at home" />      
    
     </Head>
    <div class="flex flex-col mt-24">
      <div class="px-8">
        <div class="py-6 flex flex-col md:flex-row hero w-full">
          <div class="hero-header self-center md:pr-16">
            <h1 class="text-6xl font-bold pb-6">An Endless source of energy</h1>
            <strong class="text-2xl"
              >Learn how you can use composting to your advantage</strong
            >
          </div>

          <nuxt-img
            src="/img/foraging.webp"
            sizes="sm:100vw md:100vw lg:80vw"
            height="75vh"
          />
        </div>
        <div class="space-y-16 px-4 md:px-16 md:w-5/6 m-auto text-lg mt-24">
          <strong class="text-3xl">
            Composting Strategies for Small, Medium, and Large-Sized Homes: Tips for
            Reducing Waste and Improving Soil Health</strong
          >
          <article>
            <p class="text-2xl">
                Composting is a simple and effective way to reduce the amount of organic waste
                that ends up in landfills, while also improving the health of soil in gardens
                and landscapes. Whether you live in a small apartment or a large house, there
                are composting strategies that can work for you. In this article, we'll
                explore different composting strategies for small, medium, and large-sized
                homes.
            </p>
            </article>
            <article>
             <p>
                <strong class="text-2xl">Small-Sized Homes</strong> <p>
                    If you live in a small apartment or have limited
                    outdoor space, there are still ways to compost effectively. One option is to
                    use a worm bin, which is a container filled with bedding materials and
                    composting worms. These worms break down food scraps and other organic matter,
                    creating nutrient-rich worm castings that can be used as fertilizer. To create
                    a worm bin, you'll need a container that is at least 8 inches deep, with
                    drainage holes in the bottom. Fill the container with moistened bedding
                    material, such as shredded newspaper or coconut coir, and add composting
                    worms. Place the bin in a cool, shady area and feed the worms with small
                    amounts of food scraps, such as fruit and vegetable peelings. As the worms
                    digest the organic matter, they will create compost that can be used in potted
                    plants or garde
                </p>
            </p>
          </article>

          <article>

            <strong class="text-2xl">Medium-Sized Homes</strong> <p>
                If you have a medium-sized home with a backyard or outdoor
                space, a traditional compost bin may be a good option. These bins can be
                purchased at hardware stores or made at home using materials such as wood
                pallets or wire mesh. They work by allowing organic matter to decompose
                naturally, creating a nutrient-rich compost that can be used in gardens or
                landscapes. To create a traditional compost bin, choose a location that is
                well-drained and receives some sun. Layer organic matter such as food scraps,
                yard waste, and leaves in the bin, making sure to mix green materials (such as
                food scraps) with brown materials (such as leaves) to create a balanced
                mixture. Keep the compost moist and turn it regularly to ensure proper
                aeration. In several months, the compost will be ready to use in gardens and
                landscapes.
            </p>
          </article>
          <article>
            <strong class="text-2xl">Large-Sized Homes</strong> <p>
                If you have a large home with a lot of outdoor space, there
                are several composting strategies you can use. One option is to create a
                larger traditional compost pile using materials such as straw bales or
                pallets. This pile can be up to several feet tall and wide, allowing for a
                large amount of organic matter to decompose naturally. Another option for
                larger homes is to use a compost tumbler, which is a container that can be
                rotated to mix the organic matter inside. This allows for more efficient
                composting and can reduce the amount of time it takes for compost to be ready
                for use. No matter what size home you have, there are composting strategies
                that can work for you. By reducing the amount of organic waste that ends up in
                landfills and improving the health of soil in gardens and landscapes,
                composting is a simple and effective way to promote sustainability and
                environmental health. Whether you choose a worm bin, traditional compost bin,
                or compost tumbler, the benefits of composting are clear: a healthier planet
                and more beautiful gardens.
            </p>
          </article>

          <div class="composting-video ">
            <iframe class="w-full h-full" src="https://www.youtube.com/embed/eO4HdrIXnVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
