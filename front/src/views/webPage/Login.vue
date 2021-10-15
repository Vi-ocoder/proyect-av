<template>
  <v-app id="inspire">
    <v-main>
      <!-- contenido principal  -->
      <!-- Inicio  -->

      <v-img src="../../../public/images/pagina/banner_1.jpg" class="bg-img1">
        <v-overlay value="true" absolute>
          <v-form ref="form" v-on:submit.prevent="validate();">
            
              <img  width=500  src="../../../public/images/pagina/logo.png">
            <h2> INGRESA O REGISTRATE CON NOSOTROS </h2>
            <br />
            <br />
            <v-text-field
              v-model="email"
              name="email"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              name="password"
              label="Contraseña"
              color="white"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn
              color="success"
              class="mr-8"
              type="submit"
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

    <template>
        <div class="text-center ma-2">
          <v-snackbar  v-model="snackbar" top>
            {{ snackbartext }}
            <template v-slot:action="{ attrs }">
              <v-btn color="blue" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
            </template>
          </v-snackbar>
        </div>
      </template>
  </v-app>
</template>
  
<script>
import { validateUser } from "../../services/LoginService";
export default {
  data: () => ({
    drawer: null,
    show1: false,
    email:'',
    password: '',
    nombre:'',
    apellido:'',
    foto:'',

    snackbar: false,
    snackbartext: '',
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
    validate(){

      validateUser(this.email, this.password)
      .then((response) =>{
        const user= response.data;

        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("role", user.typeUser);
        sessionStorage.setItem("nombre", user.Firstname);
        sessionStorage.setItem("apellido", user.Lastname);
        sessionStorage.setItem("foto", user.photo);

        sessionStorage.setItem("telefono", user.phone);
        sessionStorage.setItem("identificacion", user.select1);
        sessionStorage.setItem("numeroIdentificacion", user.numberID);


        this.drawer = true;
        this.$emit("logged", undefined);
        this.$router.push({ path: '/' })
        window.location.reload();

      }).catch((err) => {
        this.snackbar = true,
        this.snackbartext = err.response.data.message
      } );
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