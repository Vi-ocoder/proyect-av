<template>
    <div id="divCarrusel1">
          <!--Pongo un carrusel con los paquetes en el home-->
          <v-carousel
            :cycle="cycle"
            show-arrows-on-hover=true
            progress=true
            delimiter-icon="mdi-minus"
            :height="iHeigth"
          >
            <v-carousel-item id="car-item" v-for="paq in paqs" :key="paq.idPaq">
              <!--Traigo los datos de cada paquete desde "INFOPAQ"-->
              <infoPaq :paq="paq" :dialog="methodDialog" :otherRoot="root" /> 
              <!--Creo un dialog para mostrar los detalles de cada paq-->
              <v-dialog v-model="dialog" width="95%">
                <v-card>
                  <!--Traigo los datos detalles de cada pac desde "VER DETALLES"-->
                  <verDetalles :paq="paq" :dialog="dialog" :root="rootOut"  />
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
  
</template>
<script>
import { getAllPaqs } from "../services/PaqsService"; //trae los datos desde la BD
import infoPaq from "../components/infoPaq.vue";
import verDetalles from "../components/VerDetalles.vue";
export default {
  props:["root"],
  components: {
    verDetalles,
    infoPaq,
  },
  data() {
    return {
      rootOut:"carruselPaqs",
      dialog: false,
      cycle: true,
      paqs: [],
    };
  },

  mounted() {
    //este mounted trae los datos de cada paquete desde una base de datos en mongo
    getAllPaqs()
      .then((response) => {
        this.paqs = response.data; //llena el array "paquetes" con los datos de la bd
        if (this.root=="ClienteResources") {
        this.iHeigth = "400"
      } else {
        this.iHeigth = "620"
      }
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