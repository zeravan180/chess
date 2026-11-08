/* AG Classic Games: the part every page shares.
   =====================================================================
   TO ADD A NEW GAME: upload its page (for example newgame.html) and add
   ONE line to GAMES below:  {id, page, name:[Badini, Sorani, Arabic, English], icon}
   No other page has to change.
   ===================================================================== */
(function(){
var GAMES=[
  {id:"chess", page:"./", name:["شەترەنج", "شەترەنج", "شطرنج", "Chess"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><path d=\"M10 35h20v-3.5H10z\" fill=\"currentColor\"/><path d=\"M13 30.5c0-5 4-7.5 6.5-11.5-2.5.3-5 1.6-6.8 3.4l-2.6-2.6c1.4-4.4 5.2-9 9.4-10.6l.7-3.2 2.6 2.8c5.4 1.2 8.9 6.7 8.9 13.6v8.1z\" fill=\"currentColor\"/></svg>"},
  {id:"domino", page:"domino.html", name:["دۆمینۆ", "دۆمینۆ", "دومينو", "Domino"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><rect x=\"7\" y=\"4\" width=\"15\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\"/><path d=\"M8 19h13\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"14.5\" cy=\"11.5\" r=\"2\" fill=\"currentColor\"/><circle cx=\"11\" cy=\"24\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"29\" r=\"1.7\" fill=\"currentColor\"/><rect x=\"21\" y=\"10\" width=\"13\" height=\"26\" rx=\"3\" fill=\"currentColor\" opacity=\".55\" transform=\"rotate(12 27 23)\"/></svg>"},
  {id:"snakes", page:"snakes.html", name:["مار و پەیژە", "مار و پەیژە", "السلم والثعبان", "Snakes & Ladders"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><path d=\"M9 33c4-6 12-1 15-7s-4-10 2-14 10 0 11-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.2\" stroke-linecap=\"round\"/><circle cx=\"35.5\" cy=\"7.5\" r=\"3.6\" fill=\"currentColor\"/><path d=\"M5 9h9M5 15h9M7 5v14M12 5v14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\".6\"/></svg>"},
  {id:"tawla", page:"tawla.html", name:["تاولە", "تاولە", "الطاولة", "Backgammon"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><rect x=\"4\" y=\"6\" width=\"32\" height=\"28\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"/><path d=\"M20 6v28\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M7 7l3 11 3-11M14 33l3-11 3 11M23 7l3 11 3-11M30 33l3-11 3 11\" fill=\"currentColor\" opacity=\".7\"/></svg>"},
  {id:"dama", page:"dama.html", name:["دامە", "دامە", "الداما", "Dama"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><rect x=\"5\" y=\"5\" width=\"30\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\"/><path d=\"M5 20h30M20 5v30\" stroke=\"currentColor\" stroke-width=\"1.4\" opacity=\".5\"/><circle cx=\"12.5\" cy=\"12.5\" r=\"5\" fill=\"currentColor\"/><circle cx=\"27.5\" cy=\"27.5\" r=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\"/></svg>"},
  {id:"ludo", page:"ludo.html", name:["لوودۆ", "لوودۆ", "لودو", "Ludo"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><rect x=\"4\" y=\"4\" width=\"13\" height=\"13\" rx=\"3\" fill=\"currentColor\"/><rect x=\"23\" y=\"4\" width=\"13\" height=\"13\" rx=\"3\" fill=\"currentColor\" opacity=\".55\"/><rect x=\"23\" y=\"23\" width=\"13\" height=\"13\" rx=\"3\" fill=\"currentColor\"/><rect x=\"4\" y=\"23\" width=\"13\" height=\"13\" rx=\"3\" fill=\"currentColor\" opacity=\".55\"/><path d=\"M20 15l5 5-5 5-5-5z\" fill=\"currentColor\"/></svg>"},
  {id:"zar", page:"zar.html", name:["AG Zar", "AG Zar", "AG Zar", "AG Zar"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><rect x=\"4\" y=\"6\" width=\"17\" height=\"25\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" transform=\"rotate(-10 12 18)\"/><text x=\"12\" y=\"23\" text-anchor=\"middle\" font-family=\"Arial Black,Arial\" font-weight=\"900\" font-size=\"12\" fill=\"currentColor\" transform=\"rotate(-10 12 18)\">6</text><rect x=\"20\" y=\"17\" width=\"16\" height=\"16\" rx=\"4\" fill=\"currentColor\" opacity=\".55\"/><circle cx=\"24.5\" cy=\"21.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"31.5\" cy=\"28.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"28\" cy=\"25\" r=\"1.8\" fill=\"currentColor\"/></svg>"},
  {id:"kon", page:"kon.html", name:["کۆمکان", "کۆنکان", "كونكان", "Konkan"], skins:"konskins.js",
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><rect x=\"5\" y=\"9\" width=\"16\" height=\"23\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" transform=\"rotate(-14 13 20)\"/><rect x=\"18\" y=\"7\" width=\"16\" height=\"23\" rx=\"3\" fill=\"currentColor\" opacity=\".55\" transform=\"rotate(12 26 18)\"/><text x=\"12\" y=\"25\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"currentColor\" transform=\"rotate(-14 13 20)\">♠</text><text x=\"27\" y=\"23\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"currentColor\" transform=\"rotate(12 26 18)\">♥</text></svg>"},
  {id:"worms", page:"worms.html", name:["AG Mar", "AG Mar", "AG Mar", "AG Mar"], skins:"wormskins.js",
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><path d=\"M6 30c4-8 10-2 14-9s10-12 14-8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"33\" cy=\"12\" r=\"5\" fill=\"currentColor\"/><circle cx=\"34\" cy=\"11\" r=\"1.4\" fill=\"#000\"/></svg>"},
  {id:"xo", page:"xo.html", name:["XO", "XO", "إكس أو", "Tic-Tac-Toe"], skins:"xoskins.js",
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><path d=\"M14 4v32M26 4v32M4 14h32M4 26h32\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" opacity=\".55\"/><path d=\"M5.5 5.5l5 5M10.5 5.5l-5 5M29.5 29.5l5 5M34.5 29.5l-5 5\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><circle cx=\"20\" cy=\"20\" r=\"3.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"/></svg>"},
  {id:"dots", page:"boxes.html", name:["خال و چارگۆشە", "خاڵ و چوارگۆشە", "النقاط والمربعات", "Dots and Boxes"], skins:"dotskins.js",
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><g fill=\"currentColor\"><circle cx=\"7\" cy=\"7\" r=\"2.6\"/><circle cx=\"20\" cy=\"7\" r=\"2.6\"/><circle cx=\"33\" cy=\"7\" r=\"2.6\"/><circle cx=\"7\" cy=\"20\" r=\"2.6\"/><circle cx=\"20\" cy=\"20\" r=\"2.6\"/><circle cx=\"33\" cy=\"20\" r=\"2.6\"/><circle cx=\"7\" cy=\"33\" r=\"2.6\"/><circle cx=\"20\" cy=\"33\" r=\"2.6\"/><circle cx=\"33\" cy=\"33\" r=\"2.6\"/></g><rect x=\"7\" y=\"7\" width=\"13\" height=\"13\" fill=\"currentColor\" opacity=\".35\"/><path d=\"M7 7h13v13H7zM20 20h13\" stroke=\"currentColor\" stroke-width=\"2.6\" fill=\"none\" stroke-linecap=\"round\"/></svg>"},
];
var LI={kmr:0,ckb:1,ar:2,en:3};
function lang(){try{var v=LI[localStorage.getItem("lang")];return v==null?0:v}catch(e){return 0}}
function here(){var f=location.pathname.split("/").pop();return(f===""||f==="index.html")?"./":f}

/* ---- the game switcher: fills every <nav class="gswitch"> ---- */
function fillSwitch(){var l=lang(),h=here();
  document.querySelectorAll("nav.gswitch").forEach(function(nav){nav.textContent="";nav.classList.add("no-tr");
    GAMES.forEach(function(g){var a=document.createElement("a");a.href=g.page;a.className=g.page===h?"on":"";a.innerHTML=g.icon;
      var sp=document.createElement("span");sp.textContent=g.name[l]||g.name[0];a.appendChild(sp);nav.appendChild(a)})})}

/* ---- a table code that belongs to another game: open that game (returns true when leaving) ---- */
function route(mode,code){for(var i=0;i<GAMES.length;i++){var g=GAMES[i];
  if(g.id===mode||(g.modes&&g.modes.indexOf(mode)>=0)){if(g.page===here())return false;location.href=g.page+"?c="+encodeURIComponent(code);return true}}
  return false}

/* ---- shop styles of a game ("skin packs"): a game's skins file calls AG.addPack({type, def, items, title, desc, preview}) ---- */
var PACKS=[];
window.AG={games:GAMES,route:route,fillSwitch:fillSwitch,packs:PACKS,addPack:function(p){PACKS.push(p)},nm:function(a){return(a&&(a[lang()]||a[0]))||""}};
// the shop (chess page) and the game's own page load that game's skins file
GAMES.forEach(function(g){if(g.skins&&(here()==="./"||here()===g.page))document.write('<script src="'+g.skins+'"><\/script>')});

/* ---- opening screen: the animated logo, once per visit; tap to skip ---- */
(function(){var seen=false;try{seen=!!sessionStorage.getItem("ag.splash");sessionStorage.setItem("ag.splash","1")}catch(e){}
  if(seen||!document.body)return;
  var s=document.createElement("div");s.id="agSplash";s.setAttribute("aria-hidden","true");
  s.style.cssText="position:fixed;inset:0;z-index:99999;display:grid;place-items:center;background:radial-gradient(ellipse at 50% 45%,#2a3b5e 0%,#1a2742 45%,#0e1525 100%);transition:opacity .5s";
  var v=document.createElement("video");v.src="splash.mp4";v.muted=true;v.defaultMuted=true;v.playsInline=true;v.autoplay=true;v.preload="auto";
  v.setAttribute("muted","");v.setAttribute("playsinline","");v.setAttribute("disablepictureinpicture","");
  v.style.cssText="width:min(94vw,80vh,600px);height:auto;-webkit-mask-image:radial-gradient(circle,#000 60%,transparent 70.5%);mask-image:radial-gradient(circle,#000 60%,transparent 70.5%)";
  s.appendChild(v);document.body.appendChild(s);
  var done=false;function hide(){if(done)return;done=true;s.style.opacity="0";setTimeout(function(){s.remove()},550)}
  s.onclick=hide;v.onended=hide;v.onerror=hide;setTimeout(hide,5600);
  var w=setTimeout(function(){if(v.readyState<2)hide()},2500);v.onplaying=function(){clearTimeout(w)};
  try{var p=v.play();if(p&&p.catch)p.catch(hide)}catch(e){hide()}})();

/* ---- unread private messages on the Messages button (the chess page has its own) ---- */
function dmBadge(){if(here()==="./")return;var tries=0;
  (function go(){try{if(!window.firebase||!firebase.apps||!firebase.apps.length){if(++tries<40)setTimeout(go,700);return}
    firebase.auth().onAuthStateChanged(function(u){if(!u)return;firebase.database().ref("dmIn/"+u.uid).on("value",function(s){var v=s.val()||{},n=0;
      for(var k in v){var e=v[k];if(e&&e.f===k)n+=Math.max(0,+e.n||0)}var b=document.getElementById("dmNavN");if(b){b.hidden=!n;b.textContent=n>99?"99+":String(n)}},function(){})})}catch(e){}})()}

/* ---- a player whose balance the admin froze cannot play any game until they contact the admin ---- */
var FZT=[["🔒 حسابا تە هاتیە ڕاگرتن","ئەدمینی بارێ AG و کۆینێن تە بۆ سەحکرنێ ڕاگرتیە. هەتا ئەو ئازاد نەکەت، نەشێی یاریان بکەی. پەیوەندیێ ب ئەدمینی بکە:","⧉ کۆپی بکە","ژمارە هاتە کۆپیکرن"],
  ["🔒 هەژمارەکەت ڕاگیراوە","ئەدمین باڵانسی AG و کۆینەکانتی بۆ پشکنین ڕاگرتووە. تا ئازادی نەکات، ناتوانیت یاری بکەیت. پەیوەندی بە ئەدمینەوە بکە:","⧉ کۆپی بکە","ژمارەکە کۆپی کرا"],
  ["🔒 تم تجميد حسابك","قام المشرف بتجميد رصيد AG والعملات للتحقق. لا يمكنك اللعب حتى يتم فك التجميد. تواصل مع المشرف:","⧉ نسخ","تم نسخ الرقم"],
  ["🔒 Your account is frozen","The admin froze your AG and coin balance for a check. You can't play until it is released. Contact the admin:","⧉ Copy","Number copied"]];
function fzShow(on){var o=document.getElementById("agFrozen");if(!on){if(o)o.remove();return}if(o)return;var t=FZT[lang()]||FZT[0];
  o=document.createElement("div");o.id="agFrozen";o.className="no-tr";o.setAttribute("role","alertdialog");
  o.style.cssText="position:fixed;inset:0;z-index:99998;background:rgba(8,12,20,.94);display:flex;align-items:center;justify-content:center;padding:18px;font-family:'Noto Kufi Arabic',Tahoma,sans-serif;direction:"+(lang()===3?"ltr":"rtl");
  var b=document.createElement("div");b.style.cssText="width:100%;max-width:420px;background:#1b2230;color:#fff;border-radius:20px;padding:22px 18px;display:flex;flex-direction:column;gap:12px;text-align:center;box-shadow:0 0 0 3px #c62828,0 18px 40px rgba(0,0,0,.6)";
  var h=document.createElement("b");h.style.cssText="font-size:22px";h.textContent=t[0];
  var m=document.createElement("span");m.style.cssText="font-size:15px;line-height:1.8;opacity:.9";m.textContent=t[1];
  var n=document.createElement("b");n.dir="ltr";n.style.cssText="font:900 26px monospace;color:#ffd84d";n.textContent="0751 357 8668";
  b.appendChild(h);b.appendChild(m);b.appendChild(n);
  [["💬 WhatsApp","https://wa.me/9647513578668","#25d366"],["🟣 Viber","viber://chat?number=%2B9647513578668","#7360f2"],["📞 Korek · 07513578668","tel:+9647513578668","#e53935"]].forEach(function(x){
    var a=document.createElement("a");a.href=x[1];a.textContent=x[0];a.style.cssText="display:block;padding:13px;border-radius:14px;background:"+x[2]+";color:#fff;font-weight:800;font-size:16px;text-decoration:none";b.appendChild(a)});
  var c=document.createElement("button");c.type="button";c.textContent=t[2];c.style.cssText="padding:11px;border-radius:14px;border:1px solid rgba(255,255,255,.3);background:none;color:#fff;font:800 15px inherit;cursor:pointer";
  c.onclick=function(){try{navigator.clipboard.writeText("07513578668");c.textContent="✓ "+t[3]}catch(e){}};b.appendChild(c);
  o.appendChild(b);document.body.appendChild(o)}
function fzWatchAll(){var tries=0;(function go(){try{if(!window.firebase||!firebase.apps||!firebase.apps.length){if(++tries<40)setTimeout(go,700);return}
  firebase.auth().onAuthStateChanged(function(u){if(!u)return;if(u.email==="zeravan180@gmail.com")return;
    firebase.database().ref("frozen/"+u.uid).on("value",function(s){fzShow(s.exists())},function(){})})}catch(e){}})()}

/* ---- the game picker on every lobby: big cards under the title that you swipe one by one (the old icon row is hidden) ---- */
var THEME={chess:["#7c3aed","#2e1065","♟️"],domino:["#16a34a","#064e3b","🁣"],snakes:["#f97316","#7c2d12","🐍"],tawla:["#b45309","#451a03","🎲"],
  dama:["#2563eb","#172554","⚫"],ludo:["#db2777","#500724","🎯"],zar:["#0d9488","#042f2e","🃏"],kon:["#dc2626","#450a0a","♠️"],
  worms:["#0ea5e9","#082f49","🪱"],xo:["#4f46e5","#1e1b4b","❌"],dots:["#d97706","#451a03","▦"]};
var PLAY=["▶ یاری بکە","▶ یاری بکە","▶ العب","▶ Play"],HERE=["✓ تو ل ڤێرێ یی","✓ تۆ لێرەی","✓ أنت هنا","✓ You are here"];
function carCss(){if(document.getElementById("agCarCss"))return;var st=document.createElement("style");st.id="agCarCss";st.textContent=
 "#lobby nav.gswitch{display:none!important}"+
 ".agcar{position:relative;margin:6px -16px 4px;direction:ltr}"+
 ".agcar .trk{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:10px calc(50% - 115px) 14px;scrollbar-width:none;-webkit-overflow-scrolling:touch}"+
 ".agcar .trk::-webkit-scrollbar{display:none}"+
 ".agcar .gc{flex:none;width:230px;height:150px;scroll-snap-align:center;position:relative;border-radius:20px;text-decoration:none;color:#fff;overflow:hidden;"+
   "background:linear-gradient(150deg,var(--c1),var(--c2));border:3px solid #f5c542;box-shadow:0 8px 18px rgba(0,0,0,.45),inset 0 0 0 2px rgba(255,255,255,.15);"+
   "transition:transform .18s,opacity .18s;transform:scale(var(--s,1));opacity:var(--o,1)}"+
 ".agcar .gc:before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 38%,rgba(255,255,255,.35),transparent 60%),repeating-linear-gradient(135deg,rgba(255,255,255,.06) 0 10px,transparent 10px 20px)}"+
 ".agcar .gc .em{position:absolute;right:-6px;bottom:-14px;font-size:84px;opacity:.22;transform:rotate(-12deg)}"+
 ".agcar .gc .ic{position:absolute;left:50%;top:14px;transform:translateX(-50%);width:66px;height:66px;filter:drop-shadow(0 3px 0 rgba(0,0,0,.35)) drop-shadow(0 0 12px rgba(255,255,255,.45))}"+
 ".agcar .gc .ic svg{width:100%;height:100%;color:#fff}"+
 ".agcar .gc .nm{position:absolute;left:0;right:0;top:84px;text-align:center;font:900 20px/1.1 system-ui,'Noto Sans Arabic',sans-serif;text-shadow:0 2px 0 rgba(0,0,0,.45);padding:0 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"+
 ".agcar .gc .go{position:absolute;left:50%;bottom:9px;transform:translateX(-50%);background:linear-gradient(#5be38a,#1f9d55);border:2px solid #b7f5cf;border-radius:12px;padding:3px 14px;font:800 13px system-ui,sans-serif;white-space:nowrap;box-shadow:0 3px 0 #0f6b39}"+
 ".agcar .gc.on{border-color:#fff3b0;box-shadow:0 0 0 3px rgba(255,214,90,.5),0 10px 22px rgba(0,0,0,.5)}"+
 ".agcar .gc.on .go{background:linear-gradient(#ffe27a,#d6a21e);border-color:#fff3b0;color:#4a2c00;box-shadow:0 3px 0 #8a5a00}"+
 ".agcar .ar{position:absolute;top:50%;transform:translateY(-60%);width:34px;height:34px;border-radius:50%;border:2px solid rgba(255,255,255,.5);background:rgba(0,0,0,.35);color:#fff;font:900 16px/28px system-ui;text-align:center;direction:ltr;unicode-bidi:isolate;cursor:pointer;z-index:2;padding:0}"+
 ".agcar .ar.l{left:20px}.agcar .ar.r{right:20px}"+
 ".agcar .dots{display:flex;justify-content:center;gap:5px;margin-top:-4px}.agcar .dots i{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.3)}.agcar .dots i.on{background:#ffd24a;width:16px;border-radius:4px}";
 document.head.appendChild(st)}
function buildCarousel(){var lob=document.getElementById("lobby");if(!lob||lob.querySelector(".agcar"))return;
  var at=lob.querySelector(".sl-title")||lob.querySelector(".logo")||lob.querySelector("h1");if(!at)return;carCss();
  var l=lang(),h=here(),box=document.createElement("div");box.className="agcar no-tr";
  var trk=document.createElement("div");trk.className="trk";var cur=0,cards=[];
  GAMES.forEach(function(g,i){var t=THEME[g.id]||["#334155","#0f172a","🎮"],on=g.page===h;if(on)cur=i;
    var a=document.createElement("a");a.className="gc"+(on?" on":"");a.href=on?"#":g.page;a.style.setProperty("--c1",t[0]);a.style.setProperty("--c2",t[1]);
    a.innerHTML='<span class="em">'+t[2]+'</span><span class="ic">'+g.icon+'</span>';
    var nm=document.createElement("span");nm.className="nm";nm.textContent=g.name[l]||g.name[0];
    var go=document.createElement("span");go.className="go";go.textContent=(on?HERE:PLAY)[l]||(on?HERE:PLAY)[0];a.appendChild(nm);a.appendChild(go);
    if(on)a.addEventListener("click",function(e){e.preventDefault()});
    trk.appendChild(a);cards.push(a)});
  var dots=document.createElement("div");dots.className="dots";cards.forEach(function(){dots.appendChild(document.createElement("i"))});
  var L=document.createElement("button");L.type="button";L.className="ar l";L.textContent="❮";var Rb=document.createElement("button");Rb.type="button";Rb.className="ar r";Rb.textContent="❯";
  box.appendChild(trk);box.appendChild(L);box.appendChild(Rb);box.appendChild(dots);
  at.parentNode.insertBefore(box,at.nextSibling);
  function center(i,sm){var c=cards[i];if(!c)return;trk.scrollTo({left:c.offsetLeft-(trk.clientWidth-c.offsetWidth)/2,behavior:sm?"smooth":"auto"})}
  function near(){var mid=trk.scrollLeft+trk.clientWidth/2,best=0,bd=1e9;cards.forEach(function(c,i){var d=Math.abs(c.offsetLeft+c.offsetWidth/2-mid);if(d<bd){bd=d;best=i}});return best}
  function paint(){var mid=trk.scrollLeft+trk.clientWidth/2;cards.forEach(function(c){var d=Math.min(1,Math.abs(c.offsetLeft+c.offsetWidth/2-mid)/(c.offsetWidth+12));c.style.setProperty("--s",(1-.16*d).toFixed(3));c.style.setProperty("--o",(1-.35*d).toFixed(3))});
    var k=near();[].forEach.call(dots.children,function(d,i){d.className=i===k?"on":""})}
  L.onclick=function(){center(Math.max(0,near()-1),true)};Rb.onclick=function(){center(Math.min(cards.length-1,near()+1),true)};
  trk.addEventListener("scroll",function(){requestAnimationFrame(paint)},{passive:true});
  var tries=0;(function go(){if(!trk.clientWidth&&++tries<60){setTimeout(go,150);return}center(cur,false);paint()})();
  addEventListener("resize",function(){center(near(),false);paint()})}
/* ---- the play-time gift: 3 hours of play in a day = 1500 coins, 6 hours = 100 AG.
   The clock only runs while the app is on screen and the player is touching it; it starts again at midnight (Baghdad).
   Every minute is saved in ptime/{uid} and the database rules check that a real minute has passed, so it can't be faked. ---- */
var GT={gift:["دیاری","دیاری","هدية","Gift"],take:["وەرگرە!","وەریبگرە!","استلم!","Claim!"],
  pause:["ڕاوەستیایە","وەستاوە","متوقف","Paused"],tom:["سبەی","سبەی","غداً","Tomorrow"],
  info:["هەر ڕۆژ: ٣ سەعەتان یاری بکە ← 🪙 1500 کۆین\n٦ سەعەتان یاری بکە ← 💎 100 AG\nدەم تنێ دەمێ تو ل ناڤ یاریێ دچیت، و دەمێ تو دەردکەڤی ڕادوەستیت. هەر شەڤ ل نیڤا شەڤێ ژ نوو دەستپێدکەت.",
        "هەموو ڕۆژێک: ٣ کاتژمێر یاری بکە ← 🪙 1500 کۆین\n٦ کاتژمێر یاری بکە ← 💎 100 AG\nکات تەنها کاتێک دەڕوات کە لە ناو یارییەکەیت. هەموو شەوێک لە نیوەشەو دەست پێدەکاتەوە.",
        "كل يوم: العب ٣ ساعات ← 🪙 1500 عملة\nالعب ٦ ساعات ← 💎 100 AG\nالوقت يُحسب فقط وأنت داخل اللعبة، ويتوقف عند خروجك. يبدأ من جديد كل ليلة عند منتصف الليل.",
        "Every day: play 3 hours → 🪙 1500 coins\nplay 6 hours → 💎 100 AG\nThe clock only runs while you are in the game and stops when you leave. It restarts every night at midnight."],
  got1:["🎉 تە 1500 کۆین وەرگرتن!","🎉 1500 کۆینت وەرگرت!","🎉 حصلت على 1500 عملة!","🎉 You got 1500 coins!"],
  got2:["🎉 تە 100 AG وەرگرتن!","🎉 100 AG ت وەرگرت!","🎉 حصلت على 100 AG!","🎉 You got 100 AG!"],
  next:["٣ سەعەتێن دی ← 100 AG","٣ کاتژمێری تر ← 100 AG","٣ ساعات أخرى ← 100 AG","3 more hours → 100 AG"],
  err:["نەهاتە وەرگرتن، دووبارە بکە","وەرنەگیرا، دووبارە بکەرەوە","تعذر الاستلام، أعد المحاولة","Could not claim, try again"]};
var PT={uid:null,S:null,acc:0,act:0,off:0,busy:false,el:null};
function gtx(k){var a=GT[k];return a[lang()]||a[0]}
function ptNow(){return Date.now()+PT.off}
function ptDay(){return Math.floor((ptNow()+10800000)/86400000)}
function hms(sec){sec=Math.max(0,Math.ceil(sec));var h=Math.floor(sec/3600),m=Math.floor(sec%3600/60),x=sec%60;return(h<10?"0":"")+h+":"+(m<10?"0":"")+m+":"+(x<10?"0":"")+x}
function gCss(){if(document.getElementById("agGiftCss"))return;var st=document.createElement("style");st.id="agGiftCss";st.textContent=
 ".aggift{display:flex;flex-direction:column;align-items:center;margin:4px auto -2px;cursor:pointer;-webkit-tap-highlight-color:transparent;direction:ltr;width:max-content}"+
 ".aggift .bx{width:58px;height:58px;border-radius:50%;display:grid;place-items:center;font-size:32px;background:radial-gradient(circle at 50% 35%,#2b4ea8,#0c1b45);border:3px solid #f5c542;box-shadow:0 0 0 2px #7a5200,0 6px 14px rgba(0,0,0,.5);position:relative}"+
 ".aggift .bx:after{content:'🪙';position:absolute;right:-4px;bottom:-2px;font-size:18px}"+
 ".aggift .tm{margin-top:-8px;position:relative;background:linear-gradient(#1b2235,#0b1020);border:2px solid #f5c542;border-radius:10px;padding:2px 9px;font:800 14px/1.2 ui-monospace,Menlo,monospace;color:#fff;white-space:nowrap;unicode-bidi:plaintext}"+
 ".aggift .tm b{color:#ffd24a;margin-right:4px;font-weight:900}"+
 ".aggift.ps .tm{color:#aab}.aggift.ps .bx{filter:saturate(.7)}"+
 ".aggift.rd .bx{animation:agGB 1s ease-in-out infinite}.aggift.rd .tm{background:linear-gradient(#5be38a,#1f9d55);border-color:#b7f5cf;font-family:system-ui,sans-serif}"+
 ".aggift.dn .bx{filter:grayscale(.8);opacity:.75}"+
 "@keyframes agGB{0%,100%{transform:scale(1) rotate(0)}25%{transform:scale(1.12) rotate(-8deg)}75%{transform:scale(1.12) rotate(8deg)}}"+
 ".agpop{position:fixed;inset:0;z-index:99990;display:grid;place-items:center;background:rgba(0,0,0,.6)}"+
 ".agpop .cd{max-width:320px;margin:16px;padding:22px 18px 16px;border-radius:20px;background:linear-gradient(160deg,#25407e,#101a3a);border:3px solid #f5c542;color:#fff;text-align:center;font:600 15px/1.7 system-ui,'Noto Sans Arabic',sans-serif;white-space:pre-line;box-shadow:0 12px 30px rgba(0,0,0,.6)}"+
 ".agpop .cd .big{font-size:54px;line-height:1.1;margin-bottom:6px}"+
 ".agpop .cd button{margin-top:14px;background:linear-gradient(#ffe27a,#d6a21e);border:2px solid #fff3b0;color:#4a2c00;border-radius:12px;padding:6px 26px;font:800 15px system-ui,sans-serif}";
 document.head.appendChild(st)}
function gPop(msg,big){gCss();var o=document.createElement("div");o.className="agpop";var c=document.createElement("div");c.className="cd";
  var b=document.createElement("div");b.className="big";b.textContent=big||"🎁";var t=document.createElement("div");t.textContent=msg;
  var k=document.createElement("button");k.type="button";k.textContent="OK";c.appendChild(b);c.appendChild(t);c.appendChild(k);o.appendChild(c);
  o.onclick=function(e){if(e.target===o||e.target===k)o.remove()};document.body.appendChild(o)}
function ptState(){var S=PT.S,today=ptDay();if(!S||S.d!==today)return{k:"run",goal:180,m:0};
  if(S.m>=180&&!S.g1)return{k:"rd",g:1};if(S.m>=360&&S.g1&&!S.g2)return{k:"rd",g:2};if(S.g2)return{k:"dn"};
  return{k:"run",goal:S.m<180?180:360,m:S.m}}
function ptPaint(){var el=PT.el;if(!el)return;var st=ptState(),tm=el.querySelector(".tm"),act=document.visibilityState==="visible"&&Date.now()-PT.act<180000;
  el.className="aggift"+(st.k==="rd"?" rd":st.k==="dn"?" dn":act?"":" ps");
  if(st.k==="rd"){tm.textContent=gtx("take");return}
  if(st.k==="dn"){var left=(ptDay()*86400000+75600000-ptNow())/1000;tm.textContent=hms(left);return}
  tm.innerHTML="";var bb=document.createElement("b");bb.textContent=st.goal===180?"🪙":"💎";tm.appendChild(bb);
  tm.appendChild(document.createTextNode(hms((st.goal-st.m)*60-PT.acc)))}
function ptSave(){if(!PT.uid||PT.busy)return;var db=firebase.database(),r=db.ref("ptime/"+PT.uid),S=PT.S,today=ptDay(),TS=firebase.database.ServerValue.TIMESTAMP;
  if(!S||S.d<today){PT.busy=true;r.set({d:today,m:0,t:TS}).then(function(){PT.busy=false},function(){PT.busy=false});return}
  if(S.d!==today||S.m>=360||PT.acc<60||ptNow()-S.t<57000)return;
  PT.busy=true;r.set({d:S.d,m:S.m+1,t:TS,g1:S.g1||null,g2:S.g2||null}).then(function(){PT.acc=Math.max(0,PT.acc-60);PT.busy=false},function(){PT.busy=false})}
function ptClaim(){var st=ptState();if(st.k!=="rd"){gPop(gtx("info"),"🎁");return}if(PT.busy)return;PT.busy=true;
  var db=firebase.database(),u=PT.uid,S=PT.S,TS=firebase.database.ServerValue.TIMESTAMP,up={};
  up["ptime/"+u+"/t"]=TS;
  if(st.g===1){up["ptime/"+u+"/g1"]=true;up["coins/"+u+"/c"]=firebase.database.ServerValue.increment(1500)}
  else{up["ptime/"+u+"/g2"]=true;up["wallets/"+u+"/ag"]=firebase.database.ServerValue.increment(100)}
  db.ref().update(up).then(function(){PT.busy=false;try{navigator.vibrate&&navigator.vibrate([60,40,120])}catch(e){}
      gPop(st.g===1?gtx("got1")+"\n\n"+gtx("next"):gtx("got2"),st.g===1?"🪙":"💎")},
    function(){PT.busy=false;gPop(gtx("err"),"⚠️")})}
function buildGift(){var lob=document.getElementById("lobby");if(!lob||lob.querySelector(".aggift"))return;
  var at=lob.querySelector(".agcar");if(!at)return;gCss();
  var el=document.createElement("div");el.className="aggift no-tr";el.title=gtx("gift");
  el.innerHTML='<div class="bx">🎁</div><div class="tm">--:--:--</div>';el.onclick=ptClaim;
  at.parentNode.insertBefore(el,at);PT.el=el;ptPaint()}
function playTimer(){var tries=0;
  (function go(){try{if(!window.firebase||!firebase.apps||!firebase.apps.length){if(++tries<40)setTimeout(go,700);return}
    firebase.database().ref(".info/serverTimeOffset").on("value",function(s){PT.off=s.val()||0});
    var ref=null;
    firebase.auth().onAuthStateChanged(function(u){if(ref){ref.off();ref=null}PT.uid=u?u.uid:null;PT.S=null;PT.acc=0;
      if(PT.el)PT.el.style.display=u?"":"none";if(!u)return;
      ref=firebase.database().ref("ptime/"+u.uid);
      ref.on("value",function(s){PT.S=s.val();ptSave();ptPaint()},function(){})})}catch(e){}})();
  PT.act=Date.now();["pointerdown","touchstart","keydown","wheel"].forEach(function(e){addEventListener(e,function(){PT.act=Date.now()},{passive:true,capture:true})});
  setInterval(function(){
    if(PT.uid&&document.visibilityState==="visible"&&Date.now()-PT.act<180000){var st=ptState();if(st.k==="run")PT.acc=Math.min(PT.acc+1,90);ptSave()}
    ptPaint()},1000)}
function ready(){fillSwitch();buildCarousel();buildGift();playTimer();dmBadge();fzWatchAll()}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ready);else ready();
})();
