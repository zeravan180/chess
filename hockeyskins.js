/* Air hockey: the looks sold in the shop — mallets, pucks and tables.
   hockey.html draws with window.HKSK; the main shop (index.html) shows them as packs. */
(function(){
function rg(x,X,Y,r,c){var g=x.createRadialGradient(X-r*.3,Y-r*.35,r*.08,X,Y,r);c.forEach(function(s,i){g.addColorStop(i/(c.length-1),s)});return g}
function circ(x,X,Y,r,fill,stroke,lw){x.beginPath();x.arc(X,Y,r,0,7);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw||2;x.stroke()}}
function star(x,X,Y,r,n,inner){x.beginPath();for(var i=0;i<n*2;i++){var a=-Math.PI/2+i*Math.PI/n,rr=i%2?r*(inner||.45):r;x.lineTo(X+Math.cos(a)*rr,Y+Math.sin(a)*rr)}x.closePath()}
function sun(x,X,Y,r,col){x.fillStyle=col;star(x,X,Y,r,21,.7);x.fill();circ(x,X,Y,r*.55,col)}
// ---------- mallets: a body, a ring and a knob; some have something extra ----------
function mk(c,ring,glow,extra){return function(x,X,Y,r,t){x.save();
  x.fillStyle="rgba(0,0,0,.16)";x.beginPath();x.ellipse(X+r*.14,Y+r*.34,r,r*.45,0,0,7);x.fill();
  if(glow){x.shadowColor=glow;x.shadowBlur=r*.7}circ(x,X,Y,r,rg(x,X,Y,r,c));x.shadowBlur=0;
  circ(x,X,Y,r*.66,null,ring,r*.1);
  if(extra)extra(x,X,Y,r,t||0);
  circ(x,X,Y-r*.07,r*.42,rg(x,X,Y-r*.07,r*.42,c),ring,r*.07);
  x.globalAlpha=.55;x.fillStyle="#fff";x.beginPath();x.ellipse(X-r*.32,Y-r*.42,r*.22,r*.1,-.6,0,7);x.fill();x.restore()}}
var MALLETS={
 mk_red:{price:0,name:["سۆرێ ئاسایی","سووری ئاسایی","الأحمر","Classic red"],draw:mk(["#ff9ab4","#ff2a5f","#8a0026"],"rgba(255,214,225,.7)","#ff2a5f")},
 mk_blue:{price:0,hide:1,name:["شینێ ئاسایی","شینی ئاسایی","الأزرق","Classic blue"],draw:mk(["#a8ecff","#1fb4ff","#004f8a"],"rgba(214,246,255,.7)","#1fb4ff")},
 mk_wood:{price:100,name:["دار 🪵","دار 🪵","خشب 🪵","Wood 🪵"],draw:mk(["#f3c98b","#b8742f","#5a3410"],"rgba(90,52,16,.6)",null,function(x,X,Y,r){x.strokeStyle="rgba(90,52,16,.35)";x.lineWidth=1;for(var i=-3;i<=3;i++){x.beginPath();x.ellipse(X+i*r*.18,Y,r*.15,r*.9,0,0,7);x.stroke()}})},
 mk_bronze:{price:150,name:["برۆنز 🥉","برۆنز 🥉","برونز 🥉","Bronze 🥉"],draw:mk(["#ffd0a0","#cd7f32","#5e3200"],"rgba(255,224,190,.8)","#cd7f32")},
 mk_silver:{price:200,name:["زیڤ 🥈","زیو 🥈","فضة 🥈","Silver 🥈"],draw:mk(["#ffffff","#b8c3cf","#56606b"],"rgba(255,255,255,.9)","#cfd8e3")},
 mk_green:{price:250,name:["کەسکێ نیۆن","سەوزی نیۆن","أخضر نيون","Neon green"],draw:mk(["#d4ffb0","#39ff14","#0b6b00"],"rgba(220,255,200,.85)","#39ff14")},
 mk_pink:{price:250,name:["پەمبەیی 💗","پەمەیی 💗","وردي 💗","Pink 💗"],draw:mk(["#ffe0f5","#ff4fc3","#7a0a5c"],"rgba(255,224,245,.85)","#ff4fc3")},
 mk_gold:{price:300,name:["زێڕ 🥇","زێڕ 🥇","ذهب 🥇","Gold 🥇"],draw:mk(["#fff6c2","#ffc400","#7a5200"],"rgba(255,246,194,.9)","#ffd54f",function(x,X,Y,r){x.strokeStyle="rgba(122,82,0,.5)";x.lineWidth=1;star(x,X,Y,r*.9,12,.85);x.stroke()})},
 mk_ice:{price:300,name:["قەشا ❄️","سەهۆڵ ❄️","جليد ❄️","Ice ❄️"],draw:mk(["#ffffff","#9fe3ff","#2a7fb8"],"rgba(255,255,255,.9)","#9fe3ff",function(x,X,Y,r){x.strokeStyle="rgba(255,255,255,.9)";x.lineWidth=r*.06;for(var i=0;i<6;i++){var a=i*Math.PI/3;x.beginPath();x.moveTo(X,Y);x.lineTo(X+Math.cos(a)*r*.85,Y+Math.sin(a)*r*.85);x.stroke()}})},
 mk_kurd:{price:350,name:["ئالایێ کوردستانێ ☀️","ئاڵای کوردستان ☀️","علم كردستان ☀️","Kurdistan flag ☀️"],draw:function(x,X,Y,r){x.save();x.fillStyle="rgba(0,0,0,.16)";x.beginPath();x.ellipse(X+r*.14,Y+r*.34,r,r*.45,0,0,7);x.fill();
   x.shadowColor="#ffd400";x.shadowBlur=r*.5;circ(x,X,Y,r,"#ed2024");x.shadowBlur=0;circ(x,X,Y,r*.72,"#fff");circ(x,X,Y,r*.48,"#21a54a");sun(x,X,Y,r*.36,"#ffd400");
   circ(x,X,Y,r,null,"rgba(0,0,0,.25)",1.5);x.globalAlpha=.5;x.fillStyle="#fff";x.beginPath();x.ellipse(X-r*.32,Y-r*.45,r*.22,r*.1,-.6,0,7);x.fill();x.restore()}},
 mk_fire:{price:400,rare:1,name:["ئاگر 🔥","ئاگر 🔥","نار 🔥","Fire 🔥"],draw:mk(["#fff3a0","#ff7a00","#8a0f00"],"rgba(255,240,160,.85)","#ff5500",function(x,X,Y,r,t){x.fillStyle="rgba(255,220,80,.55)";for(var i=0;i<8;i++){var a=i*Math.PI/4+t*2;x.beginPath();x.ellipse(X+Math.cos(a)*r*.8,Y+Math.sin(a)*r*.8,r*.16,r*.3,a+Math.PI/2,0,7);x.fill()}})},
 mk_galaxy:{price:500,rare:1,name:["گەلاکسی 🌌","گەلەستێرە 🌌","مجرة 🌌","Galaxy 🌌"],draw:mk(["#c9a8ff","#5b21b6","#0b0630"],"rgba(201,168,255,.8)","#8b5cf6",function(x,X,Y,r,t){x.fillStyle="#fff";for(var i=0;i<9;i++){var a=i*2.4+t*.6,d=r*(.25+(i%3)*.22);circ(x,X+Math.cos(a)*d,Y+Math.sin(a)*d,r*(.03+(i%2)*.03),"#fff")}})},
 mk_diamond:{price:800,rare:1,name:["ئەلماس 💎","ئەڵماس 💎","ألماس 💎","Diamond 💎"],draw:function(x,X,Y,r,t){x.save();x.fillStyle="rgba(0,0,0,.16)";x.beginPath();x.ellipse(X+r*.14,Y+r*.34,r,r*.45,0,0,7);x.fill();
   x.shadowColor="#7df9ff";x.shadowBlur=r*.8;x.beginPath();for(var i=0;i<8;i++){var a=Math.PI/8+i*Math.PI/4;x.lineTo(X+Math.cos(a)*r,Y+Math.sin(a)*r)}x.closePath();x.fillStyle=rg(x,X,Y,r,["#ffffff","#7df9ff","#1a6f9e"]);x.fill();x.shadowBlur=0;
   x.strokeStyle="rgba(255,255,255,.75)";x.lineWidth=1.2;for(i=0;i<8;i++){a=Math.PI/8+i*Math.PI/4;x.beginPath();x.moveTo(X,Y);x.lineTo(X+Math.cos(a)*r,Y+Math.sin(a)*r);x.stroke()}
   x.beginPath();for(i=0;i<8;i++){a=Math.PI/8+i*Math.PI/4;x.lineTo(X+Math.cos(a)*r*.5,Y+Math.sin(a)*r*.5)}x.closePath();x.fillStyle="rgba(255,255,255,.35)";x.fill();x.stroke();
   var s=(Math.sin(t*3)+1)/2;x.globalAlpha=.4+s*.6;x.fillStyle="#fff";star(x,X-r*.35,Y-r*.4,r*.22,4,.25);x.fill();x.restore()}}};
// ---------- pucks; each has the colour of its tail ----------
function pk(c,ring,glow,tail,extra){return{tail:tail,draw:function(x,X,Y,r,t,fast){x.save();x.fillStyle="rgba(0,0,0,.18)";x.beginPath();x.ellipse(X+r*.18,Y+r*.4,r,r*.45,0,0,7);x.fill();
  if(glow&&fast){x.shadowColor=glow;x.shadowBlur=r*1.1}circ(x,X,Y,r,rg(x,X,Y,r,c));x.shadowBlur=0;if(ring)circ(x,X,Y,r*.6,null,ring,r*.12);if(extra)extra(x,X,Y,r,t||0);x.restore()}}}
function P(o,price,name,rare){o.price=price;o.name=name;if(rare)o.rare=1;return o}
var PUCKS={
 pk_gold:P(pk(["#ffe98a","#ffb300","#8a5a00"],"rgba(255,243,192,.75)","#ffb300","255,179,0"),0,["زەرێ ئاسایی","زەردی ئاسایی","الأصفر","Classic yellow"]),
 pk_black:P(pk(["#7a7a7a","#222","#000"],"rgba(255,255,255,.25)","#888","60,60,60"),100,["ڕەشێ یاریگەهێ","ڕەشی یاریگا","أسود كلاسيكي","Black classic"]),
 pk_pink:P(pk(["#ffd6f3","#ff2fb3","#6e0050"],"rgba(255,214,243,.8)","#ff2fb3","255,47,179"),150,["نیۆنا پەمبەیی","نیۆنی پەمەیی","نيون وردي","Pink neon"]),
 pk_ice:P(pk(["#ffffff","#a6e8ff","#2b86c4"],"rgba(255,255,255,.9)","#a6e8ff","120,210,255"),200,["قەشا ❄️","سەهۆڵ ❄️","جليد ❄️","Ice ❄️"]),
 pk_ball:P(pk(["#ffffff","#f0f0f0","#9a9a9a"],null,"#ffffff","255,255,255",function(x,X,Y,r){x.save();x.beginPath();x.arc(X,Y,r,0,7);x.clip();x.fillStyle="#111";star(x,X,Y,r*.36,5,.8);x.fill();for(var i=0;i<5;i++){var a=-Math.PI/2+i*Math.PI*2/5;x.beginPath();x.arc(X+Math.cos(a)*r*.92,Y+Math.sin(a)*r*.92,r*.26,0,7);x.fill()}x.restore();circ(x,X,Y,r,null,"#555",1)}),250,["تەپا پێیان ⚽","تۆپی پێ ⚽","كرة قدم ⚽","Football ⚽"]),
 pk_fire:P(pk(["#fff3a0","#ff6a00","#7a0a00"],"rgba(255,240,160,.8)","#ff4400","255,90,0"),300,["ئاگر 🔥","ئاگر 🔥","نار 🔥","Fire 🔥"],1),
 pk_sun:P(pk(["#fff9c4","#ffd400","#b38600"],null,"#ffd400","255,212,0",function(x,X,Y,r){sun(x,X,Y,r*.62,"#fff3a0")}),300,["ڕۆژا کوردستانێ ☀️","خۆری کوردستان ☀️","شمس كردستان ☀️","Kurdish sun ☀️"]),
 pk_rainbow:P({tail:"rainbow",draw:function(x,X,Y,r,t,fast){x.save();x.fillStyle="rgba(0,0,0,.18)";x.beginPath();x.ellipse(X+r*.18,Y+r*.4,r,r*.45,0,0,7);x.fill();
   if(fast){x.shadowColor="hsl("+(t*200%360)+",100%,60%)";x.shadowBlur=r}var C=["#ff3b3b","#ff9a00","#ffe600","#2ee66b","#2fa8ff","#9b5cff"];for(var i=0;i<6;i++){x.beginPath();x.moveTo(X,Y);x.arc(X,Y,r,i*Math.PI/3+t*4,(i+1)*Math.PI/3+t*4);x.closePath();x.fillStyle=C[i];x.fill()}
   x.shadowBlur=0;circ(x,X,Y,r*.42,"#fff");x.restore()}},400,["ڕەنگین 🌈","ڕەنگاوڕەنگ 🌈","قوس قزح 🌈","Rainbow 🌈"],1),
 pk_diamond:P(pk(["#ffffff","#7df9ff","#1a6f9e"],"rgba(255,255,255,.9)","#7df9ff","125,249,255",function(x,X,Y,r,t){x.fillStyle="rgba(255,255,255,.85)";star(x,X,Y,r*.5,4,.3);x.fill()}),600,["ئەلماس 💎","ئەڵماس 💎","ألماس 💎","Diamond 💎"],1)};
// ---------- tables ----------
function rr(x,X,Y,w,h,r){x.beginPath();x.moveTo(X+r,Y);x.arcTo(X+w,Y,X+w,Y+h,r);x.arcTo(X+w,Y+h,X,Y+h,r);x.arcTo(X,Y+h,X,Y,r);x.arcTo(X,Y,X+w,Y,r);x.closePath()}
// o: frame, rail (glow line), surf [top, middle], dots, line, top/bottom goal colours, art(x,W,H) drawn on the surface
function T(o){return function(x,W,H,GW){rr(x,0,0,W,H,30);x.fillStyle=o.frame;x.fill();
  var g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,o.surf[0]);g.addColorStop(.5,o.surf[1]);g.addColorStop(1,o.surf[0]);rr(x,6,6,W-12,H-12,26);x.fillStyle=g;x.fill();
  x.save();rr(x,6,6,W-12,H-12,26);x.clip();if(o.art)o.art(x,W,H);
  if(o.dots){x.fillStyle=o.dots;for(var yy=18;yy<H;yy+=16)for(var xx=14;xx<W;xx+=16){x.beginPath();x.arc(xx,yy,1.1,0,7);x.fill()}}
  x.lineWidth=3;x.globalAlpha=.8;x.strokeStyle=o.line;x.beginPath();x.moveTo(0,H/2);x.lineTo(W,H/2);x.stroke();x.beginPath();x.arc(W/2,H/2,58,0,7);x.stroke();
  x.fillStyle=o.line;x.beginPath();x.arc(W/2,H/2,6,0,7);x.fill();
  x.strokeStyle=o.gt;x.beginPath();x.arc(W/2,6,78,0,Math.PI);x.stroke();x.strokeStyle=o.gb;x.beginPath();x.arc(W/2,H-6,78,Math.PI,0);x.stroke();
  if(o.center)o.center(x,W,H);else{x.globalAlpha=.13;x.fillStyle=o.line;x.font="900 34px system-ui,sans-serif";x.textAlign="center";x.textBaseline="middle";x.fillText("AG",W/2,H/2+1)}
  x.restore();
  x.shadowBlur=o.glow?14:0;x.lineWidth=4;x.shadowColor=o.rail;x.strokeStyle=o.rail;rr(x,6,6,W-12,H-12,26);x.stroke();
  var goal=function(y,col){x.shadowColor=col;x.fillStyle="#0a0f2e";rr(x,W/2-GW/2,y-6,GW,12,6);x.fill();x.strokeStyle=col;x.lineWidth=3;x.stroke()};goal(4,o.gt);goal(H-4,o.gb);x.shadowBlur=0}}
