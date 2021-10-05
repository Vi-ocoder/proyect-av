<template>
  <v-app id="inspire">
    <v-main>
      <!-- contenido principal  -->
      <v-container>
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Paquetes turisticos</h1>
            <p>Destinos para viajar por el pais</p>
          </div>

          <div class="col-md-3 col-sm-6 col-6">
            <v-img
              class="rounded"
              height="320"
              width="255"
              src="../../../public/images/pagina/cundinamarca.jpg"
            >
              <div absolute class="pa-5 pt white--text font-weight-bold">
                <h2>Cundinamarca</h2>
              </div>
            </v-img>
          </div>

          <div class="col-md-3 col-sm-6 col-6">
            <v-img
              class="rounded"
              height="320"
              width="255"
              src="../../../public/images/pagina/antioquia.jpg"
            >
              <div absolute class="pa-5 pt white--text font-weight-bold">
                <h2>Antioquia</h2>
              </div>
            </v-img>
          </div>

          <div class="col-md-3 col-sm-6 col-6">
            <v-img
              class="rounded"
              height="320"
              width="255"
              src="../../../public/images/pagina/valle.jpg"
            >
              <div absolute class="pa-5 pt white--text font-weight-bold">
                <h2>Valle del cauca</h2>
              </div>
            </v-img>
          </div>

          <div class="col-md-3 col-sm-6 col-6">
            <v-img
              class="rounded"
              height="320"
              width="255"
              src="../../../public/images/pagina/nariño.jpg"
            >
              <div absolute class="pa-5 pt white--text font-weight-bold">
                <h2>Nariño</h2>
              </div>
            </v-img>
          </div>
        </div>

        <!-- paquetes TRAIDOS DE LA BD (agregado por victor) -->
        <div id="v-container-paqs">
          <v-btn
            id="addButton"
            color="primary"
            dark
            absolute
            top
            right
            fab
            to="/crear-paquete"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn
            id="addButton2"
            color="secondary"
            dark
            absolute
            top
            right
            fab
            @click="dialog = !dialog"
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </div>

        <!-- paquetes turisticos  -->
        <div class="row">
          <div class="col-md-12 text-center">
            <v-divider></v-divider>
            <BR></BR>
            <h2 id="titleOne">PAQUETES TURISTICOS</h2>
          </div>
          <div
            class="col-md-4 col-sm-6 col-12"
            v-for="paq in paqs"
            :key="paq.idPaq"
          >
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="250" :src="paq.imagePaq"></v-img>

              <v-card-title> {{ paq.cityPaq }} </v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <div class="grey--text">{{ paq.depPaq }}</div>
                </v-row>
              </v-card-text>
              <v-card-title>Desde: $ {{ paq.valuePaq }}</v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <!--Para el dialogo ver detalles-->
                <v-row>
                  <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="90%"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="lookDetails"
                        text
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                        @click="reserve"
                        >DETALLES
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-toolbar color="primary" dark>
                          {{ paq.namePaq }}
                          // Paquete N°:
                          {{ paq.idPaq }}
                        </v-toolbar>
                        <v-card-text>
                          <ver-detalles :paq="paq" v-on:update="updateList()" />
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false"
                            >CERRAR</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-row>
                <!--fin del dialogo ver detalles-->
                <v-btn
                  id="btnReservar"
                  color="green darken-3"
                  text
                  @click="reserve"
                  to = "/ReservarPaq"
                >
                  RESERVAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
        <!--FIN DE PAQUETES TURISTICOS-->
        <v-divider class="mx-4 pa-5"></v-divider>

        <!-- paquetes promocionales  -->
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 id="titleTwo">PAQUETES PROMOCIONALES</h2>
          </div>

          <div
            class="col-md-4 col-sm-6 col-12"
            v-for="paq in paqsDcto"
            :key="paq.idPaq"
          >
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="250" :src="paq.imagePaq"></v-img>

              <v-card-title> {{ paq.cityPaq }} </v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <div class="grey--text">{{ paq.depPaq }}</div>
                </v-row>
              </v-card-text>
              <v-card-title>
                ${{ paq.valuePaq }}
                <v-chip
                  class="ms-4"
                  close-icon="mdi-close-outline"
                  color="yellow"
                >
                  <v-icon class="mr-2"> fas fa-tags </v-icon>
                  {{ paq.dcto }}% OFF
                </v-chip>
              </v-card-title>
              <v-card-actions>
               <!--Para el dialogo ver detalles-->
                <v-row>
                  <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="90%"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="lookDetails"
                        text
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                        @click="reserve"
                        >DETALLES
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-toolbar color="primary" dark>
                          {{ paq.namePaq }}
                          // Paquete N°:
                          {{ paq.idPaq }}
                        </v-toolbar>
                        <v-card-text>
                          <ver-detalles :paq="paq" v-on:update="updateList()" />
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false"
                            >CERRAR</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-row>
                <!--fin del dialogo ver detalles-->
                <v-btn color="green darken-3" text @click="reserve" to= "/ReservarPaq" >
                  RESERVAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
        <br /><br /><br />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { getAllPaqs } from "../../services/PaqsService"; //trae los datos desde la BD
export default {
  components: {
    VerDetalles: () => import("../../components/VerDetalles.vue"),
  },
  data: () => ({
    drawer: null,
    value: "home", // Donde quiero que inicie pintado el selector del menu v-bottom-navigation
    loading: false,
    
    //ESTO LO PUSO VICTOR
    paquetes: [], //array con todos los paquetes que hay en la BD
    paqs: [], //array con los paquetes normales
    paqsDcto: [], // array con paquetes promocionales
    res : "",
    selection: 1,
  }),
  methods: {
    //activar el loading
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
      
    },
  },

  //ESTO LO PONE VICTOR
  mounted() {//este mounted trae los datos de cada paquete desde una base de datos en mongo
    getAllPaqs()
      .then((response) => {
        this.paquetes = response.data; //llena el array "paquetes" con los datos de la bd

        this.paqsDcto = this.paquetes.filter((paq) => paq.dcto > 0); //filtra los paquetes que tienen descuento para ubicarlos en paquetes promocionales
        this.paqs = this.paquetes.filter((paq) => paq.dcto == null ||paq.dcto == 0); //filtra los paquetes que NO tienen descuento para ubicarlos en paquetes TURISTICOS
      })
      .catch((err) => console.error(err));
  },
};
</script>
<style>
#btnReservar {
  font-family: "Exo2", sans-serif;
  padding-right: 35px;
  padding-left: 35px;
}
#titleOne, #titleTwo{
  font-family: "Exo2", sans-serif ;
  color: green darken-3 ;
}
</style>