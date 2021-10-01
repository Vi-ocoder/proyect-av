<template>
  <v-container>
    <v-card>

    </v-card>
      <div>
        <CompIniciarSesion />
      </div>
      <br>
      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          REGISTRARSE
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>REGISTRO</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              CERRAR
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        
        <CompRegistrarse />
      
      </v-card>
    </v-dialog>
  </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    CompIniciarSesion: () => import("../components/CompIniciarSesion"),
    CompRegistrarse: () => import("../components/CompRegistrarse"),
  },
  data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
};
</script>