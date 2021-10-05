<style>
.iframe-container {
  overflow: hidden;
  /* 16:9 aspect ratio */
  padding-top: 56.25%;
  height:500px;
  position: relative;
}

.iframe-container iframe {
   border: 0;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}

</style>

<template>
  <v-app id="inspire">

    <v-main>

      <!-- imagen parallax de portada  -->
      <v-parallax dark height="300" src="../../../public/images/pagina/banner_1.jpg">
        <v-overlay value="true" absolute>
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1> Contactese con nosotros para recibir información o asesorias. </h1>
            </v-col>
          </v-row>
        </v-overlay>
      </v-parallax>
      <!-- contenido principal  -->
      <v-container>
        <!-- Inicio  -->
        <div class="row mt-8">
              <!-- direeccion  -->
              <div class="col-md-4 pa-5 mt-5">
                <div fluid style="height:100px; width:100px" class="ma-auto black d-flex text-xs-center align-center justify-center rounded-circle">
                  <v-icon size="50" color="white" class="mx-auto text-xs-center"> fas fa-map-marker-alt </v-icon>
                </div>
                <div class="text-center pt-2">
                  <h3 class="font-weight-bold"> Direccion </h3>
                  <p> Calle 123 #3-21 </p>
                </div>
              </div>

               <!-- telefonos  -->
               <div class="col-md-4 pa-5 mt-5">
                <div fluid style="height:100px; width:100px" class="ma-auto black d-flex text-xs-center align-center justify-center rounded-circle">
                  <v-icon size="50" color="white" class="mx-auto text-xs-center"> fab fa-whatsapp </v-icon>
                </div>
                <div class="text-center pt-2">
                  <h3 class="font-weight-bold"> Whatsapp </h3>
                  <p> (+57) 312 555 66 44 </p>
                </div>
              </div>

               <!-- correo corp.  -->
               <div class="col-md-4 pa-5 mt-5">
                <div fluid style="height:100px; width:100px" class="ma-auto black d-flex text-xs-center align-center justify-center rounded-circle">
                  <v-icon size="50" color="white" class="mx-auto text-xs-center"> far fa-envelope </v-icon>
                </div>
                <div class="text-center pt-2">
                  <h3 class="font-weight-bold"> Correo </h3>
                  <p> info@viajestourimst.co </p>
                </div>
              </div>

              <!-- mapa de prueba  -->
              <div class="col-md-12 pa-5 mt-5 iframe-container">

              
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2295.75148710888!2d-90.32486268850452!3d-0.6960214939756869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sco!4v1632507907717!5m2!1ses!2sco" width="1200" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

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