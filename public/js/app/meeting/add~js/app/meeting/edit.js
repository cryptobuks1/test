(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{cPOX:function(t,e,r){"use strict";var o=r("o0o1"),i=r.n(o),a=r("L2JU"),s=r("V0LQ");function n(t,e,r,o,i,a,s){try{var n=t[a](s),l=n.value}catch(t){return void r(t)}n.done?e(l):Promise.resolve(l).then(o,i)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={components:{},props:{pushToArr:{type:Boolean,default:!1}},data:function(){return{formData:{},formErrors:{},initialFormData:null,emptyFormData:null,entity:null,preRequisite:{},isLoading:!0,initUrl:"",dataType:null,dataTypeArr:null,propertyToMatch:null}},computed:c(c({},Object(a.c)("config",["configs","vars"])),{},{codePrefix:function(){return this.formData.codePrefix}}),watch:{codePrefix:function(t){if(this.preRequisite.codes){var e=this.preRequisite.codes.find((function(e){return e.codePrefix===t})),r=this.configs[this.dataType].codeDigit;this.formData.codeNumber=e?Object(s.d)(e.codeNumber+1,r):Object(s.d)(1,r)}}},methods:c(c(c({},Object(a.b)("common",["Init","Store","GetPreRequisite","Custom"])),Object(a.b)("config",["SetUiConfig"])),{},{submit:function(){var t=this;if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,this.Store(this.formData).then((function(e){t.$toasted.success(e.message,t.$toastConfig),t.initialFormData=_.cloneDeep(t.formData),e.hasOwnProperty(t.dataType)&&(t.entity=e[t.dataType]),t.close(!0),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)}))},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(r,o){e.preRequisite[o]=t[o]||r})),this.isLoading=!1},getInitialData:function(t){var e,r=this;return(e=i.a.mark((function e(){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.isLoading=!0,e.prev=1,e.next=4,r.GetPreRequisite();case 4:return o=e.sent,r.fillPreRequisite(o),r.configs[r.dataType]&&r.$nextTick((function(){r.formData.codePrefix=r.configs[r.dataType].codePrefix})),t&&r.$nextTick((function(){t()})),e.abrupt("return",o);case 11:throw e.prev=11,e.t0=e.catch(1),r.isLoading=!1,r.formErrors=formUtil.handleErrors(e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,11]])})),function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(t){n(a,o,i,s,l,"next",t)}function l(t){n(a,o,i,s,l,"throw",t)}s(void 0)}))})()},close:function(t){!0===t?this.$emit("close",Object.assign({},this.entity?this.entity:this.formData,{dataType:this.dataType,dataTypeArr:this.dataTypeArr,propertyToMatch:this.propertyToMatch,dontMatch:!!this.entity,push:this.pushToArr})):this.$emit("close"),this.SetUiConfig({modalSidebarShow:!1})}}),mounted:function(){this.Init({url:this.initUrl}),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite}}},dnLm:function(t,e,r){"use strict";var o=r("xusK");r.n(o).a},pVdk:function(t,e,r){"use strict";var o=r("g+26"),i=(r("xexB"),r("bPil")),a=r.n(i),s=(r("1qIj"),r("yPMx")),n=r.n(s),l=(r("ghrA"),r("jijp"),r("Uj6y"),r("zjZG"),r("uI7J"),r("fAvY"),r("rmCP"),r("/11s"),r("TR9W"),r("8dmp"),r("P3R9"),r("ZaQH"),r("zogX"),r("/dVY"),r("Uqfo"),r("Ol/C"),r("LBFR"),r("7VnU"),r("nZ3r"),r("lUM2")),c=Object(l.b)(),u={image:{dropdown:["insertImage","upload"],ico:"insertImage"},textAlign:{dropdown:["justifyLeft","justifyCenter","justifyRight","justifyFull"],ico:"justifyFull"},textDecoration:{dropdown:["underline","del","superscript","subscript"],ico:"underline"},lists:{dropdown:["unorderedList","orderedList"],ico:"unorderedList"},extras:{dropdown:["removeformat","undo","redo","horizontalRule","preformatted"],ico:"removeformat"}},d={name:"editor-wrapper",components:{Trumbowyg:a.a},props:{disabled:{type:Boolean,default:!1,description:"Whether input is required (adds an asterix *)"},required:{type:Boolean,default:!1,description:"Whether input is required (adds an asterix *)"},config:{type:[String,Object]},autogrow:{type:Boolean,default:!1},height:{type:String,default:""},label:{type:String,default:"Enter content"},value:{type:String,description:"Selected value"},error:{type:String,description:"Select error (below select)"}},data:function(){return{configObj:{btnsDef:{image:u.image,textAlign:u.textAlign,textDecoration:u.textDecoration,lists:u.lists},btns:[["undo","redo"],["formatting","strong","em","textDecoration"],["foreColor","backColor"],["textAlign","lists"],["horizontalRule","link","image","table","specialChars","emoji","noembed"],["preformatted"],["removeformat"],["viewHTML"],["fullscreen"]],plugins:{resizimg:{minSize:64,step:16},table:{rows:8,columns:8},upload:{serverPath:"/api/uploads/image",fileFieldName:"image",headers:{"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer ".concat(c)},urlPropertyName:"url",error:function(t){}}},autogrow:!1,svgPath:n.a},minConfigObj:{btnsDef:{image:u.image,textAlign:u.textAlign,textDecoration:u.textDecoration,lists:u.lists,extras:u.extras},btns:[["formatting","strong","em","textDecoration"],["foreColor","backColor"],["textAlign","lists"],["image","extras"],["viewHTML"],["fullscreen"]],plugins:{resizimg:{minSize:64,step:16},table:{rows:8,columns:8},upload:{serverPath:"/api/uploads/image",fileFieldName:"image",headers:{"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer ".concat(c)},urlPropertyName:"url",error:function(t){}}},autogrow:!1,svgPath:n.a},leastConfigObj:{btnsDef:{image:u.image,textAlign:u.textAlign,textDecoration:u.textDecoration,lists:u.lists,extras:u.extras},btns:[["formatting","strong","em","textDecoration"],["foreColor","backColor"],["textAlign"],["extras"],["viewHTML"]],plugins:{resizimg:{minSize:64,step:16}},autogrow:!1,svgPath:n.a}}},computed:{content:{get:function(){return this.value},set:function(t){this.$emit("input",t),this.$emit("update:error","")}},computedConfig:function(){return this.config?"minimal"===this.config?this.minConfigObj:"least"===this.config?this.leastConfigObj:this.config.hasOwnProperty("btnsDef")?this.config:this.configObj:this.configObj}},methods:{},mounted:function(){this.configObj.autogrow=this.autogrow,this.minConfigObj.autogrow=this.autogrow,this.leastConfigObj.autogrow=this.autogrow}},p=(r("dnLm"),r("KHd+")),m=Object(p.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["editor-wrapper",{"not-empty":!!t.value},{required:t.required},t.height?"height-"+t.height:""]},[r("label",{staticClass:"input-group-material-label"},[t._v(t._s(t.label)+" "),t.required?r("span",{staticClass:"required-asterix"},[t._v("*")]):t._e()]),t._v(" "),t._t("default",[r("trumbowyg",{staticClass:"form-control",attrs:{config:t.computedConfig,name:"content"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})]),t._v(" "),t._t("errorBlock",[t.error?r("div",{staticClass:"text-danger invalid-feedback",staticStyle:{display:"block","margin-top":"0.5rem"}},[t._v("\n            "+t._s(t.error)+"\n        ")]):t._e()])],2)}),[],!1,null,null,null).exports,f={extends:r("cPOX").a,props:{meta:{type:Object,required:!0}},data:function(){return{formData:{uuid:null,name:"",slug:"",description:"",parent:null,type:null},hasSlug:!1,hasParent:!1,preRequisite:{options:[]},formLabels:{name:$t("option.props.name"),slug:$t("option.props.slug"),description:$t("option.props.description"),parent:$t("option.props.parent"),type:$t("option.props.type")},initUrl:"options",dataType:"option",dataTypeArr:"options",propertyToMatch:"name",entityTitle:"option.option"}},watch:{meta:{deep:!0,handler:function(t,e){this.formData.type=t.optionType,this.entityTitle=t.entityTitle,this.dataType=t.dataType,this.dataTypeArr=t.dataTypeArr,this.hasSlug=t.hasSlug,this.hasParent=t.hasParent}}},methods:{createSlug:function(){this.showKeepAdding&&this.formData.name!=this.initialFormData.name?this.formData.slug=this.formData.name.kebabCase():this.formData.slug=this.formData.slug?this.formData.slug:this.formData.name.kebabCase()},preSubmit:function(){this.createSlug(),!this.hasParent||this.formData.parent?this.submit():this.$toasted.error($t("global.invalid",{attribute:$t("option.props.parent")}),this.$toastConfig.error)}},mounted:function(){this.getInitialData()},created:function(){this.formData.type=this.meta.optionType,this.entityTitle=this.meta.entityTitle,this.dataType=this.meta.dataType,this.dataTypeArr=this.meta.dataTypeArr,this.hasSlug=this.meta.hasSlug,this.hasParent=this.meta.hasParent}},g=Object(p.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"has-fixed-footer",on:{submit:function(e){return e.preventDefault(),t.preSubmit(e)}}},[r("h5",{staticClass:"text-center"},[t._v(t._s(t.$t("global.add",{attribute:t.$t("option.option")})))]),t._v(" "),r("hr"),t._v(" "),r("animated-loader",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mb-4"},[r("base-input",{attrs:{"auto-focus":"",label:t.formLabels.name,type:"text",error:t.formErrors.name,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"name",e)},blur:t.createSlug},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),t.hasSlug?r("div",{staticClass:"col-12 mb-4"},[r("base-input",{attrs:{label:t.formLabels.slug,type:"text",error:t.formErrors.slug,format:"kebabCase",required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"slug",e)},focus:t.createSlug,blur:t.createSlug},model:{value:t.formData.slug,callback:function(e){t.$set(t.formData,"slug",e)},expression:"formData.slug"}})],1):t._e(),t._v(" "),t.hasParent?r("div",{staticClass:"col-12 mb-4"},[r("base-select",{attrs:{options:t.preRequisite.options,label:t.formLabels.parent,error:t.formErrors.parent,"allow-empty":!0,disabled:t.isLoading,"track-by":"uuid","show-by":"nameWithParents"},on:{"update:error":function(e){return t.$set(t.formErrors,"parent",e)}},model:{value:t.formData.parent,callback:function(e){t.$set(t.formData,"parent",e)},expression:"formData.parent"}})],1):t._e(),t._v(" "),r("div",{staticClass:"col-12 mb-4"},[r("base-input",{attrs:{label:t.formLabels.description,type:"text",error:t.formErrors.description},on:{"update:error":function(e){return t.$set(t.formErrors,"description",e)}},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)]),t._v(" "),r("div",{staticClass:"form-footer fixed-footer mt-5"},[r("div",{staticClass:"left-side"},[r("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(e){return t.close()}}},[r("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.cancel")))])],1),t._v(" "),r("div",{staticClass:"right-side"},[r("base-button",{attrs:{type:"submit",design:"primary"}},[r("i",{staticClass:"fas fa-save"}),t._v(" "+t._s(t.$t("global.save",{attribute:t.$t("option.option")})))])],1)])],1)}),[],!1,null,null,null).exports,b=r("g6NE").a.getters["config/vars"],h={extends:o.a,components:{EditorWrapper:m,OptionForm:g},data:function(){return{formData:{uuid:null,title:"",agenda:"",description:"",startDateTime:moment().format(b.serverDateTimeFormat),period:60,type:null,category:null},preRequisite:{types:[],segments:[],categories:[]},formLabels:{title:$t("meeting.props.title"),agenda:$t("meeting.props.agenda"),description:$t("meeting.props.description"),startDateTime:$t("meeting.props.start_date_time"),period:$t("meeting.props.estimated_period"),type:$t("meeting.props.type"),category:$t("meeting.meeting_category.category")},initUrl:"meetings",dateTimeFields:["startDateTime"]}},methods:{afterEditData:function(){this.duplicate&&(this.formData.startDateTime=moment().format(b.serverDateTimeFormat))}},mounted:function(){this.getInitialData()}},y=Object(p.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("animated-loader",{attrs:{"is-loading":t.isLoading||t.isFetching,"loader-color":t.vars.loaderColor}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("base-input",{attrs:{"auto-focus":"",label:t.formLabels.title,type:"text",error:t.formErrors.title,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"title",e)}},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("base-select",{attrs:{options:t.preRequisite.types,label:t.formLabels.type,error:t.formErrors.type,required:"","allow-empty":!1,"preselect-first":""},on:{"update:error":function(e){return t.$set(t.formErrors,"type",e)}},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("base-select",{attrs:{options:t.preRequisite.categories,label:t.formLabels.category,error:t.formErrors.category,required:"","allow-empty":!1,"preselect-first":"","add-new-modal":!0,"needed-permission":"access-meeting-config"},on:{"update:error":function(e){return t.$set(t.formErrors,"category",e)}},scopedSlots:t._u([{key:"addNewModal",fn:function(){return[r("option-form",{attrs:{meta:{optionType:"meeting_category",dataType:"category",dataTypeArr:"categories",entityTitle:"meeting.meeting_category.category"}},on:{close:t.newModalClose}})]},proxy:!0}]),model:{value:t.formData.category,callback:function(e){t.$set(t.formData,"category",e)},expression:"formData.category"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("base-input",{staticClass:"mb-3",attrs:{label:t.formLabels.startDateTime,"addon-right-icon":"far fa-calendar-alt",type:"text",error:t.formErrors.startDateTime,"is-wrapper":!0,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"startDateTime",e)}},model:{value:t.formData.startDateTime,callback:function(e){t.$set(t.formData,"startDateTime",e)},expression:"formData.startDateTime"}},[r("date-picker",{staticClass:"form-control datepicker",attrs:{config:t.vars.datetimepickerConfig},model:{value:t.formData.startDateTime,callback:function(e){t.$set(t.formData,"startDateTime",e)},expression:"formData.startDateTime"}})],1),t._v(" "),r("base-input",{staticClass:"mb-3",attrs:{label:t.formLabels.period,type:"number",error:t.formErrors.period,required:"","select-on-focus":"","addon-right-text":t.$t("list.general.durations.minutes")},on:{"update:error":function(e){return t.$set(t.formErrors,"period",e)},wheel:function(t){t.stopPropagation(),t.preventDefault()}},model:{value:t.formData.period,callback:function(e){t.$set(t.formData,"period",e)},expression:"formData.period"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-8 mb-3"},[r("base-textarea",{attrs:{rows:"5",label:t.formLabels.agenda,error:t.formErrors.agenda,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"agenda",e)}},model:{value:t.formData.agenda,callback:function(e){t.$set(t.formData,"agenda",e)},expression:"formData.agenda"}})],1),t._v(" "),r("div",{staticClass:"col-12 mt-4 mb-3"},[r("editor-wrapper",{attrs:{label:t.formLabels.description,error:t.formErrors.description},on:{"update:error":function(e){return t.$set(t.formErrors,"description",e)}},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)]),t._v(" "),r("div",{staticClass:"form-footer mt-5"},[r("div",{staticClass:"left-side"},[r("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(e){return t.$router.back()}}},[r("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.cancel")))]),t._v(" "),t.showKeepAdding?r("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:t.keepAdding,callback:function(e){t.keepAdding=e},expression:"keepAdding"}},[t._v("\n                "+t._s(t.$t("general.keep_adding"))+"\n            ")]):t._e()],1),t._v(" "),r("div",{staticClass:"right-side"},[r("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),r("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("global.save",{attribute:t.$t("meeting.meeting")})))])],1)]),t._v(" "),t.showKeepAdding&&t.keepAdding?[r("keep-adding-form",{attrs:{"keep-adding-fields":t.keepAddingFields,"keep-adding-option":t.keepAddingOption,"keep-adding-selected-fields":t.keepAddingSelectedFields,"is-loading":t.isLoading},on:{optionUpdated:function(e){t.keepAddingOption=e},fieldsUpdated:function(e){t.keepAddingSelectedFields=e}}})]:t._e()],2)}),[],!1,null,null,null);e.a=y.exports},vwhl:function(t,e,r){(e=t.exports=r("I1BE")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);",""]),e.push([t.i,".trumbowyg-box,.trumbowyg-editor{margin-top:0}.trumbowyg-box{border-radius:.25rem;border:.0625rem solid #e9ecf1;transition:box-shadow .15s ease;box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02)}.trumbowyg-box .trumbowyg-button-pane{background:#f5f6f7;border-radius:.25rem .25rem 0 0;border-bottom:.0625rem solid #e9ecf1;z-index:auto}.trumbowyg-box .trumbowyg-button-pane .trumbowyg-button-group:after,.trumbowyg-box .trumbowyg-button-pane:after{background:#e9ecf1}.editor-wrapper.height-xs .trumbowyg-box,.editor-wrapper.height-xs .trumbowyg-editor{min-height:100px}.editor-wrapper.height-sm .trumbowyg-box,.editor-wrapper.height-sm .trumbowyg-editor{min-height:150px}.editor-wrapper.height-md .trumbowyg-box,.editor-wrapper.height-md .trumbowyg-editor{min-height:300px}.editor-wrapper.height-lg .trumbowyg-box,.editor-wrapper.height-lg .trumbowyg-editor{min-height:450px}.editor-wrapper.height-xl .trumbowyg-box,.editor-wrapper.height-xl .trumbowyg-editor{min-height:600px}.editor-wrapper.height-xxl .trumbowyg-box,.editor-wrapper.height-xxl .trumbowyg-editor{min-height:750px}",""])},xusK:function(t,e,r){var o=r("vwhl");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(o,i);o.locals&&(t.exports=o.locals)},yPMx:function(t,e){t.exports="/images/trumbowyg-icons.svg?5b01ba8be11eb713b41763472b62eefe"}}]);
//# sourceMappingURL=edit.js.map?id=2d0431a28ffaeaa380d5