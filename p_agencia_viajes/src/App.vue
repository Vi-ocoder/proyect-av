<template>
  <v-app>
      <!--<app-bar /-->
      <AppBarX />
    
      <router-view />

      <Footer />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    //AppBar: () => import("./components/AppBar"),
    AppBarX: () => import("./components/AppBarX"),
    Footer: () => import("./components/Footer"),
  },
  data: () => ({}),
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Exo&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital@1&display=swap');
</style>