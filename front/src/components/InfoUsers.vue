<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card-title class="white--text orange darken-4">
          {{ titleUsersList }}
          <v-spacer></v-spacer>

          <v-btn color="white" class="text--primary" fab to="/user-register">
            <v-icon >mdi-plus</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar Usuario"
        single-line
        hide-details
        v-on:keypress="usersSearch(usersOrigin)"
      ></v-text-field>
      <v-alert
        v-if="search!=''"
        type="info"
      >
      Recuerde: Debe ingresar el primer nombre o el # de documento del usuraio, luego oprima enter (si no genera datos intente poner un espacio luego al final antes de oprimir enter)
      </v-alert>
  
        <v-divider></v-divider>
        <v-virtual-scroll item-height="70" height="300" :items="users">

          <template v-slot:default ="{ item }" >
            <br>
            <v-list-item @click="getSelected(item)">
              
                 <!--Esto si el usuario es admin-->
            <v-badge
              avatar
              bordered
              icon="mdi-shield-account-variant"
              overlap
              color="warning"
              v-if="item.typeUser == 'Admin'"
              >
              <v-avatar v-if="item.photo!=undefined" size="56">
                <v-img  :src="item.photo"></v-img>
              </v-avatar>
              <v-avatar v-if="item.photo==undefined" size="56">
                <v-img v-if="item.select2=='Femenino'" src="../../public/images/Avatar_Default/avatar-mujer.jpg"></v-img>
                <v-img v-if="item.select2=='Masculino'" src="../../public/images/Avatar_Default/avatar-hombre.png"></v-img>
                <v-img esle src="../../public/images/Avatar_Default/avatar-hombre.png"></v-img>
              </v-avatar>
            </v-badge>
            <!--Esto si el usuario es asesor-->
            <v-badge
              avatar
              bordered
              icon="mdi-tooltip-account"
              overlap
              color="green"
              v-if="item.typeUser == 'Asesor'"
              >
              <v-avatar v-if="item.photo!=undefined" size="56">
                <v-img  :src="item.photo"></v-img>
              </v-avatar>
              <v-avatar v-if="item.photo==undefined" size="56">
                <v-img v-if="item.select2=='Femenino'" src="../../public/images/Avatar_Default/avatar-mujer.jpg"></v-img>
                <v-img v-if="item.select2=='Masculino'" src="../../public/images/Avatar_Default/avatar-hombre.png"></v-img>
                <v-img esle src="../../public/images/Avatar_Default/avatar-hombre.png"></v-img>
              </v-avatar>

            </v-badge>
            <!--Esto si el usuario es cliente-->
            <v-badge
              avatar
              bordered
              icon="mdi-account"
              overlap
              color="blue"
              v-if="item.typeUser == 'Cliente'"
              >
              <v-avatar v-if="item.photo!=undefined" size="56">
                <v-img  :src="item.photo"></v-img>
              </v-avatar>
              <v-avatar v-if="item.photo==undefined" size="56">
                <v-img v-if="item.select2=='Femenino'" src="../../public/images/Avatar_Default/avatar-mujer.jpg"></v-img>
                <v-img v-if="item.select2=='Masculino'" src="../../public/images/Avatar_Default/avatar-hombre.png"></v-img>
                <v-img esle src="../../public/images/Avatar_Default/avatar-hombre.png"></v-img>
              </v-avatar>
            </v-badge>
              <v-list-item-content>
                <v-list-item-title>---{{ item.Firstname }} {{item.Lastname}} // {{item.numberID}}</v-list-item-title>
              </v-list-item-content>
            <v-list-item-action>
              <v-row>
                <v-col>
            <v-btn
              depressed
              small
               @click="editUser(item)"
            >
              EDITAR
              <v-icon
                color="blue darken-4"
                right
              >
                mdi-pencil
              </v-icon>
            </v-btn>
            </v-col>
            <v-col>
            <v-btn
              depressed
              small
              @click="eliminarUsuario(item)"
            >
              Borrar
              <v-icon
                color="red darken-4"
                right
              >
                mdi-delete
              </v-icon>
            </v-btn></v-col>
            </v-row>
          </v-list-item-action>
            </v-list-item> 
          </template>
        </v-virtual-scroll>
      </v-col>
      <v-divider vertical></v-divider>
      <!--vista de los datos del usuario seleccionado-->
      <v-col class="pa-6 d-flex text-center" cols="6" >
        <div v-if="selected == ''">
          Seleccione un usuario
        </div>
        <div v-if="selected != ''">
          <v-card class="pt-6 mx-auto" flat max-width="400"  >
            <v-card-text>
              <v-avatar v-if="selected.photo!=undefined" size="150" rounded="circle">
                <v-img  :src="selected.photo"></v-img>
              </v-avatar>
              <v-avatar v-else size="150">
                <v-img v-if="selected.select2=='Femenino'" src="../../public/images/Avatar_Default/avatar-mujer.jpg"></v-img>
                <v-img v-if="selected.select2=='Masculino'" src="../../public/images/Avatar_Default/avatar-hombre.png"></v-img>
                <v-img esle src="../../public/images/Avatar_Default/avatar-hombre.png"></v-img>
              </v-avatar>
              <h3 class="text-h5 mb-0">
                {{ selected.Firstname }} {{ selected.Lastname }}
              </h3>

              <div class="blue--text mb-0">
                {{ selected.email }}
              </div>
              <v-row>
                <v-col cols="12" md="6">
                  <div class="gray--text subheading typeDocto">
                    {{ selected.select1 }} N°:
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="blue--text subheading font-weight-bold numDocto">
                    {{ selected.numberID }}
                  </div>
                </v-col></v-row
              >
            </v-card-text>
            <v-divider></v-divider>
            <v-row class="text-left" tag="v-card-text">
              <v-col class="text-right mr-4" tag="strong" cols="6">
                Género:
              </v-col>
              <v-col>{{ selected.select2 }}</v-col>
              <v-col class="text-right mr-4" tag="strong" cols="6">
                Fecha de Nacimiento:
              </v-col>
              <v-col>
                <a>{{dateC}}</a>
              </v-col>
              <v-col class="text-right mr-4" tag="strong" cols="6">
                Phone:
              </v-col>
              <v-col>{{ selected.phone }}</v-col>
              <v-col class="text-right mr-4" tag="strong" cols="6">
                Tipo de Usuario:
              </v-col>
              <v-col>{{ selected.typeUser }}</v-col>
            </v-row>
          </v-card>
          <br />
          <br />
          <template>
            <!--este dialogo trae el formulario para editar uduario-->
            <v-dialog v-model="dialog" max-width="800px">
              <v-card>
                <edit-user :userRoot="userRoot" />
              </v-card>
            </v-dialog>
          </template>
        </div>
      </v-col>
      <!--aqui van los snakcbar-->
      <warning-msj :snackbar="snackDelete" :message="msjBorrar" :close="closeDelete" :ok="okDelete" :dato="userToDelete"/>
      <error-message
          :message="errorMessage"
          :snackbar="errorShow"
          :close="closeError"
        />
      <v-divider vertical></v-divider>
    </v-row>
  </v-container>
