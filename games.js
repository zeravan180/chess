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
  {id:"kustirk", page:"kustirk.html", name:["کوستیرک", "ئەنگوستیلە", "محيبس", "Mheibes (Ring)"], skins:"ksskins.js",
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><ellipse cx=\"20\" cy=\"26\" rx=\"12\" ry=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.4\"/><path d=\"M14 10h12l3.5 4.5L20 24l-9.5-9.5z\" fill=\"currentColor\"/><path d=\"M14 10l6 14M26 10l-6 14M10.5 14.5h19\" stroke=\"#000\" stroke-opacity=\".35\" stroke-width=\"1\" fill=\"none\"/></svg>"},
  {id:"pool", page:"pool.html", name:["بلیارد", "بلیارد", "بلياردو", "8 Ball Pool"], skins:"poolskins.js",
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><circle cx=\"20\" cy=\"20\" r=\"16\" fill=\"currentColor\"/><circle cx=\"20\" cy=\"17\" r=\"7.5\" fill=\"#fff\"/><text x=\"20\" y=\"21.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" font-family=\"system-ui\" fill=\"#111\">8</text></svg>"},
  {id:"quiz", page:"quiz.html", name:["پرسیار", "پرسیار", "أسئلة", "Quiz"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><path d=\"M8 9h24a3 3 0 013 3v13a3 3 0 01-3 3H19l-7 6v-6H8a3 3 0 01-3-3V12a3 3 0 013-3z\" fill=\"currentColor\"/><text x=\"20\" y=\"24\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" font-family=\"system-ui\" fill=\"#7c3aed\">?</text></svg>"},
  {id:"spy", page:"spy.html", name:["کێ سیخۆڕە؟", "کێ سیخوڕە؟", "من الجاسوس؟", "Who is the spy?"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><path d=\"M6 17h28l-3-2-3-9-8 2-8-2-3 9z\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"26\" r=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"/><circle cx=\"26\" cy=\"26\" r=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"/><path d=\"M19 26h2\" stroke=\"currentColor\" stroke-width=\"2.6\"/></svg>"},
  {id:"fruit", page:"fruit.html", skins:"fruitskins.js", name:["میوێن کوردستانێ", "میوەکانی کوردستان", "فواكه كردستان", "Kurdistan Fruits"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><circle cx=\"14\" cy=\"24\" r=\"9\" fill=\"#ef3b2c\"/><circle cx=\"27\" cy=\"22\" r=\"6\" fill=\"#9b3fd6\"/><circle cx=\"31\" cy=\"30\" r=\"6\" fill=\"#9b3fd6\"/><circle cx=\"23\" cy=\"31\" r=\"6\" fill=\"#9b3fd6\"/><path d=\"M14 15c0-4 2-7 5-8\" stroke=\"currentColor\" stroke-width=\"2.4\" fill=\"none\"/><path d=\"M17 10c4-3 8-2 9 0-4 2-7 2-9 0z\" fill=\"#46b04a\"/></svg>"},
  {id:"hockey", page:"hockey.html", skins:"hockeyskins.js", name:["هۆکیا مێزێ", "هۆکی مێز", "هوكي الهواء", "Air Hockey"],
   icon:"<svg viewBox=\"0 0 40 40\" aria-hidden=\"true\"><rect x=\"8\" y=\"3\" width=\"24\" height=\"34\" rx=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"/><path d=\"M8 20h24\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"23\" cy=\"14\" r=\"3.5\" fill=\"currentColor\"/><circle cx=\"17\" cy=\"28\" r=\"5.5\" fill=\"currentColor\"/></svg>"},
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
window.AG={games:GAMES,route:route,fillSwitch:fillSwitch,packs:PACKS,addPack:function(p){if(!p.game)p.game=window.AG_G||"gen";PACKS.push(p)},nm:function(a){return(a&&(a[lang()]||a[0]))||""}};
// the shop (chess page) and the game's own page load that game's skins file
GAMES.forEach(function(g){if(g.skins&&(here()==="./"||here()===g.page))document.write('<script>window.AG_G="'+g.id+'"<\/script><script src="'+g.skins+'"><\/script><script>window.AG_G=""<\/script>')});

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
  worms:["#0ea5e9","#082f49","🪱"],xo:["#4f46e5","#1e1b4b","❌"],dots:["#d97706","#451a03","▦"],kustirk:["#be185d","#4a0420","💍"],pool:["#0f766e","#042f2e","🎱"],quiz:["#7c3aed","#2e1065","🧠"],spy:["#dc2626","#1e1b4b","🕵️"],fruit:["#16a34a","#0f3d2e","🍎"],hockey:["#7b5cff","#070b24","🏒"]};
AG.theme=THEME;
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
   The clock only runs while the app is on screen and the player is touching it; leaving and coming back carries on from the same time; at midnight (Baghdad) it starts again from 3:00:00.
   Every minute is saved in ptime/{uid} and the database rules check that a real minute has passed, so it can't be faked. ---- */
var GT={gift:["دیاری","دیاری","هدية","Gift"],take:["وەرگرە!","وەریبگرە!","استلم!","Claim!"],
  pause:["ڕاوەستیایە","وەستاوە","متوقف","Paused"],tom:["سبەی","سبەی","غداً","Tomorrow"],
  info:["🎁 دیاریەکا ڤەشارتی!\nیاری بکە هەتا دەمژمێر دگەهیتە 00:00:00، پاشان ڤەکە و ببینە کا چ تێدایە.\nدەم تنێ دەمێ تو ل ناڤ یاریێ دچیت، و دەمێ تو دەردکەڤی ڕادوەستیت. ئەگەر دەرکەڤی و بزڤڕی، ژ وی جهی بەردەوام دبیت. هەر شەڤ ل نیڤا شەڤێ ژ نوو دەستپێدکەت.",
        "🎁 دیارییەکی شاراوە!\nیاری بکە تا کاتژمێرەکە دەگاتە 00:00:00، پاشان بیکەرەوە و بزانە چی تێدایە.\nکات تەنها کاتێک دەڕوات کە لە ناو یارییەکەیت. ئەگەر دەرچیت و بگەڕێیتەوە، لە هەمان شوێن بەردەوام دەبێت. هەموو شەوێک لە نیوەشەو لە سەرەتاوە دەست پێدەکاتەوە.",
        "🎁 هدية مخفية!\nالعب حتى يصل العداد إلى 00:00:00، ثم افتحها واكتشف ما بداخلها.\nالوقت يُحسب فقط وأنت داخل اللعبة، ويتوقف عند خروجك. إذا خرجت ورجعت يكمل من حيث توقف. يبدأ من جديد كل ليلة عند منتصف الليل.",
        "🎁 A mystery gift!\nPlay until the timer reaches 00:00:00, then open it to see what's inside.\nThe clock only runs while you are in the game and stops when you leave. Leave and come back and it carries on where it stopped. It starts again every night at midnight."],
  got1:["🎉 تە 1500 کۆین وەرگرتن!","🎉 1500 کۆینت وەرگرت!","🎉 حصلت على 1500 عملة!","🎉 You got 1500 coins!"],
  got2:["🎉 تە 100 AG وەرگرتن!","🎉 100 AG ت وەرگرت!","🎉 حصلت على 100 AG!","🎉 You got 100 AG!"],
  next:["🎁 دیاریەکا دی یا ڤەشارتی ل هیڤیا تە یە!","🎁 دیارییەکی تری شاراوە چاوەڕێتە!","🎁 هدية مخفية أخرى بانتظارك!","🎁 Another mystery gift is waiting for you!"],
  err:["نەهاتە وەرگرتن، دووبارە بکە","وەرنەگیرا، دووبارە بکەرەوە","تعذر الاستلام، أعد المحاولة","Could not claim, try again"]};
var PT={uid:null,S:null,acc:0,act:0,off:0,busy:false,el:null};
function gtx(k){var a=GT[k];return a[lang()]||a[0]}
function ptNow(){return Date.now()+PT.off}
var DAYMS=86400000;
// the day (Baghdad time) - the gift starts again at midnight
function ptDay(){return Math.floor((ptNow()+10800000)/DAYMS)}
function ptOld(S){return!S||S.d!==ptDay()}
// the seconds of the minute not yet saved are kept on the phone, so leaving and coming back loses nothing
function accSave(){try{if(PT.uid&&PT.S&&PT.S.d)localStorage.setItem("ag.ptacc",JSON.stringify({u:PT.uid,d:PT.S.d,m:PT.S.m,a:PT.acc}))}catch(e){}}
function accLoad(){try{var o=JSON.parse(localStorage.getItem("ag.ptacc")||"null");if(o&&o.u===PT.uid&&PT.S&&o.d===PT.S.d&&o.m===PT.S.m)PT.acc=Math.max(PT.acc,Math.min(90,o.a||0))}catch(e){}}
function hms(sec){sec=Math.max(0,Math.ceil(sec));var h=Math.floor(sec/3600),m=Math.floor(sec%3600/60),x=sec%60;return(h<10?"0":"")+h+":"+(m<10?"0":"")+m+":"+(x<10?"0":"")+x}
function gCss(){if(document.getElementById("agGiftCss"))return;var st=document.createElement("style");st.id="agGiftCss";st.textContent=
 ".aggift{position:fixed;z-index:9000;display:flex;flex-direction:column;align-items:center;cursor:grab;-webkit-tap-highlight-color:transparent;direction:ltr;width:max-content;touch-action:none;user-select:none;-webkit-user-select:none}"+
 ".aggift.drag{cursor:grabbing;opacity:.85}.aggift.drag .bx{transform:scale(1.1)}"+
 ".aggift .bx{width:58px;height:58px;border-radius:50%;display:grid;place-items:center;font-size:32px;background:radial-gradient(circle at 50% 35%,#2b4ea8,#0c1b45);border:3px solid #f5c542;box-shadow:0 0 0 2px #7a5200,0 6px 14px rgba(0,0,0,.5);position:relative}"+
 ".aggift .bx:after{content:'?';position:absolute;right:-5px;bottom:-3px;width:20px;height:20px;border-radius:50%;background:#f5c542;color:#4a2c00;font:900 14px/20px system-ui,sans-serif;text-align:center;box-shadow:0 1px 0 #7a5200}"+
 ".aggift .tm{margin-top:-8px;position:relative;background:linear-gradient(#1b2235,#0b1020);border:2px solid #f5c542;border-radius:10px;padding:2px 9px;font:800 14px/1.2 ui-monospace,Menlo,monospace;color:#fff;white-space:nowrap;unicode-bidi:plaintext}"+
 ".aggift .tm b{color:#ffd24a;margin-right:4px;font-weight:900}"+
 ".aggift.ps .tm{color:#aab}.aggift.ps .bx{filter:saturate(.7)}"+
 ".aggift.rd .bx{animation:agGB 1s ease-in-out infinite}.aggift.rd .tm{background:linear-gradient(#5be38a,#1f9d55);border-color:#b7f5cf;font-family:system-ui,sans-serif}"+
 ".aggift.dn .bx{filter:grayscale(.8);opacity:.75}"+
 "@keyframes agGB{0%,100%{transform:scale(1) rotate(0)}25%{transform:scale(1.12) rotate(-8deg)}75%{transform:scale(1.12) rotate(8deg)}}"+
 ".agpop{position:fixed;inset:0;z-index:99990;display:grid;place-items:center;background:rgba(0,0,0,.6)}"+
 ".agpop .cd{max-width:320px;margin:16px;padding:22px 18px 16px;border-radius:20px;background:linear-gradient(160deg,#25407e,#101a3a);border:3px solid #f5c542;color:#fff;text-align:center;font:600 15px/1.7 system-ui,'Noto Sans Arabic',sans-serif;white-space:pre-line;box-shadow:0 12px 30px rgba(0,0,0,.6)}"+
 ".agpop .cd .big{font-size:54px;line-height:1.1;margin-bottom:6px}"+
 ".agcoin{display:inline-grid;place-items:center;width:64px;height:64px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffe9a0,#f2b632 45%,#c98a12 80%);border:3px solid #8a5a00;box-shadow:inset 0 0 0 4px #f5c542,inset 0 0 0 6px #b07a10,0 4px 10px rgba(0,0,0,.45);font:900 24px/1 Arial Black,Arial,sans-serif;color:#3b2a14;text-shadow:0 1px 0 rgba(255,255,255,.5);outline:2px dashed rgba(90,60,0,.55);outline-offset:-12px}"+
 ".agpop .cd button{margin-top:14px;background:linear-gradient(#ffe27a,#d6a21e);border:2px solid #fff3b0;color:#4a2c00;border-radius:12px;padding:6px 26px;font:800 15px system-ui,sans-serif}";
 document.head.appendChild(st)}
function gPop(msg,big){gCss();var o=document.createElement("div");o.className="agpop";var c=document.createElement("div");c.className="cd";
  var b=document.createElement("div");b.className="big";if(big==="AG"){var cn=document.createElement("span");cn.className="agcoin";cn.textContent="AG";b.appendChild(cn)}else b.textContent=big||"🎁";var t=document.createElement("div");t.textContent=msg;
  var k=document.createElement("button");k.type="button";k.textContent="OK";c.appendChild(b);c.appendChild(t);c.appendChild(k);o.appendChild(c);
  o.onclick=function(e){if(e.target===o||e.target===k)o.remove()};document.body.appendChild(o)}
function ptState(){var S=PT.S;if(ptOld(S))return{k:"run",goal:180,m:0};
  if(S.m>=180&&!S.g1)return{k:"rd",g:1};if(S.m>=360&&S.g1&&!S.g2)return{k:"rd",g:2};if(S.g2)return{k:"dn"};
  return{k:"run",goal:S.m<180?180:360,m:S.m}}
function ptPaint(){var el=PT.el;if(!el)return;var st=ptState(),tm=el.querySelector(".tm"),act=document.visibilityState==="visible"&&Date.now()-PT.act<180000;
  el.className="aggift"+(st.k==="rd"?" rd":st.k==="dn"?" dn":act?"":" ps");
  if(!PT.ld){tm.textContent="--:--:--";return}
  if(st.k==="rd"){tm.textContent=gtx("take");return}
  if(st.k==="dn"){var left=((ptDay()+1)*DAYMS-10800000-ptNow())/1000;tm.textContent=hms(left);return}
  tm.innerHTML="";var bb=document.createElement("b");bb.textContent="⏱";tm.appendChild(bb);
  tm.appendChild(document.createTextNode(hms((st.goal-st.m)*60-PT.acc)))}
function ptSave(){if(!PT.uid||!PT.ld||PT.busy)return;var db=firebase.database(),r=db.ref("ptime/"+PT.uid),S=PT.S,TS=firebase.database.ServerValue.TIMESTAMP;
  if(ptOld(S)){PT.busy=true;PT.acc=0;r.set({d:ptDay(),m:0,t:TS}).then(function(){PT.busy=false;PT.err=""},function(e){PT.busy=false;PT.err=(e&&e.code)||"err"});return}
  if(S.m>=360||PT.acc<60||ptNow()-S.t<57000)return;
  PT.busy=true;r.set({d:S.d,m:S.m+1,t:TS,g1:S.g1||null,g2:S.g2||null}).then(function(){PT.acc=Math.max(0,PT.acc-60);PT.busy=false;PT.err=""},function(e){PT.busy=false;PT.err=(e&&e.code)||"err"})}
function ptDiag(){var S=PT.S;return"\n\n[v4 · "+(PT.uid?"✓":"✗")+" · m="+(S&&S.m!=null?S.m:"-")+" · "+(S&&S.d?"d"+S.d:"-")+" · "+Math.floor(PT.acc)+"s"+(PT.err?" · ⚠ "+PT.err:"")+"]"}
function ptClaim(){var st=ptState();if(st.k!=="rd"){gPop(gtx("info")+ptDiag(),"🎁");return}if(PT.busy)return;PT.busy=true;
  var db=firebase.database(),u=PT.uid,S=PT.S,TS=firebase.database.ServerValue.TIMESTAMP,up={};
  up["ptime/"+u+"/t"]=TS;
  if(st.g===1){up["ptime/"+u+"/g1"]=true;up["coins/"+u+"/c"]=firebase.database.ServerValue.increment(1500)}
  else{up["ptime/"+u+"/g2"]=true;up["wallets/"+u+"/ag"]=firebase.database.ServerValue.increment(100)}
  db.ref().update(up).then(function(){PT.busy=false;try{navigator.vibrate&&navigator.vibrate([60,40,120])}catch(e){}
      gPop(st.g===1?gtx("got1")+"\n\n"+gtx("next"):gtx("got2"),st.g===1?"🪙":"AG")},
    function(){PT.busy=false;gPop(gtx("err"),"⚠️")})}
function buildGift(){var lob=document.getElementById("lobby");if(!lob||document.querySelector(".aggift"))return;gCss();
  var el=document.createElement("div");el.className="aggift no-tr";el.title=gtx("gift");
  el.innerHTML='<div class="bx">🎁</div><div class="tm">--:--:--</div>';document.body.appendChild(el);PT.el=el;
  // where the player left it last time (as a share of the screen), first time: top right under the coins bar
  var pos=null;try{pos=JSON.parse(localStorage.getItem("ag.giftPos")||"null")}catch(e){}
  function place(){var w=el.offsetWidth||80,h=el.offsetHeight||80,x=pos?pos.x*innerWidth:innerWidth-w-10,y=pos?pos.y*innerHeight:150;
    x=Math.max(4,Math.min(innerWidth-w-4,x));y=Math.max(4,Math.min(innerHeight-h-4,y));el.style.left=x+"px";el.style.top=y+"px"}
  // drag with a finger anywhere; a short tap (no movement) opens / claims the gift
  var st=null;
  el.addEventListener("pointerdown",function(e){st={id:e.pointerId,sx:e.clientX,sy:e.clientY,ox:el.offsetLeft,oy:el.offsetTop,mv:false};try{el.setPointerCapture(e.pointerId)}catch(_){}});
  el.addEventListener("pointermove",function(e){if(!st||e.pointerId!==st.id)return;var dx=e.clientX-st.sx,dy=e.clientY-st.sy;
    if(!st.mv&&Math.abs(dx)+Math.abs(dy)<8)return;st.mv=true;el.classList.add("drag");
    var w=el.offsetWidth,h=el.offsetHeight;el.style.left=Math.max(4,Math.min(innerWidth-w-4,st.ox+dx))+"px";el.style.top=Math.max(4,Math.min(innerHeight-h-4,st.oy+dy))+"px"});
  function end(e){if(!st||e.pointerId!==st.id)return;var moved=st.mv;st=null;el.classList.remove("drag");
    if(moved){pos={x:el.offsetLeft/innerWidth,y:el.offsetTop/innerHeight};try{localStorage.setItem("ag.giftPos",JSON.stringify(pos))}catch(_){}}
    else if(e.type==="pointerup")ptClaim()}
  el.addEventListener("pointerup",end);el.addEventListener("pointercancel",end);
  addEventListener("resize",place);place();setTimeout(place,300);ptPaint()}
function giftShow(){var el=PT.el;if(!el)return;var lob=document.getElementById("lobby");
  var on=!!PT.uid&&!!lob&&lob.getClientRects().length>0&&getComputedStyle(lob).visibility!=="hidden";el.style.display=on?"":"none";
  // keep it fully on the screen (its width changes with the text)
  if(on&&!el.classList.contains("drag")){var r=el.getBoundingClientRect();if(r.right>innerWidth-4)el.style.left=Math.max(4,innerWidth-r.width-4)+"px";if(r.bottom>innerHeight-4)el.style.top=Math.max(4,innerHeight-r.height-4)+"px"}}
function playTimer(){var tries=0;
  (function go(){try{if(!window.firebase||!firebase.apps||!firebase.apps.length){if(++tries<40)setTimeout(go,700);return}
    firebase.database().ref(".info/serverTimeOffset").on("value",function(s){PT.off=s.val()||0});
    var ref=null;
    firebase.auth().onAuthStateChanged(function(u){if(ref){ref.off();ref=null}PT.uid=u?u.uid:null;PT.S=null;PT.ld=false;PT.acc=0;
      giftShow();if(!u)return;
      firebase.database().ref("profiles/"+u.uid+"/public/frame").once("value").then(function(s){setMyFrame(s.val()||"")}).catch(function(){});
      ref=firebase.database().ref("ptime/"+u.uid);
      ref.on("value",function(s){PT.S=s.val();PT.ld=true;accLoad();ptSave();ptPaint()},function(e){PT.err="read "+((e&&e.code)||"")})})}catch(e){}})();
  PT.act=Date.now();["pointerdown","touchstart","keydown","wheel"].forEach(function(e){addEventListener(e,function(){PT.act=Date.now()},{passive:true,capture:true})});
  setInterval(function(){
    if(PT.uid&&PT.ld&&document.visibilityState==="visible"&&Date.now()-PT.act<180000){var st=ptState();if(st.k==="run")PT.acc=Math.min(PT.acc+1,90);ptSave();accSave()}
    giftShow();ptPaint()},1000)}
/* ---- 🖼 avatar frames: bought in the shop, shown around the player's picture on every page ----
   A frame is an SVG drawn over the round picture: the picture fills the middle (radius 47 of 64). */
var FRN=0;
function fid(){return "agf"+(++FRN)}
function ring(R,r,fill,extra){return '<path fill-rule="evenodd" fill="'+fill+'" d="M'+(-R)+' 0a'+R+' '+R+' 0 1 0 '+(2*R)+' 0a'+R+' '+R+' 0 1 0 '+(-2*R)+' 0zM'+(-r)+' 0a'+r+' '+r+' 0 1 0 '+(2*r)+' 0a'+r+' '+r+' 0 1 0 '+(-2*r)+' 0z"'+(extra||"")+'/>'}
function lin(id,cs,x2,y2){var h='<linearGradient id="'+id+'" x1="0" y1="0" x2="'+(x2==null?1:x2)+'" y2="'+(y2==null?1:y2)+'">';cs.forEach(function(c,i){h+='<stop offset="'+(i/(cs.length-1)).toFixed(2)+'" stop-color="'+c+'"/>'});return h+'</linearGradient>'}
function rad(id,a,b){return '<radialGradient id="'+id+'" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="'+a+'"/><stop offset="1" stop-color="'+b+'"/></radialGradient>'}
function at(deg,r){var a=(deg-90)*Math.PI/180;return[(Math.cos(a)*r).toFixed(2),(Math.sin(a)*r).toFixed(2)]}
// a little four-point sparkle that blinks
function spark(x,y,s,c,dur,beg){return '<path d="M'+x+' '+(y-s)+'Q'+x+' '+y+' '+(x+s)+' '+y+'Q'+x+' '+y+' '+x+' '+(y+s)+'Q'+x+' '+y+' '+(x-s)+' '+y+'Q'+x+' '+y+' '+x+' '+(y-s)+'z" fill="'+(c||"#fff")+'" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="'+(dur||2)+'s" begin="'+(beg||0)+'s" repeatCount="indefinite"/></path>'}
function sparks(n,r,c,dur){var h="";for(var i=0;i<n;i++){var p=at(i*360/n+17,r);h+=spark(+p[0],+p[1],4.5,c,dur||2.4,(i*(dur||2.4)/n).toFixed(2))}return h}
// a moving shine that runs round a metal ring
function sweep(id,R,r){return '<g opacity=".55">'+ring(R,r,'url(#'+id+'s)')+'<animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="5s" repeatCount="indefinite"/></g>'}
function sweepDef(id){return '<linearGradient id="'+id+'s" x1="0" y1="0" x2="1" y2="0"><stop offset=".35" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".95"/><stop offset=".65" stop-color="#fff" stop-opacity="0"/></linearGradient>'}
function gems(n,r,size,a,b,id,off){var h="";for(var i=0;i<n;i++){var p=at(i*360/n+(off||0),r);h+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+size+'" fill="url(#'+id+')" stroke="#0006" stroke-width=".8"/>'}return h}
function metal(id,cs,o){o=o||{};var h='<defs>'+lin(id,cs)+sweepDef(id)+(o.gem?rad(id+"g",o.gem[0],o.gem[1]):"")+'</defs>';
  h+=ring(58,46,'url(#'+id+')',' stroke="#0007" stroke-width="1"');h+=ring(55,49,'none',' stroke="#fff6" stroke-width="1"');
  if(o.dots)for(var i=0;i<o.dots;i++){var p=at(i*360/o.dots,52);h+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="1.6" fill="'+cs[0]+'" stroke="#0005" stroke-width=".6"/>'}
  if(o.gem)h+=gems(o.gn||4,52,o.gs||4.6,0,0,id+"g",o.goff||0);
  h+=sweep(id,58,46);if(o.sp)h+=sparks(o.sp,60,o.spc);return h}
function crown(id,c1,c2,y){return '<g transform="translate(0 '+(y||-60)+')"><path d="M-17 6L-20-10-9-2 0-14 9-2 20-10 17 6z" fill="url(#'+id+')" stroke="#5a3a00" stroke-width="1.2"/>'+
  '<circle cx="0" cy="-14" r="2.6" fill="#ff3b5c"/><circle cx="-20" cy="-10" r="2.2" fill="#4fc3ff"/><circle cx="20" cy="-10" r="2.2" fill="#4fc3ff"/><rect x="-17" y="4" width="34" height="5" rx="2" fill="url(#'+id+')" stroke="#5a3a00" stroke-width="1"/></g>'}
function laurel(c){var h="";[-1,1].forEach(function(sd){for(var i=0;i<6;i++){var a=200+i*14,p=at(sd<0?a:360-a,60),rot=(sd<0?a:360-a)+(sd<0?60:-60);
  h+='<ellipse cx="'+p[0]+'" cy="'+p[1]+'" rx="6.5" ry="2.8" fill="'+c+'" stroke="#0004" stroke-width=".6" transform="rotate('+rot.toFixed(0)+' '+p[0]+' '+p[1]+')"/>'}});return h}
var FRAMES={
 fr_none:{price:0,none:1,name:["بێ چوارچۆڤە","بێ چوارچێوە","بدون إطار","No frame"],draw:function(){return""}},
 fr_bronze:{price:100,name:["چوارچۆڤێ برۆنزی","چوارچێوەی برۆنزی","إطار برونزي","Bronze frame"],draw:function(id){return metal(id,["#f3c29a","#b06a32","#6e3b14","#c98a54","#7a4318"],{dots:12})}},
 fr_silver:{price:200,name:["چوارچۆڤێ زیڤی","چوارچێوەی زیو","إطار فضي","Silver frame"],draw:function(id){return metal(id,["#ffffff","#c7ced6","#7d8792","#e4e9ee","#8a949f"],{gem:["#e8f6ff","#7aa6c9"],gn:4,sp:3})}},
 fr_gold:{price:300,name:["چوارچۆڤێ زێڕی","چوارچێوەی زێڕ","إطار ذهبي","Gold frame"],draw:function(id){return '<defs>'+lin(id+"l",["#7fbf3a","#2f6b12"])+'</defs>'+laurel("url(#"+id+"l)")+metal(id,["#fff3b0","#f5c542","#a8740c","#ffe07a","#b07c10"],{dots:16,sp:4,spc:"#fff8d0"})}},
 fr_rose:{price:300,name:["زێڕێ گولی","زێڕی گوڵی","ذهب وردي","Rose gold"],draw:function(id){var h=metal(id,["#ffe3dc","#e8a598","#a85f55","#f6c7bc","#b8706a"],{sp:3,spc:"#fff0f0"});for(var i=0;i<20;i++){var p=at(i*18,52);h+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="1.9" fill="#fff8f4" stroke="#c98" stroke-width=".5"/>'}return h}},
 fr_emerald:{price:400,name:["زومروت","زومروت","زمرد","Emerald"],draw:function(id){return metal(id,["#fff3b0","#e6b43a","#8a5c08","#ffd76a","#9a6a10"],{gem:["#5dfc9a","#04602c"],gn:8,gs:4.2,sp:4,spc:"#d0ffe0"})}},
 fr_sapphire:{price:400,name:["یاقووتا شین","یاقووتی شین","ياقوت أزرق","Sapphire"],draw:function(id){return metal(id,["#ffffff","#c7ced6","#6f7a86","#e4e9ee","#7d8792"],{gem:["#6ab8ff","#0a2a8a"],gn:8,gs:4.2,sp:4,spc:"#d8ecff"})}},
 fr_ruby:{price:400,name:["یاقووتا سۆر","یاقووتی سوور","ياقوت أحمر","Ruby"],draw:function(id){return metal(id,["#fff3b0","#e6b43a","#8a5c08","#ffd76a","#9a6a10"],{gem:["#ff6b8a","#7a0018"],gn:8,gs:4.2,goff:22.5,sp:4,spc:"#ffe0e8"})}},
 fr_kurd:{price:500,name:["کوردستان","کوردستان","كردستان","Kurdistan"],draw:function(id){var h='<defs>'+lin(id,["#fff3b0","#f5c542","#a8740c"])+sweepDef(id)+'</defs>';
   h+=ring(58,54.2,"#e31b23")+ring(54.2,50.2,"#ffffff")+ring(50.2,46,"#278e43")+ring(58,46,"none",' stroke="#0006" stroke-width="1"');
   var s='<g transform="translate(0 -56)"><circle r="7.5" fill="url(#'+id+')" stroke="#a06a00" stroke-width="1"/>';for(var i=0;i<21;i++){var p=at(i*360/21,11.5),q=at(i*360/21,7);s+='<line x1="'+q[0]+'" y1="'+q[1]+'" x2="'+p[0]+'" y2="'+p[1]+'" stroke="#f5c542" stroke-width="1.6" stroke-linecap="round"/>'}
   s+='<animateTransform attributeName="transform" type="rotate" from="0 0 -56" to="360 0 -56" dur="30s" repeatCount="indefinite" additive="sum"/></g>';return h+s+sweep(id,58,46)+sparks(3,60,"#fff7c0")}},
 fr_fire:{price:600,rare:1,name:["ئاگر","ئاگر","نار","Fire"],draw:function(id){var h='<defs>'+lin(id,["#fff17a","#ff9a1f","#e0340b","#7a0c00"],0,1)+'<radialGradient id="'+id+'f" cx=".5" cy="1" r="1"><stop offset="0" stop-color="#fff59d"/><stop offset=".45" stop-color="#ff9800"/><stop offset="1" stop-color="#d32f2f" stop-opacity="0"/></radialGradient></defs>';
   var fl="";for(var i=0;i<16;i++){fl+='<path d="M-5 0Q-6 -9 0 -17Q6 -9 5 0z" fill="url(#'+id+'f)" transform="rotate('+(i*22.5)+') translate(0 -55)"><animateTransform attributeName="transform" type="scale" values="1 1;1.1 1.35;.95 .9;1 1" dur="'+(0.7+(i%4)*0.13).toFixed(2)+'s" repeatCount="indefinite" additive="sum"/></path>'}
   return h+'<g>'+fl+'<animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite"/></g>'+ring(57,46,'url(#'+id+')',' stroke="#5a0a00" stroke-width="1"')+sparks(5,58,"#ffe082",1.6)}},
 fr_ice:{price:600,rare:1,name:["بەفر و قەشا","بەفر و سەهۆڵ","جليد","Ice"],draw:function(id){var h=metal(id,["#ffffff","#bfe9ff","#5fb3e6","#e6f7ff","#7cc6f0"],{});
   for(var i=0;i<8;i++){var p=at(i*45,56);h+='<g transform="translate('+p[0]+' '+p[1]+') rotate('+(i*45)+')"><path d="M0-8L2.4 0 0 8-2.4 0z" fill="#e8f8ff" stroke="#7cc6f0" stroke-width=".8"/><path d="M-6 0H6M-4-4L4 4M4-4L-4 4" stroke="#fff" stroke-width="1" opacity=".85"/></g>'}
   return h+sparks(6,61,"#ffffff",2)}},
 fr_neon:{price:700,rare:1,name:["نیۆنا ڕەنگین","نیۆنی ڕەنگاوڕەنگ","نيون ملوّن","Rainbow neon"],draw:function(id){var cs=["#ff1744","#ff9100","#ffea00","#00e676","#00b0ff","#d500f9"],h='<defs><filter id="'+id+'b" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.2"/></filter></defs><g>';
   cs.forEach(function(c,i){var a0=i*60,a1=a0+60,p0=at(a0,52),p1=at(a1,52);h+='<path d="M'+p0[0]+' '+p0[1]+'A52 52 0 0 1 '+p1[0]+' '+p1[1]+'" stroke="'+c+'" stroke-width="9" fill="none" filter="url(#'+id+'b)"/><path d="M'+p0[0]+' '+p0[1]+'A52 52 0 0 1 '+p1[0]+' '+p1[1]+'" stroke="'+c+'" stroke-width="4.5" fill="none"/>'});
   return h+'<animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite"/></g>'+ring(47.5,46,"#fff")+ring(57,56,"#fff",' opacity=".7"')}},
 fr_galaxy:{price:800,rare:1,name:["گەلەستێرک","گەلەستێرە","مجرة","Galaxy"],draw:function(id){var h='<defs>'+lin(id,["#2b0a5e","#7c4dff","#0b1a4a","#d500f9","#1a0640"])+'</defs>'+ring(58,46,'url(#'+id+')',' stroke="#b388ff" stroke-width="1.2"');
   var st="";for(var i=0;i<26;i++){var p=at(i*137.5%360,47.5+((i*7)%10));st+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(0.6+(i%3)*0.45).toFixed(2)+'" fill="#fff"><animate attributeName="opacity" values=".2;1;.2" dur="'+(1.2+(i%5)*.4).toFixed(1)+'s" repeatCount="indefinite"/></circle>'}
   return h+'<g>'+st+'<animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="40s" repeatCount="indefinite"/></g>'+'<g transform="translate(0 -58)"><circle r="5.5" fill="#ffd54f"/><ellipse rx="10" ry="2.6" fill="none" stroke="#ffe082" stroke-width="1.3" transform="rotate(-20)"/></g>'+sparks(4,61,"#e1d5ff")}},
 fr_royal:{price:900,rare:1,name:["پاشایی","پاشایەتی","ملكي","Royal"],draw:function(id){return metal(id,["#fff3b0","#f5c542","#a8740c","#ffe07a","#b07c10"],{gem:["#ff4d6d","#6a0015"],gn:6,gs:4.2,goff:30,sp:5,spc:"#fff8d0"})+crown(id,"#fff3b0","#a8740c",-58)}},
 fr_diamond:{price:1000,rare:1,name:["ئەلماس","ئەڵماس","ألماس","Diamond"],draw:function(id){var h='<defs>'+lin(id,["#ffffff","#bdefff","#7fd6ff","#ffffff","#c9b8ff"])+sweepDef(id)+'</defs>';
   for(var i=0;i<24;i++){var a0=i*15,a1=a0+15,o0=at(a0,58),o1=at(a1,58),n0=at(a0,46),n1=at(a1,46);h+='<path d="M'+o0[0]+' '+o0[1]+'A58 58 0 0 1 '+o1[0]+' '+o1[1]+'L'+n1[0]+' '+n1[1]+'A46 46 0 0 0 '+n0[0]+' '+n0[1]+'z" fill="'+(i%2?"#e8faff":"url(#"+id+")")+'" stroke="#9fdcff" stroke-width=".6"/>'}
   for(i=0;i<12;i++){var p=at(i*30+7.5,52);h+='<path d="M'+p[0]+' '+(+p[1]-3.6)+'l3 3.6-3 3.6-3-3.6z" fill="#fff" stroke="#7fd6ff" stroke-width=".5"/>'}
   return h+sweep(id,58,46)+sparks(8,60,"#ffffff",1.8)}},
 fr_legend:{price:1000,rare:1,name:["باسکێن زێڕی","باڵی زێڕین","أجنحة ذهبية","Golden wings"],draw:function(id){var w="";
   [-1,1].forEach(function(sd){for(var i=0;i<5;i++){var y=-26+i*10,l=26-i*3.4;w+='<path d="M'+(sd*53)+' '+y+'q'+(sd*l*0.55)+' -9 '+(sd*l)+' '+(-4+i*1.5)+'q'+(-sd*l*0.4)+' 7 '+(-sd*l)+' 7z" fill="url(#'+id+')" stroke="#7a5200" stroke-width=".8"/>'}});
   return '<g opacity=".95">'+w+'<animateTransform attributeName="transform" type="scale" values="1 1;1.04 .97;1 1" dur="2.4s" repeatCount="indefinite"/></g>'+metal(id,["#fff8c8","#ffcf3a","#b07c10","#ffe78a","#9a6a10"],{gem:["#7ee8ff","#004a7a"],gn:4,gs:4.6,sp:6,spc:"#fffbe0"})+crown(id,"#fff3b0","#a8740c",-59)}}
};
function has(k){return !!(FRAMES[k]&&!FRAMES[k].none)}
function frameSvg(k){var f=FRAMES[k];if(!has(k))return"";return '<svg class="agfr" viewBox="-64 -64 128 128" aria-hidden="true">'+f.draw(fid())+'</svg>'}
// put a frame over a round picture: host is the element that holds it (it gets position:relative)
function applyFrame(host,k){if(!host)return;var old=host.querySelector(":scope>.agfr");if(old)old.remove();host.classList.toggle("agfr-host",has(k));
  if(!has(k))return;host.insertAdjacentHTML("beforeend",frameSvg(k))}
// a round picture (img or letter) with a frame: returns a wrapper
function framed(el,k){if(!has(k))return el;var w=document.createElement("span");w.className="agfr-wrap";w.append(el);applyFrame(w,k);return w}
function myFrame(){try{return localStorage.getItem("ag.frame")||""}catch(e){return""}}
function setMyFrame(k){try{if(k)localStorage.setItem("ag.frame",k);else localStorage.removeItem("ag.frame")}catch(e){}FRC={};paintMine();if(window.AG&&AG.seatFrames)AG.seatFrames()}
function paintMine(){var k=myFrame();[].forEach.call(document.querySelectorAll(".tb-av,.js-myframe"),function(h){applyFrame(h,k)})}
(function(){var st=document.createElement("style");st.textContent=".agfr-host,.agfr-wrap{position:relative}.agfr-wrap{display:inline-flex;flex:none;border-radius:50%}"+
  ".agfr{position:absolute;left:50%;top:50%;width:136%;height:136%;transform:translate(-50%,-50%);pointer-events:none;z-index:2;overflow:visible}"+
  ".agfr.agfr-over{z-index:1}.lav .lsec,.lav .lchip,.lav .talk{z-index:3}"+".tb-av.agfr-host .lvl{z-index:3}.tb-av.agfr-host{background:none!important}"+
  ".fpv{position:relative;width:96px;height:96px;margin:14px auto 10px;border-radius:50%;background:radial-gradient(circle at 50% 38%,#9fb3c8 0 22%,transparent 23%),radial-gradient(ellipse at 50% 100%,#9fb3c8 0 46%,transparent 47%),linear-gradient(#3b4a5c,#1f2a36)}"+
  ".fpv img{width:100%;height:100%;border-radius:50%;object-fit:cover;display:block}";(document.head||document.documentElement).append(st)})();
AG.frames=FRAMES;AG.frameSvg=frameSvg;AG.applyFrame=applyFrame;AG.framed=framed;AG.myFrame=myFrame;AG.setMyFrame=setMyFrame;
AG.addPack({type:"frame",game:"gen",def:"fr_none",items:FRAMES,
  title:["🖼 چوارچۆڤێن وێنەیێ","🖼 چوارچێوەی وێنە","🖼 إطارات الصورة","🖼 Picture frames"],
  desc:["چوارچۆڤەک ل دۆر وێنەیێ تە، یێ هەمی کەس دبینن. هندەک ژ وان دلڤن و دبریقن ✨","چوارچێوەیەک بە دەوری وێنەکەت کە هەموو کەس دەیبینن.","إطار حول صورتك يراه الجميع. بعضها متحرك ولامع ✨","A frame around your picture that everyone sees. Some move and sparkle ✨"],
  preview:function(k){var d=document.createElement("div");d.className="fpv";var ph="";try{ph=localStorage.getItem("ag.photo")||""}catch(e){}if(ph){var im=document.createElement("img");im.src=ph;im.alt="";d.append(im)}applyFrame(d,k);return d}});

/* ---- frames on the players' pictures inside the games: a page marks a player's <img> with data-fr="<uid>" ---- */
var FRC={};
function frameOf(uid,cb){if(!uid)return cb("");var c=FRC[uid];if(c&&Date.now()-c.t<300000)return cb(c.k);
  try{if(window.firebase&&firebase.apps&&firebase.apps.length&&firebase.auth().currentUser&&firebase.auth().currentUser.uid===uid){var m=myFrame();FRC[uid]={t:Date.now(),k:m};return cb(m)}}catch(e){}
  if(!(window.firebase&&firebase.apps&&firebase.apps.length))return cb("");
  if(c&&c.wait){c.wait.push(cb);return}FRC[uid]={t:0,k:"",wait:[cb]};
  firebase.database().ref("profiles/"+uid+"/public/frame").once("value").then(function(s){var k=s.val()||"",w=FRC[uid].wait||[];FRC[uid]={t:Date.now(),k:k};w.forEach(function(f){f(k)})},function(){var w=FRC[uid].wait||[];FRC[uid]={t:Date.now(),k:""};w.forEach(function(f){f("")})})}
// the picture may sit in a round box (the landscape seats); otherwise the frame is laid over the picture itself
function seatFrame(im){var uid=im.getAttribute("data-fr");frameOf(uid,function(k){if(!im.isConnected)return;var box=im.parentElement;if(!box)return;
  if(box.classList.contains("lav")){applyFrame(box,k);return}
  var sv=im.nextElementSibling&&im.nextElementSibling.classList&&im.nextElementSibling.classList.contains("agfr")?im.nextElementSibling:null;
  if(!has(k)){if(sv)sv.remove();return}
  if(!sv){im.insertAdjacentHTML("afterend",frameSvg(k));sv=im.nextElementSibling;sv.classList.add("agfr-over")}
  placeOver(im,sv)})}
function placeOver(im,sv){var w=im.offsetWidth;sv.style.display=w?"":"none";if(!w)return;sv.style.left=(im.offsetLeft+w/2)+"px";sv.style.top=(im.offsetTop+im.offsetHeight/2)+"px";sv.style.width=sv.style.height=(w*1.36)+"px"}
function seatFrames(root){[].forEach.call((root||document).querySelectorAll("img[data-fr]"),function(im){if(im.getAttribute("data-fr"))seatFrame(im)})}
function watchSeats(){var t=null;new MutationObserver(function(ms){var go=false;ms.forEach(function(m){if(m.type==="attributes"||[].some.call(m.addedNodes,function(n){return n.nodeType===1&&(n.tagName==="IMG"||n.querySelector&&n.querySelector("img[data-fr]"))}))go=true});
    if(go){clearTimeout(t);t=setTimeout(seatFrames,60)}}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:["data-fr"]});
  var re=function(){[].forEach.call(document.querySelectorAll(".agfr-over"),function(sv){var im=sv.previousElementSibling;if(im&&im.tagName==="IMG")placeOver(im,sv)})};
  addEventListener("resize",function(){setTimeout(re,120)});setInterval(re,1500);seatFrames()}
AG.seatFrames=seatFrames;

function ready(){fillSwitch();buildCarousel();buildGift();playTimer();dmBadge();fzWatchAll();paintMine();watchSeats()}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ready);else ready();
})();
