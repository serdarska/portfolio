<template>
  <section>
    <div class="col-12 text-start mb-3">
      <h2>Languages</h2>
      <p class="m-0">Macedonian</p>
      <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
             aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p class="m-0">English</p>
      <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="75"
             aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <h2 class="mt-5">Hobbies</h2>
      <ul class="fs-5 txtfont">
        <li>Fashion</li>
        <li>Puzzles</li>
        <li>Editing</li>
        <li>Gym</li>
        <li>Dancing</li>
        <li>Decorating</li>
        <li>Horse Riding</li>
        <li>Skiing</li>
        <li>Basketball</li>
        <li>Traveling</li>
      </ul>
      <h2 class="mt-5">Social Media</h2>
      <div class="d-flex ps-5">
        <a href="https://www.facebook.com/jovana.serdarska/" class="pe-3">
          <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/serdarskaj/">
          <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LanguagesHobbies"
}
</script>

<style scoped>
.list-style-none {
  list-style: none;
}
.txtfont{
  font-family: Arial;
}
ul {
  columns: 2;
}
</style>