<template>
  <section>
    <div class="row">
      <div class="order-1 col-12 col-md-6 my-3 text-start">
        <div class="d-flex">
          <i class="fa fa-smile-o fa-2x text-col" aria-hidden="true"></i>
          <h2 class="text-color">About me</h2>
        </div>
        <p class="fs-5">
          Hi! My name is Jovana Serdarska<br>
          and I'm currently a student<br>
          at Faculty of Computer Science<br>
          and Engineering. I love how technology<br>
          improves everyday, making things<br>
          easier and life better for everyone.
        </p>
      </div>
      <div class="order-3  col-12 col-md-6 my-3 text-start">
        <h2 class="text-color">Skills</h2>
        <p class="fs-5">
          I have always enjoyed challenging<br>
          myself with learning new skills,<br>
          and since I started studying at FINKI,<br>
          editing and making new web <br>
          pages has become one of them.<br>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped>
.text-color{
  color: crimson;
}
.text-col{
  color: black;
}
</style>