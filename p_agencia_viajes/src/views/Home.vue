<template>
  <v-container>
    <v-card>
      <div>
        <solo-home />
      </div>
    </v-card>
    <v-card>
      <div>
        <traer-carrusel/>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    TraerCarrusel: () => import("../components/carruselHome"),
    SoloHome: () => import("../components/soloHome"),
  },
};
</script>