</template>

<script>
import { getAllUsers } from "../services/UsersService"; //trae los datos desde la BD
//para borra un usuario
import { deleteUser } from "../services/UsersService"; 
import warningMsj from "./warningMsj.vue";
import EditUser from "./EditUser.vue";
import errorMessage from "./ErrorMsj.vue";
export default {
  components: {
    EditUser,
    warningMsj,
    errorMessage
  },
  data: () => ({
    //para borrar usuario
    errorMessage:"",
    snackDelete:false,
    msjBorrar:"",
    userToDelete:[],
    errorShow:false,
    //------
    search:"",
    dateC:"",
    titleUsersList: "Usuarios resgitrados actualmente",
    noselecteds: "Selecione un Usuario",
    dialog: false,
    selected: [],
    users: [],
    userRoot: [],
    avatar: null,
    successMessage: "El usuario se ha modificado",
    successShow: false,
    usersOrigin:[],
  }),
  watch: {},
  mounted() {
    //este mounted trae los datos de cada usuario desde una base de datos en mongo
    getAllUsers()
      .then((response) => {
        this.usersOrigin = response.data;
        this.usersSearch(this.usersOrigin)
      })
      .catch((err) => console.error(err));
  },
  methods: {
    editUser(entrada) {
      this.userRoot = entrada;
      this.dialog = "true";
    },
    closeSuccessDialog() {
      this.successShow = "false";
    },
    //toma el dato "birthDate" y le retira el time
    setDate(entrada) {
      const salida = entrada.substring(0, 10);
      return this.dateC=salida;
    },
    //saca el birthDate del objeto seleccionado
    getSelected(usuario) {
      this.selected = usuario;
      this.setDate(usuario.birthDate)
    },
    //cambia los datos a mostrar cuando se busca un usuario en particular
    usersSearch(usersList){
      let salida = []
      if (this.search.length!="") {
      salida[0] = usersList.find(element => element.Firstname == this.search || element.numberID == this.search)
      }
      else{
      salida = usersList
      }
      return this.users=salida
    },
    //borra el usuario seleccionado
    okDelete(user){
      deleteUser(user.numberID,user)
      .then(() => {
        this.titleUsersList="Usuario eliminado, actializando datos...",
        location.reload();
      })
      .catch((err) => 
      this.openErrorDialog(this.mensajeError(err)));
    },
    openErrorDialog(mensaje) {
      this.errorMessage = mensaje;
      this.errorShow = true;
      this.snackDelete = false;
    },
    eliminarUsuario(user){
      this.snackDelete=true
      this.msjBorrar="Desea borrar a "+user.Firstname+" definitivamente?"
      this.userToDelete=user
    },
    mensajeError(entrada) {
      let salida =
        "Error al eliminar, verifique los datos e intente nuevamente";
      if (entrada == "Error: Request failed with status code 400") {
        salida = "Este usuario no tiene # de documento, debe ser eliminado directamente desde la BD";
      }
      return salida;
    },
    closeError() {
      this.errorShow = false
    },
    //-----------------------
    closeDelete(){
      this.snackDelete=false
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