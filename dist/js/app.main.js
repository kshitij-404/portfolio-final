webpackJsonp([0],[function(e,t,n){"use strict";function i(e){if("loading"!==document.readyState)return void e();document.addEventListener("DOMContentLoaded",e)}function r(e,t){return Math.floor(Math.random()*(t-e+1))+e}function a(e,t,n){return(e-t)/(n-t)}function o(e){return e*(Math.PI/180)}function s(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}Object.defineProperty(t,"__esModule",{value:!0}),t.domReady=i,t.randNumber=r,t.normalizeNumber=a,t.degToRad=o,t.isElementInViewport=s},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(0),a=n(3),o=i(a),s=n(6),u=i(s),l=n(4),d=i(l),c=n(7),f=i(c),h=n(5),m=i(h),v=n(10),g=i(v),p=n(9),w=i(p);n(11),n(19);var y={init:function(){(0,o.default)(),(0,u.default)(),(0,d.default)(),(0,f.default)(),(0,m.default)(),(0,g.default)(),(0,w.default)("#pattern-cover",!1,!0),(0,w.default)("#pattern-reference","cyan"),(0,w.default)("#pattern-availability","yellow"),(0,w.default)("#pattern-resume","purple")}};(0,r.domReady)(y.init)},function(e,t){},function(e,t,n){"use strict";function i(){window.addEventListener("load",function(){window.setTimeout(function(){document.querySelector("html").classList.remove("is-loading")},1e3)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(e.classList.remove("is-loading"),t&&t.hasOwnProperty("success"))return(0,f.default)("Message successfully sent","Thanks and I'll be in touch soon","🚀"),void e.reset();(0,f.default)("Error","Something went wrong. Try again!","🙈")}function a(e,t){e.classList.remove("is-loading"),(0,f.default)("Error",""+t.toString(),"🙈")}function o(e){var t=e.getAttribute("action"),n=e.querySelector("#form-name"),i=e.querySelector("#form-email"),r=e.querySelector("#form-message");return fetch(t,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:n.value,email:i.value,message:r.value})})}function s(e){return(0,d.default)(e).isValid}function u(){var e=document.querySelector("#form");e.addEventListener("submit",function(t){t.preventDefault(),s(e)&&(e.classList.add("is-loading"),o(e).then(function(e){return e.json()}).then(function(t){return r(e,t)}).catch(function(t){return a(e,t)}))}),e.addEventListener("keyup",function(){e.classList.contains("has-error-history")&&s(e)})}Object.defineProperty(t,"__esModule",{value:!0});var l=n(12),d=i(l),c=n(8),f=i(c);t.default=u},function(e,t,n){"use strict";function i(){o&&Array.from(o).forEach(function(e){(0,a.isElementInViewport)(e)&&e.classList.add("is-inview")})}function r(){var e=document.querySelectorAll("[data-inview]");e&&(o=e,i())}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=void 0;window.addEventListener("scroll",function(){i()}),t.default=r},function(e,t,n){"use strict";function i(){a.default.cfg.loadMode=1,a.default.cfg.expand=500}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=i},function(e,t,n){"use strict";function i(){document.querySelector("html").classList.toggle("has-navigation")}function r(){var e=document.querySelector("#navigation-activate");e&&e.addEventListener("click",function(){i()})}function a(e,t,n,i){return 0===e?t:e===i?t+n:(e/=i/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(2-Math.pow(2,-10*--e))+t}function o(e){var t=document.querySelector("html");(0,d.default)(e,{duration:500,easing:a,callback:function(){t.classList.contains("has-navigation")&&i()}})}function s(){var e=document.querySelectorAll("[data-scroll]");Array.from(e).forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),o(e.getAttribute("href"))})})}function u(){r(),s()}Object.defineProperty(t,"__esModule",{value:!0});var l=n(16),d=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=u},function(e,t,n){"use strict";function i(e){var t=document.querySelector("html");window.document.body.insertAdjacentHTML("afterbegin",e),window.setTimeout(function(){var e=document.querySelectorAll(".c-notification");t.classList.add("has-notification"),Array.from(e).forEach(function(e){e.addEventListener("click",function(){t.classList.remove("has-notification"),window.setTimeout(function(){e.parentNode.removeChild(e)},500)})})},500)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i('\n    <div class="c-notification is-theme-grey-light">\n      <div class="c-notification__dialog">\n        <p class="c-notification__emoji">'+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"🚀")+'</p>\n        <h3 class="c-notification__heading">'+e+'</h3>\n        <p class="c-notification__message">'+t+"</p>\n      </div>\n    </div>\n  ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function i(){function e(e){var t=e.width/2+e.x,n=e.height/2+e.y;c.save(),c.translate(t,n),c.scale(e.scale,e.scale),c.rotate((0,r.degToRad)(e.rotate)),c.fillStyle=e.colour,c.fillRect(-Math.abs(e.width/2),-Math.abs(e.height/2),e.width,e.height),c.restore()}function t(e,t){var n=e.scale/4,i=e.scale/4;e.rotate=t%2?e.rotate+=i:e.rotate-=i,e.y>d.height?(e.y=-Math.abs(e.height),e.x=(0,r.randNumber)(0,d.width)):e.y=e.y+=n}function n(){c.clearRect(0,0,d.width,d.height),h.forEach(function(n,i){e(n),t(n,i)}),l&&(m=window.requestAnimationFrame(n))}function i(){for(var e=0;e<f.items();e+=1){var t={width:f.width,height:f.height,x:(0,r.randNumber)(-Math.abs(f.width),window.innerWidth),y:(0,r.randNumber)(-Math.abs(f.height),window.innerHeight),colour:u?f.colours.find(function(e){return e.name===u}).value:f.colours[(0,r.randNumber)(0,f.colours.length-1)].value,scale:e%15?(0,r.normalizeNumber)((0,r.randNumber)(1,10),0,10):1.5,rotate:(0,r.randNumber)(0,360),xSpeed:(0,r.randNumber)(0,2)};h.push(t)}n()}function a(){d.setAttribute("width",window.innerWidth),d.setAttribute("height",window.innerHeight),d.width=window.innerWidth,d.height=window.innerHeight,n()}var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"canvas",u=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=document.querySelector(s),c=d.getContext("2d"),f={items:function(){return window.innerWidth*window.innerHeight/(window.innerWidth/.09)},width:6,height:80,colours:o.default.colors},h=[],m=null;window.addEventListener("resize",function(){window.cancelAnimationFrame(m),a()}),function(){a(),i()}()}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(13),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=i},function(e,t,n){"use strict";function i(){var e=window.pageYOffset||document.documentElement.scrollTop;return e=e<0?0:e}function r(){var e=i();e>o&&o>1?(a.classList.remove("is-scrolling-up"),a.classList.add("is-scrolling-down")):(a.classList.remove("is-scrolling-down"),a.classList.add("is-scrolling-up")),window.pageYOffset>0?a.classList.add("has-scrolled-down"):a.classList.remove("has-scrolled-down"),o=window.innerHeight+window.pageYOffset>=document.body.offsetHeight?o:e}Object.defineProperty(t,"__esModule",{value:!0});var a=document.querySelector("html"),o=0;window.addEventListener("scroll",function(){r()}),t.default=r},function(e,t,n){"use strict";n(15)},function(e,t,n){"use strict";function i(e){var t=new window.Validatinator({"contact-form":{fullname:"required",email:"required|email",message:"required"}},{"contact-form":{fullname:{required:"Name is required."},email:{required:"Email address is required.",email:"Email must be in a valid format."},message:{required:"Message is required."}}}),n=e.getAttribute("name"),i=e.querySelectorAll("[name]");if(Array.from(i).forEach(function(e){return e.classList.remove("has-error")}),t.fails(n)){var r=t.errors[n];for(var a in r)if(r.hasOwnProperty(a)){var o=r[a],s="[name='"+a+"']",u=e.querySelector(s);for(var l in o)o.hasOwnProperty(l)&&(u.classList.add("has-error"),e.classList.add("has-error-history"))}return{isValid:!1,errors:r}}return{isValid:!0,errors:{}}}Object.defineProperty(t,"__esModule",{value:!0}),n(18),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={speed:500,easing:"easeInOutExpo",colors:[{name:"red",value:"#DF6C74"},{name:"green",value:"#99C46D"},{name:"yellow",value:"#ecce79"},{name:"blue",value:"#63ADF5"},{name:"cyan",value:"#59B6C4"},{name:"orange",value:"#D09B5C"},{name:"purple",value:"#C575E4"},{name:"slate",value:"#5F697F"}]};t.default=i},function(e,t){e.exports="./dist/files/michaelpumo-2017.pdf"},function(e,t){e.exports="./dist/images/mark.svg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t,n,i){return(e/=i/2)<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(){return window.scrollY||window.pageYOffset}function t(e){return e.getBoundingClientRect().top+u}function n(e){v||(v=e),g=e-v,p=c(g,u,h,m),window.scrollTo(0,p),g<m?window.requestAnimationFrame(n):a()}function a(){window.scrollTo(0,u+h),s&&f&&(s.setAttribute("tabindex","-1"),s.focus()),"function"==typeof w&&w(),v=!1}function o(a){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(m=o.duration||1e3,d=o.offset||0,w=o.callback,c=o.easing||i,f=o.a11y||!1,u=e(),void 0===a?"undefined":r(a)){case"number":s=void 0,f=!1,l=u+a;break;case"object":s=a,l=t(s);break;case"string":s=document.querySelector(a),l=t(s)}switch(h=l-u+d,r(o.duration)){case"number":m=o.duration;break;case"function":m=o.duration(h)}window.requestAnimationFrame(n)}var s=void 0,u=void 0,l=void 0,d=void 0,c=void 0,f=void 0,h=void 0,m=void 0,v=void 0,g=void 0,p=void 0,w=void 0;return o}();t.default=a},function(e,t){!function(t,n){var i=function(e,t){"use strict";if(t.getElementsByClassName){var n,i=t.documentElement,r=e.Date,a=e.HTMLPictureElement,o=e.addEventListener,s=e.setTimeout,u=e.requestAnimationFrame||s,l=e.requestIdleCallback,d=/^picture$/i,c=["load","error","lazyincluded","_lazyloaded"],f={},h=Array.prototype.forEach,m=function(e,t){return f[t]||(f[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),f[t].test(e.getAttribute("class")||"")&&f[t]},v=function(e,t){m(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=m(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},p=function(e,t,n){var i=n?"addEventListener":"removeEventListener";n&&p(e,t),c.forEach(function(n){e[i](n,t)})},w=function(e,n,i,r,a){var o=t.createEvent("CustomEvent");return o.initCustomEvent(n,!r,!a,i||{}),e.dispatchEvent(o),o},y=function(t,i){var r;!a&&(r=e.picturefill||n.pf)?r({reevaluate:!0,elements:[t]}):i&&i.src&&(t.src=i.src)},b=function(e,t){return(getComputedStyle(e,null)||{})[t]},A=function(e,t,i){for(i=i||e.offsetWidth;i<n.minSize&&t&&!e._lazysizesWidth;)i=t.offsetWidth,t=t.parentNode;return i},N=function(){var e,n,i=[],r=[],a=i,o=function(){var t=a;for(a=i.length?r:i,e=!0,n=!1;t.length;)t.shift()();e=!1},l=function(i,r){e&&!r?i.apply(this,arguments):(a.push(i),n||(n=!0,(t.hidden?s:u)(o)))};return l._lsFlush=o,l}(),E=function(e,t){return t?function(){N(e)}:function(){var t=this,n=arguments;N(function(){e.apply(t,n)})}},L=function(e){var t,n=0,i=666,a=function(){t=!1,n=r.now(),e()},o=l?function(){l(a,{timeout:i}),666!==i&&(i=666)}:E(function(){s(a)},!0);return function(e){var a;(e=!0===e)&&(i=44),t||(t=!0,a=125-(r.now()-n),a<0&&(a=0),e||a<9&&l?o():s(o,a))}},_=function(e){var t,n,i=function(){t=null,e()},a=function(){var e=r.now()-n;e<99?s(a,99-e):(l||i)(i)};return function(){n=r.now(),t||(t=s(a,99))}},M=function(){var a,u,l,c,f,A,M,C,F,T,S,q,x,O,V,$=/^img$/i,P=/^iframe$/i,j="onscroll"in e&&!/glebot/.test(navigator.userAgent),k=0,B=0,W=-1,I=function(e){B--,e&&e.target&&p(e.target,I),(!e||B<0||!e.target)&&(B=0)},D=function(e,n){var r,a=e,o="hidden"==b(t.body,"visibility")||"hidden"!=b(e,"visibility");for(F-=n,q+=n,T-=n,S+=n;o&&(a=a.offsetParent)&&a!=t.body&&a!=i;)(o=(b(a,"opacity")||1)>0)&&"visible"!=b(a,"overflow")&&(r=a.getBoundingClientRect(),o=S>r.left&&T<r.right&&q>r.top-1&&F<r.bottom+1);return o},R=function(){var e,r,o,s,d,c,h,m,v;if((f=n.loadMode)&&B<8&&(e=a.length)){r=0,W++,null==O&&("expand"in n||(n.expand=i.clientHeight>500&&i.clientWidth>500?500:370),x=n.expand,O=x*n.expFactor),k<O&&B<1&&W>2&&f>2&&!t.hidden?(k=O,W=0):k=f>1&&W>1&&B<6?x:0;for(;r<e;r++)if(a[r]&&!a[r]._lazyRace)if(j)if((m=a[r].getAttribute("data-expand"))&&(c=1*m)||(c=k),v!==c&&(M=innerWidth+c*V,C=innerHeight+c,h=-1*c,v=c),o=a[r].getBoundingClientRect(),(q=o.bottom)>=h&&(F=o.top)<=C&&(S=o.right)>=h*V&&(T=o.left)<=M&&(q||S||T||F)&&(l&&B<3&&!m&&(f<3||W<4)||D(a[r],c))){if(U(a[r]),d=!0,B>9)break}else!d&&l&&!s&&B<4&&W<4&&f>2&&(u[0]||n.preloadAfterLoad)&&(u[0]||!m&&(q||S||T||F||"auto"!=a[r].getAttribute(n.sizesAttr)))&&(s=u[0]||a[r]);else U(a[r]);s&&!d&&U(s)}},H=L(R),Y=function(e){v(e.target,n.loadedClass),g(e.target,n.loadingClass),p(e.target,J)},Z=E(Y),J=function(e){Z({target:e.target})},G=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},K=function(e){var t,i,r=e.getAttribute(n.srcsetAttr);(t=n.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),r&&e.setAttribute("srcset",r),t&&(i=e.parentNode,i.insertBefore(e.cloneNode(),e),i.removeChild(e))},Q=E(function(e,t,i,r,a){var o,u,l,f,m,b;(m=w(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(i?v(e,n.autosizesClass):e.setAttribute("sizes",r)),u=e.getAttribute(n.srcsetAttr),o=e.getAttribute(n.srcAttr),a&&(l=e.parentNode,f=l&&d.test(l.nodeName||"")),b=t.firesLoad||"src"in e&&(u||o||f),m={target:e},b&&(p(e,I,!0),clearTimeout(c),c=s(I,2500),v(e,n.loadingClass),p(e,J,!0)),f&&h.call(l.getElementsByTagName("source"),K),u?e.setAttribute("srcset",u):o&&!f&&(P.test(e.nodeName)?G(e,o):e.src=o),(u||f)&&y(e,{src:o})),e._lazyRace&&delete e._lazyRace,g(e,n.lazyClass),N(function(){(!b||e.complete&&e.naturalWidth>1)&&(b?I(m):B--,Y(m))},!0)}),U=function(e){var t,i=$.test(e.nodeName),r=i&&(e.getAttribute(n.sizesAttr)||e.getAttribute("sizes")),a="auto"==r;(!a&&l||!i||!e.src&&!e.srcset||e.complete||m(e,n.errorClass))&&(t=w(e,"lazyunveilread").detail,a&&z.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,B++,Q(e,t,a,r,i))},X=function(){if(!l){if(r.now()-A<999)return void s(X,999);var e=_(function(){n.loadMode=3,H()});l=!0,n.loadMode=3,H(),o("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){A=r.now(),a=t.getElementsByClassName(n.lazyClass),u=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),V=n.hFac,o("scroll",H,!0),o("resize",H,!0),e.MutationObserver?new MutationObserver(H).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",H,!0),i.addEventListener("DOMAttrModified",H,!0),setInterval(H,999)),o("hashchange",H,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,H,!0)}),/d$|^c/.test(t.readyState)?X():(o("load",X),t.addEventListener("DOMContentLoaded",H),s(X,2e4)),a.length?(R(),N._lsFlush()):H()},checkElems:H,unveil:U}}(),z=function(){var e,i=E(function(e,t,n,i){var r,a,o;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),d.test(t.nodeName||""))for(r=t.getElementsByTagName("source"),a=0,o=r.length;a<o;a++)r[a].setAttribute("sizes",i);n.detail.dataAttr||y(e,n.detail)}),r=function(e,t,n){var r,a=e.parentNode;a&&(n=A(e,a,n),r=w(e,"lazybeforesizes",{width:n,dataAttr:!!t}),r.defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&i(e,a,r,n))},a=function(){var t,n=e.length;if(n)for(t=0;t<n;t++)r(e[t])},s=_(a);return{_:function(){e=t.getElementsByClassName(n.autosizesClass),o("resize",s)},checkElems:s,updateElem:r}}(),C=function(){C.i||(C.i=!0,z._(),M._())};return function(){var t,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in i)t in n||(n[t]=i[t]);e.lazySizesConfig=n,s(function(){n.init&&C()})}(),{cfg:n,autoSizer:z,loader:M,init:C,uP:y,aC:v,rC:g,hC:m,fire:w,gW:A,rAF:N}}}(t,t.document);t.lazySizes=i,"object"==typeof e&&e.exports&&(e.exports=i)}(window)},function(e,t){!function(e,t){function n(e,t){if(!(this instanceof n))throw new Error("Whoops!  Validatinator must be called with the new keyword!");this.validationInformation=void 0!==e?this.utils.convertFieldValidationsToArray(e):{},this.errors={},this.currentForm,this.currentField,this.validations.parent=this,this.messages.parent=this,this.validations.utils=this.utils,this.messages.utils=this.utils,void 0!==t&&this.messages.overwriteAndAddNewMessages(t)}n.prototype={fails:function(e){return!this.startValidations(e)},passes:function(e){return this.startValidations(e)},startValidations:function(e){var t,n,i,r;this.currentForm=e,this.errors={};for(var a in this.validationInformation[e])for(this.currentField=a,t=this.validationInformation[e][a],n=this.utils.getFieldsValue(this.currentForm,this.currentField),r=0;r<t.length;r++){var o,s=[];i=this.getValidationMethodAndParameters(t[r]),o=i[0],2===i.length&&(s=i[1]),this.callValidationMethodWithParameters(o,s,n)||(s.shift(),this.messages.addValidationErrorMessage(o,s))}return this.utils.isEmptyObject(this.errors)},getValidationMethodAndParameters:function(e){var t,n;return e.contains(":")?(t=e.split(":"),n=t.shift(),[n,this.prepareParameters(t)]):[e]},prepareParameters:function(e){for(var t=0,n=0;t<e.length;t++)if(e[t].contains(","))for(e[t]=e[t].split(",");n<e[t].length;n++)e[t][n]=this.utils.convertStringToBoolean(e[t][n].trim());else e[t]=this.utils.convertStringToBoolean(e[t].trim());return e},callValidationMethodWithParameters:function(e,t,n){if(!(e in this.validations))throw new Error("Validation does not exist: "+e);return t?(t.unshift(n),this.validations[e].apply(this.validations,t)):this.validations[e](n)}},"object"==typeof e&&"object"==typeof e.document&&(e.Validatinator=n),n.prototype.messages={validationMessages:{accepted:"This field must be accepted.",alpha:"This field only allows alpha characters.",alphaDash:"This field only allows alpha, dash and underscore characters.",alphaNum:"This field only allows alpha, dash, underscore and numerical characters.",between:"This field must be between {$0}",betweenLength:"This field must be between {$0} characters long.",confirmed:"This field must be the same as {$0}.",contains:"This field must be one of the following values, {$0}.",dateBefore:"This field must be a date before {$0}.",dateAfter:"This field must be a date after {$0}.",different:"This field must not be the same as {$0}.",digitsLength:"This field must be a numerical value and {$0} characters long.",digitsLengthBetween:"This field must be a numerical value and between {$0} characters long.",email:"This field only allows valid email addresses.",ipvFour:"This field only allows valid ipv4 addresses.",max:"This field must be equal to or less than {$0}.",maxLength:"This field must be {$0} or less characters long.",min:"This field must be equal to or more than {$0}.",minLength:"This field must be {$0} or more characters long.",notIn:"This field must not be contained within the following values, {$0}.",number:"This field only allows valid numerical values.",required:"This field is required.",requiredIf:"This field is required if the value of {$0} equals {$1}.",requiredIfNot:"This field is required if the value of {$0} does not equal {$1}.",same:"This field must be the same value as {$0}.",url:"This field only allows valid urls."},overwriteAndAddNewMessages:function(e){var t;for(t in e)this.validationMessages[t]=e[t]},addCurrentFormAndField:function(){this.parent.errors.hasOwnProperty(this.parent.currentForm)||(this.parent.errors[this.parent.currentForm]={}),this.parent.errors[this.parent.currentForm].hasOwnProperty(this.parent.currentField)||(this.parent.errors[this.parent.currentForm][this.parent.currentField]={})},addValidationErrorMessage:function(e,t){var n=this.parent.currentForm,i=this.parent.currentField,r=this.getValidationErrorMessage(e);this.addCurrentFormAndField(),t.length>0&&(r=this.replaceCurlyBracesWithValues(r,t)),this.parent.errors[n][i][e]=r},getValidationErrorMessage:function(e){var t,n=this.parent.currentForm,i=this.parent.currentField;try{t=this.validationMessages[n][i][e]}catch(e){}return t||(t=this.validationMessages[e]),t},replaceCurlyBracesWithValues:function(e,t){for(var n,i,r=0;r<t.length;r++)n=t[r],i="{$"+r+"}",(e.contains(i)||null!==n||void 0!==n)&&(e=this.utils.isValueAnArray(t[r])?e.split(i).join(this.utils.convertArrayValuesToEnglishString(n)):e.split(i).join(n));return e}},String.prototype.contains||(String.prototype.contains=function(e,t){return-1!==String.prototype.indexOf.call(this,e,t)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(void 0===this||null===this)throw new TypeError('"this" is null or not defined');var n=this.length>>>0;for(t=+t||0,Math.abs(t)===1/0&&(t=0),0>t&&0>(t+=n)&&(t=0);n>t;t++)if(this[t]===e)return t;return-1}),n.prototype.utils={convertFieldValidationsToArray:function(e){var t;for(var n in e)for(var i in e[n])t=e[n][i],e[n][i]=t.contains("|")?t.split("|"):[t];return e},convertStringToBoolean:function(e){return"string"!=typeof e?e:"false"!==e.toLowerCase()&&("true"===e.toLowerCase()||e)},convertArrayValuesToEnglishString:function(e){for(var t,n=0,i="";n<e.length;n++)t=n+1,i+=t===e.length?" and "+e[n]:0===n?e[n]:", "+e[n];return i},isValueFalsyInNature:function(e,t){return(void 0===t||null===t)&&(t=!0),void 0===e||null===e||""===e||(t?!e:!1===e)},isValueAnArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},getFieldsValue:function(e,t){var n,i,r,a=0;for(n=document.getElementsByName(t);a<n.length;a++)if(r=n[a],r.form&&r.form.name===e){if(-1!==["radio","checkbox"].indexOf(r.type)&&!i){if(r.checked){i=r.value;break}i="";continue}i=r.value;break}if(!i&&""!==i)throw new Error("Couldn't find the field element "+t+" for the form "+e+".");return i}},n.prototype.validations={accepted:function(e){return document.getElementsByName(this.parent.currentField)[0].checked},alpha:function(e){var t=/^[a-zA-Z]+$/;return!this.utils.isValueFalsyInNature(e)&&t.test(e)},alphaDash:function(e){var t=/^[a-zA-Z-_]+$/;return!this.utils.isValueFalsyInNature(e)&&t.test(e)},alphaNum:function(e){var t=/^[a-zA-Z-_0-9]+$/;return!this.utils.isValueFalsyInNature(e)&&t.test(e)},between:function(e,t){var n=Number(t[0]),i=Number(t[1]);if(isNaN(n)||isNaN(i))throw new Error("min and max must both be numbers in the `between` validation.");return e>=n&&i>=e},betweenLength:function(e,t){var n=Number(t[0]),i=Number(t[1]),r=String(e).length;if(isNaN(n)||isNaN(i))throw new Error("min and max must both be numbers in the `betweenLength` validation.");return r>=n&&i>=r},contains:function(e,t){return-1!==t.indexOf(e)},dateBefore:function(e,t){return Date.parse(e)<Date.parse(t)},dateAfter:function(e,t){return!this.dateBefore(e,t)},different:function(e,t,n){return!this.same(e,t,n)},digitsLength:function(e,t){var n=String(e).length,t=Number(t);if(isNaN(t))throw new Error("length must be of numerical value in the `digitsLength` validation.");return!!this.number(e)&&n===t},digitsLengthBetween:function(e,t){var n=Number(t[0]),i=Number(t[1]),r=String(e).length;if(isNaN(n)||isNaN(i))throw new Error("minLength and maxLength must both be numerical values in the `digitsLengthBetween` validation.");return!!this.number(e)&&(r>=n&&i>=r)},email:function(e){return/[^\s@]+@[^\s@]+\.[^\s@]+/.test(e)},ipvFour:function(e){var t,n=255;return null!==(t=e.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/))&&t[1]<=n&&t[2]<=n&&t[3]<=n&&t[4]<=n},max:function(e,t){if(t=Number(t),isNaN(t))throw new Error("max must be of numerical value in the `max` validation.");return this.between(e,[-1/0,t])},maxLength:function(e,t){if(t=Number(t),isNaN(t))throw new Error("max must be a numerical value in the `max` validation.");return this.betweenLength(e,[-1/0,t])},min:function(e,t){if(t=Number(t),isNaN(t))throw new Error("min must be of numerical value in the `min` validation.");return this.between(e,[t,1/0])},minLength:function(e,t){if(t=Number(t),isNaN(t))throw new Error("min must be a numerical value in the `minLength` validation.");return this.betweenLength(e,[t,1/0])},notIn:function(e,t){return!this.contains(e,t)},number:function(e){return null!==e&&void 0!==e&&(e=Number(e),!isNaN(e))},required:function(e){return!this.utils.isValueFalsyInNature(e,!1)},_required_if:function(e,t,n,i){var r=this.utils.getFieldsValue(this.parent.currentForm,t);return!(i&&r!==n||!i&&r===n)||this.required(e)},requiredIf:function(e,t,n){return this._required_if(e,t,n,!1)},requiredIfNot:function(e,t,n){return this._required_if(e,t,n,!0)},same:function(e,t,n){var i=this.utils.getFieldsValue(this.parent.currentForm,t);return(void 0===n||null===n)&&(n=!0),e=String(e),i=String(i),n?e===i:e.toLowerCase()===i.toLowerCase()},url:function(e){return/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(e)}}}(window)},function(e,t,n){function i(e){return n(r(e))}function r(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./michaelpumo-2017.pdf":14};i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=19},function(e,t,n){n(1),e.exports=n(2)}],[20]);
//# sourceMappingURL=app.main.map