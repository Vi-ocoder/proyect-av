<template>
  <v-card
    class="mx-auto"
    max-width="90%"
  >
    <v-card-title class="white--text orange darken-4">
      Directorio de Usuarios

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
      Lista de usuarios resgistrados en la agencia
    </v-card-text>

    <v-divider></v-divider>
 <v-row>
     <v-col class="col-md-6 col-sm-12 col-4">
         <v-div
      v-for="user in users"
      :key="user.name"
      :item-height="50"
      height="300"
    >
      <template>
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar
              color="blue"
              size="56"
              class="white--text"
            >
              {{ user.typeDoc }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              depressed
              small
            >
              Ver Usuario

              <v-icon
                color="orange darken-4"
                right
              >
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-div>
     </v-col>
 </v-row>
  </v-card>
</template>

<script>

import { getAllUsers } from "../../services/UsersService"; //trae los datos desde la BD

export default {
  data: () => ({
      users: [],
    }),

  mounted() {//este mounted trae los datos de cada usuario desde una base de datos en mongo
    getAllUsers()
      .then((response) => {
        this.users = response.data;
      })
      .catch((err) => console.error(err));
  },
  methods: {
      genRandomIndex (length) {
        return Math.ceil(Math.random() * (length - 1))
      },
  },
}
</script>