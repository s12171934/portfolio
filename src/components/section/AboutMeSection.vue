<template>
  <section id="about-me">
    <h1>ABOUT ME</h1>
    <div id="profile">
      <div id="info">
        <h2 id="title">이름</h2>
        <h2>송준형</h2>
        <h2 id="title">생년월일</h2>
        <h2>1999. 01. 05.</h2>
        <div class="r-1 inner-grid">
          <h2 class="r-1" id="title">학력</h2>
          <h2>2017</h2>
          <h2>인하대학교 통계학과 입학</h2>
          <h2>2021</h2>
          <h2>인하대학교 통계학과 졸업</h2>
          <h2>2021</h2>
          <h2>인하대학교 빅데이터 분석 졸업</h2>
        </div>
        <div class="r-2 inner-grid">
          <h2 class="r-1" id="title">자격증</h2>
          <h2>2024</h2>
          <h2>정보처리기사 필기 합격</h2>
          <h2>2024</h2>
          <h2>SQL 개발자</h2>
        </div>
      </div>
    </div>
    <div id="introduce">
      <h2 @click="show1 = !show1">
        새로움에 두려움 없이 도전하는 사람<span>▼</span>
      </h2>
      <p v-show="show1">
        &nbsp;무언가 새로 시작한다는 것은 이전까지 익숙하게 해왔던 것을 한 편에
        묻어두고 미숙한 부분을 통해 나 스스로를 성장 시킨다는 의미라고
        생각합니다.<br />
        &nbsp;미지에 대한 두려움, 미숙한 실력부터 다시 시작해야 한다는 것은 꽤
        견디기 힘든 일입니다.<br />
        &nbsp;하지만 두려움과 부담감을 넘는 다른 감정을 가진다면 새롭게 시작하는
        것은 꽤 기분 좋은 일 수 있습니다.<br />
        &nbsp;저는 제 적응력과 습득력이 좋다고 생각하고 있고 이 장점을 통해서
        분명 새롭게 시작한 미숙한 일이라도 금방 습득하고 숙련된 업무 처리를
        가능케 할 수 있다고 믿습니다.<br />
        &nbsp;이러한 믿음으로 저는 새롭게 시작하는 것에 대해서 두려움을 가지는
        것이 아닌 자신의 성장을 기대하고 도전할 것입니다.
      </p>
      <h2 @click="show2 = !show2">
        이해하기 쉬운 코드를 위해 수정하는 개발자<span>▼</span>
      </h2>
      <p v-show="show2">
        &nbsp;좋은 글이 되기 위해서는 두 가지 조건이 필요하다고 생각합니다.
        내용이 좋아야 하고 다른 하나는 읽기 편해야 합니다.<br />
        &nbsp;즉 이해하기 쉬워야 된다는 것입니다.<br />
        &nbsp;코드 또한 컴퓨터도 같이 이해하는 하나의 언어로 작성된 글이기에
        이해하기 쉽게 작성해야 하는 것이 좋은 코드를 작성하는 것이라고
        생각합니다.<br />
        &nbsp;개인 프로젝트를 진행하더라도 나중에 다시 내가 짠 코드를 봤을 때
        바로 이해가 가능하게 코드를 작성 할 수 있도록 노력하고 있습니다.<br />
        &nbsp;특히 팀 프로젝트를 진행하면서 팀원들이 제가 맡은 부분에 대해서
        충분히 이해할 수 있도록 수정하고 또 수정하며 가독성이 높은 코드를
        작성하고 싶습니다.<br />
      </p>
      <h2 @click="show3 = !show3">
        마무리 짓지 않으면 잠들지 못하는 개발자<span>▼</span>
      </h2>
      <p v-show="show3">
        &nbsp;어떤 일이던 시작하게 되면 특이점이 오기 전까지는 앞만 보고 달리는
        경향이 있습니다.<br />
        &nbsp;간단한 기능의 경우에는 특이점이라고 할 것도 없이 해당 기능을 전부
        개발하고 복잡한 기능이라면 해당 기능을 분류 하여 각각의 분류에 대한
        개발을 달성하는 것을 목표로 개발합니다.<br />
        &nbsp;가끔은 개발하다가 아이디어가 잘 떠오르지 않거나 떠오른 아이디어를
        구현하는 데에 막혀 오랜 시간이 소요될 때가 있습니다.<br />
        &nbsp;다음 날이 중요하지 않다면 해당 부분을 마무리할 때까지 개발하고
        이를 달성했을 때의 성취감을 얻곤 합니다.<br />
        &nbsp;하지만 어쩔 수 없이 잠을 청해야 하는 경우가 있습니다. 이럴 때는
        정말 잠들지 못합니다.<br />
        &nbsp;잠에 들기 마지막까지 어떤 식으로 개발해야 성공적으로 완수 할 수
        있을지 시뮬레이션을 계속 돌리면서 잠을 설치기 일쑤입니다.<br />
        &nbsp;개발할 범위가 정해지게 되면 이를 달성하기 위한 굳은 의지를 가지고
        개발에 임하고 있습니다.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
    };
  },
};
</script>

<style scoped>
section {
  color: rgb(209, 203, 170);
}

#profile {
  display: flex;
  justify-content: center;
}

#info {
  padding: 2%;
  background-color: rgb(209, 203, 170);
  box-shadow: 5px 5px 5px 0 rgb(196, 196, 196);
  border-radius: 2rem;
  text-align: left;
  width: 80%;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr 3fr;
}

h2 {
  font-size: 25px;
  color: black;
  padding: 0;
  margin: 0;
  font-family: "Noto Sans KR";
  font-weight: 900;
}

.inner-grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.r-1 {
  margin-top: 0.5rem;
  grid-column: 1 / 3;
}

.r-2 {
  margin-top: 0.5rem;
  grid-column: 3 / 5;
}

#title {
  color: white;
}

#introduce {
  margin: 3rem 5%;
  height: inherit;
  text-align: start;
}

#introduce > h2 {
  margin: 1rem;
  font-size: 1.5rem;
  box-shadow: 0 2px 0 0 rgb(209, 203, 170);
}

#introduce > h2 > span {
  float: right;
  color: rgb(209, 203, 170);
}

#introduce > p {
  margin-left: 2rem;
  margin-right: 1rem;
  color: #999999;
  font-size: 1.3rem;
  font-family: "Noto Sans KR";
  font-weight: 500;
}

@media screen and (max-width: 1000px) {
  #info {
    grid-template-columns: 1fr 3fr;
    padding: 5%;
  }

  .r-2 {
    grid-column: 1 / 3;
  }
}
</style>
