(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{516:function(e,t,a){e.exports=function(){return new Worker(a.p+"e25a39f7eb8dd61c6432.worker.js")}},524:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),s=a(196),l=a(195),n=a(17),c=a(479),u=a(478),p=a(500),i=a(497),d=a(466),m=a(475),b=a(476),f=a(498),g=a(471),j=a(472),k=a(473),G=a(4),O=a(482);const w=G.b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`;var h=Object(o.memo)(({display:e,possibleGroups:t,onPick:a})=>{const s=Object(o.useCallback)(e=>{const t=e.target,o=+t.dataset.group;if(Number.isNaN(o))throw console.error("incorrect group ball",t.dataset.group),new Error("Incorrect group ball");a(o)},[a]);return r.a.createElement(w,null,e&&t&&t.map(e=>r.a.createElement(O.a,{key:e,"data-group":e,onClick:s},Object(d.a)(e))))}),P=a(477),E=a(474),N=a(516),T=a.n(N);const y=["rgba(255, 0, 0, 0.25)","rgba(0, 128, 255, 0.25)"];function x(e){return{currentPotNum:0,selectedTeam:null,pickedGroup:null,hungPot:e[0],possibleGroups:null,possibleGroupsShuffled:null}}t.default=Object(o.memo)(({pots:e})=>{const[t,a]=Object(o.useState)(l("draw-")),G=Object(o.useMemo)(()=>e.map(e=>s(e)),[e,t]),O=Object(o.useMemo)(()=>e[0].map(e=>[]),[e,t]),w=Object(o.useMemo)(()=>x(G),[G]),[{currentPotNum:N,selectedTeam:C,pickedGroup:v,hungPot:S,possibleGroups:M,possibleGroupsShuffled:$},I]=Object(c.a)(w),[,J]=Object(n.a)(),A=Object(i.a)(T.a),[W,q]=Object(u.a)(),[z,B]=Object(p.a)(3e3),D=Object(o.useCallback)(()=>{a(l("draw-")),I(x(e))},[e]),F=Object(o.useCallback)(async e=>{const t=G[N],a=t.splice(e,1)[0];B.set(a);const o=await(async e=>{return(await A({pots:G,groups:O,selectedTeam:e,currentPotNum:N})).possibleGroups})(a);B.reset(),I({hungPot:t.slice(),selectedTeam:a,possibleGroups:o,possibleGroupsShuffled:s(o),pickedGroup:null})},[G,O,N]),H=Object(o.useCallback)(e=>{if(!C)return void J({error:"No selected team..."});O[e].push(C);const t=G[N].length>0?N:N+1;q.add(C),I({selectedTeam:null,pickedGroup:e,hungPot:G[t],possibleGroups:null,possibleGroupsShuffled:null,currentPotNum:t})},[G,O,C,N]),K=N>=G.length;return r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(b.a,{selectedTeams:C&&[C],initialPots:e,pots:G,currentPotNum:N}),r.a.createElement(f.a,{maxTeams:G.length,currentPotNum:N,groups:O,possibleGroups:M,airborneTeams:W,groupColors:y})),r.a.createElement(j.a,null,r.a.createElement(k.a,{display:!K,selectedTeam:C,pot:S,onPick:F}),r.a.createElement(P.a,{long:!1,calculating:z,completed:K,selectedTeam:C,pickedGroup:v,possibleGroups:M,numGroups:O.length,reset:D}),r.a.createElement(h,{display:!K,possibleGroups:$,onPick:H})),W.map(e=>{const t=O.findIndex(t=>t.includes(e)),a=Object(d.a)(t),o=O[t].indexOf(e);return r.a.createElement(m.a,{key:e.id,from:`[data-cellid='${e.id}']`,to:`[data-cellid='${a}${o}']`,duration:350,data:e,onAnimationEnd:q.remove})}))})}}]);