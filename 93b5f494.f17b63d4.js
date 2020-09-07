(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{117:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(145),o=n(140),s=n(156),c=Object(o.a)({render:function(){return[o.b.image({fileName:"/img/bird.png",width:50,height:40})]}}),u=Object(o.a)({render:function(e){var t=e.props,n=d(e.device.size,t.pipe.gapY),r=n.yUpperTop,i=n.yUpperBottom,a=n.yLowerTop,s=n.yLowerBottom;return[o.b.rectangle({color:"green",width:40,height:r-i,y:(r+i)/2}),o.b.rectangle({color:"green",width:40,height:a-s,y:(a+s)/2})]}});function d(e,t){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:t+85,yLowerTop:t-85,yLowerBottom:-e.height/2-e.heightMargin}}var l=Object(o.a)({init:function(e){var t=e.device;return{birdY:10,birdGravity:-12,pipes:e.props.paused?[]:[h(t)],score:0}},loop:function(e){var t=e.props,n=e.state,r=e.device;if(t.paused)return n;var i=r.inputs,a=n.birdGravity,o=n.birdY,c=n.pipes,u=n.score;return o-=a+=.8,(i.pointer.justPressed||i.keysJustPressed[" "])&&(a=-12),c[c.length-1].x<140&&(c=[].concat(c,[h(r)]).filter((function(e){return e.x>-(r.size.width+r.size.widthMargin+40)}))),function(e,t,n){if(e-20<-(t.height/2+t.heightMargin)||e+20>t.height/2+t.heightMargin)return!0;for(var r,i=function(){var n=r.value;if(n.x>45||n.x<-45)return"continue";var i=d(t,n.gapY),a=i.yUpperTop,o=i.yUpperBottom,s=i.yLowerTop,c=i.yLowerBottom,u={x:n.x,y:(a+o)/2,width:40,height:a-o},l={x:n.x,y:(s+c)/2,width:40,height:s-c};return[{x:25,y:e+20},{x:25,y:e-20},{x:0,y:e+20},{x:0,y:e-20},{x:-25,y:e+20},{x:-25,y:e-20}].some((function(e){return p(e,u)||p(e,l)}))?{v:!0}:void 0},a=Object(s.a)(n);!(r=a()).done;){var o=i();if("continue"!==o&&"object"==typeof o)return o.v}return!1}(o,r.size,c)&&t.gameOver(n.score),{birdGravity:a,birdY:o,pipes:c=c.map((function(e){var t=e.passed;return!t&&e.x<-45&&(t=!0,u++),Object.assign({},e,{passed:t,x:e.x-2})})),score:u}},render:function(e){var t=e.state,n=e.device,r=n.size;return[o.b.rectangle({color:"#add8e6",width:r.width+2*r.widthMargin,height:r.height+2*r.heightMargin}),c({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})].concat(t.pipes.map((function(e,t){return u({id:"pipe-"+t,pipe:e,x:e.x})})),[o.b.text({text:"Score: "+t.score,color:"white",x:-n.size.width/2+10,y:n.size.height/2+n.size.heightMargin-80,align:"left"})])}});function h(e){var t=(e.size.height+2*e.size.heightMargin-340)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}function p(e,t){return e.x>t.x-t.width/2&&e.x<t.x+t.width/2&&e.y>t.y-t.height/2&&e.y<t.y+t.height/2}var f=Object(o.a)({render:function(e){var t=e.props,n=e.device,r=n.inputs;return(r.pointer.justReleased||r.keysJustPressed[" "])&&t.start(),[o.b.text({text:n.isTouchScreen?"Tap to Start":"Click or Space Bar to Start",color:"white",y:100}),o.b.text({text:"High score: "+t.highScore,font:{name:"Courier",size:24},color:"white",y:150})]}}),m=Object(o.a)({init:function(e){var t=e.device.storage.getStore();return{view:"menu",attempt:0,highScore:Number(t.highScore||"0")}},render:function(e){var t=e.state,n=e.updateState,r=e.device,i="menu"===t.view;return[l({id:"level-"+t.attempt,paused:i,gameOver:function(e){n((function(t){var n=t.highScore;return e>n&&(n=e,r.storage.setStore({highScore:String(n)})),Object.assign({},t,{view:"menu",highScore:n})}))}}),i?f({id:"menu",highScore:t.highScore,start:function(){n((function(e){return Object.assign({},e,{view:"level",attempt:e.attempt+1})}))}}):null]}}),g={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},v=n(67);t.default=function(){return i.a.createElement(a.a,{part:18,MDXContent:v.default,codesTs:[{file:"bird.ts",code:'import { makeSprite, t } from "@replay/core";\n\nexport const birdWidth = 50;\nexport const birdHeight = 40;\n\nexport const Bird = makeSprite({\n  render() {\n    return [\n      t.image({\n        fileName: "/img/bird.png",\n        width: birdWidth,\n        height: birdHeight,\n      }),\n    ];\n  },\n});\n',highlight:["9-13"]},{file:"web/index.ts",code:'import { renderCanvas, RenderCanvasOptions } from "@replay/web";\nimport { t } from "@replay/core";\nimport { Game, gameProps } from "../src";\n\nconst options: RenderCanvasOptions = {\n  loadingTextures: [\n    t.text({\n      color: "black",\n      text: "Loading...",\n    }),\n  ],\n  assets: {\n    imageFileNames: ["bird.png"],\n  },\n};\n\nrenderCanvas(Game(gameProps), options);\n',highlight:[12,13,14]}],codesJs:[{file:"bird.js",code:'import { makeSprite, t } from "@replay/core";\n\nexport const birdWidth = 50;\nexport const birdHeight = 40;\n\nexport const Bird = makeSprite({\n  render() {\n    return [\n      t.image({\n        fileName: "/img/bird.png",\n        width: birdWidth,\n        height: birdHeight,\n      }),\n    ];\n  },\n});\n',highlight:["9-13"]},{file:"web/index.js",code:'import { renderCanvas } from "@replay/web";\nimport { t } from "@replay/core";\nimport { Game, gameProps } from "../src";\n\nconst options = {\n  loadingTextures: [\n    t.text({\n      color: "black",\n      text: "Loading...",\n    }),\n  ],\n  assets: {\n    imageFileNames: ["bird.png"],\n  },\n};\n\nrenderCanvas(Game(gameProps), options);\n',highlight:[12,13,14]}],Game:m,gameProps:g,assets:{imageFileNames:["/img/bird.png"]}})}},140:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(142),i={text:function(e){return{type:"text",props:Object.assign({testId:e.testId},Object(r.a)(e),{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign({testId:e.testId},Object(r.a)(e),{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign({testId:e.testId},Object(r.a)(e),{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign({testId:e.testId},Object(r.a)(e),{color:e.color,fillColor:e.fillColor,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,lineCap:e.lineCap||"butt",path:e.path})}},image:function(e){return{type:"image",props:Object.assign({testId:e.testId},Object(r.a)(e),{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign({testId:e.testId},Object(r.a)(e),{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},142:function(e,t,n){"use strict";function r(e){var t,n,r;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(r=e.scaleY)&&void 0!==r?r:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return r}))},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return ee}));var r=n(0),i=n.n(r),a=n(149),o=n(146),s=n(153),c=n(2),u=n(152),d=n(151),l=n(147),h=n(148),p=n(150),f=n.n(p),m=n(48),g=n.n(m);function v(e){var t=e.codesTs,n=e.codesJs;return i.a.createElement(l.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},i.a.createElement(h.a,{value:"js"},i.a.createElement(w,{lang:"js",codes:n})),i.a.createElement(h.a,{value:"ts"},i.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(r.useState)(a[0]),s=o[0],c=o[1],u=n.find((function(e){return e.file===s}));return i.a.createElement("div",{style:{marginTop:-12}},i.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return i.a.createElement("button",{className:g.a.fileButton+(s===e?" "+g.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),i.a.createElement(b,{key:u.file,lang:t,code:u.code,highlight:u.highlight}))}function b(e){var t=e.lang,n=e.code,r=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return i.a.createElement(u.a,Object(c.a)({},u.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return i.a.createElement("div",{className:g.a.codeBlockContent},i.a.createElement("div",{tabIndex:"0",className:f()(t,g.a.codeBlock)},i.a.createElement("div",{className:g.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==r?void 0:r.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],r=t[1];return Array.from({length:r-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),i.a.createElement("div",n,i.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return i.a.createElement("span",s({token:e,key:t}))})))})))))}))}var y=n(143),x=n.n(y),E=n(144),j=n(142);function T(e,t,n,r,i,a,o,s,c,u){var d=Object(j.a)(t);d.opacity*=s;var l=u.nativeSpriteMap,h=u.nativeSpriteUtils,p=function(e){var t=r(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var r=t.x,i=t.y,a=r-e.x,o=i-e.y,s=a*Math.cos(n)+o*Math.sin(n),c=-a*Math.sin(n)+o*Math.cos(n),u=s/e.scaleX,d=c/e.scaleY;return{x:u+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(p),m=e.getSprites(t,f,i,a,o),g=[],v=m.map((function(t){if(!t)return t;if("native"===t.type){g.push(t.props.id);var r=l[t.name];if(!r)throw Error('Cannot find Native Sprite "'+t.name+'"');var i=e.childContainers[t.props.id];return i&&"native"===i.type||(i={type:"native",state:r.create({props:t.props,parentGlobalId:c,getState:function(){return i.state},updateState:function(e){i.state=Object.assign({},i.state,e)},utils:h}),cleanup:r.cleanup},e.childContainers[t.props.id]=i),i.state=r.loop({props:t.props,state:i.state,parentGlobalId:c,utils:h}),h.didResize=!1,null}if("custom"===t.type){g.push(t.props.id);var s=!1,m=e.childContainers[t.props.id];return m&&"custom"===m.type||(s=!0,m=P(t,f,e.prevTime),e.childContainers[t.props.id]=m),T(m,t.props,n,p,s,a,o,d.opacity,c+"--"+t.props.id,u)}return t})).filter(M);return function e(t){Object.keys(t).forEach((function(n){if(!g.includes(n)){var r=t[n];"native"===r.type?r.cleanup({state:r.state,parentGlobalId:c}):e(r.childContainers),delete t[n]}}))}(e.childContainers),{id:t.id,baseProps:d,textures:v}}var S=1/60*1e3;function P(e,t,n){var r,i=e.spriteObj,a=e.props,o=[],s=function(e){o.push(e)};return i.init&&(r=i.init({props:a,device:t,updateState:s})),{type:"custom",state:r,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,r,a){var c=this,u=function(){c.state=o.reduce((function(e,t){return t(e)}),c.state),o.length=0};u(),!n&&i.loop&&(this.state=i.loop({props:e,state:this.state,device:t,updateState:s})),u();var d=i[r];d||(d="renderPXL"===r&&i.renderXL?i.renderXL:i.render);var l=d({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:a});return u(),l}}}function O(e,t){var n,r=e.deviceHeight>e.deviceWidth,i=!1;return"portrait"in t?(n=r?t.portrait:t.landscape,i=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?i&&r?"renderPXL":"renderXL":i&&r?"renderP":"render"}function M(e){return null!==e}var k={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,numberPressed:0,justPressed:!1,justReleased:!1,x:0,y:0}},L=[];function C(e){return function(e,t){var n=e(t.pointer);return Object.assign({},t,{pointer:Object.assign({},t.pointer,{x:n.x,y:n.y})})}(e,k)}function I(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),k.keysDown[e.key]=!0,k.keysJustPressed[e.key]=!0}function N(e){delete k.keysDown[e.key]}function z(e,t,n){L.includes(n)||(L=[].concat(L,[n])),k.pointer.pressed=!0,k.pointer.numberPressed=L.length,k.pointer.justPressed=!0,k.pointer.x=e,k.pointer.y=t}function X(e,t){k.pointer.x=e,k.pointer.y=t}function Y(e,t,n){0===(L=L.filter((function(e){return e!==n}))).length&&(k.pointer.justPressed=!1,k.pointer.pressed=!1),k.pointer.numberPressed=L.length,k.pointer.justReleased=!0,k.pointer.x=e,k.pointer.y=t}function H(e){L=L.filter((function(t){return t!==e})),k.pointer.numberPressed=L.length,0===L.length&&(k.pointer.justPressed=!1,k.pointer.pressed=!1)}function D(){k={keysDown:k.keysDown,keysJustPressed:{},pointer:Object.assign({},k.pointer,{justPressed:!1,justReleased:!1})}}function G(e,t,n,r){var i=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,c=t.deviceWidth,u=t.deviceHeight;e.save();var d=Math.min(c/i,u/a),l=i+2*o,h=a+2*s;return e.translate(c/2,u/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-c/2/d,-u/2/d,c/d,u/d),e.fillStyle="white",e.fillRect(-l/2,-h/2,l,h),function e(t,n,r,i){var a=t.baseProps,o=t.textures;n.save(),A(n,a),o.forEach((function(t){if("type"in t){var o=W(n);return n.save(),A(n,t.props,a.opacity),function(e,t,n,r){switch(e.type){case"text":return t.text(e.props.font||r,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color,e.props.fillColor,e.props.lineCap),0;case"image":var i=n[e.props.fileName];if(!i)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(i,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,r,i),void n.restore()}e(t,n,r,i)})),n.restore()}(t,e,n,r)}}}var R=Math.PI/180,A=function(e,t,n){void 0===n&&(n=1);var r=t.x,i=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,c=t.anchorX,u=t.anchorY,d=t.opacity;e.translate(r,-i),e.rotate(a*R),e.scale(o,s),e.translate(-c,u),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,r=n[0],i=r[0],a=r[1],o=n.slice(1);return e.beginPath(),e.moveTo(i,-a),o.forEach((function(t){var n=t[0],r=t[1];e.lineTo(n,-r)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var B,W=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,r){e.fillStyle=r,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,r,i,a){if(!(t.length<2)){var o=t[0],s=o[0],c=o[1],u=t.slice(1);e.beginPath(),e.moveTo(s,-c),u.forEach((function(t){var n=t[0],r=t[1];e.lineTo(n,-r)})),i&&(e.fillStyle=i,e.fill()),r&&(e.strokeStyle=r,e.lineWidth=n,e.lineCap=a,e.stroke())}},text:function(t,n,r,i){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=r,e.fillStyle=i,e.fillText(n,0,0)},image:function(t,n,r){e.drawImage(t,-n/2,-r/2,n,r)},spriteSheet:function(t,n,r,i,a,o){var s=t.width/n,c=t.height/r,u=i%n,d=Math.floor(i/n)%r;e.drawImage(t,u*s,d*c,s,c,-a/2,-o/2,a,o)}}};function F(e,t,n,r){var i;"portrait"in r?i=t>e?r.portrait:r.landscape:i=r;var a=i,o=a.width,s=a.height,c=a.maxWidthMargin,u=void 0===c?0:c,d=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var l=o/s;if(l>e/t){var h=e,p=h/l,f=p/s*(void 0===d?0:d),m=Math.min(t,p+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(m-p)/2*(s/p),deviceWidth:h,deviceHeight:m}}var g=t,v=g*l,w=v/o*u,b=Math.min(e,v+2*w);return{width:o,height:s,widthMargin:(b-v)/2*(o/v),heightMargin:0,deviceWidth:b,deviceHeight:g}}function J(e,t){return U.apply(this,arguments)}function U(){return(U=Object(E.a)(x.a.mark((function e(t,n){var r,i,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return r=e.sent,e.next=5,r.arrayBuffer();case 5:return i=e.sent,e.next=8,new Promise((function(e,n){t.decodeAudioData(i,e,n)}));case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){return function(n){var r=t[n],i=r.data,a=r.mutPlayState;return{getPosition:function(){return a?a.isPaused?a.alreadyPlayedTime:e.currentTime-a.startTime:0},play:function(r,o){var s;void 0===o&&(o=!1);var c=e.createBufferSource();c.buffer=i,c.connect(e.destination);var u=null!==(s=null!=r?r:null==a?void 0:a.alreadyPlayedTime)&&void 0!==s?s:0;c.start(void 0,u),c.loop=o,c.onended=function(){var e;!1===(null===(e=t[n].mutPlayState)||void 0===e?void 0:e.isPaused)&&delete t[n].mutPlayState},a&&!a.isPaused||(t[n].mutPlayState={startTime:e.currentTime-u,sample:c,alreadyPlayedTime:u,isPaused:!1})},pause:function(){a&&!a.isPaused&&(a.sample.stop(),t[n].mutPlayState=Object.assign({},a,{alreadyPlayedTime:e.currentTime-a.startTime,isPaused:!0}))}}}}function V(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)return!0;return window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches}var $={name:"sans-serif",size:12};function K(e,t){var n,r=t.loadingTextures,i=void 0===r?[]:r,a=t.assets,o=void 0===a?{}:a,s=t.dimensions,c=void 0===s?"game-coords":s,u=t.nativeSpriteMap,d=void 0===u?{}:u,l=t.canvas,h=t.windowSize,p=l||document.createElement("canvas");l||document.body.appendChild(p);var f,m,g,v,w,b,y=window.PointerEvent?"pointerdown":"touchstart",M=window.PointerEvent?"pointermove":"touchmove",k=window.PointerEvent?"pointerup":"touchend",L=window.PointerEvent?"pointercancel":"touchcancel",C=p.getContext("2d",{alpha:!1}),R=new(window.AudioContext||window.webkitAudioContext),A=!0,W=!0,U=0,q=!1,V=0,K=0,Z=function(){document.hidden&&W&&(V=U,R.suspend()),document.hidden||W||(q=!0,setTimeout((function(){R.suspend(),setTimeout((function(){R.resume()}),75)}),75)),W=!document.hidden};document.addEventListener("keydown",(function(e){A&&I(e)}),!1),document.addEventListener("keyup",(function(e){A&&N(e)}),!1),document.addEventListener("visibilitychange",Z,!1),window.addEventListener("resize",ee,!1),document.addEventListener("contextmenu",(function(e){e.preventDefault()}));var _={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function ee(t){if(!f||(C.restore(),document.removeEventListener(y,m),document.removeEventListener(M,g),document.removeEventListener(k,v),document.removeEventListener(L,w),!0!==t)){var n=function(e,t,n,r){var i=F(e,t,n,r);return B=i,i}((null==h?void 0:h.width)||window.innerWidth,(null==h?void 0:h.height)||window.innerHeight,c,e.props.size);p.width=n.deviceWidth,p.height=n.deviceHeight;var r=e.props.defaultFont||$,i=G(C,n,ne,r);b=i.scale,ie.ref=i.render,_.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,r=e.scale,i=e.width;return function(e){return t+r*(e+i/2+n)}}({canvasOffsetLeft:p.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:b}),_.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,r=e.scale,i=e.height;return function(e){return t-r*(e-i/2-n)}}({canvasOffsetTop:p.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:b}),_.didResize=!0,_.scale=b;var a=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,r=e.scale,i=e.width;return function(e){return(e.clientX-t)/r-n-i/2}}({canvasOffsetLeft:p.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:b}),o=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,r=e.scale,i=e.height;return function(e){return-(e.clientY-t)/r+n+i/2}}({canvasOffsetTop:p.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:b}),s=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin};m=function(e){if("changedTouches"in e){A=!1;for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],r=a({clientX:n.screenX}),i=o({clientY:n.screenY});s(r,i)||(A=!0,z(r,i,n.identifier))}}else{var c=a(e),u=o(e);s(c,u)?A=!1:(A=!0,z(c,u,e.pointerId))}},g=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],r=a({clientX:n.screenX}),i=o({clientY:n.screenY});s(r,i)||X(r,i)}else{var c=a(e),u=o(e);s(c,u)||X(c,u)}},v=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],r=a({clientX:n.screenX}),i=o({clientY:n.screenY});s(r,i)?H(n.identifier):Y(r,i,n.identifier)}else{var c=a(e),u=o(e);s(c,u)?H(e.pointerId):Y(c,u,e.pointerId)}},w=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++)H(e.changedTouches[t].identifier);else H(e.pointerId)},document.addEventListener(y,m,!1),document.addEventListener(M,g,!1),document.addEventListener(k,v,!1),document.addEventListener(L,w,!1),f=n}}var te={},ne={},re={getGetDevice:Q(R,te,F((null==h?void 0:h.width)||window.innerWidth,(null==h?void 0:h.height)||window.innerHeight,c,e.props.size))},ie={ref:null};ee();var ae=!1,oe=function(){var e=Object(E.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(o.audioFileNames||[]).forEach((function(e){t.push(J(R,e).then((function(t){te[e]={data:t}})))})),(o.imageFileNames||[]).forEach((function(e){ne[e]=new Image,t.push(new Promise((function(t,n){ne[e].addEventListener("load",t),ne[e].addEventListener("error",n),ne[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(n=ie.ref)||void 0===n||n.call(ie,{id:"Loading",baseProps:Object(j.a)({}),textures:i}),{cleanup:function(){p.width=p.width,l||document.body.removeChild(p),ae=!0,document.removeEventListener("keydown",I,!1),document.removeEventListener("keyup",N,!1),document.removeEventListener("visibilitychange",Z,!1),window.removeEventListener("resize",ee,!1),ee(!0)},loadPromise:oe().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener(y,e,!1),"suspended"===R.state&&R.resume()};document.addEventListener("keydown",t,!1),document.addEventListener(y,t,!1);var n=function(e,t,n,r){var i=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),o=a(i),s=P(n,a(i),0),c=r||n.props.size,u=O(o.size,c),d=0,l=0,h=T(s,n.props,a,i,!0,u,0,1,n.props.id,t);return{initTextures:h,getNextFrameTextures:function(r,a){var o=r-d;for(d=r,l+=o;l>=S;){var u=(l-=S)/S,p=e.getGetDevice(),f=O(p(i).size,c);h=T(s,n.props,p,i,!1,f,u,1,n.props.id,t),a()}return h}}}(re,{nativeSpriteMap:d,nativeSpriteUtils:_},e),r=n.initTextures,i=n.getNextFrameTextures,a=null;!function e(t){var n;null===(n=ie.ref)||void 0===n||n.call(ie,t),window.requestAnimationFrame((function(t){ae||(null===a&&(a=t-1/60),q&&(q=!1,K+=t-V),U=t,e(i(t-a-K,D)))}))}(r)})),audioElements:te,audioContext:R}}function Q(e,t,n){var r,i={isTouchScreen:V(),log:console.log,random:Math.random,timer:(r={},{start:function(e,t){var n=window.setTimeout((function(){delete r[i],e()}),t),i=String(n);return r[i]={timeoutId:n,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},i},pause:function(e){var t=r[e];if(t&&!t.isPaused){var n=Date.now()-t.timeStartedMs;t.timeRemainingMs-=n,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=r[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var n=window.setTimeout((function(){delete r[e],t.callback()}),t.timeRemainingMs);t.timeoutId=n}},cancel:function(e){var t=r[e];t&&(window.clearTimeout(t.timeoutId),delete r[e])}}),audio:q(e,t),network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var r=localStorage.key(n);r&&(t[r]=null!==(e=localStorage.getItem(r))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign({},i,{size:B||n,now:function(){return new Date}});return function(t){return Object.assign({},e,{inputs:C(t)})}}}var Z=n(140);function _(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=e.assets,s=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(null),n=t[0],i=t[1],a=function(){i(e.current.getBoundingClientRect())};Object(r.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(r.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(r.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),c=s[0],u=s[1],d=Object(r.useState)(0),l=d[0],h=d[1],p=0,f=0,m=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(f=c.height*(667/900),p=f*(375/667)):(p=c.width*(375/460),f=p/(375/667));var v=n.size.maxHeightMargin?0:.08*f;m=(c.height-f)/2+v}return Object(r.useEffect)((function(){if(p&&f){var e=document.getElementById("myCanvas"),r=K(t(n),{loadingTextures:[Z.b.text({color:"black",text:"Loading..."})],assets:o,dimensions:"scale-up",canvas:e,windowSize:{width:p,height:f}}).cleanup;return function(){r()}}}),[p,f,l]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:u,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},i.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&i.a.createElement("img",{className:g.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return h((function(e){return e+1}))}}),i.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:p,height:f}))}function ee(e){var t=e.part,n=e.MDXContent,r=e.codesTs,c=e.codesJs,u=e.Game,d=e.gameProps,l=e.image,h=e.isEnd,p=e.assets,f=r&&c,m=u&&d?i.a.createElement(s.a,{fallback:i.a.createElement("div",null,"Preview")},(function(){return i.a.createElement(_,{Game:u,gameProps:d,showReload:f,assets:p})})):i.a.createElement("div",null,i.a.createElement("img",{src:l}));return i.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},i.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},i.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},i.a.createElement(n,null),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?i.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):i.a.createElement("div",null),h?i.a.createElement("div",null):i.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),f?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},i.a.createElement(v,{codesTs:r,codesJs:c})),i.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):i.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},156:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}n.d(t,"a",(function(){return i}))},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),i=n(6),a=(n(0),n(141)),o={},s={unversionedId:"tutorial/18",id:"tutorial/18",isDocsHomePage:!1,title:"18",description:"18 - Image",source:"@site/docs/tutorial/18.md",permalink:"/docs/tutorial/18",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/18.md"},c=[],u={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"18---image"},"18 - Image"),Object(a.b)("p",null,"As beautiful as our yellow bird rectangle is, it would look even better to use an image in its place. I've taken some artwork from this ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://opengameart.org/content/bevouliin-free-game-character-yellow-flappy-bird"}),"Open Game Art submission"),"."),Object(a.b)("p",null,"replay-starter stores its images in the ",Object(a.b)("inlineCode",{parentName:"p"},"assets/images")," folder, so we can copy one of the PNG files from Open Game Art to there as ",Object(a.b)("inlineCode",{parentName:"p"},"bird.png"),"."),Object(a.b)("p",null,"In our ",Object(a.b)("inlineCode",{parentName:"p"},"Bird")," Sprite we replace the rectangle with the ",Object(a.b)("inlineCode",{parentName:"p"},"t.image")," Texture, set to the same width and height."),Object(a.b)("p",null,"Lastly, in ",Object(a.b)("inlineCode",{parentName:"p"},"web/index"),", we need to register the file name to load."))}d.isMDXComponent=!0}}]);