<template>

<v-main> 
    <v-container  >

        <v-breadcrumbs class="pl-0"> <a @click="goBack">  Volver atras  </a>   </v-breadcrumbs>
        <div class="row pa-5 d-flex justify-center">
            
            <div class="col-md-8 text-center">
                <h1> Formulario de registro</h1>
                <p> Ingrese toda la informacion solicitada para completar su registro. </p>
            </div>
            <div class="col-md-8">
                <form>
                    <h2> Datos personales </h2>
                    <v-divider></v-divider>
                    <br>

                    <!-- campos de identificacion personal de usuario  -->
                    <v-select v-model="select1" label="Tipo de Identificacion" required
                      :items="tID"
                      :error-messages="select1Errors"
                      @change="$v.select1.$touch()"
                      @blur="$v.select1.$touch()"
                    ></v-select>
                    <v-text-field v-model="numberID" label="Numero de identificacion" required type="number"
                     :error-messages="numberIDErrors"
                     :counter="30"
                     @input="$v.numberID.$touch()"
                     @blur="$v.numberID.$touch()"
                    ></v-text-field>

                    <!-- nombres completos  -->
                    <v-text-field v-model="Firstname" label="Nombres" required
                      :error-messages="FirstNameErrors"
                      :counter="30"
                      @input="$v.Firstname.$touch()"
                      @blur="$v.Firstname.$touch()"
                    ></v-text-field>

                    <!-- apellidos completos  -->
                    <v-text-field v-model="LastName" label="Apellidos" required
                     :error-messages="LastNameErrors"
                     :counter="30"
                     @input="$v.LastName.$touch()"
                     @blur="$v.LastName.$touch()"
                    ></v-text-field>

                    <!-- celular de la persona  -->
                    <v-text-field v-model="phone" label="Numero de Teléfono" required type="number"
                     :error-messages="numberIDErrors"
                     :counter="10"
                     @input="$v.phone.$touch()"
                     @blur="$v.phone.$touch()"
                    ></v-text-field>

                    <!-- genero de la persona  -->
                    <v-select v-model="select2" label="Genero" required
                      :items="items"
                      :error-messages="select2Errors"
                      @change="$v.select2.$touch()"
                      @blur="$v.select2.$touch()"
                    ></v-select>
                    
                    <!-- fecha nacimiento  -->
                    <v-text-field v-model="birthDate" label="Fecha nacimiento" required type="date"
                     :error-messages="birthDateErrors"
                     @input="$v.birthDate.$touch()"
                     @blur="$v.birthDate.$touch()"
                    ></v-text-field>
                    <!-- <v-row>
                    <v-col>
                    <v-file-input
                      class="pt-12"
                      id="photo"
                      v-model="photo"
                      :rules="rules"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Agregue aquí su foto"
                      prepend-icon="mdi-camera"
                      label="Foto de perfil"
                      @change="mostrar()"
                      
                    ></v-file-input>
                    </v-col>
                    <v-col>
                      <v-card class="mx-5" flat>
                          <img src="../../../public/images/Avatar_Default/avatar-undefine.png" id="img">
                      </v-card>
                    </v-col>
                    </v-row> -->
                    <br>
                    <br>

                    
                    <h2> Datos de cuenta </h2>
                    <v-divider></v-divider>
                    <br>
                    <!-- datos para LOGIN en la pagina web  -->
                    <!-- correo electronico  -->
                    <v-text-field v-model="email" label="E-mail" required
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    ></v-text-field>

                    <!-- contraseñas y confirmacion de contraseña  -->
                    <v-text-field v-model="password" label="Contraseña" :type="show1 ? 'text' : 'password'"
                        :error-messages="passwordErrors"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        name="input-10-1"
                        counter
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                        @click:append="show1 = !show1"
                    ></v-text-field>

                    <v-text-field v-model="repeatPassword" label="Repetir Contraseña" :type="show1 ? 'text' : 'password'"
                        :error-messages="RepeatpasswordErrors"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        name="input-10-1"
                        counter
                        @input="$v.repeatPassword.$touch()"
                        @blur="$v.repeatPassword.$touch()"
                        @click:append="show1 = !show1"
                    ></v-text-field>
                    <!-- /datos para LOGIN en la pagina web  -->

                    <br>

                    <!-- terminos y condicines de uso  -->
                    <v-dialog v-model="dialog" width="500">
                        <template v-slot:activator="{ on, attrs }">
                        <p> Para registrarse debe aceptar los <a v-bind="attrs" v-on="on">terminos y condicion</a>  de uso.</p>
                        </template>
                
                        <v-card>
                            <v-card-title class="text-h5 grey lighten-2">
                                Terminos y condicion de uso
                            </v-card-title>
                    
                            <!--trae los terminos desde un componente-->
                            <terms-and-conditions/>

                            <v-divider></v-divider>
                
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text @click="dialog = false"> Cerrar </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                 
                    
                    <v-checkbox
                        v-model="checkbox"
                        :error-messages="checkboxErrors"
                        label="Acepto los Terminos y condiciones."
                        required
                        @change="$v.checkbox.$touch()"
                        @blur="$v.checkbox.$touch()"
                    ></v-checkbox>
                    <br>
                    <br>
                    <v-btn class="mr-4 primary"  @click="submit"> Registrarse </v-btn>
                    <v-btn @click="clear"> Limpiar </v-btn>
                  </form>
                
    <!-- snackbar para cuando se registra ok -->
    <success-message
          :message="successMessage"
          :root="root"
          :snackbar="successShow"
          :close="close"
        />
        <!--snackbar para error en registro-->
        <error-message
          :message="errorMessage"
          :snackbar="errorShow"
          :close="close"
        />
            </div>
        </div>
        <br><br><br>
    </v-container>
   
    


