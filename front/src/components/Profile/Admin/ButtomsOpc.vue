<template>
  <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    shift
  >
    <v-btn @click="dialogPaqs=true">
      <span>Paquetes</span>

      <v-icon>mdi-wallet-travel</v-icon>
    </v-btn>

    <v-btn @click="dialogUsers=true">
      <span>Usuarios</span>

      <v-icon>mdi-account-supervisor</v-icon>
    </v-btn>

    <v-btn @click="dialogRes=true">
      <span>Reservas</span>

      <v-icon>mdi-book</v-icon>
    </v-btn>

    <v-btn @click="cerrarSesion()">
      <span>Cerrar Sesion</span>

      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
    <v-dialog v-model="dialogPaqs">
      <v-card>
        <tab-paqs />
        <v-btn class="flotante" @click="dialogPaqs=false" fab><v-icon> mdi-close</v-icon></v-btn>
      </v-card>
  </v-dialog>
  <v-dialog v-model="dialogUsers">
      <v-card>
        <info-users />
        <v-btn class="flotante" @click="dialogUsers=false" fab><v-icon> mdi-close</v-icon></v-btn>
      </v-card>
  </v-dialog>
    <v-dialog v-model="dialogRes">
      <v-card>
      <reservs-info/>
      <v-btn class="flotante" @click="dialogRes=false" fab><v-icon> mdi-close</v-icon></v-btn>
      </v-card>
    </v-dialog>
  </v-bottom-navigation>
  
</template>
<script>
import InfoUsers from '../../InfoUsers.vue'
import ReservsInfo from '../../ReservsInfo.vue'
import TabPaqs from '../../TabPaqs.vue'
  export default {
  components: { InfoUsers,TabPaqs, ReservsInfo },
    data: () => ({ 
        dialogPaqs:false,
        dialogUsers:false,
        dialogRes:false,
        value: 1 
        }),

    computed: {
      color () {
          
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
    methods:{
      cerrarSesion(){

      sessionStorage.removeItem("email");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("nombre");
      sessionStorage.removeItem("apellido");

      sessionStorage.removeItem("telefono");
      sessionStorage.removeItem("identificacion");
      sessionStorage.removeItem("numeroIdentificacion");

      this.drawer = false;
      
      this.$emit("loggout", undefined);
      this.$router.push({ path: '/' })
      window.location.reload();
      
    },
    }
  }
</script>
<style>
.flotante{
    position: fixed;
    top: 70px;
    right: 50px;
}
</style>