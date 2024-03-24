<template>
  <section id="skills">
    <h1>SKILLS</h1>
    <div id="container">
      <div v-for="( categories, idx ) in skills" :key="categories.category" :id="`type${idx}`" class="type">
        <h2 id="title">{{categories.category}}</h2>
        <div id="spec">
          <SkillBox v-for="skill in categories.skills" :key="skill.name" :skill="skill" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillBox from '@/components/util/SkillBox.vue';
import data from '@/assets/data.js'

export default {
  components: {
    SkillBox
  },
  data() {
    return {
      skills: data.skills
    }
  }
};
</script>

<style scoped>
section {
  color: rgb(214, 140, 151);
}

.type {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 5px solid;
  border-radius: 30px;
  margin: 10px;
}

#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#title {
  display: inline;
  background-color: rgb(214, 140, 151);
  box-shadow: 5px 5px 5px 0 rgb(195, 195, 195);
  border-radius: 1rem;
  padding: 10px;
  font-size: 1rem;
  color: white;
}

#spec {
  display: grid;
  grid-template-columns: 150px 150px;
  margin-bottom: 2rem;
}

#spec > img {
  height: 120px;
  margin: 10px;
}

#skill-box {
  position: relative;
}

#skill {
  height: 120px;
  margin: 10px;
}

#score {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
}

@media screen and (max-width: 1350px) {
  #container > #type3 > #spec {
    display: flex;
    justify-content: space-between;
    width: 940px;
  }

  #type3 {
    width: 960px;
  }
}

@media screen and (max-width: 959px) {
  #container > #type3 > #spec {
    display: grid;
    width: inherit;
  }

  #type3 {
    width: 300px;
  }
}
</style>
