(window.webpackJsonp=window.webpackJsonp||[]).push([["el.ko"],{466:function(e,t,n){"use strict";t.a=e=>String.fromCharCode(65+e)},467:function(e,t,n){"use strict";const a=n(4).b.div`
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
`,i=n(493);const l=Object(a.b)(o)`
  background-position: 3px;
  background-size: 16px;
  background-repeat: no-repeat;

  padding-left: 22px;

  @media (max-width: 999px) {
    background-position: 2px;
    background-size: 12px;
    padding-left: 16px;
  }
`,c=Object(a.b)(l)`
  ${({country:e})=>e&&a.a`
    background-image: url('${Object(i.a)(e)}');
  `}
`;t.a=c},471:function(e,t,n){"use strict";const a=n(4).b.div`
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
`;t.a=a},473:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n(482);const l=o.b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`,c=Object(o.b)(i.a)`
  background: ${({selected:e,notSelected:t})=>e?"#004":t?"#ddd":"radial-gradient(#fff, #004)"};
`;t.a=Object(a.memo)(({forceNoSelect:e,display:t,pot:n,selectedTeam:o,onPick:i})=>{const s=Object(a.useCallback)(e=>{const t=e.target,a=n.findIndex(e=>e.id===t.dataset.teamid);i(a,n)},[n,i]),d=e||o;return r.a.createElement(l,null,t&&n&&n.map(t=>r.a.createElement(c,{key:t.id,"data-teamid":t.id,selected:t===o,notSelected:e||o&&t!==o,noHover:d,onClick:d?void 0:s},t.shortName||t.name)))})},474:function(e,t,n){"use strict";const a=n(4).b.div`
  display: flex;
  margin: auto;
  width: 1000px;

  @media (max-width: 999px) {
    width: 100%;
    flex-direction: column;
  }
`;t.a=a},475:function(e,t,n){"use strict";var a=n(0),r=n(197),o=n.n(r),i=n(490),l=n(484),c=n(491);let s;var d=(e,...t)=>{s||(s=document.createElement("style"),document.head.appendChild(s));const n=Object(c.a)("styled-element-"),a=((e,...t)=>e.reduce((e,n,a)=>`${e}${n}${l(t[a])?"":t[a]}`,""))(e,...t);return s.textContent+=`.${n}{${a}}`,n};const u=e=>((e,t)=>new Promise(n=>{e.addEventListener(t,function a(r){e.removeEventListener(t,a),n(r)})}))(e,"transitionend"),m=1,p=1,f=d`
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
`,x=document.createElement("div");function g(e,{left:t,top:n}){const a=t+m,r=n+p;e.style.transform=`translate3d(${a}px, ${r}px, 0px)`}x.classList.add(f),document.body.insertBefore(x,document.getElementById("app"));var h=async(e,t,n)=>{const a=function(e){const{width:t,fontFamily:n}=getComputedStyle(e),a=e.cloneNode(!0);a.classList.add(b);const{style:r}=a;return r.width=t,r.fontFamily=n,a.textContent=e.textContent,g(a,e.getBoundingClientRect()),a}(e);x.appendChild(a);const r=t.getBoundingClientRect();a.style.transition=`transform ${n}ms ease-in-out`,g(a,r),await u(a),i.a&&await o()(0),x.removeChild(a)};t.a=Object(a.memo)(({from:e,to:t,duration:n,data:r,onAnimationEnd:o})=>((e=>{const t=Object(a.useRef)(!1);t.current||(t.current=!0,e())})(()=>{const a=document.querySelector(e),i=document.querySelector(t);a instanceof HTMLElement&&i instanceof HTMLElement&&h(a,i,n).then(()=>{o&&o(r)})}),null))},476:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n(480),l=n(467),c=n(469),s=n(481);const d=o.a`
  filter: grayscale(0.5);
  opacity: 0.4;
`,u=o.a`
  color: #f70;
`;var m=Object(o.b)(s.a)`
  ${e=>e.depleted&&d}
  ${e=>e.highlighted&&u}
`,p=n(470);const f=o.a`
  color: blue;
`,b=o.a`
  filter: grayscale(0.5);
  opacity: 0.4;
`;var x=Object(o.b)(p.a)`
  ${e=>e.selected&&f}
  ${e=>e.picked&&b}
`;const g=Object(o.b)(l.a)`
  transform: box-shadow 1s linear;
  ${e=>e.highlighted&&"\n  "}
`;var h=Object(a.memo)(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeams:o,background:i,color:l})=>r.a.createElement(g,{highlighted:e},r.a.createElement(m,{highlighted:e,depleted:!n||a.length===n.length,background:i,color:l},"Pot ",t+1),r.a.createElement(c.a,null,n&&n.map(e=>{const{name:t,country:n,shortName:i,pairing:l}=e;return r.a.createElement(x,{key:e.id,"data-cellid":e.id,title:l&&`paired with ${l.shortName||l.name}`,selected:o&&o.includes(e),picked:a.includes(e),country:n||t},i||t)})))),w=n(194);const y=Object(o.b)(l.a)`
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
`,E=Object(o.b)(x)`
  width: 50%;
  margin-right: 0px;
`;var k=Object(a.memo)(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeams:o,background:i,color:l})=>r.a.createElement(y,{highlighted:e},r.a.createElement(m,{highlighted:e,depleted:!n||a.length===n.length,background:i,color:l},"Pot ",t+1),r.a.createElement(c.a,null,w(n.length/2).map(e=>{const t=[n[2*e],n[2*e+1]];return r.a.createElement(v,{key:e},t.map(e=>{const{name:t,country:n,shortName:i,pairing:l}=e;return r.a.createElement(E,{key:e.id,"data-cellid":e.id,title:l&&`paired with ${l.shortName||l.name}`,selected:o&&o.includes(e),picked:a.includes(e),country:n||t},i||t)}))}))));const j=o.b.div`
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
`;t.a=Object(a.memo)(({initialPots:e,pots:t,selectedTeams:n,currentPotNum:a,split:o})=>r.a.createElement(j,{limitWidth:!o},e&&e.map((l,c)=>{const s=o?k:h,d=c===a,u=i(e[c],t[c],n||[]);return r.a.createElement(s,{key:l[0].id,potNum:c,isCurrent:d,teams:l,pickedTeams:u,selectedTeams:n,background:"rgba(0, 0, 0, 0.75)",color:"#fff"})})))},477:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n(483),l=n(489),c=n(466),s=n(194);var d=o.b.div`
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
`;var m=Object(a.memo)(({numGroups:e,possibleGroups:t})=>{const n=e>>1;return r.a.createElement(u,null,s(e).map(e=>{const a=Object(c.a)(e);return r.a.createElement(d,{key:a,color:e<n?"red":"blue",possible:t.includes(e)},a)}))});const p=o.b.div`
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
`,f=o.b.div`
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(255, 0, 0, 0.5);
  padding: 10px;
`,b=o.b.span`
  display: inline-block;
`,x=o.b.strong`
  font-weight: 600;
`,g=o.b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;t.a=Object(a.memo)(({long:e,calculating:t,completed:n,selectedTeam:o,pickedGroup:s,possibleGroups:d,numGroups:u,reset:h})=>{const w=Object(a.useRef)(null),y=Object(a.useRef)(null);Object(a.useEffect)(()=>{y.current=n?null:o},[n,o]);const v=y.current||o;return t?r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement("div",null,"Calculation is taking too long."),r.a.createElement("div",null,"And ",r.a.createElement(i.a,{href:"https://github.com/inker/draw/issues/14",target:"_blank",rel:"noopener"},"here's why"),"."))):n?r.a.createElement(p,null,r.a.createElement(g,null,r.a.createElement("div",null,"Draw completed!"),r.a.createElement(l.a,{onClick:h},"Restart"))):null!==s?(w.current=r.a.createElement(p,null,r.a.createElement("div",null,e&&v?r.a.createElement("span",null,r.a.createElement(x,null,v.shortName||v.name)," goes to group"):r.a.createElement("span",null,"Group")," ",r.a.createElement(x,null,Object(c.a)(s)),"!")),w.current):v?r.a.createElement(p,null,d?r.a.createElement("div",null,"Possible groups for ",r.a.createElement(b,null,r.a.createElement(x,null,v.name),":"),r.a.createElement(m,{numGroups:u,possibleGroups:d})):w.current):r.a.createElement(p,null,"Pick a ball")})},478:function(e,t,n){"use strict";var a=n(0);const r=[],o={add:"COLLECTION_ADD",remove:"COLLECTION_REMOVE"};function i(e,t){switch(t.type){case o.add:return[...e,t.payload];case o.remove:return e.filter(e=>e!==t.payload);default:throw new Error(`Unknown action: ${t.type}`)}}t.a=()=>{const[e,t]=(()=>Object(a.useReducer)(i,r))(),n=e=>{t({type:o.add,payload:e})},l=e=>{t({type:o.remove,payload:e})};return[e,Object(a.useMemo)(()=>({add:n,remove:l}),[])]}},480:function(e,t,n){var a=n(485),r=n(74),o=n(72),i=n(488),l=o(function(e,t){return i(e)?a(e,r(t,1,i,!0)):[]});e.exports=l},481:function(e,t,n){"use strict";var a=n(4),r=n(468);const o=Object(a.b)(r.a)`
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
`;t.a=a},484:function(e,t){e.exports=function(e){return null==e}},485:function(e,t,n){var a=n(75),r=n(486),o=n(487),i=n(25),l=n(39),c=n(76),s=200;e.exports=function(e,t,n,d){var u=-1,m=r,p=!0,f=e.length,b=[],x=t.length;if(!f)return b;n&&(t=i(t,l(n))),d?(m=o,p=!1):t.length>=s&&(m=c,p=!1,t=new a(t));e:for(;++u<f;){var g=e[u],h=null==n?g:n(g);if(g=d||0!==g?g:0,p&&h==h){for(var w=x;w--;)if(t[w]===h)continue e;b.push(g)}else m(t,h,d)||b.push(g)}return b}},486:function(e,t,n){var a=n(73);e.exports=function(e,t){return!!(null==e?0:e.length)&&a(e,t,0)>-1}},487:function(e,t){e.exports=function(e,t,n){for(var a=-1,r=null==e?0:e.length;++a<r;)if(n(t,e[a]))return!0;return!1}},488:function(e,t,n){var a=n(40),r=n(11);e.exports=function(e){return r(e)&&a(e)}},495:function(e,t,n){"use strict";function a(e,[t,n],r,o,i){if(!i(e,o,0,r))return!1;const l=[...r],c=l[o][0];l[o]=[c,e];const s=o+1;return s===l.length||function([e,t],n,r,o){const[i,...l]=t,c=[...n];return c[r]=[i],e.some(t=>a(t,[e,l],c,r,o))}([t.filter(t=>t!==e),n],l,s,i)}t.a=([e,t],n,r,o)=>e.map((e,t)=>t).filter(i=>a(e[i],[e,t],n,r,o))},496:function(e,t,n){"use strict";const a=n(4).b.div`
  margin-top: 10px;
  margin-bottom: 5px;
  user-select: none;
`;t.a=a},499:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n(468),l=n(470);const c=o.c`
  from {
    background-color: white;
    box-shadow: 0 0 20px #08f;
  }
  to {}
`,s=o.c`
  from {
    background-color: #ff8;
  }
  to {}
`,d=o.a`
  background-color: rgba(255, 255, 255, 0.9);
  animation: ${c} 1s ease;
  box-shadow: 0 0 5px #6af;
`,u=o.a`
  animation: ${s} 5s normal forwards;
`;var m=Object(o.b)(l.a)`
  width: 150px;
  ${e=>e.possible&&d}
  ${e=>e.picked&&u}
`;const p=Object(o.b)(i.a)`
  display: flex;
`,f=o.b.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  height: 19px;
  text-align: center;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 12px;
  color: #444;

  &:before {
    content: "v";
  }
`,b=Object(o.b)(m)`
  border-right: 1px solid rgba(0, 0, 0, 0);
`,x=Object(o.b)(m)`
  border-left: 1px solid rgba(0, 0, 0, 0);
`;var g=Object(a.memo)(({index:e,teams:t,airborneTeams:n})=>{const[a,o]=t||[],i=a&&!n.includes(a),l=o&&!n.includes(o);return r.a.createElement(p,null,r.a.createElement(b,{country:i&&a.country,picked:i,"data-cellid":`${e}ru`},i&&(a.shortName||a.name)),r.a.createElement(f,null),r.a.createElement(x,{country:l&&o.country,picked:l,"data-cellid":`${e}gw`},l&&(o.shortName||o.name)))}),h=n(467);const w=Object(o.b)(h.a)`
  width: auto;
  align-self: center;
  max-width: initial;
`;t.a=Object(a.memo)(({matchups:e,airborneTeams:t})=>r.a.createElement(w,null,e&&e.map((e,n)=>r.a.createElement(g,{key:n,index:n,teams:e,airborneTeams:t}))))},501:function(e,t,n){"use strict";var a=n(77);const r=e=>"Ukraine"===e.country,o=e=>"Russia"===e.country;const i=(e,t)=>e.country!==t.country&&e.group!==t.group&&!(e=>"Russia"===e.country?r:"Ukraine"===e.country?o:a)(e)(t);t.a=(e,t,n,a)=>((e,t)=>0===e.length||1===e.length&&i(t,e[0]))(a[t],e)},520:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(194),i=n(196),l=n(195),c=n(495),s=n(501),d=n(479),u=n(478),m=n(475),p=n(476),f=n(499),b=n(471),x=n(472),g=n(473),h=n(496),w=n(477),y=n(474);function v(){return{currentMatchupNum:0,currentPotNum:1,possiblePairings:null}}t.default=Object(a.memo)(({pots:e})=>{const[t,n]=Object(a.useState)(l("draw-")),E=Object(a.useMemo)(()=>e.map(e=>i(e)),[e,t]),k=Object(a.useMemo)(()=>o(16).map(e=>[]),[e,t]),j=Object(a.useMemo)(v,[]),[{currentMatchupNum:O,currentPotNum:$,possiblePairings:N},C]=Object(d.a)(j),[T,P]=Object(u.a)();Object(a.useEffect)(()=>{setTimeout(G,250)},[$]);const R=Object(a.useCallback)(()=>{n(l("draw-")),C({currentMatchupNum:0,currentPotNum:1,possiblePairings:null})},[e]),z=Object(a.useCallback)(e=>{const t=E[$],n=N?N[e]:e,a=t.splice(n,1)[0];k[O].push(a);const r=1===$?Object(c.a)(E,k,O,s.a):null;C({currentPotNum:1-$,currentMatchupNum:O-$+1,possiblePairings:r}),P.add(a)},[E,k,$,O,N,T]),G=()=>{(N&&1===N.length||1===$&&1===E[1].length)&&z(0)},M=O>=e[0].length,L=N?N.map(e=>E[0][e]):[];return r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement(p.a,{selectedTeams:L,initialPots:e,pots:E,currentPotNum:$,split:!0}),r.a.createElement(f.a,{currentMatchupNum:O,matchups:k,airborneTeams:T})),r.a.createElement(x.a,null,!M&&r.a.createElement(h.a,null,"Runners-up"),r.a.createElement(g.a,{forceNoSelect:0===$,display:!M,selectedTeam:null,pot:E[1],onPick:z}),!M&&r.a.createElement(h.a,null,"Group Winners"),M&&r.a.createElement(w.a,{long:!1,completed:M,selectedTeam:null,pickedGroup:null,possibleGroups:null,numGroups:0,reset:R}),N&&r.a.createElement(g.a,{forceNoSelect:1===$,display:!M,selectedTeam:null,pot:E[0].filter((e,t)=>N.includes(t)),onPick:z})),T.map(e=>{const t=k.findIndex(t=>t.includes(e)),n=k[t].indexOf(e);return r.a.createElement(m.a,{key:e.id,from:`[data-cellid='${e.id}']`,to:`[data-cellid='${t}${1===n?"gw":"ru"}']`,duration:350,data:e,onAnimationEnd:P.remove})}))})}}]);