<template>
<v-container fluid class="contForm">
  <v-card class="cardNewUser mx-auto" color = "rgba(255, 255, 255, 0.8)" >
    <v-card-title v-if="userRoot != undefined">
      EDITAR USUARIO: {{userRoot.Firstname}}
    </v-card-title>
    <v-card-title v-else>
      REGISTRATE CON NOSOTROS
    </v-card-title>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="formNewUser"
  >
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

    <v-text-field
      v-model="numberID"
      label="Numero de Documento"
      type = "number"
      :placeholder="userRoot.numberID"
    ></v-text-field>

    <v-text-field
      v-model="phone"
      label="Telefono"
      type = "number"
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

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'debe marcar este espacio para poder guardar']"
      :label="editado"
      required
    ></v-checkbox>


    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="upDate"
    >
      Actualizar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      LIMPIAR
    </v-btn>
    <!-- snakbar para cuando se actualiza ok -->
    <success-message
          :message="successMessage"
          :root="root"
          :snackbar="successShow"
          :close="close"
        />
  </v-form>
  </v-card>
  <br><br>
  </v-container>
</template>
<script>

import { upDateUser } from "../services/UsersService";
import SuccessMessage from "./AllGoodMsj.vue";

  export default {
    components: {
        SuccessMessage,
    },
    props:["userRoot"],
    data: () => ({
      successMessage:"",
      root:"EditUser",
      successShow:false,
      editado:"¿Todo listo para guardar?...",
      Firstname: "",
      Lastname: "",
      email: "",
      select1: "",
      select2: "",
      numberID:"",
      checkbox: false,
      birthDate:"",
      typeUser: "",
      valid: true,
      titleForm:"Registro",
      photo:"",
      phone:"",
      numRules: [
        v => (v && v.length >= 5) || 'El documento debe tener mas de 5 Dígitos',
      ],
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      typesDoc: [
        'Cedula Ciudadania',
        'Cedula Extranjeria',
        'Pasaporte',
      ],
      sex: [
        'Femenino',
        'Masculino',
      ],
      typesUser: [
        'Asesor',
        'Cliente',
        'Admin',
      ],
    }),

    methods: {

    upDate () {
        /*
        let numID = "";
        if (this.numberID >0) {// me aseguro que haya un numberID
            numID = this.numberID;
        } else {
            numID = this.userRoot;
        }
        this.numberID = numID;*/
        this.numberID=this.userRoot.numberID
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

      upDateUser(this.numberID,userEdited)
        .then(() => 
            this.successMessage="Se ha actualizado el Usuario: " + this.numberID,
            this.successShow=true,
        )
        .catch((err) => console.error(err));

    },
      reset () {
        this.$refs.form.reset()
      },
      close(){
          this.successShow=false,
          location.reload();
      },
    },
  }
</script>
<style>
.cardNewUser{
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  width: 1000px;
}
.formNewUser{  
  padding: 20px;
  width: 100%;
}
.contForm{
  background-size: 100%;
  padding: 20px;
}
</style>