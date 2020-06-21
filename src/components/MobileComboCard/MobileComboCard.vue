<template>
  <div class="container">
    <div class="left-content">
      <img :src="require('@/assets/img/' + img)" alt="Hamburger" />
      <div class="left-text">
        <p class="h4">{{ name }}</p>
        <p class="h5">{{ desc }}</p>
      </div>
    </div>
    <p class="h4">{{ price }}</p>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    desc: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./MobileComboCard.scss";
</style>
