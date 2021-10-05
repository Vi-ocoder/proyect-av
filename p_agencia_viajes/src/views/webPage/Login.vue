<template>
    <v-app id="inspire">
  
      
        <div class="row">
        
            <v-img src="../../../public/images/pagina/banner_1.jpg" class="bg-img1 col-12 col-md-12 col-xl-12">
                <v-overlay value="true" absolute>
                    <div class="col-12 col-md-12 col-xl-12">
                        <v-form ref="form" v-model="valid" lazy-validation class="pa-2">
                            <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                            ></v-text-field>
                    
                            <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Contraseña"
                                color="white"
                                counter
                                @click:append="show1 = !show1"
                            ></v-text-field>
                        
                            <v-btn :disabled="!valid" color="success" class="mr-8" @click="validate">
                            Ingresar
                            </v-btn>
                        </v-form>

                        <div class="mt-15 col-8 col-md-8 col-xl-8 row" center>
                            <div class="col-12 col-md-6 col-xl-6">
                                Olvidaste tu contraseña?
                            </div>
                            <div class="col-12 col-md-6 col-xl-6">
                                <v-btn color="white" plain value="user-forgot-password"  to="/user-forgot-password" style="height: inherit; background-color: transparent;">
                                    <span>Recuperar contraseña </span>
                                </v-btn>
                            </div>
                            <div class="col-12 col-md-6 col-xl-6">
                            No tienes una cuenta?
                            </div>
                            <div class="col-12 col-md-6 col-xl-6">
                                <v-btn color="white" plain value="user-register"  to="/user-register" style="height: inherit; background-color: transparent;">
                                    <span>Registrarse</span>
                                </v-btn>
                            </div>
                        </div>
                    </div>

                </v-overlay>
            </v-img>
        </div>
       
    </v-app>
</template>
  
    <style scoped>
        .bg-img1 {
        /* background: url('../../public/images/pagina/banner_1.jpg'); */
        background-size: cover;
        height: 100vh;
        }
    </style>

    <script>
        export default {
        data: () => ({ 
            drawer: null,
            value: 'home', // Donde quiero que inicie pintado el selector del menu v-bottom-navigation
            show1: false,
            password: 'Password',
            rules: {
                // required: value => !!value || 'Required.',
                // min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        }),
        }
    </script>