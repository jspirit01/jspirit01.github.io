<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="p-st"
  >
    <div
      class="home-container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <!-- <p>
        <span class="home-title" :class="{ pgray: !nightMode, 'text-light': nightMode }"><b>JooYeong</b> Kim</span>
        <span class="home-subtitle" :class="{ pgray: !nightMode, 'text-light': nightMode }">HCI Researcher @ GIST</span>
      </p> -->
        <!-- <p v-html="description"></p> -->
        <p>
          Hi! I am a researcher in the Korea Culture Technology Institute at <a href="https://www.gist.ac.kr/en/main.html" style="text-decoration: none;" target="_blank">GIST</a>, Republic of Korea. My research focuses on human-centered AI systems that enhance usability and accessibility. I identify challenges people encounter in real-world contexts and develop systems that effectively support their needs. I enjoy applying recent AI technologies to my work and exploring how AI can practically support human. 
        </p>
        <p>
          I received my Ph.D. from School of Integrated Technology at <a href="https://www.gist.ac.kr/en/main.html" style="text-decoration: none;" target="_blank">GIST</a>, where I was advised by Prof. <a href="https://scholar.google.com/citations?user=iTu5G9QAAAAJ&hl=en" style="text-decoration: none;" target="_blank">Jin-Hyuk Hong</a> in <a href="https://sci.gist.ac.kr/sci/" style="text-decoration: none;" target="_blank">SCILAB</a>.  
        </p>
        
      </div>
      
      <!-- <div class="text-center pb-4">
        <button
          class="btn btn-outline-secondary mx-2 "
          @click="open('scholar')"
          v-tooltip.bottom="'scholar'"
        >
          <i class="fab fa-google"></i>
        </button>
        <button
          class="btn btn-outline-secondary mx-2"
          @click="open('github')"
          v-tooltip.bottom="'GitHub'"
        >
          <i class="fab fa-github"></i>
        </button>
        <button
          class="btn btn-outline-secondary mx-2"
          @click="open('homepage')"
          v-tooltip.bottom="'homepage'"
        >
          <i class="fa fa-briefcase"></i>
        </button>
      </div> -->
      

  </div>
</template>

<script>
import info from "../../info";

import Wave from "./helpers/Wave";

export default {
  name: "Home",
  components: {
    Wave,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      scholar: info.links.scholar,
      github: info.links.github,
      homepage: info.links.homepage,
      resume: info.links.resume,
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "scholar":
          window.open(this.scholar, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "homepage":
          window.open(this.homepage, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
/* .home-title {
  font-size: 30px;
  font-weight: 400;
  display: block;
}

.home-subtitle {
  font-weight: 500;

} */

img {
  max-width: 300px;
  margin-bottom: 40px;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-size: 1.0rem;
  font-weight: 400;
}

.home-container {
  margin-bottom: 32px;
}
/* LEAVES */
</style>
