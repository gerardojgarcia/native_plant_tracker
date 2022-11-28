<script>
export default {
  name: "AppButton",
  props: {
    link: String,
  }
}
</script>

<template>
  <div>
    <NuxtLink class="app-link bg-amber-300 rounded-lg px-8 py-3 text-white shadow-md hover:drop-shadow-lg" to="login">{{link}} </NuxtLink>
  </div>
</template>

<style scoped>
.app-link{
  transition: all ease-in-out;
  transition-duration: 200ms;
}
</style>