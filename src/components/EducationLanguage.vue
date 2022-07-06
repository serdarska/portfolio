<template>
  <section>
    <div class="row">
      <div class="col-6">
        <education/>
      </div>
      <div class="col-6">
        <languages-hobbies/>
      </div>
    </div>
  </section>
</template>

<script>
import Education from "@/components/Education";
import LanguagesHobbies from "@/components/LanguagesHobbies";

export default {
  name: "EducationLanguage",
  components: {
    Education,
    LanguagesHobbies
  }
}
</script>

<style scoped>

</style>