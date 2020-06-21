<template>
  <div id="app">
    <Header />
    <Banner />
    <Combos />
    <Menu />
    <Location />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Header: () => import("@/sections/Header/Header.vue"),
    Banner: () => import("@/sections/Banner/Banner.vue"),
    Combos: () => import("@/sections/Combos/Combos.vue"),
    Menu: () => import("@/sections/Menu/Menu.vue"),
    Location: () => import("@/sections/Location/Location.vue"),
    Footer: () => import("@/sections/Footer/Footer.vue"),
  },
};
</script>

<style lang="scss">
#app {
  background: $ligthest;
}
</style>
