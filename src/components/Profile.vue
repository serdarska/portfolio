<template>
  <section>
    <div class="row">
      <div class="col-12 col-md-6 mb-3 text-start">
        <div class="d-flex">
          <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
          <h2>Profile</h2>
        </div>
        <p class="fs-5">
          People often describe me as a cheerful<br>
          and friendly person. I love working in<br>
          teams as well as meeting new people.<br>
          Becoming a software engineer is my main<br>
          goal for now. For me learning something<br>
          new every day is the key to success.
        </p>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <ul class="text-start list-style-none fs-4 p-0">
          <li>HTML</li>
          <li>CSS</li>
          <li>C++</li>
          <li>C</li>
          <li>BOOTSTRAP</li>
          <li>VUE.JS</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>
.list-style-none {
  list-style: none;
  font-family: Arial;
  font-weight: bold;
}
</style>