<template>
  <header :class="isTop ? '' : 'scroll_down'">
    <h3 @click="goIndex('top')">송준형's PORTFOLIO</h3>
    <nav>
      <ul>
        <li @click="goIndex('about-me')">About me</li>
        <li @click="goIndex('skills')">Skills</li>
        <li @click="goIndex('project')">Project</li>
        <li @click="goIndex('contact')">Contact</li>
      </ul>
    </nav>
    <menu @click="toggleMenu">
      menu
      <div id="menu" v-show="showMenu">
        <ul>
          <li @click="goIndex('about-me')" style="color: rgb(209, 203, 170)">
            About me
          </li>
          <li @click="goIndex('skills')" style="color: rgb(214, 140, 151)">
            Skills
          </li>
          <li @click="goIndex('project')" style="color: rgb(191, 120, 206)">
            Project
          </li>
          <li @click="goIndex('contact')" style="color: rgb(98, 78, 172)">
            Contact
          </li>
        </ul>
      </div>
    </menu>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isTop: true,
      showMenu: false,
    };
  },
  methods: {
    scrollEvent() {
      this.isTop = window.scrollY == 0;
    },

    goIndex(id) {
      window.scroll({
        top: document.getElementById(id).offsetTop - 60,
        behavior: "smooth",
      });
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollEvent, true);
  },
};
</script>

<style scoped>
header {
  background-color: inherit;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
}

menu {
  display: none;
  line-height: 40px;
  font-size: 20px;
  margin: 10px 0;
  padding: 0 5px;
  border: 3px solid;
  border-radius: 1rem;
  position: relative;
}

#menu {
  position: absolute;
  font-size: 80%;
  top: 40px;
  left: -30px;
  right: -30px;
}

.scroll_down {
  background-color: white;
  color: rgb(148, 87, 162);
  box-shadow: 0 5px 5px -5px rgb(194, 194, 194);
}

#menu > ul {
  background-color: white;
  border-radius: 10px;
  list-style: none;
  padding: 0;
}

@media screen and (max-width: 900px) {
  nav {
    display: none;
  }

  menu {
    display: inline;
  }
}

@media screen and (max-width: 500px) {
  h3 {
    font-size: 20px !important;
  }
}

nav > ul {
  display: flex;
  list-style: none;
  margin: 0;
}

nav > ul > li {
  padding: 0 1rem;
  line-height: 60px;
  font-size: 15px;
}

h3 {
  font-size: 30px;
  margin: 0;
  line-height: 60px;
}

li:hover {
  opacity: 0.7;
}

h3:hover {
  opacity: 0.7;
}
</style>
