<template>
  <div id="app" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
    <Navbar @scroll="scrollTo" @nightMode="switchMode" :nightMode="nightMode" />
    <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
      <div class="parent">
        <div class="row">
          <div class="left-pannel">
            <img class="portrait" :src="picture" />
            <div class="subtitle"><span>About me</span></div>
            <div class="bio-list">
              <div class="bio-line">
                <div class="period">Feb. 2019 - Now</div>
                <div class="position">Ph.D candidate<br>School of Integrated Technology</div>
                <div class="affiliation">GIST, Republic of Korea</div>
              </div>
              <div class="bio-line">
                <div class="period">Mar. 2014 - 2019</div>
                <div class="position">B.S in Computer Engineering</div>
                <div class="affiliation">Hongik University, Republic of Korea</div>
              </div>
            </div>


            <div class="contact-list">
              <div class="contact-line">
                <i class="fa fa-solid fa-map-marker"></i><span>Republic of Korea</span>
              </div>
              <div class="contact-line">
                <i class="fa fa-solid fa-envelope"></i><a href="mailto:scijspirit@gmail.com">scijspirit@gmail.com</a>
                <!-- <span type="button" 
                v-tooltip="{
                    placement: 'right',
                    content: 'click to copy',
                    hideOnTargetClick: true,
                    trigger: 'hover'
                  }" 
                v-clipboard:copy="email"
              >jspirit01@gm.gist.ac.kr
              </span> -->
              </div>
              <!-- <div class="contact-line">
                <a href="mailto:jspirit01@gm.gist.ac.kr"><i class="fa fa-sharp fa-solid fa-envelope"></i> jspirit01@gm.gist.ac.kr</a>
              </div> -->
              <div class="contact-line">
                <i class="fa fa-graduation-cap"></i><a href="https://scholar.google.com/citations?user=8GXb90gAAAAJ" target="_blank">Google Scholar</a>
              </div>
              <div class="contact-line">
                <i class="fab fa-linkedin-square"></i><a href="https://www.linkedin.com/in/jooyeong-kim-775049274/" target="_blank">LinkedIn</a>
              </div>
              <div class="contact-line">
                <i class="fa fa-file"></i><a href="http://jspirit01.github.io/CV" target="_blank"><u>Curriculum Vitae</u></a>
              </div>

              <!-- <div class=contact-line>
                <a href="https://www.instagram.com/popomimicats/">@popomimicats</a>
              </div> -->
               
            </div>
           


            <!-- <div class="subtitle"><span>Updates</span></div>
              <div class="update-list">
                <div class="update-line">
                  <div class="date">2023.01.19.</div>
                  <div class="headline">Our paper has been finally accepted to <i>Universal Access in the Information Society</i>: <span style="font-weight: 600;">"Interactive Description to Enhance Accessibility and Experience of Deaf and Hard-of-Hearing Individuals in Museums"</span>.</div>
                </div>
                <div class="update-line">
                  <div class="date">2023.01.14.</div>
                  <div class="headline">Our paper has been conditionally accepted to <i>CHI 2023</i>: <span style="font-weight: 600;">"Visible Nuances: A Caption System to Visualize Paralinguistic Speech Cues for Deaf and Hard-of-Hearing Individuals"</span>.</div>
                </div>
                <div class="update-line">
                  <div class="date">2022.09.19.</div>
                  <div class="headline">Our paper has been finally accepted to <i>IEEE Transaction on Affective Computing</i> (IF=13.99): <span style="font-weight: 600;">"Immersion Measurement in Watching Videos Using Eye-tracking Data"</span>.</div>
                </div>
                <div class="update-line">
                  <div class="date">2022.02.10.</div>
                  <div class="headline">Our paper has been conditionally accepted to <i>CHI 2022</i>: <span style="font-weight: 600;">"We Play and Learn Rhythmically: Gesture-based Rhythm Game for Children with Intellectual Developmental Disabilities to Learn Manual Sign"</span>.</div>
                </div>
              </div> -->


          </div>

          <div class="main-pannel">
            <Home :nightMode="nightMode"/>
            <!-- <About id="about" :nightMode="nightMode" /> -->
            <!-- <Skills id="skills" :nightMode="nightMode" /> -->
            <!-- <Recommendation id="recommendation"  :nightMode="nightMode"/> -->
            <Update id="update" :nightMode="nightMode"/>
            <Publication id="publication" :nightMode="nightMode"/>
            <Patent id="patent" :nightMode="nightMode" />
            <Portfolio id="portfolio" :nightMode="nightMode" />

            <!--<Contact id="contact" :nightMode="nightMode" /> -->
            

          </div>
        
        </div>
      
      </div>
    </div>
    <Footer :nightMode="nightMode" />
    
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Recommendation from "./components/Recommendation";
import Update from "./components/Update";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Patent from "./components/Patent";
import Publication from "./components/Publication";
import info from "../info";


