(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2787e4ef"],{"551e":function(e,a,t){},"72a4":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-main",[t("v-container",{attrs:{id:"crear-paquete"}},[t("v-form",{attrs:{id:"formPaq"}},[t("h2",{staticClass:"formTitle"},[e._v("CREE EL PAQUETE AQUÍ")]),t("h3",{staticClass:"formSubTitle"},[e._v("Recuerde ingresar todos los datos solicitados a continuación:")]),t("v-row",[t("v-col",{attrs:{cols:"8"}},[t("v-text-field",{attrs:{label:"Aquí el Nombre del paquete","prepend-icon":"mdi-plus-box"},model:{value:e.namePaq,callback:function(a){e.namePaq=a},expression:"namePaq"}})],1),t("v-col",{attrs:{cols:"12",md:"4"}},[t("v-text-field",{staticClass:"purple-input",attrs:{label:"Asigne un Código",type:"number",hint:"Recuerde que este dato identifica al paquete, no se debe repetir"},model:{value:e.idPaq,callback:function(a){e.idPaq=a},expression:"idPaq"}})],1),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{staticClass:"purple-input",attrs:{label:"Fecha de Inicio",type:"date"},model:{value:e.dateIPaq,callback:function(a){e.dateIPaq=a},expression:"dateIPaq"}})],1),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{staticClass:"purple-input",attrs:{label:"Fecha Final",type:"date"},model:{value:e.dateFPaq,callback:function(a){e.dateFPaq=a},expression:"dateFPaq"}})],1),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{staticClass:"purple-input",attrs:{label:"Nombre del Hotel","prepend-icon":"mdi-tag-heart-outline"},model:{value:e.hotelPaq,callback:function(a){e.hotelPaq=a},expression:"hotelPaq"}})],1),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{staticClass:"purple-input",attrs:{id:"entradaPrecio",label:"Valor en Pesos",type:"number","prepend-icon":"mdi-cash-100"},model:{value:e.valuePaq,callback:function(a){e.valuePaq=a},expression:"valuePaq"}})],1),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-container",{staticClass:"px-0",attrs:{fluid:""}},[t("v-switch",{attrs:{label:"¿TIENE DESCUENTO? "+e.Promocinal,value:"SI"},model:{value:e.Promocinal,callback:function(a){e.Promocinal=a},expression:"Promocinal"}})],1)],1),t("v-col",{attrs:{cols:"1",md:"1"}},["SI"==e.Promocinal?t("v-text-field",{attrs:{rules:[function(e){return!!e||"Item is required"}],label:"Valor Dcto",required:"",type:"number",suffix:"%"},model:{value:e.dcto,callback:function(a){e.dcto=a},expression:"dcto"}}):e._e()],1),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{staticClass:"purple-input",attrs:{label:"Dirección","prepend-icon":"mdi-map-marker-outline"},model:{value:e.addresPaq,callback:function(a){e.addresPaq=a},expression:"addresPaq"}})],1),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{staticClass:"purple-input",attrs:{label:"Ciudad"},model:{value:e.cityPaq,callback:function(a){e.cityPaq=a},expression:"cityPaq"}})],1),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-text-field",{staticClass:"purple-input",attrs:{label:"Departamento"},model:{value:e.depPaq,callback:function(a){e.depPaq=a},expression:"depPaq"}})],1),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{staticClass:"purple-input",attrs:{label:"Url de la Imagen","prepend-icon":"mdi-image-outline",placeholder:"Inserte aqui la url de la imagen"},model:{value:e.imagePaq,callback:function(a){e.imagePaq=a},expression:"imagePaq"}})],1),t("v-col",{attrs:{cols:"12"}},[t("v-container",[t("v-row",[t("v-col",[t("v-treeview",{attrs:{selectable:"","selected-color":"blue",items:e.items,"return-object":""},model:{value:e.selection,callback:function(a){e.selection=a},expression:"selection"}})],1),t("v-divider",{attrs:{vertical:""}}),t("v-col",{staticClass:"pa-6",attrs:{cols:"6"}},[e.selection.length?e._l(e.selection,(function(a){return t("div",{key:a.id},[e._v(" "+e._s(a.name)+" ")])})):[e._v(" No hay beneficios seleccionados. ")]],2)],1)],1)],1),t("v-col",{attrs:{cols:"12"}},[t("v-textarea",{staticClass:"purple-input",attrs:{label:"Realice una descripción del paquete","prepend-icon":"mdi-playlist-plus"},model:{value:e.descriptionPaq,callback:function(a){e.descriptionPaq=a},expression:"descriptionPaq"}})],1),t("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t("v-btn",{attrs:{color:"primary",width:"200","x-large":""},on:{click:function(a){return e.savePaq()}}},[e._v(" CREAR ")])],1)],1),t("br"),t("SuccessMessage",{attrs:{message:e.successMessage,snackbar:e.successShow,close:e.closeSuccessDialog,IrInicio:e.closeSuccessDialogAndIr}}),t("ErrorMessage",{attrs:{message:e.errorMessage,snackbar:e.errorShow,close:e.closeErrorDialog}})],1),t("br"),t("br")],1)],1)},s=[],o=t("427d"),l=t("1cce"),c=t("0f2e"),r={components:{SuccessMessage:l["a"],ErrorMessage:c["a"]},data:function(){return{successMessage:"",successShow:!1,errorMessage:"",errorShow:!1,items:[{id:1,name:"Tiquetes",children:[{id:1.1,name:"Tiquete Ida",icon:"mdi-airplane-takeoff"},{id:1.2,name:"Tiquete Regreso",icon:"mdi-airplane-landing"}]},{id:2,name:"Alimentación",children:[{id:2.1,name:"Desayuno",icon:"mdi-coffee"},{id:2.2,name:"Almuerzo",icon:"mdi-pasta"},{id:2.3,name:"Cena",icon:"mdi-silverware"}]},{id:3,name:"N° Personas",children:[{id:3.1,name:"Una Persona",icon:"mdi-human-male"},{id:3.2,name:"Dos Personas",icon:"mdi-human-male-female"},{id:3.3,name:"Hasta Cuatro personas",icon:"mdi-human-male-female-child"}]},{id:4,name:"Seguro y/o Tour",children:[{id:4.1,name:"Seguro",icon:"mdi-shield-lock"},{id:4.2,name:"Tour",icon:"mdi-map-marker-path"}]}],idPaq:"",namePaq:"",hotelPaq:"",valuePaq:"",Promocinal:"NO",dcto:"",dateIPaq:"",dateFPaq:"",addresPaq:"",cityPaq:"",depPaq:"",imagePaq:"",descriptionPaq:"",selection:[]}},methods:{savePaq:function(){var e=this;if(void 0!=this.idPaq&&void 0!=this.namePaq&&void 0!=this.descriptionPaq&&void 0!=this.valuePaq&&void 0!=this.hotelPaq&&void 0!=this.addresPaq&&void 0!=this.cityPaq&&void 0!=this.depPaq&&void 0!=this.imagePaq&&void 0!=this.selection&&""!=this.idPaq&&""!=this.namePaq&&""!=this.descriptionPaq&&""!=this.valuePaq&&""!=this.hotelPaq&&""!=this.addresPaq&&""!=this.cityPaq&&""!=this.depPaq&&""!=this.imagePaq&&""!=this.selection){var a={idPaq:this.idPaq,namePaq:this.namePaq,descriptionPaq:this.descriptionPaq,valuePaq:this.valuePaq,Promocinal:this.Promocinal,dcto:this.dcto,hotelPaq:this.hotelPaq,dateIPaq:this.dateIPaq,dateFPaq:this.dateFPaq,addresPaq:this.addresPaq,cityPaq:this.cityPaq,depPaq:this.depPaq,imagePaq:this.imagePaq,Incluidos:this.selection};Object(o["c"])(a).then((function(a){e.openSuccessDialog("Se ha creado el producto: "+a.data.namePaq),e.successShow=!0,e.idPaq=e.idPaq+1,e.namePaq="",e.descriptionPaq="",e.valuePaq="",e.hotelPaq="",e.dateIPaq="",e.dateFPaq="",e.addresPaq="",e.cityPaq="",e.depPaq="",e.imagePaq="",e.Promocinal="NO",e.selection=[]})).catch((function(a){return e.openErrorDialog("Error: "+e.errCodeDuplicate(a))}))}else this.openErrorDialog("Ingrese los campos obligatorios")},errCodeDuplicate:function(e){var a="Error 400";return"Error: Request failed with status code 400"==e&&(a="El código digitado ya esta en uso, utilice un código diferente"),a},openSuccessDialog:function(e){this.successMessage=e,this.successShow=!0},closeSuccessDialog:function(){this.successShow=!1},closeSuccessDialogAndIr:function(){this.successShow=!1,this.$router.push("/travels")},openErrorDialog:function(e){this.errorMessage=e,this.errorShow=!0},closeErrorDialog:function(){this.errorShow=!1}}},n=r,d=(t("9a99"),t("2877")),u=t("6544"),m=t.n(u),p=t("8336"),P=t("62ad"),q=t("a523"),h=t("ce7e"),v=t("4bd4"),f=t("f6c4"),b=t("0fd9"),g=t("b73d"),x=t("8654"),w=t("a844"),C=t("eb2a"),S=Object(d["a"])(n,i,s,!1,null,"0ac1dc2f",null);a["default"]=S.exports;m()(S,{VBtn:p["a"],VCol:P["a"],VContainer:q["a"],VDivider:h["a"],VForm:v["a"],VMain:f["a"],VRow:b["a"],VSwitch:g["a"],VTextField:x["a"],VTextarea:w["a"],VTreeview:C["a"]})},"9a99":function(e,a,t){"use strict";t("551e")}}]);
//# sourceMappingURL=chunk-2787e4ef.74568c62.js.map