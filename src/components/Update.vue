<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="maintitle"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000">
      <span>Update</span>
    </div>
      <div class="update-list">
        <div class="update-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          <div class="date">2025.02.05.</div>
          <div class="headline">Had a great experience presenting my thesis research at a NAVER Tech Talk! :)</div>
        </div>
        <div class="update-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          <div class="date">2025.01.25.</div>
          <div class="headline">Our paper has been finally accepted to <i>Scientific Data</i> (IF=5.8): "OnomaCap: Making Non-speech Sound Captions Accessible and Enjoyable through Onomatopoeic Sound Representation."</div>
        </div>
        <div class="update-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          <div class="date">2025.01.17.</div>
          <div class="headline">Our paper has been conditionally accepted to <i>CHI 2025</i>: "OnomaCap: Making Non-speech Sound Captions Accessible and Enjoyable through Onomatopoeic Sound Representation."</div>
        </div>
        <div class="update-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          <div class="date">2024.11.13.</div>
          <div class="headline">I have successfully defended my doctoral dissertation! 🎓 I will graduate in February 2025.</div>
        </div>
        <div class="update-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          <div class="date">2024.10.15.</div>
          <div class="headline">Our paper has been finally accepted to the <i>International Journal of Human-Computer Studies</i> (IF=5.3): "Visualizing Speech Styles in Captions for Deaf and Hard-of-Hearing Viewers.</div>
        </div>
        <div class="update-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          <div class="date">2023.01.19.</div>
          <div class="headline">Our paper has been finally accepted to <i>Universal Access in the Information Society</i> (IF=2.4): "Interactive Description to Enhance Accessibility and Experience of Deaf and Hard-of-Hearing Individuals in Museums.</div>
        </div>
        <div class="update-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          <div class="date">2023.01.14.</div>
          <div class="headline">Our paper has been conditionally accepted to <i>CHI 2023</i>: "Visible Nuances: A Caption System to Visualize Paralinguistic Speech Cues for Deaf and Hard-of-Hearing Individuals.</div>
        </div>
        <div class="update-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          <div class="date">2022.09.19.</div>
          <div class="headline">Our paper has been finally accepted to <i>IEEE Transaction on Affective Computing</i> (IF=13.99): "Immersion Measurement in Watching Videos Using Eye-tracking Data.</div>
        </div>
        <div class="update-line"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          <div class="date">2022.02.10.</div>
          <div class="headline">Our paper has been conditionally accepted to <i>CHI 2022</i>: "We Play and Learn Rhythmically: Gesture-based Rhythm Game for Children with Intellectual Developmental Disabilities to Learn Manual Sign.</div>
        </div>
      </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Publications",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      data1: info.publications[0].international,
      data2: info.publications[1].domestics,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 450;
}

.title2 {
  font-size: 18px;
  font-weight: 500;
  text-align: justify;
}

.title3 {
  opacity: 0.7;
  font-size: 16px;
  font-weight: 400;
  
}



.update-list .update-line {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.update-list .update-line .date {
  font-weight: 600;
  /* font-size: 1rem; */
  margin-right: 1rem; /* Add margin to the right of the date */

  font-weight: bold;
  flex-shrink: 0; /* 날짜 크기가 변하지 않도록 고정 */
  width: 80px; /* 날짜의 고정된 너비 설정 (예시) */
  text-align: left; /* 날짜 오른쪽 정렬 */
}

.update-list .update-line .headline {
  flex-grow: 1; /* Allow headline to take up remaining space */
}

</style>
