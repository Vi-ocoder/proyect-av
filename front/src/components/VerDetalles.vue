<template>
  <v-card>
    <v-card-title class="text-h5 lighten-2">
      {{ paq.namePaq }}
    </v-card-title>

    <v-divider></v-divider>
    <v-img class="white--text align-end" height="300px" :src="paq.imagePaq">
      <v-card-subtitle>${{ paq.valuePaq }} </v-card-subtitle>
      <v-card-title id="v-card-title-outhover"
        >Hotel {{ paq.hotelPaq }}
      </v-card-title>
    </v-img>
    <v-card-title class="pb-2">
      {{ paq.cityPaq }} - {{ paq.depPaq }}</v-card-title
    >
    <v-card-text>
      <div>{{ paq.descriptionPaq }}</div>
    </v-card-text>

    <!--StartIncluidos-->
    <v-card class="mx-auto" max-width="auto">
      <v-list >
      <br>
      <v-subheader>Este paquete incluye:</v-subheader>
        <v-row>
          <v-col lang="auto" cols="6" v-for="item in paq.Incluidos" :key="item">
            <v-list-item>
              <v-list-item-subtitle color="red" v-if="item.id == 'a' || item.id == 'b' || item.id == 'c'"> *Incluido en paquete para {{item.name}}</v-list-item-subtitle>
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
      <v-btn id="btnClose" color="rgba(1, 1, 1, .1)" relative @click="dialog()">
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
.pb-2 {
  font-size: 150%;
  color: rgb(120, 120, 241);
  font-weight: bolder;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
#btnClose {
  bottom: 550px;
  right: 350px;
  position: fixed;
}
</style>