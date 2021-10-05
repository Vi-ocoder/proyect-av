<template>
  <v-app id="inspire">
      
    <v-main>
      <!-- contenido principal  -->
      <v-container>
        
        <div class="row">
          <div class="col-md-12 text-center">
            <h1> Paquetes turisticos </h1>
            <p> Destinos para viajar por el pais </p>
          </div>
         
          <div class="col-md-3 col-sm-6 col-6">
            <v-img class="rounded" height="320" width="255" src="../../../public/images/pagina/cundinamarca.jpg">
              <div absolute class="pa-5 pt white--text font-weight-bold"> <h2> Cundinamarca </h2> </div> 
            </v-img>
          </div>

          <div class="col-md-3 col-sm-6 col-6">
            <v-img class="rounded" height="320" width="255" src="../../../public/images/pagina/antioquia.jpg"> 
              <div absolute class="pa-5 pt white--text font-weight-bold"> <h2> Antioquia </h2> </div>  
          </v-img>
          </div>
        
          <div class="col-md-3 col-sm-6 col-6">
            <v-img class="rounded" height="320" width="255" src="../../../public/images/pagina/valle.jpg"> 
              <div absolute class="pa-5 pt white--text font-weight-bold"> <h2> Valle del cauca </h2> </div> 
            </v-img>
          </div>

          <div class="col-md-3 col-sm-6 col-6">
            <v-img class="rounded" height="320" width="255" src="../../../public/images/pagina/nariño.jpg"> 
              <div absolute class="pa-5 pt white--text font-weight-bold"> <h2> Nariño </h2> </div> 
            </v-img>
          </div>
        </div>

        <!-- paquetes turisticos  -->
        <div class="row">

          <div class="col-md-4 col-sm-6 col-12">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
              </template>
          
              <v-img height="250" src="../../../public/images/paquetes/cartagena.jpg"></v-img>
  
              <v-card-title> Cartagena </v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">        
                  <div class="grey--text">
                    Bolivar
                  </div>
                </v-row>
              </v-card-text>
              <v-card-title>Desde: $ 1.200.000 </v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn  color="blue darken-4" text @click="reserve">  Detalles </v-btn>
                <v-btn  color="green darken-3" text @click="reserve"> Reservar </v-btn>
              </v-card-actions>
            </v-card>
          </div>

          <div class="col-md-4  col-sm-6 col-12">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
              </template>
          
              <v-img height="250" src="../../../public/images/paquetes/jardin.jpg"></v-img>
  
              <v-card-title> Jardin </v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">        
                  <div class="grey--text">
                    Antioquia
                  </div>
                </v-row>
              </v-card-text>
              <v-card-title>Desde: $ 1.200.000 </v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn  color="blue darken-4" text @click="reserve">  Detalles </v-btn>
                <v-btn  color="green darken-3" text @click="reserve"> Reservar </v-btn>
              </v-card-actions>
            </v-card>
          </div>

          <div class="col-md-4 col-sm-6 col-12">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
              </template>
          
              <v-img height="250" src="../../../public/images/paquetes/buga.jpg"></v-img>
  
              <v-card-title> Buga </v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">        
                  <div class="grey--text">
                    Valle del cauca
                  </div>
                </v-row>
              </v-card-text>
              <v-card-title>Desde: $ 1.200.000 </v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn  color="blue darken-4" text @click="reserve">  Detalles </v-btn>
                <v-btn  color="green darken-3" text @click="reserve"> Reservar </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>

        <v-divider class="mx-4 pa-5"></v-divider>

        <!-- paquetes promocionales  -->
        <div class="row">
          <div class="col-md-12 text-center">
            <h1> Paquetes promocionales </h1>
          </div>

          <div class="col-md-4 col-sm-6 col-12">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
              </template>
          
              <v-img height="250" src="../../../public/images/paquetes/cartagena.jpg"></v-img>
  
              <v-card-title> Cartagena  </v-card-title> 
              <v-card-text>
                <v-row align="center" class="mx-0">        
                  <div class="grey--text">
                    Bolivar
                  </div>
                </v-row>
              </v-card-text>
              <v-card-title>
                $  800.000  
                <v-chip class="ms-4" close-icon="mdi-close-outline" color="yellow">
                  <v-icon class="mr-2"> fas fa-tags  </v-icon>
                    25% OFF 
                </v-chip> 
              </v-card-title>
              <v-card-actions>
                <v-btn  color="blue darken-4" text @click="reserve">  Detalles </v-btn>
                <v-btn  color="green darken-3" text @click="reserve"> Reservar </v-btn>
                
              </v-card-actions>
            </v-card>
          </div>

          <div class="col-md-4 col-sm-6 col-12">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
              </template>
          
              <v-img height="250" src="../../../public/images/paquetes/jardin.jpg"></v-img>
  
              <v-card-title> Jardin </v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">        
                  <div class="grey--text">
                    Antioquia
                  </div>
                </v-row>
              </v-card-text>
              <v-card-title>
                $ 800.000 
                <v-chip class="ms-4" close-icon="mdi-close-outline" color="yellow">
                  <v-icon class="mr-2"> fas fa-tags  </v-icon>
                    30% OFF 
                </v-chip> 
              </v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn  color="blue darken-4" text @click="reserve">  Detalles </v-btn>
                <v-btn  color="green darken-3" text @click="reserve"> Reservar </v-btn>
              </v-card-actions>
            </v-card>
          </div>

          <div class="col-md-4 col-sm-6 col-12">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
              </template>
          
              <v-img height="250" src="../../../public/images/paquetes/buga.jpg"></v-img>
  
              <v-card-title> Buga </v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">        
                  <div class="grey--text">
                    Valle del cauca
                  </div>
                </v-row>
              </v-card-text>
              <v-card-title>
                 $ 800.000 
                 <v-chip class="ms-4" close-icon="mdi-close-outline" color="yellow">
                   <v-icon class="mr-2"> fas fa-tags  </v-icon>
                     10% OFF 
                 </v-chip> 

                </v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn  color="blue darken-4" text @click="reserve">  Detalles </v-btn>
                <v-btn  color="green darken-3" text @click="reserve"> Reservar </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div> 
          

        <br><br><br>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      value: 'home', // Donde quiero que inicie pintado el selector del menu v-bottom-navigation
      loading: false,
      selection: 1,
     }),

    methods:{

      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },

    }
  }
</script>