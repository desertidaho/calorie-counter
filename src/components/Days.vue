<template>
  <div class="days col-12 d-flex justify-content-center mt-5">
    <ul v-for="day in allDays" :key="day.id">
      <li @click="setActive(day)">
        <router-link :to="{name: 'details', params:{id: day._id}}">{{day.date}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "days",
    props: [],
    data() {
      return {};
    },
    computed: {
      allDays() {
        return this.$store.state.days;
      }
    },
    methods: {
      setActive(day) {
        this.$store.dispatch("setActive", day);
      }
    },
    components: {}
  };
</script>

<style>
  li {
    list-style: none;
    cursor: pointer;
  }
</style>