<template>
<v-container class="contTable">
<v-card>
<v-card-title>
      Reservas Actuales
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
    :items="reservas"
    :search="search"
    sort-by="fechaPago"
    class="elevation-1 myTable"
  >
  <!--poner color a los item segun estado-->
    <template v-slot:item.Estado="{ item }" >
      <v-chip
        v-if="item.Estado == 'Pendiente'"
        color="warning"
        dark
      >
        {{ item.Estado}}
      </v-chip>
      <v-chip
        v-else
        color="green"
        dark
      >
        {{ item.Estado }}
      </v-chip>
    </template>
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Información General</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <template id="actionbtns">
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
            <v-card-title class="text-h5"><br> ¿Seguro desea borrar la reserva #{{editedItem._id}}, asociada al doc. #: {{editedItem.idCliente}}?</v-card-title>
            <v-card-subtitle> <br> El paquete se borrará definitivamente...</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialogDelete=false">Cancelar</v-btn>
              <v-btn color="red darken-1" text @click="borrarReserva()">Borrar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogVerRes" max-width="700px">
          <v-card>
            <div><!--ver destalles de cada paquete>
            <ver-paq :dialog="closedialogVerRes" :paq="paqRoot" :root="root"/-->
          </div>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions=" {item} ">
      <!--v-icon
        color="blue"
        class="mr-2"
        @click="verDetallesRes(item)"
      >
        mdi-eye
      </v-icon>
      <v-icon
        color="green"
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon-->
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
import { getAllRes } from "../services/ReservationService"; //trae los datos desde la BD
import { deleteRes } from "../services/ReservationService";
  export default {
    props:["dialogResF"],
    components: {
    },
    data: () => ({
      fechaPago:"",
      root:"ReservsInfo",
      dialogVerRes:false,
      dialog: false,
      dialogDelete: false,
      search: '',
      reservas:[],
      paqRoot:[],
      idPaqRoot: 0,
      namePaqRoot: "",
      headers: [
            {
                text: 'Id de Reserva',
                align: 'start',
                sortable: false,
                value: '_id',
            },
            { text: 'Id Cliente', value: 'idCliente' },
            { text: 'Paquete', value: 'idPaq.namePaq' },
            { text: 'Cod. Paquete', value: 'idPaq.idPaq' },
            { text: 'Fecha Salida', value: 'fechaPago' },
            { text: 'Estado', value: 'Estado' },
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
    getAllRes()
      .then((response) => {
        this.reservas = response.data; //llena el array "reservas" con los datos de la bd
        this.fechaPago = this.reservas.fechaPago.substring(0, 10);
        /*this.paqsDcto = this.reservas.filter((paq) => paq.dcto > 0); //filtra los reservas que tienen descuento para ubicarlos en reservas promocionales
        this.paqs = this.reservas.filter((paq) => paq.dcto == null ||paq.dcto == 0); //filtra los reservas que NO tienen descuento para ubicarlos en reservas TURISTICOS
      */})
      .catch((err) => console.error(err));
  },

methods: {
    /*
    
    editItem (idCliente) {
        this.editedIndex = this.reservas.indexOf(idCliente)
        this.editedItem = Object.assign({}, idCliente)
        this.dialog = true
        this.idPaqRoot = this.editedItem.idCliente
        this.namePaqRoot = this.editedItem._id
        this.paqRoot = this.editedItem
    },
    */
    deleteItem (item) {
        //this.editedIndex = this.reservas.indexOf(idCliente)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
    },
    
    borrarReserva () {
        console.log(this.editedItem._id)
        deleteRes(this.editedItem._id)
        .then(() => { 
            this.reservas = this.reservas.filter((item) => item._id != this.editedItem._id);
            console.log(this.reservas)
      })
      .catch((err) => { console.log(err)})  
    this.closeDelete()
    },

    close () {
        this.dialog = false
        this.actualizarPage()
    },

    actualizarPage(){
        getAllRes()
        .then((response) => {
          this.reservas = response.data; //llena el array "reservas" con los datos de la bd
          })
        .catch((err) => console.error(err));
    },

    closeDelete () {
        this.dialogDelete = false
    },
    verDetallesRes(item){
        this.dialogVerRes = true
        this.paqRoot=item
    },
    closeDialogVerRes(){
      this.dialogVerRes=false
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