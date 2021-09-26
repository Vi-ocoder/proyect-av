<template>
  <v-app>
    <app-bar />
    
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      AppBar: () => import('./components/AppBar'),
    },
    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo&display=swap');
</style>