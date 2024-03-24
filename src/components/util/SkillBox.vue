<template>
  <div id="skill-box">
    <img id="skill" :src="skill.src" :alt="skill.name" />
    <h3>{{ skill.name }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    skill: Object,
  },
};
</script>

<style scoped>
#skill {
  height: 120px;
  width: 120px;
  margin: 10px;
}

h3 {
  margin-top: 0;
}
</style>
