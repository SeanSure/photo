(function(e){function t(t){for(var o,s,a=t[0],p=t[1],c=t[2],h=0,d=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(e[o]=p[o]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var p=n[s];0!==r[p]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function s(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cebc34bf"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var i,p=document.createElement("script");p.charset="utf-8",p.timeout=120,a.nc&&p.setAttribute("nonce",a.nc),p.src=s(e);var c=new Error;i=function(t){p.onerror=p.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:p})}),12e4);p.onerror=p.onload=i,document.head.appendChild(p)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],c=p.push.bind(p);p.push=t,p=p.slice();for(var h=0;h<p.length;h++)t(p[h]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[100!=e.progress?n("div",{staticClass:"progress"},[e._v(e._s(this.progress)+"%")]):e._e()])])},i=[],s=(n("4160"),n("b0c0"),n("159b"),n("d4ec")),a=n("bee2"),p=n("46f8"),c=function(){function e(t,n,o){var r=this;Object(s["a"])(this,e),this.container=document.querySelector(t),this.containerWidth=this.container.offsetWidth,this.containerHeight=this.container.offsetHeight,window.addEventListener("resize",this.onWindowResize.bind(this),!1),this.event=n,this.bkPicture=o,this.init();var i=new p["b"],a=function e(){if(requestAnimationFrame(e),r.renderer.render(r.scene,r.camera),r.dir&&r.speed){var t=i.getDelta()*r.dir*r.speed;r.model.angle+=t,r.model.angle>2*Math.PI*3/4?r.model.angle=2*Math.PI*3/4:r.model.angle<=0?r.model.angle=0:r.model.rotateY(t)}};a()}return Object(a["a"])(e,[{key:"init",value:function(){var e=this;this.scene=new p["k"],this.scene.background=(new p["l"]).load(this.bkPicture),this.scene.add(new p["a"](16777215,1));var t=new p["j"](16766720,1.3,20);t.position.set(-3.5,0,0),this.scene.add(t),this.camera=new p["h"](30,this.containerWidth/this.containerHeight,.1,1e3),this.camera.position.set(-3.5,0,20);var n,o,r,i={precision:"highp",antialias:!0,logarithmicDepthBuffer:!1,depth:!0,preserveDrawingBuffer:!0};this.renderer=new p["n"](i),this.renderer.setSize(this.containerWidth,this.containerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),this.model=new p["d"],this.model.name="model",this.model.angle=0,this.model.rotation.y=-Math.PI/2,this.scene.add(this.model),this.textureLoader=new p["l"],this.container.addEventListener("touchstart",(function(e){e.preventDefault(),n=e.touches[0].pageX})),this.container.addEventListener("touchmove",(function(t){t.preventDefault(),o=t.changedTouches[0].pageX,r=o-n;var i=Math.abs(r);r>0?(e.dir=1,e.speed=i>=50?.6:i/50*.6):r<0&&(e.dir=-1,e.speed=i>=50?.6:i/50*.6)}))}},{key:"onWindowResize",value:function(){this.containerWidth=this.container.offsetWidth,this.containerHeight=this.container.offsetHeight,this.camera.aspect=this.containerWidth/this.containerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.containerWidth,this.containerHeight)}},{key:"createPlane",value:function(e,t,n){var o=this,r=new p["i"](7,9,32);this.textureLoader.load(e,(function(e){var i=new p["g"]({color:16777215,side:p["c"],map:e,transparent:!0}),s=new p["f"](r,i);s.position.setFromCylindricalCoords(3.5,-t,0),s.lookAt(new p["m"]),s.rotateY(-Math.PI/2),o.model.add(s),o.event.emit("progress",(n+1)/o.tTotal)}))}},{key:"createPhotos",value:function(e){var t=this;this.tTotal=e.length,e.forEach((function(e,n){var o=n/t.tTotal*270,r=p["e"].degToRad(o);t.createPlane(e,r,n)}))}}]),e}(),h=c,u=n("faa1").EventEmitter,d=new u,l={name:"Viewer",data:function(){return{progress:"",bkPicture:"/photos/bg.png",pictures:["./photos/p01.png","./photos/p02.png","./photos/p03.png","./photos/p04.png","./photos/p05.png","./photos/p06.png","./photos/p07.png","./photos/p08.png","./photos/p09.png","./photos/p10.png","./photos/p11.png","./photos/p12.png","./photos/p13.png","./photos/p14.png","./photos/p15.png","./photos/p16.png","./photos/p17.png","./photos/p18.png","./photos/p19.png","./photos/p20.png","./photos/p21.png","./photos/p22.png","./photos/p23.png","./photos/p24.png","./photos/p25.png","./photos/p26.png","./photos/p27.png"]}},methods:{initScene:function(){var e=this;this.viewer=new h(".container",d,this.bkPicture),this.viewer.createPhotos(this.pictures),d.on("progress",(function(t){e.progress=Math.round(100*t)}))}},mounted:function(){this.initScene()},beforeDestroy:function(){}},f=l,g=(n("034f"),n("2877")),v=Object(g["a"])(f,r,i,!1,null,null,null),m=v.exports,b=(n("d3b7"),n("8c4f"));o["a"].use(b["a"]);var w=[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],y=new b["a"]({mode:"history",base:"",routes:w}),P=y,j=n("2f62");o["a"].use(j["a"]);var k=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:P,store:k,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.2e4f64f3.js.map