</v-main>

</template>

<script>
//para poner el snackbar
import SuccessMessage from "../../components/AllGoodMsj.vue";
import ErrorMessage from "../../components/ErrorMsj.vue";
import TermsAndConditions from "../../components/Text/TermsAndConditions.vue";
//-----------------------------------------------
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, sameAs, minLength } from 'vuelidate/lib/validators'
  //para subir los datos a la BD
  import { insertUser , insertUserWithPhoto} from "../../services/UsersService";

  export default {
    components: {
        SuccessMessage,
        ErrorMessage,
        TermsAndConditions,
    },
    mixins: [validationMixin],
    validations: {
      Firstname: { required, maxLength: maxLength(30) },
      LastName: { required, maxLength: maxLength(30) },
      email: { required, email },
      select1: { required },
      select2: { required },
      tID: { required },
      numberID: { required, maxLength: maxLength(30) },
      birthDate:{required},
      password: { required, minLength: minLength(6)},
      repeatPassword: {sameAsPassword: sameAs('password')},
      
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      //para el snackbar
      successMessage:"",
      errorMessage:"",
      root:"UserRegister",
      successShow:false,
      errorShow:false,
      //-------------------
      photo:null,
      rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],//para la foto
      Firstname: '',
      LastName: '',
      email: '',
      select1: null,
      select2: null,
      tID: [
        'Cedula Ciudadania',
        'Cedula Extranjeria',
        'Pasaporte',
      ],
      numberID:'',
      items: [
        'Masculino',
        'Femenino',
      ],
      checkbox: false,
      birthDate:'',
      password: '',
      repeatPassword: '',
      typeUser:'Cliente',//valor por defecto
      show1: false,
      dialog: false,
    }),

    computed: {
        //Condicionales aplicadas a los campos del formulario
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('¡Debes aceptar para continuar!')
        return errors
      },
      FirstNameErrors () {
        const errors = []
        if (!this.$v.Firstname.$dirty) return errors
        !this.$v.Firstname.maxLength && errors.push('El nombre debe tener 30 caracteres como máximo.')
        !this.$v.Firstname.required && errors.push('Nombres es requerido.')
        return errors
      },
      LastNameErrors () {
        const errors = []
        if (!this.$v.LastName.$dirty) return errors
        !this.$v.LastName.maxLength && errors.push('El apellido debe tener 30 caracteres como máximo.')
        !this.$v.LastName.required && errors.push('Apellidos es requerido.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Debe ingresar un correo valido.')
        !this.$v.email.required && errors.push('E-mail es requerido.')
        return errors
      },
      select1Errors () {
        const errors = []
        if (!this.$v.select1.$dirty) return errors
        !this.$v.select1.required && errors.push('Campo requerido')
        return errors
      },
      select2Errors () {
        const errors = []
        if (!this.$v.select2.$dirty) return errors
        !this.$v.select2.required && errors.push('Campo requerido')
        return errors
      },
      numberIDErrors () {
        const errors = []
        if (!this.$v.numberID.$dirty) return errors
        !this.$v.numberID.maxLength && errors.push('Numero identificacion debe tener 30 caracteres como máximo.')
        !this.$v.numberID.required && errors.push('Numero identificacion es requerido.')
        return errors
      },
      birthDateErrors () {
        const errors = []
        if (!this.$v.birthDate.$dirty) return errors
        // !this.$v.birthDate.maxLength && errors.push('Numero identificacion debe tener 30 caracteres como máximo.')
        !this.$v.birthDate.required && errors.push('Fecha nacimiento es requerido.')
        return errors
      },
      passwordErrors(){
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('La contraseña debe tener '+ this.$v.password.$params.minLength.min + ' caracteres como  minimo.')
        !this.$v.password.required && errors.push('Constraseña requerida.')
        return errors
      },
      RepeatpasswordErrors(){
        const errors = []
        if (!this.$v.repeatPassword.$dirty) return errors
        !this.$v.repeatPassword.sameAsPassword && errors.push('Las contraseñas deben ser idénticas.')
        return errors
      },
    },

  methods: {
      submit() {
        let request = null;
        if (this.photo!=undefined || this.photo!=null) {
          const user = new FormData();
          user.append("photo",this.photo);
          user.append("email",this.email);
          user.append("Firstname",this.Firstname);
          user.append("Lastname",this.Lastname);
          user.append("select1",this.select1);
          user.append("numberID",this.numberID);
          user.append("typeUser",this.typeUser);
          user.append("phone",this.phone);
          user.append("select2",this.select2);
          user.append("birthDate",this.birthDate);

          request = insertUserWithPhoto(user);
          
        } else {
          const user = {
          email: this.email,
          Firstname: this.Firstname,
          Lastname: this.LastName,
          select1: this.select1, //tipode doc
          numberID: this.numberID,
          typeUser: this.typeUser,
          select2: this.select2, //género
          birthDate: this.birthDate,
          password: this.password, 
          phone:this.phone
          };
          request = insertUser(user)
        }
      
      request
      .then(() => 
          this.successMessage = "Gracias, tu resgitro ha sido exitoso.", 
          this.successShow = true,
      )
      .catch((err) => {
          this.successShow=false 
          this.errorMessage = "Error: "+ err + ")",
          this.errorShow = true 
        }
      );
  },
    reset () {
      this.$refs.form.reset()
    },

      //Limpio los campos del formulario
      clear () {
          this.$v.$reset()
          this.Firstname = ''
          this.LastName = ''
          this.email = ''
          this.select1 = null
          this.select2 = null
          this.checkbox = false
          this.numberID=''
          this.birthDate=null
      },
      goBack(){
          return this.$router.go(-1);
      },
      //para el snackbar y actualizar la pagina luego de registrarse
      close(){
        if (this.successShow==true) {
          this.successShow=false,
          this.$router.push("/login");
        }
        else{
          this.errorShow=false;
          //this.clear(),Limpio los campos
          }
    },
    mostrar(){
      var archivo = document.getElementById("photo").files[0];
      var reader = new FileReader();
        reader.readAsDataURL(archivo );
        reader.onloadend = function () {
          document.getElementById("img").src = reader.result;
        
      },

      console.log('valor de foto:'+this.photo);
    },
  },
}
</script>
<style>
#img{
    width: 150px;
    height: 150px;
    border-radius: 75px;
}
</style>