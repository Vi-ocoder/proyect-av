<template>
  <v-container>
    <v-card max-width="auto" class="mx-auto" shaped elevation="9" >
      <v-img :src="paq.imagePaq" class="white--text align-end" height="350px">
        <v-card-title class="text-h3 font-italic"
          >No dejes pasar esta oportunidad</v-card-title>
        <br />
        <v-card-subtitle
          class="text-h4 font-italic text-decoration-overline"
          v-text="paq.namePaq"
        ></v-card-subtitle>

        <v-card-actions>
          <v-btn class="ml-2 mt-5" rounded to="/ReservarPaq"> LO QUIERO </v-btn>
        </v-card-actions>
      </v-img>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    paq: [],
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        Promo: "No dejes pasar esta oportinidad",
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
  mounted() {
    this.updateList();
  },
  methods: {
    updateList() {
      console.log("updateList");
      let listPaqs = JSON.parse(localStorage.getItem("listPaqs"));

      this.paq = listPaqs[5];//esto se debe selecionar desde el home
    },
  },
};
</script>
<style>
</style>