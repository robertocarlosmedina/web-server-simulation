(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var f,g="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},h;
if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var l={a:!0},m={};try{m.__proto__=l;k=m.a;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var n=h,p=this||self;
function q(a){a=a.split(".");for(var b=p,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function aa(a,b,c){return a.call.apply(a.bind,arguments)}
function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=aa:r=ba;return r.apply(null,arguments)}
function t(a,b){a=a.split(".");var c=p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
;function u(){this.s=this.s;this.B=this.B}
u.prototype.s=!1;u.prototype.dispose=function(){this.s||(this.s=!0,this.G())};
u.prototype.G=function(){if(this.B)for(;this.B.length;)this.B.shift()()};var v=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",v);function w(a,b){return a in v?v[a]:b}
;function x(a,b){a=y(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function y(a){var b=w("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:w("EXPERIMENT_FLAGS",{})[a]}
;var ca=x("web_emulated_idle_callback_delay",300),A=1E3/60-3;
function B(a){a=void 0===a?{}:a;u.call(this);this.g=[];this.g[8]=[];this.g[4]=[];this.g[3]=[];this.g[2]=[];this.g[1]=[];this.g[0]=[];this.j=0;this.N=a.timeout||1;this.i={};this.o=A;this.C=this.h=this.m=0;this.D=this.l=!1;this.u=[];this.H=r(this.R,this);this.M=r(this.T,this);this.J=r(this.O,this);this.K=r(this.P,this);this.L=r(this.S,this);this.A=this.F=!1;var b;if(b=!!window.requestIdleCallback)b=y("disable_scheduler_requestIdleCallback"),b=!("string"===typeof b&&"false"===b?0:b);this.I=b;(this.v=
!!a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.H)}
B.prototype=g(u.prototype);B.prototype.constructor=B;if(n)n(B,u);else for(var C in u)if("prototype"!=C)if(Object.defineProperties){var D=Object.getOwnPropertyDescriptor(u,C);D&&Object.defineProperty(B,C,D)}else B[C]=u[C];function E(a,b){var c=Date.now();F(b);b=Date.now()-c;a.l||(a.o-=b)}
function G(a,b,c,d){++a.C;if(10==c)return E(a,b),a.C;var e=a.C;a.i[e]=b;a.l&&!d?a.u.push({id:e,priority:c}):(a.g[c].push(e),a.D||a.l||(0!=a.h&&H(a)!=a.m&&I(a),a.start()));return e}
function J(a){a.u.length=0;for(var b=4;0<=b;b--)a.g[b].length=0;a.g[8].length=0;a.i={};I(a)}
function H(a){if(a.g[8].length){if(a.A)return 4;if(!document.hidden&&a.v)return 3}for(var b=4;b>=a.j;b--)if(0<a.g[b].length)return 0<b?!document.hidden&&a.v?3:2:1;return 0}
function F(a){try{a()}catch(b){(a=q("yt.logging.errors.log"))&&a(b)}}
function K(a){if(a.g[8].length)return!0;for(var b=3;0<=b;b--)if(a.g[b].length)return!0;return!1}
f=B.prototype;f.P=function(a){var b=void 0;a&&(b=a.timeRemaining());this.F=!0;L(this,b);this.F=!1};
f.T=function(){L(this)};
f.O=function(){M(this)};
f.S=function(){this.A=!0;var a=H(this);4==a&&a!=this.m&&(I(this),this.start());L(this);this.A=!1};
f.R=function(){document.hidden||M(this);this.h&&(I(this),this.start())};
function M(a){I(a);a.l=!0;for(var b=Date.now(),c=a.g[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&F(e)}N(a);a.l=!1;K(a)&&a.start();a.o-=Date.now()-b}
function N(a){for(var b=0,c=a.u.length;b<c;b++){var d=a.u[b];a.g[d.priority].push(d.id)}a.u.length=0}
function L(a,b){a.A&&4==a.m&&a.h||I(a);a.l=!0;b=Date.now()+(b||a.o);for(var c=a.g[4];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&F(e)}c=a.F?0:1;c=a.j>c?a.j:c;if(!(Date.now()>=b)){do{a:{d=a;e=c;for(var z=3;z>=e;z--)for(var Q=d.g[z];Q.length;){var R=Q.shift(),S=d.i[R];delete d.i[R];if(S){d=S;break a}}d=null}d&&F(d)}while(d&&Date.now()<b)}a.l=!1;N(a);a.o=A;K(a)&&a.start()}
f.start=function(){this.D=!1;if(0==this.h)switch(this.m=H(this),this.m){case 1:var a=this.K;this.h=this.I?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,ca);break;case 2:this.h=window.setTimeout(this.M,this.N);break;case 3:this.h=window.requestAnimationFrame(this.L);break;case 4:this.h=window.setTimeout(this.J,0)}};
function I(a){if(a.h){switch(a.m){case 1:var b=a.h;a.I?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.h);break;case 3:window.cancelAnimationFrame(a.h)}a.h=0}}
f.G=function(){J(this);I(this);this.v&&document.removeEventListener("visibilitychange",this.H);u.prototype.G.call(this)};var O=q("yt.scheduler.instance.timerIdMap_")||{},P=x("kevlar_tuner_scheduler_soft_state_timer_ms",800),T=0,U=0;function V(){var a=q("ytglobal.schedulerInstanceInstance_");if(!a||a.s)a=new B(w("scheduler",void 0)||{}),t("ytglobal.schedulerInstanceInstance_",a);return a}
function da(){var a=q("ytglobal.schedulerInstanceInstance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),t("ytglobal.schedulerInstanceInstance_",null))}
function ea(){J(V())}
function fa(a,b,c){if(0==c||void 0===c)return c=void 0===c,-G(V(),a,b,c);var d=window.setTimeout(function(){var e=G(V(),a,b);O[d]=e},c);
return d}
function ha(a){var b=V();E(b,a)}
function ia(a){var b=V();if(0>a)delete b.i[-a];else{var c=O[a];c?(delete b.i[c],delete O[a]):window.clearTimeout(a)}}
function W(a){var b=q("ytcsi.tick");b&&b(a)}
function ja(){W("jse");X()}
function X(){window.clearTimeout(T);V().start()}
function ka(){var a=V();I(a);a.D=!0;window.clearTimeout(T);T=window.setTimeout(ja,P)}
function Y(){window.clearTimeout(U);U=window.setTimeout(function(){W("jset");Z(0)},P)}
function Z(a){Y();var b=V();b.j=a;b.start()}
function la(a){Y();var b=V();b.j>a&&(b.j=a,b.start())}
function ma(){window.clearTimeout(U);var a=V();a.j=0;a.start()}
;q("yt.scheduler.initialized")||(t("yt.scheduler.instance.dispose",da),t("yt.scheduler.instance.addJob",fa),t("yt.scheduler.instance.addImmediateJob",ha),t("yt.scheduler.instance.cancelJob",ia),t("yt.scheduler.instance.cancelAllJobs",ea),t("yt.scheduler.instance.start",X),t("yt.scheduler.instance.pause",ka),t("yt.scheduler.instance.setPriorityThreshold",Z),t("yt.scheduler.instance.enablePriorityThreshold",la),t("yt.scheduler.instance.clearPriorityThreshold",ma),t("yt.scheduler.initialized",!0));}).call(this);
