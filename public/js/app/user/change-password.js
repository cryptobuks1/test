(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{YyEU:function(r,o,t){"use strict";t.r(o);var s=t("L2JU"),a=t("nlWZ");function e(r,o){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);o&&(s=s.filter((function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),t.push.apply(t,s)}return t}function n(r,o,t){return o in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t,r}var i={components:{},data:function(){return{formData:{currentPassword:"",newPassword:"",newPasswordConfirmation:""},formErrors:{},isLoading:!1}},computed:function(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?e(Object(t),!0).forEach((function(o){n(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):e(Object(t)).forEach((function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(t,o))}))}return r}({},Object(s.c)("config",["vars"])),methods:{submit:function(){var r=this;this.isLoading=!0,a.a(this.formData).then((function(o){r.isLoading=!1,r.formData=formUtil.clearForm(r.formData),r.$toasted.success(o.message,r.$toastConfig)})).catch((function(o){r.isLoading=!1,r.formErrors=formUtil.handleErrors(o)}))}}},c=t("KHd+"),f=Object(c.a)(i,(function(){var r=this,o=r.$createElement,t=r._self._c||o;return t("base-container",[t("animated-loader",{attrs:{"is-loading":r.isLoading,"loader-color":r.vars.loaderColor}}),r._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-8 col-md-6 col-lg-4"},[t("form",{on:{submit:function(o){return o.preventDefault(),r.submit(o)}}},[t("base-input",{staticClass:"mb-3",attrs:{"auto-focus":"",label:r.$t("auth.password.props.current_password"),type:"password",name:"currentPassword","addon-left-icon":"fas fa-key",error:r.formErrors.currentPassword},on:{"update:error":function(o){return r.$set(r.formErrors,"currentPassword",o)}},model:{value:r.formData.currentPassword,callback:function(o){r.$set(r.formData,"currentPassword",o)},expression:"formData.currentPassword"}}),r._v(" "),t("base-input",{staticClass:"mb-3",attrs:{label:r.$t("auth.password.props.new_password"),type:"password",name:"newPassword","addon-left-icon":"fas fa-key",error:r.formErrors.newPassword},on:{"update:error":function(o){return r.$set(r.formErrors,"newPassword",o)}},model:{value:r.formData.newPassword,callback:function(o){r.$set(r.formData,"newPassword",o)},expression:"formData.newPassword"}}),r._v(" "),t("base-input",{staticClass:"mb-3",attrs:{label:r.$t("auth.password.props.new_password_confirmation"),type:"password",name:"newPasswordConfirmation","addon-left-icon":"fas fa-key",error:r.formErrors.newPasswordConfirmation},on:{"update:error":function(o){return r.$set(r.formErrors,"newPasswordConfirmation",o)}},model:{value:r.formData.newPasswordConfirmation,callback:function(o){r.$set(r.formData,"newPasswordConfirmation",o)},expression:"formData.newPasswordConfirmation"}}),r._v(" "),t("div",{staticClass:"text-center"},[t("base-button",{staticClass:"my-4",attrs:{type:"submit",design:"success",block:""}},[r._v(r._s(r.$t("auth.password.change_password")))])],1)],1)])])],1)}),[],!1,null,null,null);o.default=f.exports}}]);
//# sourceMappingURL=change-password.js.map?id=b159148decf5b9d80817