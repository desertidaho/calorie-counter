<template>
  <div class="date-details container-fluid">
    <div class="row">
      <h1 class="title mt-4 col-12 text-center">Yum Yum Details for <span>{{activeDay.date}}</span></h1>
    </div>
    <form @submit.prevent="getFoods">
      <div class="form-inline my-3 col-12 d-flex justify-content-center">
        <input v-model="newFood" type="text" class="form-control" id placeholder=" Foods...">
        <button type="submit" class="btn btn-primary ml-2">Submit</button>
      </div>
    </form class="row">
    <div class="col-12 d-flex flex-wrap justify-content-center my-5">
      <foodDetails v-for="food in results" :newFood="food"></foodDetails>
      <foodDetails v-for="food in foodsInLog" :newFood="food"></foodDetails>
    </div>
  </div>
</template>

<script>
  import FoodDetails from "@/components/FoodDetails.vue";
  export default {
    name: "date-details",
    mounted() {
      this.$store.dispatch('foodDetails', this.id)
    },
    props: ['id'],
    data() {
      return {
        newFood: ''
      };
    },
    computed: {
      activeDay() {
        return this.$store.state.activeDay;
      },
      foodsInLog() {
        return this.$store.state.activeDay.foods;
      },
      results() {
        return this.$store.state.foodDetails
      }
    },
    methods: {
      getFoods() {
        this.$store.dispatch('getFoods', { query: this.newFood })
      }
    },
    components: {
      FoodDetails
    }
  }
</script>

<style>
</style>