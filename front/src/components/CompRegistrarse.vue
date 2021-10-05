<template>
  <v-card flat>
    <v-snackbar v-model="snackbar" absolute top right color="success">
      <span>Registro Exitoso, revise su correo electrónico...</span>
      <v-icon dark> mdi-checkbox-marked-circle </v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.first"
              :rules="rules.name"
              color="purple darken-2"
              label="Nombre"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.last"
              :rules="rules.name"
              color="blue darken-2"
              label="Apellido"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.bio"
              :rules="rules.email"
              label="E-mail"
              required
              color="teal"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="form.tipoDocumento"
              :items="tipoDocumento"
              :rules="rules.tipoDocumento"
              color="pink"
              label="Tipo de Documento"
              required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              type="number"
              v-model="form.nDocumento"
              :rules="rules.nDocumento"
              label="N° Documento"
              required
              hint="Debe ingresar un numero valido, sin puntos ni comas"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-checkbox v-model="form.terms" color="green">
              <template v-slot:label>
                <div @click.stop="">
                  Acepto los 
                  <a href="#" @click.prevent="terms = true">terminos</a>
                  y
                  <a href="#" @click.prevent="conditions = true">condiciones.</a>
                </div>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn text @click="resetForm"> Cancel </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="!formIsValid" text color="primary" type="submit">
          Register
        </v-btn>
      </v-card-actions>
    </v-form>
    <v-dialog v-model="terms" width="70%">
      <v-card>
        <v-card-title class="text-h6"> Terms </v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple" @click="terms = false"> Ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="conditions" width="70%">
      <v-card>
        <v-card-title class="text-h6"> Conditions </v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple" @click="conditions = false"> Ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      nombre: "",
      apellido: "",
      email: "",
      tipoDocumento: "",
      nDocumento: "",
      terms: false,
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        nDocumento: [val => val < 999 || `Ok`,],
        tipoDocumento: [
          (val) => (val || "").length > 0 || "Este campo es obligatorio",
        ],
        name: [(val) => (val || "").length > 0 || "Este campo es obligatorio"],
        email: [
          (v) => !!v || "Dato Obligatorio",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
      },
      tipoDocumento: ["CC", "CE", "RC", "TI", "PTE"],
      conditions: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      snackbar: false,
      terms: false,
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.first &&
        this.form.last &&
        this.form.tipoDocumento &&
        this.form.terms
      );
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    },
  },
};
</script>