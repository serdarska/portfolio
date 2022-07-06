<template>
  <section>
    <div class="row">
      <div class="col-6">
        <div class="d-flex">
          <i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>
          <h2>Education</h2>
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
          ulPart: [
            "Software engineering and information systems"
          ]
        },
        {
          schoolType: "High School",
          year: "2016-2020",
          schoolName: "Ljupco Santov",
          ulPart: [
            "Graduated with High Honors",
            "5.0 GPA",
            "Member of Mathematics Section",
            "Member of Informatics Section"
          ]
        },
        {
          schoolType: "Primary School",
          year: "2007-2016",
          schoolName: "Kiril and Metodij",
          ulPart: [
            "5.0 GPA",
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>