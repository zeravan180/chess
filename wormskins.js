/* AG Mar (the worm game): worm skins sold in the shop.
   =====================================================================
   TO ADD A SKIN: add one entry to ITEMS (name in 4 languages, price in
   AG, and its colours). price 0 = free for everyone. The admin opens the
   app once so the new price is written to the server.
   Kinds:  stripes  -> colours repeat along the body (c: list, n: segments per colour)
           hue      -> a rainbow running along the body
           flag     -> three bands along the body with a sun (the Kurdistan flag)
           photo    -> the player's own profile photo along the body
           custom   -> colours the player picks himself (bought once, then edited in the game)
   ===================================================================== */
(function(){
var ITEMS={
  wm_orange:{name:["پرتەقالی","پرتەقاڵی","برتقالي","Orange"],price:0,kind:"stripes",c:["#f59e0b","#fde68a"],n:2},
  wm_blue:{name:["شین","شین","أزرق","Blue"],price:0,kind:"stripes",c:["#38bdf8","#e0f2fe"],n:2},
  wm_green:{name:["سەوز","سەوز","أخضر","Green"],price:0,kind:"stripes",c:["#22c55e","#dcfce7"],n:2},
  wm_kurdistan:{name:["کوردستان","کوردستان","كردستان","Kurdistan"],price:0,kind:"flag"},
  wm_rainbow:{name:["ڕەنگین","ڕەنگاوڕەنگ","قوس قزح","Rainbow"],price:10,kind:"hue"},
  wm_fire:{name:["ئاگر","ئاگر","نار","Fire"],price:20,kind:"stripes",c:["#ef4444","#f97316","#facc15","#f97316"],n:1,deco:"🔥"},
  wm_snow:{name:["بەفر","بەفر","ثلج","Snow"],price:20,kind:"stripes",c:["#e0f2fe","#e0f2fe","#7dd3fc"],n:1},
  wm_tiger:{name:["پڵنگ","پڵنگ","نمر","Tiger"],price:30,kind:"stripes",c:["#1f1f1f","#f59e0b","#f59e0b","#f59e0b","#f59e0b"],n:1},
  wm_gold:{name:["زێڕ","زێڕ","ذهب","Gold"],price:50,rare:true,kind:"stripes",c:["#fbbf24","#fff3b0","#fbbf24"],n:1,deco:"👑"},
  wm_night:{name:["شەڤ","شەو","ليل","Night"],price:60,rare:true,kind:"stripes",c:["#111827","#4b5563"],n:2,eye:"#ef4444"},
  wm_galaxy:{name:["گالاکسی","گەلەستێرە","مجرة","Galaxy"],price:80,rare:true,kind:"stripes",c:["#4c1d95","#7c3aed","#1e3a8a","#db2777"],n:1,deco:"✨"},
  wm_diamond:{name:["ئەلماس","ئەڵماس","ألماس","Diamond"],price:120,rare:true,kind:"stripes",c:["#67e8f9","#e0f7ff"],n:1,deco:"💎"},
  wm_custom:{name:["مارێ خۆ دروست بکە","مارەکەی خۆت دروست بکە","اصنع ثعبانك","Make your own"],price:200,rare:true,kind:"custom",c:["#ef4444","#3b82f6","#22c55e","#facc15"],n:1,deco:"🎨"},
  wm_photo:{name:["وێنێ تە","وێنەی تۆ","صورتك","Your photo"],price:250,rare:true,kind:"photo",c:["#4c1d95","#7c3aed"]}
};
window.WORMSKINS=ITEMS;
// colour of body segment i for a skin (flag and photo skins draw their own way, this is their fallback)
window.wormColor=function(sk,i){if(!sk)sk=ITEMS.wm_orange;
  if(sk.kind==="hue")return"hsl("+((i*12)%360)+" 85% 58%)";
  if(sk.kind==="flag")return["#e2231a","#ffffff","#278e43"][Math.floor(i/3)%3];
  var c=sk.c||["#f59e0b","#fde68a"],n=sk.n||1;return c[Math.floor(i/n)%c.length]};
// the shop picture of a skin: a short worm drawn on a canvas
function preview(k){var sk=ITEMS[k]||ITEMS.wm_orange,cv=document.createElement("canvas");cv.width=240;cv.height=110;
  cv.style.cssText="width:100%;max-width:240px;height:auto;display:block;margin:0 auto;border-radius:12px;background:radial-gradient(circle at 50% 50%,#1d3b4a,#0a1520)";
  var x=cv.getContext("2d"),n=16,r=13,p=[];for(var i=0;i<n;i++){var t=i/(n-1);p.push([200-t*160,55+Math.sin(t*Math.PI*1.6)*18])}
  if(sk.kind==="flag"){x.lineCap="round";x.lineJoin="round";
    // three bands: draw the whole width red, then white and green bands offset to one side
    var off=function(d){return p.map(function(q,i){var a=p[Math.max(0,i-1)],b=p[Math.min(n-1,i+1)],dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1;return[q[0]-dy/L*d,q[1]+dx/L*d]})};
    var band=function(d1,d2,col){var A=off(d1),B=off(d2).reverse();x.fillStyle=col;x.beginPath();A.forEach(function(q,i){i?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1])});B.forEach(function(q){x.lineTo(q[0],q[1])});x.closePath();x.fill()};
    band(-r,r,"#e2231a");band(-r/3,r/3,"#ffffff");band(-r,-r/3,"#278e43");
    for(var s=3;s<n;s+=4)sun(x,p[s][0],p[s][1],r*.42);
  }else{for(var i2=n-1;i2>=0;i2--){var col=sk.kind==="photo"?sk.c[i2%2]:wormColor(sk,i2);ball(x,p[i2][0],p[i2][1],r,col)}
    if(sk.kind==="photo")for(var q=1;q<n;q+=4)face(x,p[q][0],p[q][1],r*.8)}
  var h=p[0];if(sk.kind==="photo")face(x,h[0],h[1],r*1.1);
  eyes(x,h[0],h[1],r,0,sk.eye);
  if(sk.deco){x.font="18px system-ui";x.textAlign="center";x.fillText(sk.deco,h[0]+10,h[1]-r-2)}
  return cv}
