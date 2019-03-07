<template>
  <div class="home container-fluid">
    <h1 class="title">Yum Yum</h1>
    <form>
      <div class="form-group my-4">
        <input type="date" class="form-control" id placeholder=" Date...">
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Details from "@/views/Details.vue";

  export default {
    name: "home",
    components: {

    }
  };
</script>

<style>
  input {
    width: 15vw !important;
  }
</style>