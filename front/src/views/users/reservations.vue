<template>
<v-container>
  <div>
    <v-data-table
      :headers="headers"
      :items="paquetesCli"
      item-key="_id"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Buscar (Solo en minusculas)"
          class="mx-4"
        ></v-text-field>
      </template>

      <!-- para formatear el campo totalPago a formato de moneda  -->
      <template v-slot:[`item.totalPago`]="{ item }">
         {{ formatMoney(item.totalPago) }}
      </template>
      
      <!-- para formatear el campo FECHA SALIDA a formato de Fecha  -->
      <template v-slot:[`item.idPaq.dateIPaq`]="{ item }">
         {{ formatDate(item.idPaq.dateIPaq) }}
      </template>

      <!-- para formatear el campo FECHA FIN a formato de Fecha  -->
      <template v-slot:[`item.idPaq.dateFPaq`]="{ item }">
         {{ formatDate(item.idPaq.dateFPaq) }}
      </template>
    </v-data-table>
  </div>
  
<br><br><br>
</v-container>

</template>


<script>

  import { findReservationsId } from "../../services/ReservationService";
 
  export default {
    //Props: se recibe el 'id' que se manda por la url con el # identificacion del cliente
    props:["id"],
    data () {
      return {
        search: '',
        calories: '',
        idCliente:'',
        paquetesCli:[],
      
      }
    },
    computed: {
      headers () {

        //Estos son los encabezados de la tabla
        //Text: nombre del caption en la tabla
        //value: los datos que mostrara cada columna.
        return [
          {
            text: 'Nombre paquete',
            align: 'start',
            value: 'idPaq.namePaq',
          },
          { text: 'Fecha Salida', value:  'idPaq.dateIPaq' },
          { text: 'Fecha Regreso', value: 'idPaq.dateFPaq' },
          { text: 'Precio pagado', value:  'totalPago' },
          { text: 'Estado', value: 'Estado' },
        ]
      },
    },

    mounted(){

      this.idCliente= this.id;
      this.reservationsById();
    },

    methods: {
      filterOnlyCapsText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleLowerCase().indexOf(search) !== -1
      },

      reservationsById(){
        findReservationsId(this.idCliente).then((response) => {
          const data  = response.data;
          this.paquetesCli = data;
        })
        .catch((err) => {
            console.log(err.message);
          }
        );
      },

      formatMoney(value) {
        const currency =  new Intl.NumberFormat('en-US', {style: 'currency', currency: 'COP', minimumFractionDigits: 2}).format(value);
        return  currency;
      },

      formatDate(value) {
        const currency =  new Date(value);
        const date = currency.toLocaleString();
        return  date;
      }
      
    },
  }
</script>