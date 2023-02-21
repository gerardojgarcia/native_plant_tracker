<script>
export default {
  name: "AppHeaderNav",
};
</script>

<template>
  <nav class="flex w-1/2">
    <ul class="flex space-x-8 text-green-800">
      <li>
        <NuxtLink
          to="/"
          class="rounded-lg hover:bg-green-800 hover:text-white hover:shadow-md p-4 link"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/species"
          class="rounded-lg hover:bg-green-800 hover:text-white hover:shadow-md p-4 link"
          >Species</NuxtLink
        >
      </li>

      <li>
        <NuxtLink
          to="/compost"
          class="rounded-lg hover:bg-green-800 hover:text-white hover:shadow-md p-4 link"
        >
          Compost</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/forage"
          class="rounded-lg hover:bg-green-800 hover:text-white hover:shadow-md p-4 link"
        >
          Forage</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  transition: all ease-in-out 250ms;
}
</style>
