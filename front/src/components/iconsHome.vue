<template>
  <v-container>
    <v-row id="v-row-icons" justify="space-around">
      <div id="divIcon1" justify="space-around">
        <v-btn class="ma-2" outlined large fab color="indigo">
          <v-icon large color="blue darken-2"> mdi-bed </v-icon>
        </v-btn>
        <p>LOS MEJORES HOTELES</p>
      </div>
      <div id="divIcon2">
        <v-btn class="ma-2" outlined large fab color="indigo">
          <v-icon large color="blue darken-2"> mdi-bus </v-icon>
        </v-btn>
        <p>TRANSPORTE VIP</p>
      </div>
      <div id="divIcon3">
        <v-btn class="ma-2" outlined large fab color="indigo">
          <v-icon large color="blue darken-2"> mdi-calendar-check </v-icon>
        </v-btn>
        <p>SERVICIO TODO EL AÑO</p>
      </div>
      <div id="divIcon4">
        <v-btn class="ma-2" outlined large fab color="indigo">
          <v-icon large color="blue darken-2"> mdi-currency-usd </v-icon>
        </v-btn>
        <p>TODO AL MEJOR PRECIO</p>
      </div>
    </v-row>
  </v-container>
</template>

<style>
#divIcon1,
#divIcon2,
#divIcon3,
#divIcon4 {
  text-align: center;
  font-family: 'Exo', sans-serif;
  color:rgb(240, 128, 128);
}
</style>