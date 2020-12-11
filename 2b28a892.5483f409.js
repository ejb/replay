(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{142:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(145),i={text:function(e){return{type:"text",props:Object.assign({testId:e.testId},Object(r.a)(e),{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign({testId:e.testId},Object(r.a)(e),{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign({testId:e.testId},Object(r.a)(e),{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign({testId:e.testId},Object(r.a)(e),{color:e.color,fillColor:e.fillColor,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,lineCap:e.lineCap||"butt",path:e.path})}},image:function(e){return{type:"image",props:Object.assign({testId:e.testId},Object(r.a)(e),{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign({testId:e.testId},Object(r.a)(e),{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},145:function(e,t,n){"use strict";function r(e){var t,n,r;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(r=e.scaleY)&&void 0!==r?r:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return r}))},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return ie}));var r=n(0),i=n.n(r),a=n(150),o=n(147),s=n(155),c=n(2),u=n(153),d=n(152),l=n(148),p=n(149),h=n(151),f=n.n(h),v=n(48),g=n.n(v);function m(e){var t=e.codesTs,n=e.codesJs;return i.a.createElement(l.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},i.a.createElement(p.a,{value:"js"},i.a.createElement(w,{lang:"js",codes:n})),i.a.createElement(p.a,{value:"ts"},i.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(r.useState)(a[0]),s=o[0],c=o[1],u=n.find((function(e){return e.file===s}));return i.a.createElement("div",{style:{marginTop:-12}},i.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return i.a.createElement("button",{className:g.a.fileButton+(s===e?" "+g.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),i.a.createElement(y,{key:u.file,lang:t,code:u.code,highlight:u.highlight}))}function y(e){var t=e.lang,n=e.code,r=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return i.a.createElement(u.a,Object(c.a)({},u.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return i.a.createElement("div",{className:g.a.codeBlockContent},i.a.createElement("div",{tabIndex:"0",className:f()(t,g.a.codeBlock)},i.a.createElement("div",{className:g.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==r?void 0:r.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],r=t[1];return Array.from({length:r-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),i.a.createElement("div",n,i.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return i.a.createElement("span",s({token:e,key:t}))})))})))))}))}var b=n(143),x=n.n(b),E=n(144);function S(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(E.a)(x.a.mark((function e(t,n,r){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([].concat(T(t,n.audioFileNames||[],r.audioElements,r.loadAudioFile),T(t,n.imageFileNames||[],r.imageElements,r.loadImageFile)));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,n,r){return t.map((function(t){if(n[t]){n[t].globalSpriteIds.add(e);var i=n[t].data;return"then"in i?i:Promise.resolve()}var a=r(t).then((function(e){n[t].data=e}));return n[t]={globalSpriteIds:new Set([e]),data:a},a}))}function P(e,t,n){for(var r in t){var i=t[r].globalSpriteIds;i.has(e)&&(1===i.size?(n(r),delete t[r]):t[r].globalSpriteIds.delete(e))}}var M=n(145);function O(e,t,n,r,i,a,o,s,c,u){var d=Object(M.a)(t);d.opacity*=s;var l=u.nativeSpriteMap,p=u.nativeSpriteUtils,h=function(e){var t=r(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var r=t.x,i=t.y,a=r-e.x,o=i-e.y,s=a*Math.cos(n)+o*Math.sin(n),c=-a*Math.sin(n)+o*Math.cos(n),u=s/e.scaleX,d=c/e.scaleY;return{x:u+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(h),v=e.getSprites(t,f,i,a,o),g=new Set(e.prevChildIds),m=[];if(g.size<e.prevChildIds.length){var w=e.prevChildIds.find((function(t,n){return e.prevChildIds.indexOf(t)!==n}));throw Error("Duplicate Sprite id "+w)}var y=v.map((function(t){if(!t)return t;if("native"===t.type){m.push(t.props.id),g.delete(t.props.id);var r=l[t.name];if(!r)throw Error('Cannot find Native Sprite "'+t.name+'"');var i=e.childContainers[t.props.id];if(!i||"native"!==i.type){var s={type:"native",state:r.create({props:t.props,parentGlobalId:c,getState:function(){return s.state},updateState:function(e){s.state=Object.assign({},s.state,e)},utils:p}),cleanup:r.cleanup};e.childContainers[t.props.id]=s,i=s}return i.state=r.loop({props:t.props,state:i.state,parentGlobalId:c,utils:p}),null}if("pure"===t.type){m.push(t.props.id),g.delete(t.props.id);var v=e.childContainers[t.props.id];return v&&"pure"===v.type||(v=L(t),e.childContainers[t.props.id]=v),function e(t,n,r,i,a,o){var s=Object(M.a)(n);s.opacity*=o;var c=t.getSprites(n,r,i,a);if("cachedTextures"===c.type)return{id:n.id,baseProps:s,textures:c.textures};var u=c.sprites,d=new Set(t.prevChildIds),l=[],p=u.map((function(n){if(!n)return n;if("pure"===n.type){l.push(n.props.id),d.delete(n.props.id);var o=t.childContainers[n.props.id];return o&&"pure"===o.type||(o=L(n),t.childContainers[n.props.id]=o),e(o,n.props,r,i,a,s.opacity)}return n})).filter(z);return d.forEach((function(e){delete t.childContainers[e]})),t.cache=p,t.prevChildIds=l,{id:n.id,baseProps:s,textures:p}}(v,t.props,f.size,p.didResize,a,d.opacity)}if("custom"===t.type){m.push(t.props.id),g.delete(t.props.id);var w=!1,y=e.childContainers[t.props.id],b=c+"--"+t.props.id;return y&&"custom"===y.type||(w=!0,y=I(t,f,e.prevTime,b),e.childContainers[t.props.id]=y),O(y,t.props,n,h,w,a,o,d.opacity,b,u)}return t})).filter(z);return p.didResize=!1,g.forEach((function(t){var n,r=e.childContainers[t];!function e(t,n){Object.entries(t).forEach((function(t){var r=t[0],i=t[1];if("custom"===i.type){var a=n+"--"+r;e(i.childContainers,a),i.loadFilesPromise&&i.loadFilesPromise.then((function(){var e,t;e=a,t=f.assetUtils,P(e,t.audioElements,t.cleanupAudioFile),P(e,t.imageElements,t.cleanupImageFile)}))}else"native"===i.type&&i.cleanup({state:i.state,parentGlobalId:c})}))}((n={},n[t]=r,n),c),delete e.childContainers[t]})),e.prevChildIds=m,{id:t.id,baseProps:d,textures:y}}var k=1/60*1e3;function I(e,t,n,r){var i,a,o=e.spriteObj,s=e.props,c=[],u=function(e){c.push(e)},d=null,l=null;return o.init&&(i=o.init({props:s,getState:function(){if(!d)throw Error("Cannot call getState synchronously in init");return d.state},device:t,updateState:u,preloadFiles:(a=Object(E.a)(x.a.mark((function e(n){var i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=S(r,n,t.assetUtils),d?d.loadFilesPromise=i:l=i,e.next=4,i;case 4:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})})),d={type:"custom",state:i,childContainers:{},prevChildIds:[],prevTime:n,currentLag:0,loadFilesPromise:l,getSprites:function(e,t,n,r,i){var a=this,s=function(){a.state=c.reduce((function(e,t){return t(e)}),a.state),c.length=0};s(),!n&&o.loop&&(this.state=o.loop({props:e,state:this.state,device:t,updateState:u})),s();var d=o[r];d||(d="renderPXL"===r&&o.renderXL?o.renderXL:o.render);var l=d({props:e,state:this.state,device:t,updateState:u,extrapolateFactor:i});return s(),l}}}function C(e,t){var n,r=e.deviceHeight>e.deviceWidth,i=!1;return"portrait"in t?(n=r?t.portrait:t.landscape,i=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?i&&r?"renderPXL":"renderXL":i&&r?"renderP":"render"}function L(e){var t=e.spriteObj;return{type:"pure",childContainers:{},prevChildIds:[],getSprites:function(e,n,r,i){var a=t[i];return a||(a="renderPXL"===i&&t.renderXL?t.renderXL:t.render),this.prevProps&&this.cache&&!t.shouldRerender(this.prevProps,e)&&!r?(this.prevProps=e,{type:"cachedTextures",textures:this.cache}):(this.prevProps=e,{type:"pureSprites",sprites:a({props:e,size:n})})}}}function z(e){return null!=e}var X={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,numberPressed:0,justPressed:!1,justReleased:!1,x:0,y:0}},F=[];function Y(e){return function(e,t){var n=e(t.pointer);return Object.assign({},t,{pointer:Object.assign({},t.pointer,{x:n.x,y:n.y})})}(e,X)}function N(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),X.keysDown[e.key]=!0,X.keysJustPressed[e.key]=!0}function A(e){delete X.keysDown[e.key]}function D(e,t,n){F.includes(n)||(F=[].concat(F,[n])),X.pointer.pressed=!0,X.pointer.numberPressed=F.length,X.pointer.justPressed=!0,X.pointer.x=e,X.pointer.y=t}function R(e,t){X.pointer.x=e,X.pointer.y=t}function B(e,t,n){0===(F=F.filter((function(e){return e!==n}))).length&&(X.pointer.justPressed=!1,X.pointer.pressed=!1),X.pointer.numberPressed=F.length,X.pointer.justReleased=!0,X.pointer.x=e,X.pointer.y=t}function H(e){F=F.filter((function(t){return t!==e})),X.pointer.numberPressed=F.length,0===F.length&&(X.pointer.justPressed=!1,X.pointer.pressed=!1)}function G(){X={keysDown:X.keysDown,keysJustPressed:{},pointer:Object.assign({},X.pointer,{justPressed:!1,justReleased:!1})}}function U(e,t,n,r){var i=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,c=t.deviceWidth,u=t.deviceHeight;e.save();var d=Math.min(c/i,u/a),l=i+2*o,p=a+2*s;return e.translate(c/2,u/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-c/2/d,-u/2/d,c/d,u/d),e.fillStyle="white",e.fillRect(-l/2,-p/2,l,p),function e(t,n,r,i){var a=t.baseProps,o=t.textures;n.save(),q(n,a),o.forEach((function(t){if("type"in t){var o=$(n);return n.save(),q(n,t.props,a.opacity),function(e,t,n,r){switch(e.type){case"text":return t.text(e.props.font||r,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color,e.props.fillColor,e.props.lineCap),0;case"image":return t.image(W(n,e.props.fileName),e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(W(n,e.props.fileName),e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,r,i),void n.restore()}e(t,n,r,i)})),n.restore()}(t,e,n,r)}}}var W=function(e,t){var n=e[t];if(!n)throw Error('Image file "'+t+'" was not preloaded');if("then"in n.data)throw Error('Image file "'+t+'" did not finish loading before it was used');return n.data},J=Math.PI/180,q=function(e,t,n){void 0===n&&(n=1);var r=t.x,i=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,c=t.anchorX,u=t.anchorY,d=t.opacity;e.translate(r,-i),e.rotate(a*J),e.scale(o,s),e.translate(-c,u),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,r=n[0],i=r[0],a=r[1],o=n.slice(1);return e.beginPath(),e.moveTo(i,-a),o.forEach((function(t){var n=t[0],r=t[1];e.lineTo(n,-r)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var V,$=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,r){e.fillStyle=r,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,r,i,a){if(!(t.length<2)){var o=t[0],s=o[0],c=o[1],u=t.slice(1);e.beginPath(),e.moveTo(s,-c),u.forEach((function(t){var n=t[0],r=t[1];e.lineTo(n,-r)})),i&&(e.fillStyle=i,e.fill()),r&&(e.strokeStyle=r,e.lineWidth=n,e.lineCap=a,e.stroke())}},text:function(t,n,r,i){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=r,e.fillStyle=i,e.fillText(n,0,0)},image:function(t,n,r){e.drawImage(t,-n/2,-r/2,n,r)},spriteSheet:function(t,n,r,i,a,o){var s=t.width/n,c=t.height/r,u=i%n,d=Math.floor(i/n)%r;e.drawImage(t,u*s,d*c,s,c,-a/2,-o/2,a,o)}}};function K(e,t,n,r){var i;"portrait"in r?i=t>e?r.portrait:r.landscape:i=r;var a=i,o=a.width,s=a.height,c=a.maxWidthMargin,u=void 0===c?0:c,d=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var l=o/s;if(l>e/t){var p=e,h=p/l,f=h/s*(void 0===d?0:d),v=Math.min(t,h+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(v-h)/2*(s/h),deviceWidth:p,deviceHeight:v}}var g=t,m=g*l,w=m/o*u,y=Math.min(e,m+2*w);return{width:o,height:s,widthMargin:(y-m)/2*(o/m),heightMargin:0,deviceWidth:y,deviceHeight:g}}function Q(){return(Q=Object(E.a)(x.a.mark((function e(t,n){var r,i,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return r=e.sent,e.next=5,r.arrayBuffer();case 5:return i=e.sent,e.next=8,new Promise((function(e,n){t.decodeAudioData(i,e,n)}));case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t){return function(n){if(!t[n])throw Error('Audio file "'+n+'" was not preloaded');var r=t[n].data;if("then"in r)throw Error('Audio file "'+n+'" did not finish loading before it was used');var i=r.buffer,a=r.playState;return{getPosition:function(){return a?a.isPaused?a.alreadyPlayedTime:e.currentTime-a.startTime:0},play:function(o,s){var c;void 0===s&&(s=!1);var u=e.createBufferSource();u.buffer=i,u.connect(e.destination);var d=null!==(c=null!=o?o:null==a?void 0:a.alreadyPlayedTime)&&void 0!==c?c:0;u.start(void 0,d),u.loop=s,u.onended=function(){var e;if(t[n]){var r=t[n].data;"then"in r||!1!==(null===(e=r.playState)||void 0===e?void 0:e.isPaused)||delete r.playState}},a&&!a.isPaused||(r.playState={startTime:e.currentTime-d,sample:u,alreadyPlayedTime:d,isPaused:!1})},pause:function(){a&&!a.isPaused&&(a.sample.stop(),r.playState=Object.assign({},a,{alreadyPlayedTime:e.currentTime-a.startTime,isPaused:!0}))}}}}function _(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)return!0;return window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches}var ee={name:"sans-serif",size:12};function te(e,t){var n=t||{},r=n.dimensions,i=void 0===r?"game-coords":r,a=n.canvas,o=n.nativeSpriteMap,s=void 0===o?{}:o,c=n.windowSize,u=a||document.createElement("canvas");a||document.body.appendChild(u);var d=window.PointerEvent?"pointerdown":"touchstart",l=window.PointerEvent?"pointermove":"touchmove",p=window.PointerEvent?"pointerup":"touchend",h=window.PointerEvent?"pointercancel":"touchcancel",f=u.getContext("2d",{alpha:!1}),v=new(window.AudioContext||window.webkitAudioContext),g=!0,m=!0,w=0,y=!1,b=0,x=0,E=function(){document.hidden&&m&&(b=w,v.suspend()),document.hidden||m||(y=!0,setTimeout((function(){v.suspend(),setTimeout((function(){v.resume()}),75)}),75)),m=!document.hidden};document.addEventListener("keydown",(function(e){g&&N(e)}),!1),document.addEventListener("keyup",(function(e){g&&A(e)}),!1),document.addEventListener("visibilitychange",E,!1),window.addEventListener("resize",F,!1);var S,j,T,P,M,L,z=function(){return F({didScroll:!0})};window.addEventListener("scroll",z,!1),document.addEventListener("contextmenu",(function(e){e.preventDefault()}));var X={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function F(t){var n=Boolean(t&&"cleanup"in t&&t.cleanup),r=Boolean(t&&"didScroll"in t&&t.didScroll);if(!S||(f.restore(),document.removeEventListener(d,j),document.removeEventListener(l,T),document.removeEventListener(p,P),document.removeEventListener(h,M),!n)){var a=r&&S?S:function(e,t,n,r){var i=K(e,t,n,r);return V=i,i}((null==c?void 0:c.width)||window.innerWidth,(null==c?void 0:c.height)||window.innerHeight,i,e.props.size);u.width=a.deviceWidth,u.height=a.deviceHeight;var o=e.props.defaultFont||ee,s=U(f,a,W,o);L=s.scale,Z.ref=s.render,X.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,r=e.scale,i=e.width;return function(e){return t+r*(e+i/2+n)}}({canvasOffsetLeft:u.offsetLeft,width:a.width,widthMargin:a.widthMargin,scale:L}),X.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,r=e.scale,i=e.height;return function(e){return t-r*(e-i/2-n)}}({canvasOffsetTop:u.offsetTop,height:a.height,heightMargin:a.heightMargin,scale:L}),X.didResize=!0,X.scale=L;var v=function(e){var t=e.canvasOffsetLeft,n=e.scrollX,r=e.widthMargin,i=e.scale,a=e.width;return function(e){return(e.clientX-t+n)/i-r-a/2}}({canvasOffsetLeft:u.offsetLeft,scrollX:window.scrollX,width:a.width,widthMargin:a.widthMargin,scale:L}),m=function(e){var t=e.canvasOffsetTop,n=e.scrollY,r=e.heightMargin,i=e.scale,a=e.height;return function(e){return-(e.clientY-t+n)/i+r+a/2}}({canvasOffsetTop:u.offsetTop,scrollY:window.scrollY,height:a.height,heightMargin:a.heightMargin,scale:L}),w=function(e,t){return e>a.width/2+a.widthMargin||e<-a.width/2-a.widthMargin||t>a.height/2+a.heightMargin||t<-a.height/2-a.heightMargin};j=function(e){if("changedTouches"in e){g=!1;for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],r=v({clientX:n.screenX}),i=m({clientY:n.screenY});w(r,i)||(g=!0,D(r,i,n.identifier))}}else{var a=v(e),o=m(e);w(a,o)?g=!1:(g=!0,D(a,o,e.pointerId))}},T=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],r=v({clientX:n.screenX}),i=m({clientY:n.screenY});w(r,i)||R(r,i)}else{var a=v(e),o=m(e);w(a,o)||R(a,o)}},P=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],r=v({clientX:n.screenX}),i=m({clientY:n.screenY});w(r,i)?H(n.identifier):B(r,i,n.identifier)}else{var a=v(e),o=m(e);w(a,o)?H(e.pointerId):B(a,o,e.pointerId)}},M=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++)H(e.changedTouches[t].identifier);else H(e.pointerId)},document.addEventListener(d,j,!1),document.addEventListener(l,T,!1),document.addEventListener(p,P,!1),document.addEventListener(h,M,!1),S=a}}var Y={},W={},J=function(e,t){return function(){throw Error("Failed to load "+e+' file "'+t+'"')}},q={audioElements:Y,imageElements:W,loadAudioFile:function(e){return function(e,t){return Q.apply(this,arguments)}(v,e).then((function(e){return{buffer:e}})).catch(J("audio",e))},loadImageFile:function(e){return new Promise((function(t,n){var r=new Image;r.addEventListener("load",(function(){t(r)})),r.addEventListener("error",n),r.src=e})).catch(J("image",e))},cleanupAudioFile:function(e){var t=Y[e].data;!("then"in t)&&t.playState&&(t.playState.sample.onended=null,t.playState.sample.disconnect(),t.playState.sample.buffer=null)},cleanupImageFile:function(){return null}},$={getGetDevice:ne(v,K((null==c?void 0:c.width)||window.innerWidth,(null==c?void 0:c.height)||window.innerHeight,i,e.props.size),q)},Z={ref:null};F();var _=!1,te=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener(d,e,!1),"suspended"===v.state&&v.resume(),v.onstatechange=function(){"suspended"!==v.state||document.hidden||v.resume()}};document.addEventListener("keydown",te,!1),document.addEventListener(d,te,!1);var re=function(e,t,n,r){var i=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),o=a(i),s=I(n,a(i),0,n.props.id),c=r||n.props.size,u=C(o.size,c),d=0,l=0,p=O(s,n.props,a,i,!0,u,0,1,n.props.id,t);return{initTextures:p,getNextFrameTextures:function(r,a){var o=r-d;for(d=r,l+=o;l>=k;){var u=(l-=k)/k,h=e.getGetDevice(),f=C(h(i).size,c);p=O(s,n.props,h,i,!1,f,u,1,n.props.id,t),a()}return p}}}($,{nativeSpriteMap:s,nativeSpriteUtils:X},e),ie=re.initTextures,ae=re.getNextFrameTextures,oe=null;return function e(t){var n;null===(n=Z.ref)||void 0===n||n.call(Z,t),window.requestAnimationFrame((function(t){_||(null===oe&&(oe=t-1/60),y&&(y=!1,x+=t-b),w=t,e(ae(t-oe-x,G)))}))}(ie),{cleanup:function(){u.width=u.width,a||document.body.removeChild(u),_=!0,document.removeEventListener("keydown",N,!1),document.removeEventListener("keyup",A,!1),document.removeEventListener("visibilitychange",E,!1),window.removeEventListener("resize",F,!1),window.removeEventListener("scroll",z,!1),F({cleanup:!0})},audioElements:Y,imageElements:W,audioContext:v}}function ne(e,t,n){var r,i={isTouchScreen:_(),log:console.log,random:Math.random,timer:(r={},{start:function(e,t){var n=window.setTimeout((function(){delete r[i],e()}),t),i=String(n);return r[i]={timeoutId:n,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},i},pause:function(e){var t=r[e];if(t&&!t.isPaused){var n=Date.now()-t.timeStartedMs;t.timeRemainingMs-=n,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=r[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var n=window.setTimeout((function(){delete r[e],t.callback()}),t.timeRemainingMs);t.timeoutId=n}},cancel:function(e){var t=r[e];t&&(window.clearTimeout(t.timeoutId),delete r[e])}}),audio:Z(e,n.audioElements),assetUtils:n,network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var r=localStorage.key(n);r&&(t[r]=null!==(e=localStorage.getItem(r))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign({},i,{size:V||t,now:function(){return new Date}});return function(t){return Object.assign({},e,{inputs:Y(t)})}}}function re(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(null),n=t[0],i=t[1],a=function(){i(e.current.getBoundingClientRect())};Object(r.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(r.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(r.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),s=o[0],c=o[1],u=Object(r.useState)(0),d=u[0],l=u[1],p=0,h=0,f=0;if(s&&s.height&&s.width){s.width/s.height>375/667?(h=s.height*(667/900),p=h*(375/667)):(p=s.width*(375/460),h=p/(375/667));var v=n.size.maxHeightMargin?0:.08*h;f=(s.height-h)/2+v}return Object(r.useEffect)((function(){if(p&&h){var e=document.getElementById("myCanvas"),r=te(t(n),{dimensions:"scale-up",canvas:e,windowSize:{width:p,height:h}}).cleanup;return function(){r()}}}),[p,h,d]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:c,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},i.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&i.a.createElement("img",{className:g.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return l((function(e){return e+1}))}}),i.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:f},width:p,height:h}))}function ie(e){var t=e.part,n=e.MDXContent,r=e.codesTs,c=e.codesJs,u=e.Game,d=e.gameProps,l=e.image,p=e.isEnd,h=r&&c,f=u&&d?i.a.createElement(s.a,{fallback:i.a.createElement("div",null,"Preview")},(function(){return i.a.createElement(re,{Game:u,gameProps:d,showReload:h})})):i.a.createElement("div",null,i.a.createElement("img",{src:l}));return i.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},i.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},i.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},i.a.createElement(n,null),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?i.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):i.a.createElement("div",null),p?i.a.createElement("div",null):i.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),h?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},i.a.createElement(m,{codesTs:r,codesJs:c})),i.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},f)):i.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},f)))}},158:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}n.d(t,"a",(function(){return i}))},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(142),i=n(158),a=Object(r.a)({render:function(){return[r.b.image({testId:"bird",fileName:"/img/bird.png",width:50,height:40})]}}),o=Object(r.a)({render:function(e){var t=e.props,n=s(e.device.size,t.pipe.gapY),i=n.yUpperTop,a=n.yUpperBottom,o=n.yLowerTop,c=n.yLowerBottom;return[r.b.rectangle({color:"green",width:40,height:i-a,y:(i+a)/2}),r.b.rectangle({color:"green",width:40,height:o-c,y:(o+c)/2})]}});function s(e,t){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:t+85,yLowerTop:t-85,yLowerBottom:-e.height/2-e.heightMargin}}var c=Object(r.a)({init:function(e){var t=e.device;return{birdY:10,birdGravity:-12,pipes:e.props.paused?[]:[u(t)],score:0}},loop:function(e){var t=e.props,n=e.state,r=e.device;if(t.paused)return n;var a=r.inputs,o=n.birdGravity,c=n.birdY,l=n.pipes,p=n.score;return c-=o+=.8,(a.pointer.justPressed||a.keysJustPressed[" "])&&(o=-12),l[l.length-1].x<140&&(l=[].concat(l,[u(r)]).filter((function(e){return e.x>-(r.size.width+r.size.widthMargin+40)}))),function(e,t,n){if(e-20<-(t.height/2+t.heightMargin)||e+20>t.height/2+t.heightMargin)return!0;for(var r,a=function(){var n=r.value;if(n.x>45||n.x<-45)return"continue";var i=s(t,n.gapY),a=i.yUpperTop,o=i.yUpperBottom,c=i.yLowerTop,u=i.yLowerBottom,l={x:n.x,y:(a+o)/2,width:40,height:a-o},p={x:n.x,y:(c+u)/2,width:40,height:c-u};return[{x:25,y:e+20},{x:25,y:e-20},{x:0,y:e+20},{x:0,y:e-20},{x:-25,y:e+20},{x:-25,y:e-20}].some((function(e){return d(e,l)||d(e,p)}))?{v:!0}:void 0},o=Object(i.a)(n);!(r=o()).done;){var c=a();if("continue"!==c&&"object"==typeof c)return c.v}return!1}(c,r.size,l)&&(r.audio("/audio/boop.wav").play(),t.gameOver(n.score)),{birdGravity:o,birdY:c,pipes:l=l.map((function(e){var t=e.passed;return!t&&e.x<-45&&(t=!0,p++),Object.assign({},e,{passed:t,x:e.x-2})})),score:p}},render:function(e){var t=e.state,n=e.device,i=n.size;return[r.b.rectangle({color:"#add8e6",width:i.width+2*i.widthMargin,height:i.height+2*i.heightMargin}),a({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})].concat(t.pipes.map((function(e,t){return o({id:"pipe-"+t,pipe:e,x:e.x})})),[r.b.text({text:"Score: "+t.score,color:"white",x:-n.size.width/2+10,y:n.size.height/2+n.size.heightMargin-80,align:"left"})])}});function u(e){var t=(e.size.height+2*e.size.heightMargin-340)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}function d(e,t){return e.x>t.x-t.width/2&&e.x<t.x+t.width/2&&e.y>t.y-t.height/2&&e.y<t.y+t.height/2}var l=Object(r.a)({render:function(e){var t=e.props,n=e.device,i=n.inputs;return(i.pointer.justReleased||i.keysJustPressed[" "])&&t.start(),[r.b.text({text:n.isTouchScreen?"Tap to Start":"Click or Space Bar to Start",color:"white",y:100}),r.b.text({text:"High score: "+t.highScore,font:{name:"Courier",size:24},color:"white",y:150})]}}),p=Object(r.a)({init:function(e){var t=e.device,n=e.preloadFiles,r=e.updateState;n({imageFileNames:["/img/bird.png"],audioFileNames:["/audio/boop.wav"]}).then((function(){r((function(e){return Object.assign({},e,{view:"menu"})}))}));var i=t.storage.getStore();return{view:"loading",attempt:0,highScore:Number(i.highScore||"0")}},render:function(e){var t=e.state,n=e.updateState,i=e.device;if("loading"===t.view)return[r.b.text({color:"black",text:"Loading..."})];var a="menu"===t.view;return[c({id:"level-"+t.attempt,paused:a,gameOver:function(e){n((function(t){var n=t.highScore;return e>n&&(n=e,i.storage.setStore({highScore:String(n)})),Object.assign({},t,{view:"menu",highScore:n})}))}}),a?l({id:"menu",highScore:t.highScore,start:function(){n((function(e){return Object.assign({},e,{view:"level",attempt:e.attempt+1})}))}}):null]}}),h={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}}},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),i=n(6),a=(n(0),n(141)),o={},s={unversionedId:"tutorial/23",id:"tutorial/23",isDocsHomePage:!1,title:"23",description:"23 - The End",source:"@site/docs/tutorial/23.md",permalink:"/docs/tutorial/23",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/23.md"},c=[],u={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"23---the-end"},"23 - The End"),Object(a.b)("p",null,"That's it! Congratulations on making it to the end. From Sprites to storage, we've covered most of the building blocks you need to build your own game using Replay."),Object(a.b)("p",null,"You can see the full source code for Replay Bird ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/edbentley/replay-bird"}),"on GitHub"),"."),Object(a.b)("p",null,"For a more thorough reference, head over to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/sprites"}),"API docs"),". Good luck!"))}d.isMDXComponent=!0},93:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(146),o=n(162),s=n(52);t.default=function(){return i.a.createElement(a.a,{part:23,MDXContent:s.default,Game:o.a,gameProps:o.b,isEnd:!0})}}}]);