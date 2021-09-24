<template>
  <v-card max-width="auto" class="mx-auto">

    <v-container>
      
          <v-card dark>
            <div >
                <v-img :src="paq.imagePaq">
              <div>
                <v-card-title
                  class="text-h2 font-italic "
                >No dejes pasar esta oportunidad</v-card-title>

                <v-card-subtitle class="text-h3 font-italic text-decoration-overline"  v-text="paq.namePaq"></v-card-subtitle>

                <v-card-actions>

                  <v-btn class="ml-2 mt-5" outlined rounded >
                    LO QUIERO
                  </v-btn>
                </v-card-actions>
              </div>

              
                
              </v-img>
            </div>
          </v-card>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    paq : [],
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
     
        this.paq = listPaqs[3];
    },
  },
};
</script>