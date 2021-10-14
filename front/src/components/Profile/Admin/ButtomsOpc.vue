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

    <v-btn>
      <span>Book</span>

      <v-icon>mdi-book</v-icon>
    </v-btn>

    <v-btn>
      <span>Image</span>

      <v-icon>mdi-image</v-icon>
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
  </v-bottom-navigation>
  
</template>
<script>
import InfoUsers from '../../InfoUsers.vue'
import TabPaqs from '../../TabPaqs.vue'
  export default {
  components: { InfoUsers,TabPaqs },
    data: () => ({ 
        dialogPaqs:false,
        dialogUsers:false,
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
  }
</script>
<style>
.flotante{
    position: fixed;
    top: 70px;
    right: 50px;
}
</style>