<template>
<v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="typeDoc"
      :items="typesDoc"
      :rules="[v => !!v || 'Item is required']"
      label="Tipo de Documento"
      required
    ></v-select>

    <v-text-field
      v-model="numDoc"
      :rules="numRules"
      label="Numero de Documento"
      type = "number"
      required
    ></v-text-field>

    
  <v-file-input
    v-model="photo"
    label="Foto de perfil"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>

<v-select
      v-model="typeUser"
      :items="typesUser"
      :rules="[v => !!v || 'Item is required']"
      label="Tipo de usuario"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      ENVIAR
    </v-btn>

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

  </v-form>
  </v-container>
</template>
<script>

import { insertUser } from "../../services/UsersService";
import { upDateUser } from "../../services/UsersService";

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 8) || 'El nombre debe tener mas de 8 letras',
      ],
      numDoc: null,
      numRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 5) || 'El documento debe tener mas de 5 Dígitos',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      typeDoc: null,
      typesDoc: [
        'CC',
        'RC',
        'TI',
        'CE',
        'PTE',
      ],
      typeUser: null,
      typesUser: [
        'Asesor',
        'Cliente',
        'Admin',
      ],
      photo:"",
      checkbox: false,
    }),

    methods: {
      validate () {
        let user = {
        email: this.email,
        name: this.name,
        typeDoc: this.typeDoc,
        numDoc: this.numDoc,
        typeUser: this.typeUser,
        photo: this.photo,
        reservas: ["una","otra"] 
        };
        console.log(user.name)
        insertUser(user)
        .then((res) => 
            console.log("Se ha creado un nuevo Usuario: ", res.numDoc),
            
        )
        .catch((err) => console.error(err));
        //this.$refs.form.reset()*/
    },

    upDate () {
        const user = {
        email: this.email,
        name: this.name,
        typeDoc: this.typeDoc,
        numDoc: this.numDoc,
        typeUser: this.typeUser,
        photo: this.photo,
        reservas: ["una","otra"] 
        };
      upDateUser(this.numDoc,user)
        .then((res) => 
            console.log("Se ha actualizado el Usuario" + res.numDoc),
            
        )
        .catch((err) => console.error(err));
        this.$refs.form.reset()
    },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>