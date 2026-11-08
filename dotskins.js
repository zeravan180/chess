/* Dots and Boxes: the pens (colour of your lines and boxes) and the boards sold in the shop.
   =====================================================================
   TO ADD A LOOK: add one entry to PENS or BOARDS (name in 4 languages,
   price in AG and its colours). price 0 = free for everyone. Only this
   file changes. The admin opens the app once so the new price is written
   to the server.
   PENS   c: line colour   fill: box colour   g: [colours] for a line that changes colour across the board
          glow: soft light   kind: "flag" puts a small sun in your boxes
   BOARDS bg: [colour, colour]   dot: dot colour   deco: "paper" | "chalk" | "wood" | "sea" | "flag" | "stars" | "sun" | "grid"
          glow: soft light around the dots
   ===================================================================== */
(function(){
var PENS={
  dp_red:{name:["سۆر","سوور","أحمر","Red"],price:0,c:"#e2364f",fill:"rgba(226,54,79,.22)"},
  dp_blue:{name:["شین","شین","أزرق","Blue"],price:0,c:"#1f74e0",fill:"rgba(31,116,224,.22)"},
  dp_green:{name:["سەوز","سەوز","أخضر","Green"],price:0,c:"#16a34a",fill:"rgba(22,163,74,.22)"},
  dp_pink:{name:["نیۆنا پەمبە","نیۆنی پەمەیی","نيون وردي","Neon pink"],price:150,c:"#ff3fd8",fill:"rgba(255,63,216,.22)",glow:"#ff8ff0"},
  dp_ocean:{name:["ئۆقیانووس","ئۆقیانووس","محيط","Ocean"],price:150,g:["#00c6ff","#0072ff","#00e0c6"],fill:"rgba(0,170,255,.2)",glow:"#7fdcff"},
  dp_kurdistan:{name:["کوردستان","کوردستان","كردستان","Kurdistan"],price:200,g:["#e2231a","#e2231a","#ffffff","#278e43","#278e43"],c:"#e2231a",fill:"rgba(252,191,9,.22)",kind:"flag"},
  dp_fire:{name:["ئاگر","ئاگر","نار","Fire"],price:250,g:["#ffd23f","#ff7a00","#ff2d00"],fill:"rgba(255,122,0,.22)",glow:"#ffb15c"},
  dp_gold:{name:["زێڕ","زێڕ","ذهب","Gold"],price:300,g:["#fff1a8","#e6b422","#a87412","#e6b422"],fill:"rgba(230,180,34,.25)",glow:"#ffe08a",rare:true},
  dp_galaxy:{name:["گەلەستێرک","گەلەستێرە","مجرة","Galaxy"],price:350,g:["#c084fc","#6d28d9","#ec4899","#3b82f6"],fill:"rgba(139,92,246,.24)",glow:"#c4a5ff",rare:true},
  dp_rainbow:{name:["کەسکەسۆر","پەلکەزێڕینە","قوس قزح","Rainbow"],price:400,g:["#ef4444","#f59e0b","#eab308","#22c55e","#3b82f6","#8b5cf6"],fill:"rgba(250,204,21,.18)",glow:"#fff3a0",rare:true},
  dp_diamond:{name:["ئەلماس","ئەڵماس","ألماس","Diamond"],price:500,g:["#e0f7ff","#7fd6ff","#ffffff","#b8f0ff"],fill:"rgba(160,230,255,.28)",glow:"#d8f6ff",rare:true}
};
var BOARDS={
  db_paper:{name:["دەفتەر","دەفتەر","دفتر","Notebook"],price:0,bg:["#fbf8ef","#f1ead6"],dot:"#2b2f3a",deco:"paper"},
  db_chalk:{name:["تەختێ ڕەش","تەختەی ڕەش","سبورة","Blackboard"],price:0,bg:["#2c3a33","#1a231e"],dot:"#f4f4f0",deco:"chalk"},
  db_wood:{name:["دارێ گوێز","داری گوێز","خشب الجوز","Walnut"],price:150,bg:["#9a6436","#4a2814"],dot:"#fbe6c2",deco:"wood"},
  db_sea:{name:["دەریا","دەریا","بحر","Sea"],price:200,bg:["#1fb5e0","#063a63"],dot:"#ffffff",deco:"sea",glow:"#aef0ff"},
  db_kurdistan:{name:["کوردستان","کوردستان","كردستان","Kurdistan"],price:250,bg:["#ffffff","#f4f4f4"],dot:"#1f2937",deco:"flag"},
  db_royal:{name:["پاشایی","پاشایانە","ملكي","Royal"],price:300,bg:["#5b2a86","#260c40"],dot:"#f0c64a",deco:"grid",glow:"#ffd54f",rare:true},
  db_neon:{name:["شەڤا نیۆن","شەوی نیۆن","ليلة النيون","Neon night"],price:350,bg:["#0b1026","#05060f"],dot:"#5efcff",deco:"grid",glow:"#5efcff",rare:true},
  db_galaxy:{name:["گەلەستێرک","گەلەستێرە","مجرة","Galaxy"],price:400,bg:["#2a1a6a","#05021a"],dot:"#e6dcff",deco:"stars",glow:"#b48cff",rare:true},
  db_gold:{name:["زێڕ","زێڕ","ذهب","Gold"],price:500,bg:["#2a2420","#0e0a08"],dot:"#ffd54f",deco:"sun",glow:"#ffe08a",rare:true}
};
var n=0;
function sun(cx,cy,r,col){var s='<g transform="translate('+cx+' '+cy+')" fill="'+(col||"#fcbf09")+'">';
  for(var k=0;k<21;k++)s+='<path transform="rotate('+(k*360/21)+')" d="M0 '+(-r)+'L'+(r*.18)+' '+(-r*.5)+'L'+(-r*.18)+' '+(-r*.5)+'z"/>';
  return s+'<circle r="'+(r*.52)+'"/></g>'}
// the board background, sized W x H
function board(k,W,H,pid){var v=BOARDS[k]||BOARDS.db_paper,id=(pid||"db")+(++n),h='';
  h+='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+v.bg[0]+'"/><stop offset="1" stop-color="'+v.bg[1]+'"/></linearGradient></defs>';
  h+='<rect width="'+W+'" height="'+H+'" rx="22" fill="url(#'+id+')"/>';
  var i;
  if(v.deco==="paper"){for(i=1;i<H/18;i++)h+='<line x1="0" x2="'+W+'" y1="'+(i*18)+'" y2="'+(i*18)+'" stroke="rgba(47,95,176,.13)" stroke-width="1.2"/>';h+='<line x1="16" x2="16" y1="0" y2="'+H+'" stroke="rgba(226,35,26,.3)" stroke-width="2"/>'}
  if(v.deco==="wood")for(i=0;i<H/26;i++)h+='<path d="M0 '+(10+i*26)+'c'+(W*.25)+' -8 '+(W*.5)+' 8 '+W+' -3" stroke="rgba(40,20,5,.25)" stroke-width="2.4" fill="none"/>';
  if(v.deco==="sea")for(i=0;i<H/60;i++)h+='<path d="M0 '+(40+i*60)+'q40 -16 80 0t80 0t80 0t80 0t80 0t80 0t80 0t80 0t80 0" stroke="rgba(255,255,255,.12)" stroke-width="5" fill="none"/>';
  if(v.deco==="stars")for(i=0;i<90;i++)h+='<circle cx="'+((i*97)%W)+'" cy="'+((i*211+30)%H)+'" r="'+(0.8+(i%3)*.7)+'" fill="#e6fbff" opacity=".75"/>';
  if(v.deco==="sun")h+='<g opacity=".12">'+sun(W/2,H/2,H*.45,"#ffd54f")+'</g>';
  if(v.deco==="grid")for(i=0;i<W;i+=24)h+='<line x1="'+i+'" x2="'+i+'" y1="0" y2="'+H+'" stroke="rgba(255,255,255,.04)"/>';
  if(v.deco==="chalk")h+='<rect x="6" y="6" width="'+(W-12)+'" height="'+(H-12)+'" rx="18" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="3" stroke-dasharray="30 6 12 4"/>';
  if(v.deco==="flag")h+='<rect width="'+W+'" height="'+(H/3)+'" rx="22" fill="#e2231a" opacity=".16"/><rect y="'+(H*2/3)+'" width="'+W+'" height="'+(H/3)+'" rx="22" fill="#278e43" opacity=".16"/><g opacity=".22">'+sun(W/2,H/2,H*.16)+'</g>';
  h+='<rect x="2" y="2" width="'+(W-4)+'" height="'+(H-4)+'" rx="20" fill="none" stroke="'+(v.glow||"rgba(0,0,0,.15)")+'" stroke-opacity=".6" stroke-width="'+(v.glow?3:2)+'"/>';
  return h}
function dot(k,x,y,r){var v=BOARDS[k]||BOARDS.db_paper;return'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+v.dot+'"'+(v.glow?' style="filter:drop-shadow(0 0 3px '+v.glow+')"':'')+'/>'}
// a pen: gradient and glow definitions for the whole board; then each line uses its paint
function penDefs(k,W,H,pid){var p=PENS[k]||PENS.dp_red,id=pid+"p";if(!p.g)return{paint:p.c,defs:"",glow:p.glow||""};
  var d='<linearGradient id="'+id+'" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="'+W+'" y2="'+(k==="dp_kurdistan"?0:H)+'"'+(k==="dp_kurdistan"?' spreadMethod="repeat"':'')+'>';
  var g=p.g,L=g.length;
  if(k==="dp_kurdistan"){d='<linearGradient id="'+id+'" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="36" y2="36" spreadMethod="repeat">';
    d+='<stop offset="0" stop-color="#e2231a"/><stop offset=".33" stop-color="#e2231a"/><stop offset=".33" stop-color="#f3f3f3"/><stop offset=".66" stop-color="#f3f3f3"/><stop offset=".66" stop-color="#278e43"/><stop offset="1" stop-color="#278e43"/>'}
  else for(var i=0;i<L;i++)d+='<stop offset="'+(L>1?i/(L-1):0)+'" stop-color="'+g[i]+'"/>';
  return{paint:"url(#"+id+")",defs:d+'</linearGradient>',glow:p.glow||""}}
function boxSvg(k,x,y,s,letter){var p=PENS[k]||PENS.dp_red,h='<rect x="'+(x+2)+'" y="'+(y+2)+'" width="'+(s-4)+'" height="'+(s-4)+'" rx="4" fill="'+p.fill+'"/>';
  if(p.kind==="flag")h+=sun(x+s/2,y+s/2,s*.3);
  else h+='<text x="'+(x+s/2)+'" y="'+(y+s/2+s*.17)+'" text-anchor="middle" font-size="'+(s*.48)+'" font-weight="800" font-family="system-ui,sans-serif" fill="'+(p.c||(p.g&&p.g[Math.floor(p.g.length/2)])||"#333")+'">'+letter+'</text>';
  return h}
function svg(vb,inner){return'<svg viewBox="'+vb+'" aria-hidden="true">'+inner+'</svg>'}
function mini(bk,pk){var W=240,H=150,cs=40,ox=40,oy=35,pd=penDefs(pk,W,H,"pv"+(++n)),h=board(bk,W,H,"pv"),i,j;
  h+='<defs>'+pd.defs+'</defs>';
  var seg=function(x1,y1,x2,y2){return'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+pd.paint+'" stroke-width="6" stroke-linecap="round"'+(pd.glow?' style="filter:drop-shadow(0 0 4px '+pd.glow+')"':'')+'/>'};
  h+=boxSvg(pk,ox,oy,cs,"A")+boxSvg(pk,ox+cs,oy,cs,"A");
  h+=seg(ox,oy,ox+2*cs,oy)+seg(ox,oy+cs,ox+2*cs,oy+cs)+seg(ox,oy,ox,oy+cs)+seg(ox+cs,oy,ox+cs,oy+cs)+seg(ox+2*cs,oy,ox+2*cs,oy+cs)+seg(ox+3*cs,oy+cs,ox+4*cs,oy+cs)+seg(ox+2*cs,oy+2*cs,ox+2*cs,oy+cs);
  for(i=0;i<=4;i++)for(j=0;j<=2;j++)h+=dot(bk,ox+i*cs,oy+j*cs,4.5);
  return svg("0 0 "+W+" "+H,h)}
function el(html){var d=document.createElement("div");d.innerHTML=html;var s=d.firstChild;s.style.cssText="width:100%;max-width:240px;height:auto;display:block;margin:0 auto;border-radius:12px";return s}
window.DOTS={pens:PENS,boards:BOARDS,board:board,dot:dot,penDefs:penDefs,boxSvg:boxSvg,mini:mini};
if(!window.AG||!AG.addPack)return;
AG.addPack({type:"dotpen",def:"dp_red",items:PENS,
  title:["✏️ پێنووسێن خال و چارگۆشە","✏️ پێنووسی خاڵ و چوارگۆشە","✏️ أقلام النقاط والمربعات","✏️ Dots and Boxes pens"],
  desc:["ڕەنگێ هێل و چارگۆشێن تە ل یاریا خال و چارگۆشە.","ڕەنگی هێڵ و چوارگۆشەکانت.","لون خطوطك ومربعاتك.","The colour of your lines and boxes."],
  preview:function(k){return el(mini("db_paper",k))}});
AG.addPack({type:"dotboard",def:"db_paper",items:BOARDS,
  title:["▦ مێزێن خال و چارگۆشە","▦ مێزی خاڵ و چوارگۆشە","▦ طاولات النقاط والمربعات","▦ Dots and Boxes boards"],
  desc:["مێزا یاریا خال و چارگۆشە.","مێزی یاری خاڵ و چوارگۆشە.","طاولة لعبة النقاط والمربعات.","The board of Dots and Boxes."],
  preview:function(k){return el(mini(k,"dp_red"))}});
})();
