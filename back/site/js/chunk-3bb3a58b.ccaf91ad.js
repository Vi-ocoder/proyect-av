(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bb3a58b"],{"43e6":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",[s("v-col",[s("v-card-title",{staticClass:"white--text orange darken-4"},[t._v(" "+t._s(t.titleUsersList)+" "),s("v-spacer"),s("v-btn",{staticClass:"text--primary",attrs:{color:"white",fab:"",to:"/user-register"}},[s("v-icon",[t._v("mdi-plus")])],1)],1),s("v-spacer"),s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar Usuario","single-line":"","hide-details":""},on:{keypress:function(e){return t.usersSearch(t.usersOrigin)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),s("v-divider"),s("v-virtual-scroll",{attrs:{"item-height":"70",height:"300",items:t.users},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return[s("br"),s("v-list-item",{on:{click:function(e){return t.getSelected(i)}}},["Admin"==i.typeUser?s("v-badge",{attrs:{avatar:"",bordered:"",icon:"mdi-shield-account-variant",overlap:"",color:"warning"}},[s("v-avatar",{attrs:{size:"56"}},[s("v-img",{attrs:{src:i.photo}})],1)],1):t._e(),"Asesor"==i.typeUser?s("v-badge",{attrs:{avatar:"",bordered:"",icon:"mdi-tooltip-account",overlap:"",color:"green"}},[s("v-avatar",{attrs:{size:"56"}},[s("v-img",{attrs:{src:i.photo}})],1)],1):t._e(),"Cliente"==i.typeUser?s("v-badge",{attrs:{avatar:"",bordered:"",icon:"mdi-account",overlap:"",color:"blue"}},[s("v-avatar",{attrs:{size:"56"}},[s("v-img",{attrs:{src:i.photo}})],1)],1):t._e(),s("v-list-item-content",[s("v-list-item-title",[t._v("---"+t._s(i.Firstname)+" "+t._s(i.Lastname)+" // "+t._s(i.numberID))])],1),s("v-list-item-action",[s("v-row",[s("v-col",[s("v-btn",{attrs:{depressed:"",small:""},on:{click:function(e){return t.editUser(i)}}},[t._v(" EDITAR "),s("v-icon",{attrs:{color:"blue darken-4",right:""}},[t._v(" mdi-pencil ")])],1)],1),s("v-col",[s("v-btn",{attrs:{depressed:"",small:""},on:{click:function(e){return t.eliminarUsuario(i)}}},[t._v(" Borrar "),s("v-icon",{attrs:{color:"red darken-4",right:""}},[t._v(" mdi-delete ")])],1)],1)],1)],1)],1)]}}])})],1),s("v-divider",{attrs:{vertical:""}}),s("v-col",{staticClass:"pa-6 d-flex text-center",attrs:{cols:"6"}},[""==t.selected?s("div",[t._v(" Seleccione un usuario ")]):t._e(),""!=t.selected?s("div",[s("v-card",{staticClass:"pt-6 mx-auto",attrs:{flat:"","max-width":"400"}},[s("v-card-text",[s("v-avatar",{attrs:{size:"150",rounded:"circle"}},[s("v-img",{attrs:{src:t.selected.photo}})],1),s("h3",{staticClass:"text-h5 mb-0"},[t._v(" "+t._s(t.selected.Firstname)+" "+t._s(t.selected.Lastname)+" ")]),s("div",{staticClass:"blue--text mb-0"},[t._v(" "+t._s(t.selected.email)+" ")]),s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"gray--text subheading typeDocto"},[t._v(" "+t._s(t.selected.select1)+" N°: ")])]),s("v-col",{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"blue--text subheading font-weight-bold numDocto"},[t._v(" "+t._s(t.selected.numberID)+" ")])])],1)],1),s("v-divider"),s("v-row",{staticClass:"text-left",attrs:{tag:"v-card-text"}},[s("v-col",{staticClass:"text-right mr-4",attrs:{tag:"strong",cols:"6"}},[t._v(" Género: ")]),s("v-col",[t._v(t._s(t.selected.select2))]),s("v-col",{staticClass:"text-right mr-4",attrs:{tag:"strong",cols:"6"}},[t._v(" Fecha de Nacimiento: ")]),s("v-col",[s("a",[t._v(t._s(t.dateC))])]),s("v-col",{staticClass:"text-right mr-4",attrs:{tag:"strong",cols:"6"}},[t._v(" Phone: ")]),s("v-col",[t._v(t._s(t.selected.phone))]),s("v-col",{staticClass:"text-right mr-4",attrs:{tag:"strong",cols:"6"}},[t._v(" Tipo de Usuario: ")]),s("v-col",[t._v(t._s(t.selected.typeUser))])],1)],1),s("br"),s("br"),[s("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("edit-user",{attrs:{userRoot:t.userRoot}})],1)],1)]],2):t._e()]),s("warning-msj",{attrs:{snackbar:t.snackDelete,message:t.msjBorrar,close:t.closeDelete,ok:t.okDelete,dato:t.userToDelete}}),s("v-divider",{attrs:{vertical:""}})],1)],1)},a=[],r=(s("ac1f"),s("841c"),s("7db0"),s("bf80")),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-snackbar",{attrs:{"multi-line":t.multiLine,timeout:"10000"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.message)+" "),[s("v-btn",{attrs:{color:"warning",text:""},on:{click:function(e){return t.ok(t.dato)}}},[t._v(" ACEPTAR ")]),s("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){return t.close()}}},[t._v(" CERRAR ")])]],2)},o=[],c={props:["message","snackbar","close","ok","dato"],data:function(){return{multiLine:!0}}},l=c,u=s("2877"),d=s("6544"),h=s.n(d),v=s("8336"),f=s("2db4"),m=Object(u["a"])(l,n,o,!1,null,null,null),g=m.exports;h()(m,{VBtn:v["a"],VSnackbar:f["a"]});var b=s("6fe9"),p={components:{EditUser:b["a"],warningMsj:g},data:function(){return{snackDelete:!1,msjBorrar:"",userToDelete:[],search:"",dateC:"",titleUsersList:"Usuarios resgitrados actualmente",noselecteds:"Selecione un Usuario",dialog:!1,selected:[],users:[],userRoot:[],avatar:null,successMessage:"El usuario se ha modificado",successShow:!1,usersOrigin:[]}},watch:{},mounted:function(){var t=this;Object(r["b"])().then((function(e){t.usersOrigin=e.data,t.usersSearch(t.usersOrigin)})).catch((function(t){return console.error(t)}))},methods:{editUser:function(t){this.userRoot=t,this.dialog="true"},closeSuccessDialog:function(){this.successShow="false"},setDate:function(t){var e=t.substring(0,10);return this.dateC=e},getSelected:function(t){this.selected=t,this.setDate(t.birthDate)},usersSearch:function(t){var e=this,s=[];return""!=this.search.length?s[0]=t.find((function(t){return t.Firstname==e.search||t.numberID==e.search})):s=t,this.users=s},okDelete:function(t){var e=this;Object(r["a"])(t.numberID,t).then((function(){e.titleUsersList="Usuario eliminado, actializando datos...",location.reload()})).catch((function(t){return e.titleUsersList=t}))},eliminarUsuario:function(t){this.snackDelete=!0,this.msjBorrar="Desea borrar a "+t.Firstname+" definitivamente?",this.userToDelete=t},closeDelete:function(){this.snackDelete=!1}}},_=p,x=(s("ed9b"),s("8212")),C=s("15fd"),k=s("5530"),y=(s("a9e3"),s("ff44"),s("132d")),S=s("a9ad"),w=s("7560"),O=s("f2e7"),D=s("f40d"),B=s("fe6c"),V=s("58df"),R=s("80d2"),T=["aria-atomic","aria-label","aria-live","role","title"],j=Object(V["a"])(S["a"],Object(B["b"])(["left","bottom"]),w["a"],O["a"],D["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(k["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(R["h"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),s=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",s,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent:function(){if(!this.dot){var t=Object(R["t"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(y["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],s=[Object(R["t"])(this)],i=this.$attrs,a=(i["aria-atomic"],i["aria-label"],i["aria-live"],i.role,i.title,Object(C["a"])(i,T));return this.inline&&this.left?s.unshift(e):s.push(e),t("span",{staticClass:"v-badge",attrs:a,class:this.classes},s)}}),$=s("b0af"),I=s("99d9"),U=s("62ad"),L=s("a523"),E=s("169a"),A=s("ce7e"),H=s("adda"),F=s("da13"),X=s("1800"),M=s("5d23"),N=s("0fd9"),z=s("2fa4"),P=s("8654"),Y=(s("d81d"),s("fb6a"),s("96a9"),s("24b2")),q=s("f977"),J=Y["a"].extend({name:"v-virtual-scroll",directives:{Scroll:q["b"]},props:{bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:function(){return[]}}},data:function(){return{first:0,last:0,scrollTop:0}},computed:{__bench:function(){return parseInt(this.bench,10)},__itemHeight:function(){return parseInt(this.itemHeight,10)},firstToRender:function(){return Math.max(0,this.first-this.__bench)},lastToRender:function(){return Math.min(this.items.length,this.last+this.__bench)}},watch:{height:"onScroll",itemHeight:"onScroll"},mounted:function(){this.last=this.getLast(0)},methods:{getChildren:function(){return this.items.slice(this.firstToRender,this.lastToRender).map(this.genChild)},genChild:function(t,e){e+=this.firstToRender;var s=Object(R["h"])(e*this.__itemHeight);return this.$createElement("div",{staticClass:"v-virtual-scroll__item",style:{top:s},key:e},Object(R["t"])(this,"default",{index:e,item:t}))},getFirst:function(){return Math.floor(this.scrollTop/this.__itemHeight)},getLast:function(t){var e=parseInt(this.height||0,10)||this.$el.clientHeight;return t+Math.ceil(e/this.__itemHeight)},onScroll:function(){this.scrollTop=this.$el.scrollTop,this.first=this.getFirst(),this.last=this.getLast(this.first)}},render:function(t){var e=t("div",{staticClass:"v-virtual-scroll__container",style:{height:Object(R["h"])(this.items.length*this.__itemHeight)}},this.getChildren());return t("div",{staticClass:"v-virtual-scroll",style:this.measurableStyles,directives:[{name:"scroll",modifiers:{self:!0},value:this.onScroll}],on:this.$listeners},[e])}}),W=Object(u["a"])(_,i,a,!1,null,null,null);e["default"]=W.exports;h()(W,{VAvatar:x["a"],VBadge:j,VBtn:v["a"],VCard:$["a"],VCardText:I["c"],VCardTitle:I["d"],VCol:U["a"],VContainer:L["a"],VDialog:E["a"],VDivider:A["a"],VIcon:y["a"],VImg:H["a"],VListItem:F["a"],VListItemAction:X["a"],VListItemContent:M["a"],VListItemTitle:M["c"],VRow:N["a"],VSpacer:z["a"],VTextField:P["a"],VVirtualScroll:J})},"841c":function(t,e,s){"use strict";var i=s("d784"),a=s("825a"),r=s("1d80"),n=s("129f"),o=s("577e"),c=s("14c3");i("search",(function(t,e,s){return[function(e){var s=r(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,s):new RegExp(e)[t](o(s))},function(t){var i=a(this),r=o(t),l=s(e,i,r);if(l.done)return l.value;var u=i.lastIndex;n(u,0)||(i.lastIndex=0);var d=c(i,r);return n(i.lastIndex,u)||(i.lastIndex=u),null===d?-1:d.index}]}))},"96a9":function(t,e,s){},b48b:function(t,e,s){},ed9b:function(t,e,s){"use strict";s("b48b")},ff44:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3bb3a58b.ccaf91ad.js.map