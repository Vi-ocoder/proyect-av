<template>
  <v-snackbar v-model="snackbar" :multi-line="multiLine">
    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="close()">
        Cerrar
      </v-btn>
      <v-btn v-if="root != 'EditUser'" color="red" text v-bind="attrs" @click="IrInicio()">
        Ir a Paquetes
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ["message", "snackbar", "close", "IrInicio", "root"],
  data: () => ({
    multiLine: true,
  }),
};
</script>