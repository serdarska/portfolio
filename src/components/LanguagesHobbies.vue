<template>
  <section>
    <div class="col-12 text-start mb-3">
      <h2 class="text-color">Languages</h2>
      <p class="m-0">Macedonian</p>
      <div class="progress col-7">
        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
             aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p class="m-0">English</p>
      <div class="progress col-7">
        <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="75"
             aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <h2 class="mt-5 text-color">Hobbies</h2>
      <ul class="fs-5 text-font ps-0">
        <li class="me-sm-3 pe-3 fs-4" v-for="hobby in hobbies">{{ hobby }}</li>
      </ul>
      <h2 class="mt-5 text-color">Social Media</h2>
      <div class="d-flex ps-4">
        <a href="https://www.facebook.com/jovana.serdarska/" class="pe-3 text-color">
          <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/serdarskaj/" class="pe-3 text-color">
          <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/feed/" class="text-color">
          <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LanguagesHobbies",
  data() {
    return {
      hobbies: [
        "Fashion",
        "Puzzles",
        "Editing",
        "Gym",
        "Dancing",
        "Decorating",
        "Horse Riding",
        "Skiing",
        "Basketball",
        "Traveling"
      ]
    }
  }
}
</script>

<style scoped>
.text-font {
  font-family: Arial, serif;
}

ul {
  columns: 2;
}
</style>