function ball(x,px,py,r,col){var g=x.createRadialGradient(px-r*.3,py-r*.3,1,px,py,r);g.addColorStop(0,"rgba(255,255,255,.85)");g.addColorStop(.3,col);g.addColorStop(1,col);x.fillStyle=g;x.beginPath();x.arc(px,py,r,0,7);x.fill()}
function sun(x,px,py,R){x.save();x.translate(px,py);x.fillStyle="#fcbf09";for(var k=0;k<21;k++){x.rotate(Math.PI*2/21);x.beginPath();x.moveTo(0,-R);x.lineTo(R*.18,-R*.5);x.lineTo(-R*.18,-R*.5);x.closePath();x.fill()}x.beginPath();x.arc(0,0,R*.52,0,7);x.fill();x.restore()}
function face(x,px,py,R){x.save();x.beginPath();x.arc(px,py,R,0,7);x.clip();x.fillStyle="#60a5fa";x.fillRect(px-R,py-R,2*R,2*R);x.fillStyle="#f1d3b3";x.beginPath();x.arc(px,py-R*.18,R*.38,0,7);x.fill();x.fillStyle="#1f2937";x.beginPath();x.ellipse(px,py+R*.8,R*.75,R*.55,0,0,7);x.fill();x.restore();x.strokeStyle="#fcbf09";x.lineWidth=2;x.beginPath();x.arc(px,py,R,0,7);x.stroke()}
function eyes(x,hx,hy,r,a,eye){for(var sd=-1;sd<=1;sd+=2){var ex=hx+Math.cos(a)*r*.35+Math.cos(a+sd*1.4)*r*.45,ey=hy+Math.sin(a)*r*.35+Math.sin(a+sd*1.4)*r*.45;
  x.fillStyle="#fff";x.beginPath();x.arc(ex,ey,r*.33,0,7);x.fill();x.fillStyle=eye||"#111";x.beginPath();x.arc(ex+Math.cos(a)*r*.12,ey+Math.sin(a)*r*.12,r*.17,0,7);x.fill()}}
window.wormDraw={ball:ball,sun:sun,eyes:eyes};
if(!window.AG||!AG.addPack)return;
AG.addPack({type:"worm",def:"wm_orange",items:ITEMS,
  title:["🐍 سکینێن مارێ (AG Mar)","🐍 پێستی مار (AG Mar)","🐍 أشكال الثعبان (AG Mar)","🐍 Worm skins (AG Mar)"],
  desc:["شێوازێ مارێ تە ل یاریا AG Mar.","شێوەی مارەکەت لە یاری AG Mar.","شكل ثعبانك في لعبة AG Mar.","How your worm looks in AG Mar."],
  preview:preview});
})();
