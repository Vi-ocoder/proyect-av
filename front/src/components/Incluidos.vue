<template>
  <v-container>
    <v-row>
      <v-col>
        <v-treeview
          v-model="selection"
          :selectable="isSelectable"
          selected-color="red"
          :items="items"
          return-object
        ></v-treeview>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="pa-6" cols="6">
        <template v-if="!selection.length"> Seleccione un beneficio </template>
        
        <template v-else>
          <div v-for="node in selection" :key="node.id">
            <v-row><v-col cols="6" md="1"><v-icon>{{node.icon}}</v-icon> </v-col><v-col cols="6">{{ node.name }}</v-col> </v-row>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    props:[],
  data: () => ({
    isSelectable: true,
    selection:[],
    items: [
        {
          id: 1,
          name: "Tiquetes",
          children: [
            { id: 1.1, name: "Tiquete Ida", icon:"mdi-airplane-takeoff" },
            { id: 1.2, name: "Tiquete Regreso", icon:"mdi-airplane-landing"},
          ],
        },
        {
          id: 2,
          name: "Alimentación",
          children: [
            { id: 2.1, name: "Desayuno", icon: "mdi-coffee" },
            { id: 2.2, name: "Almuerzo", icon:"mdi-pasta" },
            { id: 2.3, name: "Cena", icon:"mdi-silverware" },
          ],
        },
        {
          id: 4,
          name: "Seguro y/o Tour",
          children: [
            { id: 4.1, name: "Seguro" , icon:"mdi-shield-lock"},
            { id: 4.2, name: "Tour", icon:"mdi-map-marker-path" },
          ],
        },
        {
          id: 3,
          name: "N° Personas",
          children: [
            { id: "a", name: "Una Persona", icon:"mdi-human-male" },
            { id: "b", name: "Dos Personas", icon:"mdi-human-male-female" },
            { id: "c", name: "Hasta Cuatro personas",icon:"mdi-human-male-female-child" },
          ],
        },
      ],
  }),
  watch: {
    selection(){
      this.$emit("arrayInIncluidos",this.selection);
    }
  },
  methods:{
  },
};
</script>