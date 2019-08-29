(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{466:function(e,t,n){"use strict";t.a=e=>String.fromCharCode(65+e)},467:function(e,t,n){"use strict";const a=n(4).b.div`
  border: #aaa solid 1px;
  margin: 0px 5px 10px 5px;
  width: 150px;
  min-width: 0;

  @media (max-width: 999px) {
    margin: 0px 3px 6px 3px;
  }
`;t.a=a},468:function(e,t,n){"use strict";const a=n(4).b.div`
  display: flex;
  align-items: center;

  height: 21px;
  margin: -1px -1px -1px -1px;
  border: #aaa solid 1px;

  text-align: center;
  text-decoration: none;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 12px;

  @media (max-width: 999px) {
    height: 14px;
    font-family: Roboto, sans-serif;
    font-size: 10px;
  }
`;t.a=a},469:function(e,t,n){"use strict";const a=n(4).b.div`
`;t.a=a},470:function(e,t,n){"use strict";var a=n(4),r=n(468);var o=Object(a.b)(r.a)`
  padding-left: 3px;
  padding-right: 3px;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 999px) {
    font-family: 'Roboto Condensed', RobotoCondensed, RobotoCondensed-Regular, sans-serif;
  }
`,i=n(493);const s=Object(a.b)(o)`
  background-position: 3px;
  background-size: 16px;
  background-repeat: no-repeat;

  padding-left: 22px;

  @media (max-width: 999px) {
    background-position: 2px;
    background-size: 12px;
    padding-left: 16px;
  }
`,l=Object(a.b)(s)`
  ${({country:e})=>e&&a.a`
    background-image: url('${Object(i.a)(e)}');
  `}
`;t.a=l},471:function(e,t,n){"use strict";const a=n(4).b.div`
  display: flex;
  flex-direction: column;
  min-width: 65%;
  margin: 0px 5px 10px 5px;
`;t.a=a},472:function(e,t,n){"use strict";const a=n(4).b.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 35%;
  margin: 0px 5px 10px 5px;

  @media (max-width: 999px) {
    align-items: center;
  }
`;t.a=a},473:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n(482);const s=o.b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`,l=Object(o.b)(i.a)`
  background: ${({selected:e,notSelected:t})=>e?"#004":t?"#ddd":"radial-gradient(#fff, #004)"};
`;t.a=Object(a.memo)(({forceNoSelect:e,display:t,pot:n,selectedTeam:o,onPick:i})=>{const c=Object(a.useCallback)(e=>{const t=e.target,a=n.findIndex(e=>e.id===t.dataset.teamid);i(a,n)},[n,i]),d=e||o;return r.a.createElement(s,null,t&&n&&n.map(t=>r.a.createElement(l,{key:t.id,"data-teamid":t.id,selected:t===o,notSelected:e||o&&t!==o,noHover:d,onClick:d?void 0:c},t.shortName||t.name)))})},474:function(e,t,n){"use strict";const a=n(4).b.div`
  display: flex;
  margin: auto;
  width: 1000px;

  @media (max-width: 999px) {
    width: 100%;
    flex-direction: column;
  }
`;t.a=a},475:function(e,t,n){"use strict";var a=n(0),r=n(197),o=n.n(r),i=n(490),s=n(484),l=n(491);let c;var d=(e,...t)=>{c||(c=document.createElement("style"),document.head.appendChild(c));const n=Object(l.a)("styled-element-"),a=((e,...t)=>e.reduce((e,n,a)=>`${e}${n}${s(t[a])?"":t[a]}`,""))(e,...t);return c.textContent+=`.${n}{${a}}`,n};const u=e=>((e,t)=>new Promise(n=>{e.addEventListener(t,function a(r){e.removeEventListener(t,a),n(r)})}))(e,"transitionend"),m=1,p=1,g=d`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
`,b=d`
  color: initial;
  position: fixed;
  border: 1px solid transparent;
  user-select: none;
  box-sizing: border-box;
`,f=document.createElement("div");function h(e,{left:t,top:n}){const a=t+m,r=n+p;e.style.transform=`translate3d(${a}px, ${r}px, 0px)`}f.classList.add(g),document.body.insertBefore(f,document.getElementById("app"));var x=async(e,t,n)=>{const a=function(e){const{width:t,fontFamily:n}=getComputedStyle(e),a=e.cloneNode(!0);a.classList.add(b);const{style:r}=a;return r.width=t,r.fontFamily=n,a.textContent=e.textContent,h(a,e.getBoundingClientRect()),a}(e);f.appendChild(a);const r=t.getBoundingClientRect();a.style.transition=`transform ${n}ms ease-in-out`,h(a,r),await u(a),i.a&&await o()(0),f.removeChild(a)};t.a=Object(a.memo)(({from:e,to:t,duration:n,data:r,onAnimationEnd:o})=>((e=>{const t=Object(a.useRef)(!1);t.current||(t.current=!0,e())})(()=>{const a=document.querySelector(e),i=document.querySelector(t);a instanceof HTMLElement&&i instanceof HTMLElement&&x(a,i,n).then(()=>{o&&o(r)})}),null))},476:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n(480),s=n(467),l=n(469),c=n(481);const d=o.a`
  filter: grayscale(0.5);
  opacity: 0.4;
`,u=o.a`
  color: #f70;
`;var m=Object(o.b)(c.a)`
  ${e=>e.depleted&&d}
  ${e=>e.highlighted&&u}
`,p=n(470);const g=o.a`
  color: blue;
`,b=o.a`
  filter: grayscale(0.5);
  opacity: 0.4;
`;var f=Object(o.b)(p.a)`
  ${e=>e.selected&&g}
  ${e=>e.picked&&b}
`;const h=Object(o.b)(s.a)`
  transform: box-shadow 1s linear;
  ${e=>e.highlighted&&"\n  "}
`;var x=Object(a.memo)(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeams:o,background:i,color:s})=>r.a.createElement(h,{highlighted:e},r.a.createElement(m,{highlighted:e,depleted:!n||a.length===n.length,background:i,color:s},"Pot ",t+1),r.a.createElement(l.a,null,n&&n.map(e=>{const{name:t,country:n,shortName:i,pairing:s}=e;return r.a.createElement(f,{key:e.id,"data-cellid":e.id,title:s&&`paired with ${s.shortName||s.name}`,selected:o&&o.includes(e),picked:a.includes(e),country:n||t},i||t)})))),w=n(194);const y=Object(o.b)(s.a)`
  transform: box-shadow 1s linear;
  ${e=>e.highlighted&&"\n  "}
`,v=o.b.div`
  display: flex;
  border: none;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-right: -1px;

  &:last-child {
    margin-bottom: 0px;
  }
`,E=Object(o.b)(f)`
  width: 50%;
  margin-right: 0px;
`;var k=Object(a.memo)(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeams:o,background:i,color:s})=>r.a.createElement(y,{highlighted:e},r.a.createElement(m,{highlighted:e,depleted:!n||a.length===n.length,background:i,color:s},"Pot ",t+1),r.a.createElement(l.a,null,w(n.length/2).map(e=>{const t=[n[2*e],n[2*e+1]];return r.a.createElement(v,{key:e},t.map(e=>{const{name:t,country:n,shortName:i,pairing:s}=e;return r.a.createElement(E,{key:e.id,"data-cellid":e.id,title:s&&`paired with ${s.shortName||s.name}`,selected:o&&o.includes(e),picked:a.includes(e),country:n||t},i||t)}))}))));const j=o.b.div`
  display: flex;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  justify-content: center;

  & > * {
    flex: 1;
    flex-basis: 22%;
    ${e=>e.limitWidth?"max-width: 160px":""};

    @media (max-width: 999px) {
      max-width: initial;
    }
  }
`;t.a=Object(a.memo)(({initialPots:e,pots:t,selectedTeams:n,currentPotNum:a,split:o})=>r.a.createElement(j,{limitWidth:!o},e&&e.map((s,l)=>{const c=o?k:x,d=l===a,u=i(e[l],t[l],n||[]);return r.a.createElement(c,{key:s[0].id,potNum:l,isCurrent:d,teams:s,pickedTeams:u,selectedTeams:n,background:"rgba(0, 0, 0, 0.75)",color:"#fff"})})))},477:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n(483),s=n(489),l=n(466),c=n(194);var d=o.b.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  margin: 2px;

  border-width: 1px;
  border-style: solid;
  border-radius: 100%;

  font-size: 18px;

  ${e=>e.possible?o.a`
    color: ${e.color};
  `:o.a`
    color: #000;
    border-color: rgba(0,0,0,0);
    filter: opacity(0.25);
  `}
