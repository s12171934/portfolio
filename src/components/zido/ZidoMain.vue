<template>
  <article>
    <div id="img">
      <img id="page" src="/zido/triponezido.png" />
    </div>
    <div id="content">
      <div id="logo">
        <img src="/zido/zidologo.png" />
      </div>

      <h3 style="margin: 0; color: #ffb9b6">여행 계획 및 후기 공유 웹서비스</h3>
      <div style="margin: 5px 0;">
        <a href="/upload/portfolio.pdf" download="portfolio.pdf">더 자세하게.pdf</a>
        <a href="https://github.com/s12171934/trip-one-zido">Git Hub link</a>
      </div>
      <h3 style="margin-top: 0">진행기간 및 인원</h3>
      <h4>24/02/22 ~ 24/03/31 - 5인</h4>
      <h3>핵심기능</h3>
      <h4>
        SNS계정 연동로그인<br />
        일정게시글 내부에 장소게시글 작성<br />
        지역별 장소게시글 빈도 표시<br />
        일정경로 표시 지도
      </h4>
      <h3>맡은 역할</h3>
      <h4>
        Team Leader, PM<br />
        프로젝트 구조 설계<br />
        API 명세 제작 및 문서화<br />
        API 서버 컨트롤러, Dto, Dao 개발<br />
        Vue.js를 통한 View단 개발
      </h4>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
article {
  display: flex;
  flex-grow: 1;
}

h2 {
  margin: 0;
  color: #ffb9b6;
}

h3 {
  font-family: "Noto Sans KR";
  font-weight: 900;
}

h4 {
  color: black;
  margin: 0;
  font-family: "Noto Sans KR";
  font-weight: 500;
}

#img {
  overflow: hidden;
  height: 600px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: top;
  background-color: #ffb9b6;
}

#page {
  height: 100%;
}

#logo {
  display: flex;
  width: 100%;
  justify-content: center;
}

#logo > img {
  width: 260px;
}

#content {
  width: 40%;
  height: 600px;
  padding: 1rem;
  text-align: start;
}

#content > h2 {
  font-size: 40px;
}

a {
  margin-right: 7px;
  padding: 0 3px;
  color: #ff5b56;
  border: 1px solid;
  border-radius: 10px;
  font-family: "Noto Sans KR";
  font-weight: 900;
  text-decoration: none;
}

@media screen and (max-width: 900px) {
  article {
    flex-direction: column;
  }

  #img {
    height: 200px;
    width: 100%;
  }

  #page {
    height: 400px;
  }

  #content {
    width: 100%;
    height: 400px;
  }
}
</style>
