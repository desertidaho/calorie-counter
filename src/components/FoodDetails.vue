<template>
  <div class="foodDetails card col-2 d-flex mx-3 my-3 shadow" @click="addToSandbox">
    <img :src="newFood.imgUrl || newFood.photo.highres" alt="" class="img-top img-fluid">
    <div class="card-body">
      <p>Type food: {{newFood.food_name || newFood.name}}</p>
      <p>Calories: {{newFood.nf_calories || newFood.calories}}</p>
      <p>Fat: {{newFood.nf_total_fat || newFood.fat}}</p>
      <p>Carbs: {{newFood.nf_total_carbohydrate || newFood.carbohydrates}}</p>
      <p>Protein: {{newFood.nf_protein|| newFood.protein}}</p>
      <p>Serving quantity: {{newFood.serving_qty|| newFood.servingQty}}</p>
      <p>Serving unit: {{newFood.serving_unit || newFood.servingUnit}}</p>
    </div>
  </div>
</template>


<script>
  export default {
    name: "foodDetails",
    props: ['newFood'],
    computed: {},
    methods: {
      addToSandbox() {
        this.$store.dispatch('addFoodDetailsToSandbox', { name: this.newFood.food_name, fat: this.newFood.nf_total_fat, calories: this.newFood.nf_calories, carbohydrates: this.newFood.nf_total_carbohydrate, protein: this.newFood.nf_protein, servingQty: this.newFood.serving_qty, servingUnit: this.newFood.serving_unit, imgUrl: this.newFood.photo.highres })
      }
    },
    components: {}
  };
</script>

<style>
  img {
    width: 100vw;
    height: 100vh;
  }
</style>