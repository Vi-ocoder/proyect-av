<template>
  <!--vista de los datos del usuario seleccionado-->
  <v-container>
    <v-card class="pt-6 mx-auto" :color="colorCard">
      <v-col class="col-12 " align="center">
              <v-avatar v-if="user.photo!=undefined" size="150" rounded="circle">
                <v-img  :src="user.photo"></v-img>
              </v-avatar>
              <v-avatar v-else size="150">
                <v-img v-if="user.select2=='Femenino'" src="../../../public/images/Avatar_Default/avatar-mujer.jpg"></v-img>
                <v-img v-if="user.select2=='Masculino'" src="../../../public/images/Avatar_Default/avatar-hombre.png"></v-img>
                <v-img esle src="../../../public/images/Avatar_Default/avatar-hombre.png"></v-img>
              </v-avatar>
        <v-btn
          class="text--primary btnActualizar"
          fab
          small
          outlined
          elevation="4"
          @click="dialog = true"
        >
          <v-icon v-if="user.typeUser == 'Admin'" color="warning"
            >mdi-pencil</v-icon
          >
          <v-icon v-if="user.typeUser == 'Asesor'" color="success"
            >mdi-pencil</v-icon
          >
          <v-icon v-if="user.typeUser == 'Cliente'" color="primary"
            >mdi-pencil</v-icon
          >
        </v-btn>

        <h3 class="text-h5 mb-0">{{ user.Firstname }} {{ user.Lastname }}</h3>

        <v-col class="blue--text mb-0 col-12" >
          {{ user.email }}
        </v-col>
        <v-row>
          <v-col cols="12" md="6">
            <div class="gray--text subheading typeDocto">
              {{ user.select1 }} N°:
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="blue--text subheading font-weight-bold numDocto">
              {{ user.numberID }}
            </div>
          </v-col></v-row
        >
      </v-col>
      <v-divider></v-divider>
      <v-row class="text-left" tag="v-card-text">
        <v-col class="text-right mr-4" tag="strong" cols="6"> Género: </v-col>
        <v-col>{{ user.select2 }}</v-col>
        <v-col class="text-right mr-4" tag="strong" cols="6">
          Fecha de Nacimiento:
        </v-col>
        <v-col>
          <a>{{ dateC }}</a>
        </v-col>
        <v-col class="text-right mr-4" tag="strong" cols="6"> Phone: </v-col>
        <v-col>{{ user.phone }}</v-col>

        <v-col cols="12" class="text-center mr-4">{{ user.typeUser }}</v-col>
      </v-row>

      <v-dialog v-model="dialog" width="60%">
        <v-card width="auto">
          <editar-usuario :userRoot="user" :root="root" />
        </v-card>
      </v-dialog>

      <!--aqui van los snakcbar-->
      <error-message
        :message="errorMessage"
        :snackbar="errorShow"
        :close="closeError"
      />
    </v-card>
  </v-container>
</template>

<script>
import EditarUsuario from "../EditUser.vue";
import errorMessage from "../ErrorMsj.vue";
export default {
  props: ["user", "root"],
  components: {
    EditarUsuario,
    errorMessage,
  },
  data: () => ({
    colorCard: "",
    //para borrar usuario
    errorMessage: "",
    errorShow: false,
    //------
    dateC: "",
    dialog: false,
    users: [],
    userRoot: [],
    avatar: null,
    successMessage: "El usuario se ha modificado",
    successShow: false,
  }),
  watch: {},
  mounted() {
    this.dateC = this.user.birthDate.substring(0, 10);
    if (this.user.typeUser == "Admin") {
      this.colorCard = "rgba(255, 166, 0, 0.1)";
    }
    if (this.user.typeUser == "Asesor") {
      this.colorCard = "rgba(0, 128, 0, 0.1)";
    }
    if (this.user.typeUser == "Cliente") {
      this.colorCard = "rgba(0, 0, 255, 0.1)";
    }
  },
  methods: {
    closeSuccessDialog() {
      this.successShow = "false";
    },
    //toma el dato "birthDate" y le retira el time

    //cambia los datos a mostrar cuando se busca un usuario en particular
    usersSearch(usersList) {
      let salida = [];
      if (this.search.length != "") {
        salida[0] = usersList.find(
          (element) =>
            element.Firstname == this.search || element.numberID == this.search
        );
      } else {
        salida = usersList;
      }
      return (this.users = salida);
    },
    //borra el usuario seleccionado

    openErrorDialog(mensaje) {
      this.errorMessage = mensaje;
      this.errorShow = true;
      this.snackDelete = false;
    },
    mensajeError(entrada) {
      let salida =
        "Error al eliminar, verifique los datos e intente nuevamente";
      if (entrada == "Error: Request failed with status code 400") {
        salida =
          "Este usuario no tiene # de documento, debe ser eliminado directamente desde la BD";
      }
      return salida;
    },
    closeError() {
      this.errorShow = false;
    },
    //-----------------------
  },
};
</script>
<style>
.btnActualizar {
  position: absolute;
}
.typeDocto {
  text-align: end;
  padding: 10% 0;
}
.numDocto {
  text-align: initial;
  padding: 10% 0;
}
</style>