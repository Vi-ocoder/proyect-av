<template>
<v-container>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="apellido"
      :rules="nameRules"
      label="Apellido(s)"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-row>
      <v-col lg="6" sm="12">
        <v-select
          v-model="select"
          :items="items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>
      </v-col>
      <v-col lg="6" sm="12">
        <v-text-field
            type = "number"
          v-model="doc"
          :rules="nameRules"
          label="N° Documento"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'Debe aceptar los terminos para continuar']"
      label="Acepto los terminos y condiciones"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      ENVIAR
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> LIMPIAR </v-btn>
  </v-form>
</v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Dato Obligatorio"],
    email: "",
    emailRules: [
      (v) => !!v || "Dato Obligatorio",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: "CC",
    items: ["CC", "RC", "PT", "TI", "CE"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>