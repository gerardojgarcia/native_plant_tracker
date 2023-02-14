<script>
export default {
  name: "AppFooter"
}
</script>

<template>
  <section id="footer" class="py-16">

    <div class="footer-link-grid flex flex-col md:grid grid-cols-4 px-32 m-auto">

      <div>
        <div class="mb-12"><strong class="footer-column-title "> ELACompost</strong></div>
        <p class="text-green-800">Experience the beauty and benefits of Southern California native plants in your own garden</p>
      </div>
      <div>
        <div class="mb-4 md:mb-12 mt-6"><strong class="footer-column-title">About Us</strong></div>
        <ul class="space-y-2">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Our Service</li>
          <li>Company</li>
        </ul>
      </div>
      <div>
        <div class="mb-4 md:mb-12 mt-6"><strong class="footer-column-title">Help</strong></div>
        <ul class="space-y-2">
          <li>Order</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Term & Condition</li>
        </ul>
      </div>
      <div >
        <div class="mb-4 md:mb-12 mt-6"><strong class="footer-column-title ">Contact Us</strong></div>
        <ul class="space-y-2">
          <li>215 Blaze Ave, East Los Angeles </li>
          <li>123.456.7890</li>
          <li>hi@elacompost.com</li>

        </ul>
      </div>


    </div>

  </section>
</template>

<style scoped>

ul {
  color: #2D583A;
}

strong {
  font-size: 1.2rem;
}


.footer-column-title {
  padding-bottom: 1rem;
}


</style>