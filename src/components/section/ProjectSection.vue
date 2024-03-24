<template>
  <section id="project">
    <h1>PROJECT</h1>
    <div id="container">
      <div id="projects-button">
        <button
          @click="$router.push('/zido')"
          :class="
            $route.path == '/zido' || $route.path == '/' ? 'selected' : ''
          "
        >
          여행한 지도
        </button>
        <button
          @click="$router.push('/error')"
          :class="
            $route.path == '/error' || $route.path == '/' ? 'selected' : ''
          "
        >
          에러페이지
        </button>
      </div>
      <div id="spec-project">
        <router-view />
        <img
          @click="prevPage"
          v-show="this.$route.meta.page > 1"
          src="/page-button.png"
          id="prev"
          class="page-button"
          style="transform: scaleX(-1)"
        />
        <img
          @click="nextPage"
          v-show="!this.$route.meta.last"
          src="/page-button.png"
          id="next"
          class="page-button"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    prevPage() {
      const page = this.$route.meta.page;
      this.$router.push(`/zido/${page - 1}`);
    },
    nextPage() {
      const page = this.$route.meta.page;
      this.$router.push(`/zido/${page + 1}`);
    },
  },
};
</script>

<style scoped>
section {
  color: rgb(191, 120, 206);
}

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#projects-button {
  display: flex;
  justify-content: center;
  width: 80%;
  padding-bottom: 20px;
  margin-bottom: 30px;
  box-shadow: 0 3px 5px -5px;
}

.selected {
  background-color: rgb(113, 71, 122);
  color: #fff;
  opacity: 0.5;
}

.page-button {
  position: absolute;
  height: 50px;
  opacity: 0.5;
  top: 275px;
}

#prev {
  left: -55px;
}

#next {
  right: -55px;
}

#spec-project {
  position: relative;
  height: 600px;
  width: 80%;
  box-shadow: 5px 5px 5px 0 rgb(196, 196, 196);
}

#projects-button > button {
  margin: 0 5px;
  padding: 10px 15px;
  border-color: rgb(191, 120, 206);
  border-radius: 10px;
  font-size: 20px;
  background-color: #fff;
  color: rgb(191, 120, 206);
  box-shadow: 5px 5px 5px 0 rgb(196, 196, 196);
}

@media screen and (max-width: 900px) {
  #spec-project {
    height: 800px;
  }
  .page-button {
    top: 375px;
  }
}

@media screen and (max-width: 500px) {
  #projects-button {
    flex-direction: column;
    align-items: center;
  }

  button {
    margin: 5px 0;
    width: 300px;
  }
}
</style>
