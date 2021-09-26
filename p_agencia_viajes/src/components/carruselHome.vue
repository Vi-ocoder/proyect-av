<template>
  <v-container>
    <v-row>
      <v-col lg="6" sm="12">
        <div class="text-center" id="divCarrusel1">
          <v-carousel :cycle="true">
            <v-carousel-item id="car-item" width="100%" v-for="paq in paqs" :key="paq">
              <infoPaq :paq="paq" v-on:update="updateList()" />
            </v-carousel-item>
          </v-carousel>
          <div class="text-center">
            <v-btn x-large color="success" dark width="100%" href="/paqs"> VER TODO </v-btn>
          </div>
        </div>
      </v-col>
      <v-col lg="6" sm="12">
        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import infoPaq from "../components/infoPaq.vue";
export default {
  components: {
    infoPaq,
  },
  data() {
    return {
      paqs: [],
      items: [
        {
          src: "https://picsum.photos/1920/1080?random",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  mounted() {
    this.updateList();
  },
  methods: {
    updateList() {
      let listPaqs = JSON.parse(localStorage.getItem("listPaqs"));
      if (listPaqs != undefined) {
        this.paqs = listPaqs;
      }
    },
  },
};
</script>
<style>
#divCarrusel1 {
  margin: 0px;
}

</style>