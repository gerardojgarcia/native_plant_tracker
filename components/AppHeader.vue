<script>
export default {
  name: "AppHeader"
}
</script>

<template>
<div>
  <header class=" bg-white flex flex-row justify-between w-full px-16 py-6 z-10">
    <AppHeaderNav/>
    <AppLinkButton link="Sign Up!" />

  </header>
</div>
</template>

<style scoped>

header {
  position: fixed;
  top: 0;
  box-shadow: 0 1px 10px 0 gray;
  box-sizing: border-box;
}

</style>