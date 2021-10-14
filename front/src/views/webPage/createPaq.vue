<template>
  <v-main>
    <!-- contenido principal  -->
    <v-container id="crear-paquete">
      <v-form id="formPaq">
        <h2 class="formTitle">CREE EL PAQUETE AQUÍ</h2>
        <h3 class="formSubTitle">Recuerde ingresar todos los datos solicitados a continuación:</h3>
        <v-row>
          <v-col cols="8">
            <v-text-field
              label="Aquí el Nombre del paquete"
              v-model="namePaq"
              prepend-icon="mdi-plus-box"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              class="purple-input"
              label="Asigne un Código"
              v-model="idPaq"
              type="number"
              hint="Recuerde que este dato identifica al paquete, no se debe repetir"
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

          <v-col cols="4" md="6">
            <v-text-field
              label="Nombre del Hotel"
              class="purple-input"
              prepend-icon="mdi-tag-heart-outline"
              v-model="hotelPaq"
            />
          </v-col>
          <v-col cols="8" md="6">
            <v-text-field
              label="Web del Hotel"
              class="purple-input"
              prepend-icon="mdi-tag-heart-outline"
              v-model="webHotelPaq"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              id="entradaPrecio"
              label="Valor en Pesos"
              class="purple-input"
              type="number"
              prepend-icon="mdi-cash-100"
              v-model="valuePaq"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-container class="px-0" fluid>
              <v-switch
                v-model="Promocinal"
                :label="`¿TIENE DESCUENTO? ${Promocinal}`"
                value="SI"
              ></v-switch>
            </v-container>
          </v-col>
          <v-col cols="2" md="1">
            <v-text-field
              v-if="Promocinal == 'SI'"
              v-model="dcto"
              :rules="[(v) => !!v || 'Item is required']"
              label="Valor Dcto"
              required
              type="number"
              suffix="%"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Dirección"
              class="purple-input"
              prepend-icon="mdi-map-marker-outline"
              v-model="addresPaq"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="Ciudad"
              class="purple-input"
              v-model="cityPaq"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="Departamento"
              class="purple-input"
              v-model="depPaq"
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
          <incluidos @arrayInIncluidos="selection = $event" @lock="lock=$event" />
          <!--Fin FILA DE INCLUIDOS-->

          <v-col cols="12">
            <v-textarea
              class="purple-input"
              label="Realice una descripción del paquete"
              prepend-icon="mdi-playlist-plus"
              v-model="descriptionPaq"
            />
          </v-col>

          <v-col cols="12" class="text-center">
            <v-btn :disabled="lock" color="primary" width=200 x-large @click="savePaq()">
              CREAR
            </v-btn>
          </v-col>
        </v-row>
        <br>
        <SuccessMessage
          :message="successMessage"
          :snackbar="successShow"
          :close="closeSuccessDialog"
          :IrInicio="closeSuccessDialogAndIr"
        ></SuccessMessage>
        <ErrorMessage
          :message="errorMessage"
          :snackbar="errorShow"
          :close="closeErrorDialog"
        ></ErrorMessage>
      </v-form>
      <br /><br />
    </v-container>
  </v-main>
</template>

