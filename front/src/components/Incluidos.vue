<template>
  <v-container>
    <v-row>
      <v-col>
        <v-treeview
          v-model="selection"
          selectable
          selected-color="red"
          :items="items"
          return-object
        ></v-treeview>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="pa-6" cols="6">
        <template v-if="!selection.length"> No nodes selected. </template>
        <template v-else>
          <div v-for="node in selection" :key="node.id">
            {{ node.name }}
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selection: [],
    items: [
      {
        id: 1,
        name: "Tiquetes",
        children: [
          { id: 1.1, name: "Tiquete Ida" },
          { id: 1.2, name: "Tiquete Regreso" },
        ],
      },
      {
        id: 2,
        name: "Alimentación",
        children: [
          { id: 2.1, name: "Desayuno" },
          { id: 2.2, name: "Almuerzo" },
          { id: 2.3, name: "Cena" },
        ],
      },
      {
        id: 3,
        name: "N° Personas",
        children: [
          { id: 3.1, name: "Una Persona" },
          { id: 3.2, name: "Una persona + Un Acompañante" },
          { id: 3.3, name: "Cuatro personas" },
        ],
      },
      {
        id: 4,
        name: "Seguro y/o Tour",
        children: [
          { id: 4.1, name: "Seguro" },
          { id: 3.2, name: "Tour" },
        ],
      },
    ],
  }),
};
</script>