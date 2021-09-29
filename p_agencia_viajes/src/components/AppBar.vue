<template>
  <v-toolbar
    id="toolbar"
    absolute
    flat
    color="rgba(240,128,128,.5)"
    width="100%"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Agencia de Viajes COLOMviajeros</v-toolbar-title>
    
    <v-breadcrumbs id="links" :items="items" divider= "-" large>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon href="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "INICIO",
        disabled: false,
        href: "./",
      },
      {
        text: "VER PAQUETES",
        disabled: false,
        href: "/paqs",
      },
      {
        text: "INICIAR SESION",
        disabled: false,
        href: "IniciarSesion",
      },
    ],
  }),
};
</script>

<style>
#toolbar {
  font-family: "Exo", sans-serif;
};

#links{
  text-decoration-color: white !important;
}

</style>