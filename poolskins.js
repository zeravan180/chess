/* 8-ball pool: the tables and the cues sold in the shop.
   =====================================================================
   TO ADD A LOOK: add one entry to TABLES or CUES (name in 4 languages,
   price in AG). price 0 = free for everyone. Only this file changes.
   The admin opens the app once so the new price is written to the server.
   TABLES felt: [centre, edge]   rail: [light, dark]   trim: edge line
          deco: "kilim" | "stars" | "flag" | "dots" | ""   mark: "ag" | "sun" | "star"   glow: soft light round the rails
   CUES   pw: force (1-10)   aim: aiming line (1-10)   spin: spin (1-10)
          s: colours along the cue from the tip end to the butt, rings: [[place 0-1, colour]]
          magic: shows the whole path of the balls before you shoot
   ===================================================================== */
(function(){
var TABLES={
  pt_teal:{name:["تورکوازی","تورکوازی","فيروزي","Turquoise"],price:0,felt:["#1f8f8a","#0b4a47"],rail:["#7a3714","#2a0e03"],trim:"#e9b949",deco:"kilim",mark:"ag"},
  pt_green:{name:["کەسکێ کلاسیک","سەوزی کلاسیک","أخضر كلاسيكي","Classic green"],price:0,felt:["#2fa35c","#0f5a2c"],rail:["#8a4a1c","#3a1806"],trim:"#d9b36a",deco:"dots",mark:"ag"},
  pt_blue:{name:["شینا شاهانە","شینی شاهانە","أزرق ملكي","Royal blue"],price:150,felt:["#2f6fe0","#0e2c78"],rail:["#3a3f4a","#0e1117"],trim:"#cfd6e2",deco:"dots",mark:"ag"},
  pt_red:{name:["سۆرا قەدیفە","سووری مەخمەڵ","أحمر مخملي","Red velvet"],price:150,felt:["#c4283a","#5a0812"],rail:["#5a2a10","#1e0802"],trim:"#e9b949",deco:"kilim",mark:"ag"},
  pt_purple:{name:["مۆرا نیۆن","مۆری نیۆن","بنفسجي نيون","Neon purple"],price:250,felt:["#7b3fd1","#2a0b5c"],rail:["#24123a","#08030f"],trim:"#c08bff",deco:"stars",mark:"star",glow:"#b56bff"},
  pt_ice:{name:["بەفر و قەشە","بەفر و سەهۆڵ","ثلج وجليد","Ice"],price:400,felt:["#7fd3f0","#2a7fa8"],rail:["#f4f8fb","#a9bccb"],trim:"#5aa9d6",deco:"dots",mark:"ag",glow:"#bff0ff"},
  pt_black:{name:["ڕەش و زێڕین","ڕەش و زێڕین","أسود وذهبي","Black and gold"],price:400,felt:["#2b2b30","#08080a"],rail:["#1c1c1c","#000000"],trim:"#ffd36a",deco:"kilim",mark:"ag",glow:"#ffcf5a"},
  pt_kurd:{name:["کوردستان","کوردستان","كردستان","Kurdistan"],price:500,felt:["#22a35a","#0b5a2c"],rail:["#c8102e","#6a0716"],trim:"#ffffff",deco:"flag",mark:"sun"},
  pt_galaxy:{name:["گەلاکسی","گەلاکسی","مجرة","Galaxy"],price:600,felt:["#1b2a6b","#05071c"],rail:["#141a3a","#03040d"],trim:"#5fe1ff",deco:"stars",mark:"star",glow:"#5fe1ff"}
};
var CUES={
  pc_basic:{name:["دارێ ئاسایی","داری ئاسایی","عصا عادية","Basic cue"],price:0,pw:3,aim:3,spin:2,
    s:["#f2e2c2","#d9b98a","#b07a42","#5a3216"],rings:[[.62,"#222"]]},
  pc_oak:{name:["دارێ بەڕوو","داری بەڕوو","عصا البلوط","Oak cue"],price:150,pw:4,aim:4,spin:3,
    s:["#f4e6c8","#c99a5e","#8a5226","#3d1c08"],rings:[[.55,"#e9b949"],[.9,"#e9b949"]]},
  pc_kurd:{name:["دارێ کوردستان","داری کوردستان","عصا كردستان","Kurdistan cue"],price:250,pw:5,aim:5,spin:4,
    s:["#f4ecd8","#e8dcc0","#ffffff","#1f9d55"],rings:[[.5,"#c8102e"],[.56,"#ffffff"],[.62,"#1f9d55"]],sun:1},
  pc_gold:{name:["دارێ زێڕین","داری زێڕین","العصا الذهبية","Golden cue"],price:400,pw:6,aim:6,spin:5,
    s:["#fff3c4","#f0c95a","#c98a10","#6a4204"],rings:[[.5,"#fff"],[.7,"#3a2400"],[.94,"#fff"]],glow:"#ffd65a"},
  pc_dragon:{name:["دارێ ئەژدەهای","داری ئەژدیها","عصا التنين","Dragon cue"],price:600,pw:7,aim:7,spin:7,
    s:["#ffe0c8","#e0442a","#7a0d0d","#120202"],rings:[[.5,"#ffb02e"],[.88,"#ffb02e"]],flame:1,glow:"#ff5a2a"},
  pc_galaxy:{name:["دارێ گەلاکسی","داری گەلاکسی","عصا المجرة","Galaxy cue"],price:800,pw:8,aim:9,spin:8,
    s:["#e8f6ff","#5fe1ff","#3a2a9a","#07051c"],rings:[[.5,"#fff"],[.92,"#5fe1ff"]],stars:1,glow:"#5fe1ff"},
  pc_magic:{name:["دارێ سیحری","داری سیحراوی","العصا السحرية","Magic cue"],price:1000,pw:10,aim:10,spin:10,magic:1,
    s:["#ffffff","#ff7af6","#7b2cff","#12002e"],rings:[[.48,"#ffe66b"],[.54,"#5fe1ff"],[.6,"#ffe66b"],[.95,"#ffe66b"]],stars:1,glow:"#d36bff"},
  // the strongest cue: twice the hitting power of the magic cue, more spin, and the longest path of the balls
  pc_cobra:{name:["دارێ مارێ کۆبرا","داری ماری کۆبرا","عصا الكوبرا","Cobra cue"],price:2000,pw:20,aim:10,spin:15,magic:1,far:1,
    s:["#f6ffd8","#9be15d","#1f6b2a","#041a08"],rings:[[.47,"#ffd23f"],[.53,"#111"],[.59,"#ffd23f"],[.96,"#ffd23f"]],scales:1,cobra:1,glow:"#7dff5a"}
};
var n=0;
function id(p){return p+"_"+(++n)}
// a sun with 21 rays (Kurdistan flag)
function sun(cx,cy,r,c){var h='<g fill="'+(c||"#ffd400")+'">',i,a,b;for(i=0;i<21;i++){a=i*Math.PI*2/21;b=a+Math.PI/21;
    h+='<path d="M'+(cx+Math.cos(a-.09)*r*.62).toFixed(1)+' '+(cy+Math.sin(a-.09)*r*.62).toFixed(1)+'L'+(cx+Math.cos(a+.075)*r).toFixed(1)+' '+(cy+Math.sin(a+.075)*r).toFixed(1)+'L'+(cx+Math.cos(a+.24)*r*.62).toFixed(1)+' '+(cy+Math.sin(a+.24)*r*.62).toFixed(1)+'Z"/>'}
  return h+'<circle cx="'+cx+'" cy="'+cy+'" r="'+(r*.6)+'"/></g>'}
function star(cx,cy,r,c,o){return'<path d="M'+cx+' '+(cy-r)+'L'+(cx+r*.25)+' '+(cy-r*.25)+'L'+(cx+r)+' '+cy+'L'+(cx+r*.25)+' '+(cy+r*.25)+'L'+cx+' '+(cy+r)+'L'+(cx-r*.25)+' '+(cy+r*.25)+'L'+(cx-r)+' '+cy+'L'+(cx-r*.25)+' '+(cy-r*.25)+'Z" fill="'+c+'" opacity="'+(o||1)+'"/>'}
// the whole table, drawn round the playing cloth 0..1000 × 0..500 (view box -62 -62 1124 624)
function table(k){var t=TABLES[k]||TABLES.pt_teal,u=id("pt"),h="",i;
  h+='<defs><linearGradient id="'+u+'r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+t.rail[0]+'"/><stop offset=".55" stop-color="'+t.rail[1]+'"/><stop offset="1" stop-color="'+t.rail[1]+'"/></linearGradient>'+
    '<pattern id="'+u+'g" width="210" height="14" patternUnits="userSpaceOnUse"><path d="M0 4Q52 0 105 5T210 4" stroke="#fff" stroke-opacity=".07" fill="none" stroke-width="2"/><path d="M0 11Q70 14 140 9T210 11" stroke="#000" stroke-opacity=".18" fill="none" stroke-width="2"/></pattern>'+
    '<radialGradient id="'+u+'f" cx="50%" cy="48%" r="65%"><stop offset="0" stop-color="'+t.felt[0]+'"/><stop offset="1" stop-color="'+t.felt[1]+'"/></radialGradient>'+
    '<linearGradient id="'+u+'t" x1="0" x2="1"><stop offset="0" stop-color="'+t.trim+'" stop-opacity=".55"/><stop offset=".5" stop-color="'+t.trim+'"/><stop offset="1" stop-color="'+t.trim+'" stop-opacity=".55"/></linearGradient>'+
    '<radialGradient id="'+u+'h"><stop offset=".6" stop-color="#000"/><stop offset="1" stop-color="#222"/></radialGradient>'+
    '<pattern id="'+u+'k" width="50" height="16" patternUnits="userSpaceOnUse"><path d="M0 8L12 0L25 8L12 16Z" fill="'+t.trim+'" opacity=".9"/><path d="M25 8L37 2L50 8L37 14Z" fill="#b5321e" opacity=".9"/><circle cx="12" cy="8" r="2.4" fill="'+t.rail[1]+'"/></pattern>'+
    '<filter id="'+u+'s" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-opacity=".6"/></filter></defs>';
  h+='<rect x="-62" y="-62" width="1124" height="624" rx="52" fill="url(#'+u+'r)" filter="url(#'+u+'s)"/>';
  h+='<rect x="-62" y="-62" width="1124" height="624" rx="52" fill="url(#'+u+'g)"/>';
  if(t.glow)h+='<rect x="-58" y="-58" width="1116" height="616" rx="48" fill="none" stroke="'+t.glow+'" stroke-width="3" opacity=".75" style="filter:drop-shadow(0 0 6px '+t.glow+')"/>';
  h+='<rect x="-53" y="-53" width="1106" height="606" rx="44" fill="none" stroke="url(#'+u+'t)" stroke-width="4"/>';
  // decoration strips on the long rails
  var strips=[[110,-52],[560,-52],[110,538],[560,538]];
  strips.forEach(function(s){
    if(t.deco==="kilim")h+='<rect x="'+s[0]+'" y="'+s[1]+'" width="330" height="16" fill="url(#'+u+'k)"/>';
    else if(t.deco==="flag")h+='<rect x="'+s[0]+'" y="'+s[1]+'" width="330" height="5" fill="#c8102e"/><rect x="'+s[0]+'" y="'+(s[1]+5)+'" width="330" height="6" fill="#fff"/><rect x="'+s[0]+'" y="'+(s[1]+11)+'" width="330" height="5" fill="#1f9d55"/>';
    else if(t.deco==="stars")for(i=0;i<7;i++)h+=star(s[0]+20+i*48,s[1]+8,7,t.trim,.9);
    else if(t.deco==="dots")for(i=0;i<11;i++)h+='<circle cx="'+(s[0]+15+i*30)+'" cy="'+(s[1]+8)+'" r="2.6" fill="'+t.trim+'" opacity=".7"/>'});
  // cushions and cloth
  h+='<rect x="-17" y="-17" width="1034" height="534" rx="10" fill="'+t.felt[1]+'"/><rect x="-17" y="-17" width="1034" height="534" rx="10" fill="#000" opacity=".22"/>';
  h+='<rect x="0" y="0" width="1000" height="500" fill="url(#'+u+'f)"/>';
  // the mark in the middle of the cloth
  if(t.mark==="sun")h+='<g opacity=".16">'+sun(500,250,92,"#ffd400")+'</g>';
  else if(t.mark==="star")h+=star(500,250,90,"#fff",.08)+'<circle cx="500" cy="250" r="120" fill="none" stroke="#fff" stroke-opacity=".06" stroke-width="4"/>';
  else h+='<g opacity=".085"><circle cx="500" cy="250" r="104" fill="none" stroke="#fff" stroke-width="9"/><circle cx="500" cy="250" r="86" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="7 9"/><text x="500" y="282" text-anchor="middle" font-size="92" font-weight="900" fill="#fff" font-family="system-ui,sans-serif">AG</text></g>';
  if(t.deco==="stars")for(i=0;i<26;i++)h+='<circle cx="'+((i*373)%1000)+'" cy="'+((i*211)%500)+'" r="'+(1+i%3)+'" fill="#fff" opacity=".35"/>';
  // head string and spots
  h+='<line x1="250" y1="0" x2="250" y2="500" stroke="#fff" stroke-opacity=".13" stroke-width="2"/><circle cx="250" cy="250" r="4" fill="#fff" opacity=".3"/><circle cx="750" cy="250" r="4" fill="#fff" opacity=".3"/>';
  // diamonds (sights)
  var dm=function(x,y){return'<path d="M'+x+' '+(y-7)+'l5 7-5 7-5-7z" fill="'+t.trim+'" opacity=".95"/>'};
  [125,250,375,625,750,875].forEach(function(x){h+=dm(x,-34)+dm(x,534)});[125,250,375].forEach(function(y){h+=dm(-34,y)+dm(1034,y)});
  // pockets with metal rims
  [[-6,-6,31],[500,-15,26],[1006,-6,31],[-6,506,31],[500,515,26],[1006,506,31]].forEach(function(p){
    h+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(p[2]+7)+'" fill="url(#'+u+'t)"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(p[2]+3)+'" fill="'+t.rail[1]+'"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+p[2]+'" fill="url(#'+u+'h)"/>'});
  return h}
// a cue, lying along x from the tip (x = 0) to the butt (x = L)
function cue(k,L){var c=CUES[k]||CUES.pc_basic,u=id("pc"),h="",i,s=c.s;L=L||560;
  h+='<defs><linearGradient id="'+u+'" x1="0" x2="1"><stop offset="0" stop-color="'+s[0]+'"/><stop offset=".45" stop-color="'+s[1]+'"/><stop offset=".62" stop-color="'+s[2]+'"/><stop offset="1" stop-color="'+s[3]+'"/></linearGradient>'+
    '<linearGradient id="'+u+'v" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></linearGradient></defs>';
  var shape='M0 -3.2L'+L+' -7.5Q'+(L+6)+' -7.5 '+(L+6)+' 0Q'+(L+6)+' 7.5 '+L+' 7.5L0 3.2Z';
  if(c.glow)h+='<path d="'+shape+'" fill="none" stroke="'+c.glow+'" stroke-width="5" opacity=".5" style="filter:blur(3px)"/>';
  h+='<path d="'+shape+'" fill="url(#'+u+')"/>';
  (c.rings||[]).forEach(function(r){var x=r[0]*L,w=3.2+(7.5-3.2)*r[0];h+='<rect x="'+(x-3)+'" y="'+(-w)+'" width="6" height="'+(2*w)+'" fill="'+r[1]+'"/>'});
  if(c.flame)for(i=0;i<5;i++){var fx=L*.66+i*L*.055;h+='<path d="M'+fx+' 6.5Q'+(fx+10)+' 0 '+(fx+3)+' -6.5Q'+(fx+20)+' -1 '+(fx+24)+' 6.5Z" fill="#ffb02e" opacity=".85"/>'}
  if(c.stars)for(i=0;i<7;i++)h+=star(L*.64+i*L*.05,(i%2?-2:2),3.2,"#fff",.9);
  if(c.sun)h+=sun(L*.8,0,6,"#ffd400");
  if(c.scales)for(i=0;i<16;i++){var sx=L*.61+i*L*.023,w=3.6+(7.5-3.6)*(sx/L);h+='<path d="M'+sx.toFixed(1)+' 0L'+(sx+L*.0115).toFixed(1)+' '+(-w*.8).toFixed(1)+'L'+(sx+L*.023).toFixed(1)+' 0L'+(sx+L*.0115).toFixed(1)+' '+(w*.8).toFixed(1)+'Z" fill="'+(i%2?"#0b3d12":"#ffd23f")+'" opacity=".85"/>'}
  if(c.cobra){var hx=L*.985;h+='<path d="M'+(hx-14)+' -7.5Q'+(hx+2)+' -15 '+(hx+8)+' -6Q'+(hx+12)+' 0 '+(hx+8)+' 6Q'+(hx+2)+' 15 '+(hx-14)+' 7.5Z" fill="#1f6b2a" stroke="#ffd23f" stroke-width="1.4"/><circle cx="'+(hx+1)+'" cy="-4" r="1.8" fill="#ff3b3b"/><circle cx="'+(hx+1)+'" cy="4" r="1.8" fill="#ff3b3b"/>'}
  h+='<path d="'+shape+'" fill="url(#'+u+'v)"/>';
  h+='<rect x="-2" y="-3.4" width="7" height="6.8" rx="1.5" fill="#2f6fd0"/><rect x="5" y="-3.3" width="7" height="6.6" fill="#f7f3e8"/>';
  return h}
// the balls: colours by number (9-15 have a stripe of the same colour)
var BC=["#f8f8f2","#f5c518","#1e5bd8","#d32f2f","#6a2ca0","#f07a1a","#0e8a3e","#8b1a1a","#111111"];
function ballColor(n){return n===0?BC[0]:n===8?BC[8]:BC[(n-1)%8+1]}
function ball(n,x,y,r,pre){var c=ballColor(n),h="",u=pre||id("pb");
  if(n>8)h+='<clipPath id="'+u+'c'+n+'"><circle cx="'+x+'" cy="'+y+'" r="'+r+'"/></clipPath><circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="#f8f8f2"/><rect x="'+(x-r)+'" y="'+(y-r*.52)+'" width="'+(2*r)+'" height="'+(r*1.04)+'" fill="'+c+'" clip-path="url(#'+u+'c'+n+')"/>';
  else h+='<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+c+'"/>';
  if(n)h+='<circle cx="'+x+'" cy="'+y+'" r="'+(r*.46)+'" fill="#fff"/><text x="'+x+'" y="'+(y+r*.25)+'" text-anchor="middle" font-size="'+(r*.68)+'" font-weight="900" font-family="system-ui,sans-serif" fill="#111">'+n+'</text>';
  return h}
function shine(x,y,r,gid){return'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="url(#'+gid+')"/>'}
function shineDefs(gid){return'<radialGradient id="'+gid+'" cx="34%" cy="28%" r="66%"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset=".3" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".38"/></radialGradient>'}
function mini(tk,ck){var g=id("sh"),h='<defs>'+shineDefs(g)+'</defs>'+table(tk),bs=[[1,640,200],[9,700,150],[2,720,300],[8,600,280],[12,820,220],[5,860,330],[14,420,120],[3,380,380],[0,300,250]];
  bs.forEach(function(b){h+=ball(b[0],b[1],b[2],18)+shine(b[1],b[2],18,g)});
  if(ck)h+='<g transform="translate(278 262) rotate(160)">'+cue(ck,520)+'</g>';
  return'<svg viewBox="-62 -62 1124 624" aria-hidden="true">'+h+'</svg>'}
function stat(lbl,v,c){return'<div style="display:flex;align-items:center;gap:6px;font:700 11px system-ui;color:#fff"><span style="width:58px;text-align:start">'+lbl+'</span><span style="flex:1;height:7px;border-radius:4px;background:rgba(255,255,255,.18);overflow:hidden"><i style="display:block;height:100%;width:'+Math.min(100,v*10)+'%;background:'+(v>10?"linear-gradient(90deg,#7dff5a,#ffd23f,#ff3b3b)":c)+'"></i></span><b style="width:18px">'+v+'</b></div>'}
var LB={pw:["هێز","هێز","القوة","Force"],aim:["نیشان","نیشان","التصويب","Aim"],spin:["زڤڕین","سوڕان","الدوران","Spin"],magic:["✨ ڕێکا تۆپان هەمی دیار دبیت","✨ ڕێگای تۆپەکان هەمووی دیار دەبێت","✨ يظهر مسار الكرات كاملاً","✨ Shows the full path of the balls"],
  cobra:["🐍 دوو جاران هێزا دارێ سیحری · درێژترین ڕێک","🐍 دوو هێندەی هێزی داری سیحراوی · درێژترین ڕێگا","🐍 ضعف قوة العصا السحرية · أطول مسار","🐍 Twice the power of the magic cue · the longest path"]};
function lang(){try{return({kmr:0,ckb:1,ar:2,en:3})[localStorage.getItem("lang")]||0}catch(e){return 0}}
function cuePreview(k){var c=CUES[k]||CUES.pc_basic,l=lang(),d=document.createElement("div");
  d.style.cssText="width:100%;max-width:260px;margin:0 auto;display:flex;flex-direction:column;gap:5px;padding:6px 8px;border-radius:12px;background:radial-gradient(circle at 50% 30%,#1f6f5a,#0b2a22)";
  d.innerHTML='<svg viewBox="-20 -62 620 124" style="width:100%;height:auto;display:block" aria-hidden="true"><g transform="rotate(-8 290 0) scale(1 1.9)">'+cue(k,560)+'</g></svg>'+stat(LB.pw[l],c.pw,"linear-gradient(90deg,#ffcf3a,#ff4d4d)")+stat(LB.aim[l],c.aim,"linear-gradient(90deg,#7fe0ff,#2f8cff)")+stat(LB.spin[l],c.spin,"linear-gradient(90deg,#c8ff6b,#22c55e)")+(c.magic?'<div style="font:800 11px system-ui;color:#ffe66b;text-align:center">'+(c.far?LB.cobra[l]:LB.magic[l])+'</div>':"");
  return d}
function el(html){var d=document.createElement("div");d.innerHTML=html;var s=d.firstChild;s.style.cssText="width:100%;max-width:260px;height:auto;display:block;margin:0 auto;border-radius:12px";return s}
window.POOL={tables:TABLES,cues:CUES,table:table,cue:cue,ball:ball,ballColor:ballColor,shine:shine,shineDefs:shineDefs,mini:mini,sun:sun,star:star};
if(!window.AG||!AG.addPack)return;
AG.addPack({type:"pooltable",def:"pt_teal",items:TABLES,
  title:["🎱 مێزێن بلیاردێ","🎱 مێزی بلیارد","🎱 طاولات البلياردو","🎱 Pool tables"],
  desc:["ڕەنگ و شێوازێ مێزا بلیاردێ یا تە.","ڕەنگ و شێوازی مێزی بلیاردەکەت.","لون وشكل طاولة البلياردو.","The look of your pool table."],
  preview:function(k){return el(mini(k))}});
AG.addPack({type:"poolcue",def:"pc_basic",items:CUES,
  title:["🎯 دارێن بلیاردێ","🎯 داری بلیارد","🎯 عصي البلياردو","🎯 Pool cues"],
  desc:["هەر دارەکێ بهاتر هێز، نیشان و زڤڕینا وێ پترە. دارێ سیحری ڕێکا تۆپان هەمی نیشان ددەت.","هەر دارێکی گرانتر هێز و نیشان و سوڕانی زیاترە.","كل عصا أغلى لها قوة وتصويب ودوران أكثر. العصا السحرية تُظهر مسار الكرات كاملاً.","A dearer cue has more force, aim and spin. The magic cue shows the whole path of the balls."],
  preview:function(k){return cuePreview(k)}});
})();
