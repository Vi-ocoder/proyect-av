<template>
  <v-card
    class="mx-auto"
    max-width="350"
    outlined
    elevation="4" 
    >
    <v-form id="formIS" ref="form" v-model="valid" lazy-validation >
        <div class="text-overline mb-1">
        Bienvenido
        </div>
        <div id="sbtIS" class="text-h5 mb-2">
        Ingrese sus datos...
        </div>    

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="nameRules"
        label="Contraseña"
        required
        type="password"
      ></v-text-field>
<br>
    <v-row
    align="center"
    justify="space-around"
  >
      <v-btn 
      :disabled="!valid" 
      color="primary" 
      class="mr-4" 
      @click="validate"
      >
        ENTRAR
      </v-btn>

      <v-btn color="secondary" class="mr-4" @click="reset"> LIMPIAR </v-btn>
    </v-row>
    <br>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    password: "",
    nameRules: [
      (v) => !!v || "Debe ingresar una contraseña",
      (v) =>
        (v && v.length >= 8) || "Contraseña debe tener mínimo 8 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style>
#formIS{
    padding: 20PX;
}
#sbtIS{
    color: cornflowerblue;
}
</style>