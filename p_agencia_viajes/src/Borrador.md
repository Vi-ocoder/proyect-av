<template>
  <v-app id="inspire">
    <v-card class="overflow-hidden">
      <v-app-bar
        app
        absolute
        color="#43a047"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-5"
        scroll-threshold="500"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>

        <v-spacer></v-spacer>
        <!--Iconos de la derecha-->
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="yellow" v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!--#002 ESTO ES UN DRAWER-->
      
      <!--#001 esto es como una caja-->
      <v-sheet
        id="scrolling-techniques-5"
        class="overflow-y-auto"
        max-height="600"
      >
      <v-card class="mx-left overflow-hidden" height="400" width="350">
        <v-navigation-drawer
          v-model="drawer"
          app
          absolute
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
          width="100%"
          
        >
          <v-list>
            <v-list-item v-for="([icon, text], i) in itemsDrawer" :key="i" link>
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
        <v-container style="height: 1500px">
          <v-main>
            <!--  -->
            <router-view />
          </v-main>
        </v-container>
      </v-sheet>
      
    </v-card>
    
  </v-app>
  
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    itemsDrawer: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Clock-in"],
    ],
  }),
};
</script>
