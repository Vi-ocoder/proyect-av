(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0c05"],{"9e69":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.paquetesCli,"item-key":"_id",search:e.search,"custom-filter":e.filterOnlyCapsText},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-text-field",{staticClass:"mx-4",attrs:{label:"Buscar (Solo en minusculas)"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]},proxy:!0},{key:"item.totalPago",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.formatMoney(a.totalPago))+" ")]}},{key:"item.idPaq.dateIPaq",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.formatDate(a.idPaq.dateIPaq))+" ")]}},{key:"item.idPaq.dateFPaq",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.formatDate(a.idPaq.dateFPaq))+" ")]}}],null,!0)})],1),a("br"),a("br"),a("br")])},r=[],i=(a("d3b7"),a("25f0"),a("715c")),o={props:["id"],data:function(){return{search:"",calories:"",idCliente:"",paquetesCli:[]}},computed:{headers:function(){return[{text:"Nombre paquete",align:"start",value:"idPaq.namePaq"},{text:"Fecha Salida",value:"fechaSalida"},{text:"Fecha Regreso",value:"fechaLLegada"},{text:"Cod. Factura",value:"_id"},{text:"Precio pagado",value:"totalPago"},{text:"Estado",value:"Estado"}]}},mounted:function(){this.idCliente=this.id,this.reservationsById()},methods:{filterOnlyCapsText:function(e,t){return null!=e&&null!=t&&"string"===typeof e&&-1!==e.toString().toLocaleLowerCase().indexOf(t)},reservationsById:function(){var e=this;Object(i["b"])(this.idCliente).then((function(t){var a=t.data;e.paquetesCli=a})).catch((function(e){console.log(e.message)}))},formatMoney:function(e){var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"COP",minimumFractionDigits:2}).format(e);return t},formatDate:function(e){var t=new Date(e),a=t.toLocaleString();return a}}},s=o,l=a("2877"),c=a("6544"),u=a.n(c),d=a("a523"),f=a("8fea"),m=a("8654"),v=Object(l["a"])(s,n,r,!1,null,null,null);t["default"]=v.exports;u()(v,{VContainer:d["a"],VDataTable:f["a"],VTextField:m["a"]})}}]);
//# sourceMappingURL=chunk-2d0f0c05.443ec8bb.js.map