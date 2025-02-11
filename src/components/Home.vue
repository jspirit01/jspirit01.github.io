<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <div
      class="home-container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <span
        class="home-title"
        :class="{ pgray: !nightMode, 'text-light': nightMode }"
        >Hi, I'm JooYeong Kim. </span
      >
      <div>
        <p v-html="description"></p>
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
.home-title {
  font-size: 28px;
  font-weight: 500;
}

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
  padding: 0.3rem;
}
/* LEAVES */
</style>
