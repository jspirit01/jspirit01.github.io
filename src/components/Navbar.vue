<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top p-st"
      :class="{
        'bg-light': !nightMode,
        'navbar-blur': navbarConfig.blur,
        'bg-dark2': nightMode,
      }"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo :nightMode="nightMode" />
          <!-- <div
          class="recent-update-date pblue">
          updated 2025.2
          </div> -->
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style="color: gray; font-size: 23px;"
            ><i class="fas fa-bars"></i
          ></span>
          
        </button>

        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/home"
                @click.prevent="$emit('scroll', 'home')"
                :class="{ 'text-light': nightMode }"
                >about</a
              >
            </li>
            <!-- <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/skills"
                @click.prevent="$emit('scroll', 'skills')"
                :class="{ 'text-light': nightMode }"
                >skills</a
              >
            </li> -->
            <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="/recommendation"
                @click.prevent="$emit('scroll', 'recommendation')"
                :class="{ 'text-light': nightMode }"
                >publication</a
              >
            </li>
            <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
                :class="{ 'text-light': nightMode }"
                >project</a
              >
            </li>
            <!-- 
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/contact"
                @click.prevent="$emit('scroll', 'contact')"
                :class="{ 'text-light': nightMode }"
                >contact</a
              >
            </li>
            -->
            <!-- <li class="nav-item ml-2"> -->
              <!-- <button
                class="btn btn-outline-secondary mx-2 "
                @click="open('scholar')"
                v-tooltip.bottom="'scholar'"
                :class="{ 'text-light': nightMode }"
              >
                <i class="fab fa-google"></i>
              </button> -->
              <!-- <a
                class="nav-link"
                href="#"
                @click="open('scholar')"
                v-tooltip.bottom="'google scholar'"
                :class="{ 'text-light': nightMode }"
              >scholar
              </a> -->
            <!-- </li> -->
            <li class="nav-item ml-2">
              <!-- <button
                class="btn btn-outline-secondary mx-2"
                @click="open('github')"
                v-tooltip.bottom="'GitHub'"
                :class="{ 'text-light': nightMode }"
              >
                <i class="fab fa-github"></i>
              </button> -->
              <a
                class="nav-link"
                href="#"
                @click="open('github')"
                v-tooltip.bottom="'go to github'"
                :class="{ 'text-light': nightMode }"
              >github
              </a>
            </li>
            <!-- <li class="nav-item ml-2">
              <a
                class="nav-link"
                href="#"
                @click="open('resume')"
                v-tooltip.bottom="'view my cv'"
                :class="{ 'text-light': nightMode }"
              >resume
              </a>
            </li> -->
            <li class="nav-item ml-2">
              <a
                class="nav-link"
                href="#"
                @click="open('homepage')"
                v-tooltip.bottom="'visit our lab!'"
                :class="{ 'text-light': nightMode }"
                style="color:#ac255d"
              >scilab
              </a>
            </li>
            <li class="nav-item ml-2">
              <a
                class="nav-link"
                href="#"
                @click.prevent="switchMode"
                :class="{ 'text-light': nightMode }"
                ><i
                  :class="{
                    'fas fa-moon': nightMode,
                    'far fa-moon': !nightMode,
                  }"
                  v-tooltip.bottom="nightMode ? 'Light Mode' : 'Night Mode'"
                ></i
              ></a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "./helpers/Logo";
import info from "../../info";

export default {
  name: "Navbar",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      navbarConfig: info.config.navbar,
      localNightMode: this.nightMode,
      scholar: info.links.scholar,
      github: info.links.github,
      homepage: info.links.homepage,
      resume: info.links.resume
    };
  },
  components: {
    Logo,
  },
  methods: {
    switchMode() {
      this.localNightMode = !this.localNightMode;
      this.$emit("nightMode", this.localNightMode);
    },
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
.nav-link {
  font-weight: 500;
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  border-bottom: 1px solid rgba(160, 159, 159, 0.336);
  position: fixed !important;
}

.navbar-blur {
  background-color: #ffffff7e;
  backdrop-filter: blur(12px);
}

.recent-update-date{
  font-size:0.6rem;
}
</style>
