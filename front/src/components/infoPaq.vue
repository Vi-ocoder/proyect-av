<template>
  <v-card
    class="mx-auto"
    max-width="auto"
    flat
  >
    <v-img
      v-if="otherRoot=='ClienteResources'"
      :src="paq.imagePaq"
      height="200px"
    ></v-img>
    
    <v-img
      v-else
      :src="paq.imagePaq"
      height="400px"
    ></v-img>

    <v-card-title text-aling="left">
      {{paq.namePaq}}
    </v-card-title>

    <v-card-subtitle>
     {{paq.cityPaq}} - {{paq.depPaq}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="dialog"
      >
        DETALLES
      </v-btn>
      <v-btn 
      text 
      color="primary" 
      href="/travels"
      > 
      VER TODO 
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : '$' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Desde ${{paq.valuePaq}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    props:["paq","dialog","otherRoot"],
    data: () => ({
      show: false,
    }),
  }
</script>