import{c as se,g as ue}from"./_commonjsHelpers-Cpj98o6Y.js";import{_ as ce}from"./logo-CyTPLdG_.js";import{p as de,y as le,q as fe,z as me,U as pe,A as be,s as ve,B as ge,v as ye,I as he,C as we,D as ae,E as ke,G as xe,H as _e,K as je,bE as Oe,c as Q,Y as Se,x as Me,d as oe,O as Ee,S as ze,at as Ae,o as te,g as re,w as Te,n as C,M as Ne,b as Pe,F as qe,f as Le,V as Ce,l as De,t as He}from"./index-fW4Q9JnC.js";import{V as Be}from"./VDivider-fJtA7CSD.js";const Ve=de({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...le(),...fe(),...me(),...pe(),...be(),...ve({tag:"footer"}),...ge()},"VFooter"),$e=ye()({name:"VFooter",props:Ve(),setup(y,Z){let{slots:h}=Z;const{themeClasses:u}=he(y),{backgroundColorClasses:a,backgroundColorStyles:t}=we(ae(y,"color")),{borderClasses:s}=ke(y),{elevationClasses:b}=xe(y),{roundedClasses:w}=_e(y),n=je(32),{resizeRef:f}=Oe(m=>{m.length&&(n.value=m[0].target.clientHeight)}),i=Q(()=>y.height==="auto"?n.value:parseInt(y.height,10)),{layoutItemStyles:d,layoutIsReady:c}=Se({id:y.name,order:Q(()=>parseInt(y.order,10)),position:Q(()=>"bottom"),layoutSize:i,elementSize:Q(()=>y.height==="auto"?void 0:i.value),active:Q(()=>y.app),absolute:ae(y,"absolute")});return Me(()=>oe(y.tag,{ref:f,class:["v-footer",u.value,a.value,s.value,b.value,w.value,y.class],style:[t.value,y.app?d.value:{height:Ee(y.height)},y.style]},h)),y.app?c:{}}});var ie={exports:{}};(function(y,Z){(function(h,u){y.exports=u()})(se,function(){return function(h){function u(t){if(a[t])return a[t].exports;var s=a[t]={exports:{},id:t,loaded:!1};return h[t].call(s.exports,s,s.exports,u),s.loaded=!0,s.exports}var a={};return u.m=h,u.c=a,u.p="dist/",u(0)}([function(h,u,a){function t(r){return r&&r.__esModule?r:{default:r}}var s=Object.assign||function(r){for(var _=1;_<arguments.length;_++){var T=arguments[_];for(var H in T)Object.prototype.hasOwnProperty.call(T,H)&&(r[H]=T[H])}return r},b=a(1),w=(t(b),a(6)),n=t(w),f=a(7),i=t(f),d=a(8),c=t(d),m=a(9),j=t(m),S=a(10),R=t(S),G=a(11),K=t(G),U=a(14),W=t(U),M=[],Y=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(r&&(Y=!0),Y)return M=(0,K.default)(M,v),(0,R.default)(M,v.once),M},D=function(){M=(0,W.default)(),A()},o=function(){M.forEach(function(r,_){r.node.removeAttribute("data-aos"),r.node.removeAttribute("data-aos-easing"),r.node.removeAttribute("data-aos-duration"),r.node.removeAttribute("data-aos-delay")})},e=function(r){return r===!0||r==="mobile"&&j.default.mobile()||r==="phone"&&j.default.phone()||r==="tablet"&&j.default.tablet()||typeof r=="function"&&r()===!0},l=function(r){v=s(v,r),M=(0,W.default)();var _=document.all&&!window.atob;return e(v.disable)||_?o():(v.disableMutationObserver||c.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),v.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):v.startEvent==="load"?window.addEventListener(v.startEvent,function(){A(!0)}):document.addEventListener(v.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,i.default)(A,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,i.default)(A,v.debounceDelay,!0)),window.addEventListener("scroll",(0,n.default)(function(){(0,R.default)(M,v.once)},v.throttleDelay)),v.disableMutationObserver||c.default.ready("[data-aos]",D),M)};h.exports={init:l,refresh:A,refreshHard:D}},function(h,u){},,,,,function(h,u){(function(a){function t(e,l,r){function _(p){var O=z,$=P;return z=P=void 0,B=p,x=e.apply($,O)}function T(p){return B=p,k=setTimeout(I,l),V?_(p):x}function H(p){var O=p-E,$=p-B,ne=l-O;return L?D(ne,q-$):ne}function F(p){var O=p-E,$=p-B;return E===void 0||O>=l||O<0||L&&$>=q}function I(){var p=o();return F(p)?X(p):void(k=setTimeout(I,H(p)))}function X(p){return k=void 0,g&&z?_(p):(z=P=void 0,x)}function ee(){k!==void 0&&clearTimeout(k),B=0,z=E=P=k=void 0}function J(){return k===void 0?x:X(o())}function N(){var p=o(),O=F(p);if(z=arguments,P=this,E=p,O){if(k===void 0)return T(E);if(L)return k=setTimeout(I,l),_(E)}return k===void 0&&(k=setTimeout(I,l)),x}var z,P,q,x,k,E,B=0,V=!1,L=!1,g=!0;if(typeof e!="function")throw new TypeError(d);return l=f(l)||0,b(r)&&(V=!!r.leading,L="maxWait"in r,q=L?A(f(r.maxWait)||0,l):q,g="trailing"in r?!!r.trailing:g),N.cancel=ee,N.flush=J,N}function s(e,l,r){var _=!0,T=!0;if(typeof e!="function")throw new TypeError(d);return b(r)&&(_="leading"in r?!!r.leading:_,T="trailing"in r?!!r.trailing:T),t(e,l,{leading:_,maxWait:l,trailing:T})}function b(e){var l=typeof e>"u"?"undefined":i(e);return!!e&&(l=="object"||l=="function")}function w(e){return!!e&&(typeof e>"u"?"undefined":i(e))=="object"}function n(e){return(typeof e>"u"?"undefined":i(e))=="symbol"||w(e)&&v.call(e)==m}function f(e){if(typeof e=="number")return e;if(n(e))return c;if(b(e)){var l=typeof e.valueOf=="function"?e.valueOf():e;e=b(l)?l+"":l}if(typeof e!="string")return e===0?e:+e;e=e.replace(j,"");var r=R.test(e);return r||G.test(e)?K(e.slice(2),r?2:8):S.test(e)?c:+e}var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",c=NaN,m="[object Symbol]",j=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,G=/^0o[0-7]+$/i,K=parseInt,U=(typeof a>"u"?"undefined":i(a))=="object"&&a&&a.Object===Object&&a,W=(typeof self>"u"?"undefined":i(self))=="object"&&self&&self.Object===Object&&self,M=U||W||Function("return this")(),Y=Object.prototype,v=Y.toString,A=Math.max,D=Math.min,o=function(){return M.Date.now()};h.exports=s}).call(u,function(){return this}())},function(h,u){(function(a){function t(o,e,l){function r(g){var p=N,O=z;return N=z=void 0,E=g,q=o.apply(O,p)}function _(g){return E=g,x=setTimeout(F,e),B?r(g):q}function T(g){var p=g-k,O=g-E,$=e-p;return V?A($,P-O):$}function H(g){var p=g-k,O=g-E;return k===void 0||p>=e||p<0||V&&O>=P}function F(){var g=D();return H(g)?I(g):void(x=setTimeout(F,T(g)))}function I(g){return x=void 0,L&&N?r(g):(N=z=void 0,q)}function X(){x!==void 0&&clearTimeout(x),E=0,N=k=z=x=void 0}function ee(){return x===void 0?q:I(D())}function J(){var g=D(),p=H(g);if(N=arguments,z=this,k=g,p){if(x===void 0)return _(k);if(V)return x=setTimeout(F,e),r(k)}return x===void 0&&(x=setTimeout(F,e)),q}var N,z,P,q,x,k,E=0,B=!1,V=!1,L=!0;if(typeof o!="function")throw new TypeError(i);return e=n(e)||0,s(l)&&(B=!!l.leading,V="maxWait"in l,P=V?v(n(l.maxWait)||0,e):P,L="trailing"in l?!!l.trailing:L),J.cancel=X,J.flush=ee,J}function s(o){var e=typeof o>"u"?"undefined":f(o);return!!o&&(e=="object"||e=="function")}function b(o){return!!o&&(typeof o>"u"?"undefined":f(o))=="object"}function w(o){return(typeof o>"u"?"undefined":f(o))=="symbol"||b(o)&&Y.call(o)==c}function n(o){if(typeof o=="number")return o;if(w(o))return d;if(s(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=s(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=o.replace(m,"");var l=S.test(o);return l||R.test(o)?G(o.slice(2),l?2:8):j.test(o)?d:+o}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},i="Expected a function",d=NaN,c="[object Symbol]",m=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,R=/^0o[0-7]+$/i,G=parseInt,K=(typeof a>"u"?"undefined":f(a))=="object"&&a&&a.Object===Object&&a,U=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,W=K||U||Function("return this")(),M=Object.prototype,Y=M.toString,v=Math.max,A=Math.min,D=function(){return W.Date.now()};h.exports=t}).call(u,function(){return this}())},function(h,u){function a(f){var i=void 0,d=void 0;for(i=0;i<f.length;i+=1)if(d=f[i],d.dataset&&d.dataset.aos||d.children&&a(d.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!t()}function b(f,i){var d=window.document,c=t(),m=new c(w);n=i,m.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function w(f){f&&f.forEach(function(i){var d=Array.prototype.slice.call(i.addedNodes),c=Array.prototype.slice.call(i.removedNodes),m=d.concat(c);if(a(m))return n()})}Object.defineProperty(u,"__esModule",{value:!0});var n=function(){};u.default={isSupported:s,ready:b}},function(h,u){function a(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(u,"__esModule",{value:!0});var s=function(){function d(c,m){for(var j=0;j<m.length;j++){var S=m[j];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(c,S.key,S)}}return function(c,m,j){return m&&d(c.prototype,m),j&&d(c,j),c}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=function(){function d(){a(this,d)}return s(d,[{key:"phone",value:function(){var c=t();return!(!b.test(c)&&!w.test(c.substr(0,4)))}},{key:"mobile",value:function(){var c=t();return!(!n.test(c)&&!f.test(c.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();u.default=new i},function(h,u){Object.defineProperty(u,"__esModule",{value:!0});var a=function(s,b,w){var n=s.node.getAttribute("data-aos-once");b>s.position?s.node.classList.add("aos-animate"):typeof n<"u"&&(n==="false"||!w&&n!=="true")&&s.node.classList.remove("aos-animate")},t=function(s,b){var w=window.pageYOffset,n=window.innerHeight;s.forEach(function(f,i){a(f,n+w,b)})};u.default=t},function(h,u,a){function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(u,"__esModule",{value:!0});var s=a(12),b=t(s),w=function(n,f){return n.forEach(function(i,d){i.node.classList.add("aos-init"),i.position=(0,b.default)(i.node,f.offset)}),n};u.default=w},function(h,u,a){function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(u,"__esModule",{value:!0});var s=a(13),b=t(s),w=function(n,f){var i=0,d=0,c=window.innerHeight,m={offset:n.getAttribute("data-aos-offset"),anchor:n.getAttribute("data-aos-anchor"),anchorPlacement:n.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(d=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(n=document.querySelectorAll(m.anchor)[0]),i=(0,b.default)(n).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=n.offsetHeight/2;break;case"bottom-bottom":i+=n.offsetHeight;break;case"top-center":i+=c/2;break;case"bottom-center":i+=c/2+n.offsetHeight;break;case"center-center":i+=c/2+n.offsetHeight/2;break;case"top-top":i+=c;break;case"bottom-top":i+=n.offsetHeight+c;break;case"center-top":i+=n.offsetHeight/2+c}return m.anchorPlacement||m.offset||isNaN(f)||(d=f),i+d};u.default=w},function(h,u){Object.defineProperty(u,"__esModule",{value:!0});var a=function(t){for(var s=0,b=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)s+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),b+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:b,left:s}};u.default=a},function(h,u){Object.defineProperty(u,"__esModule",{value:!0});var a=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(s){return{node:s}})};u.default=a}])})})(ie);var Fe=ie.exports;const Ie=ue(Fe);ze(()=>{Ie.init({duration:1e3,easing:"ease-in-out",once:!0})});const Re={data:()=>({icons:["mdi-facebook","mdi-twitter","mdi-instagram"]})},We=C("div",{class:"py-8","data-aos":"fade-up"},[C("p",{class:"fttext"},"公司地址｜新北市三重區重新路2段42之7號3樓"),C("p",{class:"fttext"},"電子郵件｜startupfun0104@gmail.com"),C("p",{class:"fttext"},"聯絡時間｜週一 至 週日 10:00 – 19:00"),C("p",{class:"fttext"},"聯絡電話｜0936-157-532     統一編號｜94092832")],-1),Ye={class:"py-8","data-aos":"fade-up"},Ge=C("strong",null,"© All rights reserved by 創業趣 ",-1);function Ke(y,Z,h,u,a,t){return te(),re($e,{class:"text-center d-flex flex-column pt-16"},{default:Te(()=>[C("div",null,[oe(Ne,{width:200,cover:"",src:ce,"data-aos":"fade-up"})]),C("div",null,[(te(!0),Pe(qe,null,Le(y.icons,s=>(te(),re(Ce,{key:s,icon:s,class:"mx-4 pt-8",variant:"text","data-aos":"fade-up"},null,8,["icon"]))),128))]),We,oe(Be),C("div",Ye,[Ge,De(He(new Date().getFullYear()),1)])]),_:1})}const Ze=Ae(Re,[["render",Ke]]);export{Ie as A,Ze as _};
