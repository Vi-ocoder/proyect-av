<template>
  <v-container>
    <v-row>
      <v-col lg="6" sm="12">
        <carrusel-paqs/>
      </v-col>
      <!--Pongo un campo para iniciar sesion en el home-->
      <v-col lg="6" sm="12">
        <v-card  v-if="isLogged!=''&&isLogged!=null&&isLogged!=undefined" >
          <calendario/>
        </v-card>
        <v-card v-if="isLogged==null||isLogged==undefined||isLogged==''">
          <login />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CarruselPaqs from "./CarruselPaqs.vue";
import login from "../views/webPage/Login.vue";
import Calendario from './Profile/Calendario.vue';
export default {
  components: {
    CarruselPaqs,
    login,
    Calendario,
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