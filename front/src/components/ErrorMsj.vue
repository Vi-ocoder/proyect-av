
<template>
  <v-snackbar v-model="snackbar" :multi-line="multiLine" timeout=10000>
    {{ message }}
    <template >
      
      <v-btn v-if="message == 'No hay N° de documento o este ya esta en uso.'" color="red" text  @click="corregir()">
        CORREGIR
      </v-btn>
      <v-btn color="red" text  @click="close()">
        CERRAR
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ["message", "snackbar", "close", "corregir"],
  data: () => ({
    multiLine: true,
  }),
};
</script>