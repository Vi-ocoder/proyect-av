<template>
  <v-container>
    <v-row>
      <v-col lg="6" sm="12">
        <div id="divCarrusel1">
          <!--Pongo un carrusel con los paquetes en el home-->
          <v-carousel
            :cycle="cycle"
            show-arrows-on-hover=true
            progress=true
            delimiter-icon="mdi-minus"
            height="620"
          >
            <v-carousel-item id="car-item" v-for="paq in paqs" :key="paq.idPaq">
              <!--Traigo los datos de cada paquete desde "INFOPAQ"-->
              <infoPaq :paq="paq" :dialog="methodDialog" /> 
              <!--Creo un dialog para mostrar los detalles de cada paq-->
              <v-dialog v-model="dialog" width="95%">
                <v-card>
                  <!--Traigo los datos detalles de cada pac desde "VER DETALLES"-->
                  <verDetalles :paq="paq" :dialog="dialog" />
                  <!--pongo botones flotantes para cerrar el dialog o hacer reserva-->
                  <v-btn
                    id="btnAddPaq"
                    color="primary"
                    relative
                    @click="(dialog = false), (cycle = true)"
                    to="/ReservarPaq"
                    >
                    LO QUIERO
                  </v-btn>
                  <v-btn
                    id="btnClose"
                    color="secundary"
                    relative
                    @click="(dialog = false), (cycle = true)"
                    >
                    CERRAR
                    </v-btn
                  >
                </v-card>
              </v-dialog>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
      <!--Pongo un campo para iniciar sesion en el home-->
      <v-col lg="6" sm="12">
        <v-card>
          <login />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { getAllPaqs } from "../services/PaqsService"; //trae los datos desde la BD
import infoPaq from "../components/infoPaq.vue";
import verDetalles from "../components/VerDetalles.vue";
import login from "../views/webPage/Login.vue";
export default {
  components: {
    verDetalles,
    infoPaq,
    login,
  },
  data() {
    return {
      dialog: false,
      cycle: true,
      paqs: [],
      paq: [],
    };
  },

  mounted() {
    //este mounted trae los datos de cada paquete desde una base de datos en mongo
    getAllPaqs()
      .then((response) => {
        const paquetes = response.data; //llena el array "paquetes" con los datos de la bd
        this.paqs = paquetes.filter((paq) => paq.dcto == null || paq.dcto == 0); //filtra los paquetes que NO tienen descuento para ubicarlos en paquetes TURISTICOS
      })
      .catch((err) => console.error(err));
  },
  methods: {
    methodDialog() {
      this.dialog = true;
      this.cycle = false;
    },
  },
};
</script>
<style>
#divCarrusel1 {
  margin: 0px;
}
#btnAddPaq {
  bottom: 70px;
  right: 200px;
  position: fixed;
}
#btnClose {
  bottom: 70px;
  right: 80px;
  position: fixed;
}
</style>