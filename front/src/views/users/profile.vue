<template>
  <v-container>
    <v-row>
      <!--vista de los datos del usuario seleccionado-->
      <v-col class="pa-6 d-flex text-center" cols="6" >
        <div v-if="userLogged == ''">
         Hubo un error al actualizar, cierra sesion e intenta de nuevo
        </div>
        <div v-if="userLogged != ''">
          <v-card class="pt-6 mx-auto" flat max-width="400"  >
            <v-card-text>
              <v-avatar size="150" rounded="circle">
                <v-img :src="userLogged.photo"></v-img>
              </v-avatar>
              <h3 class="text-h5 mb-0">
                {{ userLogged.Firstname }} {{ userLogged.Lastname }}
              </h3>

              <div class="blue--text mb-0">
                {{ userLogged.email }}
              </div>
              <v-row>
                <v-col cols="12" md="6">
                  <div class="gray--text subheading typeDocto">
                    {{ userLogged.select1 }} N°:
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="blue--text subheading font-weight-bold numDocto">
                    {{ userLogged.numberID }}
                  </div>
                </v-col></v-row
              >
            </v-card-text>
            <v-divider></v-divider>
            <v-row class="text-left" tag="v-card-text">
              <v-col class="text-right mr-4" tag="strong" cols="6">
                Género:
              </v-col>
              <v-col>{{ userLogged.select2 }}</v-col>
              <v-col class="text-right mr-4" tag="strong" cols="6">
                Fecha de Nacimiento:
              </v-col>
              <v-col>
                <a>{{dateC}}</a>
              </v-col>
              <v-col class="text-right mr-4" tag="strong" cols="6">
                Phone:
              </v-col>
              <v-col>{{ userLogged.phone }}</v-col>
            
              <v-col cols="12">{{ userLogged.typeUser }}</v-col>
            </v-row>
            <v-btn @click="dialog=true">Actualizar</v-btn>
            <v-dialog v-model="dialog" width="60%">
              <v-card width="auto">
              <editar-usuario :userRoot="userLogged" :root="rootOut"/>
              </v-card>
            </v-dialog>
          </v-card>
          <br />
          <br />
        </div>
      </v-col>
      <v-divider vertical></v-divider>
      <br>
      <v-col>
      <v-card>
      <h2>Aqui pondremos informacion segun usuario:</h2>
        <p>
          -  Cliente: listado con reservas actuales
        </p>
        <p>
          -  Asesor: Acceso a editar clientes registrados (no debe poder modificar el campo TIPO DE CLIENTE ya que este solo lo puede modificar el admin) y gestion de reservas
        </p>
        <p>
          -  Admin: Acceso a editar clientes, paquetes y gestionar reservas; modificar terminos de uso etc
        </p>
      </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { getAllUsers } from "../../services/UsersService"; //trae los datos desde la BD
import EditarUsuario from "../../components/EditUser.vue";
export default {
  components: {
    EditarUsuario
  },
  data: () => ({
    dialog:false,
    email:"",
    rootOut:"profile",//envia este dato a los componentes
    search:"",
    dateC:"",
    userLogged: [],
    usersOrigin:[],
  }),
  watch: {},
  mounted() {
    //este mounted trae los datos de cada usuario desde una base de datos en mongo
    getAllUsers()
      .then((response) => {
        this.email = sessionStorage.getItem("email");
        this.usersOrigin = response.data
        this.usersSearch(this.usersOrigin)
        this.getuserLogged(this.userLogged)
        })
      .catch((err) => console.error(err));
  },
  methods: {
    //toma el dato "birthDate" y le retira el time
    setDate(entrada) {
      const salida = entrada.substring(0, 10);
      return this.dateC=salida;
    },
    //saca el birthDate del objeto seleccionado
    getuserLogged(usuario) {
      this.setDate(usuario.birthDate)
    },
    //cambia los datos a mostrar cuando se busca un usuario en particular
    usersSearch(usersList){
      let salida = []
      salida = usersList.find(element => element.email == this.email)
     
      return this.userLogged=salida
    },
  },
};
</script>
<style>
.btnE {
  bottom: 60%;
  right: 8%;
  position: fixed;
  width: 130px;
}
.btnD {
  bottom: 50%;
  right: 8%;
  position: fixed;
  width: 130px;
}
.typeDocto {
  text-align: end;
  padding: 10% 0;
}
.numDocto {
  text-align: initial;
  padding: 10% 0;
}
</style>