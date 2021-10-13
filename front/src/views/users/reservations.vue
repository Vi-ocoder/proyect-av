<template>
<v-container>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
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
      <template>
        <tr>
          <td></td>
          <td>
            <v-text-field
              v-model="calories"
              type="number"
              label="Less than"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template>
    </v-data-table>
  </div>

</v-container>
</template>


<script>
  export default {
    data () {
      return {
        search: '',
        calories: '',
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
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
            value: 'name',
          },
          { text: 'Fecha Salida', value: 'calories' },
          { text: 'Fecha Regreso', value: 'fat' },
          { text: 'Precio pagado', value: 'carbs' },
          { text: 'Estado', value: 'protein' },
        ]
      },
    },
    methods: {
      filterOnlyCapsText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleLowerCase().indexOf(search) !== -1
      },
    },
  }
</script>