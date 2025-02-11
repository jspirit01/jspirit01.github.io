<template>
    <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
      <!-- Main Title -->
      <div class="maintitle" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span>Publication</span>
      </div>
  
      <!-- International Publications -->
      <div class="minititle" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span>International</span>
      </div>
      <div class="publication-list">
        <div
          v-for="(pub, index) in international"
          :key="'int-' + index"
          class="publication-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <div class="title">{{ pub.title }}</div>
          <!-- HTML 태그 포함을 위해 v-html 사용 -->
          <div class="authors" v-html="pub.authors"></div>
          <div class="journal">
            {{ pub.journal }}
            <a :href="pub.paper_link" target="_blank" class="paper-box">paper</a> 
            <a v-if="pub.video_link" :href="pub.video_link" target="_blank" class="paper-box">video</a>
            <!-- 인용 수가 0보다 클 때만 표시 -->
            <span class="citations pgray" v-if="pub.citations > 0">
                cited by {{ pub.citations }}
            </span>
          </div>
          
          
        </div>
      </div>
  
      <!-- Domestic Publications -->
      <div class="minititle" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span>Domestic</span>
      </div>
      <div class="publication-list">
        <div
          v-for="(pub, index) in domestic"
          :key="'dom-' + index"
          class="publication-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <div class="title">{{ pub.title }}</div>
          <div class="authors" v-html="pub.authors"></div>
          <div class="journal">
            {{ pub.journal }}
          </div> 
            <a v-if="pub.paper_link" :href="pub.paper_link" target="_blank" class="paper-box">paper</a>
            <!-- <span class="citations" v-if="pub.citations > 0">
             Citations: {{ pub.citations }}
            </span> -->
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Publication",
    props: {
      nightMode: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        international: [],
        domestic: []
      };
    },
    mounted() {
      // public 폴더의 publications.json 파일을 불러옴
      fetch('/publications.json')
        .then(response => response.json())
        .then(data => {
          if (data.publications && data.publications.length >= 2) {
            // 첫 번째 객체는 국제 논문, 두 번째 객체는 국내 논문
            this.international = data.publications[0].international || [];
            this.domestic = data.publications[1].domestics || [];
          }
        })
        .catch(error => {
          console.error('Error fetching publications:', error);
        });
    }
  };
  </script>
  
  <style>
  .publication-list .publication-line {
    margin-top: 14px;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
  
  .publication-list .publication-line .title {
    font-size: 16px;
    padding-bottom: 0.3rem;
    font-weight: 500;
  }
  .publication-list .publication-line .authors {
    padding-bottom: 0.3rem;
    font-weight: 400;
  }
  .publication-list .publication-line .journal {
    padding-bottom: 0.3rem;
    font-weight: 500;
    /* display: flex; */
    /* gap:5px; */
  }
.publication-list .publication-line .journal .citations {
    font-style: italic;
    font-size: 0.8rem;
    align-self: flex-end;
}

.paper-box {
  background-color: #f0f0f0; 
  border-radius: 5px; 
  padding: 0px 3px;
  font-size: 0.8rem;
  margin-left:3px;
  margin-right:3px;
  /* text-decoration: none; */

}
  </style>
  