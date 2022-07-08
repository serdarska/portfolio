<template>
  <section>
    <div class="row py-5 bg-black border-change">
      <div class="col-12 text-center">
        <h3 class="m-0 pb-2 text-color fw-bold text-uppercase">Contact</h3>
        <h1 class="mb-5 text-white">I'd Love To Hear From You.</h1>
      </div>
      <div class="col-12 col-md-4  my-3 text-center">
        <i class="fa fa-map-marker fa-3x mb-3 text-white" aria-hidden="true"></i>
        <p class="m-0 fs-3 text-color mb-2 text-uppercase">Where to find me</p>
        <p class="fs-4">Dame Gruev 4/5, Skopje</p>
      </div>
      <div class="col-12 col-md-4 my-3 text-center">
        <i class="fa fa-envelope fa-3x mb-3 text-white" aria-hidden="true"></i>
        <p class="m-0 fs-3 text-color mb-2 text-uppercase">Email me at</p>
        <p class="fs-4">serdarska.jovana.js@gmail.com</p>
      </div>
      <div class="col-12 col-md-4 my-3 text-center">
        <i class="fa fa-phone fa-3x mb-3 text-white" aria-hidden="true"></i><br>
        <p class="m-0 fs-3 text-color mb-2 text-uppercase">Call me at</p>
        <p class="fs-4">+389-70/354/184</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Info",
}
</script>

<style scoped>
.border-change {
  border-top-color: crimson;
  border-top-style: solid;
  border-width: 10px;
}
</style>