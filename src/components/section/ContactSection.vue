<template>
  <section id="contact">
    <h1>CONTACT</h1>
    <div id="container">
      <div @click="github" id="item">
        <h2>Git Hub</h2>
        <img src="/contact/github.png" />
        <h4 id="link">github.com/s12171934</h4>
      </div>
      <div id="item">
        <h2>Email</h2>
        <img src="/contact/email.png" />
        <h4>ssong9520@kakao.com</h4>
      </div>
      <div id="item">
        <h2>Phone</h2>
        <img src="/contact/phone.png" />
        <h4>+82 010-9520-0105</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    github(){
      window.open('https://github.com/s12171934') 
    }
  }
};
</script>

<style scoped>
section {
  color: rgb(98, 78, 172);
  box-shadow: none;
  padding-bottom: 20px;
}

#container {
  display: flex;
  justify-content: center;
  color: white;
  margin: 0 10%;
  border-radius: 1rem;
}

#item {
  background-color: rgb(98, 78, 172);
  border-radius: 1rem;
  margin: 0 1%;
  width: 250px;
  box-shadow: 5px 5px 5px 0 rgb(196, 196, 196);
}

#item > img {
  height: 100px;
  width: 100px;
}

#link {
  text-decoration: underline;
}

@media screen and (max-width: 900px) {
  #container {
    flex-direction: column;
    background-color: rgb(98, 78, 172);
    box-shadow: 5px 5px 5px 0 rgb(196, 196, 196);
  }

  #item {
    margin: 5% 0;
    width: 100%; 
    box-shadow: none; 
  }
}
</style>
