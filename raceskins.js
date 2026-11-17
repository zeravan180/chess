/* Racing: everything for the car that is sold in the shop — paint, engine (its sound and power),
   lights, rims, rear wing, underglow and stripes. race.html draws with window.RCSK;
   the main shop (index.html) shows them as packs. */
(function(){
var L4=function(a,b,c,d){return[a,b,c,d]};
// ---------- paint: linear colour, metal, reflection; col2 = a second colour that shows at the edges ----------
var PAINTS={
 pt_white:{price:0,name:L4("سپی","سپی","أبيض","White"),col:[0.86,0.87,0.88],metal:0.15,refl:1},
 pt_red:{price:0,name:L4("سۆر","سوور","أحمر","Red"),col:[0.45,0.015,0.02],metal:0.45,refl:1},
 pt_blue:{price:0,name:L4("شین","شین","أزرق","Blue"),col:[0.02,0.07,0.28],metal:0.6,refl:1},
 pt_black:{price:0,name:L4("ڕەش","ڕەش","أسود","Black"),col:[0.008,0.009,0.011],metal:0.3,refl:1.2},
 pt_silver:{price:0,name:L4("زیڤی","زیوی","فضي","Silver"),col:[0.42,0.44,0.47],metal:0.9,refl:1},
 pt_green:{price:0,name:L4("کەسک","سەوز","أخضر","Green"),col:[0.04,0.14,0.09],metal:0.6,refl:1},
 pt_yellow:{price:0,name:L4("زەر","زەرد","أصفر","Yellow"),col:[0.6,0.38,0.02],metal:0.4,refl:1},
 pt_purple:{price:0,name:L4("مۆر","مۆر","بنفسجي","Purple"),col:[0.15,0.03,0.25],metal:0.6,refl:1},
 pt_sky:{price:120,name:L4("شینێ ئاسمانی","شینی ئاسمانی","أزرق سماوي","Sky blue"),col:[0.12,0.38,0.85],metal:0.5,refl:1},
 pt_orange:{price:120,name:L4("پرتەقالی","پرتەقاڵی","برتقالي","Orange"),col:[0.85,0.2,0.01],metal:0.4,refl:1},
 pt_pink:{price:120,name:L4("پەمبەیی","پەمەیی","وردي","Pink"),col:[0.8,0.12,0.35],metal:0.4,refl:1},
 pt_matte:{price:150,name:L4("ڕەشێ مات","ڕەشی مات","أسود مطفي","Matte black"),col:[0.025,0.025,0.028],metal:0,refl:0.12},
 pt_pearl:{price:150,name:L4("سپیێ مرواری","سپی مرواری","أبيض لؤلؤي","Pearl white"),col:[0.9,0.88,0.84],col2:[0.7,0.8,1.0],metal:0.3,refl:1.25},
 pt_neon:{price:200,name:L4("کەسکێ نیۆن","سەوزی نیۆن","أخضر نيون","Neon green"),col:[0.2,0.85,0.02],metal:0.2,refl:1},
 pt_candy:{price:200,name:L4("سۆرێ شیرینی","سووری شیرینی","أحمر حلوى","Candy red"),col:[0.55,0.0,0.02],col2:[0.9,0.05,0.1],metal:0.9,refl:1.25},
 pt_bronze:{price:250,name:L4("برۆنز","برۆنز","برونزي","Bronze"),col:[0.42,0.2,0.05],metal:1.1,refl:1.1},
 pt_cham:{price:400,rare:1,name:L4("گۆڕەک (مۆر/کەسک)","گۆڕاو (مۆر/سەوز)","حرباء (بنفسجي/أخضر)","Chameleon"),col:[0.22,0.02,0.4],col2:[0.0,0.45,0.25],metal:0.8,refl:1.2},
 pt_chrome:{price:500,rare:1,name:L4("کرۆم 🪞","کرۆم 🪞","كروم 🪞","Chrome 🪞"),col:[0.55,0.57,0.6],metal:1.7,refl:1.7},
 pt_gold:{price:600,rare:1,name:L4("زێڕ 👑","زێڕ 👑","ذهبي 👑","Gold 👑"),col:[0.7,0.45,0.06],col2:[0.9,0.7,0.2],metal:1.5,refl:1.4}};
// ---------- engines: how they sound, and (against the robots) how they pull ----------
var ENGINES={
 en_i4:{price:0,name:L4("٤ سلەندەر","٤ سلەندەر","٤ سلندر","Inline-4"),d:L4("ئاسایی و ئارام","ئاسایی و هێمن","عادي وهادئ","Calm and simple"),cyl:4,idle:900,red:6800,sub:0,half:0.15,drive:2,bright:2600,roar:0.12,vol:0.5,acc:1,vmax:1},
 en_i4t:{price:150,name:L4("٤ سلەندەر تووربۆ","٤ سلەندەر تووربۆ","٤ سلندر توربو","Inline-4 Turbo"),d:L4("بچووک بەس ب تووربۆ 🌀","بچووک بەڵام تووربۆ 🌀","صغير مع توربو 🌀","Small, with a turbo 🌀"),cyl:4,idle:900,red:7000,sub:0.05,half:0.18,drive:2.4,bright:3000,roar:0.13,vol:0.5,turbo:1,acc:1.04,vmax:1.02},
 en_v6t:{price:300,name:L4("V6 تووربۆ","V6 تووربۆ","V6 توربو","V6 Turbo"),d:L4("فیتکا تووربۆیێ 🌀","فیکەی تووربۆ 🌀","صفير التوربو 🌀","Turbo whistle 🌀"),cyl:6,idle:850,red:7000,sub:0.1,half:0.2,drive:2.6,bright:3000,roar:0.14,vol:0.5,turbo:1,acc:1.08,vmax:1.04},
 en_v8:{price:500,name:L4("V8 گران","V8 قورس","V8 قوي","V8 Muscle"),d:L4("دەنگێ گران و تەقتەق 💥","دەنگی قورس و تەقەتەق 💥","صوت غليظ وفرقعة 💥","Deep rumble and pops 💥"),cyl:8,idle:750,red:7200,sub:0.55,half:0.3,drive:3.6,bright:2200,roar:0.16,vol:0.55,pops:1,acc:1.12,vmax:1.06},
 en_ev:{price:650,name:L4("کارەبایی ⚡","کارەبایی ⚡","كهربائي ⚡","Electric ⚡"),d:L4("بێدەنگ و بلەز","بێدەنگ و خێرا","صامت وسريع","Silent and quick"),ev:1,cyl:2,idle:0,red:16000,vol:0.35,acc:1.16,vmax:1.07},
 en_v10:{price:800,rare:1,name:L4("V10 قیژە 🔥","V10 قیژە 🔥","V10 صارخ 🔥","V10 Screamer 🔥"),d:L4("وەکی ترومبێلێن سووپەرکار","وەک سووپەرکار","مثل السيارات الخارقة","Like a supercar"),cyl:10,idle:1000,red:8500,sub:0.15,half:0.35,drive:4,bright:4200,roar:0.16,vol:0.55,pops:1,acc:1.2,vmax:1.09},
 en_v12:{price:1000,rare:1,name:L4("V12 شاهانە 👑","V12 شاهانە 👑","V12 ملكي 👑","V12 Royal 👑"),d:L4("بهێز و نەرم","بەهێز و نەرم","قوي وناعم","Strong and smooth"),cyl:12,idle:900,red:8800,sub:0.1,half:0.22,drive:2.6,bright:5000,roar:0.12,vol:0.5,acc:1.24,vmax:1.11},
 en_w16:{price:1500,rare:1,name:L4("W16 هایپەرکار 🚀","W16 هایپەرکار 🚀","W16 هايبركار 🚀","W16 Hypercar 🚀"),d:L4("بهێزترینا هەمیان!","بەهێزترینی هەمووان!","الأقوى على الإطلاق!","The strongest of all!"),cyl:16,idle:1000,red:7400,sub:0.3,half:0.4,drive:3.2,bright:3600,roar:0.2,vol:0.55,turbo:1,pops:1,acc:1.3,vmax:1.14}};
// ---------- lights: day lights and headlights ----------
var LIGHTS={
 li_white:{price:0,name:L4("سپی","سپی","أبيض","White"),col:[1,1,1.05],head:[0.75,0.82,0.95]},
 li_xenon:{price:100,name:L4("زێنۆن شین","زێنۆنی شین","زينون أزرق","Xenon blue"),col:[0.55,0.75,1.4],head:[0.45,0.6,1.1]},
 li_yellow:{price:100,name:L4("زەر","زەرد","أصفر","Yellow"),col:[1.3,0.9,0.15],head:[1,0.75,0.2]},
 li_green:{price:150,name:L4("کەسک","سەوز","أخضر","Green"),col:[0.3,1.4,0.35],head:[0.3,1,0.35]},
 li_purple:{price:150,name:L4("مۆر","مۆر","بنفسجي","Purple"),col:[0.9,0.35,1.5],head:[0.7,0.3,1.1]},
 li_pink:{price:150,name:L4("پەمبەیی","پەمەیی","وردي","Pink"),col:[1.5,0.4,0.9],head:[1.1,0.35,0.7]},
 li_rainbow:{price:400,rare:1,rainbow:1,name:L4("ڕەنگین 🌈","ڕەنگاوڕەنگ 🌈","قوس قزح 🌈","Rainbow 🌈"),col:[1,1,1],head:[1,1,1]}};
// ---------- rims ----------
var RIMS={
 rm_silver:{price:0,name:L4("زیڤی","زیوی","فضي","Silver"),col:[0.92,0.94,0.97]},
 rm_black:{price:100,name:L4("ڕەش","ڕەش","أسود","Black"),col:[0.12,0.12,0.13]},
 rm_bronze:{price:150,name:L4("برۆنز","برۆنز","برونزي","Bronze"),col:[0.8,0.5,0.25]},
 rm_red:{price:150,name:L4("سۆر","سوور","أحمر","Red"),col:[0.9,0.12,0.1]},
 rm_blue:{price:150,name:L4("شین","شین","أزرق","Blue"),col:[0.15,0.4,1]},
 rm_gold:{price:250,name:L4("زێڕ","زێڕ","ذهبي","Gold"),col:[1.1,0.8,0.25]},
 rm_chrome:{price:300,rare:1,name:L4("کرۆم","کرۆم","كروم","Chrome"),col:[1.3,1.32,1.36]}};
// ---------- rear wings ----------
var WINGS={
 wg_none:{price:0,name:L4("بێ باسک","بێ باڵ","بدون جناح","No wing"),t:0},
 wg_lip:{price:150,name:L4("باسکێ بچووک","باڵی بچووک","جناح صغير","Lip spoiler"),t:1},
 wg_gt:{price:300,name:L4("باسکێ GT","باڵی GT","جناح GT","GT wing"),t:2},
 wg_carbon:{price:450,rare:1,name:L4("باسکێ کاربۆن یێ بلند","باڵی کاربۆنی بەرز","جناح كربون عالٍ","Tall carbon wing"),t:3,carbon:1}};
// ---------- underglow ----------
var GLOWS={
 gl_none:{price:0,name:L4("بێ ڕۆناهی","بێ ڕووناکی","بدون إضاءة","None"),col:null},
 gl_blue:{price:200,name:L4("شین","شین","أزرق","Blue"),col:[0.1,0.5,1]},
 gl_red:{price:200,name:L4("سۆر","سوور","أحمر","Red"),col:[1,0.08,0.12]},
 gl_green:{price:200,name:L4("کەسک","سەوز","أخضر","Green"),col:[0.15,1,0.3]},
 gl_purple:{price:200,name:L4("مۆر","مۆر","بنفسجي","Purple"),col:[0.7,0.2,1]},
 gl_rainbow:{price:500,rare:1,rainbow:1,name:L4("ڕەنگین 🌈","ڕەنگاوڕەنگ 🌈","قوس قزح 🌈","Rainbow 🌈"),col:[1,1,1]}};
// ---------- racing stripes over the bonnet, roof and boot ----------
var STRIPES={
 st_none:{price:0,name:L4("بێ خەت","بێ هێڵ","بدون خطوط","None"),col:null},
 st_white:{price:150,name:L4("دوو خەتێن سپی","دوو هێڵی سپی","خطان أبيضان","White stripes"),col:[0.85,0.86,0.88]},
 st_black:{price:150,name:L4("دوو خەتێن ڕەش","دوو هێڵی ڕەش","خطان أسودان","Black stripes"),col:[0.01,0.01,0.012]},
 st_red:{price:150,name:L4("دوو خەتێن سۆر","دوو هێڵی سوور","خطان أحمران","Red stripes"),col:[0.5,0.01,0.02]},
 st_gold:{price:250,name:L4("دوو خەتێن زێڕ","دوو هێڵی زێڕ","خطان ذهبيان","Gold stripes"),col:[0.7,0.45,0.06]},
 st_kurd:{price:300,rare:1,kurd:1,name:L4("ئالایێ کوردستانێ ☀️","ئاڵای کوردستان ☀️","علم كردستان ☀️","Kurdistan flag ☀️"),col:[0.8,0.02,0.02]}};
// ---------- the kind of car ----------
var BODIES={
 bd_sedan:{price:0,name:L4("سێدان","سێدان","سيدان","Sedan"),acc:1,vmax:1,mass:1},
 bd_wagon:{price:150,name:L4("ستەیشن","ستەیشن","ستيشن","Station wagon"),acc:1,vmax:0.99,mass:1.1},
 bd_coupe:{price:200,name:L4("سپۆرت (کووپێ)","سپۆرت (کووپێ)","رياضية (كوبيه)","Sports coupé"),acc:1.02,vmax:1.03,mass:0.9},
 bd_pickup:{price:250,name:L4("پیکاپ","پیکاپ","بيك آب","Pickup"),acc:0.97,vmax:0.97,mass:1.4},
 bd_truck:{price:600,rare:1,name:L4("تریلە 🚛","تریلە 🚛","تريلة 🚛","Semi truck 🚛"),acc:0.85,vmax:0.92,mass:3}};
var DEF={body:"bd_sedan",paint:"pt_white",engine:"en_i4",light:"li_white",rim:"rm_silver",wing:"wg_none",glow:"gl_none",stripe:"st_none"};
var SETS={body:BODIES,paint:PAINTS,engine:ENGINES,light:LIGHTS,rim:RIMS,wing:WINGS,glow:GLOWS,stripe:STRIPES};
var TYPE={body:"rcbody",paint:"rcpaint",engine:"rcengine",light:"rclight",rim:"rcrim",wing:"rcwing",glow:"rcglow",stripe:"rcstripe"};
// linear colour -> css (the same tone curve the 3D picture uses)
function css(c){if(!c)return"transparent";return"rgb("+c.map(function(v){return Math.round(Math.min(1,Math.pow(Math.max(0,v)/(1+Math.max(0,v))*1.3,1/2.2))*255)}).join(",")+")"}
function rainbow(t){return[0.5+0.5*Math.sin(t*2.2),0.5+0.5*Math.sin(t*2.2+2.1),0.5+0.5*Math.sin(t*2.2+4.2)]}
// a clean "look" from the keys the player has, with anything unknown falling back to the default
function look(sk){var o={};for(var k in DEF){var v=sk&&sk[k];o[k]=SETS[k][v]?v:DEF[k]}return o}

// ================= the engine sound =================
// firing frequency = rpm/60 * cylinders/2; saw waves + half orders through a soft clipper and a filter
function Engine(AC,out,key){var E=ENGINES[key]||ENGINES.en_i4,o={},T=function(p,v){p.setTargetAtTime(v,AC.currentTime,0.03)};
  var g=AC.createGain();g.gain.value=0;g.connect(out);
  var lp=AC.createBiquadFilter();lp.type="lowpass";lp.Q.value=1.4;lp.connect(g);
  var ws=AC.createWaveShaper(),n=2048,cv=new Float32Array(n),k=E.drive||2;for(var i=0;i<n;i++){var x=i/n*2-1;cv[i]=Math.tanh(x*k)/Math.tanh(k)}ws.curve=cv;ws.connect(lp);
  var mk=function(type,gain){var os=AC.createOscillator(),gg=AC.createGain();os.type=type;gg.gain.value=gain;os.connect(gg);gg.connect(ws);os.start();return os};
  var nb=AC.createBuffer(1,AC.sampleRate,AC.sampleRate),nd=nb.getChannelData(0);for(i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
  if(E.ev){o.a=mk("sine",0.5);o.b=mk("triangle",0.15);lp.frequency.value=6000}
  else{o.a=mk("sawtooth",0.45);o.s=mk("square",E.sub);o.h=mk("sawtooth",E.half);o.b=mk("sawtooth",0.12)}
  // the air through the intake: noise that follows the engine
  var ns=AC.createBufferSource();ns.buffer=nb;ns.loop=true;var nbp=AC.createBiquadFilter();nbp.type="bandpass";nbp.Q.value=0.8;var ng=AC.createGain();ng.gain.value=0;ns.connect(nbp);nbp.connect(ng);ng.connect(g);ns.start();
  var tb=null,tg=null;if(E.turbo){tb=AC.createOscillator();tb.type="sine";tg=AC.createGain();tg.gain.value=0;tb.connect(tg);tg.connect(out);tb.start()}
  var lastThr=0,boost=0;
  function pop(){var s=AC.createBufferSource();s.buffer=nb;var f=AC.createBiquadFilter();f.type="lowpass";f.frequency.value=900+Math.random()*900;var gg=AC.createGain(),t0=AC.currentTime+Math.random()*0.35;
    gg.gain.setValueAtTime(0.0001,t0);gg.gain.exponentialRampToValueAtTime(0.5*E.vol,t0+0.004);gg.gain.exponentialRampToValueAtTime(0.0001,t0+0.06);s.connect(f);f.connect(gg);gg.connect(out);s.start(t0,Math.random()*0.8);s.stop(t0+0.08)}
  function blow(){var s=AC.createBufferSource();s.buffer=nb;var f=AC.createBiquadFilter();f.type="bandpass";f.frequency.value=2500;f.Q.value=1.2;var gg=AC.createGain(),t0=AC.currentTime;
    gg.gain.setValueAtTime(0.12*E.vol,t0);gg.gain.exponentialRampToValueAtTime(0.0001,t0+0.35);s.connect(f);f.connect(gg);gg.connect(out);s.start(t0);s.stop(t0+0.4)}
  return{E:E,update:function(rpm,thr,on){var f=rpm/60*E.cyl/2,r=rpm/E.red;
    if(E.ev){T(o.a.frequency,120+r*1900);T(o.b.frequency,(120+r*1900)*2.7);T(g.gain,on?(0.05+r*0.25+thr*0.08)*E.vol:0);T(ng.gain,0)}
    else{T(o.a.frequency,f);T(o.s.frequency,f*0.5);T(o.h.frequency,f*1.5);T(o.b.frequency,f*2);
      T(lp.frequency,300+r*E.bright*(0.55+0.45*thr));nbp.frequency.value=f*3;T(ng.gain,on?E.roar*(0.2+thr)*r:0);
      T(g.gain,on?E.vol*(0.16+0.22*r+0.22*thr):0);
      if(E.pops&&lastThr>0.6&&thr<0.2&&r>0.55)for(var i=0;i<3+Math.floor(Math.random()*4);i++)pop()}
    if(tb){boost+=((thr>0.5&&r>0.35?1:0)-boost)*0.06;T(tb.frequency,1800+boost*4200);T(tg.gain,on?boost*0.02*E.vol:0);if(lastThr>0.6&&thr<0.2&&boost>0.5){blow();boost=0}}
    lastThr=thr},
   off:function(){try{T(g.gain,0);if(tg)T(tg.gain,0)}catch(e){}},
   kill:function(){try{[o.a,o.s,o.h,o.b,ns,tb].forEach(function(x){if(x)x.stop()})}catch(e){}g.disconnect()}}}
// rpm from speed with a 6-speed gearbox (the electric one has no gears)
var GEARS=[0,13,22,31,40,50,80];
function rpmAt(v,key){var E=ENGINES[key]||ENGINES.en_i4;v=Math.abs(v);if(E.ev)return Math.min(1,v/66)*E.red;var g=1;while(g<6&&v>GEARS[g])g++;var lo=GEARS[g-1],hi=GEARS[g],k=Math.min(1,(v-lo)/(hi-lo)),base=g===1?E.idle:E.red*0.6;return{rpm:base+k*(E.red*0.98-base),gear:g}.rpm}
// in the shop: rev the engine for three seconds
var PV=null;
function preview(key){try{if(PV){PV.e.kill();PV.ac.close();PV=null}var AC=new(window.AudioContext||window.webkitAudioContext)(),c=AC.createDynamicsCompressor();c.connect(AC.destination);var e=Engine(AC,c,key),t0=performance.now();PV={ac:AC,e:e};
  (function tick(){if(!PV||PV.e!==e)return;var t=(performance.now()-t0)/1000,E=e.E,rpm,thr;
    if(t<0.6){rpm=E.idle||800;thr=0}else if(t<2.2){var k=(t-0.6)/1.6;rpm=(E.idle||800)+k*k*(E.red*0.97-(E.idle||800));thr=1}else if(t<3.4){rpm=E.red*0.97-(t-2.2)*E.red*0.5;thr=0}else{e.off();setTimeout(function(){if(PV&&PV.e===e){e.kill();AC.close();PV=null}},400);return}
    e.update(rpm,thr,true);requestAnimationFrame(tick)})()}catch(err){}}

// ================= a car seen from the side, for the shop and the garage =================
function draw2D(x,w,h,sk,hl){sk=look(sk);var P=PAINTS[sk.paint],S=STRIPES[sk.stripe],R=RIMS[sk.rim],Lt=LIGHTS[sk.light],Wg=WINGS[sk.wing],Gl=GLOWS[sk.glow],t=performance.now()/1000;
  var s=Math.min(w/300,h/120);x.save();x.translate(w/2-150*s,h/2-60*s+6*s);x.scale(s,s);
  if(Gl.col){var gc=Gl.rainbow?rainbow(t):Gl.col,gr=x.createRadialGradient(150,100,10,150,100,150);gr.addColorStop(0,"rgba("+gc.map(function(v){return Math.round(Math.min(1,v)*255)}).join(",")+",.85)");gr.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=gr;x.beginPath();x.ellipse(150,100,150,18,0,0,7);x.fill()}
  x.fillStyle="rgba(0,0,0,.3)";x.beginPath();x.ellipse(150,103,128,7,0,0,7);x.fill();
  var body=css(P.col),dark=css(P.col.map(function(v){return v*0.35})),lite=css((P.col2||P.col).map(function(v){return Math.min(1.5,v*1.6+0.05)}));
  var bg=x.createLinearGradient(0,30,0,96);bg.addColorStop(0,lite);bg.addColorStop(0.45,body);bg.addColorStop(1,dark);
  var B=sk.body,wx=[72,232];
  if(B==="bd_truck"){ // the trailer behind a tall cab
    x.save();x.translate(150,0);x.scale(0.62,1);x.translate(-150,0);
    x.fillStyle="#e9edf2";x.strokeStyle="rgba(0,0,0,.35)";x.fillRect(-60,8,250,66);x.strokeRect(-60,8,250,66);x.fillStyle=bg;x.fillRect(-60,56,250,8);
    x.fillStyle="#333";x.fillRect(-50,74,240,8);
    x.beginPath();x.moveTo(196,92);x.lineTo(196,18);x.quadraticCurveTo(198,8,212,8);x.lineTo(262,8);x.quadraticCurveTo(286,10,290,40);x.lineTo(296,62);x.quadraticCurveTo(300,86,292,92);x.closePath();x.fillStyle=bg;x.fill();x.stroke();
    x.beginPath();x.moveTo(248,14);x.lineTo(268,14);x.quadraticCurveTo(282,18,286,42);x.lineTo(248,42);x.closePath();var tg=x.createLinearGradient(0,14,0,42);tg.addColorStop(0,"#9fb4c8");tg.addColorStop(1,"#1a2430");x.fillStyle=tg;x.fill();
    var lcT=Lt.rainbow?rainbow(t):Lt.col;x.fillStyle=css(lcT.map(function(v){return v*1.4}));x.fillRect(290,66,7,6);
    x.restore();wx=[22,52,118,176].map(function(v){return 150+(v-150)*0.62});wx.push(150+(236-150)*0.62);
  }else{
  // body
  x.beginPath();
  if(B==="bd_pickup"){x.moveTo(22,86);x.quadraticCurveTo(14,66,24,52);x.lineTo(132,50);x.lineTo(140,20);x.lineTo(196,20);x.quadraticCurveTo(214,24,232,46);x.lineTo(272,52);x.quadraticCurveTo(290,58,284,84);x.lineTo(276,92);x.lineTo(30,92)}
  else if(B==="bd_coupe"){x.moveTo(22,86);x.quadraticCurveTo(14,72,26,62);x.lineTo(70,58);x.quadraticCurveTo(110,34,150,32);x.lineTo(180,32);x.quadraticCurveTo(212,36,236,54);x.lineTo(272,60);x.quadraticCurveTo(290,64,284,86);x.lineTo(276,92);x.lineTo(30,92)}
  else if(B==="bd_wagon"){x.moveTo(22,86);x.quadraticCurveTo(14,66,22,52);x.lineTo(30,26);x.quadraticCurveTo(34,22,46,22);x.lineTo(190,22);x.quadraticCurveTo(214,26,232,48);x.lineTo(270,54);x.quadraticCurveTo(288,58,284,84);x.lineTo(276,92);x.lineTo(30,92)}
  else{x.moveTo(22,86);x.quadraticCurveTo(14,70,26,60);x.lineTo(70,52);x.quadraticCurveTo(100,26,140,24);x.lineTo(190,24);x.quadraticCurveTo(214,26,232,48);x.lineTo(270,54);x.quadraticCurveTo(288,58,284,84);x.lineTo(276,92);x.lineTo(30,92)}
  x.closePath();x.fillStyle=bg;x.fill();
  x.strokeStyle="rgba(0,0,0,.35)";x.lineWidth=1.2;x.stroke();
  // windows
  x.beginPath();
  if(B==="bd_pickup"){x.moveTo(146,26);x.lineTo(192,26);x.quadraticCurveTo(206,30,220,46);x.lineTo(146,48);x.closePath();x.fillStyle="#2a2a2e";x.fillRect(26,48,104,5)}
  else if(B==="bd_coupe"){x.moveTo(96,56);x.quadraticCurveTo(118,38,150,37);x.lineTo(178,37);x.quadraticCurveTo(204,40,222,54);x.closePath()}
  else if(B==="bd_wagon"){x.moveTo(36,48);x.lineTo(40,28);x.lineTo(96,28);x.lineTo(96,50);x.closePath();x.moveTo(102,28);x.lineTo(156,28);x.lineTo(156,52);x.lineTo(102,51);x.closePath();x.moveTo(162,28);x.lineTo(188,28);x.quadraticCurveTo(206,32,222,50);x.lineTo(162,52);x.closePath()}
  else{x.moveTo(84,52);x.quadraticCurveTo(108,32,140,30);x.lineTo(156,30);x.lineTo(156,52);x.closePath();x.moveTo(162,30);x.lineTo(188,30);x.quadraticCurveTo(206,32,222,50);x.lineTo(162,52);x.closePath()}
  var wg=x.createLinearGradient(0,30,0,52);wg.addColorStop(0,"#9fb4c8");wg.addColorStop(1,"#1a2430");x.fillStyle=wg;x.fill();
  if(S.col&&B!=='bd_truck'){var sc=css(S.col);x.fillStyle=sc;if(S.kurd){x.fillStyle=css([0.8,0.02,0.02]);x.fillRect(24,63,258,4);x.fillStyle="#fff";x.fillRect(24,67,258,4);x.fillStyle=css([0.02,0.4,0.1]);x.fillRect(24,71,258,4);x.fillStyle="#ffd400";x.beginPath();x.arc(150,69,4,0,7);x.fill()}
    else{x.fillRect(24,64,258,4);x.fillRect(24,70,258,4)}}
  // door lines and handle
  x.strokeStyle="rgba(0,0,0,.3)";x.beginPath();x.moveTo(158,54);x.lineTo(158,90);x.moveTo(98,56);x.lineTo(96,90);x.stroke();x.fillStyle="rgba(0,0,0,.4)";x.fillRect(132,60,12,2.5);x.fillRect(190,60,12,2.5);
  // lights: front on the right, back on the left
  if(B!=="bd_truck"){var lc=Lt.rainbow?rainbow(t):Lt.col,lcs=css(lc.map(function(v){return v*1.4}));x.save();x.shadowColor=lcs;x.shadowBlur=hl==="light"?16:8;x.fillStyle=lcs;x.beginPath();x.ellipse(279,62,7,3.5,-0.3,0,7);x.fill();x.restore();}
  x.fillStyle="#e0101a";x.fillRect(16,60,8,6);}
  // wing
  if(Wg.t&&B!=='bd_truck'){var wc=Wg.carbon?"#1a1a1d":body;x.fillStyle=wc;x.strokeStyle="rgba(0,0,0,.4)";
    if(Wg.t===1){x.beginPath();x.moveTo(14,58);x.lineTo(40,55);x.lineTo(42,59);x.lineTo(14,62);x.closePath();x.fill();x.stroke()}
    else{var hh=Wg.t===3?26:16;x.fillRect(30,60-hh,4,hh);x.beginPath();x.moveTo(8,58-hh);x.lineTo(52,56-hh);x.lineTo(54,61-hh);x.lineTo(8,63-hh);x.closePath();x.fill();x.stroke();if(Wg.carbon){x.strokeStyle="rgba(255,255,255,.18)";for(var i=10;i<52;i+=4){x.beginPath();x.moveTo(i,58-hh);x.lineTo(i+2,62-hh);x.stroke()}}}}
  // wheels
  if(B==='bd_truck'){x.restore();x.save();var s2=Math.min(w/300,h/120);x.translate(w/2-150*s2,h/2-60*s2+6*s2);x.scale(s2,s2)}
  wx.forEach(function(cx){x.fillStyle="#111";x.beginPath();x.arc(cx,90,19,0,7);x.fill();var rc=css(R.col),g2=x.createRadialGradient(cx-4,86,2,cx,90,13);g2.addColorStop(0,"#fff");g2.addColorStop(0.5,rc);g2.addColorStop(1,css(R.col.map(function(v){return v*0.4})));
    x.fillStyle=g2;x.beginPath();x.arc(cx,90,12.5,0,7);x.fill();x.strokeStyle="rgba(0,0,0,.45)";x.lineWidth=2;for(var k=0;k<5;k++){var a=k*Math.PI*2/5+t*(hl==="rim"?2:0);x.beginPath();x.moveTo(cx+Math.cos(a)*4,90+Math.sin(a)*4);x.lineTo(cx+Math.cos(a)*11,90+Math.sin(a)*11);x.stroke()}
    x.fillStyle="#333";x.beginPath();x.arc(cx,90,3,0,7);x.fill()});
  // a shine along the body
  if(B==='bd_truck'){x.restore();return}
  x.globalAlpha=0.25+(P.refl>1.3?0.25:0);x.strokeStyle="#fff";x.lineWidth=2;x.beginPath();x.moveTo(40,58);x.quadraticCurveTo(150,50,270,56);x.stroke();x.restore()}

window.RCSK={sets:SETS,type:TYPE,def:DEF,bodies:BODIES,paints:PAINTS,engines:ENGINES,lights:LIGHTS,rims:RIMS,wings:WINGS,glows:GLOWS,stripes:STRIPES,
  look:look,css:css,rainbow:rainbow,Engine:Engine,rpmAt:rpmAt,preview:preview,draw2D:draw2D};
if(!window.AG||!AG.addPack)return;
// ---------- the shop ----------
function cvs(w,h,fn,anim){var c=document.createElement("canvas"),d=Math.min(2,window.devicePixelRatio||1);c.width=w*d;c.height=h*d;c.style.cssText="width:"+w+"px;max-width:100%;height:auto;display:block;margin:0 auto";var x=c.getContext("2d");
  var paint=function(){x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,w,h);fn(x)};paint();
  if(anim)(function loop(){if(!c.isConnected&&c._seen)return;if(c.isConnected)c._seen=1;paint();setTimeout(function(){requestAnimationFrame(loop)},60)})();return c}
function car(part,anim){return function(k){var o={};o[part]=k;return cvs(170,80,function(x){draw2D(x,170,80,o,part)},anim)}}
function bars(k){var E=ENGINES[k],d=document.createElement("div");d.style.cssText="display:flex;flex-direction:column;gap:5px;align-items:stretch;width:100%;padding:4px 8px;font-size:12px;font-weight:800";
  var row=function(lbl,v){var r=document.createElement("div");r.style.cssText="display:flex;align-items:center;gap:6px";var s=document.createElement("span");s.textContent=lbl;s.style.minWidth="22px";var b=document.createElement("div");b.style.cssText="flex:1;height:8px;border-radius:5px;background:rgba(255,255,255,.15);overflow:hidden";var i=document.createElement("i");i.style.cssText="display:block;height:100%;border-radius:5px;background:linear-gradient(90deg,#22d3ee,#facc15,#ef4444);width:"+Math.round(v*100)+"%";b.append(i);r.append(s,b);return r};
  d.append(row("⚡",(E.acc-0.9)/0.45),row("🏁",(E.vmax-0.94)/0.18));
  var p=document.createElement("button");p.type="button";p.textContent="🔊";p.style.cssText="align-self:center;border:0;border-radius:14px;padding:6px 16px;font-size:16px;background:linear-gradient(#ff6b3d,#e0341f);color:#fff;box-shadow:0 3px 0 #8a1a0a;cursor:pointer";
  p.onclick=function(e){e.stopPropagation();e.preventDefault();preview(k)};d.append(p);return d}
var T4=function(a,b,c,d){return[a,b,c,d]};
AG.addPack({type:"rcbody",def:"bd_sedan",items:BODIES,title:T4("🚗 جۆرێن ترومبێلان","🚗 جۆری ئۆتۆمبێل","🚗 أنواع السيارات","🚗 Car types"),desc:T4("سێدان، ستەیشن، سپۆرت، پیکاپ و تریلە. تریلە گرانە و هەمیان پاڵ ددەت!","سێدان، ستەیشن، سپۆرت، پیکاپ و تریلە.","سيدان، ستيشن، رياضية، بيك آب وتريلة. التريلة ثقيلة وتدفع الجميع!","Sedan, wagon, coupé, pickup and a semi truck — the truck is heavy and pushes everyone!"),preview:function(k){return cvs(170,80,function(x){draw2D(x,170,80,{body:k,paint:"pt_red"},"body")})}});
AG.addPack({type:"rcpaint",def:"pt_white",items:PAINTS,title:T4("🎨 ڕەنگێن ترومبێلێ","🎨 ڕەنگی ئۆتۆمبێل","🎨 ألوان السيارة","🎨 Car paint"),desc:T4("ڕەنگێ ترومبێلا تە ل یاریا بەزینێ. هەمی یاریکەر دبینن!","ڕەنگی ئۆتۆمبێلەکەت لە یاری پێشبڕکێ.","لون سيارتك في لعبة السباق، ويراه الجميع!","Your car's colour in the race — everyone sees it!"),preview:car("paint")});
AG.addPack({type:"rcengine",def:"en_i4",items:ENGINES,title:T4("🔊 مەکینێن ترومبێلێ","🔊 بزوێنەری ئۆتۆمبێل","🔊 محركات السيارة","🔊 Car engines"),desc:T4("هەر مەکینەکێ دەنگێ خۆ هەیە، و دژی ڕۆبۆتان بهێزترە. ل ئۆنلاین هەمی وەک ئێکن، تنێ دەنگ دگوهۆڕیت. 🔊 لێدە و گوهداری بکە!","هەر بزوێنەرێک دەنگی خۆی هەیە. لە ئۆنلاین هەموو وەک یەکن.","لكل محرك صوته، وهو أقوى ضد الروبوتات. في الأونلاين الجميع متساوون والصوت فقط يتغير. اضغط 🔊 واستمع!","Every engine has its own sound and more power against the robots. Online everyone is equal — only the sound changes. Tap 🔊 to listen!"),preview:bars});
AG.addPack({type:"rclight",def:"li_white",items:LIGHTS,title:T4("💡 ڕەنگێن لایتان","💡 ڕەنگی گڵۆپەکان","💡 ألوان الأضواء","💡 Light colours"),desc:T4("ڕەنگێ لایتێن پێشیێ یێن ترومبێلێ.","ڕەنگی گڵۆپی پێشەوە.","لون الأضواء الأمامية.","The colour of the front lights."),preview:car("light",true)});
AG.addPack({type:"rcrim",def:"rm_silver",items:RIMS,title:T4("🛞 جانتێن ترومبێلێ","🛞 ڕینگی ئۆتۆمبێل","🛞 جنوط السيارة","🛞 Rims"),desc:T4("ڕەنگێ جانتێن تایەیان.","ڕەنگی ڕینگەکان.","لون الجنوط.","The colour of the rims."),preview:car("rim",true)});
AG.addPack({type:"rcwing",def:"wg_none",items:WINGS,title:T4("🪽 باسکێن پشتێ","🪽 باڵی دواوە","🪽 الجناح الخلفي","🪽 Rear wings"),desc:T4("باسکەکێ ل سەر پشتا ترومبێلێ.","باڵێک لەسەر پشتی ئۆتۆمبێل.","جناح على مؤخرة السيارة.","A wing on the back of the car."),preview:car("wing")});
AG.addPack({type:"rcglow",def:"gl_none",items:GLOWS,title:T4("✨ ڕۆناهیا بن ترومبێلێ","✨ ڕووناکی ژێر ئۆتۆمبێل","✨ إضاءة أسفل السيارة","✨ Underglow"),desc:T4("ڕۆناهیەکا ڕەنگین ل بن ترومبێلێ.","ڕووناکییەکی ڕەنگین لە ژێر ئۆتۆمبێل.","ضوء ملوّن تحت السيارة.","A coloured light under the car."),preview:car("glow",true)});
AG.addPack({type:"rcstripe",def:"st_none",items:STRIPES,title:T4("🏁 خەتێن بەزینێ","🏁 هێڵی پێشبڕکێ","🏁 خطوط السباق","🏁 Racing stripes"),desc:T4("خەت ل سەر کاپۆت، سەقف و پشتا ترومبێلێ.","هێڵ لەسەر کاپۆت و سەقف و دواوە.","خطوط على الغطاء والسقف والخلف.","Stripes over the bonnet, roof and boot."),preview:car("stripe")});
})();