export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Portfolio,
    Recommendation,
    Update,
    Contact,
    Footer,
    Patent,
    Publication
  },
  data() {
    return {
      nightMode: false,
      config: info.config,
      picture: info.flat_picture,
      email: "jspirit01@gm.gist.ac.kr"
    };
  },
  created() {
    if (this.config.use_cookies) {
      this.nightMode = this.$cookie.get("nightMode") === "true" ? true : false;
    }
  },
  mounted() {
    ["about", "recommendation", "contact", "skills", "portfolio"].forEach((l) => {
      if (window.location.href.includes(l)) {
        var elementPosition = document.getElementById(l).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
      }
    });
  },
  methods: {
    switchMode(mode) {
      if (this.config.use_cookies) {
        this.$cookie.set("nightMode", mode);
      }
      this.nightMode = mode;
    },
    scrollTo(ele) {
      if (ele == "home") {
        this.$router.push(`/`);
        window.scrollTo({ top: -80, behavior: "smooth" });
      } else {
        var elementPosition = document.getElementById(ele).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
        if (this.$router.history.current.path !== `/${ele}`)
          this.$router.push(`/${ele}`);
      }
    }
      
  }
};
</script>

<style>
@import "https://use.fontawesome.com/releases/v5.12.1/css/all.css";

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

@media screen and (max-width: 580px) {
  #app {
    width: fit-content;
  }
}

html, body { 
    overscroll-behavior: none; 
}

.parent {
  display: flex;
  margin-top: 38px;
  padding-top: 5rem;
  position: relative;
  margin-left: 15%;
  margin-right: 15%;
}

.pgray {
  color: #535a5e;
}

.pblue {
  color: rgb(255, 112, 56);
}

.bg-dark2 {
  background-color: #262c30 !important;
}

.text-light {
  color: #d3d2d2 !important;
}

.p-st {
  transition: all 0.5s !important;
}

/* To set scrollbar width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 9px;
  border: 2px solid white; /* Use your background color instead of White */
  background-clip: content-box;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 9px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: rgb(212, 149, 97);
  color: white;
  border-radius: 8px;
  font-size: 10px;
  /* padding: 5px 10px 4px; */
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: rgb(212, 149, 97);
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 10px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;
}

.portrait {
  width: 300px;
}

.left-pannel {
  width: 350px;
  padding-right: 52.5px;
  font-size: 12pt;
  align-items: flex-start;
}

.main-pannel {
  flex: 1 1;
  padding-right: 35px;
}

.subtitle {
  font-weight:700;
  font-size:18px;
  border-bottom: 1px solid #535a5e;
  margin-bottom: 0.3rem;
  margin-top:1.5rem;
  justify-content: space-between;
  padding-bottom: 0.3rem;
}

.maintitle {
  font-weight:700;
  font-size: 24px;
  border-bottom: 1px solid #535a5e;
  margin-top:1.5rem;
  justify-content: space-between;
  padding-bottom: 0.3rem;
}

.minititle {
  font-weight:500;
  font-size: 18px;
  margin-top:2rem;
  justify-content: space-between;
  font-style: italic;
}

.bio-list .bio-line{
  margin-bottom: 0.5rem;
  font-size: .9rem;
}

.bio-list .bio-line .period {
  font-weight: 600;
}
/* 
.update-list .update-line{
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.update-list .update-line .date {
  font-weight: 600;
  font-size: 1rem;
} */


/* .contact-list {
  margin-top: 1.5rem;
}
.contact-list .contact-line {
  font-size: 0.8rem;
} */

.contact-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 왼쪽 정렬 */
    margin-top: 1.5rem;
    gap: 5px; /*각 줄 사이의 간격*/
}

.contact-line {
    display: flex;
    align-items: center; /* 아이콘과 텍스트 정렬 */
    font-size: 0.8rem; /* 글씨 크기 통일 */
    gap: 8px; /* 아이콘과 텍스트 사이 일정한 공백 */
}

.contact-line span {
    display: flex;
    align-items: center;
    
    
}

.contact-line a {
  text-decoration: none;
  color: inherit; /* 기본 텍스트 색상 유지 */
}

.contact-line i {
    font-size: 14px; /* 아이콘 크기 조정 */
    width: 20px; 
    text-align: center; /* 아이콘 정렬 */
}

/* 
.publication-list .publication-line {
  margin-top: 14px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.publication-list .publication-line .title{
  font-size: 16px;
  padding-bottom: 0.3rem;
  font-weight: 600;
}
.publication-list .publication-line .authors{
  padding-bottom: 0.3rem;
  font-weight: 400;
}
.publication-list .publication-line .journal{
  padding-bottom: 0.3rem;
  font-weight: 500;
} */

.cats-link:hover {
    background: radial-gradient(circle at 30% 107%, #fdf497b7 0%, #fdf497a8 5%, #fd5849a1 45%, #d6249ea1 60%, #2859ebb6 90%);
}
</style>
