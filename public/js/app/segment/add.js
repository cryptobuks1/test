(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{brkl:function(e,t,n){"use strict";n.r(t);var a=n("hR8K"),s=n("BcCH"),i={components:{CommonForm:a.a},beforeRouteLeave:function(e,t,n){s.a.$emit("ROUTE_LEAVING",n)}},o=n("KHd+"),r=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("base-container",{attrs:{boxed:""}},[t("common-form")],1)}),[],!1,null,null,null);t.default=r.exports},hR8K:function(e,t,n){"use strict";var a={extends:n("g+26").a,data:function(){return{formData:{uuid:null,name:"",description:""},formLabels:{name:$t("contact.segment.props.name"),description:$t("contact.segment.props.description")},initUrl:"segments"}},mounted:function(){this.isLoading=!1}},s=n("KHd+"),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("animated-loader",{attrs:{"is-loading":e.isLoading||e.isFetching,"loader-color":e.vars.loaderColor}}),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("base-input",{attrs:{"auto-focus":"",label:e.formLabels.name,type:"text",error:e.formErrors.name,required:""},on:{"update:error":function(t){return e.$set(e.formErrors,"name",t)}},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("base-input",{attrs:{label:e.formLabels.description,type:"text",error:e.formErrors.description},on:{"update:error":function(t){return e.$set(e.formErrors,"description",t)}},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1)]),e._v(" "),n("div",{staticClass:"form-footer mt-3"},[n("div",{staticClass:"left-side"},[n("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(t){return e.$router.back()}}},[n("i",{staticClass:"fas fa-chevron-left"}),e._v(" "+e._s(e.$t("general.cancel")))]),e._v(" "),e.showKeepAdding?n("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:e.keepAdding,callback:function(t){e.keepAdding=t},expression:"keepAdding"}},[e._v("\n                "+e._s(e.$t("general.keep_adding"))+"\n            ")]):e._e()],1),e._v(" "),n("div",{staticClass:"right-side"},[n("base-button",{attrs:{type:"button",design:"light"},on:{click:e.reset}},[e._v(e._s(e.$t("general.reset")))]),e._v(" "),n("base-button",{attrs:{type:"submit",design:"primary"}},[n("i",{staticClass:"fas fa-save"}),e._v(" "+e._s(e.$t("global.save",{attribute:e.$t("contact.segment.segment")})))])],1)]),e._v(" "),e.showKeepAdding&&e.keepAdding?[n("keep-adding-form",{attrs:{"keep-adding-fields":e.keepAddingFields,"keep-adding-option":e.keepAddingOption,"keep-adding-selected-fields":e.keepAddingSelectedFields,"is-loading":e.isLoading},on:{optionUpdated:function(t){e.keepAddingOption=t},fieldsUpdated:function(t){e.keepAddingSelectedFields=t}}})]:e._e()],2)}),[],!1,null,null,null);t.a=i.exports}}]);
//# sourceMappingURL=add.js.map?id=f2d2996fe37d1a7e85a7