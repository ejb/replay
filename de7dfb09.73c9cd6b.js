(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{124:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(146),o=n(142),s=Object(o.a)({render:function(){return[o.b.rectangle({width:50,height:40,color:"yellow"})]}}),c=Object(o.a)({init:function(){return{birdY:10,birdGravity:-12}},render:function(e){var t=e.state;return[s({id:"bird",x:0,y:t.birdY})]}}),l=Object(o.a)({render:function(){return[c({id:"level"})]}}),d={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},u=n(69);t.default=function(){return r.a.createElement(a.a,{part:6,MDXContent:u.default,codesTs:[{file:"level.ts",code:'import { makeSprite } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird } from "./bird";\n\nconst birdX = 0;\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n};\n\nexport const Level = makeSprite<{}, LevelState, WebInputs | iOSInputs>({\n  init() {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n    };\n  },\n\n  render({ state }) {\n    return [\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n      }),\n    ];\n  },\n});\n'},{file:"index.ts",code:'import { makeSprite, GameProps } from "@replay/core";\nimport { Level } from "./level";\n\nexport const Game = makeSprite<GameProps>({\n  render() {\n    return [\n      Level({\n        id: "level",\n      }),\n    ];\n  },\n});\n\nexport const gameProps: GameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[2,7,8,9]}],codesJs:[{file:"level.js",code:'import { makeSprite } from "@replay/core";\nimport { Bird } from "./bird";\n\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init() {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n    };\n  },\n\n  render({ state }) {\n    return [\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n      }),\n    ];\n  },\n});\n'},{file:"index.js",code:'import { makeSprite } from "@replay/core";\nimport { Level } from "./level";\n\nexport const Game = makeSprite({\n  render() {\n    return [\n      Level({\n        id: "level",\n      }),\n    ];\n  },\n});\n\nexport const gameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[2,7,8,9]}],Game:l,gameProps:d})}},142:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(145),r={text:function(e){return{type:"text",props:Object.assign({testId:e.testId},Object(i.a)(e),{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign({testId:e.testId},Object(i.a)(e),{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign({testId:e.testId},Object(i.a)(e),{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign({testId:e.testId},Object(i.a)(e),{color:e.color,fillColor:e.fillColor,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,lineCap:e.lineCap||"butt",path:e.path})}},image:function(e){return{type:"image",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},145:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return i}))},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return re}));var i=n(0),r=n.n(i),a=n(150),o=n(147),s=n(155),c=n(2),l=n(153),d=n(152),u=n(148),p=n(149),h=n(151),f=n.n(h),m=n(48),v=n.n(m);function g(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(u.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(p.a,{value:"js"},r.a.createElement(w,{lang:"js",codes:n})),r.a.createElement(p.a,{value:"ts"},r.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(i.useState)(a[0]),s=o[0],c=o[1],l=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return r.a.createElement("button",{className:v.a.fileButton+(s===e?" "+v.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),r.a.createElement(b,{key:l.file,lang:t,code:l.code,highlight:l.highlight}))}function b(e){var t=e.lang,n=e.code,i=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(l.a,Object(c.a)({},l.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:v.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:f()(t,v.a.codeBlock)},r.a.createElement("div",{className:v.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}var y=n(143),E=n.n(y),x=n(144);function S(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(x.a)(E.a.mark((function e(t,n,i){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([].concat(P(t,n.audioFileNames||[],i.audioElements,i.loadAudioFile),P(t,n.imageFileNames||[],i.imageElements,i.loadImageFile)));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t,n,i){return t.map((function(t){if(n[t]){n[t].globalSpriteIds.add(e);var r=n[t].data;return"then"in r?r:Promise.resolve()}var a=i(t).then((function(e){n[t].data=e}));return n[t]={globalSpriteIds:new Set([e]),data:a},a}))}function O(e,t,n){for(var i in t){var r=t[i].globalSpriteIds;r.has(e)&&(1===r.size?(n(i),delete t[i]):t[i].globalSpriteIds.delete(e))}}var T=n(145);function C(e,t,n,i,r,a,o,s,c,l){var d=Object(T.a)(t);d.opacity*=s;var u=l.nativeSpriteMap,p=l.nativeSpriteUtils,h=function(e){var t=i(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var i=t.x,r=t.y,a=i-e.x,o=r-e.y,s=a*Math.cos(n)+o*Math.sin(n),c=-a*Math.sin(n)+o*Math.cos(n),l=s/e.scaleX,d=c/e.scaleY;return{x:l+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(h),m=e.getSprites(t,f,r,a,o),v=new Set(e.prevChildIds),g=[];if(v.size<e.prevChildIds.length){var w=e.prevChildIds.find((function(t,n){return e.prevChildIds.indexOf(t)!==n}));throw Error("Duplicate Sprite id "+w)}var b=m.map((function(t){if(!t)return t;if("native"===t.type){g.push(t.props.id),v.delete(t.props.id);var i=u[t.name];if(!i)throw Error('Cannot find Native Sprite "'+t.name+'"');var r=e.childContainers[t.props.id];if(!r||"native"!==r.type){var s={type:"native",state:i.create({props:t.props,parentGlobalId:c,getState:function(){return s.state},updateState:function(e){s.state=Object.assign({},s.state,e)},utils:p}),cleanup:i.cleanup};e.childContainers[t.props.id]=s,r=s}return r.state=i.loop({props:t.props,state:r.state,parentGlobalId:c,utils:p}),null}if("pure"===t.type){g.push(t.props.id),v.delete(t.props.id);var m=e.childContainers[t.props.id];return m&&"pure"===m.type||(m=L(t),e.childContainers[t.props.id]=m),function e(t,n,i,r,a,o){var s=Object(T.a)(n);s.opacity*=o;var c=t.getSprites(n,i,r,a);if("cachedTextures"===c.type)return{id:n.id,baseProps:s,textures:c.textures};var l=c.sprites,d=new Set(t.prevChildIds),u=[],p=l.map((function(n){if(!n)return n;if("pure"===n.type){u.push(n.props.id),d.delete(n.props.id);var o=t.childContainers[n.props.id];return o&&"pure"===o.type||(o=L(n),t.childContainers[n.props.id]=o),e(o,n.props,i,r,a,s.opacity)}return n})).filter(X);return d.forEach((function(e){delete t.childContainers[e]})),t.cache=p,t.prevChildIds=u,{id:n.id,baseProps:s,textures:p}}(m,t.props,f.size,p.didResize,a,d.opacity)}if("custom"===t.type){g.push(t.props.id),v.delete(t.props.id);var w=!1,b=e.childContainers[t.props.id],y=c+"--"+t.props.id;return b&&"custom"===b.type||(w=!0,b=M(t,f,e.prevTime,y),e.childContainers[t.props.id]=b),C(b,t.props,n,h,w,a,o,d.opacity,y,l)}return t})).filter(X);return p.didResize=!1,v.forEach((function(t){var n,i=e.childContainers[t];!function e(t,n){Object.entries(t).forEach((function(t){var i=t[0],r=t[1];if("custom"===r.type){var a=n+"--"+i;e(r.childContainers,a),r.loadFilesPromise&&r.loadFilesPromise.then((function(){var e,t;e=a,t=f.assetUtils,O(e,t.audioElements,t.cleanupAudioFile),O(e,t.imageElements,t.cleanupImageFile)}))}else"native"===r.type&&r.cleanup({state:r.state,parentGlobalId:c})}))}((n={},n[t]=i,n),c),delete e.childContainers[t]})),e.prevChildIds=g,{id:t.id,baseProps:d,textures:b}}var k=1/60*1e3;function M(e,t,n,i){var r,a,o=e.spriteObj,s=e.props,c=[],l=function(e){c.push(e)},d=null,u=null;return o.init&&(r=o.init({props:s,getState:function(){if(!d)throw Error("Cannot call getState synchronously in init");return d.state},device:t,updateState:l,preloadFiles:(a=Object(x.a)(E.a.mark((function e(n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=S(i,n,t.assetUtils),d?d.loadFilesPromise=r:u=r,e.next=4,r;case 4:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})})),d={type:"custom",state:r,childContainers:{},prevChildIds:[],prevTime:n,currentLag:0,loadFilesPromise:u,getSprites:function(e,t,n,i,r){var a=this,s=function(){a.state=c.reduce((function(e,t){return t(e)}),a.state),c.length=0};s(),!n&&o.loop&&(this.state=o.loop({props:e,state:this.state,device:t,updateState:l})),s();var d=o[i];d||(d="renderPXL"===i&&o.renderXL?o.renderXL:o.render);var u=d({props:e,state:this.state,device:t,updateState:l,extrapolateFactor:r});return s(),u}}}function I(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function L(e){var t=e.spriteObj;return{type:"pure",childContainers:{},prevChildIds:[],getSprites:function(e,n,i,r){var a=t[r];return a||(a="renderPXL"===r&&t.renderXL?t.renderXL:t.render),this.prevProps&&this.cache&&!t.shouldRerender(this.prevProps,e)&&!i?(this.prevProps=e,{type:"cachedTextures",textures:this.cache}):(this.prevProps=e,{type:"pureSprites",sprites:a({props:e,size:n})})}}}function X(e){return null!=e}var N={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,numberPressed:0,justPressed:!1,justReleased:!1,x:0,y:0}},z=[];function Y(e){return function(e,t){var n=e(t.pointer);return Object.assign({},t,{pointer:Object.assign({},t.pointer,{x:n.x,y:n.y})})}(e,N)}function F(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),N.keysDown[e.key]=!0,N.keysJustPressed[e.key]=!0}function D(e){delete N.keysDown[e.key]}function G(e,t,n){z.includes(n)||(z=[].concat(z,[n])),N.pointer.pressed=!0,N.pointer.numberPressed=z.length,N.pointer.justPressed=!0,N.pointer.x=e,N.pointer.y=t}function H(e,t){N.pointer.x=e,N.pointer.y=t}function R(e,t,n){0===(z=z.filter((function(e){return e!==n}))).length&&(N.pointer.justPressed=!1,N.pointer.pressed=!1),N.pointer.numberPressed=z.length,N.pointer.justReleased=!0,N.pointer.x=e,N.pointer.y=t}function A(e){z=z.filter((function(t){return t!==e})),N.pointer.numberPressed=z.length,0===z.length&&(N.pointer.justPressed=!1,N.pointer.pressed=!1)}function B(){N={keysDown:N.keysDown,keysJustPressed:{},pointer:Object.assign({},N.pointer,{justPressed:!1,justReleased:!1})}}function W(e,t,n,i){var r=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,c=t.deviceWidth,l=t.deviceHeight;e.save();var d=Math.min(c/r,l/a),u=r+2*o,p=a+2*s;return e.translate(c/2,l/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-c/2/d,-l/2/d,c/d,l/d),e.fillStyle="white",e.fillRect(-u/2,-p/2,u,p),function e(t,n,i,r){var a=t.baseProps,o=t.textures;n.save(),q(n,a),o.forEach((function(t){if("type"in t){var o=K(n);return n.save(),q(n,t.props,a.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color,e.props.fillColor,e.props.lineCap),0;case"image":return t.image(J(n,e.props.fileName),e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(J(n,e.props.fileName),e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var J=function(e,t){var n=e[t];if(!n)throw Error('Image file "'+t+'" was not preloaded');if("then"in n.data)throw Error('Image file "'+t+'" did not finish loading before it was used');return n.data},U=Math.PI/180,q=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,c=t.anchorX,l=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(a*U),e.scale(o,s),e.translate(-c,l),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,i=n[0],r=i[0],a=i[1],o=n.slice(1);return e.beginPath(),e.moveTo(r,-a),o.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var V,K=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i,r,a){if(!(t.length<2)){var o=t[0],s=o[0],c=o[1],l=t.slice(1);e.beginPath(),e.moveTo(s,-c),l.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),r&&(e.fillStyle=r,e.fill()),i&&(e.strokeStyle=i,e.lineWidth=n,e.lineCap=a,e.stroke())}},text:function(t,n,i,r){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,a,o){var s=t.width/n,c=t.height/i,l=r%n,d=Math.floor(r/n)%i;e.drawImage(t,l*s,d*c,s,c,-a/2,-o/2,a,o)}}};function Q(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var a=r,o=a.width,s=a.height,c=a.maxWidthMargin,l=void 0===c?0:c,d=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var u=o/s;if(u>e/t){var p=e,h=p/u,f=h/s*(void 0===d?0:d),m=Math.min(t,h+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(m-h)/2*(s/h),deviceWidth:p,deviceHeight:m}}var v=t,g=v*u,w=g/o*l,b=Math.min(e,g+2*w);return{width:o,height:s,widthMargin:(b-g)/2*(o/g),heightMargin:0,deviceWidth:b,deviceHeight:v}}function Z(){return(Z=Object(x.a)(E.a.mark((function e(t,n){var i,r,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return i=e.sent,e.next=5,i.arrayBuffer();case 5:return r=e.sent,e.next=8,new Promise((function(e,n){t.decodeAudioData(r,e,n)}));case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t){return function(n){if(!t[n])throw Error('Audio file "'+n+'" was not preloaded');var i=t[n].data;if("then"in i)throw Error('Audio file "'+n+'" did not finish loading before it was used');var r=i.buffer,a=i.playState;return{getPosition:function(){return a?a.isPaused?a.alreadyPlayedTime:e.currentTime-a.startTime:0},play:function(o,s){var c;void 0===s&&(s=!1);var l=e.createBufferSource();l.buffer=r,l.connect(e.destination);var d=null!==(c=null!=o?o:null==a?void 0:a.alreadyPlayedTime)&&void 0!==c?c:0;l.start(void 0,d),l.loop=s,l.onended=function(){var e;if(t[n]){var i=t[n].data;"then"in i||!1!==(null===(e=i.playState)||void 0===e?void 0:e.isPaused)||delete i.playState}},a&&!a.isPaused||(i.playState={startTime:e.currentTime-d,sample:l,alreadyPlayedTime:d,isPaused:!1})},pause:function(){a&&!a.isPaused&&(a.sample.stop(),i.playState=Object.assign({},a,{alreadyPlayedTime:e.currentTime-a.startTime,isPaused:!0}))}}}}function _(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)return!0;return window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches}var ee={name:"sans-serif",size:12};function te(e,t){var n=t||{},i=n.dimensions,r=void 0===i?"game-coords":i,a=n.canvas,o=n.nativeSpriteMap,s=void 0===o?{}:o,c=n.windowSize,l=a||document.createElement("canvas");a||document.body.appendChild(l);var d=window.PointerEvent?"pointerdown":"touchstart",u=window.PointerEvent?"pointermove":"touchmove",p=window.PointerEvent?"pointerup":"touchend",h=window.PointerEvent?"pointercancel":"touchcancel",f=l.getContext("2d",{alpha:!1}),m=new(window.AudioContext||window.webkitAudioContext),v=!0,g=!0,w=0,b=!1,y=0,E=0,x=function(){document.hidden&&g&&(y=w,m.suspend()),document.hidden||g||(b=!0,setTimeout((function(){m.suspend(),setTimeout((function(){m.resume()}),75)}),75)),g=!document.hidden};document.addEventListener("keydown",(function(e){v&&F(e)}),!1),document.addEventListener("keyup",(function(e){v&&D(e)}),!1),document.addEventListener("visibilitychange",x,!1),window.addEventListener("resize",z,!1);var S,j,P,O,T,L,X=function(){return z({didScroll:!0})};window.addEventListener("scroll",X,!1),document.addEventListener("contextmenu",(function(e){e.preventDefault()}));var N={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function z(t){var n=Boolean(t&&"cleanup"in t&&t.cleanup),i=Boolean(t&&"didScroll"in t&&t.didScroll);if(!S||(f.restore(),document.removeEventListener(d,j),document.removeEventListener(u,P),document.removeEventListener(p,O),document.removeEventListener(h,T),!n)){var a=i&&S?S:function(e,t,n,i){var r=Q(e,t,n,i);return V=r,r}((null==c?void 0:c.width)||window.innerWidth,(null==c?void 0:c.height)||window.innerHeight,r,e.props.size);l.width=a.deviceWidth,l.height=a.deviceHeight;var o=e.props.defaultFont||ee,s=W(f,a,J,o);L=s.scale,$.ref=s.render,N.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return t+i*(e+r/2+n)}}({canvasOffsetLeft:l.offsetLeft,width:a.width,widthMargin:a.widthMargin,scale:L}),N.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return t-i*(e-r/2-n)}}({canvasOffsetTop:l.offsetTop,height:a.height,heightMargin:a.heightMargin,scale:L}),N.didResize=!0,N.scale=L;var m=function(e){var t=e.canvasOffsetLeft,n=e.scrollX,i=e.widthMargin,r=e.scale,a=e.width;return function(e){return(e.clientX-t+n)/r-i-a/2}}({canvasOffsetLeft:l.offsetLeft,scrollX:window.scrollX,width:a.width,widthMargin:a.widthMargin,scale:L}),g=function(e){var t=e.canvasOffsetTop,n=e.scrollY,i=e.heightMargin,r=e.scale,a=e.height;return function(e){return-(e.clientY-t+n)/r+i+a/2}}({canvasOffsetTop:l.offsetTop,scrollY:window.scrollY,height:a.height,heightMargin:a.heightMargin,scale:L}),w=function(e,t){return e>a.width/2+a.widthMargin||e<-a.width/2-a.widthMargin||t>a.height/2+a.heightMargin||t<-a.height/2-a.heightMargin};j=function(e){if("changedTouches"in e){v=!1;for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],i=m({clientX:n.screenX}),r=g({clientY:n.screenY});w(i,r)||(v=!0,G(i,r,n.identifier))}}else{var a=m(e),o=g(e);w(a,o)?v=!1:(v=!0,G(a,o,e.pointerId))}},P=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],i=m({clientX:n.screenX}),r=g({clientY:n.screenY});w(i,r)||H(i,r)}else{var a=m(e),o=g(e);w(a,o)||H(a,o)}},O=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],i=m({clientX:n.screenX}),r=g({clientY:n.screenY});w(i,r)?A(n.identifier):R(i,r,n.identifier)}else{var a=m(e),o=g(e);w(a,o)?A(e.pointerId):R(a,o,e.pointerId)}},T=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++)A(e.changedTouches[t].identifier);else A(e.pointerId)},document.addEventListener(d,j,!1),document.addEventListener(u,P,!1),document.addEventListener(p,O,!1),document.addEventListener(h,T,!1),S=a}}var Y={},J={},U=function(e,t){return function(){throw Error("Failed to load "+e+' file "'+t+'"')}},q={audioElements:Y,imageElements:J,loadAudioFile:function(e){return function(e,t){return Z.apply(this,arguments)}(m,e).then((function(e){return{buffer:e}})).catch(U("audio",e))},loadImageFile:function(e){return new Promise((function(t,n){var i=new Image;i.addEventListener("load",(function(){t(i)})),i.addEventListener("error",n),i.src=e})).catch(U("image",e))},cleanupAudioFile:function(e){var t=Y[e].data;!("then"in t)&&t.playState&&(t.playState.sample.onended=null,t.playState.sample.disconnect(),t.playState.sample.buffer=null)},cleanupImageFile:function(){return null}},K={getGetDevice:ne(m,Q((null==c?void 0:c.width)||window.innerWidth,(null==c?void 0:c.height)||window.innerHeight,r,e.props.size),q)},$={ref:null};z();var _=!1,te=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener(d,e,!1),"suspended"===m.state&&m.resume(),m.onstatechange=function(){"suspended"!==m.state||document.hidden||m.resume()}};document.addEventListener("keydown",te,!1),document.addEventListener(d,te,!1);var ie=function(e,t,n,i){var r=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),o=a(r),s=M(n,a(r),0,n.props.id),c=i||n.props.size,l=I(o.size,c),d=0,u=0,p=C(s,n.props,a,r,!0,l,0,1,n.props.id,t);return{initTextures:p,getNextFrameTextures:function(i,a){var o=i-d;for(d=i,u+=o;u>=k;){var l=(u-=k)/k,h=e.getGetDevice(),f=I(h(r).size,c);p=C(s,n.props,h,r,!1,f,l,1,n.props.id,t),a()}return p}}}(K,{nativeSpriteMap:s,nativeSpriteUtils:N},e),re=ie.initTextures,ae=ie.getNextFrameTextures,oe=null;return function e(t){var n;null===(n=$.ref)||void 0===n||n.call($,t),window.requestAnimationFrame((function(t){_||(null===oe&&(oe=t-1/60),b&&(b=!1,E+=t-y),w=t,e(ae(t-oe-E,B)))}))}(re),{cleanup:function(){l.width=l.width,a||document.body.removeChild(l),_=!0,document.removeEventListener("keydown",F,!1),document.removeEventListener("keyup",D,!1),document.removeEventListener("visibilitychange",x,!1),window.removeEventListener("resize",z,!1),window.removeEventListener("scroll",X,!1),z({cleanup:!0})},audioElements:Y,imageElements:J,audioContext:m}}function ne(e,t,n){var i,r={isTouchScreen:_(),log:console.log,random:Math.random,timer:(i={},{start:function(e,t){var n=window.setTimeout((function(){delete i[r],e()}),t),r=String(n);return i[r]={timeoutId:n,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},r},pause:function(e){var t=i[e];if(t&&!t.isPaused){var n=Date.now()-t.timeStartedMs;t.timeRemainingMs-=n,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=i[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var n=window.setTimeout((function(){delete i[e],t.callback()}),t.timeRemainingMs);t.timeoutId=n}},cancel:function(e){var t=i[e];t&&(window.clearTimeout(t.timeoutId),delete i[e])}}),audio:$(e,n.audioElements),assetUtils:n,network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign({},r,{size:V||t,now:function(){return new Date}});return function(t){return Object.assign({},e,{inputs:Y(t)})}}}function ie(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],a=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(i.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),s=o[0],c=o[1],l=Object(i.useState)(0),d=l[0],u=l[1],p=0,h=0,f=0;if(s&&s.height&&s.width){s.width/s.height>375/667?(h=s.height*(667/900),p=h*(375/667)):(p=s.width*(375/460),h=p/(375/667));var m=n.size.maxHeightMargin?0:.08*h;f=(s.height-h)/2+m}return Object(i.useEffect)((function(){if(p&&h){var e=document.getElementById("myCanvas"),i=te(t(n),{dimensions:"scale-up",canvas:e,windowSize:{width:p,height:h}}).cleanup;return function(){i()}}}),[p,h,d]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:c,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&r.a.createElement("img",{className:v.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return u((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:f},width:p,height:h}))}function re(e){var t=e.part,n=e.MDXContent,i=e.codesTs,c=e.codesJs,l=e.Game,d=e.gameProps,u=e.image,p=e.isEnd,h=i&&c,f=l&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(ie,{Game:l,gameProps:d,showReload:h})})):r.a.createElement("div",null,r.a.createElement("img",{src:u}));return r.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),p?r.a.createElement("div",null):r.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),h?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(g,{codesTs:i,codesJs:c})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},f)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},f)))}},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(141)),o={},s={unversionedId:"tutorial/6",id:"tutorial/6",isDocsHomePage:!1,title:"6",description:"6 - State",source:"@site/docs/tutorial/6.md",permalink:"/docs/tutorial/6",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/6.md"},c=[],l={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"6---state"},"6 - State"),Object(a.b)("p",null,"Our game isn't very interesting right now, we need the bird to move! To do this we'll create a Sprite with ",Object(a.b)("em",{parentName:"p"},"state"),"."),Object(a.b)("p",null,"In a new file ",Object(a.b)("inlineCode",{parentName:"p"},"level")," let's add a Sprite called ",Object(a.b)("inlineCode",{parentName:"p"},"Level"),", which will hold most of our game logic."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite has an ",Object(a.b)("inlineCode",{parentName:"p"},"init")," method which returns our initial state. We then access our ",Object(a.b)("inlineCode",{parentName:"p"},"state")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"render")," method."),Object(a.b)("p",null,"To set the bird's position, we can add an ",Object(a.b)("inlineCode",{parentName:"p"},"x")," and ",Object(a.b)("inlineCode",{parentName:"p"},"y")," coordinate ",Object(a.b)("inlineCode",{parentName:"p"},"prop")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"Bird")," Sprite. All Sprites (including Textures) take an ",Object(a.b)("inlineCode",{parentName:"p"},"x")," and ",Object(a.b)("inlineCode",{parentName:"p"},"y")," prop."),Object(a.b)("p",null,"In our top-level ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," Sprite we should also import the ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite instead of the ",Object(a.b)("inlineCode",{parentName:"p"},"Bird")," Sprite."))}d.isMDXComponent=!0}}]);