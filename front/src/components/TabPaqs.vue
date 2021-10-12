<template>
<v-container class="contTable">
<v-card>
<v-card-title>
      Paquetes Actuales
      {{temporaly}}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

  <v-data-table
    :headers="headers"
    :items="paquetes"
    :search="search"
    sort-by="idPaq"
    class="elevation-1 myTable"
  >
  <!--poner color a los item segun tenga o no dcto-->
    <template v-slot:item.idPaq="{ item }" >
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
        <template id="actionbtns">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              to="/crear-paquete"
            >
              Nuevo Paquete
            </v-btn>
            <v-btn
              color="secundary"
              dark
              class="mb-2"
              to="/infoUsers"
            >
              Ir a usuarios
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
            <edit-paq :idPaqRoot="idPaqRoot" :namePaqRoot="namePaqRoot" :dialog="close" :paqRoot="paqRoot" />
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="700px">
          <v-card>
            <v-card-title class="text-h5"><br> ¿Seguro desea borrar el paquete #{{editedItem.idPaq}}, <br>{{editedItem.namePaq}}?</v-card-title>
            <v-card-subtitle> <br> El paquete se borrará definitivamente..</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialogDelete=false">Cancelar</v-btn>
              <v-btn color="red darken-1" text @click="deleteItemConfirm">Borrar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogVerPaq" max-width="700px">
          <v-card>
            <div><!--ver destalles de cada paquete-->
            <ver-paq :dialog="closeDialogVerPaq" :paq="paqRoot" :root="root"/>
          </div>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions=" {item} ">
      <v-icon
        color="blue"
        class="mr-2"
        @click="verDetallesPaq(item)"
      >
        mdi-eye
      </v-icon>
      <v-icon
        color="green"
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        color="red"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
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
import EditPaq from './EditPaq.vue';
import VerPaq from './VerDetalles.vue';
  export default {
    components: {
        EditPaq,
        VerPaq,
    },
    data: () => ({
      root:"TabPaqs",
      dialogVerPaq:false,
      dialog: false,
      dialogDelete: false,
      search: '',
      paquetes:[],
      paqRoot:[],
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
        this.paqRoot = this.editedItem
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
        this.actualizarPage()
    },

    actualizarPage(){
        getAllPaqs()
        .then((response) => {
          this.paquetes = response.data; //llena el array "paquetes" con los datos de la bd
          })
        .catch((err) => console.error(err));
    },

    closeDelete () {
        this.dialogDelete = false//no funciona desde calcel del dialogo borrar item, revisar
        //this.$nextTick(() => {
          //this.editedItem = Object.assign({}, this.defaultItem)
          //this.editedIndex = -1
        //})
    },
    verDetallesPaq(item){
        this.dialogVerPaq = true
        this.paqRoot=item
    },
    closeDialogVerPaq(){
      this.dialogVerPaq=false
    },
  },
};
</script>
<style>
.contTable{
  position: relative;
  width: 100%;
  font-family: "Exo2", sans-serif ;
}
</style>