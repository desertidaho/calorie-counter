<template>
  <div class="foodDetails">
    <ul @click="addToSandbox">
      <li>Type food: {{newFood.food_name || newFood.name}}</li>
      <li>Calories: {{newFood.nf_calories || newFood.calories}}</li>
      <li>Fat: {{newFood.nf_total_fat || newFood.fat}}</li>
      <li>Carbs: {{newFood.nf_total_carbohydrate || newFood.carbohydrates}}</li>
      <li>Protein: {{newFood.nf_protein|| newFood.protein}}</li>
      <li>Serving quantity: {{newFood.serving_qty|| newFood.servingQty}}</li>
      <li>Serving unit: {{newFood.serving_unit || newFood.servingUnit}}</li>
      <img :src="newFood.imgUrl || newFood.photo.highres" alt="">
    </ul>
  </div>
</template>

<script>
  export default {
    name: "foodDetails",
    mounted() {

    },
    props: ['newFood'],
    data() {
      return {};
    },
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
    width: 20vw;
    height: auto;
  }
</style>