<template>
  <div class="combos-container container">
    
    <div class="mobile">
      <h3>Combos</h3>

      <MobileComboCard
        name="T-Burger"
        desc="Refri + Fritas"
        price="R$ 23,50"
        img="t-burger-1.jpg"
      />
      <MobileComboCard
        name="T-Burger"
        desc="Refri + Fritas"
        price="R$ 23,50"
        img="t-burger-1.jpg"
      />
      <MobileComboCard
        name="T-Burger"
        desc="Refri + Fritas"
        price="R$ 23,50"
        img="t-burger-1.jpg"
      />
    </div>
    <div class="desktop">
      <h3>Combos</h3>
      <div class="combo-card-container">
        <DesktopComboCard
          name="T-Smash"
          desc="Refri + fritas"
          price="R$20,50"
          img="t-smash.jpg"
        />
        <DesktopComboCard
          name="T-Smash"
          desc="Refri + fritas"
          price="R$20,50"
          img="t-smash.jpg"
        />
        <DesktopComboCard
          name="T-Smash"
          desc="Refri + fritas"
          price="R$20,50"
          img="t-smash.jpg"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    MobileComboCard : ()=>import('@/components/MobileComboCard/MobileComboCard.vue'),
    DesktopComboCard: () =>import ('@/components/DesktopComboCard/DesktopComboCard.vue'),
  },
};
</script>
<style lang="scss" scoped>
@import "./Combos.scss";
</style>
