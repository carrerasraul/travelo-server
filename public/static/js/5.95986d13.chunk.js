(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{45:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(47);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},47:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},48:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u}));var a=n(16);var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},u=function(e,t){var n,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(u){i.e(u)}finally{i.f()}return r}},52:function(e,t,n){"use strict";var a=n(10),r=n(45),i=n(0),c=n.n(i),u=n(48),l=(n(53),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(u.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(l,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(a.a)(t,2),r=n[0],u=n[1],o=e.id,s=e.onInput,p=r.value,d=r.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){u({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){u({type:"TOUCH"})},b="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:r.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:r.value});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),b,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},53:function(e,t,n){},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(10),r=n(47),i=n(45),c=n(0),u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},l=function(e,t){var n=Object(c.useReducer)(u,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],l=r[1];return[i,Object(c.useCallback)((function(e,t,n){l({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},55:function(e,t,n){"use strict";var a=n(42),r=n.n(a),i=n(43),c=n(10),u=n(0),l=n.n(u),o=n(46);n(56);t.a=function(e){var t=Object(u.useState)(),n=Object(c.a)(t,2),a=n[0],s=n[1],p=Object(u.useState)(),d=Object(c.a)(p,2),f=d[0],v=d[1],b=Object(u.useState)(!1),m=Object(c.a)(b,2),O=m[0],j=m[1],y=Object(u.useRef)();Object(u.useEffect)((function(){if(a){var e=new FileReader;e.onload=function(){v(e.result)},e.readAsDataURL(a)}}),[a]);var h=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),n.append("upload_preset","photos"),e.prev=3,e.next=6,fetch("https://api.cloudinary.com/v1_1/raul703/image/upload",{method:"POST",body:n});case 6:return a=e.sent,e.next=9,a.json();case 9:return i=e.sent,e.abrupt("return",i.secure_url);case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var t=Object(i.a)(r.a.mark((function t(n){var a,i,c,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.target.files,u=O,!n.target.files||1!==n.target.files.length){t.next=12;break}return i=n.target.files[0],s(i),j(!0),u=!0,t.next=9,h(a[0]);case 9:c=t.sent,t.next=14;break;case 12:j(!1),u=!1;case 14:e.onInput(e.id,c,u);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"form-control"},l.a.createElement("input",{id:e.id,ref:y,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:E}),l.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},l.a.createElement("div",{className:"image-upload__preview"},f&&l.a.createElement("img",{src:f,alt:"Preview"}),!f&&l.a.createElement("p",null,"Please pick an image.")),l.a.createElement(o.a,{type:"button",onClick:function(){y.current.click()}},"PICK IMAGE")),!O&&l.a.createElement("p",null,e.errorText))}},56:function(e,t,n){},57:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(42),r=n.n(a),i=n(43),c=n(10),u=n(0),l=n.n(u),o=n(1),s=n(52),p=n(46),d=n(50),f=n(15),v=n(55),b=n(48),m=n(54),O=n(51),j=n(11);n(57);t.default=function(){var e=Object(u.useContext)(j.a),t=Object(O.a)(),n=t.isLoading,a=t.error,y=t.sendRequest,h=t.clearError,E=Object(m.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),g=Object(c.a)(E,2),w=g[0],T=g[1],I=Object(o.g)(),V=function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,(a=new FormData).append("title",w.inputs.title.value),a.append("description",w.inputs.description.value),a.append("address",w.inputs.address.value),a.append("image",w.inputs.image.value),t.next=9,y("https://travel-production.herokuapp.com/api/places","POST",a,{Authorization:"Bearer "+e.token});case 9:I.push("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{error:a,onClear:h}),l.a.createElement("form",{className:"place-form",onSubmit:V},n&&l.a.createElement(f.a,{asOverlay:!0}),l.a.createElement(s.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(b.c)()],errorText:"Please enter a valid title.",onInput:T}),l.a.createElement(s.a,{id:"description",element:"textarea",label:"Description",validators:[Object(b.b)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:T}),l.a.createElement(s.a,{id:"address",element:"input",label:"Address",validators:[Object(b.c)()],errorText:"Please enter a valid address.",onInput:T}),l.a.createElement(v.a,{id:"image",onInput:T,errorText:"Please provide an image."}),l.a.createElement(p.a,{type:"submit",disabled:!w.isValid},"ADD PLACE")))}}}]);
//# sourceMappingURL=5.95986d13.chunk.js.map