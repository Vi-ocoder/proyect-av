<template>
  <v-hover v-slot="{ hover }">
    <v-card  class="mx-auto" max-width="auto" flat>
      <v-row>
        <v-col>
          <v-card id="cardPaq" flat>
        <v-img class="white--text align-end" height="200px" :src="paq.imagePaq">
          <v-card v-if="!hover" id="vcardValueInImg"
            >${{ paq.valuePaq }}
          </v-card>
          <v-card v-if="hover" id="vcardValueInImgH"
            >${{ paq.valuePaq }}
          </v-card>
          <v-card-title id="v-card-title-outhover" v-if="!hover">{{
            paq.hotelPaq
          }}</v-card-title>
          <v-card-title id="v-card-title-hover" v-if="hover">{{
            paq.hotelPaq
          }}</v-card-title>
        </v-img>
        </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <!--aqui empiezan los datos debajo de la imagen-->
        <v-col cols="auto">
          <v-row>
            <v-dialog transition="dialog-bottom-transition" max-width="90%">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="lookDetails" text color="primary" v-bind="attrs" v-on="on"
                  >VER DETALLES
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="primary" dark
                    >Id 00 -
                    {{ paq.idPaq }}
                  </v-toolbar>
                  <v-card-text>
                    <ver-detalles :paq="paq" v-on:update="updateList()" />
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-row>
          <v-row>
            <v-dialog transition="dialog-top-transition" max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn disabled text color="red" v-bind="attrs" v-on="on"
                  >ELIMINAR</v-btn
                >
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="red" dark>Borrar:_<p id="paqNameBorrar"> {{paq.namePaq}}</p></v-toolbar>
                  <v-card-text>
                    <div class="text-h6 pa-12">
                      Está seguro que desea eliminar este paquete? <br> La
                      información se borrará definitivamente de la base de datos.
                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn color="red" dark @click="deletePaq(paq.idPaq)">
                      Delete
                    </v-btn>
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-row>
        </v-col>
        <v-col>
          <div v-if="!hover">
            <p id="pUbicacion">
              <v-icon small>mdi-map-marker-outline</v-icon>
              {{ paq.cityPaq }}, {{ paq.depPaq }}
            </p>
            <p id="pHotel">
              {{ paq.namePaq }}
            </p>
          </div>
          <div v-if="hover">
            <p id="pUbicacionH">
              <v-icon color="rgba(255, 127, 80, 0.918)">
                mdi-map-marker-outline
              </v-icon>
              {{ paq.cityPaq }}, {{ paq.depPaq }}
            </p>
            <p id="pHotelH">
              {{ paq.namePaq }}
            </p>
          </div>

          <v-card-actions>
            <!--<v-btn id="lookButtom" color="primary" @click="dialog = false"> VER DETALLES</v-btn>
        <v-btn color="red" dark @click="deletePaq(paq.idPaq)"> Delete </v-btn>-->
          </v-card-actions>
        </v-col>
        <!--ESTE ES EL DIALOG-->
      </v-row>
      <br />
    </v-card>
  </v-hover>
</template>

<script>
export default {
  components: {
    VerDetalles: () => import("./VerDetalles"),
  },
  data: () => ({ loading: false }),
  dialog: false,
  props: ["paq"],
  methods: {
    editPaq(idPaq) {
      console.log("editar", idPaq);
    },
    deletePaq(idPaq) {
      let listPaqs = JSON.parse(localStorage.getItem("listPaqs"));
      if (listPaqs == undefined) {
        console.error("La lista no contiene el usuario con idPaq: " + idPaq);
        return;
      }
      listPaqs = listPaqs.filter((paq) => paq.idPaq != idPaq);
      localStorage.setItem("listPaqs", JSON.stringify(listPaqs));
      this.$emit("update");
    },
  },
};
</script>

<style>
#cardPaq {
  border-radius: 3px;
}
#lookButtom {
  border-radius: 10px;
  width: 100%;
}

#vcardValueInImg {
  position: absolute;
  top: 5px;
  right: 0;
  margin: 10px;
  border-radius: 15px 5px 5px 15px;
  color: white;
  background-color: rgba(255, 127, 80, 0.808);
  padding: 5px 10px;
  font-weight: 600;
}
#vcardValueInImgH {
  position: absolute;
  top: 5px;
  right: 0;
  margin: 10px;
  border-radius: 5px 5px 5px 5px;
  color: rgba(255, 127, 80, 1);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px 10px;
  font-weight: 600;
  font-size: 1.5vw;
  text-shadow: 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.74);
}

#v-card-title-hover {
  font-weight: bolder;
  font-family: "Exo", sans-serif;
  font-size: 2vw;
  color: cornflowerblue;
  background-color: rgba(255, 255, 255, 0.226);
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.74);
}
#v-card-title-outhover {
  font-size: auto;
  color: white;
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.74);
}
#pUbicacion {
  font-size: 100%;
  text-align: end;
  padding-right: 4px;
  margin-top: -14px;
  color: rgba(255, 127, 80, 0.918);
}
#pUbicacionH {
  font-size: 110%;
  text-align: end;
  margin-top: -14px;
  color: rgba(255, 127, 80, 0.918);
}
#pHotel {
  font-size: 100%;
  text-align: end;
  padding-right: 4px;
  margin-top: -10px;
  color: cornflowerblue;
}
#pHotelH {
  font-size: 100%;
  text-align: end;
  padding-right: 4px;
  margin-top: -10px;
  color: cornflowerblue;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2);
}
#paqNameBorrar{
  padding-top: 17px;
  font-weight: bolder;
  font-family: "Exo", sans-serif;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2);
}
.lookDetails{
  font-family: "Exo2", sans-serif;
  padding-left: 40px;
  padding-right: 40px;
}
</style>