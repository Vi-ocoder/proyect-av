<template>
  <div id="divHome">
    <v-img id="vImg" width="100%" src="https://www.decameron.com/images/todo-incluido/galeria/todo-incluido-xl-003.jpg">
    
    <div id="divIcon0">
        <h1 dark>COLOMviajeros.com <v-icon color="white" x-large>mdi-train-car</v-icon></h1>
      </div>
    </v-img>
    <br>
    <v-divider></v-divider> 
    <br>
    <h3 id="titulo3">CON NOSOTROS SIEMPRE TIENES MÁS</h3>
    <v-divider></v-divider> 
    <br />
    <h2 id="titulo2">...aquí es donde se hacen REALIDAD TUS SUEÑOS!</h2>
    <solo-home />
    <br />
    <traer-carrusel />
    <br />
  </div>
</template>

<script>
export default {
  components: {
    TraerCarrusel: () => import("../components/carruselHome"),
    SoloHome: () => import("../components/soloHome"),
  },
};
</script>
<style lang="scss">
#titulo2, #titulo3 {
  position: relative;
  text-align: center;
  color: rgb(103, 143, 218);
  font-family: "Exo", sans-serif;
}
#divIcon0{
font-family: 'Exo', sans-serif;
font-weight:bold;
font-size: x-large;
text-shadow: 2px 2px 2px black;
position: absolute;
margin-top: 100px;
margin-left: 50px;
color: white; 
background-color: rgba(0, 0, 0, 0.322);
border-radius: 10px;
padding: 10px;
};

#vImg{
  top:-70px
}
</style>