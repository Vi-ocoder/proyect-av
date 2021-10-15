<template>
  <v-main>
    <!-- contenido principal  -->
    <v-container id="crear-paquete">
      <v-form id="formPaq">
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Aquí el Nombre del paquete"
              v-model="namePaq"
              prepend-icon="mdi-plus-box"
              hint="Se muestra el nombre actual, Si desea puede modificarlo"
              :placeholder="namePaqRoot"
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
              :placeholder="paqRoot.hotelPaq"
              hint="Se muestra el hotel actual, Si desea puede modificarlo"
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
              prefix="$"
              :placeholder="paqRoot.valuePaq"
              hint="Se muestra el precio actual, Si desea puede modificarlo"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-container class="px-0" fluid>
              <v-switch
                v-model="Promocinal"
                :label="`¿TIENE DESCUENTO? ${Promocinal}`"
                value="SI"
              ></v-switch>
            </v-container>
          </v-col>
          <v-col cols="1" md="1">
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
              :placeholder="paqRoot.addresPaq"
              hint="Se muestra la dirección actual, Si desea puede modificar"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Ciudad"
              class="purple-input"
              v-model="cityPaq"
              :placeholder="paqRoot.cityPaq"
              hint="Se muestra la ciudad actual, Si desea puede modificar"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Departamento"
              class="purple-input"
              v-model="depPaq"
              :placeholder="paqRoot.depPaq"
              hint="Se muestra el departamento actual, Si desea puede modificar"
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Url de la Imagen"
              class="purple-input"
              prepend-icon="mdi-image-outline"
              placeholder="Inserte aqui la url de la imagen"
              v-model="imagePaq"
              :hint="paqRoot.imagePaq"
            />
          </v-col>

          <!--AQUI ESTA LA FILA DE INCLUIDOS (ELEMENTOS QUE INCLUYE CADA PAQUETE)-->
          <v-col cols="12">
            <incluidos @arrayInIncluidos="selection=$event" @lock="lock=$event" />
          </v-col>
          <!--Fin FILA DE INCLUIDOS-->

          <v-col cols="12">
            <v-textarea
              class="purple-input"
              label="Realice una descripción del paquete"
              prepend-icon="mdi-playlist-plus"
              v-model="descriptionPaq"
              :placeholder="paqRoot.descriptionPaq"
              hint="Se muestra la descripción actual, Si desea puede modificar"
            />
          </v-col>
          <v-col cols="6" class="text-right">
            <p>
                Recuerde que todos los datos del paquete # {{idPaqRoot}} que estan ingresados se actualizaran en la BD, aquellos campos que esten en blanco no sufriran cambios.
            </p>
          </v-col>
          <v-col cols="6" class="text-center">
            <v-btn :disabled="lock" color="success" class="mr-0" @click="actualizar()">
              ACTUALIZAR PAQUETE # {{idPaqRoot}}
            </v-btn>
            <br><br>

            <v-btn color="blue" dark width=233 class="mr-0" @click="dialog">
              CERRAR
            </v-btn>
          </v-col>
        </v-row>
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
import { upDatePaq } from "../services/PaqsService";
import SuccessMessage from "./AllGoodMsj.vue";
import ErrorMessage from "./ErrorMsj.vue";
import Incluidos from "./Incluidos.vue";
export default {
  components: {
    SuccessMessage,
    ErrorMessage,
    Incluidos,
  },
  props: ["idPaqRoot" , "namePaqRoot", "dialog", "paqRoot"],
  data() {
    return {
      lock:"",
      successMessage: "",
      successShow: false,
      errorMessage: "",
      errorShow: false,
      idPaq: null,
      namePaq: "",
      hotelPaq: "",
      valuePaq: "",
      Promocinal: "NO",
      dcto: 0,
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
    actualizar() {
        this.idPaq = this.idPaqRoot //lleno el id con el que esta en la tabla
        const paqI = {  //creo un objeto con lo que hay en el formulario 
        idPaq: this.idPaq,
        namePaq: this.namePaq,
        descriptionPaq: this.descriptionPaq,
        valuePaq: this.valuePaq,
        Promocinal: this.Promocinal,
        dcto: this.dcto,
        hotelPaq: this.hotelPaq,
        dateIPaq: this.dateIPaq,
        dateFPaq: this.dateFPaq,
        addresPaq: this.addresPaq,
        cityPaq: this.cityPaq,
        depPaq: this.depPaq,
        imagePaq: this.imagePaq,
        Incluidos: this.selection,
      };
      //Aqui filtro solo los datos que se modificaron
      Object.filter = function (mainObject, filterFunction) {
        return Object.keys(mainObject)
          .filter(function (ObjectKey) {
            return filterFunction(mainObject[ObjectKey]);
          })
          .reduce(function (result, ObjectKey) {
            result[ObjectKey] = mainObject[ObjectKey];
            return result;
          }, {});
      };

      var salida = Object.filter(paqI, function (itemX) {
        return itemX != "";
      });

      let paq = salida;
      //---------------------------

      upDatePaq(this.idPaq, paq)// Cargo los campos modificados a la base de datos
        .then(() =>
          this.openSuccessDialog("Se ha actualizado el producto: " + this.idPaq)
        )
        .catch(() => this.openErrorDialog("Error al actualizar el producto"));
    },

    openSuccessDialog(mensaje) {
      this.successMessage = mensaje;
      this.successShow = true;
    },
    closeSuccessDialog() {
      this.successShow = false;
      this.dialog();
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