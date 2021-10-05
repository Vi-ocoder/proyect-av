<template>
  <div id="v-container-paqs">
    <v-container>
      <v-row >
        <v-col
          v-for="paq in paqs"
          :key="paq.idPaq"
          lg="4"
          sm="6"
          xs="12"
        >
          <infoPaq :paq="paq"/>
        </v-col>
      </v-row>
    </v-container>
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

    <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-text>
              <v-text-field label="File name"></v-text-field>

              <small class="grey--text">Este boton aun no hace nada.</small>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text
                color="primary"
                @click= "dialog = false" 
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </div>
</template>

<script>
import infoPaq from "../components/infoPaq.vue";
import { getAllPaqs } from "../services/PaqsService";
export default {
  components: {
    infoPaq,
  },
  data() {
    return {
      dialog: false,
      paqs: [],
    };
  },
  mounted() {
    //esta es la nueva 
    getAllPaqs()
    .then((response) => {
      this.paqs = response.data;
    })
    .catch((err)=>console.error(err));
    //esta es la antigua
    //this.updateList();
  },
  /*methods: {
    updateList() {
      console.log("updateList");
      let listPaqs = JSON.parse(localStorage.getItem("listPaqs"));
      if (listPaqs != undefined) {
        this.paqs = listPaqs;
      }
    },
  },*/
};
</script>

<style scope>
#addButton {
  top: 85px;
  position:fixed;
}
#addButton2 {
  top: 200px;
  position:fixed;
}
#v-container-paqs{
  background-color: rgba(236, 241, 250, 0.1);
  background-size: 100%;
  }
</style>