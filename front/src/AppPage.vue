<template>
  <v-app id="inspire">

    <naviga-component>   </naviga-component> 
    
    
    <v-main>
      
      <router-view>   </router-view>
      <v-container style="height: 80px;"></v-container>
    </v-main>

  </v-app>
</template>

<script>

import NavigaComponent from './AppPageNavBar.vue'
const hasEnter= null; //varaible global

  export default {
    hasEnter,
    data: () => ({ 
      drawer: null,
      value: 'home' // Donde quiero que inicie pintado el selector del menu v-bottom-navigation
     }),

    components:{
      NavigaComponent
    }
     
  }
</script> 