<template>
  <v-container>
    <v-row>
      <v-col lg="6" sm="12">
        <carrusel-paqs/>
      </v-col>
      <!--Pongo un campo para iniciar sesion en el home-->
      <v-col lg="6" sm="12">
        <v-card heigth="620" v-if="isLogged!=''" >
          <carrusel-paqs-promo />
        </v-card>
        <v-card heigth="620" v-else>
          <login />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CarruselPaqs from "./CarruselPaqs.vue";
import login from "../views/webPage/Login.vue";
import CarruselPaqsPromo from './CarruselPaqsPromo.vue';
export default {
  components: {
    CarruselPaqs,
    login,
    CarruselPaqsPromo,
  },
  data() {
    return {
      root:"carruselHome",
      isLogged:"",
    };
  },
  mounted(){
    this.isLogged = sessionStorage.getItem("role")
  },
};
</script>
<style>
</style>