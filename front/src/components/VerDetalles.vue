<template>
  <v-card>
    <v-card-title class="text-h5 lighten-2">
      {{ paq.namePaq }}
    </v-card-title>

    <v-divider></v-divider>
    <v-hover v-slot="{ hover }">
    <v-img class="white--text align-end" height="300px" :src="paq.imagePaq">
      <v-expand-transition>
      <v-card-title v-if="!hover" class="text-h4 onHover font-weight-light mb-1 d-flex transition-fast-in-fast-out"
        >Hotel {{ paq.hotelPaq }}
      </v-card-title>

          <v-card-title
            v-if="hover"
            style="height: 50%;"
          >
          </v-card-title>
      </v-expand-transition>
    </v-img>
    </v-hover>
    <v-card-subtitle class="font-weight-light grey--text text-h6 " v-if="paq.webHotelPaq != null">Web del Hotel: <a :href="paq.webHotelPaq" target="_blank">{{paq.webHotelPaq}}</a> </v-card-subtitle>
    <v-card-title class="pb-1 text-h4 font-weight-light orange--text mb-1">
      {{ paq.cityPaq }} - {{ paq.depPaq }}</v-card-title
    >
    <v-card-text>
      <div class="font-weight-light text-h6 mb-2">{{ paq.descriptionPaq }}</div>
    </v-card-text>

    <!--StartIncluidos-->
    <v-card class="mx-auto" max-width="auto">
      <v-list >
      <br>
      <v-subheader>Este paquete incluye:</v-subheader>
        <v-row>
          <v-col lang="auto" cols="6" v-for="item in paq.Incluidos" :key="item">
            <v-list-item>
              <v-list-item-subtitle 
              color="red" 
              v-if="item.id == 'a' || item.id == 'b' || item.id == 'c'"
              > 
              *...todo para {{item.name}}
              </v-list-item-subtitle>
              <v-list-item-avatar v-if="item.id!='a' && item.id!='b' && item.id!='c'">
                <v-icon
                  class="green"
                  dark
                  v-text="item.icon"
                >
                </v-icon> 
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle v-if="item.id!='a' && item.id!='b' && item.id!='c'" 
                v-text="item.name"
                >
                </v-list-item-subtitle>
              </v-list-item-content>
              </v-list-item>
          </v-col>
        </v-row>
      </v-list>
    </v-card>
    <!--end incluidos-->
    <v-row>
      <v-col>
        <v-card-text>
          Este paquete estará vigente 
          desde: {{ dateI }} hasta: {{ dateF }}
        </v-card-text>
      </v-col>
      <v-col>
        <v-card-text class="text--secondary">
          El Hotel esta ubicado en: {{ paq.addresPaq }}
        </v-card-text>
      </v-col>
    </v-row>
    <v-card-actions v-if="(root == 'TabPaqs')">
      <v-spacer></v-spacer>
      <v-btn id="btnClose" fab small color="rgba(200, 200, 200, .3)" relative @click="dialog()">
        X
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  selectedItem: 1,
  
  //dialog: false,
  props: ["paq", "dialog", "root"],
  data() {
    return {
      dateI:"",
      dateF:"",
    };
  },
  mounted(){
    //saca las fechas del objeto seleccionado
      this.setDateI(this.paq.dateIPaq)
      this.setDateF(this.paq.dateFPaq)
    },
  methods: {
    //toma el dato "birthDate" y le retira el time
    setDateI(entrada) {
      const salida = entrada.substring(0, 10);
      return this.dateI = salida;
    },
    setDateF(entrada) {
      const salida = entrada.substring(0, 10);
      return this.dateF = salida;
    },
  },
};
</script>
<style scoped>
.onHover{
  color: rgb(253, 253, 253);
  text-shadow: 2px 2px 4px #000000;
  font-weight:bolder;
}
#btnClose {
  bottom: 535px;
  right: 350px;
  position: fixed;
  font-size: 130%;
  font-family: "Exo2", sans-serif ;
}
</style>