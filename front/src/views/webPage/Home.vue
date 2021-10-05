<template>
  <v-app id="inspire">

    <v-main>

      <!-- imagen parallax de portada  -->
      <v-parallax dark height="560" src="../../../public/images/pagina/banner_1.jpg">
        <v-overlay value="true" absolute>
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <p class="mb-4">
                Viaja a cualquier rincón de colombia, sin dar vueltas
              </p>
              <h1> Haga que su viaje sea increíble con nosotros </h1>
            </v-col>
          </v-row>
        </v-overlay>
      </v-parallax>
 
      <!-- contenido principal  -->
      <v-container>
        <!-- Inicio  -->
        <div class="row mb-5">
          <div class="col-md-12 mt-5  text-center"> 
            <h2 class="mb-4"> Es hora de comenzar tu aventura </h2>
            <p>Ofrecemos paquetes variados que se ajusten a tus gustos, con precios asequibles.</p>
          </div>

          <div class="col-md-4 col-sm-6 mt-5 col-10  offset-1 offset-md-0 text-center"> 
            <v-icon x-large color="amber"> fas fa-map-marked-alt  </v-icon>
            <h2 class="mb-4"> Variedad de Destinos</h2>
            <p class="text-justify"> Muchos lugares ofertados para viajar por todo el pais. </p>
          </div>

          <div class="col-md-4 col-sm-6 mt-5 col-10  offset-1 offset-md-0 text-center"> 
            <v-icon x-large color="amber"> fas fa-hotel  </v-icon>
            <h2 class="mb-4"> Alojamientos </h2>
            <p class="text-justify"> Tenemos alianza con variedad de hoteles para poder hospedarse en su viaje. </p>
          </div>

          <div class="col-md-4 col-sm-6 mt-5 col-10  offset-1 offset-md-0 text-center"> 
            <v-icon x-large color="amber"> fas fa-heartbeat </v-icon>
            <h2 class="mb-4"> Seguridad </h2>
            <p class="text-justify"> Nuestros paquetes tambien incluyen un seguros de vida para que puedas viajar sin preocupaciones. </p>
          </div>

          <div class="col-md-4 mt-5 col-sm-6 col-10  offset-1 offset-md-0 text-center"> 
            <v-icon x-large color="amber"> fas fa-plane </v-icon>
            <h2 class="mb-4"> Transporte </h2>
            <p class="text-justify"> Puedes elegir la forma en la que quieras viajar, contamos con transportes aereo y terrestre. </p>
          </div>

          <div class="col-md-4 mt-5 col-sm-6 col-10  offset-1 offset-md-0 text-center"> 
            <v-icon x-large color="amber"> fas fa-tags </v-icon>
            <h2 class="mb-4"> Promociones </h2>
            <p class="text-justify"> Por temporadas tambien ofrecemos descuentos en paquetes unicos de viajes. </p>
          </div>
        </div>
        <br><br><br>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      value: 'home' // Donde quiero que inicie pintado el selector del menu v-bottom-navigation
     }),
  }
</script>