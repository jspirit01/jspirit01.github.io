<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="maintitle"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000">
      <span>Patent</span>
    </div>
    <div class="patent-list">
      <div class="patent-line" 
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true">
        <div class="title">Apparatus and method for transcribing sound to onomatopoeic expression</div>
        <div class="inventor">Jin-Hyuk Hong, <u>JooYeong Kim</u></div>
        <div class="number">Korea Patent Application No. 10-2025-0085105</div>
        <!-- <div class="doi"><a href="">[paper]</a></div> -->
      </div>
      <div class="patent-line" 
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true">
        <div class="title">Measuring apparatus and method for visualize voice information</div>
        <div class="inventor">Jin-Hyuk Hong, <u>JooYeong Kim</u>, SooYeon Ahn</div>
        <div class="number">Korea Patent Application No. 10-2023-0101066</div>
        <!-- <div class="doi"><a href="">[paper]</a></div> -->
      </div>
      <div class="patent-line" 
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true">
        <div class="title">Method and apparatus for measuring degree of immersion for driver or contents viewer</div>
        <div class="inventor">Jin-Hyuk Hong, <u>JooYeong Kim</u>, YouJin Choi</div>
        <div class="number">Korea Patent Registration No. 10-2419860-0000</div>
        <!-- <div class="doi"><a href="">[paper]</a></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Patents",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
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



.patent-list .patent-line {
  margin-top: 14px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.patent-list .patent-line .title{
  font-size: 16px;
  padding-bottom: 0.3rem;
  font-weight: 600;
}
.patent-list .patent-line .inventor{
  padding-bottom: 0.3rem;
  font-weight: 400;
}
.patent-list .patent-line .number{
  padding-bottom: 0.3rem;
  font-weight: 500;
}
</style>
