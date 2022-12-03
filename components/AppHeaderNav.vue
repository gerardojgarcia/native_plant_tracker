<script>
export default {
  name: "AppHeaderNav"
}
</script>

<template>
<nav class="flex w-1/2">


  <ul class="flex space-x-8 text-green-800">
    <li>
      <NuxtLink to="/"  class="rounded-lg  hover:bg-amber-300 hover:shadow-md  p-4 link">Home</NuxtLink>
    </li>
    <li>
      <NuxtLink to="species"  class="rounded-lg  hover:bg-amber-300 hover:shadow-md  p-4 link">Species</NuxtLink>
    </li>
    <li>
      <NuxtLink to="practices" class="rounded-lg  hover:bg-amber-300 hover:shadow-md  p-4 link">Best Practices</NuxtLink>
    </li>
    <li>
      <NuxtLink to="learn" class="rounded-lg  hover:bg-amber-300 hover:shadow-md  p-4 link"> Learn More</NuxtLink>
    </li>
  </ul>

</nav>
</template>

<style scoped>

.link {
  transition: background-color ease-in-out;
  transition-duration:  200ms;
}



</style>