/* AG Zar: tables and cards sold in the shop.
   =====================================================================
   TO ADD A STYLE: add one entry to TABLES or CARDS below (name in 4
   languages, price in AG, rare, css). Only this file changes; the shop
   and the game read it. The admin opens the app once so the new price
   is written to the server.
   ===================================================================== */
(function(){
var u=function(svg){return'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" '+svg+'</svg>')+'")'};
var WOOD="repeating-linear-gradient(92deg,rgba(0,0,0,.035) 0 3px,transparent 3px 11px),repeating-linear-gradient(88deg,rgba(255,255,255,.06) 0 2px,transparent 2px 23px)";
var BAT='<path d="M0 4c4-4 7-1 8 2 1-3 4-6 8-2-3 0-4 2-4 5-2-1-3-1-4 1-1-2-2-2-4-1 0-3-1-5-4-5z"/>';
var BATS=u('width="90" height="70" viewBox="0 0 90 70"><g fill="rgba(255,150,40,.45)"><g transform="translate(8 10)">'+BAT+'</g><g transform="translate(56 40) scale(.8)">'+BAT+'</g><g transform="translate(64 6) scale(.6)">'+BAT+'</g></g>');
var BATS_L=u('width="90" height="70" viewBox="0 0 90 70"><g fill="rgba(0,0,0,.35)"><g transform="translate(8 10) scale(.8)">'+BAT+'</g><g transform="translate(56 40) scale(.6)">'+BAT+'</g></g>');
var BUB=u('width="60" height="80" viewBox="0 0 60 80"><g fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.6"><circle cx="10" cy="14" r="4"/><circle cx="44" cy="30" r="6"/><circle cx="22" cy="58" r="3"/><circle cx="50" cy="70" r="2.5"/></g><g fill="rgba(255,255,255,.7)"><circle cx="8.5" cy="12.5" r="1"/><circle cx="42" cy="28" r="1.4"/></g>');
var WEED=u('width="120" height="60" viewBox="0 0 120 60"><g fill="none" stroke-linecap="round" stroke-width="5"><path d="M14 60c-6-14 8-22 0-36s6-20 2-24" stroke="#1f9e6a"/><path d="M30 60c6-12-6-18 2-30" stroke="#2fc48a"/><path d="M92 60c-5-16 9-20 1-38" stroke="#1f9e6a"/><path d="M106 60c5-10-4-14 2-24" stroke="#2fc48a"/></g><g fill="#ff7a59"><path d="M56 60c0-10 4-16 4-22 0 6 6 10 3 22z"/><path d="M66 60c2-8 8-10 8-16 1 6-1 12-4 16z" fill="#ffb15c"/></g>');
var HIERO=u('width="56" height="28" viewBox="0 0 56 28"><g fill="none" stroke="rgba(120,80,10,.55)" stroke-width="1.6" stroke-linecap="round"><path d="M8 6a3 3 0 1 1 0 .1M8 9v12M4 13h8"/><path d="M20 14c3-4 9-4 12 0-3 4-9 4-12 0zM26 14v.1M26 18l-2 5M30 17l3 4"/><path d="M40 22l4-14 4 14zM44 8v-3"/></g>');
var HIERO_L=u('width="56" height="28" viewBox="0 0 56 28"><g fill="none" stroke="rgba(255,235,160,.45)" stroke-width="1.6" stroke-linecap="round"><path d="M8 6a3 3 0 1 1 0 .1M8 9v12M4 13h8"/><path d="M20 14c3-4 9-4 12 0-3 4-9 4-12 0zM26 14v.1M26 18l-2 5M30 17l3 4"/><path d="M40 22l4-14 4 14zM44 8v-3"/></g>');
var EYE=u('width="40" height="20" viewBox="0 0 40 20"><path d="M3 9c8-8 26-8 34 0-8 7-26 7-34 0z" fill="#fff7d6" stroke="#1f2f6b" stroke-width="2"/><circle cx="20" cy="9" r="4" fill="#1f2f6b"/><path d="M14 15l-3 5M22 15c2 3 6 4 9 2" fill="none" stroke="#1f2f6b" stroke-width="2" stroke-linecap="round"/>');
var PUMPKIN=u('width="30" height="28" viewBox="0 0 30 28"><path d="M15 4c1-3 3-4 5-3-2 1-3 2-3 4" fill="#2f7a1f"/><ellipse cx="9" cy="16" rx="7" ry="10" fill="#e8730c"/><ellipse cx="21" cy="16" rx="7" ry="10" fill="#e8730c"/><ellipse cx="15" cy="16" rx="7" ry="11" fill="#ff8f1f"/><path d="M8 13l3 3-4 1zM22 13l-3 3 4 1zM9 21c4 3 8 3 12 0l-2 3-2-2-2 2-2-2-2 2z" fill="#3b1300"/>');
var FISH=u('width="32" height="20" viewBox="0 0 32 20"><path d="M2 10c6-9 18-9 24 0-6 9-18 9-24 0z" fill="#ffb02e" stroke="#a35b00" stroke-width="1.5"/><path d="M25 10l6-6v12z" fill="#ff7a00" stroke="#a35b00" stroke-width="1.5"/><path d="M11 5v10" stroke="#fff" stroke-width="2.5"/><circle cx="7" cy="9" r="1.6" fill="#222"/>');
var MOON=u('width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="22" fill="#ffe39a"/><circle cx="33" cy="34" r="4" fill="#f2cc6a"/><circle cx="48" cy="48" r="6" fill="#f2cc6a"/><circle cx="46" cy="30" r="2.5" fill="#f2cc6a"/>');
var WEB=u('width="70" height="70" viewBox="0 0 70 70"><g fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1"><path d="M0 0l70 70M0 0l70 30M0 0l30 70M0 0v70M0 0h70"/><path d="M0 18q9-9 18-18M0 34q17-17 34-34M0 50q25-25 50-50M0 66q33-33 66-66"/></g>');
var VEINS=u('width="120" height="120" viewBox="0 0 120 120"><g fill="none" stroke="rgba(110,120,135,.35)" stroke-width="1.4"><path d="M0 30c20 6 30-10 50-4s30 22 70 12"/><path d="M0 84c26-10 40 8 62 0s34-18 58-8"/><path d="M40 0c4 20-8 30 0 52"/></g>');
var DOTS="radial-gradient(rgba(0,0,0,.3) 1.3px,transparent 1.6px) 0 0/7px 7px";
var DOTS_Y="radial-gradient(rgba(255,120,0,.35) 2px,transparent 2.4px) 0 0/10px 10px";
var STAR="polygon(50% 0%,61% 30%,95% 20%,72% 47%,100% 70%,64% 69%,58% 100%,45% 72%,12% 92%,28% 62%,0% 42%,33% 36%,18% 8%)";

// ---------------- tables ----------------
var TABLES={
 zt_classic:{name:["دارێ کلاسیک","داری کلاسیک","خشب كلاسيكي","Classic wood"],price:0,css:""},
 zt_felt:{name:["کەسکێ مێزێ","سەوزی مێز","جوخ أخضر","Green felt"],price:60,dark:1,
   css:"background:radial-gradient(circle at 50% 40%,#2f9a62,#1a5c3a 75%);box-shadow:inset 0 0 0 6px #6b3e17,inset 0 0 0 8px #3d2109,0 8px 18px rgba(0,0,0,.35)"},
 zt_ocean:{name:["شینێ دەریایێ","شینی دەریا","أزرق البحر","Ocean blue"],price:100,dark:1,
   css:"background:radial-gradient(circle at 50% 30%,#3aa3e0,#0f4f8a 80%);box-shadow:inset 0 0 0 5px #0a2f57,0 8px 18px rgba(0,0,0,.35)"},
 zt_marble:{name:["مەرمەر","مەڕمەڕ","رخام","Marble"],price:150,
   css:"background:"+VEINS+",linear-gradient(135deg,#ffffff,#dfe3ea);box-shadow:inset 0 0 0 5px #b9bfca,0 8px 18px rgba(0,0,0,.3)"},
 zt_ebony:{name:["ئەبەنووس","ئەبەنووس","أبنوس","Ebony"],price:200,dark:1,
   css:"background:"+WOOD+",linear-gradient(#2a2420,#14100d);box-shadow:inset 0 0 0 4px #c9a24a,inset 0 0 0 7px #2a2420,0 8px 18px rgba(0,0,0,.45)"},
 zt_royal:{name:["پاشایی","پاشایانە","ملكي","Royal"],price:300,dark:1,
   css:"background:radial-gradient(circle at 50% 35%,#a3213f,#4a0716 80%);box-shadow:inset 0 0 0 4px #f0c64a,inset 0 0 0 8px #7a1630,inset 0 0 0 10px #f0c64a,0 8px 22px rgba(0,0,0,.45)"},
 zt_pharaoh:{name:["میسرا کەڤن","میسری کۆن","مصر القديمة","Ancient Egypt"],price:350,rare:1,
   css:"background:"+HIERO+",radial-gradient(circle at 50% 40%,#f2d79c,#c99a52 85%);box-shadow:inset 0 0 0 4px #f0c64a,inset 0 0 0 9px #1f4fa3,inset 0 0 0 12px #f0c64a,0 0 18px rgba(240,198,74,.6),0 8px 18px rgba(0,0,0,.35);animation:zsGlow 2.6s ease-in-out infinite"},
 zt_halloween:{name:["هالۆوین","هالۆوین","هالوين","Halloween"],price:380,rare:1,dark:1,
   css:"background:"+MOON+" right 8px top 6px/64px no-repeat,"+WEB+" left top/90px no-repeat,"+BATS+" 0 0/120px 90px,radial-gradient(circle at 80% 10%,#6b3a8f,#2a0f3d 55%,#12051c);box-shadow:inset 0 0 0 4px #ff8f1f,inset 0 0 0 7px #2a0f3d,0 0 18px rgba(255,143,31,.5),0 8px 18px rgba(0,0,0,.45);animation:zsBats 14s linear infinite"},
 zt_sea:{name:["بنێ دەریایێ","بنی دەریا","أعماق البحر","Under the sea"],price:400,rare:1,dark:1,
   css:"background:"+WEED+" bottom/150px 70px repeat-x,"+BUB+" 0 0/70px 90px,linear-gradient(#1fb5e0,#0b6aa3 55%,#063a63);box-shadow:inset 0 0 0 4px #ffe08a,inset 0 0 0 7px #0b4f80,0 0 18px rgba(80,210,255,.55),0 8px 18px rgba(0,0,0,.4);animation:zsBub 6s linear infinite"},
 zt_comic:{name:["کۆمیک","کۆمیک","كوميك","Comic"],price:420,rare:1,
   css:"background:"+DOTS_Y+",repeating-conic-gradient(from 0deg at 50% 50%,#ffe14d 0 10deg,#ffd000 10deg 20deg);box-shadow:inset 0 0 0 4px #111,inset 0 0 0 8px #ff3b3b,inset 0 0 0 11px #111,0 8px 18px rgba(0,0,0,.4);animation:zsGlow 2.2s ease-in-out infinite"}
};
// ---------------- cards ----------------
var CARDS={
 zc_classic:{name:["کلاسیک","کلاسیک","كلاسيك","Classic"],price:0},
 zc_wood:{name:["دارێ گوێز","داری گوێز","خشب الجوز","Walnut"],price:60,
   frame:"background:linear-gradient(135deg,#b07a42,#6e4420)",oval:"background:#f6e7cc"},
 zc_neon:{name:["نیۆن","نیۆن","نيون","Neon"],price:120,
   frame:"background:#0d0f1a;box-shadow:0 0 0 1px var(--pc),0 0 10px var(--pc)",
   inner:"background:#121528;box-shadow:inset 0 0 0 2px var(--pc),inset 0 0 14px var(--pc)",
   oval:"background:transparent;box-shadow:0 0 0 2px var(--pc),0 0 10px var(--pc)",num:"color:#fff;-webkit-text-stroke:1.5px var(--pc);text-shadow:0 0 8px var(--pc)"},
 zc_marble:{name:["مەرمەر","مەڕمەڕ","رخام","Marble"],price:150,
   frame:"background:"+VEINS+",linear-gradient(135deg,#ffffff,#d9dde3)",inner:"background:linear-gradient(160deg,rgba(255,255,255,.45),transparent 45%),var(--pc)",oval:"background:#fbfbfd"},
 zc_gold:{name:["زێڕێ پاشایی","زێڕی پاشایانە","ذهب ملكي","Royal gold"],price:250,
   frame:"background:linear-gradient(135deg,#fff3b0,#d4a017 45%,#8a6100 55%,#ffe27a)",oval:"background:#fffbea;box-shadow:0 0 0 2px #d4a017",num:"-webkit-text-stroke-color:#6b4a00"},
 zc_pharaoh:{name:["فیرعەونێ میسری","فیرعەونی میسری","فرعوني","Pharaoh"],price:350,rare:1,
   frame:"background:repeating-linear-gradient(180deg,#f0c64a 0 5px,#1f4fa3 5px 9px)",
   inner:"background:"+HIERO_L+" 0 0/34px 17px,var(--pc)",oval:"background:#f3e2b3;box-shadow:0 0 0 2px #1f4fa3",
   num:"-webkit-text-stroke-color:#1f2f6b",deco:"background:"+EYE+" center/contain no-repeat;top:4%;left:30%;width:40%;height:16%"},
 zc_halloween:{name:["هالۆوین","هالۆوین","هالوين","Halloween"],price:380,rare:1,
   frame:"background:linear-gradient(160deg,#4a1f6e,#1b0b2b);box-shadow:0 0 0 1.5px #ff8f1f,0 2px 6px rgba(0,0,0,.4)",
   inner:"background:"+BATS_L+" 0 0/60px 46px,linear-gradient(rgba(0,0,0,.18),rgba(0,0,0,.18)),var(--pc)",
   oval:"background:radial-gradient(circle at 40% 35%,#ffb347,#e8730c);box-shadow:0 0 0 2px #3b1300",num:"color:#2a0f3d;-webkit-text-stroke:1.5px #ffd08a",
   deco:"background:"+PUMPKIN+" center/contain no-repeat;bottom:3%;right:4%;width:34%;height:24%"},
 zc_sea:{name:["بنێ دەریایێ","بنی دەریا","أعماق البحر","Under the sea"],price:400,rare:1,
   frame:"background:linear-gradient(160deg,#8ff0ff,#0a7bb8)",
   inner:"background:"+BUB+" 0 0/36px 48px,linear-gradient(rgba(255,255,255,.28),transparent 50%),var(--pc)",
   oval:"background:radial-gradient(circle at 40% 35%,#fff6d6,#ffd98a)",num:"-webkit-text-stroke-color:#08415e",
   deco:"background:"+FISH+" center/contain no-repeat;bottom:4%;left:6%;width:42%;height:18%"},
 zc_comic:{name:["پالەوانێ کۆمیک","پاڵەوانی کۆمیک","بطل الكوميك","Comic hero"],price:420,rare:1,
   frame:"background:#fff;box-shadow:0 0 0 2.5px #111,3px 3px 0 #111",
   inner:"background:"+DOTS+",var(--pc)",oval:"background:#ffe14d;clip-path:"+STAR+";transform:none;inset:10% 4%",
   num:"color:#111;-webkit-text-stroke:1.5px #fff;font-style:italic"}
};

// ---------------- CSS: works in the game and in the shop previews ----------------
var css="@keyframes zsGlow{50%{filter:brightness(1.08)}}@keyframes zsBats{to{background-position:right 8px top 6px,left top,120px 0,0 0}}@keyframes zsBub{to{background-position:bottom,0 -90px,0 0}}\n"+
 "@media (prefers-reduced-motion:reduce){.zt[data-zs]{animation:none!important}}\n";
for(var k in TABLES){var t=TABLES[k];if(!t.css)continue;
  css+='.zt[data-zs="'+k+'"]{'+t.css+'}\n';
  if(t.dark)css+='.zt[data-zs="'+k+'"]{color:#fff}.zt[data-zs="'+k+'"] .zmid{background:rgba(0,0,0,.28)}.zt[data-zs="'+k+'"] .zs{border-color:rgba(255,255,255,.4);color:rgba(255,255,255,.6)}.zt[data-zs="'+k+'"] .zrw.turn{background:rgba(255,255,255,.14)}\n';}
for(var k2 in CARDS){var c=CARDS[k2],s='.zc[data-zc="'+k2+'"]';
  if(c.frame)css+=s+'{'+c.frame+'}\n';if(c.inner)css+=s+' i{'+c.inner+'}\n';if(c.oval)css+=s+' i::before{'+c.oval+'}\n';if(c.num)css+=s+' i b{'+c.num+'}\n';
  if(c.deco)css+=s+' i::after{content:"";position:absolute;'+c.deco+';pointer-events:none}\n';}
// the little previews in the shop (the game page has its own full styles); first, so the styles above win
css='.zsk{direction:ltr;width:100%}.zsk .zt{position:relative;display:flex;flex-direction:column;gap:5px;padding:8px;border-radius:14px;box-sizing:border-box;color:#2b1d12;background:#c9a074;background-image:'+WOOD+';box-shadow:inset 0 0 0 3px rgba(90,52,20,.35)}'+
 '.zsk .zrow{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px}.zsk .zmid{background:rgba(43,29,18,.16);border-radius:10px;padding:4px}'+
 '.zsk .zs{aspect-ratio:2/3;border-radius:6px;border:1.5px dashed rgba(43,29,18,.4);display:grid;place-items:center;font:900 11px Arial,sans-serif;color:rgba(43,29,18,.5);box-sizing:border-box}'+
 '.zsk .zc{aspect-ratio:2/3;width:100%;border-radius:6px;background:#fffaf2;padding:2px;box-shadow:0 1px 3px rgba(0,0,0,.3);box-sizing:border-box;position:relative}'+
 '.zsk .zc i{display:grid;place-items:center;height:100%;border-radius:5px;background:var(--pc);position:relative;overflow:hidden;font-style:normal}'+
 '.zsk .zc i::before{content:"";position:absolute;inset:18% 8%;border-radius:50%;background:#fffaf2;transform:rotate(-30deg)}'+
 '.zsk .zc i b{position:relative;color:var(--pc);font:900 17px/1 "Arial Black",Arial,sans-serif;-webkit-text-stroke:1px #2b1d12;paint-order:stroke fill}'+
 '.zsk.big .zrow{grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}.zsk.big .zc i b{font-size:22px}\n'+css;
function addCss(){if(document.getElementById("zarskins-css"))return;var st=document.createElement("style");st.id="zarskins-css";st.textContent=css;(document.head||document.documentElement).appendChild(st)}
addCss();

var COL=["#e53935","#f2b705"];
function lang(){try{var v={kmr:0,ckb:1,ar:2,en:3}[localStorage.getItem("lang")];return v==null?0:v}catch(e){return 0}}
function nm(o){return o.name[lang()]||o.name[0]}
function card(seat,n,skin){var b=document.createElement("div");b.className="zc";if(skin)b.dataset.zc=skin;b.style.setProperty("--pc",COL[seat]);
  var i=document.createElement("i"),x=document.createElement("b");x.textContent=n;i.appendChild(x);b.appendChild(i);return b}
function slot(n){var d=document.createElement("div");d.className="zs";d.textContent=n;return d}
function tablePreview(k){var w=document.createElement("div");w.className="zsk";var t=document.createElement("div");t.className="zt";if(k&&k!=="zt_classic")t.dataset.zs=k;
  var r1=document.createElement("div");r1.className="zrow";[1,2,3,4].forEach(function(n){r1.appendChild(n===2?slot(n):card(1,n))});
  var m=document.createElement("div");m.className="zmid";var r2=document.createElement("div");r2.className="zrow";[1,2,3,4].forEach(function(n){r2.appendChild(n===2?card(1,n):n===3?card(0,n):slot(n))});m.appendChild(r2);
  var r3=document.createElement("div");r3.className="zrow";[1,2,3,4].forEach(function(n){r3.appendChild(n===3?slot(n):card(0,n))});
  t.appendChild(r1);t.appendChild(m);t.appendChild(r3);w.appendChild(t);return w}
function cardsPreview(k){var w=document.createElement("div");w.className="zsk big";var t=document.createElement("div");t.className="zt";
  var r=document.createElement("div");r.className="zrow";[[0,3],[1,5],[0,6]].forEach(function(a){r.appendChild(card(a[0],a[1],k&&k!=="zc_classic"?k:""))});t.appendChild(r);w.appendChild(t);return w}

window.ZARSKINS={tables:TABLES,cards:CARDS,name:nm,tablePreview:tablePreview,cardsPreview:cardsPreview,
  // the shop catalog: {key:{type,name,price,rare}} for every paid style
  catalog:function(){var o={};for(var a in TABLES)if(TABLES[a].price)o[a]={type:"ztable",name:nm(TABLES[a]),price:TABLES[a].price,rare:!!TABLES[a].rare};
    for(var b in CARDS)if(CARDS[b].price)o[b]={type:"zcard",name:nm(CARDS[b]),price:CARDS[b].price,rare:!!CARDS[b].rare};return o}};
})();