`;const u=o.b.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
`;var m=Object(a.memo)(({numGroups:e,possibleGroups:t})=>{const n=e>>1;return r.a.createElement(u,null,c(e).map(e=>{const a=Object(l.a)(e);return r.a.createElement(d,{key:a,color:e<n?"red":"blue",possible:t.includes(e)},a)}))});const p=o.b.div`
  width: 100%;
  font-size: 1.25em;
  line-height: 150%;
  vertical-align: middle;

  margin-top: 30px;
  margin-bottom: 30px;

  user-select: none;

  @media (max-width: 999px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`,g=o.b.div`
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(255, 0, 0, 0.5);
  padding: 10px;
`,b=o.b.span`
  display: inline-block;
`,f=o.b.strong`
  font-weight: 600;
`,h=o.b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;t.a=Object(a.memo)(({long:e,calculating:t,completed:n,selectedTeam:o,pickedGroup:c,possibleGroups:d,numGroups:u,reset:x})=>{const w=Object(a.useRef)(null),y=Object(a.useRef)(null);Object(a.useEffect)(()=>{y.current=n?null:o},[n,o]);const v=y.current||o;return t?r.a.createElement(p,null,r.a.createElement(g,null,r.a.createElement("div",null,"Calculation is taking too long."),r.a.createElement("div",null,"And ",r.a.createElement(i.a,{href:"https://github.com/inker/draw/issues/14",target:"_blank",rel:"noopener"},"here's why"),"."))):n?r.a.createElement(p,null,r.a.createElement(h,null,r.a.createElement("div",null,"Draw completed!"),r.a.createElement(s.a,{onClick:x},"Restart"))):null!==c?(w.current=r.a.createElement(p,null,r.a.createElement("div",null,e&&v?r.a.createElement("span",null,r.a.createElement(f,null,v.shortName||v.name)," goes to group"):r.a.createElement("span",null,"Group")," ",r.a.createElement(f,null,Object(l.a)(c)),"!")),w.current):v?r.a.createElement(p,null,d?r.a.createElement("div",null,"Possible groups for ",r.a.createElement(b,null,r.a.createElement(f,null,v.name),":"),r.a.createElement(m,{numGroups:u,possibleGroups:d})):w.current):r.a.createElement(p,null,"Pick a ball")})},478:function(e,t,n){"use strict";var a=n(0);const r=[],o={add:"COLLECTION_ADD",remove:"COLLECTION_REMOVE"};function i(e,t){switch(t.type){case o.add:return[...e,t.payload];case o.remove:return e.filter(e=>e!==t.payload);default:throw new Error(`Unknown action: ${t.type}`)}}t.a=()=>{const[e,t]=(()=>Object(a.useReducer)(i,r))(),n=e=>{t({type:o.add,payload:e})},s=e=>{t({type:o.remove,payload:e})};return[e,Object(a.useMemo)(()=>({add:n,remove:s}),[])]}},480:function(e,t,n){var a=n(485),r=n(74),o=n(72),i=n(488),s=o(function(e,t){return i(e)?a(e,r(t,1,i,!0)):[]});e.exports=s},481:function(e,t,n){"use strict";var a=n(4),r=n(468);const o=Object(a.b)(r.a)`
  justify-content: center;
  font-weight: 600;
  background-color: ${e=>e.background};
  color: ${e=>e.color};
`;t.a=o},482:function(e,t,n){"use strict";const a=n(4).b.div`
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */

  width: 67px;
  height: 67px;

  margin: 2px;
  padding: 10px;

  font-size: ${e=>e.selected?.8:0}em;
  font-family: 'Arial Narrow', 'Ubuntu Condensed', sans-serif;
  font-weight: ${e=>e.selected?"bold":""};
  text-align: center;
  text-overflow: ellipsis;
  color: ${e=>e.selected?"white":""};

  background: ${e=>e.selected?"":"radial-gradient(#004, #002, #002)"};
  border-radius: 100%;
  cursor: ${e=>e.noHover?"not-allowed":"pointer"};
  user-select: none;

  &:hover {
    ${({noHover:e})=>!e&&"background: radial-gradient(#ccf, #ccf)"};
  }

  @media (max-width: 999px) {
    flex-flow: row wrap;

    & > * {
      flex: 1;
      flex-basis: 22%;
    }

    width: 21px;
    height: 21px;

    font-size: ${e=>e.selected?8:0}px;
  }
`;t.a=a},484:function(e,t){e.exports=function(e){return null==e}},485:function(e,t,n){var a=n(75),r=n(486),o=n(487),i=n(25),s=n(39),l=n(76),c=200;e.exports=function(e,t,n,d){var u=-1,m=r,p=!0,g=e.length,b=[],f=t.length;if(!g)return b;n&&(t=i(t,s(n))),d?(m=o,p=!1):t.length>=c&&(m=l,p=!1,t=new a(t));e:for(;++u<g;){var h=e[u],x=null==n?h:n(h);if(h=d||0!==h?h:0,p&&x==x){for(var w=f;w--;)if(t[w]===x)continue e;b.push(h)}else m(t,x,d)||b.push(h)}return b}},486:function(e,t,n){var a=n(73);e.exports=function(e,t){return!!(null==e?0:e.length)&&a(e,t,0)>-1}},487:function(e,t){e.exports=function(e,t,n){for(var a=-1,r=null==e?0:e.length;++a<r;)if(n(t,e[a]))return!0;return!1}},488:function(e,t,n){var a=n(40),r=n(11);e.exports=function(e){return r(e)&&a(e)}},497:function(e,t,n){"use strict";var a=()=>Math.random().toString(36).slice(2);var r=class{constructor(){this.callbacks=new Map}add(e,t){this.callbacks.set(e,t)}addAndGetId(e){const t=a();return this.add(t,e),t}resolve(e,t){this.getCallbackAndDelete(e)(null,t)}reject(e,t){this.getCallbackAndDelete(e)(t)}getCallbackAndDelete(e){const t=this.callbacks.get(e);if(!t)throw new Error(`no resolver with id = ${e}`);return this.callbacks.delete(e),t}};const o=(e,t)=>(n,a)=>{n?t(n):e(a)};var i=class{constructor(){this.manager=new r}getPromise(e){return new Promise(async(t,n)=>{const a=o(t,n);this.manager.add(e,a)})}getPromiseWithId(e){return new Promise(async(t,n)=>{const a=o(t,n),r=this.manager.addAndGetId(a);e&&e(r)})}resolve(e,t){this.manager.resolve(e,t)}reject(e,t){this.manager.reject(e,t)}},s=n(199),l=n.n(s);var c=class{constructor(e,t){this.asyncManager=new i,this.onMessage=e=>{const{messageId:t,data:n}=e.data;this.asyncManager.resolve(t,n)},this.worker=e,this.worker.onmessage=this.onMessage,this.timeout=t}sendAndReceive(e){const t=this.asyncManager.getPromiseWithId(t=>{this.worker.postMessage({messageId:t,data:e})});return void 0===this.timeout?t:l()(t,this.timeout)}terminate(){this.worker.terminate()}},d=n(0);t.a=e=>{const t=Object(d.useMemo)(()=>new c(new e,12e4),[]);return Object(d.useEffect)(()=>()=>{t.terminate()},[]),e=>t.sendAndReceive(e)}},498:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n(466),s=n(480),l=n(194),c=n(467),d=n(481),u=n(469),m=n(470);const p=o.c`
  from {
    background-color: white;
    box-shadow: 0 0 20px #08f;
  }
  to {}
`,g=o.c`
  from {
    background-color: #ff8;
  }
  to {}
`,b=o.a`
  background-color: rgba(255, 255, 255, 0.9);
  animation: ${p} 1s ease;
  box-shadow: 0 0 5px #6af;
`,f=o.a`
  animation: ${g} 5s normal forwards;
`;var h=Object(o.b)(m.a)`
  ${e=>e.possible&&b}
  ${e=>e.picked&&f}
`,x=n(492),w=e=>e.country||(e.name in x?e.name:void 0);var y=Object(a.memo)(({maxTeams:e,groupLetter:t,teams:n,potNum:a,possible:o,airborneTeams:i,background:m,color:p})=>{const g=s(n,i);return r.a.createElement(c.a,null,r.a.createElement(d.a,{background:m,color:p},"Group ",t),r.a.createElement(u.a,null,g.map((e,t)=>r.a.createElement(h,{key:t,country:w(e),picked:!0},e.shortName||e.name)),l(g.length,e).map(e=>r.a.createElement(h,{key:e,possible:e===a&&o,"data-cellid":`${t}${e}`}))))});const v=o.b.div`
  display: flex;
  flex-flow: row wrap;

  & > * {
    flex: 1;
    flex-basis: 22%;
  }
`;t.a=Object(a.memo)(({maxTeams:e,currentPotNum:t,groups:n,possibleGroups:a,airborneTeams:o,groupColors:s})=>r.a.createElement(v,null,n&&n.map((l,c)=>{const d=Object(i.a)(c),u=s&&s[~~(c/n.length*s.length)];return r.a.createElement(y,{key:d,maxTeams:e,groupLetter:d,teams:l,potNum:t,possible:null!==a&&a.includes(c),airborneTeams:o,background:u})})))},500:function(e,t,n){"use strict";var a=n(0),r=n(197),o=n.n(r);const i={team:null,isLong:!1},s={set:"TIMEOUT_VALUE_SET",reset:"TIMEOUT_RESET"};function l(e,t){switch(t.type){case s.set:return{team:t.payload,isLong:!!t.payload&&t.payload===e.team};case s.reset:return i;default:throw new Error(`Unknown action: ${t}`)}}t.a=e=>{const[t,n]=(()=>Object(a.useReducer)(l,i))(),r=async t=>{n({type:s.set,payload:t}),await o()(e),n({type:s.set,payload:t})},c=()=>{n({type:s.reset})},d=Object(a.useMemo)(()=>({set:r,reset:c}),[]);return[t.isLong,d]}}}]);