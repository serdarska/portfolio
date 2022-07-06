<template xmlns="http://www.w3.org/1999/html">
  <main class="container">
    <name-surname/>
    <about-me/>
    <profile/>
    <education-language/>
    <info/>
  </main>
</template>

<script>
import Info from "@/components/Info";
import AboutMe from "@/components/AboutMe";
import Profile from "@/components/Profile";
import NameSurname from "@/components/NameSurname";
import EducationLanguage from "@/components/EducationLanguage";


export default {
  name: "HomePage",
  components: {
    Info,
    Profile,
    AboutMe,
    NameSurname,
    EducationLanguage,
  }
}

</script>