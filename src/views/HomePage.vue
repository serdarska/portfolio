<template xmlns="http://www.w3.org/1999/html">
  <main class="container">
    <name-surname/>
    <about/>
    <profile/>
    <education-language/>
    <info/>
  </main>
</template>

<script>
import Info from "@/components/Info";
import About from "@/components/About";
import Profile from "@/components/Profile";
import NameSurname from "@/components/NameSurname";
import EducationLanguage from "@/components/EducationLanguage";

export default {
  name: "HomePage",
  components: {
    Info,
    Profile,
    About,
    NameSurname,
    EducationLanguage,
  },
  props: {
    skill: Array
  }
}
</script>