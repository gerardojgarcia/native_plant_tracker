<script>
export default {
  name: "AppButton",
  props: {
    link: String,
  }
}
</script>

<template>
  <div >
    <NuxtLink class="app-link text-white rounded-lg px-8 py-3 bg-green-800 shadow-md hover:drop-shadow-lg" to="login">{{link}} </NuxtLink>
  </div>
</template>

<style scoped>
.app-link{
  transition: all ease-in-out;
  transition-duration: 200ms;
}
</style>