<template>
  <main>
    <div id="image">
      <img id="top" src="background.jpeg" />
    </div>
    <div id="image-content">
      <div>
        송준형<br />
        백엔드 개발자 포트폴리오
        <hr />
        <p>
          안녕하세요<br />
          저는 높은 적응력과 빠른 습득력을 무기로<br />
          빠른 도약이 가능한 개발자입니다.
        </p>
        <a href="/upload/portfolio.pdf" download="portfolio.pdf">이력서 다운로드</a>
      </div>
    </div>
    <AboutMeSection />
    <SkillSection />
    <ProjectSection />
    <ContactSection />
  </main>
</template>

<script>
import AboutMeSection from "@/components/section/AboutMeSection.vue";
import SkillSection from "@/components/section/SkillSection.vue";
import ProjectSection from "@/components/section/ProjectSection.vue";
import ContactSection from "@/components/section/ContactSection.vue";

export default {
  components: {
    AboutMeSection,
    SkillSection,
    ProjectSection,
    ContactSection,
  },
};
</script>

<style scoped>
main {
  z-index: 0;
}

#image {
  overflow: hidden;
  height: 750px;
  position: relative;
  background-color: rgb(191, 120, 206);
}

#image-content {
  position: absolute;
  top: 0;
  margin-top: 60px;
  height: 690px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#image-content > div {
  font-size: 80px;
  color: white;
}

#image-content > div > p {
  font-size: 40%;
}

img {
  height: 800px;
}

a {
  color: white;
  background-color: black;
  padding: 10px;
  border-radius: 7px;
  font-size: 20px;
  font-family: "Noto Sans KR";
  font-weight: 900;
  text-decoration: none;
  opacity: 0.9;
}

a:hover {
  background-color: rgb(199, 56, 228);
}

@media screen and (max-width: 900px) {
  #image-content > div {
    font-size: 7vw;
  }
}

@media screen and (max-width: 500px) {
  #image {
    height: 400px;
  }

  #image-content {
    height: 340px;
  }

  img {
    height: 400px;
  }
}


</style>
