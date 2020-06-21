<template>
  <div class="card-container">
    <img src="@/assets/img/t-smash.jpg" alt="" srcset="" />
    <div class="bottom">
      <div class="desc">
        <p class="h4">{{name}}</p>
        <p class="h5">{{desc}}</p>
      </div>
      <p class="h4">{{price}}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./DesktopComboCard.scss";
</style>
<script>
export default {
    props:['name','desc','price','img']
}
</script>
