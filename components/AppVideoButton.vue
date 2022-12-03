<script>
export default {
  name: "AppVideoButton",
  props:{
    title: String,
  }

}
</script>

<template>
  <div class="mt-24">
    <a class="border-2 border-black rounded-lg px-16 py-3 shadow-lg hover:shadow-2xl">{{ title }}</a>
  </div>
</template>

<style scoped>

</style>