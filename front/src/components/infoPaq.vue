<template>
  <v-card
    class="mx-auto"
    max-width="auto"
    flat
  >
    <v-img
      v-if="otherRoot=='ClienteResources'"
      :src="paq.imagePaq"
      height="180px"
    ></v-img>
    
    <v-img
      v-else
      :src="paq.imagePaq"
      height="400px"
    ></v-img>
   
      
      <v-card-title text-aling="left" >
        {{paq.namePaq}}
        <v-divider inset ligth></v-divider> • 
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </v-card-title>

      <v-card-text>
        <v-row
        align="center"
        class="mx-0"
      >

      <div class="grey--text ms-1">
          {{paq.cityPaq}} - {{paq.depPaq}}
      </div>
      </v-row>
      <v-row>
      <div class="my-2 grey--text text-subtitle-1 ms-3">
        Ahora desde: 
      </div>
      <div class="my-2 orange--text text-subtitle-1">
        ${{paq.valuePaq}} 
      </div></v-row>
      </v-card-text>
   

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="dialog"
      >
        DETALLES
      </v-btn>
      

      <v-spacer></v-spacer>
      <v-btn 
      text 
      color="primary" 
      href="/travels"
      > 
      VER TODO 
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  export default {
    props:["paq","dialog","otherRoot"],
    data: () => ({
      rating:0,
    }),
    mounted(){
      const rating = parseInt(this.paq.valuePaq.substring(0, 1))+1;
      if (rating > 5) {
        this.rating = 5
      } else {
        this.rating=rating
      }
    },
  };
</script>