<template>
  <div id="app" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
    <Navbar @scroll="scrollTo" @nightMode="switchMode" :nightMode="nightMode" />
    <router-view :nightMode="nightMode" />
    <Footer :nightMode="nightMode" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer";
import info from "../info";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      nightMode: true,
      config: info.config,
      email: "jspirit01@gm.gist.ac.kr"
    };
  },
  created() {
    if (this.config.use_cookies) {
      this.nightMode = this.$cookie.get("nightMode") === "true" ? true : false;
    }
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
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      else if (ele == "publication") {
        this.$router.push(`/publication`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      else {
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@font-face {
        font-family: 'Gilroy';
        src: url('https://cdn.jsdelivr.net/gh/repalash/gilroy-free-webfont@fonts/Gilroy-Light.eot');
        src: local('Gilroy Light'), local('Gilroy-Light'),
        url('https://cdn.jsdelivr.net/gh/repalash/gilroy-free-webfont@fonts/Gilroy-Light.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/repalash/gilroy-free-webfont@fonts/Gilroy-Light.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/repalash/gilroy-free-webfont@fonts/Gilroy-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }
@font-face {
        font-family: 'Gilroy';
        src: url('https://cdn.jsdelivr.net/gh/repalash/gilroy-free-webfont@fonts/Gilroy-Extrabold.eot');
        src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
        url('https://cdn.jsdelivr.net/gh/repalash/gilroy-free-webfont@fonts/Gilroy-Extrabold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/repalash/gilroy-free-webfont@fonts/Gilroy-Extrabold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/repalash/gilroy-free-webfont@fonts/Gilroy-Extrabold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
    }


@import url("http://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700");

#app {
  font-family: "Roboto", sans-serif;
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

/* 컨테이너 - 최대 너비 제한과 중앙 정렬 */
.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

/* 메인 레이아웃 */
.parent {
  display: flex;
  gap: 3rem;
  margin-top: 30px;
  padding-top: 5rem;
  position: relative;
}

/* 반응형 브레이크포인트 */
@media (max-width: 1200px) {
  .container {
    padding: 0 1.5rem;
  }
  .parent {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  .parent {
    flex-direction: column;
    gap: 1rem;
  }
}

.pgray {
  color: #535a5e;
}

.pblue {
  /* color: rgb(255, 112, 56); */
  color: #027BFF;
}

.bg-dark {
  background-color: #000000 !important;
}

.bg-dark2 {
  background-color: #000000 !important;
}

.text-light {
  color: #d3d2d2 !important;
}

.p-st {
  transition: all 0.5s !important;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 9px;
  border: 2px solid white;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 9px;
}

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

.cats-link:hover {
    background: radial-gradient(circle at 30% 107%, #fdf497b7 0%, #fdf497a8 5%, #fd5849a1 45%, #d6249ea1 60%, #2859ebb6 90%);
}

.maintitle {
  font-size: 30px;
  font-weight: 400;
}

.minititle {
  font-size: 22px;
  margin-bottom: 20px;
  /* font-style: italic; */
  border-bottom: 1px solid #535a5e;
}

</style>