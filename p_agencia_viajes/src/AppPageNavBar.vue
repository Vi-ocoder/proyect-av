<template>
    <!-- barra de navegacion -->
    <v-bottom-navigation v-model="value" fixed color="primary">


      <!-- Inicio  -->
      <v-btn value="home"  to="/" style="height: inherit; background-color: transparent;">
        <span>Inicio</span>

        <v-icon>fas fa-home</v-icon>
      </v-btn>

      <!-- paquetes  -->
      <v-btn value="travels"  to="/travels" style="height: inherit; background-color: transparent;">
        <span>Paquetes</span>
        <v-icon> fas fa-map-marked-alt </v-icon>
      </v-btn>
   

      <!-- contactos  -->
      <v-btn value="contacts" to="/contact-us"  style="height: inherit; background-color: transparent;">
        Contacto
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <!-- inicias sesion -->
      <!-- <router-link to="/login" class="text-decoration-none"> -->
        <v-btn value="signin"  to="/login" style="height: inherit; background-color: transparent;">
          <span>Login</span>    
          <v-icon>fas fa-user</v-icon>
        </v-btn>
      <!-- </router-link> -->

    </v-bottom-navigation>
</template>