function stripes(a,b,vertical,n){return function(x,W,H){var k=n||12;for(var i=0;i<k;i++){x.fillStyle=i%2?a:b;if(vertical)x.fillRect(i*W/k,0,W/k+1,H);else x.fillRect(0,i*H/k,W,H/k+1)}}}
function crest(c1,c2,c3){return function(x,W,H){x.save();x.globalAlpha=.9;x.translate(W/2,H/2);x.beginPath();x.moveTo(-26,-30);x.lineTo(26,-30);x.lineTo(26,6);x.quadraticCurveTo(26,26,0,36);x.quadraticCurveTo(-26,26,-26,6);x.closePath();
  x.fillStyle=c1;x.fill();x.lineWidth=3;x.strokeStyle=c2;x.stroke();x.fillStyle=c2;x.fillRect(-26,-12,52,12);x.fillStyle=c3;x.font="900 16px system-ui,sans-serif";x.textAlign="center";x.textBaseline="middle";x.fillText("AG",0,-6);x.font="20px system-ui";x.fillText("⚽",0,16);x.restore()}}
var TABLES={
 tb_neon:{price:0,name:["نیۆنێ ئاسایی","نیۆنی ئاسایی","نيون كلاسيكي","Classic neon"],draw:T({frame:"#141c4a",rail:"#a48bff",glow:1,surf:["#e3f2ff","#ffffff"],dots:"rgba(140,180,210,.45)",line:"#7b5cff",gt:"#3fd2ff",gb:"#ff3d6e"})},
 tb_wood:{price:200,name:["مێزا داری 🪵","مێزی دار 🪵","طاولة خشب 🪵","Wooden table 🪵"],draw:T({frame:"#5a3410",rail:"#c48a4a",surf:["#f5ead2","#fffaf0"],dots:"rgba(160,120,70,.35)",line:"#b5652a",gt:"#2563eb",gb:"#dc2626",
   art:function(x,W,H){x.strokeStyle="rgba(160,110,60,.08)";x.lineWidth=2;for(var i=0;i<30;i++){x.beginPath();x.moveTo(0,i*24);x.bezierCurveTo(W*.3,i*24+8,W*.6,i*24-8,W,i*24+4);x.stroke()}}})},
 tb_ice:{price:250,name:["یاریگەها قەشایێ ⛸️","یاریگای سەهۆڵ ⛸️","ملعب جليد ⛸️","Ice rink ⛸️"],draw:T({frame:"#dfe9f2",rail:"#9fb8cc",surf:["#d8efff","#f4fbff"],line:"#d32f2f",gt:"#1565c0",gb:"#d32f2f",
   art:function(x,W,H){x.strokeStyle="rgba(255,255,255,.7)";x.lineWidth=1;for(var i=0;i<40;i++){var a=(i*97)%W,b=(i*151)%H;x.beginPath();x.moveTo(a,b);x.lineTo(a+30,b+8);x.stroke()}x.strokeStyle="#1565c0";x.lineWidth=3;x.globalAlpha=.6;x.beginPath();x.moveTo(0,H*.3);x.lineTo(W,H*.3);x.moveTo(0,H*.7);x.lineTo(W,H*.7);x.stroke();x.globalAlpha=1}})},
 tb_pink:{price:250,name:["شیرینی 🍬","شیرینی 🍬","حلوى 🍬","Candy 🍬"],draw:T({frame:"#7a1a5c",rail:"#ff8ad8",glow:1,surf:["#ffe0f3","#fff5fb"],dots:"rgba(255,120,200,.35)",line:"#ff4fc3",gt:"#7c3aed",gb:"#ff2f7a"})},
 tb_football:{price:350,name:["یاریگەها تەپا پێیان ⚽","یاریگای تۆپی پێ ⚽","ملعب كرة قدم ⚽","Football pitch ⚽"],draw:T({frame:"#0d3b1a",rail:"#ffffff",surf:["#2f8f3a","#3aa646"],line:"#ffffff",gt:"#ffffff",gb:"#ffffff",art:stripes("rgba(255,255,255,.07)","rgba(0,0,0,0)",false,14),
   center:function(x,W,H){x.globalAlpha=.9;x.strokeStyle="#fff";x.lineWidth=3;x.strokeRect(W/2-90,6,180,70);x.strokeRect(W/2-90,H-76,180,70);x.font="22px system-ui";x.textAlign="center";x.textBaseline="middle";x.fillText("⚽",W/2,H/2+1)}})},
 tb_club_rw:{price:300,name:["یانەیا سۆر و سپی","یانەی سوور و سپی","نادي الأحمر والأبيض","Red & white club"],draw:T({frame:"#7a0010",rail:"#ff4d5e",surf:["#fff","#fff"],line:"#c8102e",gt:"#c8102e",gb:"#c8102e",art:stripes("rgba(200,16,46,.13)","rgba(255,255,255,0)",true,8),center:crest("#c8102e","#fff","#fff")})},
 tb_club_bw:{price:300,name:["یانەیا شین و سپی","یانەی شین و سپی","نادي الأزرق والأبيض","Blue & white club"],draw:T({frame:"#0a2a6b",rail:"#4d8bff",surf:["#fff","#fff"],line:"#0d47a1",gt:"#0d47a1",gb:"#0d47a1",art:stripes("rgba(13,71,161,.13)","rgba(255,255,255,0)",true,8),center:crest("#0d47a1","#fff","#fff")})},
 tb_club_yb:{price:300,name:["یانەیا زەر و ڕەش","یانەی زەرد و ڕەش","نادي الأصفر والأسود","Yellow & black club"],draw:T({frame:"#111",rail:"#ffd400",glow:1,surf:["#fff6c4","#fffbe3"],line:"#111",gt:"#111",gb:"#111",art:stripes("rgba(255,212,0,.28)","rgba(0,0,0,0)",true,8),center:crest("#ffd400","#111","#111")})},
 tb_club_gw:{price:300,name:["یانەیا کەسک و سپی","یانەی سەوز و سپی","نادي الأخضر والأبيض","Green & white club"],draw:T({frame:"#0b4d24",rail:"#3fd27a",surf:["#fff","#fff"],line:"#138a3e",gt:"#138a3e",gb:"#138a3e",art:stripes("rgba(19,138,62,.13)","rgba(255,255,255,0)",true,8),center:crest("#138a3e","#fff","#fff")})},
 tb_kurd:{price:400,name:["کوردستان ☀️","کوردستان ☀️","كردستان ☀️","Kurdistan ☀️"],draw:T({frame:"#21a54a",rail:"#ed2024",surf:["#fff","#fffdf2"],line:"#21a54a",gt:"#ed2024",gb:"#ed2024",
   art:function(x,W,H){x.fillStyle="rgba(237,32,36,.12)";x.fillRect(0,0,W,H/3);x.fillStyle="rgba(33,165,74,.12)";x.fillRect(0,H*2/3,W,H/3)},center:function(x,W,H){x.globalAlpha=.85;sun(x,W/2,H/2,30,"#ffd400")}})},
 tb_space:{price:500,rare:1,name:["بۆشاهیا ئاسمانی 🚀","بۆشایی ئاسمان 🚀","الفضاء 🚀","Space 🚀"],draw:T({frame:"#05030f",rail:"#8b5cf6",glow:1,surf:["#120a35","#1d1050"],line:"#c4b5fd",gt:"#22d3ee",gb:"#f472b6",
   art:function(x,W,H){for(var i=0;i<120;i++){var a=(i*73)%W,b=(i*131+i*i)%H;x.fillStyle="rgba(255,255,255,"+(.3+(i%5)/8)+")";x.beginPath();x.arc(a,b,(i%3)*.6+.4,0,7);x.fill()}
     var g=x.createRadialGradient(W*.25,H*.3,5,W*.25,H*.3,120);g.addColorStop(0,"rgba(236,72,153,.35)");g.addColorStop(1,"rgba(236,72,153,0)");x.fillStyle=g;x.fillRect(0,0,W,H);g=x.createRadialGradient(W*.8,H*.75,5,W*.8,H*.75,140);g.addColorStop(0,"rgba(34,211,238,.3)");g.addColorStop(1,"rgba(34,211,238,0)");x.fillStyle=g;x.fillRect(0,0,W,H)}})},
 tb_gold:{price:800,rare:1,name:["ڕەش و زێڕ 👑","ڕەش و زێڕ 👑","أسود وذهبي 👑","Black & gold 👑"],draw:T({frame:"#000",rail:"#ffd54f",glow:1,surf:["#141414","#262626"],dots:"rgba(255,213,79,.18)",line:"#ffd54f",gt:"#ffd54f",gb:"#ffd54f",center:function(x,W,H){x.globalAlpha=.9;x.font="30px system-ui";x.textAlign="center";x.textBaseline="middle";x.fillText("👑",W/2,H/2+1)}})}};
