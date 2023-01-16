<script>
export default {
  name: "login"
}
</script>

<template>
<section class="grid grid-cols-2">

  <div class="left-box w-1/3 bg-teal-400 h-screen">

  </div>

  <div class="form-box flex h-screen">



    <form action="submit" class="flex flex-col shadow-2xl rounded-lg border-black pb-24 self-center place-center p-12  ">

      <strong class="text-2xl font-normal pb-8">Sign in to get started</strong>

      <label for="email">Email</label>
      <input type="text" name="name" placeholder="First Name" class="shadow-inner-lg">
      <label for="password">Password</label>
      <input type="password" name="name" placeholder="Enter your password" class="shadow-inner-lg">


    <AppButton link="Login" class="mt-12 self-end"/>

    </form>





  </div>





</section>
</template>

<style scoped>


form {
  min-width: 25rem;
  max-height: 35rem;

}

label {
  margin-top: 2rem;
}


input {
  border-radius: .5rem;
  background-color: lightgray;
  padding: .5rem .5rem .5rem .5rem;

  margin-top: .5rem;

}

</style>
