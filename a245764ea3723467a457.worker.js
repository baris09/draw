!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.allPossibleGroups=(e,t,r,u,s)=>n(t,r,u,s).filter(n=>o(e,t,r,n,u,s)),t.firstPossibleGroup=(e,t,r,u,s)=>n(t,r,u,s).find(n=>o(e,t,r,n,u,s));const n=(e,t,r,n)=>e.map((e,t)=>t).filter(o=>n(t,o,r,e));function o(e,t,r,u,s,i){const c=t.slice(),f=c[u];return c[u]=[r,...f],function(e,t,r,u){if(0===e[r].length&&++r===e.length)return!0;const s=e.slice(),[i,...c]=s[r];return s[r]=c,n(t,i,r,u).some(e=>o(s,t,i,e,r,u))}(e,c,s,i)}},function(e,t,r){"use strict";r.r(t);var n=r(0);const o=e=>t=>t.confederation===e,u=o("UEFA"),s=(e,t)=>"UEFA"===e.confederation?(e=>((e,t,r)=>((e,t,r,n)=>e(((e,t,r,n)=>{let o=r;for(const r of n){if(!e(o,r))break;o=t(o,r)}return o})(e,t,r,n)))(t=>t<e,(e,t)=>r(t)?e+1:e,0,t))(2,e,u))(t):!t.some((e=>o(e.confederation))(e))&&(e=>e.length<3||e.some(u))(t);var i=(e,t,r,n)=>{const o=n[t];return o.length<=r&&s(e,o)};addEventListener("message",e=>{const{messageId:t,data:{pots:r,groups:o,selectedTeam:u,currentPotNum:s}}=e.data,c=Object(n.firstPossibleGroup)(r,o,u,s,i);postMessage({messageId:t,data:{pickedGroup:c}})})}]);