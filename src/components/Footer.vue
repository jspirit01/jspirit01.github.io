<template>
  <!-- <div class="bg-secondary"> -->
  <div class="footer">
    <div class="container py-1 pt-1">
      <!-- <div class="row pt-2 align-items-center"> -->
        
    <span>© 2022-2025 JooYeong, a fork of original copyright 2020 <a href="https://github.com/hrishikeshpaul/portfolio-template?tab=readme-ov-file" target="_blank" >Hrishikesh Paul</a> | Licensed under MIT</span>
        <!-- <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow"
          style="color: white;"
        >
          <span>JooYeong Kim, Ph.D.</span>
        </div> -->

        <!-- <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('scholar')"
            >
              <i class="fab fa-google"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('homepage')"
            >
              <i class="fa fa-briefcase"></i>
            </button>
          </div>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Footer",
  data() {
    return {
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
span {
  font-weight: 400;
  font-size: 0.8rem;
}


.footer {
  text-align: center;
  border-top: 0.5px solid gray; /* Add a line above the span */
  width: 100%;
}

.footer a {
  color: inherit; /* 하이퍼링크의 색상을 부모 요소의 색상과 동일하게 설정 */
  text-decoration: none; /* 하이퍼링크의 밑줄 제거 */
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
