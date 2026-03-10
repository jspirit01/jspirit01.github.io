<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container">
      <!-- 모바일에서만 표시되는 타이틀 -->
      

      <div class="parent">
        <div class="mobile-title">
          <Name :nightMode="nightMode"/>
        </div>
        <aside class="sidebar">
          <img class="portrait" :src="picture" alt="Profile picture" />
          <!-- <div class="subtitle"><span>About me</span></div> -->
          <!-- <div class="bio-list">
            <div class="bio-line">
              <div class="period">2025.03 - Now</div>
              <div class="position">Postdoctoral Researcher<br>in Department of AI Convergence</div>
              <div class="affiliation">GIST, Republic of Korea</div>
            </div>
            <div class="bio-line">
              <div class="period">2019.03 - 2025.02</div>
              <div class="position">Ph.D in School of Integrated Technology</div>
              <div class="affiliation">GIST, Republic of Korea</div>
            </div>
            <div class="bio-line">
              <div class="period">2014.03 - 2019.02</div>
              <div class="position">B.S in Computer Engineering</div>
              <div class="affiliation">Hongik University, Republic of Korea</div>
            </div>
          </div> -->

          <div class="contact-list">
            <!-- <div class="contact-line">
              <i class="fa fa-solid fa-map-marker"></i><span>Republic of Korea</span>
            </div> -->
            <div class="contact-line">
              <i class="fa fa-solid fa-envelope"></i><a href="mailto:scijspirit@gmail.com">scijspirit@gmail.com</a>
            </div>
            <div class="contact-line">
              <i class="fa fa-graduation-cap"></i><a href="https://scholar.google.com/citations?user=8GXb90gAAAAJ" target="_blank">Google Scholar</a>
            </div>
            <div class="contact-line">
              <i class="fab fa-linkedin-square"></i><a href="https://www.linkedin.com/in/jooyeong-kim-775049274/" target="_blank">LinkedIn</a>
            </div>
            <div class="contact-line">
              <i class="fab fa-github"></i><a href="https://github.com/jspirit01" target="_blank">GitHub</a>
            </div>
            <div class="contact-line">
              <i class="fa fa-file"></i><a href="http://jspirit01.github.io/CV" target="_blank"><u>Curriculum Vitae</u></a>
            </div>
          </div>
        </aside>

        <main class="main-content">
          <!-- 데스크톱에서만 표시되는 Home 컴포넌트 -->
          <div class="desktop-home">
            <Name :nightMode="nightMode"/>
          </div>
          <Home :nightMode="nightMode"/>
          <Update id="update" :nightMode="nightMode"/>
          <SelectedPublication id="selected-publication" :nightMode="nightMode"/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Name from "../components/Name";
import Home from "../components/Home";
import Update from "../components/Update";
import Publication from "../components/Publication";
import SelectedPublication from "../components/SelectedPublication";
import info from "../../info";

export default {
  name: "HomePage",
  props: {
    nightMode: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Name, 
    Home,
    Update,
    Publication,
    SelectedPublication
  },
  data() {
    return {
      picture: info.flat_picture
    };
  },
  mounted() {
    ["about", "recommendation", "publication", "patent", "skills", "portfolio"].forEach((l) => {
      if (window.location.href.includes(l)) {
        var elementPosition = document.getElementById(l).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
      }
    });
  }
};
</script>

<style scoped>
/* 사이드바 - 프로필 영역 */
.sidebar {
  flex: 0 0 170px;
  min-width: 170px;
}

.portrait {
  width: 160px;
  height: 160px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 50%;
  text-align: left;
  /* border: 1px solid #e5e7eb; */
   box-shadow: 0px 2px 10px rgba(129, 129, 129, 0.5);
}

/* 메인 콘텐츠 영역 */
.main-content {
  flex: 1;
  min-width: 0; /* flexbox overflow 방지 */
}

/* 섹션 타이틀 */
.subtitle {
  font-weight: 700;
  font-size: 18px;
  border-bottom: 1px solid #535a5e;
  margin-bottom: 0.3rem;
  margin-top: 1.5rem;
  padding-bottom: 0.3rem;
}

/* 약력 리스트 */
.bio-list .bio-line {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.bio-list .bio-line .period {
  font-weight: 600;
}

/* 연락처 리스트 */
.contact-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.5rem;
  gap: 5px;
  text-align: left;
}

.contact-line {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  gap: 8px;
}

.contact-line a {
  text-decoration: none;
  color: inherit;
}

.contact-line i {
  font-size: 14px;
  width: 20px;
  text-align: center;
}

/* 태블릿 반응형 */
@media (max-width: 1024px) {
  .sidebar {
    flex: 0 0 200px;
    min-width: 200px;
  }
/* 
  .portrait {
    max-width: 180px;
  } */
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .sidebar {
    flex: none;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: flex-start;
  }

  /* .portrait {
    max-width: 150px;
    margin: 0;
  } */

  .contact-list {
    align-items: flex-start;
    text-align: left;
  }

  .subtitle {
    text-align: left;
  }

  .bio-list, .contact-list {
    text-align: left;
  }
}

/* 모바일 타이틀 표시/숨기기 */
.mobile-title {
  display: none;
}

.desktop-home {
  display: block;
}

@media (max-width: 768px) {
  .mobile-title {
    display: block;
    /* font-size: 100px; */
    /* margin-bottom: 2rem; */
  }

  .desktop-home {
    display: none;
  }
}

/* 작은 모바일 */
@media (max-width: 480px) {
  .sidebar {
    padding: 0;
  }

  /* .portrait {
    max-width: 200px;
  } */
}
</style>