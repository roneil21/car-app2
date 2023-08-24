(function(){"use strict";var t={7472:function(t,e,r){var a=r(6369),n=function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"nav"}},[t.authenticated?e("router-link",{attrs:{to:"/login",replace:""},nativeOn:{click:function(e){return t.logout()}}},[t._v("Logout")]):t._e()],1),e("router-view",{on:{authenticated:t.setAuthenticated}})],1)},o=[],i={name:"App",data(){return{authenticated:!1}},mounted(){this.authenticated||this.$router.replace({name:"login"}).catch((()=>{}))},methods:{setAuthenticated(t){this.authenticated=t},logout(){this.authenticated=!1}},computed:{adminAccess(){return this.$store.getters.getAccount}}},s=i,c=r(1001),u=(0,c.Z)(s,n,o,!1,null,null,null),l=u.exports,d=r(2631),m=function(){var t=this,e=t._self._c;return e("div",[e("NavBar"),e("Form",[e("div",{attrs:{slot:"form-inputs",id:"form-inputs"},slot:"form-inputs"},[e("label",[t._v("Manufacturer ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newManufacturer,expression:"newManufacturer"}],attrs:{type:"text",placeholder:"Enter the Car Manufacturer"},domProps:{value:t.newManufacturer},on:{input:function(e){e.target.composing||(t.newManufacturer=e.target.value)}}}),e("button",{staticClass:"create-btn",on:{click:function(e){return e.preventDefault(),t.addManufacturer.apply(null,arguments)}}},[t._v("Submit")])]),t._l(t.manufacturers,(function(r,a){return e("div",{staticClass:"preview",attrs:{slot:"form-preview"},slot:"form-preview"},[e("div",{staticClass:"prev-item"},[r.editing?e("div",[e("h2",[t._v("Manufactured By: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:r.manufacturer,expression:"item.manufacturer"}],attrs:{type:"text"},domProps:{value:r.manufacturer},on:{input:function(e){e.target.composing||t.$set(r,"manufacturer",e.target.value)}}})]):e("div",[e("h2",[t._v("Manufactured By: ")]),e("p",[t._v(t._s(r.manufacturer))])]),e("div",{staticClass:"update-btn"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!r.editing,expression:"!item.editing"}],on:{click:function(e){return t.editItem(r.id)}}},[t._v("Edit")]),e("button",{directives:[{name:"show",rawName:"v-show",value:!r.editing,expression:"!item.editing"}],on:{click:function(e){return t.deleteItem(r.id)}}},[t._v("Delete")]),e("button",{directives:[{name:"show",rawName:"v-show",value:r.editing,expression:"item.editing"}],on:{click:function(e){return t.doneEdit(r.id)}}},[t._v("Done")])])])])}))],2)],1)},f=[],p=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._t("form-inputs")],2),e("div",[t._t("form-preview")],2)])},v=[],h={},g=h,C=(0,c.Z)(g,p,v,!1,null,"b109a9d4",null),_=C.exports,w=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"links"}},[e("nav",[e("router-link",{attrs:{to:"/carpage"}},[t._v("Create Car")]),t._v(" | "),e("router-link",{attrs:{to:"/manufacturer"}},[t._v("Manufacturer")]),e("router-link",{attrs:{to:"/color"}},[t._v("Color")])],1),e("router-view"),e("h1",[t._v("Create Your Dream Car")])],1)},b=[],O={},N=(0,c.Z)(O,w,b,!1,null,"853382bc",null),I=N.exports,y={components:{Form:_,NavBar:I},data(){return{newManufacturer:"",newId:0}},methods:{addManufacturer:function(){if(0==this.newManufacturer.trim().length)return alert("Can't submit empty value");this.$store.dispatch("addManufacturer",this),this.newId++,this.newManufacturer="",localStorage.setItem("manufacturers",JSON.stringify(this.manufacturers))},editItem:function(t){this.$store.dispatch("editItem",t)},doneEdit:function(t){this.$store.dispatch("doneEdit",t),localStorage.setItem("manufacturers",JSON.stringify(this.manufacturers))},deleteItem:function(t){this.$store.dispatch("deleteItem",t),localStorage.setItem("manufacturers",JSON.stringify(this.manufacturers))}},computed:{manufacturers(){return this.$store.getters.getMfr}},created(){this.$emit("authenticated",!0),this.manufacturers=JSON.parse(localStorage.getItem("manufacturers")||"[]")},mounted(){this.manufacturers=JSON.parse(localStorage.getItem("manufacturers")||"[]"),this.$emit("authenticated",!0)}},E=y,S=(0,c.Z)(E,m,f,!1,null,"bc98ff66",null),D=S.exports,M=function(){var t=this,e=t._self._c;return e("div",[e("NavBar"),e("Form",[e("div",{attrs:{slot:"form-inputs",id:"form-inputs"},slot:"form-inputs"},[e("label",[t._v("Car Color ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newColor,expression:"newColor"}],attrs:{type:"text",placeholder:"Enter the Car Color"},domProps:{value:t.newColor},on:{input:function(e){e.target.composing||(t.newColor=e.target.value)}}}),e("button",{staticClass:"create-btn",on:{click:function(e){return e.preventDefault(),t.addColor.apply(null,arguments)}}},[t._v("Submit")])]),t._l(t.colors,(function(r,a){return e("div",{staticClass:"preview",attrs:{slot:"form-preview"},slot:"form-preview"},[e("div",{staticClass:"prev-item"},[r.editing?e("div",[e("h2",[t._v("Car Color: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:r.color,expression:"item.color"}],attrs:{type:"text"},domProps:{value:r.color},on:{input:function(e){e.target.composing||t.$set(r,"color",e.target.value)}}})]):e("div",[e("h2",[t._v("Car Color: ")]),e("p",[t._v(t._s(r.color))])]),e("div",{staticClass:"update-btn-color"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!r.editing,expression:"!item.editing"}],on:{click:function(e){return t.editColor(r.id)}}},[t._v("Edit")]),e("button",{directives:[{name:"show",rawName:"v-show",value:!r.editing,expression:"!item.editing"}],on:{click:function(e){return t.deleteColor(r.id)}}},[t._v("Delete")]),e("button",{directives:[{name:"show",rawName:"v-show",value:r.editing,expression:"item.editing"}],on:{click:function(e){return t.doneColor(r.id)}}},[t._v("Done")])])])])}))],2)],1)},x=[],$={components:{Form:_,NavBar:I},data(){return{newColor:"",colorId:0}},methods:{addColor:function(){if(0==this.newColor.trim().length)return alert("Can't submit empty value");this.$store.dispatch("addColor",this),this.colorId++,this.newColor="",localStorage.setItem("colors",JSON.stringify(this.colors))},editColor:function(t){this.$store.dispatch("editColor",t)},doneColor:function(t){this.$store.dispatch("doneColor",t),localStorage.setItem("colors",JSON.stringify(this.colors))},deleteColor:function(t){this.$store.dispatch("deleteColor",t),localStorage.setItem("colors",JSON.stringify(this.colors))}},computed:{colors(){return this.$store.getters.getColors}},created(){this.$emit("authenticated",!0),this.colors=JSON.parse(localStorage.getItem("colors")||"[]")},mounted(){this.colors=JSON.parse(localStorage.getItem("colors")||"[]"),this.$emit("authenticated",!0)}},A=$,k=(0,c.Z)(A,M,x,!1,null,"0bbaf0fb",null),R=k.exports,J=function(){var t=this,e=t._self._c;return e("div",[e("NavBar"),e("Form",[e("div",{attrs:{slot:"form-inputs",id:"form-inputs"},slot:"form-inputs"},[e("label",[t._v("Create a Car")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.newMfr,expression:"newMfr"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newMfr=e.target.multiple?r:r[0]}}},[e("option",{attrs:{value:"",selected:"",hidden:"",disabled:""}},[t._v("Choose a Manufacturer")]),t._l(t.manufacturers,(function(r){return e("option",[t._v(t._s(r.manufacturer))])}))],2),e("select",{directives:[{name:"model",rawName:"v-model",value:t.newCarColor,expression:"newCarColor"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newCarColor=e.target.multiple?r:r[0]}}},[e("option",{attrs:{value:"",selected:"",hidden:"",disabled:""}},[t._v("Choose a Car Color")]),t._l(t.colors,(function(r){return e("option",[t._v(t._s(r.color))])}))],2),e("button",{on:{click:function(e){return e.preventDefault(),t.addCar.apply(null,arguments)}}},[t._v("Create")])]),t._l(t.cars,(function(r,a){return e("div",{staticClass:"preview",attrs:{slot:"form-preview"},slot:"form-preview"},[e("div",{staticClass:"prev-item"},[e("div",[e("h2",[t._v("Car Entry: ")]),r.editing?e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:r.carManufacturer,expression:"car.carManufacturer"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(r,"carManufacturer",e.target.multiple?a:a[0])}}},[e("option",{attrs:{selected:"",hidden:"",disabled:""}},[t._v("Choose a Manufacturer")]),t._l(t.manufacturers,(function(r){return e("option",[t._v(t._s(r.manufacturer))])}))],2)]):e("div",[e("p",[t._v("Manufacturer: "+t._s(r.carManufacturer))])]),r.editing?e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:r.carColor,expression:"car.carColor"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(r,"carColor",e.target.multiple?a:a[0])}}},[e("option",{attrs:{value:"",selected:"",hidden:"",disabled:""}},[t._v("Choose a Car Color")]),t._l(t.colors,(function(r){return e("option",[t._v(t._s(r.color))])}))],2)]):e("div",[e("p",[t._v("Color: "+t._s(r.carColor))])]),e("div",{staticClass:"update-btn-color"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!r.editing,expression:"!car.editing"}],on:{click:function(e){return t.editCar(r.id)}}},[t._v("Edit")]),e("button",{directives:[{name:"show",rawName:"v-show",value:!r.editing,expression:"!car.editing"}],on:{click:function(e){return t.deleteCar(r.id)}}},[t._v("Delete")]),e("button",{directives:[{name:"show",rawName:"v-show",value:r.editing,expression:"car.editing"}],on:{click:function(e){return t.doneCar(r.id)}}},[t._v("Done")])])])])])}))],2)],1)},P=[],L={data(){return{newMfr:"",newCarColor:"",carId:0}},components:{Form:_,NavBar:I},methods:{addCar:function(){if(""===this.newMfr||""===this.newCarColor)return alert("Can't submit empty value");this.$store.dispatch("addCar",this),this.carId++,this.newMfr="",this.newCarColor="",localStorage.setItem("cars",JSON.stringify(this.cars))},editCar:function(t){this.$store.dispatch("editCar",t)},doneCar:function(t){this.$store.dispatch("doneCar",t),localStorage.setItem("cars",JSON.stringify(this.cars))},deleteCar:function(t){this.$store.dispatch("deleteCar",t),localStorage.setItem("cars",JSON.stringify(this.cars))}},computed:{cars(){return this.$store.getters.getCar}},created(){this.cars=JSON.parse(localStorage.getItem("cars")||"[]"),this.manufacturers=JSON.parse(localStorage.getItem("manufacturers")),this.colors=JSON.parse(localStorage.getItem("colors")),this.$emit("authenticated",!0)},mounted(){this.cars=JSON.parse(localStorage.getItem("cars")||"[]"),this.$emit("authenticated",!0)}},T=L,Z=(0,c.Z)(T,J,P,!1,null,"33bb75c7",null),F=Z.exports,B=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"login"}},[t._m(0),e("label",[t._v("Username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.acc.user,expression:"acc.user"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.acc.user},on:{input:function(e){e.target.composing||t.$set(t.acc,"user",e.target.value)}}}),e("label",[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.acc.pass,expression:"acc.pass"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.acc.pass},on:{input:function(e){e.target.composing||t.$set(t.acc,"pass",e.target.value)}}}),e("button",{attrs:{type:"button"},on:{click:function(e){return t.login()}}},[t._v("Login")])])},j=[function(){var t=this,e=t._self._c;return e("h1",[t._v("Login "),e("br"),e("span",[t._v("Username: 'admin', Password: 'admin'")])])}],U={name:"Login",data(){return{acc:{user:"",pass:""}}},methods:{login(){""!=this.acc.user&&""!=this.acc.pass?this.acc.user==this.$parent.adminAccess.username&&this.acc.pass==this.$parent.adminAccess.password?(this.$emit("authenticated",!0),this.$router.replace({name:"carpage"}).catch((()=>{}))):alert("The username and / or password is incorrect"):alert("A username and password cannot be empty")}}},Y=U,q=(0,c.Z)(Y,B,j,!1,null,"74b8f8e0",null),z=q.exports;a.ZP.use(d.ZP);const G=[{path:"/",redirect:{name:"login"}},{path:"/login",name:"login",component:z},{path:"/navbar",name:"navbar",component:I},{path:"/manufacturer",name:"manufacturer",component:D},{path:"/color",name:"color",component:R},{path:"/carpage",name:"carpage",component:F}],H=new d.ZP({routes:G,mode:"history"});var K=H,Q=r(3822);a.ZP.use(Q.ZP);var V=new Q.ZP.Store({state:{cars:JSON.parse(localStorage.getItem("cars")||"[]"),manufacturers:JSON.parse(localStorage.getItem("manufacturers")||"[]"),colors:JSON.parse(localStorage.getItem("colors")||"[]"),adminAccess:{username:"admin",password:"admin"}},getters:{getColors:t=>t.colors,getMfr:t=>t.manufacturers,getCar:t=>t.cars,getAccount:t=>t.adminAccess},mutations:{ADD_CAR:(t,e)=>{const r={carManufacturer:e.newMfr,carColor:e.newCarColor,id:e.carId,editing:!1};t.cars.unshift(r)},EDIT_CAR:(t,e)=>{const r=t.cars.find((t=>t.id===e));r.editing=!0},DONE_CAR:(t,e)=>{const r=t.cars.find((t=>t.id===e));r.editing=!1},DELETE_CAR:(t,e)=>{const r=t.cars.findIndex((t=>t.id===e));t.cars.splice(r,1)},ADD_COLOR:(t,e)=>{const r={color:e.newColor,id:e.colorId,completed:!1,editing:!1};t.colors.unshift(r)},DELETE_COLOR:(t,e)=>{const r=t.colors.findIndex((t=>t.id===e));t.colors.splice(r,1)},EDIT_COLOR:(t,e)=>{const r=t.colors.find((t=>t.id===e));r.editing=!0},DONE_COLOR:(t,e)=>{const r=t.colors.find((t=>t.id===e));r.editing=!1},ADD_MFR:(t,e)=>{const r={manufacturer:e.newManufacturer,id:e.newId,completed:!1,editing:!1};t.manufacturers.unshift(r)},DELETE_MFR:(t,e)=>{const r=t.manufacturers.findIndex((t=>t.id===e));t.manufacturers.splice(r,1)},EDIT_MFR:(t,e)=>{const r=t.manufacturers.find((t=>t.id===e));r.editing=!0},DONE_EDIT:(t,e)=>{const r=t.manufacturers.find((t=>t.id===e));r.editing=!1}},actions:{addCar:(t,e)=>{t.commit("ADD_CAR",e)},editCar:(t,e)=>{t.commit("EDIT_CAR",e)},doneCar:(t,e)=>{t.commit("DONE_CAR",e)},deleteCar:(t,e)=>{t.commit("DELETE_CAR",e)},addManufacturer:(t,e)=>{t.commit("ADD_MFR",e)},deleteItem:(t,e)=>{t.commit("DELETE_MFR",e)},editItem:(t,e)=>{t.commit("EDIT_MFR",e)},doneEdit:(t,e)=>{t.commit("DONE_EDIT",e)},addColor:(t,e)=>{t.commit("ADD_COLOR",e)},deleteColor:(t,e)=>{t.commit("DELETE_COLOR",e)},editColor:(t,e)=>{t.commit("EDIT_COLOR",e)},doneColor:(t,e)=>{t.commit("DONE_COLOR",e)}},modules:{}});a.ZP.config.productionTip=!1,new a.ZP({router:K,store:V,render:t=>t(l)}).$mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var i=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],o=t[l][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){t.splice(l--,1);var u=n();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],s=a[1],c=a[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var l=c(r)}for(e&&e(a);u<i.length;u++)o=i[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},a=self["webpackChunkcar_maker_app"]=self["webpackChunkcar_maker_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(7472)}));a=r.O(a)})();
//# sourceMappingURL=app.b92e0bfc.js.map