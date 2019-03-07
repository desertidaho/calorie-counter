<template>
  <div class="date-details container-fluid">
    <div class="row">
      <h1 class="title mt-3">Yum Yum Details for <span>{{activeDay.date}}</span></h1>
    </div>
    <form>
      <div class="form-inline my-3">
        <input type="text" class="form-control" id placeholder=" Foods...">
        <button type="submit" class="btn btn-primary ml-2">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "date-details",
    mounted() {

    },
    props: [],
    data() {
      return {};
    },
    computed: {
      activeDay() {
        return this.$store.state.activeDay;
      }
    },
    methods: {},
    components: {}
  };
</script>