// Landscape game screen, shared by the games.
// While a game is on screen the phone is turned to landscape: the app asks Android to rotate,
// and if the phone stays upright the game is drawn turned on its side instead, so it always
// looks the same. The lobby and other screens stay upright.
// Layout: the board in the middle, my seat (with the turn timer as a ring round the photo) on the
// right, the other players on the left, the exit button bottom-left and the sound buttons bottom-right.
(function(){
  const game=document.getElementById("game");if(!game)return;
  const KIND=document.documentElement.dataset.land||"";
  // ar: board width/height when the board keeps its shape; act: my buttons, shown under my seat
  const CFG={chess:{ar:1,act:""},tawla:{ar:1.375,act:".tw-bar"},dama:{ar:1,act:".tw-bar"},dots:{ar:1.446,act:".tw-bar"},ludo:{ar:1,act:".drow"},snakes:{ar:1,act:".drow"},
    zar:{ar:0,act:".drow",fit:"#board"},kon:{ar:0,act:".drow",grow:1,fit:"#kHand"},domino:{ar:0,act:".actions",board:"#table",grow:1},kustirk:{ar:0,act:".actions",board:"#table",grow:1}}[KIND]||{ar:1,act:""};
  const B=CFG.board||"#board",FIT=CFG.fit||"";
  const A=CFG.act;
  const css=`
html.land body{overflow:hidden!important}
html.land header,html.land .topbar,html.land #bnav,html.land .bnav{display:none!important}
html.land #game{position:fixed!important;z-index:40;inset:0;margin:0!important;box-sizing:border-box;
  display:flex!important;flex-direction:column;justify-content:center;gap:6px!important;
  padding:8px calc(var(--sideW) + 14px)!important;
  background:radial-gradient(circle at 50% 40%,#5a1a1e,#2a0a0c 78%)}
html.land.rot #game{inset:auto;top:0;left:0;width:100vh;height:100vw;transform:translateY(100vh) rotate(-90deg);transform-origin:top left}
html.land #game>.status{position:absolute;top:4px;left:50%;transform:translateX(-50%);z-index:5;margin:0;pointer-events:none;white-space:nowrap}
html.land #game>.status .muted{display:none}
html.land #game>.status .pill{font-size:12px;padding:3px 10px;opacity:.92}
html.land #clock{display:none!important}
html.land #seats,html.land #seatsTop,html.land #seatsBot{position:absolute!important;inset:0;display:block!important;pointer-events:none;margin:0!important;z-index:2}
html.land .lseat{position:absolute!important;width:var(--sideW);display:flex!important;flex-direction:column;align-items:center;text-align:center;gap:4px;
  padding:0!important;margin:0!important;border:0!important;box-shadow:none!important;background:transparent!important;min-width:0;pointer-events:auto;opacity:1}
html.land .lseat.off{opacity:.5}
html.land #seats>.empty,html.land #seatsTop>.empty,html.land #seatsBot>.empty{display:none!important}
html.land .lseat.R1{right:8px;top:8px}html.land .lseat.L1{left:8px;top:8px}
html.land .lseat.L2{left:8px;top:calc(50% - 4px)}
html.land #game.n4 .lseat.L2{top:calc(33% + 2px)}html.land .lseat.L3{left:8px;top:calc(66% - 4px)}
html.land #game.n4 .lseat .nm span{font-size:11px}html.land .lseat.R2{right:8px;bottom:56px}
html.land .lseat>.pdot,html.land .lseat>.team-tag{display:none}
html.land .lseat .nm{align-items:center;width:100%;display:flex;flex-direction:column}
html.land .lseat .nm b{font-size:13px;background:linear-gradient(#7a1c22,#4e0f13);border:1px solid rgba(255,215,120,.45);border-radius:10px;padding:3px 8px;max-width:100%;box-sizing:border-box;display:block;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
html.land .lseat .nm span{font-size:12px;color:#f3d9c9;margin-top:2px}
html.land .lseat .backs{justify-content:center}
html.land .lav{position:relative;width:var(--av);aspect-ratio:1;border-radius:50%;padding:5px;box-sizing:border-box;flex:none;background:var(--pc,#e6c15a)}
html.land .lseat.turn .lav{background:conic-gradient(var(--rc,#3ee07a) calc(var(--p,1)*1turn),rgba(0,0,0,.45) 0)}
html.land .lav img{width:100%!important;height:100%!important;border-radius:50%;object-fit:cover;display:block;background:radial-gradient(circle at 35% 30%,#3a5fa8,#152a55);margin:0!important}
html.land .lav .lemo{width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:calc(var(--av)*.45);background:radial-gradient(circle at 35% 30%,#3a5fa8,#152a55)}
html.land .lav .lemo.bot{background:radial-gradient(circle at 35% 30%,#555,#1c1c1c)}
html.land .lav .lsec{position:absolute;inset:5px;border-radius:50%;display:none;flex-direction:column;align-items:center;justify-content:center;
  background:rgba(0,0,0,.45);color:#ffe066;font:900 calc(var(--av)*.28)/1 system-ui;text-shadow:0 2px 3px #000}
html.land .lav .lsec small{font:700 10px system-ui;color:#fff;margin-top:2px}
html.land .lseat.turn .lav .lsec{display:flex}
html.land .lav .lchip{position:absolute;right:-4px;bottom:-2px;width:32%!important;height:auto!important;aspect-ratio:1;display:block}
html.land .lav .talk{position:absolute;top:-6px;left:-6px}
html.land ${B}{flex:${CFG.ar?"none":CFG.grow?"1 1 0":"0 1 auto"};${CFG.grow?"overflow:hidden;":""};min-height:0;align-self:center;width:${CFG.ar?"min(100%,calc((var(--H) - 16px)*"+CFG.ar+"))":"100%"}!important;max-width:none!important;margin:0 auto!important}
${A?`html.land ${A}{position:absolute!important;right:8px;top:var(--actTop,45%);width:var(--sideW);z-index:4;margin:0!important;display:flex!important;flex-direction:column;align-items:center;gap:8px;padding:0!important;background:none!important;border:0!important}
html.land ${A}[hidden]{display:none!important}
html.land ${A} button:not(.dice){font-size:13px!important;padding:9px 6px!important;min-height:0!important;width:100%;white-space:normal;line-height:1.2}
html.land ${A} .side{display:contents}html.land ${A} .side span{font-size:12px;color:#f3d9c9;text-align:center}
html.land ${A} .hint{display:none}`:""}
${KIND!=="chess"?"html.land #game>.panel:not(#overBox):not(.kround){display:contents!important}":""}
html.land #game h2{display:none}html.land #game .row:has(>h2){display:none!important}
html.land #game .voice{position:absolute;right:8px;bottom:8px;display:flex;gap:6px;margin:0;z-index:4}
html.land #micBtn #micTxt{display:none}
html.land #micBtn,html.land #muteBtn,html.land #quitBtn{width:44px!important;height:44px;min-height:0;padding:0!important;border-radius:12px;font-size:20px;
  background:linear-gradient(#8a2129,#5a1016)!important;border:1px solid rgba(255,215,120,.5)!important;color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.45);display:inline-flex;align-items:center;justify-content:center;flex:none}
html.land #quitBtn{position:fixed!important;left:8px;bottom:8px;z-index:4;font-size:0!important}
html.land #quitBtn::before{content:"🚪";font-size:20px}
html.land #game>.panel>.row:has(>#quitBtn){display:contents!important}
html.land #game.n4 #quitBtn{left:auto;right:8px;bottom:58px}html.land #game.n4 #quitConfirm{left:auto;right:8px;bottom:108px}
html.land #quitConfirm{position:absolute!important;left:8px;bottom:60px;z-index:8;background:#3a0d10;border:1px solid rgba(255,215,120,.5);border-radius:12px;padding:8px;gap:6px;max-width:50%}
html.land #overBox,html.land #kRound{position:absolute!important;z-index:7;left:50%;top:50%;transform:translate(-50%,-50%);width:min(440px,72%);max-height:92%;overflow:auto;box-shadow:0 10px 30px rgba(0,0,0,.6);margin:0!important;background:#16261f!important;border:1px solid rgba(255,215,120,.45)!important;border-radius:16px!important;opacity:1!important;backdrop-filter:none!important}
html.land #overBox[hidden],html.land #kRound[hidden]{display:none!important}
${KIND==="domino"?"html.land #table{margin:0!important;padding:8px 10px!important;gap:4px!important;display:flex!important;flex-direction:column}html.land #table .chain{flex:1 1 0;height:auto!important;min-height:0!important;max-width:none!important;width:100%}html.land #table .ends{font-size:12px}":""}
${KIND==="chess"?`html.land .board-wrap{width:min(100%,calc(var(--H) - 16px))!important;margin:0 auto;flex:none}
html.land .board-wrap .board{width:100%}
html.land #game>.panel.lb{display:none!important}
html.land #game>.players{display:contents!important}
html.land #meLbl,html.land #themLbl{position:absolute;top:10px;width:var(--sideW);text-align:center;font:800 14px system-ui;color:#fff!important;
  background:linear-gradient(#7a1c22,#4e0f13);border:1px solid rgba(255,215,120,.45);border-radius:10px;padding:6px 8px;box-sizing:border-box}
html.land #meLbl{right:8px}html.land #themLbl{left:8px}
html.land #game>.panel:not(.lb):not(#waitBox):not(#x){display:flex!important;flex-direction:column;gap:8px;position:absolute!important;right:8px;top:60px;bottom:8px;width:var(--sideW);
  overflow:auto;margin:0!important;padding:0!important;background:none!important;border:0!important;box-shadow:none!important}
html.land #game>.panel:not(.lb) h2{display:none}
html.land #game>.panel:not(.lb) .row,html.land #botBar{flex-direction:column;align-items:stretch;gap:6px}
html.land #game>.panel:not(.lb) button{font-size:13px!important;padding:9px 6px!important;width:100%}
html.land #moves{font-size:12px;max-height:none;color:#f3d9c9}
html.land #waitBox{position:absolute!important;z-index:7;left:50%;top:50%;transform:translate(-50%,-50%);width:min(420px,70%);margin:0!important}
html.land #waitBox[hidden]{display:none!important}
html.land #leaveBtn{position:fixed!important;left:8px;bottom:8px;z-index:6;width:44px;height:44px;padding:0!important;border-radius:12px;font-size:0!important;
  background:linear-gradient(#8a2129,#5a1016)!important;border:1px solid rgba(255,215,120,.5)!important;display:inline-flex!important;align-items:center;justify-content:center}
html.land #leaveBtn::before{content:"🚪";font-size:20px}`:""}
`;
  const st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
  const ROOT=document.documentElement;
  let on=false,tick=null;
  function size(){const portrait=innerHeight>innerWidth;ROOT.classList.toggle("rot",on&&portrait);
    const W=on&&portrait?innerHeight:innerWidth,H=on&&portrait?innerWidth:innerHeight;
    const n=document.querySelectorAll(".lseat").length||2;game.classList.toggle("n4",n>=4);
    let side=CFG.ar?(W-(H-16)*CFG.ar)/2-22:W*.16;side=Math.max(104,Math.min(n>2?200:170,side));
    game.style.setProperty("--H",H+"px");game.style.setProperty("--sideW",Math.round(side)+"px");
    const av=Math.round(Math.max(44,Math.min(n>=4?52:n>2?62:92,H*(n>=4?.13:n>2?.15:.23))));game.style.setProperty("--av",av+"px");
    place();fit()}
  // boards without a fixed shape (cards, dominoes, dice rows) are made smaller when they do not fit the height
  function flowKids(el){const out=[];for(const e of el.children){const cs=getComputedStyle(e);if(cs.display==="contents")out.push(...flowKids(e));
      else if(e.offsetParent!==null&&!/absolute|fixed/.test(cs.position)&&e.offsetHeight)out.push(e)}return out}
  function fit(){if(!on||!FIT)return;const b=document.querySelector(FIT);if(!b)return;
    const keep=[b.style.transform,b.style.marginBottom];b.style.transform="";b.style.removeProperty("margin-bottom");b.style.flexShrink="0";b.style.transformOrigin="top center";
    const grow=CFG.grow?document.querySelector(B):null;if(grow)grow.style.flex="none";
    const kids=flowKids(game);
    const cs=getComputedStyle(game),avail=game.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom);
    let others=0;for(const e of kids)if(e!==b)others+=e===grow?Math.min(e.offsetHeight,90):e.offsetHeight;others+=6*(kids.length-1);if(grow)grow.style.flex="";
    const h=b.offsetHeight,room=avail-others,z=h>room+2?Math.max(.4,room/h):1;
    if(z<.99){b.style.transform="scale("+z.toFixed(3)+")";b.style.setProperty("margin-bottom",(-h*(1-z)).toFixed(1)+"px","important")}
    else{b.style.transform="";b.style.removeProperty("margin-bottom")}}
  function lock(){try{const o=screen.orientation;if(o&&o.lock)o.lock("landscape").catch(()=>{})}catch(e){}}
  function unlock(){try{const o=screen.orientation;if(o&&o.unlock)o.unlock()}catch(e){}}
  // the round timer around the player whose turn it is follows the game's own clock
  function ring(){const bar=document.getElementById("clockBar"),num=document.getElementById("clockNum"),clk=document.getElementById("clock");
    const p=bar&&bar.style.width?parseFloat(bar.style.width)/100:1;game.style.setProperty("--p",Math.max(0,Math.min(1,p)));
    game.style.setProperty("--rc",p<=.3?"#ff5a4f":"#3ee07a");
    const t=clk&&!clk.hidden&&num?num.textContent:"";
    document.querySelectorAll(".lsec").forEach(x=>{const b=x.firstChild;if(b.textContent!==t)b.textContent=t;x.style.visibility=t?"":"hidden"})}
  const ME=/\((تو|تۆ|أنت|you)\)/i;
  // my buttons sit just under my own seat
  function place(){const r=document.querySelector(".lseat.R1");if(r)game.style.setProperty("--actTop",(r.offsetTop+r.offsetHeight+10)+"px")}
  // the seat cards are drawn again on every move: dress them for this screen each time
  function dress(){if(!on)return;
    const cards=[...document.querySelectorAll("#seats>.seat,#seatsTop>.seat,#seatsBot>.seat")].filter(s=>!s.classList.contains("empty"));if(!cards.length)return;
    let me=cards.findIndex(s=>ME.test((s.querySelector(".nm b")||{}).textContent||""));if(me<0)me=0;
    const n=cards.length,slot={};
    for(let k=1;k<n;k++)slot[(me+k)%n]=(n>=4?["L1","L2","L3"]:["L1","L2"])[k-1];
    slot[me]="R1";
    cards.forEach((s,i)=>{s.classList.add("lseat");s.classList.remove("R1","R2","L1","L2","L3");s.classList.add(slot[i])});
    cards.forEach(s=>{const im=s.querySelector(":scope>img");if(!im)return;
      const w=document.createElement("span");w.className="lav";im.replaceWith(w);w.append(im);
      const sec=document.createElement("span");sec.className="lsec";sec.innerHTML="<b></b><small>sec</small>";w.append(sec);
      if(!im.getAttribute("src")){im.style.display="none";const e=document.createElement("span");const nm=(s.querySelector(".nm b")||{}).textContent||"";
        const bot=/🤖|ڕۆبۆت|روبوت|Robot/i.test(nm);e.className="lemo"+(bot?" bot":"");e.textContent=bot?"🤖":"🙂";w.insertBefore(e,sec)}
      const chip=s.querySelector(":scope>.tw-chip");if(chip){chip.classList.add("lchip");w.append(chip)}
      const tk=s.querySelector(":scope>.talk");if(tk)w.append(tk)});
    size();ring()}
  ["seats","seatsTop","seatsBot"].forEach(id=>{const e=document.getElementById(id);if(e)new MutationObserver(dress).observe(e,{childList:true})});
  // chess keeps its exit button in the top bar, which is hidden here: it is carried into the game and back
  let leaveHome=null;function moveLeave(inGame){const l=document.getElementById("leaveBtn");if(!l)return;
    if(inGame){if(!leaveHome)leaveHome=[l.parentNode,l.nextSibling];game.appendChild(l)}else if(leaveHome){leaveHome[0].insertBefore(l,leaveHome[1]);leaveHome=null}}
  function update(){const want=!game.hidden;if(want===on)return;on=want;ROOT.classList.toggle("land",on);
    if(KIND==="chess")moveLeave(on);
    if(on){lock();size();dress();setTimeout(()=>{try{(0,eval)("typeof renderGame==='function'&&typeof G!=='undefined'&&G&&renderGame()")}catch(e){}},60);let k=0;tick=setInterval(()=>{ring();if(++k%4===0)fit()},250)}else{unlock();ROOT.classList.remove("rot");clearInterval(tick);const b=FIT&&document.querySelector(FIT);if(b){b.style.transform="";b.style.removeProperty("margin-bottom");b.style.flexShrink=""}}}
  new MutationObserver(update).observe(game,{attributes:true,attributeFilter:["hidden"]});
  addEventListener("resize",size);if(screen.orientation)screen.orientation.addEventListener("change",size);
  update();
})();
