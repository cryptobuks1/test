(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"3HR4":function(t,e,r){"use strict";var o=r("o0o1"),i=r.n(o),n=r("L2JU"),a=r("8BOd");function s(t,e,r,o,i,n,a){try{var s=t[n](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(o,i)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={components:{},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,entity:null,preRequisite:{},isLoading:!0,dataType:null,configType:""}},computed:f({},Object(n.c)("config",["configs","vars"])),methods:f(f(f({},Object(n.b)("config",["GetConfig"])),Object(n.b)("navigation",["Generate"])),{},{findActualValue:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return e.find((function(e){return e[r]===t}))||null},submit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0;var r=!0===e?a.e:"module"===this.configType?a.d:a.c;"function"==typeof this.beforeSubmit&&this.beforeSubmit(),r(this.formData).then((function(e){t.GetConfig().then((function(){t.$toasted.success(e.message,t.$toastConfig),t.initialFormData=_.cloneDeep(t.formData),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)})),"function"==typeof t.afterSubmit&&t.afterSubmit()})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitError&&t.afterSubmitError()}))},reset:function(){var t=this;formUtil.confirmAction().then((function(e){e.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,t)},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(r,o){e.preRequisite[o]=t[o]||r})),this.isLoading=!1},fillFormData:function(){var t=this;this.isLoading=!0,this.formData.type&&this.configs[this.formData.type]&&(this.formData=formUtil.assignValues(this.formData,this.configs[this.formData.type])),this.formData.types&&Array.isArray(this.formData.types)&&this.formData.types.forEach((function(e){t.formData=formUtil.assignValues(t.formData,t.configs[e])})),"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),this.isLoading=!1},getInitialData:function(t){var e,r=this;return(e=i.a.mark((function e(){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.isLoading=!0,e.prev=1,e.next=4,a.b(Object.keys(r.preRequisite).join(","));case 4:return o=e.sent,r.fillPreRequisite(o),t&&r.$nextTick((function(){t()})),e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(1),r.isLoading=!1,r.formErrors=formUtil.handleErrors(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,r=arguments;return new Promise((function(o,i){var n=e.apply(t,r);function a(t){s(n,o,i,a,u,"next",t)}function u(t){s(n,o,i,a,u,"throw",t)}a(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(t,e,r){this.unsavedCheck(r)}}},LoVe:function(t,e,r){"use strict";r.r(e);var o={extends:r("3HR4").a,data:function(){return{formData:{pusherAppKey:"",pusherAppId:"",pusherAppCluster:"",pusherAppSecret:"",type:"pusher"}}}},i=r("KHd+"),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6 mb-4"},[r("base-input",{attrs:{label:t.$t("config.pusher.app_id"),type:"text",error:t.formErrors.pusherAppId},on:{"update:error":function(e){return t.$set(t.formErrors,"pusherAppId",e)}},model:{value:t.formData.pusherAppId,callback:function(e){t.$set(t.formData,"pusherAppId",e)},expression:"formData.pusherAppId"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-6 mb-4"},[r("base-input",{attrs:{label:t.$t("config.pusher.app_key"),type:"text",error:t.formErrors.pusherAppKey},on:{"update:error":function(e){return t.$set(t.formErrors,"pusherAppKey",e)}},model:{value:t.formData.pusherAppKey,callback:function(e){t.$set(t.formData,"pusherAppKey",e)},expression:"formData.pusherAppKey"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-6 mb-4"},[r("base-input",{attrs:{label:t.$t("config.pusher.app_secret"),type:"text",error:t.formErrors.pusherAppSecret},on:{"update:error":function(e){return t.$set(t.formErrors,"pusherAppSecret",e)}},model:{value:t.formData.pusherAppSecret,callback:function(e){t.$set(t.formData,"pusherAppSecret",e)},expression:"formData.pusherAppSecret"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-6 mb-4"},[r("base-input",{attrs:{label:t.$t("config.pusher.app_cluster"),type:"text",error:t.formErrors.pusherAppCluster},on:{"update:error":function(e){return t.$set(t.formErrors,"pusherAppCluster",e)}},model:{value:t.formData.pusherAppCluster,callback:function(e){t.$set(t.formData,"pusherAppCluster",e)},expression:"formData.pusherAppCluster"}})],1)]),t._v(" "),r("div",{staticClass:"text-right mt-5"},[r("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),r("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=index.js.map?id=41fade1d7fb959e687ed