window.HKSK={mallets:MALLETS,pucks:PUCKS,tables:TABLES};
if(!window.AG||!AG.addPack)return;
// previews for the shop: a small canvas
function cvs(w,h,fn){var c=document.createElement("canvas"),d=Math.min(2,window.devicePixelRatio||1);c.width=w*d;c.height=h*d;c.style.cssText="width:"+w+"px;height:"+h+"px;max-width:100%;display:block;margin:0 auto";var x=c.getContext("2d");x.scale(d,d);fn(x);return c}
var vis=function(o){var r={};for(var k in o)if(!o[k].hide)r[k]=o[k];return r};
AG.addPack({type:"hkmallet",def:"mk_red",items:vis(MALLETS),title:["🏒 دەستکێن هۆکیێ","🏒 دەسکی هۆکی","🏒 مضارب الهوكي","🏒 Hockey mallets"],desc:["دەستکێ تە ل یاریا هۆکیا مێزێ. هەڤڕکێ تە ژی دبینیت!","دەسکەکەت لە یاری هۆکی. بەرامبەرەکەت دەیبینێت!","مضربك في لعبة الهوكي، ويراه خصمك أيضاً!","Your mallet in Air Hockey — your opponent sees it too!"],
  preview:function(k){return cvs(96,96,function(x){MALLETS[k].draw(x,48,46,34,.3)})}});
