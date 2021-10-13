<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="auto"
  >
    <v-app-bar
      :color="iColor"
      dark
    >    
    
      <v-toolbar-title>{{user.Firstname}} {{user.Lastname}}</v-toolbar-title>
    </v-app-bar>
    <v-row>
      <v-col cols="8">
        <br>
        <v-card
          class="mx-auto"
          max-width="auto"
          >
          <admin-resources v-if="user.typeUser=='Admin'" />
          <asesor-resources v-if="user.typeUser=='Asesor'" />
          <cliente-resources v-if="user.typeUser=='Cliente'" />
          <br>
        </v-card>
      </v-col>

      <v-divider vertical></v-divider>
    <!--vista de los datos del usuario seleccionado-->
      <v-col class="pa-6 d-flex text-center" cols="4" >
        <div v-if="user == ''">
         Hubo un error al actualizar, cierra sesion e intenta de nuevo
        </div>
        <div v-if="user != ''">
          <v-card class="pt-6 mx-auto" flat max-width="400"  >
            <profile-user :user="user" :root="user.typeUser" />
          </v-card>
          <br />
          <br />
        </div>
      </v-col>
      
    </v-row>
  </v-card>  
</template>
<script>

//componentes 
import AdminResources from "./Admin/AdminResources.vue";
import AsesorResources from "./Asesor/AsesorResources.vue";
import ClienteResources from "./Cliente/ClienteResources.vue";
import ProfileUser from "./ProfileUser.vue";
export default {
  props:["user", "changeDrawer"],
  components: {
    ProfileUser,
    AdminResources,
    AsesorResources,
    ClienteResources,
  },
    
    data: () => ({
      group: null,
      dialog:false,
      iColor:"secundary"
    }),
    methods:{
      
    },
    mounted(){
      if (this.user.typeUser == "Admin") {
        this.iColor = "warning"
      }
       if (this.user.typeUser == "Asesor") {
        this.iColor = "success"
      }
       if (this.user.typeUser == "Cliente") {
        this.iColor = "primary"
      }
    },
  }
</script>
<style>
</style>