<template>
    
    <p>
        <span class="home-title" :class="{ pgray: !nightMode, 'text-light': nightMode }"><b>JooYeong</b> Kim</span>
        <span class="home-subtitle" :class="{ pgray: !nightMode, 'text-light': nightMode }">HCI Researcher @ GIST</span>
      </p>

</template>

<script>

export default {
  name: "Name",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>

.home-title {
  font-size: 32px;
  font-weight: 400;
  display: block;
}

.home-subtitle {
  font-weight: 400;

}
</style>