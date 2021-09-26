<template>
    
      <div>
        <icons-home />
        <br>
        <h1 id="titulo">AQUÍ HACES REALIDAD TUS SUEÑOS</h1>
        <solo-home />
    <br>
        <traer-carrusel/>
        <br>
        <Footer />
      </div>
  

</template>

<script>
export default {
  name: "Home",
  components: {
    Footer: () => import('../components/Footer'),
    TraerCarrusel: () => import("../components/carruselHome"),
    SoloHome: () => import("../components/soloHome"),
    iconsHome: () => import("../components/iconsHome"),
  },
};
</script>
<style lang="scss">
#titulo{
  position: relative;
  text-align: center;
  color: rgb(103, 143, 218);
  font-family: 'Exo', sans-serif;
  
}


</style>