<template>
  <div>
    <v-app-bar :color="iColor" dark>
      <v-toolbar-title
        >{{ user.Firstname }} {{ user.Lastname }}</v-toolbar-title
      >
    </v-app-bar>
    <v-container style="height: 10px"></v-container>
    <v-row>
      <!--vista de los datos del usuario seleccionado-->
      <v-col class="col-6 col-md-4">
        <div v-if="user == ''">Error data found</div>
        <div v-if="user != ''">
          <profile-user :user="user" :root="user.typeUser" />
        </div>
        <br />
        <div>
          <buttoms-opc />
        </div>
      </v-col>
      <v-divider v-if="lg" vertical></v-divider>
      <v-col class="col-12 col-sm-6 col-md-8">
        <admin-resources v-if="user.typeUser == 'Admin'" />
        <asesor-resources v-if="user.typeUser == 'Asesor'" />
        <cliente-resources v-if="user.typeUser == 'Cliente'" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
//componentes
import AdminResources from "./Admin/AdminResources.vue";
import ButtomsOpc from "./Admin/ButtomsOpc.vue";
import AsesorResources from "./Asesor/AsesorResources.vue";
import ClienteResources from "./Cliente/ClienteResources.vue";
import ProfileUser from "./ProfileUser.vue";
export default {
  props: ["user", "changeDrawer"],
  components: {
    ProfileUser,
    AdminResources,
    AsesorResources,
    ClienteResources,
    ButtomsOpc,
  },

  data: () => ({
    group: null,
    iColor: "secundary",
  }),
  methods: {},
  mounted() {
    if (this.user.typeUser == "Admin") {
      this.iColor = "warning";
    }
    if (this.user.typeUser == "Asesor") {
      this.iColor = "success";
    }
    if (this.user.typeUser == "Cliente") {
      this.iColor = "primary";
    }
  },
};
</script>
<style>
</style>