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