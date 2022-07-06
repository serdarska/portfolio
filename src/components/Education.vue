<template>
  <section>
    <div class="col-12 col-md-6 mb-3 text-start">
      <div class="d-flex">
        <i class="fa fa-dot-circle-o fa-2x" aria-hidden="true"></i>
        <h3 class="textChange">{{ school.schoolType }}</h3>
      </div>
      <h6>{{ school.year }}</h6>
      <h4>
        {{ school.schoolName }}<br>
      </h4>
      <ul v-for="part in school.ulPart">
        <li>{{ part }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Education",
  props: {
    school: Object
  }
}
</script>

<style scoped>
.textChange {
  font-weight: bold;
}
</style>