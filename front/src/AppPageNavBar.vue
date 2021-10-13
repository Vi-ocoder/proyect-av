<template>

  <v-main>
   
    <!-- barra de navegacion -->
    <v-bottom-navigation v-model="value" :value="value" fixed color="primary">

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
        <v-btn value="signin"  to="/login" v-if="!isLoggedIn"  style="height: inherit; background-color: transparent;" >
          <span>Login</span>    
          <v-icon>fas fa-user</v-icon>
        </v-btn>

        <v-btn value="account" v-if="isLoggedIn" @click.stop="drawer = !drawer"  
          style="height: inherit; background-color: transparent; color:rgba(0, 0, 0, 0.6) !important;" 
        >
          <span>Perfil</span>    
          <v-icon>fas fa-user</v-icon>
        </v-btn>
      <!-- </router-link> -->


    </v-bottom-navigation>


    <!-- Menu lateral izquierdo (solo users y admins)  -->
    <v-navigation-drawer temporary fixed  v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">

            <div align="center" class="pa-2">
              <v-avatar size="90">
                <v-img :src="this.foto "></v-img>
              </v-avatar>
              <p class="pt-2"> Bienvenido:</p> 
            </div>

          </v-list-item-title>
          <v-list-item-subtitle>
            <div align="center">
              <h3 style="color: black">{{ nom +' '+ ape }}   </h3>
              <p class="pt-1"> {{ role }}  </p>
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>

        <div v-if="role === 'Admin'">
          <v-list-item v-for="item in adminRoute" :key="item.title" link :to="item.link">
            <v-list-item-icon> <v-icon>{{ item.icon }}</v-icon> </v-list-item-icon>
            <v-list-item-content> 
              <v-list-item-title>{{ item.title }}</v-list-item-title> 
            </v-list-item-content>
          </v-list-item>
        </div>

        <div  v-if="role === 'Cliente'">
          <v-list-item v-for="item in userRoute" :key="item.title" link  :to="item.link">
            <v-list-item-icon> <v-icon>{{ item.icon }}</v-icon> </v-list-item-icon>
            <v-list-item-content> 
              <v-list-item-title>{{ item.title }}</v-list-item-title> 
            </v-list-item-content>
          </v-list-item>
        </div>

         <div  v-if="role === 'Asesor'">
          <v-list-item v-for="item in asesorRoute" :key="item.title" link  :to="item.link">
            <v-list-item-icon> <v-icon>{{ item.icon }}</v-icon> </v-list-item-icon>
            <v-list-item-content> 
              <v-list-item-title>{{ item.title }}</v-list-item-title> 
            </v-list-item-content>
          </v-list-item>
        </div>

      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block v-on:click="cerrarSesion();">
            <v-icon>fas fa-sign-out-alt</v-icon>
            Cerrar sesión
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-main>
</template>



<script>
export default {

  props:["root"],
  components:{
  },
  data () {
      return {
        // --esto lo usa victor-
        cuenta:null,
        nom:"Andres",
        email:"",
        //----------------
        drawer: null,
        value:'',
        // role: "admin",
        role: '',
        role2:this.hasRole("admin"),
        adminRoute: [
          { title: 'Gestión paquetes', icon: 'fas fa-luggage-cart', link:'/tabPaqs'},
          { title: 'Gestión usuarios', icon: 'fas fa-users', link:'/infoUsers'},
          { title: 'Cuenta', icon: 'fas fa-user', link:'/profile' },
        ],
        userRoute: [
          { title: 'Mis reservas', icon: 'fas fa-plane', link:'/my-reservations' },
          { title: 'Cuenta', icon: 'fas fa-user', link:'/profile' },
        ],
        asesorRoute:[
         { title: 'Gestión usuarios', icon: 'fas fa-users', link:'/infoUsers'},
         { title: 'Cuenta', icon: 'fas fa-user', link:'/profile' },
        ],
      }
    },
  
  mounted(){
    this.email = sessionStorage.getItem("email");
    this.role = sessionStorage.getItem("role");
    this.nom = sessionStorage.getItem("nombre");
    this.ape = sessionStorage.getItem("apellido");
    this.foto = sessionStorage.getItem("foto");

    if(this.email != '' && this.role !=''&&this.email != undefined && this.role != undefined &&this.email != null && this.role != null){//elimina el error del inicio
      this.drawer = true;
    }else{
      this.drawer = false;
    }
  },
  computed:{
    isLoggedIn(){
      const email = sessionStorage.getItem("email");
      return !!email; // !! => Si este campo tiene algun valor
    }
  },
  methods:{
    hasRole(role){
      return sessionStorage.getItem("role") == role;
    },
    cerrarSesion(){

      sessionStorage.setItem("email", '');
      sessionStorage.setItem("role", '');
      sessionStorage.setItem("nombre", '');
      sessionStorage.setItem("apellido", '');

      sessionStorage.setItem("telefono", '');
      sessionStorage.setItem("identificacion", '');
      sessionStorage.setItem("numeroIdentificacion", '');

      this.drawer = false;
      
      this.$emit("loggout", undefined);
      this.$router.push({ path: '/' })
      window.location.reload();
      
    },
    //para cambiar el drawer desde el perfil
  },
};
</script>