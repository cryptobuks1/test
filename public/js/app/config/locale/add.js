(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{h0uq:function(t,e,a){"use strict";a.r(e);var o={extends:a("g+26").a,data:function(){return{formData:{name:"",locale:""},initUrl:"config/locales"}},mounted:function(){this.isLoading=!1}},n=a("KHd+"),r=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("animated-loader",{attrs:{"is-loading":t.isLoading||t.isFetching,"loader-color":t.vars.loaderColor}}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-4"},[a("base-input",{attrs:{"auto-focus":"",label:t.$t("config.locale.props.name"),type:"text",error:t.formErrors.name},on:{"update:error":function(e){return t.$set(t.formErrors,"name",e)}},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-4"},[a("base-input",{attrs:{label:t.$t("config.locale.locale"),type:"text",error:t.formErrors.locale},on:{"update:error":function(e){return t.$set(t.formErrors,"locale",e)}},model:{value:t.formData.locale,callback:function(e){t.$set(t.formData,"locale",e)},expression:"formData.locale"}})],1)]),t._v(" "),a("div",{staticClass:"form-footer mt-3"},[a("div",{staticClass:"left-side"},[a("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(e){return t.$router.back()}}},[a("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.cancel")))]),t._v(" "),t.editData?t._e():a("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:t.keepAdding,callback:function(e){t.keepAdding=e},expression:"keepAdding"}},[t._v("\n                "+t._s(t.$t("general.keep_adding"))+"\n            ")])],1),t._v(" "),a("div",{staticClass:"right-side"},[a("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),a("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("global.save",{attribute:t.$t("config.locale.locale")})))])],1)])],1)}),[],!1,null,null,null).exports,s=a("BcCH"),l={components:{CommonForm:r},beforeRouteLeave:function(t,e,a){s.a.$emit("ROUTE_LEAVING",a)}},i=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("base-container",{attrs:{boxed:""}},[e("common-form")],1)}),[],!1,null,null,null);e.default=i.exports}}]);
//# sourceMappingURL=add.js.map?id=6a0b7b52f20773f4aeba