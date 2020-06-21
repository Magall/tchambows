<template>
  <div class="menu-container">
    <div class="item-info">
      <img :src="require('@/assets/img/' + img)" alt="" srcset="" />
      <div class="text">
        <h5>{{name}}</h5>
        <p class="p">
       {{info}}
        </p>
      </div>
    </div>
    <h5>R${{price}}</h5>
  </div>
</template>
<script>
export default {
    props:{
        name:{
            required:true,
            type:String
        },
        info:{
            required:true,
            type:String
        },
        img:{
            required:true,
            type:String
        },
          price:{
            required:true,
            type:String
        }
    }
};
</script>
<style lang="scss" scoped>
@import "./MenuCard.scss";
</style>
