<template>
  <div class="container">
    <h3>Unidades</h3>
    <div class="row">
      <LocationCard
        neighborhood="Caiçara"
        phone="3234-8855"
        img="fimino.jpg"
        addres="Rua Firmino Costa,23"
        directions="https://www.google.com.br/maps/place/R.+Firmino+Costa,+23+-+Jardim+Montanh%C3%AAs,+Belo+Horizonte+-+MG,+30750-050/@-19.908058,-43.9829494,17z/data=!3m1!4b1!4m5!3m4!1s0xa69727eac2be01:0x997ff86137645409!8m2!3d-19.9080631!4d-43.9807607"
      />
      <LocationCard
        neighborhood="Caiçara"
        phone="3234-8855"
        img="fimino.jpg"
        addres="Rua Firmino Costa,23"
        directions="https://www.google.com.br/maps/place/R.+Firmino+Costa,+23+-+Jardim+Montanh%C3%AAs,+Belo+Horizonte+-+MG,+30750-050/@-19.908058,-43.9829494,17z/data=!3m1!4b1!4m5!3m4!1s0xa69727eac2be01:0x997ff86137645409!8m2!3d-19.9080631!4d-43.9807607"
      />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    LocationCard : () => import('@/components/LocationCard/LocationCard.vue'),
  },
};
</script>
<style lang="scss" scoped>
@import "./Location.scss";
</style>