AG.addPack({type:"hkpuck",def:"pk_gold",items:PUCKS,title:["🥏 تەپێن هۆکیێ","🥏 تۆپی هۆکی","🥏 أقراص الهوكي","🥏 Hockey pucks"],desc:["شێوێ تەپێ و ڕەنگێ دویڤا وێ.","شێوەی تۆپەکە و ڕەنگی شوێنەکەی.","شكل القرص ولون ذيله.","The puck and the colour of its tail."],
  preview:function(k){return cvs(110,96,function(x){var p=PUCKS[k];for(var i=0;i<5;i++){x.fillStyle=p.tail==="rainbow"?"hsla("+i*60+",100%,60%,"+(i/5*.4)+")":"rgba("+p.tail+","+(i/5*.35)+")";x.beginPath();x.arc(18+i*12,70-i*8,10+i*2,0,7);x.fill()}p.draw(x,74,38,24,.4,true)})}});
AG.addPack({type:"hktable",def:"tb_neon",items:TABLES,title:["🟦 مێزێن هۆکیێ","🟦 مێزی هۆکی","🟦 طاولات الهوكي","🟦 Hockey tables"],desc:["مێزا یاریا هۆکیا مێزێ: نیۆن، دار، قەشا، یاریگەها تەپا پێیان، ڕەنگێن یانەیان…","مێزی یاری هۆکی: نیۆن، دار، سەهۆڵ، یاریگای تۆپی پێ، ڕەنگی یانەکان…","طاولة الهوكي: نيون، خشب، جليد، ملعب، ألوان الأندية…","The table: neon, wood, ice, football pitch, club colours…"],
  preview:function(k){return cvs(160,96,function(x){x.translate(160,0);x.rotate(Math.PI/2);x.scale(96/360,160/640);TABLES[k].draw(x,360,640,130)})}});
})();
