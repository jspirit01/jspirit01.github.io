<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st pb-4 mb-4">
    <div class="maintitle"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000">
      <span>Update</span>
    </div>
    <div class="update-list">
      <!-- v-for를 통해 업데이트 항목 렌더링 -->
      <div v-for="(update, index) in updates" :key="update.date" class="update-line"
           data-aos="fade-up"
           data-aos-once="true"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           v-show="index < 4 || showAll">
        <div class="date">{{ update.date }}</div>
        <!-- headline 내용에 HTML 태그가 포함되어 있으므로 v-html 사용 -->
        <div class="headline" v-html="update.headline"></div>
      </div>
    </div>
    <!-- 업데이트 항목이 4개보다 많을 경우 토글 버튼 표시 -->
    <div v-if="updates.length > 4" class="toggle-button" @click="toggle">
      <span>{{ showAll ? 'Show less' : 'Show more' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publications",
  props: {
    nightMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 토글 여부를 결정하는 변수
      showAll: false,
      // 업데이트 항목 배열 (최신순 정렬)
      updates: [
      {
          date: "2025.04.28.",
          headline: "Had a great time attending CHI 2025 in Yokohama, Japan 🇯🇵 🎏 ",
        },
        {
          date: "2025.02.05.",
          headline: "Had a great experience presenting my thesis research at a NAVER Tech Talk! 🙂",
        },
        {
          date: "2025.01.25.",
          headline: "Our paper has been finally accepted to <i>Scientific Data</i> (IF=5.8): \"Pre-AttentiveGaze: gaze-based authentication dataset with momentary visual interactions.\"",
        },
        {
          date: "2025.01.17.",
          headline: "Our paper has been conditionally accepted to <i>CHI 2025</i>: \"OnomaCap: Making Non-speech Sound Captions Accessible and Enjoyable through Onomatopoeic Sound Representation.\"",
        },
        {
          date: "2024.11.13.",
          headline: "I have successfully defended my doctoral dissertation! 🎓 I will graduate in February 2025.",
        },
        {
          date: "2024.10.15.",
          headline: "Our paper has been finally accepted to the <i>International Journal of Human-Computer Studies</i> (IF=5.3): \"Visualizing Speech Styles in Captions for Deaf and Hard-of-Hearing Viewers.\"",
        },
        {
          date: "2023.01.19.",
          headline: "Our paper has been finally accepted to <i>Universal Access in the Information Society</i> (IF=2.4): \"Interactive Description to Enhance Accessibility and Experience of Deaf and Hard-of-Hearing Individuals in Museums.\"",
        },
        {
          date: "2023.01.14.",
          headline: "Our paper has been conditionally accepted to <i>CHI 2023</i>: \"Visible Nuances: A Caption System to Visualize Paralinguistic Speech Cues for Deaf and Hard-of-Hearing Individuals.\"",
        },
        {
          date: "2022.09.19.",
          headline: "Our paper has been finally accepted to <i>IEEE Transaction on Affective Computing</i> (IF=13.99): \"Immersion Measurement in Watching Videos Using Eye-tracking Data.\"",
        },
        {
          date: "2022.02.10.",
          headline: "Our paper has been conditionally accepted to <i>CHI 2022</i>: \"We Play and Learn Rhythmically: Gesture-based Rhythm Game for Children with Intellectual Developmental Disabilities to Learn Manual Sign.\"",
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.showAll = !this.showAll;
    },
  },
};
</script>

<style scoped>
.update-list .update-line {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.update-list .update-line .date {
  font-weight: 600;
  margin-right: 1rem;
  flex-shrink: 0;
  width: 80px;
  text-align: left;
}

.update-list .update-line .headline {
  flex-grow: 1;
}

.toggle-button {
  /* text-align: center; */
  cursor: pointer;

  /* font-weight: bold; */
  margin-top: 1rem;
  font-size: 0.9rem;
}

/* On hover, underline the text */
.toggle-button:hover {
  text-decoration: underline;
}
</style>
