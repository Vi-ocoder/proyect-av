<template>

<v-main> 
    <v-container  >

        <v-breadcrumbs class="pl-0"> <a @click="goBack">  Volver atras  </a>   </v-breadcrumbs>
        <div class="row pa-5 d-flex justify-center">
            
            <div class="col-md-8 text-center">
                <h1> Recuperar contraseña </h1>
                <p> Ingrese el correo con el que se registro en la pagina. <br>
                    Le enviaremos a este un link para que pueda restablecer su contraseña.  
                </p>
            </div>
            <div class="col-md-8">
                <form>
                    <v-text-field v-model="email" label="E-mail" required
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    ></v-text-field>

                    <br>
                    <v-btn class="mr-4 primary"  @click="submit"> Recuperar </v-btn>
                  </form>
    
            </div>
        </div>
        <br><br><br>
    </v-container>
   
    


</v-main>

</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'


  export default {
    mixins: [validationMixin],

    validations: {
      email: { required, email },
    },

    data: () => ({  
      email: '',
    }),

    computed: {
        //Condicionales aplicadas a los campos del formulario
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Debe ingresar un correo valido.')
        !this.$v.email.required && errors.push('E-mail es requerido.')
        return errors
      },
    },

    methods: {
        submit () {
            this.$v.$touch()
        },
        goBack(){
            return this.$router.go(-1);
        },
    },
  }
</script>