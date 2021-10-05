<template>
<v-container>
<v-card>
<v-card-title>
      Paquetes Actuales
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

  <v-data-table
    :headers="headers"
    :items="paquetes"
    :search="search"
    sort-by="idPaq"
    class="elevation-1"
  >
  <!--poner color a los item segun tenga o no dcto-->
    <template v-slot:item.idPaq="{ item }">
      <v-chip
        v-if="item.dcto == 0 || item.dcto == null"
        color="blue"
        dark
      >
        {{ item.idPaq }}
      </v-chip>
      <v-chip
        v-if="item.dcto > 0 "
        color="green"
        dark
      >
        {{ item.idPaq }}
      </v-chip>
    </template>
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Directorio General</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <template >
            <v-btn
              color="primary"
              dark
              class="mb-2"
              @click="dialog=true"
            >
              Nuevo Paquete
            </v-btn>
          </template>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="800px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }} # {{idPaqRoot}}</span>
            </v-card-title>
            <create-paq :idPaqRoot="idPaqRoot" :namePaqRoot="namePaqRoot" :dialog="close"/>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="700px">
          <v-card>
            <v-card-title class="text-h5"><br> ¿Seguro desea borrar el paquete #{{editedItem.idPaq}}, <br>{{editedItem.namePaq}}?</v-card-title>
            <v-card-subtitle> <br> El paquete se borrará definitivamente..</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="red darken-1" text @click="deleteItemConfirm">Borrar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
  </v-data-table>
</v-card>
<v-card>
    <br>
    <br>
</v-card>
</v-container>
</template>


<script>
import { getAllPaqs } from "../services/PaqsService"; //trae los datos desde la BD
import { deletePaq } from "../services/PaqsService";
import createPaq from "../views/webPage/createPaq.vue";
  export default {
    components: {
    createPaq,
    },
    data: () => ({
      dialog: false,
      dialogDelete: false,
      search: '',
      paquetes:[],
      idPaqRoot: 0,
      namePaqRoot: "",
      headers: [
            {
                text: 'Nombre del Paquete',
                align: 'start',
                sortable: false,
                value: 'namePaq',
            },
            { text: 'Código', value: 'idPaq' },
            { text: 'Hotel', value: 'hotelPaq' },
            { text: 'Precio ($ COP)', value: 'valuePaq' },
            { text: 'Dcto (%)', value: 'dcto' },
            { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        namePaq: '',
        idPaq: 0,
        hotelPaq: 0,
        valuePaq: 0,
        dcto: 0,
      },
      defaultItem: {
        namePaq: '',
        idPaq: 0,
        hotelPaq: 0,
        valuePaq: 0,
        dcto: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Paq' : 'Editar Paquete'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },


    mounted() {//este mounted trae los datos de cada paquete desde una base de datos en mongo
    getAllPaqs()
      .then((response) => {
        this.paquetes = response.data; //llena el array "paquetes" con los datos de la bd

        /*this.paqsDcto = this.paquetes.filter((paq) => paq.dcto > 0); //filtra los paquetes que tienen descuento para ubicarlos en paquetes promocionales
        this.paqs = this.paquetes.filter((paq) => paq.dcto == null ||paq.dcto == 0); //filtra los paquetes que NO tienen descuento para ubicarlos en paquetes TURISTICOS
      */})
      .catch((err) => console.error(err));
  },

methods: {
    eliminarPaq(idPaq){
      deletePaq(idPaq)
      .then(() => { 
        console.log("Exito");
        this.paquetes = this.paquetes.filter((item) => item.idPaq != idPaq);
      })
      .catch(() => { console.log("Error")})  
    }, 
  
      editItem (idPaq) {
        this.editedIndex = this.paquetes.indexOf(idPaq)
        this.editedItem = Object.assign({}, idPaq)
        this.dialog = true
        this.idPaqRoot = this.editedItem.idPaq
        this.namePaqRoot = this.editedItem.namePaq
      },

      deleteItem (idPaq) {
        this.editedIndex = this.paquetes.indexOf(idPaq)
        this.editedItem = Object.assign({}, idPaq)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        const idPaqBorrar = this.editedItem.idPaq
        this.eliminarPaq(idPaqBorrar)
        this.closeDelete()
      },

      close () {
        this.dialog = false
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
}
    }
</script>