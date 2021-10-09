
<template>
  <v-snackbar v-model="snackbar" :multi-line="multiLine" timeout=10000>
    {{ message }}
    <template >
      
      <v-btn  color="warning" text  @click="ok(dato)">
        ACEPTAR
      </v-btn>
      <v-btn color="red" text  @click="close()">
        CERRAR
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ["message", "snackbar", "close", "ok", "dato"],
  data: () => ({
    multiLine: true,
  }),
};
</script>