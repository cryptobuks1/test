(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"4fE6":function(t,a,e){"use strict";var o=e("H4J4");e.n(o).a},H4J4:function(t,a,e){var o=e("hRA8");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(t.exports=o.locals)},NNb5:function(t,a,e){"use strict";e.r(a);var o={extends:e("OOS0").a},r=(e("4fE6"),e("KHd+")),i=Object(r.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("h4",[t._v(t._s(t.$t("config.ui.top_navbar")))]),t._v(" "),e("hr",{staticClass:"mt-3 mb-4"}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6 mb-5"},[e("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.color")))]),t._v(" "),e("div",{staticClass:"color-list mt-3"},t._l(t.colors,(function(a){return e("base-radio",{key:a.key,staticClass:"color-item mb-2",attrs:{value:a.key,type:a.key},model:{value:t.formData.topNavbarColor,callback:function(a){t.$set(t.formData,"topNavbarColor",a)},expression:"formData.topNavbarColor"}},[t._v("\n                        "+t._s(a.title)+"\n                    ")])})),1)]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-5"},[e("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.fixed_on_top")))]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mt-3"},[e("base-radio",{attrs:{value:!1,inline:""},model:{value:t.formData.topNavbarFixed,callback:function(a){t.$set(t.formData,"topNavbarFixed",a)},expression:"formData.topNavbarFixed"}},[t._v("\n                                "+t._s(t.$t("config.ui.disable"))+"\n                            ")]),t._v(" "),e("base-radio",{attrs:{value:!0,inline:""},model:{value:t.formData.topNavbarFixed,callback:function(a){t.$set(t.formData,"topNavbarFixed",a)},expression:"formData.topNavbarFixed"}},[t._v("\n                                "+t._s(t.$t("config.ui.enable"))+"\n                            ")])],1)]),t._v(" "),e("div",{staticClass:"col-12 mb-5"},[e("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.light_logo")))]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mt-3"},[e("base-radio",{attrs:{value:!1,inline:""},model:{value:t.formData.topNavbarLogoLight,callback:function(a){t.$set(t.formData,"topNavbarLogoLight",a)},expression:"formData.topNavbarLogoLight"}},[t._v("\n                                "+t._s(t.$t("config.ui.disable"))+"\n                            ")]),t._v(" "),e("base-radio",{attrs:{value:!0,inline:""},model:{value:t.formData.topNavbarLogoLight,callback:function(a){t.$set(t.formData,"topNavbarLogoLight",a)},expression:"formData.topNavbarLogoLight"}},[t._v("\n                                "+t._s(t.$t("config.ui.enable"))+"\n                            ")])],1)]),t._v(" "),e("div",{staticClass:"col-12 mb-5"},[e("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.hide_navbar")))]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mt-3"},[e("base-radio",{attrs:{value:!1,inline:""},model:{value:t.formData.topNavbarHide,callback:function(a){t.$set(t.formData,"topNavbarHide",a)},expression:"formData.topNavbarHide"}},[t._v("\n                                "+t._s(t.$t("config.ui.disable"))+"\n                            ")]),t._v(" "),e("base-radio",{attrs:{value:!0,inline:""},model:{value:t.formData.topNavbarHide,callback:function(a){t.$set(t.formData,"topNavbarHide",a)},expression:"formData.topNavbarHide"}},[t._v("\n                                "+t._s(t.$t("config.ui.enable"))+"\n                            ")])],1)])])])]),t._v(" "),e("div",{staticClass:"text-right mt-5"},[e("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),e("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])}),[],!1,null,"1735c2d6",null);a.default=i.exports},OOS0:function(t,a,e){"use strict";var o=e("o0o1"),r=e.n(o),i=e("8BOd"),n=e("fHbr"),l=e("L2JU"),s=e("bh+U");function c(t,a,e,o,r,i,n){try{var l=t[i](n),s=l.value}catch(t){return void e(t)}l.done?a(s):Promise.resolve(s).then(o,r)}function d(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?d(Object(e),!0).forEach((function(a){u(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function u(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}a.a={components:{CollapseTransition:n.a},data:function(){return{formData:f(f({},s.a),{},{type:"ui"}),actions:{leftSidebarStyle:{"push-content":{leftSidebarBackdrop:!1,leftSidebarShadow:!1,leftSidebarShow:!0},push:{leftSidebarShow:!0},over:{leftSidebarBackdrop:!0,leftSidebarShadow:!0,leftSidebarShow:!0},folded:{leftSidebarBackdrop:!0,leftSidebarShow:!1},"off-canvas":{leftSidebarShow:!0}},topNavbarHide:{true:{leftSidebarHeight:"full"}},leftSidebarHeight:{normal:{topNavbarHide:!1}},pageHeaderIsBoxed:{true:{pageHeaderBackgroundColor:"primary",colorScheme:"custom"}},pageHeaderBackgroundColor:{transparent:{pageHeaderIsBoxed:!1},any:{colorScheme:"custom"}},pageBackgroundColor:{any:{colorScheme:"custom"}},pageContainerBackgroundColor:{any:{colorScheme:"custom"}},leftSidebarColor:{any:{colorScheme:"custom"}},rightSidebarColor:{any:{colorScheme:"custom"}},modalSidebarColor:{any:{colorScheme:"custom"}},specialSidebarColor:{any:{colorScheme:"custom"}},topNavbarColor:{any:{colorScheme:"custom"}},colorScheme:{default:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"dark-primary",leftSidebarLogoLight:!0,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"secondary",topNavbarColor:"black",topNavbarLogoLight:!0},white:{pageBackgroundColor:"white",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"white",leftSidebarLogoLight:!1,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"white",topNavbarColor:"white",topNavbarLogoLight:!1},light:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"white",leftSidebarLogoLight:!1,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"light",topNavbarColor:"white",topNavbarLogoLight:!1},dark:{pageBackgroundColor:"black",pageContainerBackgroundColor:"gray-darkest",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"gray-darkest",leftSidebarLogoLight:!0,rightSidebarColor:"gray-darkest",modalSidebarColor:"black",specialSidebarColor:"black",topNavbarColor:"gray-darkest",topNavbarLogoLight:!0},"semi-dark":{pageBackgroundColor:"gray-darkest",pageContainerBackgroundColor:"gray-darker",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"dark-primary",leftSidebarLogoLight:!0,rightSidebarColor:"gray-darker",modalSidebarColor:"gray-darker",specialSidebarColor:"primary",topNavbarColor:"black",topNavbarLogoLight:!0},casual:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"primary",leftSidebarLogoLight:!0,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"success",topNavbarColor:"dark-primary",topNavbarLogoLight:!0},business:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"gray-darkest",leftSidebarLogoLight:!0,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"white",topNavbarColor:"white",topNavbarLogoLight:!1}}},formErrors:{},preRequisite:{},colors:[{key:"primary",title:"Primary"},{key:"dark-primary",title:"Dark Primary"},{key:"secondary",title:"Secondary"},{key:"success",title:"Success"},{key:"info",title:"Info"},{key:"warning",title:"Warning"},{key:"danger",title:"Danger"},{key:"white",title:"White"},{key:"light",title:"Light"},{key:"dark",title:"Dark"},{key:"gray-darker",title:"Darker"},{key:"gray-darkest",title:"Darkest"},{key:"black",title:"Black"}],colorSchemes:[{key:"default",title:"Default"},{key:"white",title:"White"},{key:"light",title:"Light"},{key:"dark",title:"Dark"},{key:"semi-dark",title:"Semi Dark"},{key:"casual",title:"Casual"},{key:"business",title:"Business"}],initialFormData:null,emptyFormData:null,readyForAction:!1,isLoading:!0,getInitialDataCalled:!1}},computed:f(f({},Object(l.c)("config",["vars","uiConfigs"])),{},{computedFormData:function(){return _.cloneDeep(this.formData)}}),watch:{computedFormData:{deep:!0,handler:_.debounce((function(t,a){var e=this;this.readyForAction&&(t=this.processActions(t,a),this.formData.objForEach((function(a,o){e.formData[o]=t[o]})),this.SetUiConfig(t)),"function"==typeof this.afterSettingConfig&&this.$nextTick((function(){e.afterSettingConfig()})),this.readyForAction=!0}),500)}},methods:f(f(f({},Object(l.b)("config",["GetConfig"])),Object(l.b)("config",["SetUiConfig"])),{},{processActions:function(t,a){return this.actions.objForEach((function(e,o){if(t[o]!==a[o]){var r=e[t[o]];r&&r.objForEach((function(a,e){t[e]=a}));var i=e.any;i&&i.objForEach((function(a,e){t[e]=a}))}})),t},findActualValue:function(t,a){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return a.find((function(a){return a[e]===t}))||null},submit:function(){var t=this;if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,i.c(this.formData).then((function(a){t.GetConfig().then((function(){t.isLoading=!1,t.getInitialDataCalled&&t.getInitialData(),t.$toasted.success(a.message,t.$toastConfig.success),t.initialFormData=Object.assign({},t.formData)})).catch((function(a){t.isLoading=!1,formUtil.handleErrors(a)}))})).catch((function(a){t.isLoading=!1,t.formErrors=formUtil.handleErrors(a)}))},reset:function(){var t=this;formUtil.confirmAction().then((function(a){a.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){var a=this;formUtil.unsavedCheckAlert(this.initialFormData,this.formData,(function(e){e?(a.SetUiConfig(a.initialFormData),t()):!1!==e&&t()}))},fillPreRequisite:function(t){var a=this;this.preRequisite.objForEach((function(e,o){a.preRequisite[o]=t[o]||e})),this.isLoading=!1},fillFormData:function(){this.isLoading=!0,this.uiConfigs&&(this.formData=formUtil.assignValues(this.formData,this.uiConfigs)),this.isLoading=!1},getInitialData:function(t){var a,e=this;return(a=r.a.mark((function a(){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.isLoading=!0,e.getInitialDataCalled=!0,a.prev=2,a.next=5,i.b(Object.keys(e.preRequisite).join(","));case 5:return o=a.sent,e.fillPreRequisite(o),t&&e.$nextTick((function(){t()})),a.abrupt("return",o);case 11:throw a.prev=11,a.t0=a.catch(2),e.isLoading=!1,e.formErrors=formUtil.handleErrors(a.t0),a.t0;case 16:case"end":return a.stop()}}),a,null,[[2,11]])})),function(){var t=this,e=arguments;return new Promise((function(o,r){var i=a.apply(t,e);function n(t){c(i,o,r,n,l,"next",t)}function l(t){c(i,o,r,n,l,"throw",t)}n(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(t,a,e){this.unsavedCheck(e)}}},hRA8:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".color-item[data-v-1735c2d6]{width:100%}.color-list[data-v-1735c2d6]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.color-list>.color-item[data-v-1735c2d6]{flex:0 50%}",""])}}]);
//# sourceMappingURL=index.js.map?id=6e7bdfdd81f3eadc73bb