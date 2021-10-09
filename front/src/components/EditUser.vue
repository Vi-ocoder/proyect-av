<template>
  <v-container fluid class="contForm">
    <v-card class="cardNewUser mx-auto" color="rgba(255, 255, 255, 0.8)">
      <v-card-title v-if="userRoot != undefined">
        EDITAR USUARIO: {{ userRoot.Firstname }}
      </v-card-title>
      <v-card-title v-else> REGISTRATE CON NOSOTROS </v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation class="formNewUser">
        <v-text-field
          v-model="Firstname"
          :counter="20"
          label="Nombre"
          :placeholder="userRoot.Firstname"
        ></v-text-field>

        <v-text-field
          v-model="Lastname"
          :counter="20"
          :placeholder="userRoot.Lastname"
          label="Apellido"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          :placeholder="userRoot.email"
        ></v-text-field>

        <v-select
          v-model="select1"
          :items="typesDoc"
          label="Tipo de Documento"
          :placeholder="userRoot.select1"
        ></v-select>

        <v-row>
          <v-text-field
            v-model="numberID"
            label="Numero de Documento"
            type="number"
            :placeholder="userRoot.numberID"
            :disabled="!editNumDoc"
            required
          ></v-text-field>

          <v-checkbox
            v-model="editNumDoc"
            label="Editar N° Doc"
          ></v-checkbox>
        </v-row>
        <v-text-field
          v-model="phone"
          label="Telefono"
          type="number"
          :placeholder="userRoot.phone"
        ></v-text-field>

        <v-select
          v-model="select2"
          :items="sex"
          label="Género"
          :placeholder="userRoot.select2"
        ></v-select>

        <v-text-field
          class="purple-input"
          label="Fecha de Nacimiento"
          type="date"
          v-model="birthDate"
        />

        <v-text-field
          v-model="photo"
          label="Foto de perfil"
          prepend-icon="mdi-camera"
        ></v-text-field>

        <v-select
          v-model="typeUser"
          :items="typesUser"
          label="Tipo de usuario"
          :placeholder="userRoot.typesUser"
        ></v-select>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="upDate">
          Actualizar
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> LIMPIAR </v-btn>
        <!-- snackbar para cuando se actualiza ok -->
        <success-message
          :message="successMessage"
          :root="root"
          :snackbar="successShow"
          :close="close"
        />
        <error-message
          :message="errorMessage"
          :snackbar="errorShow"
          :close="closeError"
          :corregir="corregir"
        />
      </v-form>
    </v-card>
    <br /><br />
  </v-container>
</template>
<script>
import { upDateUser } from "../services/UsersService";
import SuccessMessage from "./AllGoodMsj.vue";
import errorMessage from "./ErrorMsj.vue";

export default {
  components: {
    SuccessMessage,
    errorMessage,
  },
  props: ["userRoot"],
  data: () => ({
    editNumDoc: false,
    errorMessage: "",
    errorShow:false,
    successMessage: "",
    root: "EditUser",
    successShow: false,
    editado: "¿Todo listo para guardar?...",
    Firstname: "",
    Lastname: "",
    email: "",
    select1: "",
    select2: "",
    numberID: "",
    checkbox: false,
    birthDate: "",
    typeUser: "",
    valid: true,
    titleForm: "Registro",
    photo: "",
    phone: "",
    numRules: [
      (v) => (v && v.length >= 5) || "El documento debe tener mas de 5 Dígitos",
    ],
    emailRules: [(v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    typesDoc: ["Cedula Ciudadania", "Cedula Extranjeria", "Pasaporte"],
    sex: ["Femenino", "Masculino"],
    typesUser: ["Asesor", "Cliente", "Admin"],
  }),

  methods: {
    upDate() {
      if (this.editNumDoc == false) {
        this.numberID = this.userRoot.numberID;
      } 
      const user = {
        email: this.email,
        Firstname: this.Firstname,
        Lastname: this.Lastname,
        select1: this.select1,
        numberID: this.numberID,
        typeUser: this.typeUser,
        photo: this.photo,
        phone: this.phone,
        select2: this.select2,
        birthDate: this.birthDate,
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

      var salida = Object.filter(user, function (itemX) {
        return itemX != "";
      });

      let userEdited = salida;

      upDateUser(this.userRoot.numberID, userEdited)
        .then(() =>
           this.openSuccessDialog("Se ha actualizado el Usuario: " + this.userRoot.Firstname)
        )
        .catch((err) => this.openErrorDialog(this.mensajeError(err)));
    },
    mensajeError(entrada) {
      let salida =
        "Error al actualizar, verifique los datos e intente nuevamente";
      if (entrada == "Error: Request failed with status code 400") {
        salida = "No hay N° de documento o este ya esta en uso.";
      }
      return salida;
    },
    openSuccessDialog(mensaje) {
      this.successMessage = mensaje;
      this.successShow = true;
    },
    openErrorDialog(mensaje) {
      this.errorMessage = mensaje;
      this.errorShow = true;
    },
    reset() {
      this.$refs.form.reset();
    },
    close() {
      (this.successShow = false), location.reload();
    },
    closeError() {
      (this.errorShow = false), location.reload();
    },
    corregir() {
      this.errorShow = false
    },
  },
};
</script>
<style>
.cardNewUser {
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  width: 1000px;
}
.formNewUser {
  padding: 20px;
  width: 100%;
}
.contForm {
  background-size: 100%;
  padding: 20px;
}
</style>