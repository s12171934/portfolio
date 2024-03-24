<template>
  <AppHeader />
  <MainSection />
  <AppFooter />
  <img @click="top" id="top-button" src="top button.png" />
</template>

<script>
import AppHeader from "@/components/public/AppHeader.vue";
import MainSection from "@/components/section/MainSection.vue";
import AppFooter from "@/components/public/AppFooter.vue";

export default {
  components: {
    AppHeader,
    MainSection,
    AppFooter,
  },
  methods: {
    top(){
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

* {
  font-family: "Black Han Sans", "Noto Sans KR";
  font-weight: 100;
  box-sizing: border-box;
}

body {
  margin: 0;
}

h1 {
  font-size: 60px;
  margin: 0 0 20px 0;
  text-decoration: underline;
}

section {
  padding: 30px 0;
  box-shadow: 0 10px;
}

#top-button {
  position: fixed;
  min-width: 50px;
  max-width: 100px;
  width: 10vw;
  bottom: 10px;
  right: 10px;
  opacity: 0.5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
