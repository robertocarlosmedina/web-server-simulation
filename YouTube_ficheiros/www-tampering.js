(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function n(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:n(a)}}
function q(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var t="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function u(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var v=u(this);function w(a,b){if(b)a:{var c=v;a=a.split(".");for(var g=0;g<a.length-1;g++){var h=a[g];if(!(h in c))break a;c=c[h]}a=a[a.length-1];g=c[a];b=b(g);b!=g&&null!=b&&t(c,a,{configurable:!0,writable:!0,value:b})}}
w("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var g=this+"";b+="";void 0===c&&(c=g.length);c=Math.max(0,Math.min(c|0,g.length));for(var h=b.length;0<h&&0<c;)if(g[--c]!=b[--h])return!1;return 0>=h}});
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
w("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(h||"")+"_"+g++,h)}
function c(h,l){this.g=h;t(this,"description",{configurable:!0,writable:!0,value:l})}
if(a)return a;c.prototype.toString=function(){return this.g};
var g=0;return b});
w("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var g=v[b[c]];"function"===typeof g&&"function"!=typeof g.prototype[a]&&t(g.prototype,a,{configurable:!0,writable:!0,value:function(){return y(n(this))}})}return a});
function y(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
w("WeakMap",function(a){function b(d){this.g=(e+=Math.random()+1).toString();if(d){d=p(d);for(var f;!(f=d.next()).done;)f=f.value,this.set(f[0],f[1])}}
function c(){}
function g(d){var f=typeof d;return"object"===f&&null!==d||"function"===f}
function h(d){if(!x(d,m)){var f=new c;t(d,m,{value:f})}}
function l(d){var f=Object[d];f&&(Object[d]=function(k){if(k instanceof c)return k;Object.isExtensible(k)&&h(k);return f(k)})}
if(function(){if(!a||!Object.seal)return!1;try{var d=Object.seal({}),f=Object.seal({}),k=new a([[d,2],[f,3]]);if(2!=k.get(d)||3!=k.get(f))return!1;k.delete(d);k.set(f,4);return!k.has(d)&&4==k.get(f)}catch(r){return!1}}())return a;
var m="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var e=0;b.prototype.set=function(d,f){if(!g(d))throw Error("Invalid WeakMap key");h(d);if(!x(d,m))throw Error("WeakMap key fail: "+d);d[m][this.g]=f;return this};
b.prototype.get=function(d){return g(d)&&x(d,m)?d[m][this.g]:void 0};
b.prototype.has=function(d){return g(d)&&x(d,m)&&x(d[m],this.g)};
b.prototype.delete=function(d){return g(d)&&x(d,m)&&x(d[m],this.g)?delete d[m][this.g]:!1};
return b});
w("Map",function(a){function b(){var e={};return e.previous=e.next=e.head=e}
function c(e,d){var f=e.g;return y(function(){if(f){for(;f.head!=e.g;)f=f.previous;for(;f.next!=f.head;)return f=f.next,{done:!1,value:d(f)};f=null}return{done:!0,value:void 0}})}
function g(e,d){var f=d&&typeof d;"object"==f||"function"==f?l.has(d)?f=l.get(d):(f=""+ ++m,l.set(d,f)):f="p_"+d;var k=e.i[f];if(k&&x(e.i,f))for(e=0;e<k.length;e++){var r=k[e];if(d!==d&&r.key!==r.key||d===r.key)return{id:f,list:k,index:e,h:r}}return{id:f,list:k,index:-1,h:void 0}}
function h(e){this.i={};this.g=b();this.size=0;if(e){e=p(e);for(var d;!(d=e.next()).done;)d=d.value,this.set(d[0],d[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),d=new a(p([[e,"s"]]));if("s"!=d.get(e)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return!1;var f=d.entries(),k=f.next();if(k.done||k.value[0]!=e||"s"!=k.value[1])return!1;k=f.next();return k.done||4!=k.value[0].x||"t"!=k.value[1]||!f.next().done?!1:!0}catch(r){return!1}}())return a;
var l=new WeakMap;h.prototype.set=function(e,d){e=0===e?0:e;var f=g(this,e);f.list||(f.list=this.i[f.id]=[]);f.h?f.h.value=d:(f.h={next:this.g,previous:this.g.previous,head:this.g,key:e,value:d},f.list.push(f.h),this.g.previous.next=f.h,this.g.previous=f.h,this.size++);return this};
h.prototype.delete=function(e){e=g(this,e);return e.h&&e.list?(e.list.splice(e.index,1),e.list.length||delete this.i[e.id],e.h.previous.next=e.h.next,e.h.next.previous=e.h.previous,e.h.head=null,this.size--,!0):!1};
h.prototype.clear=function(){this.i={};this.g=this.g.previous=b();this.size=0};
h.prototype.has=function(e){return!!g(this,e).h};
h.prototype.get=function(e){return(e=g(this,e).h)&&e.value};
h.prototype.entries=function(){return c(this,function(e){return[e.key,e.value]})};
h.prototype.keys=function(){return c(this,function(e){return e.key})};
h.prototype.values=function(){return c(this,function(e){return e.value})};
h.prototype.forEach=function(e,d){for(var f=this.entries(),k;!(k=f.next()).done;)k=k.value,e.call(d,k[1],k[0],this)};
h.prototype[Symbol.iterator]=h.prototype.entries;var m=0;return h});
w("Set",function(a){function b(c){this.g=new Map;if(c){c=p(c);for(var g;!(g=c.next()).done;)this.add(g.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),g=new a(p([c]));if(!g.has(c)||1!=g.size||g.add(c)!=g||1!=g.size||g.add({x:4})!=g||2!=g.size)return!1;var h=g.entries(),l=h.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=h.next();return l.done||l.value[0]==c||4!=l.value[0].x||l.value[1]!=l.value[0]?!1:h.next().done}catch(m){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,g){var h=this;this.g.forEach(function(l){return c.call(g,l,l,h)})};
return b});
var z=this||self;function A(a,b){a=a.split(".");var c=z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var g;a.length&&(g=a.shift());)a.length||void 0===b?c[g]&&c[g]!==Object.prototype[g]?c=c[g]:c=c[g]={}:c[g]=b}
;var B=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function C(a){return a?decodeURI(a):a}
;A("yt.config_",window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{});Object.freeze(["js-httpswwwgoogleanalyticscomanalyticsjs","js-chromeextensionpkedcjkdefgpdelpbcmbmeomcjbeemfm","video-","js-http","css-http"]);
var D=Object.freeze("document.appendChild document.body.appendChild document.querySelector document.querySelectorAll history.back history.go".split(" ")),E=Object.freeze("fonts.googleapis.com s0.2mdn.net securepubads.g.doubleclick.net ssl.google-analytics.com static.doubleclick.net www.google-analytics.com www.googletagservices.com www.youtube.com youtube.com".split(" ")),F=Object.freeze(["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl","enhhojjnijigcajfphajepfemndkmdlo"]),G=
Object.freeze(".corp.google.com .googlevideo.com .ytimg.com .google.com .googlesyndication.com .gstatic.com .prod.google.com .google.ru".split(" ")),H=Object.freeze(["chrome-extension","safari-extension","safari-resource","opera"]);function I(){return D.map(function(a){return J(a)}).filter(function(a){return!!a})}
function J(a){var b=a.split(".");a=b[b.length-1];b=b.reduce(function(c,g){return c&&c[g]},window);
if(!b)return a+" is missing";b=Function.prototype.toString.call(b).replace(/\n/g," ").replace(/  +/g," ");return b!="function "+a+"() { [native code] }"?a+" is not native, prologue: "+b.slice(0,50):null}
function K(a){var b=a.match(B)[1]||null;return H.some(function(c){return b==c})}
function L(a){var b=C(a.match(B)[3]||null);return!b||K(a)?!0:E.some(function(c){return b==c})||G.some(function(c){return b.endsWith(c)})}
function M(a){if(!K(a))return null;var b=C(a.match(B)[3]||null);return b?F.some(function(c){return b==c})?null:b:null}
function N(){var a=new Set;[].concat(q(document.querySelectorAll("script"))).forEach(function(b){b.src&&!L(b.src)&&a.add(b.src)});
[].concat(q(document.querySelectorAll("link[href]"))).forEach(function(b){"alternate"==b.rel||L(b.href)||a.add(b.href)});
return[].concat(q(a)).sort()}
function O(){var a=new Set;[].concat(q(document.querySelectorAll("script"))).forEach(function(b){b.src&&(b=M(b.src))&&a.add(b)});
return[].concat(q(a)).sort()}
;A("ytbin.polymer.shared.lib.tampering.info",function(){var a=N(),b=I(),c=O(),g=[];c.length&&g.push("extensions",c);a.length&&g.push("suspiciousIncludes",a);b.length&&g.push("suspiciousApis",b);return g.length?g:null});}).call(this);
