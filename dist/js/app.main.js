webpackJsonp([0],[,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(0),a=n(5),o=i(a),s=n(8),u=i(s),l=n(6),c=i(l),d=n(9),f=i(d),h=n(7),m=i(h),v=n(12),g=i(v);n(13),n(23);var p={init:function(){(0,o.default)(),(0,u.default)(),(0,c.default)(),(0,f.default)(),(0,m.default)(),(0,g.default)()}};(0,r.domReady)(p.init)},,function(e,t){},,function(e,t,n){"use strict";function i(){window.addEventListener("load",function(){window.setTimeout(function(){document.querySelector("html").classList.remove("is-loading")},1e3)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(e.classList.remove("is-loading"),t&&t.hasOwnProperty("success"))return(0,f.default)("Message successfully sent","Thanks and I'll be in touch soon","🚀"),void e.reset();(0,f.default)("Error","Something went wrong. Try again!","🙈")}function a(e,t){e.classList.remove("is-loading"),(0,f.default)("Error",""+t.toString(),"🙈")}function o(e){var t=e.getAttribute("action"),n=e.querySelector("#form-name"),i=e.querySelector("#form-email"),r=e.querySelector("#form-message");return fetch(t,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:n.value,email:i.value,message:r.value})})}function s(e){return(0,c.default)(e).isValid}function u(){var e=document.querySelector("#form");e.addEventListener("submit",function(t){t.preventDefault(),s(e)&&(e.classList.add("is-loading"),o(e).then(function(e){return e.json()}).then(function(t){return r(e,t)}).catch(function(t){return a(e,t)}))}),e.addEventListener("keyup",function(){e.classList.contains("has-error-history")&&s(e)})}Object.defineProperty(t,"__esModule",{value:!0});var l=n(14),c=i(l),d=n(10),f=i(d);t.default=u},function(e,t,n){"use strict";function i(){o&&Array.from(o).forEach(function(e){(0,a.isElementInViewport)(e)&&e.classList.add("is-inview")})}function r(){var e=document.querySelectorAll("[data-inview]");e&&(o=e,i())}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=void 0;window.addEventListener("scroll",function(){i()}),t.default=r},function(e,t,n){"use strict";function i(){a.default.cfg.loadMode=1,a.default.cfg.expand=500}Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=i},function(e,t,n){"use strict";function i(){document.querySelector("html").classList.toggle("has-navigation")}function r(){var e=document.querySelector("#navigation-activate");e&&e.addEventListener("click",function(){i()})}function a(){u.default.init({selector:"[data-scroll]",selectorHeader:null,speed:600,easing:"easeInOutQuint",offset:0,after:function(e,t){var n=t.parentNode.parentNode;n&&n.classList.contains("c-navigation__list")&&i()}})}function o(){r(),a()}Object.defineProperty(t,"__esModule",{value:!0});var s=n(20),u=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=o},function(e,t,n){"use strict";function i(e){var t=document.querySelector("html");window.document.body.insertAdjacentHTML("afterbegin",e),window.setTimeout(function(){var e=document.querySelectorAll(".c-notification");t.classList.add("has-notification"),Array.from(e).forEach(function(e){e.addEventListener("click",function(){t.classList.remove("has-notification"),window.setTimeout(function(){e.parentNode.removeChild(e)},500)})})},500)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i('\n    <div class="c-notification is-theme-grey-light">\n      <div class="c-notification__dialog">\n        <p class="c-notification__emoji">'+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"🚀")+'</p>\n        <h3 class="c-notification__heading">'+e+'</h3>\n        <p class="c-notification__message">'+t+"</p>\n      </div>\n    </div>\n  ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},,function(e,t,n){"use strict";function i(){var e=window.pageYOffset||document.documentElement.scrollTop;return e=e<0?0:e}function r(){var e=i();e>o&&o>1?(a.classList.remove("is-scrolling-up"),a.classList.add("is-scrolling-down")):(a.classList.remove("is-scrolling-down"),a.classList.add("is-scrolling-up")),window.pageYOffset>0?a.classList.add("has-scrolled-down"):a.classList.remove("has-scrolled-down"),o=window.innerHeight+window.pageYOffset>=document.body.offsetHeight?o:e}Object.defineProperty(t,"__esModule",{value:!0});var a=document.querySelector("html"),o=0;window.addEventListener("scroll",function(){r()}),t.default=r},function(e,t,n){"use strict";n(17)},function(e,t,n){"use strict";function i(e){var t=new window.Validatinator({"contact-form":{fullname:"required",email:"required|email",message:"required"}},{"contact-form":{fullname:{required:"Name is required."},email:{required:"Email address is required.",email:"Email must be in a valid format."},message:{required:"Message is required."}}}),n=e.getAttribute("name"),i=e.querySelectorAll("[name]");if(Array.from(i).forEach(function(e){return e.classList.remove("has-error")}),t.fails(n)){var r=t.errors[n];for(var a in r)if(r.hasOwnProperty(a)){var o=r[a],s="[name='"+a+"']",u=e.querySelector(s);for(var l in o)o.hasOwnProperty(l)&&(u.classList.add("has-error"),e.classList.add("has-error-history"))}return{isValid:!1,errors:r}}return{isValid:!0,errors:{}}}Object.defineProperty(t,"__esModule",{value:!0}),n(21),t.default=i},,function(e,t){e.exports="/dist/files/michaelpumo-2017.pdf"},function(e,t){e.exports="http://michaelpumo.com/dist/images/mark.svg"},function(e,t){!function(t,n){var i=function(e,t){"use strict";if(t.getElementsByClassName){var n,i=t.documentElement,r=e.Date,a=e.HTMLPictureElement,o=e.addEventListener,s=e.setTimeout,u=e.requestAnimationFrame||s,l=e.requestIdleCallback,c=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],f={},h=Array.prototype.forEach,m=function(e,t){return f[t]||(f[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),f[t].test(e.getAttribute("class")||"")&&f[t]},v=function(e,t){m(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=m(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},p=function(e,t,n){var i=n?"addEventListener":"removeEventListener";n&&p(e,t),d.forEach(function(n){e[i](n,t)})},y=function(e,n,i,r,a){var o=t.createEvent("CustomEvent");return o.initCustomEvent(n,!r,!a,i||{}),e.dispatchEvent(o),o},b=function(t,i){var r;!a&&(r=e.picturefill||n.pf)?r({reevaluate:!0,elements:[t]}):i&&i.src&&(t.src=i.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,i){for(i=i||e.offsetWidth;i<n.minSize&&t&&!e._lazysizesWidth;)i=t.offsetWidth,t=t.parentNode;return i},A=function(){var e,n,i=[],r=[],a=i,o=function(){var t=a;for(a=i.length?r:i,e=!0,n=!1;t.length;)t.shift()();e=!1},l=function(i,r){e&&!r?i.apply(this,arguments):(a.push(i),n||(n=!0,(t.hidden?s:u)(o)))};return l._lsFlush=o,l}(),N=function(e,t){return t?function(){A(e)}:function(){var t=this,n=arguments;A(function(){e.apply(t,n)})}},L=function(e){var t,n=0,i=666,a=function(){t=!1,n=r.now(),e()},o=l?function(){l(a,{timeout:i}),666!==i&&(i=666)}:N(function(){s(a)},!0);return function(e){var a;(e=!0===e)&&(i=44),t||(t=!0,a=125-(r.now()-n),a<0&&(a=0),e||a<9&&l?o():s(o,a))}},z=function(e){var t,n,i=function(){t=null,e()},a=function(){var e=r.now()-n;e<99?s(a,99-e):(l||i)(i)};return function(){n=r.now(),t||(t=s(a,99))}},S=function(){var a,u,l,d,f,E,S,M,_,O,T,q,F,x,I,V=/^img$/i,j=/^iframe$/i,P="onscroll"in e&&!/glebot/.test(navigator.userAgent),$=0,H=0,k=-1,B=function(e){H--,e&&e.target&&p(e.target,B),(!e||H<0||!e.target)&&(H=0)},W=function(e,n){var r,a=e,o="hidden"==w(t.body,"visibility")||"hidden"!=w(e,"visibility");for(_-=n,q+=n,O-=n,T+=n;o&&(a=a.offsetParent)&&a!=t.body&&a!=i;)(o=(w(a,"opacity")||1)>0)&&"visible"!=w(a,"overflow")&&(r=a.getBoundingClientRect(),o=T>r.left&&O<r.right&&q>r.top-1&&_<r.bottom+1);return o},D=function(){var e,r,o,s,c,d,h,m,v;if((f=n.loadMode)&&H<8&&(e=a.length)){r=0,k++,null==x&&("expand"in n||(n.expand=i.clientHeight>500&&i.clientWidth>500?500:370),F=n.expand,x=F*n.expFactor),$<x&&H<1&&k>2&&f>2&&!t.hidden?($=x,k=0):$=f>1&&k>1&&H<6?F:0;for(;r<e;r++)if(a[r]&&!a[r]._lazyRace)if(P)if((m=a[r].getAttribute("data-expand"))&&(d=1*m)||(d=$),v!==d&&(S=innerWidth+d*I,M=innerHeight+d,h=-1*d,v=d),o=a[r].getBoundingClientRect(),(q=o.bottom)>=h&&(_=o.top)<=M&&(T=o.right)>=h*I&&(O=o.left)<=S&&(q||T||O||_)&&(l&&H<3&&!m&&(f<3||k<4)||W(a[r],d))){if(G(a[r]),c=!0,H>9)break}else!c&&l&&!s&&H<4&&k<4&&f>2&&(u[0]||n.preloadAfterLoad)&&(u[0]||!m&&(q||T||O||_||"auto"!=a[r].getAttribute(n.sizesAttr)))&&(s=u[0]||a[r]);else G(a[r]);s&&!c&&G(s)}},Q=L(D),R=function(e){v(e.target,n.loadedClass),g(e.target,n.loadingClass),p(e.target,J)},Y=N(R),J=function(e){Y({target:e.target})},U=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},Z=function(e){var t,i,r=e.getAttribute(n.srcsetAttr);(t=n.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),r&&e.setAttribute("srcset",r),t&&(i=e.parentNode,i.insertBefore(e.cloneNode(),e),i.removeChild(e))},K=N(function(e,t,i,r,a){var o,u,l,f,m,w;(m=y(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(i?v(e,n.autosizesClass):e.setAttribute("sizes",r)),u=e.getAttribute(n.srcsetAttr),o=e.getAttribute(n.srcAttr),a&&(l=e.parentNode,f=l&&c.test(l.nodeName||"")),w=t.firesLoad||"src"in e&&(u||o||f),m={target:e},w&&(p(e,B,!0),clearTimeout(d),d=s(B,2500),v(e,n.loadingClass),p(e,J,!0)),f&&h.call(l.getElementsByTagName("source"),Z),u?e.setAttribute("srcset",u):o&&!f&&(j.test(e.nodeName)?U(e,o):e.src=o),(u||f)&&b(e,{src:o})),e._lazyRace&&delete e._lazyRace,g(e,n.lazyClass),A(function(){(!w||e.complete&&e.naturalWidth>1)&&(w?B(m):H--,R(m))},!0)}),G=function(e){var t,i=V.test(e.nodeName),r=i&&(e.getAttribute(n.sizesAttr)||e.getAttribute("sizes")),a="auto"==r;(!a&&l||!i||!e.src&&!e.srcset||e.complete||m(e,n.errorClass))&&(t=y(e,"lazyunveilread").detail,a&&C.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,H++,K(e,t,a,r,i))},X=function(){if(!l){if(r.now()-E<999)return void s(X,999);var e=z(function(){n.loadMode=3,Q()});l=!0,n.loadMode=3,Q(),o("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){E=r.now(),a=t.getElementsByClassName(n.lazyClass),u=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),I=n.hFac,o("scroll",Q,!0),o("resize",Q,!0),e.MutationObserver?new MutationObserver(Q).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",Q,!0),i.addEventListener("DOMAttrModified",Q,!0),setInterval(Q,999)),o("hashchange",Q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,Q,!0)}),/d$|^c/.test(t.readyState)?X():(o("load",X),t.addEventListener("DOMContentLoaded",Q),s(X,2e4)),a.length?(D(),A._lsFlush()):Q()},checkElems:Q,unveil:G}}(),C=function(){var e,i=N(function(e,t,n,i){var r,a,o;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),c.test(t.nodeName||""))for(r=t.getElementsByTagName("source"),a=0,o=r.length;a<o;a++)r[a].setAttribute("sizes",i);n.detail.dataAttr||b(e,n.detail)}),r=function(e,t,n){var r,a=e.parentNode;a&&(n=E(e,a,n),r=y(e,"lazybeforesizes",{width:n,dataAttr:!!t}),r.defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&i(e,a,r,n))},a=function(){var t,n=e.length;if(n)for(t=0;t<n;t++)r(e[t])},s=z(a);return{_:function(){e=t.getElementsByClassName(n.autosizesClass),o("resize",s)},checkElems:s,updateElem:r}}(),M=function(){M.i||(M.i=!0,C._(),S._())};return function(){var t,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in i)t in n||(n[t]=i[t]);e.lazySizesConfig=n,s(function(){n.init&&M()})}(),{cfg:n,autoSizer:C,loader:S,init:M,uP:b,aC:v,rC:g,hC:m,fire:y,gW:E,rAF:A}}}(t,t.document);t.lazySizes=i,"object"==typeof e&&e.exports&&(e.exports=i)}(window)},,function(e,t,n){(function(n){var i,r,a;/*! smooth-scroll v11.1.0 | (c) 2017 Chris Ferdinandi | GPL-3.0 License | http://github.com/cferdinandi/smooth-scroll */
!function(n,o){r=[],i=o(n),void 0!==(a="function"==typeof i?i.apply(t,r):i)&&(e.exports=a)}(void 0!==n?n:this.window||this.global,function(e){"use strict";var t,n,i,r,a,o,s,u={},l="querySelector"in document&&"addEventListener"in e,c={selector:"[data-scroll]",ignore:"[data-scroll-ignore]",selectorHeader:null,speed:500,offset:0,easing:"easeInOutCubic",easingPatterns:{},before:function(){},after:function(){}},d=function(){var e={},t=!1,n=0,i=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);n<i;n++){var r=arguments[n];!function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=d(!0,e[i],n[i]):e[i]=n[i])}(r)}return e},f=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},h=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},m=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),i=n.length,r=-1,a="",o=n.charCodeAt(0);++r<i;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===o?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+a},v=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.easingPatterns[e.easing]&&(n=e.easingPatterns[e.easing](t)),n||t},g=function(e,t,n){var i=0;if(e.offsetParent)do{i+=e.offsetTop,e=e.offsetParent}while(e);return i=Math.max(i-t-n,0),Math.min(i,y()-p())},p=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},y=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},b=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},w=function(e){return e?f(e)+e.offsetTop:0},E=function(t,n,i){i||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))};u.animateScroll=function(n,i,o){var u=b(i?i.getAttribute("data-options"):null),l=d(t||c,o||{},u),f="[object Number]"===Object.prototype.toString.call(n),h=f||!n.tagName?null:n;if(f||h){var m=e.pageYOffset;l.selectorHeader&&!r&&(r=document.querySelector(l.selectorHeader)),a||(a=w(r));var p,A,N=f?n:g(h,a,parseInt("function"==typeof l.offset?l.offset():l.offset,10)),L=N-m,z=y(),S=0,C=function(t,r,a){var o=e.pageYOffset;(t==r||o==r||e.innerHeight+o>=z)&&(clearInterval(a),E(n,r,f),l.after(n,i))},M=function(){S+=16,p=S/parseInt(l.speed,10),p=p>1?1:p,A=m+L*v(l,p),e.scrollTo(0,Math.floor(A)),C(A,N,s)};0===e.pageYOffset&&e.scrollTo(0,0),l.before(n,i),function(){clearInterval(s),s=setInterval(M,16)}()}};var A=function(t){try{m(decodeURIComponent(e.location.hash))}catch(t){m(e.location.hash)}n&&(n.id=n.getAttribute("data-scroll-id"),u.animateScroll(n,i),n=null,i=null)},N=function(r){if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(i=h(r.target,t.selector))&&"a"===i.tagName.toLowerCase()&&!h(r.target,t.ignore)&&i.hostname===e.location.hostname&&i.pathname===e.location.pathname&&/#/.test(i.href)){var a;try{a=m(decodeURIComponent(i.hash))}catch(e){a=m(i.hash)}if("#"===a){r.preventDefault(),n=document.body;var o=n.id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",o),n.id="",void(e.location.hash.substring(1)===o?A():e.location.hash=o)}(n=document.querySelector(a))&&(n.setAttribute("data-scroll-id",n.id),n.id="",i.hash===e.location.hash&&(r.preventDefault(),A()))}},L=function(e){o||(o=setTimeout(function(){o=null,a=w(r)},66))};return u.destroy=function(){t&&(document.removeEventListener("click",N,!1),e.removeEventListener("resize",L,!1),t=null,n=null,i=null,r=null,a=null,o=null,s=null)},u.init=function(n){l&&(u.destroy(),t=d(c,n||{}),r=t.selectorHeader?document.querySelector(t.selectorHeader):null,a=w(r),document.addEventListener("click",N,!1),e.addEventListener("hashchange",A,!1),r&&e.addEventListener("resize",L,!1))},u})}).call(t,n(22))},function(e,t){!function(e,t){function n(e,t){if(!(this instanceof n))throw new Error("Whoops!  Validatinator must be called with the new keyword!");this.validationInformation=void 0!==e?this.utils.convertFieldValidationsToArray(e):{},this.errors={},this.currentForm,this.currentField,this.validations.parent=this,this.messages.parent=this,this.validations.utils=this.utils,this.messages.utils=this.utils,void 0!==t&&this.messages.overwriteAndAddNewMessages(t)}n.prototype={fails:function(e){return!this.startValidations(e)},passes:function(e){return this.startValidations(e)},startValidations:function(e){var t,n,i,r;this.currentForm=e,this.errors={};for(var a in this.validationInformation[e])for(this.currentField=a,t=this.validationInformation[e][a],n=this.utils.getFieldsValue(this.currentForm,this.currentField),r=0;r<t.length;r++){var o,s=[];i=this.getValidationMethodAndParameters(t[r]),o=i[0],2===i.length&&(s=i[1]),this.callValidationMethodWithParameters(o,s,n)||(s.shift(),this.messages.addValidationErrorMessage(o,s))}return this.utils.isEmptyObject(this.errors)},getValidationMethodAndParameters:function(e){var t,n;return e.contains(":")?(t=e.split(":"),n=t.shift(),[n,this.prepareParameters(t)]):[e]},prepareParameters:function(e){for(var t=0,n=0;t<e.length;t++)if(e[t].contains(","))for(e[t]=e[t].split(",");n<e[t].length;n++)e[t][n]=this.utils.convertStringToBoolean(e[t][n].trim());else e[t]=this.utils.convertStringToBoolean(e[t].trim());return e},callValidationMethodWithParameters:function(e,t,n){if(!(e in this.validations))throw new Error("Validation does not exist: "+e);return t?(t.unshift(n),this.validations[e].apply(this.validations,t)):this.validations[e](n)}},"object"==typeof e&&"object"==typeof e.document&&(e.Validatinator=n),n.prototype.messages={validationMessages:{accepted:"This field must be accepted.",alpha:"This field only allows alpha characters.",alphaDash:"This field only allows alpha, dash and underscore characters.",alphaNum:"This field only allows alpha, dash, underscore and numerical characters.",between:"This field must be between {$0}",betweenLength:"This field must be between {$0} characters long.",confirmed:"This field must be the same as {$0}.",contains:"This field must be one of the following values, {$0}.",dateBefore:"This field must be a date before {$0}.",dateAfter:"This field must be a date after {$0}.",different:"This field must not be the same as {$0}.",digitsLength:"This field must be a numerical value and {$0} characters long.",digitsLengthBetween:"This field must be a numerical value and between {$0} characters long.",email:"This field only allows valid email addresses.",ipvFour:"This field only allows valid ipv4 addresses.",max:"This field must be equal to or less than {$0}.",maxLength:"This field must be {$0} or less characters long.",min:"This field must be equal to or more than {$0}.",minLength:"This field must be {$0} or more characters long.",notIn:"This field must not be contained within the following values, {$0}.",number:"This field only allows valid numerical values.",required:"This field is required.",requiredIf:"This field is required if the value of {$0} equals {$1}.",requiredIfNot:"This field is required if the value of {$0} does not equal {$1}.",same:"This field must be the same value as {$0}.",url:"This field only allows valid urls."},overwriteAndAddNewMessages:function(e){var t;for(t in e)this.validationMessages[t]=e[t]},addCurrentFormAndField:function(){this.parent.errors.hasOwnProperty(this.parent.currentForm)||(this.parent.errors[this.parent.currentForm]={}),this.parent.errors[this.parent.currentForm].hasOwnProperty(this.parent.currentField)||(this.parent.errors[this.parent.currentForm][this.parent.currentField]={})},addValidationErrorMessage:function(e,t){var n=this.parent.currentForm,i=this.parent.currentField,r=this.getValidationErrorMessage(e);this.addCurrentFormAndField(),t.length>0&&(r=this.replaceCurlyBracesWithValues(r,t)),this.parent.errors[n][i][e]=r},getValidationErrorMessage:function(e){var t,n=this.parent.currentForm,i=this.parent.currentField;try{t=this.validationMessages[n][i][e]}catch(e){}return t||(t=this.validationMessages[e]),t},replaceCurlyBracesWithValues:function(e,t){for(var n,i,r=0;r<t.length;r++)n=t[r],i="{$"+r+"}",(e.contains(i)||null!==n||void 0!==n)&&(e=this.utils.isValueAnArray(t[r])?e.split(i).join(this.utils.convertArrayValuesToEnglishString(n)):e.split(i).join(n));return e}},String.prototype.contains||(String.prototype.contains=function(e,t){return-1!==String.prototype.indexOf.call(this,e,t)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(void 0===this||null===this)throw new TypeError('"this" is null or not defined');var n=this.length>>>0;for(t=+t||0,Math.abs(t)===1/0&&(t=0),0>t&&0>(t+=n)&&(t=0);n>t;t++)if(this[t]===e)return t;return-1}),n.prototype.utils={convertFieldValidationsToArray:function(e){var t;for(var n in e)for(var i in e[n])t=e[n][i],e[n][i]=t.contains("|")?t.split("|"):[t];return e},convertStringToBoolean:function(e){return"string"!=typeof e?e:"false"!==e.toLowerCase()&&("true"===e.toLowerCase()||e)},convertArrayValuesToEnglishString:function(e){for(var t,n=0,i="";n<e.length;n++)t=n+1,i+=t===e.length?" and "+e[n]:0===n?e[n]:", "+e[n];return i},isValueFalsyInNature:function(e,t){return(void 0===t||null===t)&&(t=!0),void 0===e||null===e||""===e||(t?!e:!1===e)},isValueAnArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},getFieldsValue:function(e,t){var n,i,r,a=0;for(n=document.getElementsByName(t);a<n.length;a++)if(r=n[a],r.form&&r.form.name===e){if(-1!==["radio","checkbox"].indexOf(r.type)&&!i){if(r.checked){i=r.value;break}i="";continue}i=r.value;break}if(!i&&""!==i)throw new Error("Couldn't find the field element "+t+" for the form "+e+".");return i}},n.prototype.validations={accepted:function(e){return document.getElementsByName(this.parent.currentField)[0].checked},alpha:function(e){var t=/^[a-zA-Z]+$/;return!this.utils.isValueFalsyInNature(e)&&t.test(e)},alphaDash:function(e){var t=/^[a-zA-Z-_]+$/;return!this.utils.isValueFalsyInNature(e)&&t.test(e)},alphaNum:function(e){var t=/^[a-zA-Z-_0-9]+$/;return!this.utils.isValueFalsyInNature(e)&&t.test(e)},between:function(e,t){var n=Number(t[0]),i=Number(t[1]);if(isNaN(n)||isNaN(i))throw new Error("min and max must both be numbers in the `between` validation.");return e>=n&&i>=e},betweenLength:function(e,t){var n=Number(t[0]),i=Number(t[1]),r=String(e).length;if(isNaN(n)||isNaN(i))throw new Error("min and max must both be numbers in the `betweenLength` validation.");return r>=n&&i>=r},contains:function(e,t){return-1!==t.indexOf(e)},dateBefore:function(e,t){return Date.parse(e)<Date.parse(t)},dateAfter:function(e,t){return!this.dateBefore(e,t)},different:function(e,t,n){return!this.same(e,t,n)},digitsLength:function(e,t){var n=String(e).length,t=Number(t);if(isNaN(t))throw new Error("length must be of numerical value in the `digitsLength` validation.");return!!this.number(e)&&n===t},digitsLengthBetween:function(e,t){var n=Number(t[0]),i=Number(t[1]),r=String(e).length;if(isNaN(n)||isNaN(i))throw new Error("minLength and maxLength must both be numerical values in the `digitsLengthBetween` validation.");return!!this.number(e)&&(r>=n&&i>=r)},email:function(e){return/[^\s@]+@[^\s@]+\.[^\s@]+/.test(e)},ipvFour:function(e){var t,n=255;return null!==(t=e.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/))&&t[1]<=n&&t[2]<=n&&t[3]<=n&&t[4]<=n},max:function(e,t){if(t=Number(t),isNaN(t))throw new Error("max must be of numerical value in the `max` validation.");return this.between(e,[-1/0,t])},maxLength:function(e,t){if(t=Number(t),isNaN(t))throw new Error("max must be a numerical value in the `max` validation.");return this.betweenLength(e,[-1/0,t])},min:function(e,t){if(t=Number(t),isNaN(t))throw new Error("min must be of numerical value in the `min` validation.");return this.between(e,[t,1/0])},minLength:function(e,t){if(t=Number(t),isNaN(t))throw new Error("min must be a numerical value in the `minLength` validation.");return this.betweenLength(e,[t,1/0])},notIn:function(e,t){return!this.contains(e,t)},number:function(e){return null!==e&&void 0!==e&&(e=Number(e),!isNaN(e))},required:function(e){return!this.utils.isValueFalsyInNature(e,!1)},_required_if:function(e,t,n,i){var r=this.utils.getFieldsValue(this.parent.currentForm,t);return!(i&&r!==n||!i&&r===n)||this.required(e)},requiredIf:function(e,t,n){return this._required_if(e,t,n,!1)},requiredIfNot:function(e,t,n){return this._required_if(e,t,n,!0)},same:function(e,t,n){var i=this.utils.getFieldsValue(this.parent.currentForm,t);return(void 0===n||null===n)&&(n=!0),e=String(e),i=String(i),n?e===i:e.toLowerCase()===i.toLowerCase()},url:function(e){return/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(e)}}}(window)},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){function i(e){return n(r(e))}function r(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./michaelpumo-2017.pdf":16};i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=23},,,function(e,t,n){n(1),e.exports=n(3)}],[26]);
//# sourceMappingURL=app.main.map