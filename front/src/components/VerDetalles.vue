<template>
  <v-div width="800">
    <v-card>
      <v-card-title class="text-h5 lighten-2">
        {{ paq.namePaq }}
      </v-card-title>

      <v-divider></v-divider>
      <v-img class="white--text align-end" height="200px" :src="paq.imagePaq">
        <v-card id="vcardValueInImg">${{ paq.valuePaq }} </v-card>
        <v-card-title id="v-card-title-outhover"
          >Alojamiento: Hotel {{ paq.hotelPaq }}</v-card-title
        >
      </v-img>
      <v-card-title class="pb-2">
        {{ paq.cityPaq }} - {{ paq.depPaq }}</v-card-title
      >
      <v-card-text>
        <div>{{ paq.descriptionPaq }}</div>
      </v-card-text>
      <v-card-text>
        Este paquete estará vigente desde: {{ paq.dateIPaq }} hasta:
        {{ paq.dateFPaq }}
      </v-card-text>
      <v-card-text class="text--secondary">
        El Hotel esta ubicado en: {{ paq.addresPaq }}
      </v-card-text>
      <!--StartIncluidos-->  
        <v-card class="mx-auto" max-width="auto" >
          <v-list >
            <v-subheader>Este paquete incluye los siguientes servicios:</v-subheader>
            <v-row>
              <v-col lg ="3">
            <v-list-item 
                v-for="item in paq.Incluidos" :key="item">      
                  <v-list-item-icon v-if="item.name == 'Tiquete Ida' ">
                    <v-icon>mdi-airplane-takeoff</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon v-if="item.name == 'Tiquete Regreso' ">
                    <v-icon>mdi-airplane-landing</v-icon>
                  </v-list-item-icon> 
                  <v-list-item-icon v-if="item.name == 'Desayuno' ">
                    <v-icon>mdi-coffee</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon v-if="item.name == 'Almuerzo' ">
                    <v-icon>mdi-pasta</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon v-if="item.name == 'Cena' ">
                    <v-icon>mdi-silverware</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon v-if="item.name == 'Una Persona' ">
                    <v-icon>mdi-human-male</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon v-if="item.name == 'Dos Personas' ">
                    <v-icon>mdi-human-male-female</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon v-if="item.name == 'Hasta Cuatro Personas' ">
                    <v-icon>mdi-human-male-female-child</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon v-if="item.name == 'Tour' ">
                    <v-icon>mdi-map-marker-path</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon v-if="item.name == 'Seguro' ">
                    <v-icon>mdi-shield-lock</v-icon>
                  </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{item.name}}</v-list-item-title> 
                </v-list-item-content>
            </v-list-item>
            </v-col>
            </v-row>
          </v-list>
        </v-card>
        <!--end incluidos-->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text to="/ReservarPaq"> LO QUIERO </v-btn>
      </v-card-actions>
    </v-card>
  </v-div>
</template>

<script>
export default {
  selectedItem: 1,
  dialog: false,
  props: ["paq"],
};
</script>
<style scoped>
.pb-2 {
  font-size: 150%;
  color: rgb(120, 120, 241);
  font-weight: bolder;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
