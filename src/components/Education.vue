<template>
  <section>
    <div class="col-12 col-md-6 mb-3 ps-0 ps-md-5 text-start">
      <div class="d-flex">
        <i class="fa fa-bookmark fa-2x" aria-hidden="true"></i>
        <h3 class="fw-bold">{{ school.schoolType }}</h3>
      </div>
      <h6 class="text-color">{{ school.year }}</h6>
      <h4>
        {{ school.schoolName }}<br>
      </h4>
      <ul v-for="desc in school.description">
        <li class="text-black-50 fs-5">{{ desc }}</li>
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

</style>