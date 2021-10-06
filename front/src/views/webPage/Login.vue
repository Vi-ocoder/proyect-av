<template>
  <v-app id="inspire">
    <v-main>
      <!-- contenido principal  -->
      <!-- Inicio  -->

      <v-img src="../../../public/images/pagina/banner_1.jpg" class="bg-img1">
        <v-overlay value="true" absolute>
          <v-form ref="form" v-model="valid" lazy-validation>
            <h2> INGRESA O REGISTRATE CON NOSOTROS </h2>
            <br />
            <br />
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Contraseña"
              color="white"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-8"
              @click="loginFunction()"
            >
              Ingresar
            </v-btn>
          </v-form>

          <div class="mt-15">
            <p>
              Olvidaste tu contraseña? -
              <a class="text-decoration-none" href="/user-forgot-password">
                <span class="white--text font-weight-bold">
                  Recuperar contraseña
                </span>
              </a>
            </p>
            <p>
              No tienes una cuenta? -
              <a class="text-decoration-none" href="/user-register">
                <span class="white--text font-weight-bold"> Registrarse </span>
              </a>
            </p>
          </div>
        </v-overlay>
      </v-img>
    </v-main>
  </v-app>
</template>
  
<script>
import { validateUser } from "../../services/LoginService";
export default {
  data: () => ({
    valid:"",
    drawer: null,
    value: "home", // Donde quiero que inicie pintado el selector del menu v-bottom-navigation
    show1: false,
    password: "",
    email:"",
    emailRules: {
      required: value => !!value || 'Required.',
      // min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  methods:{
    loginFunction() {
      validateUser(this.email, this.password)
        .then((response) => {
          const user = response.data;
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("role", user.role);
          this.$emit("logged", undefined);
          window.location.reload();
        })
        .catch((err) => {
          this.showError = true;
          this.error = err.response.data.message;
          setInterval(() => {
            this.showError = false;
          }, 3000);
        });
    },
  }
};
</script>
<style scoped>
.bg-img1 {
  /* background: url('../../public/images/pagina/banner_1.jpg'); */
  background-size: cover;
  height: 100vh;
}
</style>