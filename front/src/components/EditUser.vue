<template>
  <v-container fluid class="contForm">
    <v-card class="cardNewUser mx-auto" color="rgba(255, 255, 255, 0.8)">
      <v-card-title v-if="userRoot != undefined">
        EDITAR USUARIO  // {{ userRoot.Firstname }} {{ userRoot.Lastname }} 
      </v-card-title>
      <v-card-title v-else> REGISTRATE CON NOSOTROS </v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation class="formNewUser">
        <v-alert
          v-if="root=='Cliente' || root=='ReservarPaq' "
          type="info" 
        >
        Recuerde que su e-mail y numero de documento solo pueden ser actualizados por un asesor de servicios.
        </v-alert>

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

        <div v-if="root!='profile' && root!='ReservarPaq'">
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
          ´ ´
          <v-text-field
            v-if="root!='ReservarPaq'"
            v-model="numberID"
            label="Numero de Documento"
            type="number"
            :placeholder="userRoot.numberID"
            :disabled="!editNumDoc"
            required
          ></v-text-field>

          <v-checkbox
            v-if="root!='ReservarPaq'"
            v-model="editNumDoc"
            label="Editar N° Doc"
          ></v-checkbox>
        
        </v-row>
        </div>
        <v-text-field
          v-model="phone"
          label="Telefono"
          type="number"
          :placeholder="userRoot.phone"
        ></v-text-field>

        <v-select
          v-if="root!='ReservarPaq'"
          v-model="select2"
          :items="sex"
          label="Género"
          :placeholder="userRoot.select2"
        ></v-select>

        <v-text-field
          v-if="root!='ReservarPaq'"
          class="purple-input"
          label="Fecha de Nacimiento"
          type="date"
          v-model="birthDate"
        />
        <v-row v-if="root!='ReservarPaq'">
          <v-col>
            <v-file-input class="pt-10"
              id="photo"
              v-model="photo"
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Agregue aquí su foto"
              prepend-icon="mdi-camera"
              label="Foto de perfil"
              @change="mostrar()"
            ></v-file-input>
            </v-col>
            <v-col>
              <v-card class="mx-5" flat width="10px" heigth=10 >
                  <img src="../../public/images/Avatar_Default/avatar-undefine.png" id="img">
              </v-card>
            </v-col>
        </v-row>

        <v-row v-if="root!='Cliente' && root!='Asesor' && root!='ReservarPaq'">
        <v-select 
          v-model="typeUser"
          :items="typesUser"
          label="Tipo de usuario"
          :disabled="!editTypeUser"
        ></v-select>    
        <v-checkbox
          v-model="editTypeUser"
          label="¿Cambiar tipo de usuario?">
        </v-checkbox>
        </v-row>
        <v-alert
          v-if="(typeUser=='Cliente' || typeUser=='Asesor') && editTypeUser==true "
          type="error" 
        >
        Si cambia este dato ya no será Administrador, perderá los permisos que ahora posee.
        </v-alert>
          <br>
          <v-btn :disabled="!valid" color="primary" class="mr-4" @click="upDate">
            Actualizar
          </v-btn>
        
        <v-btn color="secondary" class="mr-4" @click="reset"> LIMPIAR </v-btn>
        <!-- snackbar para cuando se actualiza ok -->
        <success-message
          :message="successMessage"
          :root="rootOut"
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
import { upDateUser, upDateUserWithPhoto } from "../services/UsersService";
import SuccessMessage from "./AllGoodMsj.vue";
import errorMessage from "./ErrorMsj.vue";

export default {
  components: {
    SuccessMessage,
    errorMessage,
  },
  props: ["userRoot", "root"],
  data: () => ({
    rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
    editNumDoc: false,
    editTypeUser: false,
    errorMessage: "",
    errorShow:false,
    successMessage: "",
    rootOut: "EditUser",
    successShow: false,
    Firstname: "",
    Lastname: "",
    email: "",
    select1: "",
    select2: "",
    numberID: undefined,
    checkbox: false,
    birthDate: "",
    typeUser: "",
    valid: true,
    titleForm: "Registro",
    photo: undefined,
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
      let request = null;
      if (this.photo != null || this.photo != undefined) {
       
      if (this.numberID == "" || this.numberID == null || this.numberID == undefined) {
        this.numberID = this.userRoot.numberID;
      } 
      if (this.email == "" || this.email == null || this.email == undefined) {
        this.email = this.userRoot.email;
      }
      if (this.Firstname == "" || this.Firstname == null || this.Firstname == undefined) {
        this.Firstname = this.userRoot.Firstname;
      }
      if (this.Lastname == "" || this.Lastname == null || this.Lastname == undefined) {
        this.Lastname = this.userRoot.Lastname;
      }
      if (this.select1 == "" || this.select1 == null || this.select1 == undefined) {
        this.select1 = this.userRoot.select1;
      }
      if (this.typeUser == "" || this.typeUser == null || this.typeUser == undefined) {
        this.typeUser = this.userRoot.typeUser;
      }
      if (this.photo == "" || this.photo == null || this.photo == undefined) {
        this.photo = this.userRoot.photo;
      }
      if (this.phone == "" || this.phone == null || this.phone == undefined) {
        this.phone = this.userRoot.phone;
      }
      if (this.select2 == "" || this.select2 == null || this.select2 == undefined) {
        this.select2 = this.userRoot.select2;
      }
      if (this.birthDate == "" || this.birthDate == null || this.birthDate == undefined) {
        this.birthDate = this.userRoot.birthDate;
      }
      const user = new FormData();
      user.append("email",this.email);
      user.append("Firstname",this.Firstname);
      user.append("Lastname",this.Lastname);
      user.append("select1",this.select1);
      user.append("numberID",this.numberID);
      user.append("typeUser",this.typeUser);
      user.append("phone",this.phone);
      user.append("photo",this.photo);
      user.append("select2",this.select2);
      user.append("birthDate",this.birthDate);

      request = upDateUserWithPhoto(this.userRoot.numberID, user)

      } else {
      const user = {
        email: this.email,
        Firstname: this.Firstname,
        Lastname: this.Lastname,
        select1: this.select1,
        numberID: this.numberID,
        typeUser: this.typeUser,
        phone: this.phone,
        select2: this.select2,
        birthDate: this.birthDate,
        photo:this.userRoot.photo
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
        return (itemX != ""&&itemX!=undefined&&itemX!=null);
      });

      let userEdited = salida;

      request= upDateUser(this.userRoot.numberID, userEdited)
      
      }
      request
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
    //para vista previa de imagen
    mostrar(){
      var archivo = document.getElementById("photo").files[0];
      var reader = new FileReader();
        reader.readAsDataURL(archivo );
        reader.onloadend = function () {
          document.getElementById("img").src = reader.result;
        
      }
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
#img{
    width: 150px;
    height: 150px;
    border-radius: 75px;
}

</style>