<template>
  <section>
    <div class="row">
      <div class="col-12 text-center">
        <button @click="buttonClick" type="button" class="btn btn-secondary btn-sm">Click me :)</button>
      </div>
      <div class="col-12 col-md-4  my-3 text-center">
        <div class="d-flex justify-content-center align-items-center">
          <i class="fa fa-map-marker fa-2x text-col" aria-hidden="true"></i>
          <p class="m-0 fs-3 text-color">Where to find me</p>
        </div>
        <p :class="{'text-uppercase' : upperCase}">{{ address }}</p>
      </div>
      <div class="col-12 col-md-4 my-3 text-center">
        <div class="d-flex justify-content-center align-items-center">
          <i class="fa fa-envelope fa-2x text-col" aria-hidden="true"></i>
          <p class="m-0 fs-3 text-color">Email me at</p>
        </div>
        <p :class="{'text-uppercase': upperCase}">{{ email }}</p>
      </div>
      <div class="col-12 col-md-4 my-3 text-center">
        <div class="d-flex justify-content-center align-items-center">
          <i class="fa fa-phone fa-2x text-col" aria-hidden="true"></i>
          <p class="m-0 fs-3 text-color">Call me at</p>
        </div>
        <p>{{ phone }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Info",
  methods: {
    buttonClick() {
      this.upperCase = true
    }
  },
  data() {
    return {
      address: "Dame Gruev 4/5, Skopje",
      email: "serdarska.jovana.js@gmail.com",
      phone: "+389-70/354/184",
      upperCase: false
    }
  }
}
</script>

<style scoped>
.text-color {
  color: crimson;
}

.text-col {
  color: black;
}
</style>