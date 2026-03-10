<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container">
      <div class="parent">
      <!-- <div class="publication-page"> -->
        <Publication id="publication" :nightMode="nightMode"/>
      <!-- </div> -->
    </div>
    </div>
  </div>
</template>

<script>
import Publication from "../components/Publication";

export default {
  name: "PublicationPage",
  props: {
    nightMode: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Publication
  }
};
</script>

<style scoped>
.publication-page {
  /* margin-top: 38px; */
  /* padding-top: 5rem; */
}



</style>