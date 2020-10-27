(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{136:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(146),o=n(163),s=n(72);t.default=function(){return i.a.createElement(a.a,{part:2,MDXContent:s.default,codesTs:[{file:"bird.ts",code:'import { makeSprite, t } from "@replay/core";\n\nexport const birdWidth = 50;\nexport const birdHeight = 40;\n\nexport const Bird = makeSprite({\n  render() {\n    return [\n      t.rectangle({\n        width: birdWidth,\n        height: birdHeight,\n        color: "yellow",\n      }),\n    ];\n  },\n});\n'}],codesJs:[{file:"bird.js",code:'import { makeSprite, t } from "@replay/core";\n\nexport const birdWidth = 50;\nexport const birdHeight = 40;\n\nexport const Bird = makeSprite({\n  render() {\n    return [\n      t.rectangle({\n        width: birdWidth,\n        height: birdHeight,\n        color: "yellow",\n      }),\n    ];\n  },\n});\n'}],Game:o.a,gameProps:o.b})}},141:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(143),i={text:function(e){return{type:"text",props:Object.assign({testId:e.testId},Object(r.a)(e),{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign({testId:e.testId},Object(r.a)(e),{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign({testId:e.testId},Object(r.a)(e),{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign({testId:e.testId},Object(r.a)(e),{color:e.color,fillColor:e.fillColor,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,lineCap:e.lineCap||"butt",path:e.path})}},image:function(e){return{type:"image",props:Object.assign({testId:e.testId},Object(r.a)(e),{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign({testId:e.testId},Object(r.a)(e),{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},143:function(e,t,n){"use strict";function r(e){var t,n,r;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(r=e.scaleY)&&void 0!==r?r:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return r}))},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return te}));var r=n(0),i=n.n(r),a=n(150),o=n(147),s=n(155),c=n(2),d=n(153),u=n(152),l=n(148),p=n(149),h=n(151),f=n.n(h),m=n(48),v=n.n(m);function g(e){var t=e.codesTs,n=e.codesJs;return i.a.createElement(l.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},i.a.createElement(p.a,{value:"js"},i.a.createElement(w,{lang:"js",codes:n})),i.a.createElement(p.a,{value:"ts"},i.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(r.useState)(a[0]),s=o[0],c=o[1],d=n.find((function(e){return e.file===s}));return i.a.createElement("div",{style:{marginTop:-12}},i.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return i.a.createElement("button",{className:v.a.fileButton+(s===e?" "+v.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),i.a.createElement(b,{key:d.file,lang:t,code:d.code,highlight:d.highlight}))}function b(e){var t=e.lang,n=e.code,r=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return i.a.createElement(d.a,Object(c.a)({},d.b,{theme:u.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return i.a.createElement("div",{className:v.a.codeBlockContent},i.a.createElement("div",{tabIndex:"0",className:f()(t,v.a.codeBlock)},i.a.createElement("div",{className:v.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==r?void 0:r.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],r=t[1];return Array.from({length:r-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),i.a.createElement("div",n,i.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return i.a.createElement("span",s({token:e,key:t}))})))})))))}))}var y=n(144),E=n.n(y),x=n(145),P=n(143);function T(e,t,n,r,i,a,o,s,c,d){var u=Object(P.a)(t);u.opacity*=s;var l=d.nativeSpriteMap,p=d.nativeSpriteUtils,h=function(e){var t=r(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var r=t.x,i=t.y,a=r-e.x,o=i-e.y,s=a*Math.cos(n)+o*Math.sin(n),c=-a*Math.sin(n)+o*Math.cos(n),d=s/e.scaleX,u=c/e.scaleY;return{x:d+e.anchorX,y:u+e.anchorY}}}(u)(t)},f=n(h),m=e.getSprites(t,f,i,a,o),v=new Set(e.prevChildIds),g=[],w=m.map((function(t){if(!t)return t;if("native"===t.type){g.push(t.props.id),v.delete(t.props.id);var r=l[t.name];if(!r)throw Error('Cannot find Native Sprite "'+t.name+'"');var i=e.childContainers[t.props.id];if(!i||"native"!==i.type){var s={type:"native",state:r.create({props:t.props,parentGlobalId:c,getState:function(){return s.state},updateState:function(e){s.state=Object.assign({},s.state,e)},utils:p}),cleanup:r.cleanup};e.childContainers[t.props.id]=s,i=s}return i.state=r.loop({props:t.props,state:i.state,parentGlobalId:c,utils:p}),null}if("pure"===t.type){g.push(t.props.id),v.delete(t.props.id);var m=e.childContainers[t.props.id];return m&&"pure"===m.type||(m=O(t),e.childContainers[t.props.id]=m),function e(t,n,r,i,a,o){var s=Object(P.a)(n);s.opacity*=o;var c=t.getSprites(n,r,i,a);if("cachedTextures"===c.type)return{id:n.id,baseProps:s,textures:c.textures};var d=c.sprites,u=new Set(t.prevChildIds),l=[],p=d.map((function(n){if(!n)return n;if("pure"===n.type){l.push(n.props.id),u.delete(n.props.id);var o=t.childContainers[n.props.id];return o&&"pure"===o.type||(o=O(n),t.childContainers[n.props.id]=o),e(o,n.props,r,i,a,s.opacity)}return n})).filter(M);return u.forEach((function(e){delete t.childContainers[e]})),t.cache=p,t.prevChildIds=l,{id:n.id,baseProps:s,textures:p}}(m,t.props,f.size,p.didResize,a,u.opacity)}if("custom"===t.type){g.push(t.props.id),v.delete(t.props.id);var w=!1,b=e.childContainers[t.props.id];return b&&"custom"===b.type||(w=!0,b=S(t,f,e.prevTime),e.childContainers[t.props.id]=b),T(b,t.props,n,h,w,a,o,u.opacity,c+"--"+t.props.id,d)}return t})).filter(M);return p.didResize=!1,v.forEach((function(t){!function e(t){Object.values(t).forEach((function(t){"custom"===t.type?e(Object.values(t.childContainers)):"native"===t.type&&t.cleanup({state:t.state,parentGlobalId:c})}))}([e.childContainers[t]]),delete e.childContainers[t]})),e.prevChildIds=g,{id:t.id,baseProps:u,textures:w}}var j=1/60*1e3;function S(e,t,n){var r,i=e.spriteObj,a=e.props,o=[],s=function(e){o.push(e)},c=null;return i.init&&(r=i.init({props:a,getState:function(){if(!c)throw Error("Cannot call getState synchronously in init");return c.state},device:t,updateState:s})),c={type:"custom",state:r,childContainers:{},prevChildIds:[],prevTime:n,currentLag:0,getSprites:function(e,t,n,r,a){var c=this,d=function(){c.state=o.reduce((function(e,t){return t(e)}),c.state),o.length=0};d(),!n&&i.loop&&(this.state=i.loop({props:e,state:this.state,device:t,updateState:s})),d();var u=i[r];u||(u="renderPXL"===r&&i.renderXL?i.renderXL:i.render);var l=u({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:a});return d(),l}}}function k(e,t){var n,r=e.deviceHeight>e.deviceWidth,i=!1;return"portrait"in t?(n=r?t.portrait:t.landscape,i=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?i&&r?"renderPXL":"renderXL":i&&r?"renderP":"render"}function O(e){var t=e.spriteObj;return{type:"pure",childContainers:{},prevChildIds:[],getSprites:function(e,n,r,i){var a=t[i];return a||(a="renderPXL"===i&&t.renderXL?t.renderXL:t.render),this.prevProps&&this.cache&&!t.shouldRerender(this.prevProps,e)&&!r?(this.prevProps=e,{type:"cachedTextures",textures:this.cache}):(this.prevProps=e,{type:"pureSprites",sprites:a({props:e,size:n})})}}}function M(e){return null!=e}var C={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,numberPressed:0,justPressed:!1,justReleased:!1,x:0,y:0}},L=[];function I(e){return function(e,t){var n=e(t.pointer);return Object.assign({},t,{pointer:Object.assign({},t.pointer,{x:n.x,y:n.y})})}(e,C)}function X(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),C.keysDown[e.key]=!0,C.keysJustPressed[e.key]=!0}function N(e){delete C.keysDown[e.key]}function z(e,t,n){L.includes(n)||(L=[].concat(L,[n])),C.pointer.pressed=!0,C.pointer.numberPressed=L.length,C.pointer.justPressed=!0,C.pointer.x=e,C.pointer.y=t}function D(e,t){C.pointer.x=e,C.pointer.y=t}function R(e,t,n){0===(L=L.filter((function(e){return e!==n}))).length&&(C.pointer.justPressed=!1,C.pointer.pressed=!1),C.pointer.numberPressed=L.length,C.pointer.justReleased=!0,C.pointer.x=e,C.pointer.y=t}function H(e){L=L.filter((function(t){return t!==e})),C.pointer.numberPressed=L.length,0===L.length&&(C.pointer.justPressed=!1,C.pointer.pressed=!1)}function Y(){C={keysDown:C.keysDown,keysJustPressed:{},pointer:Object.assign({},C.pointer,{justPressed:!1,justReleased:!1})}}function W(e,t,n,r){var i=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,c=t.deviceWidth,d=t.deviceHeight;e.save();var u=Math.min(c/i,d/a),l=i+2*o,p=a+2*s;return e.translate(c/2,d/2),e.scale(u,u),{scale:u,render:function(t){e.clearRect(-c/2/u,-d/2/u,c/u,d/u),e.fillStyle="white",e.fillRect(-l/2,-p/2,l,p),function e(t,n,r,i){var a=t.baseProps,o=t.textures;n.save(),F(n,a),o.forEach((function(t){if("type"in t){var o=G(n);return n.save(),F(n,t.props,a.opacity),function(e,t,n,r){switch(e.type){case"text":return t.text(e.props.font||r,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color,e.props.fillColor,e.props.lineCap),0;case"image":var i=n[e.props.fileName];if(!i)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(i,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,r,i),void n.restore()}e(t,n,r,i)})),n.restore()}(t,e,n,r)}}}var B=Math.PI/180,F=function(e,t,n){void 0===n&&(n=1);var r=t.x,i=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,c=t.anchorX,d=t.anchorY,u=t.opacity;e.translate(r,-i),e.rotate(a*B),e.scale(o,s),e.translate(-c,d),e.globalAlpha=u*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,r=n[0],i=r[0],a=r[1],o=n.slice(1);return e.beginPath(),e.moveTo(i,-a),o.forEach((function(t){var n=t[0],r=t[1];e.lineTo(n,-r)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var A,G=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,r){e.fillStyle=r,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,r,i,a){if(!(t.length<2)){var o=t[0],s=o[0],c=o[1],d=t.slice(1);e.beginPath(),e.moveTo(s,-c),d.forEach((function(t){var n=t[0],r=t[1];e.lineTo(n,-r)})),i&&(e.fillStyle=i,e.fill()),r&&(e.strokeStyle=r,e.lineWidth=n,e.lineCap=a,e.stroke())}},text:function(t,n,r,i){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=r,e.fillStyle=i,e.fillText(n,0,0)},image:function(t,n,r){e.drawImage(t,-n/2,-r/2,n,r)},spriteSheet:function(t,n,r,i,a,o){var s=t.width/n,c=t.height/r,d=i%n,u=Math.floor(i/n)%r;e.drawImage(t,d*s,u*c,s,c,-a/2,-o/2,a,o)}}};function J(e,t,n,r){var i;"portrait"in r?i=t>e?r.portrait:r.landscape:i=r;var a=i,o=a.width,s=a.height,c=a.maxWidthMargin,d=void 0===c?0:c,u=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var l=o/s;if(l>e/t){var p=e,h=p/l,f=h/s*(void 0===u?0:u),m=Math.min(t,h+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(m-h)/2*(s/h),deviceWidth:p,deviceHeight:m}}var v=t,g=v*l,w=g/o*d,b=Math.min(e,g+2*w);return{width:o,height:s,widthMargin:(b-g)/2*(o/g),heightMargin:0,deviceWidth:b,deviceHeight:v}}function U(e,t){return q.apply(this,arguments)}function q(){return(q=Object(x.a)(E.a.mark((function e(t,n){var r,i,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return r=e.sent,e.next=5,r.arrayBuffer();case 5:return i=e.sent,e.next=8,new Promise((function(e,n){t.decodeAudioData(i,e,n)}));case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return function(n){var r=t[n];if(!r)throw Error('Cannot find audio file "'+n+'"');var i=r.data,a=r.mutPlayState;return{getPosition:function(){return a?a.isPaused?a.alreadyPlayedTime:e.currentTime-a.startTime:0},play:function(r,o){var s;void 0===o&&(o=!1);var c=e.createBufferSource();c.buffer=i,c.connect(e.destination);var d=null!==(s=null!=r?r:null==a?void 0:a.alreadyPlayedTime)&&void 0!==s?s:0;c.start(void 0,d),c.loop=o,c.onended=function(){var e;!1===(null===(e=t[n].mutPlayState)||void 0===e?void 0:e.isPaused)&&delete t[n].mutPlayState},a&&!a.isPaused||(t[n].mutPlayState={startTime:e.currentTime-d,sample:c,alreadyPlayedTime:d,isPaused:!1})},pause:function(){a&&!a.isPaused&&(a.sample.stop(),t[n].mutPlayState=Object.assign({},a,{alreadyPlayedTime:e.currentTime-a.startTime,isPaused:!0}))}}}}function K(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)return!0;return window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches}var Q={name:"sans-serif",size:12};function Z(e,t){var n,r=t.loadingTextures,i=void 0===r?[]:r,a=t.assets,o=void 0===a?{}:a,s=t.dimensions,c=void 0===s?"game-coords":s,d=t.nativeSpriteMap,u=void 0===d?{}:d,l=t.canvas,p=t.windowSize,h=l||document.createElement("canvas");l||document.body.appendChild(h);var f=window.PointerEvent?"pointerdown":"touchstart",m=window.PointerEvent?"pointermove":"touchmove",v=window.PointerEvent?"pointerup":"touchend",g=window.PointerEvent?"pointercancel":"touchcancel",w=h.getContext("2d",{alpha:!1}),b=new(window.AudioContext||window.webkitAudioContext),y=!0,O=!0,M=0,C=!1,L=0,I=0,B=function(){document.hidden&&O&&(L=M,b.suspend()),document.hidden||O||(C=!0,setTimeout((function(){b.suspend(),setTimeout((function(){b.resume()}),75)}),75)),O=!document.hidden};document.addEventListener("keydown",(function(e){y&&X(e)}),!1),document.addEventListener("keyup",(function(e){y&&N(e)}),!1),document.addEventListener("visibilitychange",B,!1),window.addEventListener("resize",te,!1);var F,G,q,V,K,Z,_=function(){return te({didScroll:!0})};window.addEventListener("scroll",_,!1),document.addEventListener("contextmenu",(function(e){e.preventDefault()}));var ee={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function te(t){var n=Boolean(t&&"cleanup"in t&&t.cleanup),r=Boolean(t&&"didScroll"in t&&t.didScroll);if(!F||(w.restore(),document.removeEventListener(f,G),document.removeEventListener(m,q),document.removeEventListener(v,V),document.removeEventListener(g,K),!n)){var i=r&&F?F:function(e,t,n,r){var i=J(e,t,n,r);return A=i,i}((null==p?void 0:p.width)||window.innerWidth,(null==p?void 0:p.height)||window.innerHeight,c,e.props.size);h.width=i.deviceWidth,h.height=i.deviceHeight;var a=e.props.defaultFont||Q,o=W(w,i,re,a);Z=o.scale,ae.ref=o.render,ee.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,r=e.scale,i=e.width;return function(e){return t+r*(e+i/2+n)}}({canvasOffsetLeft:h.offsetLeft,width:i.width,widthMargin:i.widthMargin,scale:Z}),ee.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,r=e.scale,i=e.height;return function(e){return t-r*(e-i/2-n)}}({canvasOffsetTop:h.offsetTop,height:i.height,heightMargin:i.heightMargin,scale:Z}),ee.didResize=!0,ee.scale=Z;var s=function(e){var t=e.canvasOffsetLeft,n=e.scrollX,r=e.widthMargin,i=e.scale,a=e.width;return function(e){return(e.clientX-t+n)/i-r-a/2}}({canvasOffsetLeft:h.offsetLeft,scrollX:window.scrollX,width:i.width,widthMargin:i.widthMargin,scale:Z}),d=function(e){var t=e.canvasOffsetTop,n=e.scrollY,r=e.heightMargin,i=e.scale,a=e.height;return function(e){return-(e.clientY-t+n)/i+r+a/2}}({canvasOffsetTop:h.offsetTop,scrollY:window.scrollY,height:i.height,heightMargin:i.heightMargin,scale:Z}),u=function(e,t){return e>i.width/2+i.widthMargin||e<-i.width/2-i.widthMargin||t>i.height/2+i.heightMargin||t<-i.height/2-i.heightMargin};G=function(e){if("changedTouches"in e){y=!1;for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],r=s({clientX:n.screenX}),i=d({clientY:n.screenY});u(r,i)||(y=!0,z(r,i,n.identifier))}}else{var a=s(e),o=d(e);u(a,o)?y=!1:(y=!0,z(a,o,e.pointerId))}},q=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],r=s({clientX:n.screenX}),i=d({clientY:n.screenY});u(r,i)||D(r,i)}else{var a=s(e),o=d(e);u(a,o)||D(a,o)}},V=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],r=s({clientX:n.screenX}),i=d({clientY:n.screenY});u(r,i)?H(n.identifier):R(r,i,n.identifier)}else{var a=s(e),o=d(e);u(a,o)?H(e.pointerId):R(a,o,e.pointerId)}},K=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++)H(e.changedTouches[t].identifier);else H(e.pointerId)},document.addEventListener(f,G,!1),document.addEventListener(m,q,!1),document.addEventListener(v,V,!1),document.addEventListener(g,K,!1),F=i}}var ne={},re={},ie={getGetDevice:$(b,ne,J((null==p?void 0:p.width)||window.innerWidth,(null==p?void 0:p.height)||window.innerHeight,c,e.props.size))},ae={ref:null};te();var oe=!1,se=function(){var e=Object(x.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(o.audioFileNames||[]).forEach((function(e){t.push(U(b,e).then((function(t){ne[e]={data:t}})).catch((function(){setTimeout((function(){throw Error('Failed to load audio file "'+e+'"')}))})))})),(o.imageFileNames||[]).forEach((function(e){re[e]=new Image,t.push(new Promise((function(t,n){re[e].addEventListener("load",t),re[e].addEventListener("error",n),re[e].src=e})).catch((function(){setTimeout((function(){throw Error('Failed to load image file "'+e+'"')}))})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(n=ae.ref)||void 0===n||n.call(ae,{id:"Loading",baseProps:Object(P.a)({}),textures:i}),{cleanup:function(){h.width=h.width,l||document.body.removeChild(h),oe=!0,document.removeEventListener("keydown",X,!1),document.removeEventListener("keyup",N,!1),document.removeEventListener("visibilitychange",B,!1),window.removeEventListener("resize",te,!1),window.removeEventListener("scroll",_,!1),te({cleanup:!0})},loadPromise:se().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener(f,e,!1),"suspended"===b.state&&b.resume()};document.addEventListener("keydown",t,!1),document.addEventListener(f,t,!1);var n=function(e,t,n,r){var i=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),o=a(i),s=S(n,a(i),0),c=r||n.props.size,d=k(o.size,c),u=0,l=0,p=T(s,n.props,a,i,!0,d,0,1,n.props.id,t);return{initTextures:p,getNextFrameTextures:function(r,a){var o=r-u;for(u=r,l+=o;l>=j;){var d=(l-=j)/j,h=e.getGetDevice(),f=k(h(i).size,c);p=T(s,n.props,h,i,!1,f,d,1,n.props.id,t),a()}return p}}}(ie,{nativeSpriteMap:u,nativeSpriteUtils:ee},e),r=n.initTextures,i=n.getNextFrameTextures,a=null;!function e(t){var n;null===(n=ae.ref)||void 0===n||n.call(ae,t),window.requestAnimationFrame((function(t){oe||(null===a&&(a=t-1/60),C&&(C=!1,I+=t-L),M=t,e(i(t-a-I,Y)))}))}(r)})),audioElements:ne,audioContext:b}}function $(e,t,n){var r,i={isTouchScreen:K(),log:console.log,random:Math.random,timer:(r={},{start:function(e,t){var n=window.setTimeout((function(){delete r[i],e()}),t),i=String(n);return r[i]={timeoutId:n,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},i},pause:function(e){var t=r[e];if(t&&!t.isPaused){var n=Date.now()-t.timeStartedMs;t.timeRemainingMs-=n,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=r[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var n=window.setTimeout((function(){delete r[e],t.callback()}),t.timeRemainingMs);t.timeoutId=n}},cancel:function(e){var t=r[e];t&&(window.clearTimeout(t.timeoutId),delete r[e])}}),audio:V(e,t),network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var r=localStorage.key(n);r&&(t[r]=null!==(e=localStorage.getItem(r))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign({},i,{size:A||n,now:function(){return new Date}});return function(t){return Object.assign({},e,{inputs:I(t)})}}}var _=n(141);function ee(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=e.assets,s=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(null),n=t[0],i=t[1],a=function(){i(e.current.getBoundingClientRect())};Object(r.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(r.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(r.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),c=s[0],d=s[1],u=Object(r.useState)(0),l=u[0],p=u[1],h=0,f=0,m=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(f=c.height*(667/900),h=f*(375/667)):(h=c.width*(375/460),f=h/(375/667));var g=n.size.maxHeightMargin?0:.08*f;m=(c.height-f)/2+g}return Object(r.useEffect)((function(){if(h&&f){var e=document.getElementById("myCanvas"),r=Z(t(n),{loadingTextures:[_.b.text({color:"black",text:"Loading..."})],assets:o,dimensions:"scale-up",canvas:e,windowSize:{width:h,height:f}}).cleanup;return function(){r()}}}),[h,f,l]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:d,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},i.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&i.a.createElement("img",{className:v.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return p((function(e){return e+1}))}}),i.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:h,height:f}))}function te(e){var t=e.part,n=e.MDXContent,r=e.codesTs,c=e.codesJs,d=e.Game,u=e.gameProps,l=e.image,p=e.isEnd,h=e.assets,f=r&&c,m=d&&u?i.a.createElement(s.a,{fallback:i.a.createElement("div",null,"Preview")},(function(){return i.a.createElement(ee,{Game:d,gameProps:u,showReload:f,assets:h})})):i.a.createElement("div",null,i.a.createElement("img",{src:l}));return i.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},i.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},i.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},i.a.createElement(n,null),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?i.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):i.a.createElement("div",null),p?i.a.createElement("div",null):i.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),f?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},i.a.createElement(g,{codesTs:r,codesJs:c})),i.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):i.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(141),i=Object(r.a)({render:function(){return[r.b.rectangle({width:50,height:40,color:"yellow"})]}}),a=Object(r.a)({render:function(){return[i({id:"bird"})]}}),o={id:"Game",size:{width:400,height:600},defaultFont:{name:"Helvetica",size:24}}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(142)),o={},s={unversionedId:"tutorial/2",id:"tutorial/2",isDocsHomePage:!1,title:"2",description:"2 - Bird Sprite",source:"@site/docs/tutorial/2.md",permalink:"/docs/tutorial/2",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/2.md"},c=[],d={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"2---bird-sprite"},"2 - Bird Sprite"),Object(a.b)("p",null,"Let's start off by creating our bird in a new file within the ",Object(a.b)("inlineCode",{parentName:"p"},"src")," folder, as you can see in the code block on the right."),Object(a.b)("p",null,"We'll represent our bird as a ",Object(a.b)("em",{parentName:"p"},"Sprite"),". Sprites are the building blocks of Replay, and provide a neat way to modularise our code."),Object(a.b)("p",null,"For now we'll just render a yellow rectangle in the middle of the screen. To do this we create a new Sprite with ",Object(a.b)("inlineCode",{parentName:"p"},"makeSprite"),", passing in an object with a ",Object(a.b)("inlineCode",{parentName:"p"},"render")," method."),Object(a.b)("p",null,"All Sprites need a ",Object(a.b)("inlineCode",{parentName:"p"},"render")," method which returns an array of other Sprites. For our bird, we return a rectangle ",Object(a.b)("em",{parentName:"p"},"Texture"),". Textures are elements to draw onto the screen like text, images and shapes. In this case, we use Replay's ",Object(a.b)("inlineCode",{parentName:"p"},"t.rectangle")," Texture, and pass in the width, height and color ",Object(a.b)("em",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"em"},"props")),"."))}u.isMDXComponent=!0}}]);