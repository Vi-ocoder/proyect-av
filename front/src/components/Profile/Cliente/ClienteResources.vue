<template>
  <v-card max-width="100%" class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col cols="6">
          <v-card color="#385F73" dark heigth="20">
              <h2>¿QUE LUGAR QUIERES CONOCER?</h2>
            <carrusel :root="root" />
          </v-card>
        </v-col>
        <v-col cols="6">
        <v-col cols="12">
          <v-card color="#1F7087" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                 
                > Mis Reservas</v-card-title>

                <v-card-subtitle></v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ml-2 mt-5" outlined rounded small>
                    VER
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img src="item.src"></v-img><!--no esta en uso por ahora-->
              </v-avatar>
            </div>
            
          </v-card>
        </v-col>
        </v-col>
      </v-row>
      <br>
      <br>
      
      <h3>Que nada se te olvide...</h3>  
    </v-container>
    <calendario />
  </v-card>
</template>
<script>
import Carrusel from "../../CarruselPaqs.vue";
import Calendario from '../Calendario.vue';

export default {
  components: {
    Carrusel,
    Calendario,
  },
  data: () => ({
    root:"ClienteResources",
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>