<script>
import { insertPaq } from "../../services/PaqsService";
import SuccessMessage from "../../components/AllGoodMsj.vue";
import ErrorMessage from "../../components/ErrorMsj.vue";
import Incluidos  from "../../components/Incluidos.vue";
export default {
  components: {
    SuccessMessage,
    ErrorMessage,
    Incluidos,
  },
  data() {
    return {
      lock:false,
      successMessage: "",
      successShow: false,
      errorMessage: "",
      errorShow: false,
      items: [
        {
          id: 1,
          name: "Tiquetes",
          children: [
            { id: 1.1, name: "Tiquete Ida", icon:"mdi-airplane-takeoff" },
            { id: 1.2, name: "Tiquete Regreso", icon:"mdi-airplane-landing"},
          ],
        },
        {
          id: 2,
          name: "Alimentación",
          children: [
            { id: 2.1, name: "Desayuno", icon: "mdi-coffee" },
            { id: 2.2, name: "Almuerzo", icon:"mdi-pasta" },
            { id: 2.3, name: "Cena", icon:"mdi-silverware" },
          ],
        },
        {
          id: 3,
          name: "N° Personas",
          children: [
            { id: 3.1, name: "Una Persona", icon:"mdi-human-male" },
            { id: 3.2, name: "Dos Personas", icon:"mdi-human-male-female" },
            { id: 3.3, name: "Hasta Cuatro personas",icon:"mdi-human-male-female-child" },
          ],
        },
        {
          id: 4,
          name: "Seguro y/o Tour",
          children: [
            { id: 4.1, name: "Seguro" , icon:"mdi-shield-lock"},
            { id: 4.2, name: "Tour", icon:"mdi-map-marker-path" },
          ],
        },
      ],
      idPaq: "",
      namePaq: "",
      hotelPaq: "",
      webHotelPaq:"",
      valuePaq: "",
      Promocinal: "NO",
      dcto: "",
      dateIPaq: "",
      dateFPaq: "",
      addresPaq: "",
      cityPaq: "",
      depPaq: "",
      imagePaq: "",
      descriptionPaq: "",
      selection: [],
    };
  },
  methods: {
    savePaq() {
      if (
        this.idPaq == undefined ||
        this.namePaq == undefined ||
        this.descriptionPaq == undefined ||
        this.valuePaq == undefined ||
        this.hotelPaq == undefined ||
        this.webHotelPaq == undefined ||
        this.addresPaq == undefined ||
        this.cityPaq == undefined ||
        this.depPaq == undefined ||
        this.imagePaq == undefined ||
        this.selection == undefined ||
        this.idPaq == "" ||
        this.namePaq == "" ||
        this.descriptionPaq == "" ||
        this.valuePaq == "" ||
        this.hotelPaq == "" ||
        this.webHotelPaq == "" ||
        this.addresPaq == "" ||
        this.cityPaq == "" ||
        this.depPaq == "" ||
        this.imagePaq == "" ||
        this.selection == ""
      ) {
        this.openErrorDialog("Ingrese los campos obligatorios");
        return;
      }
      const paq = {
        idPaq: this.idPaq,
        namePaq: this.namePaq,
        descriptionPaq: this.descriptionPaq,
        valuePaq: this.valuePaq,
        Promocinal: this.Promocinal,
        dcto: this.dcto,
        hotelPaq: this.hotelPaq,
        webHotelPaq: this.webHotelPaq,
        dateIPaq: this.dateIPaq,
        dateFPaq: this.dateFPaq,
        addresPaq: this.addresPaq,
        cityPaq: this.cityPaq,
        depPaq: this.depPaq,
        imagePaq: this.imagePaq,
        Incluidos: this.selection,
      };
      insertPaq(paq)
        .then((response) => {
          this.openSuccessDialog(
            "Se ha creado el producto: " + response.data.namePaq
          ),
            (this.successShow = true),
            (this.idPaq = this.idPaq + 1),
            (this.namePaq = ""),
            (this.descriptionPaq = ""),
            (this.valuePaq = ""),
            (this.hotelPaq = ""),
            (this.webHotelPaq = ""),
            (this.dateIPaq = ""),
            (this.dateFPaq = ""),
            (this.addresPaq = ""),
            (this.cityPaq = ""),
            (this.depPaq = ""),
            (this.imagePaq = ""),
            (this.Promocinal = "NO"),
            (this.selection = []);
        })
        .catch((err) =>
          this.openErrorDialog("Error: " +  this.errCodeDuplicate(err))
        );
    },
    errCodeDuplicate(elErr){
      let msje="Error 400";
      if (elErr== "Error: Request failed with status code 400") {
        msje = "El código digitado ya esta en uso, utilice un código diferente" 
      }
      return msje
    },
    openSuccessDialog(mensaje) {
      this.successMessage = mensaje;
      this.successShow = true;
    },
    closeSuccessDialog() {
      this.successShow = false;
    },
    closeSuccessDialogAndIr() {
      this.successShow = false;
      this.$router.push("/travels");
    },
    openErrorDialog(mensaje) {
      this.errorMessage = mensaje;
      this.errorShow = true;
    },
    closeErrorDialog() {
      this.errorShow = false;
    },
  },
};
</script>

<style scoped>
#formPaq {
  background: linear-gradient(to bottom, white, rgba(40, 74, 224, 0.322));
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
.formTitle{
  color: rgb(84, 98, 223);
  text-shadow: 1px 1px 1px rgb(117, 24, 63);
}
.formSubTitle{
  color: rgb(223, 84, 142);
  font-size:medium;
}

</style>