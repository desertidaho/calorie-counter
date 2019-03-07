<template>
  <div class="home container-fluid">
    <div class="row">
      <h1 class="title mt-3">Yum Yum</h1>
    </div>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="addDay">
          <div class="form-inline my-4">
            <input v-model="newDate" type="date" class="form-control" id placeholder=" Date...">
            <button type="submit" class="btn btn-primary ml-2">Submit</button>
          </div>
        </form>
      </div>
      <days></days>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Days from "@/components/Days.vue";

  export default {
    name: "home",
    mounted() {
      this.$store.dispatch('getAllDays')
    },
    data() {
      return {
        newDate: ''
      }
    },
    components: {
      Days
    },
    methods: {
      addDay() {
        this.$store.dispatch('addDay', { date: this.newDate })
      }
    }
  };
</script>

<style>
  input {
    width: 15vw !important;
  }
</style>