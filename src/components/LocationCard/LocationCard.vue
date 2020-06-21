<template>
  <div class="location-card-container" id="location">
     <div class="top">
         <h4>{{neighborhood}}</h4>
         <p class="h4">{{phone}}</p>
     </div>
     <img  :src="require('@/assets/img/' + img)" alt="" srcset="">
     <div class="bottom">
         <p class="h4">{{addres}}</p>
         <button class="h5"> <a :href="directions"> Veja o Caminho</a></button>
     </div>
  </div>
</template>
<script>
export default {
  props:['neighborhood','phone','img','addres','directions']  
}
</script>
<style lang="scss" scoped>
    @import'./LocationCard.scss';
</style>