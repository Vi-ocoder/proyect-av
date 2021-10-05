<template>
  <v-app>
      <!--<app-bar /-->
      <AppBar />
      <br>
      <br>    
      <router-view />

      <Footer />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    //AppBar: () => import("./components/AppBar"),
    AppBar: () => import("./components/AppBar"),
    Footer: () => import("./components/Footer"),
  },
  data: () => ({}),
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Exo&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital@1&display=swap');
</style>