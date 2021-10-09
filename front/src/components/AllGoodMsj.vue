<template>
  <v-snackbar v-model="snackbar" :multi-line="multiLine" timeout=10000>
    {{ message }}

    <template>
      <v-btn color="red" text @click="close()">
        Cerrar
      </v-btn>
      <v-btn v-if="root != 'EditUser' && root != 'UserRegister'" color="red" text v-bind="attrs" @click="IrInicio()">
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