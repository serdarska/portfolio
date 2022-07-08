<template>
  <section>
    <div class="row pb-5">
      <div class="col-6">
        <div class="d-flex ps-0 ps-md-5">
          <i class="fa fa-graduation-cap fa-2x text-color-black" aria-hidden="true"></i>
          <h2 class="text-color">Education</h2>
        </div>
        <education v-for="school in schools" :school="school"></education>
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
  },
  props:{
    hobby:Array
  },
  data() {
    return {
      schools: [
        {
          schoolType: "University",
          year: "2020-Present",
          schoolName: "Faculty of Computer Science and Engineering",
          description: [
            "Software engineering and information systems"
          ]
        },
        {
          schoolType: "High School",
          year: "2016-2020",
          schoolName: "Ljupco Santov",
          description: [
            "Graduated with High Honors",
            "5.0 GPA",
            "Member of Mathematics Section",
            "Member of Informatics Section"
          ]
        },
        {
          schoolType: "Primary School",
          year: "2007-2016",
          schoolName: "Cyril and Methodius",
          description: [
            "5.0 GPA"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>