<script>
export default {
  name: "AppHeader"
}
</script>

<template>
<div>
  <header class=" bg-white flex flex-row justify-between w-full px-16 py-6 z-10">
    <AppHeaderNav/>

    <div class="authentication-links flex space-x-8">
      <NuxtLink to='login'>Sign In</NuxtLink>
      <AppLinkButton link="Sign Up!" />
    </div>


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
