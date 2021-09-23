<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="blue"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="100"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.1), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Aquí el Nombre de la Agencia</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="white"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in itemsBar"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title 
          v-for="item in itemsDrawer"
          :key="item.title"
          :to="item.to"
          >
          <v-tab>{{ item.title }}</v-tab>
          
        </v-tabs>
      </template>
    </v-app-bar>

    
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in itemsDrawer"
          :key="item.title"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn class = "primary" block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 250px;">
        
      </v-container>
      <router-view />
    </v-sheet>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      itemsBar: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      itemsDrawer: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' , to: "/views/CrearPaquete" },
          { title: 'Account', icon: 'mdi-account-box' , to: "/ab"  },
          { title: 'Admin', icon: 'mdi-gavel' , to: "/pruebas" },
          { title: 'CreatePaq', icon: 'mdi-star', to: "/crear-paquete" },
          { title: 'Paqs', icon: 'mdi-tag-heart-outline', to: "/paqs" },
          { title: 'Ver Paq', icon: 'mdi-info', to: "/infoPaq" },
        ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>