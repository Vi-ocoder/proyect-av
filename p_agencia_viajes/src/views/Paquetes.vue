<template>
  <div id="v-container-paqs">
    <v-container>
      <v-row >
        <v-col
          v-for="paq in paqs"
          :key="paq.idPaq"
          lg="3"
          md="4"
          sm="6"
          xs="12"
        >
          <infoPaq :paq="paq" v-on:update="updateList()" />
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
  </div>
</template>

<script>
import infoPaq from "../components/infoPaq.vue";
export default {
  components: {
    infoPaq,
  },
  data() {
    return {
      paqs: [],
    };
  },
  mounted() {
    this.updateList();
  },
  methods: {
    updateList() {
      console.log("updateList");
      let listPaqs = JSON.parse(localStorage.getItem("listPaqs"));
      if (listPaqs != undefined) {
        this.paqs = listPaqs;
      }
    },
  },
};
</script>

<style scope>
#addButton {
  top: 200px;
}
#v-container-paqs{
  background-image: url("../../public/fondoPaquetes.jpeg");
  background-size: 100%;
  }
</style>
