<template>
    <div class="publications">
      <div v-for="(pub, index) in publications" :key="index"
           class="publication-line"
           data-aos="fade-up"
           data-aos-once="true"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true">
        <div class="title">{{ pub.title }}</div>
        <!-- v-html을 사용해 HTML 태그(<u> 등)를 렌더링 -->
        <div class="authors" v-html="pub.authors"></div>
        <div class="journal">
          {{ pub.journal }}
          <a :href="pub.paper_link" target="_blank">[paper]</a>
          <a v-if="pub.video_link" :href="pub.video_link" target="_blank">[video]</a>
        </div>
        <div class="citations">
          Citations: {{ pub.citations }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "Publication",
    data() {
        return {
        publications: [],
        };
    },
    mounted() {
        // 배포 시 public 폴더의 파일은 루트에 위치하므로 '/publications.json' 경로 사용
        fetch('/publications.json')
        .then(response => response.json())
        .then(data => {
            this.publications = data;
        })
        .catch(error => {
            console.error('Error fetching publications:', error);
        });
    },
};
</script>