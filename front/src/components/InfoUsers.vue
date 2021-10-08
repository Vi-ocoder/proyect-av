<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>{{ titleUsersList }}</h2>
         <v-card
    class="mx-auto"
    max-width="400"
  ><v-card-title class="white--text orange darken-4">
      {{ titleUsersList }}

      <v-spacer></v-spacer>

      <v-btn
        color="white"
        class="text--primary"
        fab
        small
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pt-4">
      aqui pongo algo para buscar
    </v-card-text>

    <v-divider></v-divider>

    <v-virtual-scroll 
    item-height="50"
    height="300"
    :items="users"
    >
        
        <!--v-treeview
          v-model="selected"
          activatable
          :active.sync="selected"
          :items="users"
          item-key="numberID"
          return-object
        -->
         
    
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar
              color="blue"
              size="56"
            >
            
                <v-img :src="item.photo"></v-img>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.Firstname }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            
          </v-list-item-action>
        </v-list-item>
      </template><!--/v-treeview-->
    </v-virtual-scroll>
  </v-card>
        
      </v-col>
    <!--vista de los datos del usuario seleccionado-->
      <v-divider vertical></v-divider>
      <v-col class="pa-6 d-flex text-center" cols="6">
        <template v-if="!selected.length"> {{ noNodes }}</template>
        <template v-else>
          <div v-for="node in selected" :key="node.numberID">
            <v-card class="pt-6 mx-auto" flat max-width="400">
              <v-card-text>
                <v-avatar size="150" rounded="circle">
                  <v-img :src="node.photo"  @click="getSelected(item)"></v-img>
                </v-avatar>
                <h3 class="text-h5 mb-0">
                  {{ node.Firstname }} {{ node.Lastname }}
                </h3>

                <div class="blue--text mb-0">
                  {{ node.email }}
                </div>
                <v-row>
                  <v-col cols="12" md="6">
                    <div class="gray--text subheading typeDocto">
                      {{ node.select1 }} N°:
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div
                      class="blue--text subheading font-weight-bold numDocto"
                    >
                      {{ node.numberID }}
                    </div>
                  </v-col></v-row
                >
              </v-card-text>
              <v-divider></v-divider>
              <v-row class="text-left" tag="v-card-text">
                <v-col class="text-right mr-4" tag="strong" cols="6">
                  Género:
                </v-col>
                <v-col>{{ node.select2 }}</v-col>
                <v-col class="text-right mr-4" tag="strong" cols="6">
                  Fecha de Nacimiento:
                </v-col>
                <v-col :v-model="setDate">
                  <a>{{ setDate(node.birthDate) }}</a>
                </v-col>
                <v-col class="text-right mr-4" tag="strong" cols="6">
                  Phone:
                </v-col>
                <v-col>{{ node.phone }}</v-col>
                <v-col class="text-right mr-4" tag="strong" cols="6">
                  Tipo de Usuario:
                </v-col>
                <v-col>{{ node.typeUser }}</v-col>
              </v-row>
            </v-card>
            <br />
            <br />
            <template>
              <v-btn color="primary" class="btnE" @click="editUser(node)">
                <v-icon left> mdi-pencil </v-icon>
                Editar
              </v-btn>
              <v-btn color="error" class="btnD" @click="deleteUser(node)">
                <v-icon left> mdi-delete </v-icon>
                Borrar
              </v-btn>

              <v-dialog v-model="dialog" max-width="800px">
                <v-card>
                  <v-card-title>
                    <!--span class="text-h5">Editar usuario: {{node.Firstname}}</span-->
                  </v-card-title>
                  <edit-user :userRoot="userRoot" />
                </v-card>
              </v-dialog>
            </template>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getAllUsers } from "../services/UsersService"; //trae los datos desde la BD

import EditUser from "./EditUser.vue";
export default {
  components: {
    EditUser,
  },
  data: () => ({
    titleUsersList: "Usuarios resgitrados actualmente",
    noNodes: "Selecione un Usuario",
    dialog: false,
    selected: [],
    users: [],
    userRoot: [],
    avatar: null,
    successMessage: "El usuario se ha modificado",
    successShow: false,
  }),
  watch: {},
  mounted() {
    //este mounted trae los datos de cada usuario desde una base de datos en mongo
    getAllUsers()
      .then((response) => {
        this.users = response.data;
      })
      .catch((err) => console.error(err));
  },
  methods: {
    editUser(userX) {
      this.dialog = "true";
      this.userRoot = userX;
    },
    closeSuccessDialog() {
      this.successShow = "false";
    },
    setDate(dateX) {
      const salida = dateX.substring(0, 10);
      return salida;
    },
    getSelected(usuario){
        this.selected=usuario
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