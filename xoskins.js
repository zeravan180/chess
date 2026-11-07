/* XO (tic-tac-toe): the X and O looks and the boards sold in the shop.
   =====================================================================
   TO ADD A LOOK: add one entry to MARKS or BOARDS (name in 4 languages,
   price in AG and its colours). price 0 = free for everyone. Only this
   file changes. The admin opens the app once so the new price is written
   to the server.
   MARKS  x:[colour, colour]  o:[colour, colour]  (a gradient for each mark)
          glow: soft light around the marks    kind: "flag" | "fire" | "neon" | "gem" | "chalk"
   BOARDS bg:[colour, colour] (background)  cell: square colour  line: grid colour
          glow, deco: "stars" | "sun" | "wood" | "sea" | "chalk"
   ===================================================================== */
(function(){
var MARKS={
  xm_classic:{name:["کلاسیک","کلاسیک","كلاسيكي","Classic"],price:0,x:["#ff5d73","#d61f45"],o:["#4dabff","#1c64d6"]},
  xm_chalk:{name:["تەباشیر","تەباشیر","طباشير","Chalk"],price:0,x:["#ffffff","#e8e8e8"],o:["#ffe9a6","#ffd166"],kind:"chalk"},
  xm_mono:{name:["ڕەش و سپی","ڕەش و سپی","أبيض وأسود","Black & white"],price:30,x:["#ffffff","#cfd6e0"],o:["#3b3f4a","#111318"]},
  xm_candy:{name:["شرینی","شیرینی","حلوى","Candy"],price:50,x:["#ff9ad5","#ff4fa3"],o:["#a5f3fc","#38bdf8"]},
  xm_nature:{name:["سروشت","سروشت","طبيعة","Nature"],price:60,x:["#a3e635","#4d7c0f"],o:["#fde68a","#d97706"]},
  xm_kurdistan:{name:["کوردستان","کوردستان","كردستان","Kurdistan"],price:80,x:["#e2231a","#a3120c"],o:["#278e43","#14532d"],kind:"flag"},
  xm_neon:{name:["نیۆن","نیۆن","نيون","Neon"],price:120,x:["#ff6bff","#d400d4"],o:["#5efcff","#00c2d4"],kind:"neon",glow:"#7df9ff"},
  xm_fire:{name:["ئاگر و ئاڤ","ئاگر و ئاو","نار وماء","Fire & water"],price:150,x:["#ffd23f","#ff3d00"],o:["#bff4ff","#1e88ff"],kind:"fire",glow:"#ff9a3c"},
  xm_gold:{name:["زێڕ و زیڤ","زێڕ و زیو","ذهب وفضة","Gold & silver"],price:200,x:["#fff1a8","#c9921f"],o:["#ffffff","#8b929e"],glow:"#ffe08a",rare:true},
  xm_galaxy:{name:["گەلەستێرک","گەلەستێرە","مجرة","Galaxy"],price:250,x:["#c084fc","#6d28d9"],o:["#f472b6","#be185d"],glow:"#b48cff",kind:"neon",rare:true},
  xm_diamond:{name:["ئەلماس","ئەڵماس","ألماس","Diamond"],price:300,x:["#e0f7ff","#7fd6ff"],o:["#ffe3ea","#ff8fab"],kind:"gem",glow:"#cfefff",rare:true}
};
var BOARDS={
  xb_classic:{name:["کلاسیک","کلاسیک","كلاسيكي","Classic"],price:0,bg:["#1f4a40","#10261f"],cell:"rgba(255,255,255,.06)",line:"#e8d9a8"},
  xb_chalk:{name:["تەختێ ڕەش","تەختەی ڕەش","سبورة","Blackboard"],price:0,bg:["#2c3a33","#1a231e"],cell:"rgba(255,255,255,.03)",line:"#f4f4f0",deco:"chalk"},
  xb_paper:{name:["دەفتەر","دەفتەر","دفتر","Notebook"],price:40,bg:["#fbf8ef","#efe8d4"],cell:"rgba(60,110,200,.04)",line:"#2f5fb0",deco:"paper"},
  xb_wood:{name:["دارێ گوێز","داری گوێز","خشب الجوز","Walnut"],price:60,bg:["#8a5530","#4a2814"],cell:"rgba(255,230,190,.10)",line:"#f6dfb4",deco:"wood"},
  xb_sea:{name:["دەریا","دەریا","بحر","Sea"],price:100,bg:["#1fb5e0","#063a63"],cell:"rgba(255,255,255,.10)",line:"#e6fbff",deco:"sea"},
  xb_kurdistan:{name:["کوردستان","کوردستان","كردستان","Kurdistan"],price:120,bg:["#ffffff","#f2f2f2"],cell:"rgba(0,0,0,.03)",line:"#fcbf09",deco:"flag"},
  xb_royal:{name:["پاشایی","پاشایانە","ملكي","Royal"],price:180,bg:["#5b2a86","#260c40"],cell:"rgba(255,215,120,.08)",line:"#f0c64a",glow:"#ffd54f",rare:true},
  xb_galaxy:{name:["گەلەستێرک","گەلەستێرە","مجرة","Galaxy"],price:250,bg:["#2a1a6a","#05021a"],cell:"rgba(180,140,255,.08)",line:"#b48cff",glow:"#9f7bff",deco:"stars",rare:true},
  xb_gold:{name:["زێڕ","زێڕ","ذهب","Gold"],price:300,bg:["#2a2420","#0e0a08"],cell:"rgba(255,215,120,.07)",line:"#ffd54f",glow:"#ffe08a",deco:"sun",rare:true}
};
var n=0;
// the board is drawn in a 600 x 600 box; the 9 squares are 180 wide, starting 30 in from the edge
var BW=600,BO=30,BS=180;
function cellXY(i){return[BO+(i%3)*BS+BS/2,BO+Math.floor(i/3)*BS+BS/2]}
function sun(cx,cy,r,col){var s='<g transform="translate('+cx+' '+cy+')" fill="'+(col||"#fcbf09")+'">';
  for(var k=0;k<21;k++)s+='<path transform="rotate('+(k*360/21)+')" d="M0 '+(-r)+'L'+(r*.18)+' '+(-r*.5)+'L'+(-r*.18)+' '+(-r*.5)+'z"/>';
  return s+'<circle r="'+(r*.52)+'"/></g>'}
// one X or O. side 0 = X, 1 = O. s = half the size of the mark
function mark(k,side,cx,cy,s,pid){var v=MARKS[k]||MARKS.xm_classic,c=side?v.o:v.x,id=(pid||"m")+(++n),w=s*.42;
  var h='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+c[0]+'"/><stop offset="1" stop-color="'+c[1]+'"/></linearGradient>';
  if(v.glow)h+='<filter id="'+id+'g" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="'+(s*.12)+'" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
  h+='</defs><g'+(v.glow?' filter="url(#'+id+'g)"':'')+'>';
  var sh='<g transform="translate('+(s*.06)+' '+(s*.1)+')" opacity=".28">',body='',hi='';
  if(!side){var d='M'+(cx-s)+' '+(cy-s)+'L'+(cx+s)+' '+(cy+s)+'M'+(cx+s)+' '+(cy-s)+'L'+(cx-s)+' '+(cy+s);
    sh+='<path d="'+d+'" stroke="#000" stroke-width="'+w+'" stroke-linecap="round" fill="none"/></g>';
    if(v.kind==="flag"){body='<path d="'+d+'" stroke="#e2231a" stroke-width="'+w+'" stroke-linecap="round" fill="none"/><path d="'+d+'" stroke="#fff" stroke-width="'+(w*.5)+'" stroke-linecap="round" fill="none"/>'+sun(cx,cy,w*.75)}
    else body='<path d="'+d+'" stroke="url(#'+id+')" stroke-width="'+w+'" stroke-linecap="round" fill="none"/>';
    if(v.kind==="chalk")body+='<path d="'+d+'" stroke="rgba(0,0,0,.18)" stroke-width="'+(w*.9)+'" stroke-dasharray="2 7" fill="none"/>';
    if(v.kind==="neon")body+='<path d="'+d+'" stroke="#fff" stroke-width="'+(w*.22)+'" stroke-linecap="round" fill="none" opacity=".85"/>';
    if(v.kind==="gem"||v.glow)hi='<path d="M'+(cx-s*.8)+' '+(cy-s*.95)+'L'+(cx-s*.25)+' '+(cy-s*.4)+'" stroke="#fff" stroke-width="'+(w*.22)+'" stroke-linecap="round" opacity=".7"/>';
    if(v.kind==="fire")hi='<path d="M'+(cx+s*.2)+' '+(cy-s*1.05)+'q'+(s*.25)+' '+(s*.25)+' 0 '+(s*.45)+'q-'+(s*.2)+' -'+(s*.2)+' 0 -'+(s*.45)+'z" fill="#ffe08a"/>'}
  else{var r=s*.82;sh+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" stroke="#000" stroke-width="'+w+'" fill="none"/></g>';
    if(v.kind==="flag")body='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" stroke="#278e43" stroke-width="'+w+'" fill="none"/><circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" stroke="#fff" stroke-width="'+(w*.5)+'" fill="none"/>'+sun(cx,cy,r*.45);
    else body='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" stroke="url(#'+id+')" stroke-width="'+w+'" fill="none"/>';
    if(v.kind==="chalk")body+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" stroke="rgba(0,0,0,.18)" stroke-width="'+(w*.9)+'" stroke-dasharray="2 7" fill="none"/>';
    if(v.kind==="neon")body+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" stroke="#fff" stroke-width="'+(w*.22)+'" fill="none" opacity=".85"/>';
    if(v.kind==="gem"||v.glow)hi='<path d="M'+(cx-r*.75)+' '+(cy-r*.35)+'A'+r+' '+r+' 0 0 1 '+(cx-r*.2)+' '+(cy-r*.95)+'" stroke="#fff" stroke-width="'+(w*.22)+'" stroke-linecap="round" fill="none" opacity=".7"/>';
    if(v.kind==="fire")hi='<circle cx="'+(cx+r*.7)+'" cy="'+(cy-r*.7)+'" r="'+(w*.3)+'" fill="#fff" opacity=".8"/>'}
  return h+sh+body+hi+'</g>'}
// the empty board
function board(k,pid){var v=BOARDS[k]||BOARDS.xb_classic,id=(pid||"b")+(++n);
  var h='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+v.bg[0]+'"/><stop offset="1" stop-color="'+v.bg[1]+'"/></linearGradient></defs>';
  h+='<rect width="'+BW+'" height="'+BW+'" rx="34" fill="url(#'+id+')"/>';
  if(v.deco==="wood")for(var i=0;i<14;i++)h+='<path d="M0 '+(20+i*42)+'c150 -12 300 12 600 -4" stroke="rgba(40,20,5,.22)" stroke-width="3" fill="none"/>';
  if(v.deco==="paper")for(var j=1;j<20;j++)h+='<line x1="0" x2="600" y1="'+(j*30)+'" y2="'+(j*30)+'" stroke="rgba(47,95,176,.16)" stroke-width="2"/>';
  if(v.deco==="paper")h+='<line x1="60" x2="60" y1="0" y2="600" stroke="rgba(226,35,26,.35)" stroke-width="3"/>';
  if(v.deco==="sea")for(var w=0;w<6;w++)h+='<path d="M0 '+(80+w*95)+'q50 -22 100 0t100 0t100 0t100 0t100 0t100 0" stroke="rgba(255,255,255,.12)" stroke-width="6" fill="none"/>';
  if(v.deco==="stars")for(var s=0;s<60;s++){var a=(s*97)%600,b=(s*211+40)%600;h+='<circle cx="'+a+'" cy="'+b+'" r="'+(1+(s%3))+'" fill="#e6fbff" opacity=".8"/>'}
  if(v.deco==="sun")h+='<g opacity=".14">'+sun(300,300,240,"#ffd54f")+'</g>';
  if(v.deco==="flag")h+='<rect width="600" height="200" rx="34" fill="#e2231a" opacity=".88"/><rect y="170" width="600" height="30" fill="#e2231a" opacity=".88"/><rect y="400" width="600" height="200" rx="34" fill="#278e43" opacity=".88"/><rect y="400" width="600" height="30" fill="#278e43" opacity=".88"/><g opacity=".9">'+sun(300,300,85)+'</g>';
  for(var c=0;c<9;c++){var p=cellXY(c);h+='<rect x="'+(p[0]-80)+'" y="'+(p[1]-80)+'" width="160" height="160" rx="22" fill="'+v.cell+'"/>'}
  var L=function(x1,y1,x2,y2){return'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+v.line+'" stroke-width="10" stroke-linecap="round"'+(v.deco==="chalk"?' stroke-dasharray="40 4 18 3"':'')+'/>'};
  h+='<g'+(v.glow?' style="filter:drop-shadow(0 0 8px '+v.glow+')"':'')+'>';
  for(var g=1;g<3;g++){h+=L(BO+g*BS,BO+14,BO+g*BS,BO+3*BS-14)+L(BO+14,BO+g*BS,BO+3*BS-14,BO+g*BS)}
  return h+'</g><rect x="3" y="3" width="594" height="594" rx="32" fill="none" stroke="'+v.line+'" stroke-opacity=".5" stroke-width="'+(v.glow?6:3)+'"/>'}
function svg(vb,inner,cls){return'<svg viewBox="'+vb+'" class="'+(cls||"sbp")+'" aria-hidden="true">'+inner+'</svg>'}
function marksPreview(k){return svg("0 0 240 110",'<rect width="240" height="110" rx="16" fill="#1f4a40"/>'+mark(k,0,72,55,30,"pm")+mark(k,1,168,55,30,"pm"))}
function boardPreview(k){return svg("0 0 600 600",board(k,"pb")+mark("xm_classic",0,cellXY(0)[0],cellXY(0)[1],50,"pb")+mark("xm_classic",1,cellXY(4)[0],cellXY(4)[1],50,"pb")+mark("xm_classic",0,cellXY(8)[0],cellXY(8)[1],50,"pb"))}
function el(html){var d=document.createElement("div");d.innerHTML=html;var s=d.firstChild;s.style.cssText="width:100%;max-width:240px;height:auto;display:block;margin:0 auto";return s}
window.XOS={marks:MARKS,boards:BOARDS,mark:mark,board:board,cellXY:cellXY,BW:BW,BO:BO,BS:BS,marksPreview:marksPreview,boardPreview:boardPreview};
if(!window.AG||!AG.addPack)return;
AG.addPack({type:"xomark",def:"xm_classic",items:MARKS,
  title:["❌⭕ شێوێن X و O","❌⭕ شێوەی X و O","❌⭕ أشكال X و O","❌⭕ X and O styles"],
  desc:["شێوێ X و O ل یاریا XO.","شێوەی X و O لە یاری XO.","شكل X و O في لعبة إكس أو.","How your X and O look in XO."],
  preview:function(k){return el(marksPreview(k))}});
AG.addPack({type:"xoboard",def:"xb_classic",items:BOARDS,
  title:["#️⃣ تەختێن XO","#️⃣ تەختەی XO","#️⃣ ألواح إكس أو","#️⃣ XO boards"],
  desc:["تەختێ یاریا XO.","تەختەی یاری XO.","لوح لعبة إكس أو.","The board of XO."],
  preview:function(k){var s=el(boardPreview(k));s.style.maxWidth="150px";return s}});
})();
