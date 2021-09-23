<template>
  <v-container id="crear-paquete" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">Crear paquete</div>

            <div class="text-subtitle-1 font-weight-light">...pendiente</div>
          </template>

          <v-form method="GET" action="/paquetes.api" id="formPaq">
            <v-container class="py-0">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-if="this.value === ''"
                    label="Aquí el Nombre del paquetin"
                  />
                  <v-text-field
                    v-else
                    label="Aquí el Nombre del paquete"
                    v-model="namePaq"
                    :rules="formPaqRules"
                    prepend-icon="mdi-plus-box"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    class="purple-input"
                    label="Fecha de Inicio"
                    type="date"
                    v-model="dateIPaq"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    class="purple-input"
                    label="Fecha Final"
                    type="date"
                    v-model="dateFPaq"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Nombre del Hotel"
                    class="purple-input"
                    prepend-icon="mdi-tag-heart-outline"
                    v-model="hotelPaq"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Valor en Pesos"
                    class="purple-input"
                    type="number"
                    prepend-icon="mdi-cash-100"
                    v-model="valuePaq"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Dirección"
                    class="purple-input"
                    prepend-icon="mdi-map-marker-outline"
                    v-model="addresPaq"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    label="Ciudad"
                    class="purple-input"
                    v-model="cityPaq"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    label="Departamento"
                    class="purple-input"
                    v-model="depPaq"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    class="purple-input"
                    label="pendiente"
                    value="locationPaq"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Url de la Imagen"
                    class="purple-input"
                    prepend-icon="mdi-image-outline"
                    placeholder="Inserte aqui la url de la imagen"
                    v-model="imagePaq"
                  />
                </v-col>

                <!--AQUI ESTA LA FILA DE INCLUIDOS (ELEMENTOS QUE INCLUYE CADA PAQUETE)-->
                <v-col cols="12">
                  <Incluidos />
                </v-col>
                <!--Fin FILA DE INCLUIDOS-->

                <v-col cols="12">
                  <v-textarea
                    class="purple-input"
                    label="Realice una descripción del paquete"
                    prepend-icon="mdi-playlist-plus"
                    v-model="descriptionPaq"
                  />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="primary" class="mr-0" v-on:click="savePaq()">
                    ENVIAR
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
      <!--Aquí ira la vista previa-->
      <v-col cols="12" md="4">
        <base-material-card>
          <h3 id="vistaPrevia">VISTA PREVIA</h3>
          <img :src="imagePaq" alt="" srcset="" width="430px" height="300px" />
          <v-card-text class="text-center">
            <h6 class="text-h4 mb-1 grey--text">
              {{ cityPaq }} - {{ depPaq }}
            </h6>

            <h4 class="text-h3 font-weight-light mb-3 black--text">
              {{ namePaq }}
            </h4>

            <p class="font-weight-light grey--text">
              {{ descriptionPaq }}
            </p>

            <v-btn color="success" rounded class="mr-0"> VER OPCIONES </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
      Incluidos: () => import('../components/Incluidos'),
    },
  data() {
    return {
      
      formPaqRules: [
        (value) => !!value || "Este campo es obligatorio",
        (value) =>
          (value && value.length >= 5) ||
          "Debe usar un nombre significativo (min 5 caracteres)",
      ],
      namePaq: "",
      descriptionPaq:
        "Aquí va una descripción del paquete, recuerde poner detalles llamativos, ser específico pero brindar inrformación clara y completa...",
      valuePaq: "",
      hotelPaq: "",
      dateIPaq: "",
      dateFPaq: "",
      addresPaq: "",
      cityPaq: "",
      depPaq: "",
      imagePaq: "",
      locationPaq: "",
      
    };
  },
  methods: {
    savePaq() {
      let listPaqs = JSON.parse(localStorage.getItem("listPaqs"));
      if (listPaqs == undefined) {
        listPaqs = [];
      }
      let idPaq = localStorage.getItem("idPaq");
      if (idPaq == undefined) {
        idPaq = 1;
      } else {
        idPaq = parseInt(idPaq) + 1;
      }
      const paq = {
        idPaq: idPaq,
        namePaq: this.namePaq,
        descriptionPaq: this.descriptionPaq,
        valuePaq: this.valuePaq,
        hotelPaq: this.hotelPaq,
        dateIPaq: this.dateIPaq,
        dateFPaq: this.dateFPaq,
        addresPaq: this.addresPaq,
        cityPaq: this.cityPaq,
        depPaq: this.depPaq,
        imagePaq: this.imagePaq,
        locationPaq: this.cityPaq + " " + this.depPaq,
      };
      listPaqs.push(paq);
      (this.namePaq = ""),
        (this.descriptionPaq = ""),
        (this.valuePaq = ""),
        (this.hotelPaq = ""),
        (this.dateIPaq = ""),
        (this.dateFPaq = ""),
        (this.addresPaq = ""),
        (this.cityPaq = ""),
        (this.depPaq = ""),
        (this.imagePaq = ""),
        (this.locationPaq = ""),
        localStorage.setItem("listPaqs", JSON.stringify(listPaqs));
      localStorage.setItem("idPaq", idPaq);
    },
  },
};
</script>
<style scoped>
#formPaq {
  background: linear-gradient(to bottom, white, rgba(128, 128, 128, 0.322));
  border-radius: 10px;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.74);
}
#vistaPrevia {
  text-align: center;
  position: relative;
  font-size: 3vw;
  text-shadow: 2px 2px 2px black;
  color: rgb(84, 98, 223);
}
</style>
