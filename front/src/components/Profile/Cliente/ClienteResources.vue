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
                  <v-btn class="ml-2 mt-5" outlined rounded  @click="dialogMyRes=true">
                    VER mas
                  </v-btn>
                </v-card-actions>
              </div>
            <v-dialog v-model="dialogMyRes">
              <v-card>
                <v-btn @click="dialogMyRes=false" rigth><v-icon>mdi-close</v-icon> cerrar</v-btn>
                <reservations :id="id"/>
              </v-card>
            </v-dialog>
              <!--v-avatar class="ma-3" size="125" tile>
                <v-img src="item.src"></v-img><--no esta en uso por ahora->
              </v-avatar-->
            </div>
          </v-card>
          <reservations :id="id"/>
        </v-col>
        </v-col>
      </v-row>
      <br>  
    </v-container>
  </v-card>
</template>
<script>
import Reservations from '../../../views/users/reservations.vue';
import Carrusel from "../../CarruselPaqs.vue";
export default {
  props:["id"],
  components: {
    Carrusel,
    Reservations,
  },
  data: () => ({
    dialogMyRes:false,
    idCliente:"",
    root:"ClienteResources",
    
  }),
};
</script>
