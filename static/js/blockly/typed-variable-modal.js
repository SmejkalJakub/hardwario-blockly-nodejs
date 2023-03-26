/*! For license information please see index.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("blockly/core"));else if("function"==typeof define&&define.amd)define(["blockly/core"],t);else{var n="object"==typeof exports?t(require("blockly/core")):t(e.Blockly);for(var a in n)("object"==typeof exports?exports:e)[a]=n[a]}}(this,(e=>(()=>{"use strict";var t={573:t=>{t.exports=e}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{a.r(r),a.d(r,{TypedVariableModal:()=>f});var e=a(573);function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=function(){function a(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),this.title_=e,this.workspace_=t,this.lastFocusableEl_=null,this.firstFocusableEl_=null,this.htmlDiv_=null,this.boundEvents_=[],this.shouldCloseOnOverlayClick=!0,this.shouldCloseOnEsc=!0}var r,o;return r=a,(o=[{key:"init",value:function(){this.render()}},{key:"dispose",value:function(){var n,a=function(e,n){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,n){if(e){if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){s=!0,l=e},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw l}}}}(this.boundEvents_);try{for(a.s();!(n=a.n()).done;){var r=n.value;e.browserEvents.unbind(r)}}catch(e){a.e(e)}finally{a.f()}this.boundEvents_.length=0,this.htmlDiv_&&this.htmlDiv_.remove()}},{key:"show",value:function(){var t=this;e.WidgetDiv.show(this,this.workspace_.RTL,(function(){return t.widgetDispose_()})),this.widgetCreate_();var n=this.htmlDiv_.querySelectorAll('a[href],area[href], input:not([disabled]), select:not([disabled]),textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');n.length>0&&(this.firstFocusableEl_=n[0],this.lastFocusableEl_=n[n.length-1],n[0].classList.contains("blocklyModalBtnClose")&&n.length>1?n[1].focus():this.firstFocusableEl_.focus())}},{key:"hide",value:function(){e.WidgetDiv.hide()}},{key:"onCancel_",value:function(){this.hide()}},{key:"widgetCreate_",value:function(){var t=e.WidgetDiv.DIV;e.utils.dom.addClass(this.htmlDiv_,"blocklyModalOpen"),t.appendChild(this.htmlDiv_)}},{key:"widgetDispose_",value:function(){e.utils.dom.removeClass(this.htmlDiv_,"blocklyModalOpen")}},{key:"handleBackwardTab_",value:function(e){document.activeElement===this.firstFocusableEl_&&(e.preventDefault(),this.lastFocusableEl_.focus())}},{key:"handleForwardTab_",value:function(e){document.activeElement===this.lastFocusableEl_&&(e.preventDefault(),this.firstFocusableEl_.focus())}},{key:"handleKeyDown_",value:function(e){if("Tab"===e.key){if(!this.firstFocusableEl_||this.firstFocusableEl_===this.lastFocusableEl_)return e.preventDefault(),void e.stopPropagation();e.shiftKey?this.handleBackwardTab_(e):this.handleForwardTab_(e)}else"Escape"===e.key&&this.shouldCloseOnEsc&&this.hide();e.stopPropagation()}},{key:"addEvent_",value:function(t,n,a,r){var o=e.browserEvents.conditionalBind(t,n,a,r);this.boundEvents_.push(o)}},{key:"render",value:function(){this.htmlDiv_=document.createElement("div"),this.htmlDiv_.className="blocklyModalOverlay";var e=document.createElement("div");e.className="blocklyModalContainer",e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",this.title_),this.addEvent_(e,"keydown",this,this.handleKeyDown_),this.shouldCloseOnOverlayClick&&(this.addEvent_(this.htmlDiv_,"click",this,this.hide),this.addEvent_(e,"click",this,(function(e){e.stopPropagation()})));var t=document.createElement("header");t.className="blocklyModalHeader",this.renderHeader_(t);var n=document.createElement("button");n.className="blocklyModalBtn blocklyModalBtnClose",this.addEvent_(n,"click",this,this.onCancel_),t.appendChild(n);var a=document.createElement("div");a.className="blocklyModalContent",this.renderContent_(a);var r=document.createElement("footer");r.className="blocklyModalFooter",this.renderFooter_(r),e.appendChild(t),e.appendChild(a),e.appendChild(r),this.htmlDiv_.appendChild(e)}},{key:"renderHeader_",value:function(e){var t=document.createElement("h2");t.className="blocklyModalHeaderTitle",t.appendChild(document.createTextNode(this.title_)),e.appendChild(t)}},{key:"renderContent_",value:function(e){}},{key:"renderFooter_",value:function(e){}}])&&n(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),a}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=c(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},s.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}e.Css.register('\n.blocklyModalOverlay {\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  position: fixed;\n}\n.blocklyModalContainer {\n  background-color: #fff;\n  border: 1px solid gray;\n  font-family: Helvetica;\n  font-weight: 300;\n  padding: 1em;\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  box-shadow: 0px 10px 20px grey;\n  z-index: 100;\n  margin: 15% auto;\n}\n.blocklyModalHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.blocklyModalHeaderTitle {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 1.2em;\n  line-height: 1.25;\n}\n.blocklyModalHeader .blocklyModalBtn {\n  margin-left: auto;\n  height: fit-content;\n}\n.blocklyModalBtnClose:before {\n  content: "\\2715";\n}\n.blocklyModalBtn {\n  margin-right: 0.5em;\n  border: 1px solid gray;\n  font-weight: 500;\n  color: gray;\n  border-radius: 25px;\n}\n.blocklyModalBtnPrimary {\n  background-color: gray;\n  color: #fff;\n}\n');var f=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(c,t);var n,a,r,o,l=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function c(t,n,a,r){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);var i=r&&r.TYPED_VAR_MODAL_TITLE||"Create Typed Variable";(o=l.call(this,i,t)).selectedType_=null,o.variableNameInput_=null,o.variableTypesDiv_=null,o.firstTypeInput_=null,o.btnCallBackName_=n,o.types_=a;var s={TYPED_VAR_MODAL_TITLE:"Create Typed Variable",TYPED_VAR_MODAL_VARIABLE_NAME_LABEL:"Variable Name: ",TYPED_VAR_MODAL_TYPES_LABEL:"Variable Types",TYPED_VAR_MODAL_CONFIRM_BUTTON:"Ok",TYPED_VAR_MODAL_CANCEL_BUTTON:"Cancel",TYPED_VAR_MODAL_INVALID_NAME:"Name is not valid. Please choose a different name."};return e.utils.object.mixin(s,r),o.setLocale(s),o.shouldCloseOnOverlayClick=!1,o}return n=c,(a=[{key:"init",value:function(){var e=this;s(p(c.prototype),"init",this).call(this),this.workspace_.registerButtonCallback(this.btnCallBackName_,(function(){e.show()}))}},{key:"setLocale",value:function(t){Object.keys(t).forEach((function(n){e.Msg[n]=t[n]}))}},{key:"dispose",value:function(){s(p(c.prototype),"dispose",this).call(this),this.workspace_.removeButtonCallback(this.btnCallBackName_)}},{key:"getSelectedType_",value:function(){return this.selectedType_}},{key:"widgetDispose_",value:function(){s(p(c.prototype),"widgetDispose_",this).call(this),this.resetModalInputs_()}},{key:"onConfirm_",value:function(){var t=this.getValidInput_(),n=this.getSelectedType_()||"";if(t){var a=e.Variables.nameUsedWithAnyType(t,this.workspace_);if(a){var r="";r=a.type===n?e.Msg.VARIABLE_ALREADY_EXISTS.replace("%1",a.name):(r=e.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE).replace("%1",a.name).replace("%2",this.getDisplayName_(a.type)),e.dialog.alert(r)}else this.workspace_.createVariable(t,n),this.hide()}else e.dialog.alert(e.Msg.TYPED_VAR_MODAL_INVALID_NAME)}},{key:"getDisplayName_",value:function(e){for(var t=0;t<this.types_.length;t++){var n=this.types_[t];if(e===n[1])return n[0]}return""}},{key:"getValidInput_",value:function(){var t=this.variableNameInput_.value;return t&&((t=t.replace(/[\s\xa0]+/g," ").trim())!==e.Msg.RENAME_VARIABLE&&t!==e.Msg.NEW_VARIABLE||(t=null)),t}},{key:"renderContent_",value:function(t){var n=this.createVarNameContainer_();this.variableNameInput_=n.querySelector(".typedModalVariableNameInput");var a=document.createElement("div");a.className="typedModalTypes",a.textContent=e.Msg.TYPED_VAR_MODAL_TYPES_LABEL,this.variableTypesDiv_=this.createVariableTypeContainer_(this.types_),this.resetModalInputs_(),a.appendChild(this.variableTypesDiv_),t.appendChild(n),t.appendChild(a)}},{key:"renderFooter_",value:function(e){e.appendChild(this.createConfirmBtn_()),e.appendChild(this.createCancelBtn_())}},{key:"createConfirmBtn_",value:function(){var t=document.createElement("button");return t.className="blocklyModalBtn blocklyModalBtnPrimary",t.textContent=e.Msg.TYPED_VAR_MODAL_CONFIRM_BUTTON,this.addEvent_(t,"click",this,this.onConfirm_),t}},{key:"createCancelBtn_",value:function(){var t=document.createElement("button");return t.className="blocklyModalBtn",t.textContent=e.Msg.TYPED_VAR_MODAL_CANCEL_BUTTON,this.addEvent_(t,"click",this,this.onCancel_),t}},{key:"resetModalInputs_",value:function(){this.firstTypeInput_.checked=!0,this.selectedType_=this.firstTypeInput_.id,this.variableNameInput_.value=""}},{key:"createVariableTypeContainer_",value:function(e){var t=this,n=document.createElement("ul");n.className="typedModalList";for(var a=0;a<e.length;a++){var r=e[a],o=r[0],l=r[1],i=document.createElement("li"),s=document.createElement("input");s.className="typedModalTypes",s.type="radio",s.id=l,s.name="blocklyVariableType",this.addEvent_(s,"click",this,(function(e){t.selectedType_=e.target.id})),this.firstTypeInput_=n.querySelector(".typedModalTypes");var c=document.createElement("label");c.textContent=o,c.setAttribute("for",l),i.appendChild(s),i.appendChild(c),n.appendChild(i)}return n}},{key:"createVarNameContainer_",value:function(){var t=document.createElement("div");t.className="typedModalVariableInputContainer";var n=document.createElement("label");n.className="typedModalVariableLabel",n.textContent=e.Msg.TYPED_VAR_MODAL_VARIABLE_NAME_LABEL,n.setAttribute("for","variableInput");var a=document.createElement("input");return a.className="typedModalVariableNameInput",a.type="text",a.id="variableInput",t.appendChild(n),t.appendChild(a),t}}])&&i(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),c}(o);e.Css.register("\n.typedModalTitle {\n  font-weight: bold;\n  font-size: 1em;\n}\n.typedModalVariableInputContainer {\n  margin: 1em 0 1em 0;\n}\n.typedModalVariableLabel{\n  margin-right: 0.5em;\n}\n.typedModalTypes ul{\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n  padding: 0;\n}\n.typedModalTypes li {\n  margin-right: 1em;\n  display: flex;\n}\n")})(),r})()));
//# sourceMappingURL=index.js.map