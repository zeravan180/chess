/* Konkan tables sold in the shop.
   =====================================================================
   TO ADD A TABLE: add one entry to ITEMS (name in 4 languages, price in
   AG, rare, css). Only this file changes. The admin opens the app once
   so the new price is written to the server.
   ===================================================================== */
(function(){
if(!window.AG||!AG.addPack)return;
var u=function(svg){return'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" '+svg+'</svg>')+'")'};
var FELT="repeating-linear-gradient(45deg,rgba(255,255,255,.025) 0 2px,transparent 2px 5px)";
var WOOD="repeating-linear-gradient(92deg,rgba(0,0,0,.05) 0 3px,transparent 3px 11px),repeating-linear-gradient(88deg,rgba(255,255,255,.06) 0 2px,transparent 2px 23px)";
var SUITS=u('width="80" height="80" viewBox="0 0 80 80"><g fill="rgba(255,255,255,.07)" font-family="Arial" font-size="18"><text x="6" y="22">♠</text><text x="46" y="30">♥</text><text x="22" y="64">♦</text><text x="58" y="72">♣</text></g>');
var HIERO=u('width="56" height="28" viewBox="0 0 56 28"><g fill="none" stroke="rgba(120,80,10,.5)" stroke-width="1.6" stroke-linecap="round"><path d="M8 6a3 3 0 1 1 0 .1M8 9v12M4 13h8"/><path d="M20 14c3-4 9-4 12 0-3 4-9 4-12 0zM26 14v.1M26 18l-2 5M30 17l3 4"/><path d="M40 22l4-14 4 14zM44 8v-3"/></g>');
var BAT='<path d="M0 4c4-4 7-1 8 2 1-3 4-6 8-2-3 0-4 2-4 5-2-1-3-1-4 1-1-2-2-2-4-1 0-3-1-5-4-5z"/>';
var BATS=u('width="90" height="70" viewBox="0 0 90 70"><g fill="rgba(255,150,40,.4)"><g transform="translate(8 10)">'+BAT+'</g><g transform="translate(56 40) scale(.8)">'+BAT+'</g><g transform="translate(64 6) scale(.6)">'+BAT+'</g></g>');
var MOON=u('width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="22" fill="#ffe39a"/><circle cx="33" cy="34" r="4" fill="#f2cc6a"/><circle cx="48" cy="48" r="6" fill="#f2cc6a"/>');
var BUB=u('width="60" height="80" viewBox="0 0 60 80"><g fill="none" stroke="rgba(255,255,255,.5)" stroke-width="1.6"><circle cx="10" cy="14" r="4"/><circle cx="44" cy="30" r="6"/><circle cx="22" cy="58" r="3"/><circle cx="50" cy="70" r="2.5"/></g>');
var WEED=u('width="120" height="60" viewBox="0 0 120 60"><g fill="none" stroke-linecap="round" stroke-width="5"><path d="M14 60c-6-14 8-22 0-36s6-20 2-24" stroke="#1f9e6a"/><path d="M30 60c6-12-6-18 2-30" stroke="#2fc48a"/><path d="M92 60c-5-16 9-20 1-38" stroke="#1f9e6a"/><path d="M106 60c5-10-4-14 2-24" stroke="#2fc48a"/></g><g fill="#ff7a59"><path d="M56 60c0-10 4-16 4-22 0 6 6 10 3 22z"/></g>');
var STARS=u('width="90" height="90" viewBox="0 0 90 90"><g fill="#fff"><circle cx="8" cy="12" r="1.2"/><circle cx="40" cy="30" r="0.9"/><circle cx="70" cy="8" r="1.4"/><circle cx="22" cy="60" r="1"/><circle cx="60" cy="52" r="1.6"/><circle cx="84" cy="74" r="1"/><circle cx="36" cy="84" r="1.3"/></g>');

var ITEMS={
 kt_classic:{name:["کەسکێ کلاسیک","سەوزی کلاسیک","أخضر كلاسيكي","Classic green"],price:0,css:""},
 kt_blue:{name:["شینێ کازینۆیێ","شینی کازینۆ","أزرق الكازينو","Casino blue"],price:60,
   css:"background:"+FELT+",radial-gradient(circle at 50% 35%,#2f7fd0,#123f75 80%);box-shadow:inset 0 0 0 5px #3d2109,inset 0 0 0 7px #1d1006,0 8px 18px rgba(0,0,0,.35)"},
 kt_red:{name:["سۆرێ قەدیفە","سووری مەخمەڵ","أحمر مخملي","Red velvet"],price:100,
   css:"background:"+FELT+",radial-gradient(circle at 50% 35%,#b5283f,#5a0b1b 80%);box-shadow:inset 0 0 0 5px #3d2109,inset 0 0 0 7px #1d1006,0 8px 18px rgba(0,0,0,.35)"},
 kt_wood:{name:["دارێ گوێز","داری گوێز","خشب الجوز","Walnut"],price:150,
   css:"background:"+WOOD+",linear-gradient(#8a5a2b,#5a3714);box-shadow:inset 0 0 0 5px #3a2209,0 8px 18px rgba(0,0,0,.35)"},
 kt_ebony:{name:["ئەبەنووس","ئەبەنووس","أبنوس","Ebony"],price:200,
   css:"background:"+SUITS+",linear-gradient(#2a2420,#14100d);box-shadow:inset 0 0 0 4px #c9a24a,inset 0 0 0 7px #2a2420,0 8px 18px rgba(0,0,0,.45)"},
 kt_royal:{name:["پاشایی","پاشایانە","ملكي","Royal"],price:300,
   css:"background:"+SUITS+",radial-gradient(circle at 50% 35%,#5b2a86,#260c40 80%);box-shadow:inset 0 0 0 4px #f0c64a,inset 0 0 0 8px #3b1460,inset 0 0 0 10px #f0c64a,0 8px 22px rgba(0,0,0,.45)"},
 kt_pharaoh:{name:["میسرا کەڤن","میسری کۆن","مصر القديمة","Ancient Egypt"],price:350,rare:1,
   css:"background:"+HIERO+",radial-gradient(circle at 50% 40%,#c99a52,#7a5420 85%);box-shadow:inset 0 0 0 4px #f0c64a,inset 0 0 0 9px #1f4fa3,inset 0 0 0 12px #f0c64a,0 0 18px rgba(240,198,74,.6),0 8px 18px rgba(0,0,0,.35);animation:ksGlow 2.6s ease-in-out infinite"},
 kt_halloween:{name:["هالۆوین","هالۆوین","هالوين","Halloween"],price:380,rare:1,
   css:"background:"+MOON+" right 8px top 6px/60px no-repeat,"+BATS+" 0 0/120px 90px,radial-gradient(circle at 80% 10%,#6b3a8f,#2a0f3d 55%,#12051c);box-shadow:inset 0 0 0 4px #ff8f1f,inset 0 0 0 7px #2a0f3d,0 0 18px rgba(255,143,31,.5),0 8px 18px rgba(0,0,0,.45);animation:ksBats 14s linear infinite"},
 kt_sea:{name:["بنێ دەریایێ","بنی دەریا","أعماق البحر","Under the sea"],price:400,rare:1,
   css:"background:"+WEED+" bottom/150px 70px repeat-x,"+BUB+" 0 0/70px 90px,linear-gradient(#1fb5e0,#0b6aa3 55%,#063a63);box-shadow:inset 0 0 0 4px #ffe08a,inset 0 0 0 7px #0b4f80,0 0 18px rgba(80,210,255,.55),0 8px 18px rgba(0,0,0,.4);animation:ksBub 6s linear infinite"},
 kt_galaxy:{name:["گەلەستێرک","گەلەستێرە","المجرة","Galaxy"],price:450,rare:1,
   css:"background:"+STARS+" 0 0/90px 90px,radial-gradient(circle at 30% 30%,rgba(255,80,200,.45),transparent 45%),radial-gradient(circle at 75% 70%,rgba(60,180,255,.45),transparent 50%),linear-gradient(#140a3a,#05021a);box-shadow:inset 0 0 0 3px #b48cff,0 0 22px rgba(180,140,255,.7),0 8px 18px rgba(0,0,0,.45);animation:ksStars 20s linear infinite"}
};
var css='.ksk{width:100%;direction:ltr}.ksk .kt{position:relative;display:flex;flex-direction:column;align-items:center;gap:7px;padding:10px;border-radius:14px;box-sizing:border-box;color:#fff;background:radial-gradient(circle at 50% 35%,#2f9a62,#1a5c3a 80%);box-shadow:inset 0 0 0 4px #6b3e17}'+
 '.ksk .row{display:flex;gap:4px;justify-content:center}.ksk .c{width:24px;aspect-ratio:5/7;background:#fff;border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.4);color:#111;font:900 12px/1 Arial;display:flex;align-items:center;justify-content:center}.ksk .c.r{color:#d11a2a}.ksk .c.b{background:repeating-linear-gradient(45deg,#1e3c8a 0 4px,#2b54b8 4px 8px);box-shadow:inset 0 0 0 2px #fff}\n'+
 '@keyframes ksGlow{50%{filter:brightness(1.08)}}@keyframes ksBats{to{background-position:right 8px top 6px,120px 0,0 0}}@keyframes ksBub{to{background-position:bottom,0 -90px,0 0}}@keyframes ksStars{to{background-position:90px 90px,0 0,0 0,0 0}}\n'+
 '@media (prefers-reduced-motion:reduce){.kt[data-ks]{animation:none!important}}\n';
for(var k in ITEMS)if(ITEMS[k].css)css+='.kt[data-ks="'+k+'"]{'+ITEMS[k].css+'}\n';
var st=document.createElement("style");st.textContent=css;(document.head||document.documentElement).appendChild(st);
function c(t,red,back){var e=document.createElement("span");e.className="c"+(red?" r":"")+(back?" b":"");e.textContent=back?"":t;return e}
AG.addPack({type:"ktable",def:"kt_classic",items:ITEMS,
  title:["🃏 مێزا کۆمکانێ","🃏 مێزی کۆنکان","🃏 طاولة الكونكان","🃏 Konkan table"],
  desc:["شێوازێ مێزێ ل سەر شاشا تە.","شێوازی مێز لەسەر شاشەکەت.","شكل الطاولة على شاشتك.","How the table looks on your screen."],
  preview:function(k){var w=document.createElement("div");w.className="ksk";var t=document.createElement("div");t.className="kt";if(k&&k!=="kt_classic")t.dataset.ks=k;
    var r1=document.createElement("div");r1.className="row";r1.appendChild(c("",0,1));r1.appendChild(c("K♥",1));
    var r2=document.createElement("div");r2.className="row";["7♠","8♠","9♠"].forEach(function(x){r2.appendChild(c(x,0))});
    var r3=document.createElement("div");r3.className="row";["Q♥","Q♦","Q♣"].forEach(function(x,i){r3.appendChild(c(x,i<2))});
    t.appendChild(r1);t.appendChild(r2);t.appendChild(r3);w.appendChild(t);return w}});
})();
