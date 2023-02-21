<script>
export default {
  name: "AppVideoButton",
  props: {
    title: String,
    to: String,
  },
};
</script>

<template>
  <div class="mt-24">
    <a
      class="border-2 border-black rounded-lg px-16 py-3 shadow-lg hover:shadow-2xl cursor-pointer"
      :href="to"
      >{{ title }}</a
    >
  </div>
</template>

<style scoped></style>
