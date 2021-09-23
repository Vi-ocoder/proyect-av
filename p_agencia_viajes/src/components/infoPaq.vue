<template>
<v-hover v-slot="{ hover }">
  <v-card id="cardPaq" class="mx-auto" max-width="400">
    
    <v-img class="white--text align-end" height="200px" :src="paq.imagePaq">
      <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal text-h4"
            style="height: 30%;"
          >
           Desde ${{paq.valuePaq}}
          </div>
        </v-expand-transition>
        <v-card v-if="!hover" id="vcardValueInImg">${{paq.valuePaq}} </v-card> 
      <v-card-title id="v-card-title-outhover" v-if="!hover">{{ paq.namePaq }}</v-card-title>
      <v-card-title id="v-card-title-hover" v-if="hover">{{ paq.namePaq  }}</v-card-title>
      
    </v-img>

    <v-card-subtitle class="pb-0"> {{ paq.cityPaq }} - {{ paq.depPaq }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div > {{ paq.hotelPaq }}</div>
    </v-card-text>
    <v-card-actions>
      
      <!--<v-btn id="lookButtom" color="primary" @click="dialog = false"> VER DETALLES</v-btn>
        
        <v-btn color="red" dark @click="deletePaq(paq.idPaq)"> Delete </v-btn>-->
    </v-card-actions>
  
  <!--ESTE ES EL DIALOG-->
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >VER DETALLES</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Id 00 -
            {{paq.idPaq }} 
            </v-toolbar>
            <v-card-text>
              <ver-detalles :paq="paq" v-on:update="updateList()" />
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>

    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color= "red"
            dark
            v-bind="attrs"
            v-on="on"
          >BORRAR PAQ</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="red"
              dark
            >...para borrar no se ha puesto comando!!!</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Sorry!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
  </v-card>
  </v-hover>
</template>

<script>
export default {
  components: {
      VerDetalles: () => import('./VerDetalles')
    },
  dialog: false,
  props: ["paq"],
  methods: {
    editPaq(idPaq) {
      console.log("editar", idPaq);
    },
    deletePaq(idPaq) {
      let listPaqs = JSON.parse(localStorage.getItem("listPaqs"));
      if (listPaqs == undefined) {
        console.error("La lista no contiene el usuario con idPaq: " + idPaq);
        return;
      }
      listPaqs = listPaqs.filter((paq) => paq.idPaq != idPaq);
      localStorage.setItem("listPaqs", JSON.stringify(listPaqs));
      this.$emit('update');
    },
  },
};
</script>

<style>
#cardPaq {
  border-radius: 10px;
  background: linear-gradient(to bottom, rgba(128, 128, 128, 0.123),rgba(255, 255, 255, 0.9));
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.74);
}
#lookButtom{
  border-radius: 10px;
  width: 100%;
}
.v-card--reveal {
  align-items: center;
  top: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  font-weight: 600;
  color:white;
  background-color: rgba(255, 187, 0, 0.808);
}
#vcardValueInImg{
  position: absolute;
  top: 5px;
  right: 0;
  margin: 10px;
  border-radius: 15px 5px 5px 15px;
  color:white;
  background-color: rgba(255, 187, 0, 0.808);
  padding: 5px 10px;
  font-weight: 600;
}
#v-card-title-hover{
  font-weight:bold;
  font-size:2.5vw;
  color:rgb(245, 255, 111);
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.74);
}
#v-card-title-outhover{
  font-size:auto;
  color:white;
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.74);
}
</style>