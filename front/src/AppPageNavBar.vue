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

      <!-- Vista de perfil solo para usuarios registrados -->
      <v-btn v-if="isUser==true" value="contacts" to="/admin"  style="height: inherit; background-color: transparent;">
        Perfil
        <v-icon> fas fa-user-shield </v-icon>
      </v-btn>
      <!-- Vista Admins (pruebas, producto final borrar este enlace)  -->
      <v-btn value="contacts" to="/tabPaqs"  style="height: inherit; background-color: transparent;">
        Administrativo
        <v-icon> fas fa-user-shield </v-icon>
      </v-btn>

    </v-bottom-navigation>
</template>
<script>
export default {
  data:()=> ({
    isUser:false,
    value:"",
    
  }),
  methods:{
    isUserOk(){
      
    }
  }
};
</script>