<template>
  <v-app id="inspire">
    <v-main>
      <!-- contenido principal  -->
      <!-- Inicio  -->

      <v-img src="../../../public/images/pagina/banner_1.jpg" class="bg-img1">
        <v-overlay value="true" absolute>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-form-title>
              INGRESA O REGISTRATE CON NOSOTROS
            </v-form-title>
            <br>
            <br>
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
              @click="validate"
            >
              Ingresar
            </v-btn>
          </v-form>

          <div class="mt-15">
            <p>
              Olvidaste tu contraseña? -
              <a class="text-decoration-none" href="">
                <span class="white--text font-weight-bold">
                  Recuperar contraseña
                </span>
              </a>
            </p>
            <p>
              No tienes una cuenta? -
              <a class="text-decoration-none" href="/createUser">
                <span class="white--text font-weight-bold"> Registrarse </span>
              </a>
            </p>
          </div>
        </v-overlay>
      </v-img>
    </v-main>
  </v-app>
</template>
  
    <style scoped>
.bg-img1 {
  /* background: url('../../public/images/pagina/banner_1.jpg'); */
  background-size: cover;
  height: 100vh;
}
</style>

    <script>
export default {
  data: () => ({
    drawer: null,
    value: "home", // Donde quiero que inicie pintado el selector del menu v-bottom-navigation
    show1: false,
    password: "Password",
    rules: {
      // required: value => !!value || 'Required.',
      // min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
};
</script>