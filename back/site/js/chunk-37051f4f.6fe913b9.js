(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37051f4f"],{"160d":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"contTable"},[a("v-card",[a("v-card-title",[e._v(" Reservas Actuales "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1 myTable",attrs:{headers:e.headers,items:e.reservas,search:e.search,"sort-by":"fechaPago"},scopedSlots:e._u([{key:"item.Estado",fn:function(t){var o=t.item;return["Pendiente"==o.Estado?a("v-chip",{attrs:{color:"warning",dark:""}},[e._v(" "+e._s(o.Estado)+" ")]):a("v-chip",{attrs:{color:"green",dark:""}},[e._v(" "+e._s(o.Estado)+" ")])]}},{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Información General")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),void 0,a("v-spacer"),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle)+" # "+e._s(e.idPaqRoot))])]),a("edit-paq",{attrs:{idPaqRoot:e.idPaqRoot,namePaqRoot:e.namePaqRoot,dialog:e.close,paqRoot:e.paqRoot}})],1)],1),a("v-dialog",{attrs:{"max-width":"700px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[a("br"),e._v(" ¿Seguro desea borrar la reserva #"+e._s(e.editedItem._id)+", asociada al doc. #: "+e._s(e.editedItem.idCliente)+"?")]),a("v-card-subtitle",[a("br"),e._v(" El paquete se borrará definitivamente...")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialogDelete=!1}}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.borrarReserva()}}},[e._v("Borrar")]),a("v-spacer")],1)],1)],1),a("v-dialog",{attrs:{"max-width":"700px"},model:{value:e.dialogVerRes,callback:function(t){e.dialogVerRes=t},expression:"dialogVerRes"}},[a("v-card",[a("div")])],1)],2)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[a("v-icon",{attrs:{color:"red"},on:{click:function(t){return e.deleteItem(o)}}},[e._v(" mdi-delete ")])]}}])})],1),a("v-card",[a("br"),a("br")])],1)},i=[],r=(a("4de4"),a("715c")),s={props:["dialogResF"],components:{},data:function(){return{fechaPago:"",root:"ReservsInfo",dialogVerRes:!1,dialog:!1,dialogDelete:!1,search:"",reservas:[],paqRoot:[],idPaqRoot:0,namePaqRoot:"",headers:[{text:"Id de Reserva",align:"start",sortable:!1,value:"_id"},{text:"Id Cliente",value:"idCliente"},{text:"Paquete",value:"idPaq.namePaq"},{text:"Cod. Paquete",value:"idPaq.idPaq"},{text:"Fecha Salida",value:"fechaPago"},{text:"Estado",value:"Estado"},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItem:{namePaq:"",idPaq:0,hotelPaq:0,valuePaq:0,dcto:0},defaultItem:{namePaq:"",idPaq:0,hotelPaq:0,valuePaq:0,dcto:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Paq":"Editar Paquete"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},mounted:function(){var e=this;Object(r["c"])().then((function(t){e.reservas=t.data,e.fechaPago=e.reservas.fechaPago.substring(0,10)})).catch((function(e){return console.error(e)}))},methods:{deleteItem:function(e){this.editedItem=Object.assign({},e),this.dialogDelete=!0},borrarReserva:function(){var e=this;console.log(this.editedItem._id),Object(r["a"])(this.editedItem._id).then((function(){e.reservas=e.reservas.filter((function(t){return t._id!=e.editedItem._id})),console.log(e.reservas)})).catch((function(e){console.log(e)})),this.closeDelete()},close:function(){this.dialog=!1,this.actualizarPage()},actualizarPage:function(){var e=this;Object(r["c"])().then((function(t){e.reservas=t.data})).catch((function(e){return console.error(e)}))},closeDelete:function(){this.dialogDelete=!1},verDetallesRes:function(e){this.dialogVerRes=!0,this.paqRoot=e},closeDialogVerRes:function(){this.dialogVerRes=!1}}},n=s,l=(a("8ef9"),a("2877")),c=a("6544"),d=a.n(c),u=a("8336"),v=a("b0af"),f=a("99d9"),h=a("cc20"),g=a("a523"),m=a("8fea"),b=a("169a"),p=a("ce7e"),P=a("132d"),q=a("2fa4"),x=a("8654"),R=a("71d9"),_=a("2a7f"),V=Object(l["a"])(n,o,i,!1,null,null,null);t["default"]=V.exports;d()(V,{VBtn:u["a"],VCard:v["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardTitle:f["d"],VChip:h["a"],VContainer:g["a"],VDataTable:m["a"],VDialog:b["a"],VDivider:p["a"],VIcon:P["a"],VSpacer:q["a"],VTextField:x["a"],VToolbar:R["a"],VToolbarTitle:_["a"]})},78394:function(e,t,a){},"8ef9":function(e,t,a){"use strict";a("78394")}}]);
//# sourceMappingURL=chunk-37051f4f.6fe913b9.js.map