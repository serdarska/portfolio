<template xmlns="http://www.w3.org/1999/html">
  <main class="container-fluid bg-light">
    <navbar/>
    <name/>
    <about/>
    <profile/>
    <education-language/>
    <info/>
  </main>
</template>

<script>
import Info from "@/components/Info";
import Name from "@/components/Name";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import EducationLanguage from "@/components/EducationLanguage";


export default {
  name: "HomePage",
  components: {
    Info,
    Name,
    About,
    Navbar,
    Profile,
    EducationLanguage
  },
  props: {
    skill: Array
  }
}
</script>