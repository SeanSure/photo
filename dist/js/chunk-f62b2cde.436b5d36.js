(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f62b2cde"],{"60f5":function(e,t,n){"use strict";n("fb27")},"928a":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"})},o=[],s=(n("4160"),n("b0c0"),n("159b"),n("d4ec")),r=n("bee2"),a=n("46f8"),h=function(){function e(t,n,i){var o=this;Object(s["a"])(this,e),this.container=document.querySelector(t),this.containerWidth=this.container.offsetWidth,this.containerHeight=this.container.offsetHeight,window.addEventListener("resize",this.onWindowResize.bind(this),!1),this.event=n,this.bkPicture=i,this.init();var r=new a["b"],h=function e(){if(requestAnimationFrame(e),o.renderer.render(o.scene,o.camera),o.dir&&o.speed){var t=r.getDelta()*o.dir*o.speed;o.model.angle+=t,o.model.angle>2*Math.PI*3/4?o.model.angle=2*Math.PI*3/4:o.model.angle<=0?o.model.angle=0:o.model.rotateY(t)}};h()}return Object(r["a"])(e,[{key:"init",value:function(){var e=this;this.scene=new a["k"],this.scene.background=(new a["l"]).load(this.bkPicture),this.scene.add(new a["a"](16777215,1));var t=new a["j"](16766720,1.3,20);t.position.set(-3.5,0,0),this.scene.add(t),this.camera=new a["h"](30,this.containerWidth/this.containerHeight,.1,1e3),this.camera.position.set(-3.5,0,20);var n,i,o,s={precision:"highp",antialias:!0,logarithmicDepthBuffer:!1,depth:!0,preserveDrawingBuffer:!0};this.renderer=new a["n"](s),this.renderer.setSize(this.containerWidth,this.containerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),this.model=new a["d"],this.model.name="model",this.model.angle=0,this.model.rotation.y=-Math.PI/2,this.scene.add(this.model),this.textureLoader=new a["l"],this.container.addEventListener("touchstart",(function(e){e.preventDefault(),n=e.touches[0].pageX})),this.container.addEventListener("touchmove",(function(t){t.preventDefault(),i=t.changedTouches[0].pageX,o=i-n;var s=Math.abs(o);o>0?(e.dir=1,e.speed=s>=50?.6:s/50*.6):o<0&&(e.dir=-1,e.speed=s>=50?.6:s/50*.6)}))}},{key:"onWindowResize",value:function(){this.containerWidth=this.container.offsetWidth,this.containerHeight=this.container.offsetHeight,this.camera.aspect=this.containerWidth/this.containerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.containerWidth,this.containerHeight)}},{key:"createPlane",value:function(e,t,n){var i=this,o=new a["i"](7,9,32);this.textureLoader.load(e,(function(e){var s=new a["g"]({color:16777215,side:a["c"],map:e,transparent:!0}),r=new a["f"](o,s);r.position.setFromCylindricalCoords(3.5,-t,0),r.lookAt(new a["m"]),r.rotateY(-Math.PI/2),i.model.add(r),i.event.emit("progress",(n+1)/i.tTotal)}))}},{key:"createPhotos",value:function(e){var t=this;this.tTotal=e.length,e.forEach((function(e,n){var i=n/t.tTotal*270,o=a["e"].degToRad(i);t.createPlane(e,o,n)}))}}]),e}(),p=h,c=n("faa1").EventEmitter,d=new c,g={name:"Viewer",data:function(){return{progress:"",bkPicture:"/photos/bg.png",pictures:["/photos/p01.png","/photos/p02.png","/photos/p03.png","/photos/p04.png","/photos/p05.png","/photos/p06.png","/photos/p07.png","/photos/p08.png","/photos/p09.png","/photos/p10.png","/photos/p11.png","/photos/p12.png","/photos/p13.png","/photos/p14.png","/photos/p15.png","/photos/p16.png","/photos/p17.png","/photos/p18.png","/photos/p19.png","/photos/p20.png","/photos/p21.png","/photos/p22.png","/photos/p23.png","/photos/p24.png","/photos/p25.png","/photos/p26.png","/photos/p27.png"]}},methods:{initScene:function(){var e=this;this.viewer=new p(".container",d,this.bkPicture),this.viewer.createPhotos(this.pictures),d.on("progress",(function(t){e.progress=Math.round(100*t),console.log(e.progress)}))}},mounted:function(){this.initScene()},beforeDestroy:function(){}},l=g,u=(n("60f5"),n("2877")),f=Object(u["a"])(l,i,o,!1,null,null,null);t["default"]=f.exports},fb27:function(e,t,n){}}]);
//# sourceMappingURL=chunk-f62b2cde.436b5d36.js.map