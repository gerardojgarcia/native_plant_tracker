<script>
export default {
  name: "AppLinkButton",
  props: {
    link: String
  }

}
</script>

<template>
<div>
  <NuxtLink class="app-link bg-green-800 rounded-lg px-8 py-3 text-white shadow-md hover:drop-shadow-lg" to="login">{{link}} </NuxtLink>
</div>
</template>

<style scoped>
.app-link{
  transition: all ease-in-out;
  transition-duration: 200ms;
}
</style>