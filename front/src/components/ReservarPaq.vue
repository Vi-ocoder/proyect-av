<template>
  <v-container>
    <div class="text-center">
      <!-- <h1> Reservas de paquetes </h1> -->
    </div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Resumen paquete
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">
          Datos de cuenta
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 3" step="3">
          Realice el pago
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4"> Finalizar </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <!-- datos del paquete a reservar  -->
        <v-stepper-content step="1">
          <v-card class="mb-12" color="indigo lighten-5" height="auto">
            <div class="pa-5 row">
              <div class="col-md-6">
                <v-simple-table>
                  <template>
                    <tbody>
                      <tr>
                        <td><b> Nombre: </b></td>
                        <td>{{ paquete.namePaq }}</td>
                      </tr>
                      <tr>
                        <td><b> Hospedaje: </b></td>
                        <td>{{ paquete.hotelPaq }}</td>
                      </tr>
                      <tr>
                        <td><b> Fecha de salida: </b></td>
                        <td>{{ paquete.dateIPaq }}</td>
                      </tr>
                      <tr>
                        <td><b> Fecha de regreso: </b></td>
                        <td>{{ paquete.dateFPaq }}</td>
                      </tr>
                      <tr>
                        <td><b> Precio paquete: </b></td>
                        <td>$ {{ paquete.valuePaq }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
              <div class="col-md-5 justify-center">
                <v-img
                  class="mx-auto"
                  height="250"
                  :src="paquete.imagePaq"
                ></v-img>
              </div>
            </div>
          </v-card>
          <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
        </v-stepper-content>

        <!-- datos del cliente  -->
        <v-stepper-content step="2">
          <v-card class="mb-12" color="indigo lighten-5" height="auto">
            <div class="pa-5 row">
              <div class="col-md-6">
                <v-simple-table>
                  <template>
                    <tbody>
                      <tr>
                        <td><b> Nombres: </b></td>
                        <td>{{ this.UsrNombre }}</td>
                      </tr>
                      <tr>
                        <td><b> Apellidos: </b></td>
                        <td>{{ this.UsrApellido }}</td>
                      </tr>
                      <tr>
                        <td><b> Telefono contacto: </b></td>
                        <td>{{ this.UsrTelefono }}</td>
                      </tr>
                      <tr>
                        <td><b> Identificación: </b></td>
                        <td>{{ this.UsrCedula }}</td>
                      </tr>
                      <tr>
                        <td><b> Numero identificación : </b></td>
                        <td>{{ UsrCedulaNum }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
              <div class="col-md-5 justify-center">
                <p>
                  <b>Nota: </b>
                  cercioré que sus datos personales sean correctos. <br />
                  En caso contrario debe actualizarlos.
                </p>
                <v-btn elevation="2"> Actualizar datos</v-btn>
              </div>
            </div>
          </v-card>
          <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
          <v-btn text @click="e1 = 1">Atras</v-btn>
        </v-stepper-content>

        <!-- pago de la reserva  -->
        <v-stepper-content step="3">
          <v-card class="mb-12" color="indigo lighten-5" height="auto">
            <div class="pa-5 row">
              <div class="col-md-5">
                <v-simple-table>
                  <template>
                    <thead>
                      <tr>
                        <th class="text-left" colspan="2">
                          <h1>Datos de la operación</h1>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><b> Fecha: </b></td>
                        <td>11-10-2021</td>
                      </tr>
                      <tr>
                        <td><b> Servicio: </b></td>
                        <td>{{ paquete.namePaq }}</td>
                      </tr>

                      <tr>
                        <td><h2>Total a pagar:</h2></td>
                        <td>
                          <h2>$ {{ paquete.valuePaq }}</h2>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <br />
                Aceptamos las siguientes formas de pago: <br />
                <div class="float-left">
                  <v-img
                    class="mx-auto"
                    max-height="200"
                    max-width="250"
                    src="../../public/images/pagina/formasPago.png"
                  >
                  </v-img>
                </div>
              </div>

              <div class="col-md-7">
                <v-expansion-panels v-model="panel">
                  <v-expansion-panel active-class>
                    <v-expansion-panel-header>
                      <b> Pagar con tarjeta </b>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                      <v-form
                        v-model="valid"
                        ref="form"
                        v-on:submit.prevent="pagarTarjeta()"
                      >
                        <input type="hidden" v-model="idPaquete" />
                        <input type="hidden" v-model="totalPago" />

                        <v-container>
                          <v-row>
                            <v-col cols="12" md="12">
                              <v-text-field
                                type="number"
                                v-model="tarjeta"
                                label="N° tarjeta"
                                required
                                outlined
                                dense
                                prepend-icon="fas fa-credit-card"
                              >
                              </v-text-field>
                            </v-col>

                            <v-col cols="12" md="5">
                              <v-text-field
                                type="number"
                                v-model="mes"
                                label="Mes caducidad"
                                required
                                outlined
                                dense
                                counter="2"
                                prepend-icon="fa fa-calendar-alt"
                              >
                              </v-text-field>
                            </v-col>

                            <v-col cols="12" md="5">
                              <v-text-field
                                type="number"
                                v-model="anio"
                                label="Año caducidad"
                                required
                                outlined
                                dense
                                counter="2"
                              >
                              </v-text-field>
                            </v-col>

                            <v-col cols="12" md="5">
                              <v-text-field
                                type="number"
                                v-model="codigoS"
                                label="Codigo seguridad"
                                required
                                outlined
                                dense
                                prepend-icon="fas fa-lock"
                              >
                              </v-text-field>
                            </v-col>
                            <v-col cols="12" md="6"></v-col>
                            <v-col cols="12" md="4">
                              <v-btn
                                depressed
                                color="primary"
                                :disabled="valid == 'true'"
                                type="submit"
                              >
                                Pagar
                                <template v-slot:loader>
                                  <span>Loading...</span>
                                </template>
                              </v-btn>
                            </v-col>

                            <div class="col-md-8 d-flex justify-end">
                              <v-img
                                max-height="30"
                                max-width="150"
                                src="../../public/images/pagina/tarjetaC.png"
                              ></v-img>
                            </div>
                          </v-row>
                        </v-container>
                      </v-form>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <b> Pagar por PSE </b>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>
          </v-card>
          <v-btn text @click="e1 = 2">Atras</v-btn>
        </v-stepper-content>

        <!-- confirmacion de pago realizado  -->
        <v-stepper-content step="4">
          <v-card class="mb-12" color="light-green darken-1" height="auto">
            <div class="flex text-center pa-5 white--text">
              <v-icon x-large color="white">far fa-check-circle</v-icon>
              <h1>Su pago se ha completado correctamente</h1>
              <br />
              <v-simple-table>
                <template>
                  <tbody>
                    <tr>
                      <td><b> Numero factura: </b></td>
                      <td>
                        <b> {{ numFactura }} </b>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <br />
              <p>
                Puede verificar el estado de la reserva desde el menú de
                opciones: <v-btn to="/my-reservations"> Mis reservas.</v-btn>
              </p>
            </div>
          </v-card>
          <v-btn color="primary" to="/travels"> Finalizar </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <br /><br />
  </v-container>
</template>

<script>
import { insertReservation } from "../services/ReservationService";

export default {
  props: ["id", "paquete"],
  data() {
    return {
      e1: 1,
      valid: false,
      loader: null,
      loading2: false,

      //Numero del panel que inicia activo
      panel: 0,
      tarjeta: null,
      mes: null,
      anio: null,
      codigoS: null,
      idPaquete: null,
      totalPago: null,
      numFactura: null,

      //Datos del usuario logeado
      UsrNombre: "",
      UsrApellido: "",
      UsrTelefono: "",
      UsrCedula: "",
      UsrCedulaNum: "",
    };
  },

  mounted() {
    this.UsrNombre = sessionStorage.getItem("nombre");
    this.UsrApellido = sessionStorage.getItem("apellido");
    this.UsrTelefono = sessionStorage.getItem("telefono");
    this.UsrCedula = sessionStorage.getItem("identificacion");
    this.UsrCedulaNum = sessionStorage.getItem("numeroIdentificacion");

    this.idPaquete = this.paquete._id;
    this.totalPago = this.paquete.valuePaq;
  },

  methods: {
    pagarTarjeta() {
      console.log(this.valid);
      this.valid = "true";

      const reserva = {
        idPaq: this.idPaquete,
        idCliente: this.UsrCedulaNum,
        fechaPago: new Date(),
        formaPago: "Tarjeta Credito",
        totalPago: this.totalPago,
        Estado: "Pendiente",
      };

      setTimeout(
        () => (this.valid = "false"),
        5000 //Simulacion de tiempo de espera
      ),
        insertReservation(reserva)
          .then((response) => {
            const data = response.data;
            this.numFactura = data._id;

            setTimeout(() => (this.e1 = 4), 5000);
          })
          .catch((err) => {
            console.log(err.message);
          });
    },
  },
};
</script>