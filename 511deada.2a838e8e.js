(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{117:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(146),o=n(142),s=Object(o.a)({render:function(){return[o.b.rectangle({width:50,height:40,color:"yellow"})]}}),p=Object(o.a)({render:function(e){var t=e.props,n=function(e,t){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:t+85,yLowerTop:t-85,yLowerBottom:-e.height/2-e.heightMargin}}(e.device.size,t.pipe.gapY),i=n.yUpperTop,r=n.yUpperBottom,a=n.yLowerTop,s=n.yLowerBottom;return[o.b.rectangle({color:"green",width:40,height:i-r,y:(i+r)/2}),o.b.rectangle({color:"green",width:40,height:a-s,y:(a+s)/2})]}});var c=Object(o.a)({init:function(e){return{birdY:10,birdGravity:-12,pipes:[d(e.device)]}},loop:function(e){var t=e.props,n=e.state,i=e.device;if(t.paused)return n;var r=i.inputs,a=n.birdGravity,o=n.birdY,s=n.pipes;return o-=a+=.8,(r.pointer.justPressed||r.keysJustPressed[" "])&&(a=-12),s[s.length-1].x<140&&(s=[].concat(s,[d(i)]).filter((function(e){return e.x>-(i.size.width+i.size.widthMargin+40)}))),{birdGravity:a,birdY:o,pipes:s=s.map((function(e){var t=e.passed;return!t&&e.x<-45&&(t=!0),Object.assign({},e,{passed:t,x:e.x-2})}))}},render:function(e){var t=e.state,n=e.device.size;return[o.b.rectangle({color:"#add8e6",width:n.width+2*n.widthMargin,height:n.height+2*n.heightMargin}),s({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})].concat(t.pipes.map((function(e,t){return p({id:"pipe-"+t,pipe:e,x:e.x})})))}});function d(e){var t=(e.size.height+2*e.size.heightMargin-340)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}var l=Object(o.a)({render:function(e){var t=e.props,n=e.device,i=n.inputs;return(i.pointer.justReleased||i.keysJustPressed[" "])&&t.start(),[o.b.text({text:n.isTouchScreen?"Tap to Start":"Click or Space Bar to Start",color:"white",y:100})]}}),u=Object(o.a)({init:function(){return{view:"menu"}},render:function(e){var t=e.state,n=e.updateState,i="menu"===t.view;return[c({id:"level",paused:i}),i?l({id:"menu",start:function(){n((function(e){return Object.assign({},e,{view:"level"})}))}}):null]}}),h={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},f=n(59);t.default=function(){return r.a.createElement(a.a,{part:14,MDXContent:f.default,codesTs:[{file:"pipe.ts",code:'import { makeSprite, t, DeviceSize } from "@replay/core";\n\nexport type PipeT = {\n  x: number;\n  gapY: number;\n  passed: boolean;\n};\n\nexport const pipeWidth = 40;\nexport const pipeGap = 170;\n\ntype PipeProps = {\n  pipe: PipeT;\n};\n\nexport const Pipe = makeSprite<PipeProps>({\n  render({ props, device }) {\n    const { size } = device;\n    const { pipe } = props;\n\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n\n    return [\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yUpperTop - yUpperBottom,\n        y: (yUpperTop + yUpperBottom) / 2,\n      }),\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yLowerTop - yLowerBottom,\n        y: (yLowerTop + yLowerBottom) / 2,\n      }),\n    ];\n  },\n});\n\nexport function getPipeYPositions(size: DeviceSize, gapY: number) {\n  return {\n    yUpperTop: size.height / 2 + size.heightMargin,\n    yUpperBottom: gapY + pipeGap / 2,\n    yLowerTop: gapY - pipeGap / 2,\n    yLowerBottom: -size.height / 2 - size.heightMargin,\n  };\n}\n'},{file:"level.ts",code:'import { makeSprite, t, Device } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird, birdWidth } from "./bird";\nimport { Pipe, PipeT, pipeWidth, pipeGap } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\ntype LevelProps = {\n  paused: boolean;\n};\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n  pipes: PipeT[];\n};\n\nexport const Level = makeSprite<LevelProps, LevelState, WebInputs | iOSInputs>({\n  init({ device }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: [newPipe(device)],\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (inputs.pointer.justPressed || inputs.keysJustPressed[" "]) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n    ];\n  },\n});\n\nfunction newPipe(device: Device<{}>): PipeT {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n',highlight:[1,4,5,7,17,21,25,36,"45-63",68,"86-92","97-106"]}],codesJs:[{file:"pipe.js",code:'import { makeSprite, t } from "@replay/core";\n\nexport const pipeWidth = 40;\nexport const pipeGap = 170;\n\nexport const Pipe = makeSprite({\n  render({ props, device }) {\n    const { size } = device;\n    const { pipe } = props;\n\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n\n    return [\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yUpperTop - yUpperBottom,\n        y: (yUpperTop + yUpperBottom) / 2,\n      }),\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yLowerTop - yLowerBottom,\n        y: (yLowerTop + yLowerBottom) / 2,\n      }),\n    ];\n  },\n});\n\nexport function getPipeYPositions(size, gapY) {\n  return {\n    yUpperTop: size.height / 2 + size.heightMargin,\n    yUpperBottom: gapY + pipeGap / 2,\n    yLowerTop: gapY - pipeGap / 2,\n    yLowerBottom: -size.height / 2 - size.heightMargin,\n  };\n}\n'},{file:"level.js",code:'import { makeSprite, t } from "@replay/core";\nimport { Bird, birdWidth } from "./bird";\nimport { Pipe, pipeWidth, pipeGap } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init({ device }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: [newPipe(device)],\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (inputs.pointer.justPressed || inputs.keysJustPressed[" "]) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n    ];\n  },\n});\n\nfunction newPipe(device) {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n',highlight:[2,3,5,9,13,24,"33-51",56,"74-80","85-94"]}],Game:u,gameProps:h})}},142:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(145),r={text:function(e){return{type:"text",props:Object.assign({testId:e.testId},Object(i.a)(e),{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign({testId:e.testId},Object(i.a)(e),{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign({testId:e.testId},Object(i.a)(e),{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign({testId:e.testId},Object(i.a)(e),{color:e.color,fillColor:e.fillColor,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,lineCap:e.lineCap||"butt",path:e.path})}},image:function(e){return{type:"image",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},145:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return i}))},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return re}));var i=n(0),r=n.n(i),a=n(150),o=n(147),s=n(155),p=n(2),c=n(153),d=n(152),l=n(148),u=n(149),h=n(151),f=n.n(h),m=n(48),v=n.n(m);function g(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(l.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(u.a,{value:"js"},r.a.createElement(w,{lang:"js",codes:n})),r.a.createElement(u.a,{value:"ts"},r.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(i.useState)(a[0]),s=o[0],p=o[1],c=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return r.a.createElement("button",{className:v.a.fileButton+(s===e?" "+v.a.fileButtonSelected:""),key:e,onClick:function(){return p(e)}},e)}))),r.a.createElement(y,{key:c.file,lang:t,code:c.code,highlight:c.highlight}))}function y(e){var t=e.lang,n=e.code,i=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(c.a,Object(p.a)({},c.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:v.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:f()(t,v.a.codeBlock)},r.a.createElement("div",{className:v.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}var b=n(143),x=n.n(b),P=n(144);function E(e,t,n){return T.apply(this,arguments)}function T(){return(T=Object(P.a)(x.a.mark((function e(t,n,i){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([].concat(S(t,n.audioFileNames||[],i.audioElements,i.loadAudioFile),S(t,n.imageFileNames||[],i.imageElements,i.loadImageFile)));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n,i){return t.map((function(t){if(n[t]){n[t].globalSpriteIds.add(e);var r=n[t].data;return"then"in r?r:Promise.resolve()}var a=i(t).then((function(e){n[t].data=e}));return n[t]={globalSpriteIds:new Set([e]),data:a},a}))}function j(e,t,n){for(var i in t){var r=t[i].globalSpriteIds;r.has(e)&&(1===r.size?(n(i),delete t[i]):t[i].globalSpriteIds.delete(e))}}var M=n(145);function O(e,t,n,i,r,a,o,s,p,c){var d=Object(M.a)(t);d.opacity*=s;var l=c.nativeSpriteMap,u=c.nativeSpriteUtils,h=function(e){var t=i(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var i=t.x,r=t.y,a=i-e.x,o=r-e.y,s=a*Math.cos(n)+o*Math.sin(n),p=-a*Math.sin(n)+o*Math.cos(n),c=s/e.scaleX,d=p/e.scaleY;return{x:c+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(h),m=e.getSprites(t,f,r,a,o),v=new Set(e.prevChildIds),g=[];if(v.size<e.prevChildIds.length){var w=e.prevChildIds.find((function(t,n){return e.prevChildIds.indexOf(t)!==n}));throw Error("Duplicate Sprite id "+w)}var y=m.map((function(t){if(!t)return t;if("native"===t.type){g.push(t.props.id),v.delete(t.props.id);var i=l[t.name];if(!i)throw Error('Cannot find Native Sprite "'+t.name+'"');var r=e.childContainers[t.props.id];if(!r||"native"!==r.type){var s={type:"native",state:i.create({props:t.props,parentGlobalId:p,getState:function(){return s.state},updateState:function(e){s.state=Object.assign({},s.state,e)},utils:u}),cleanup:i.cleanup};e.childContainers[t.props.id]=s,r=s}return r.state=i.loop({props:t.props,state:r.state,parentGlobalId:p,utils:u}),null}if("pure"===t.type){g.push(t.props.id),v.delete(t.props.id);var m=e.childContainers[t.props.id];return m&&"pure"===m.type||(m=C(t),e.childContainers[t.props.id]=m),function e(t,n,i,r,a,o){var s=Object(M.a)(n);s.opacity*=o;var p=t.getSprites(n,i,r,a);if("cachedTextures"===p.type)return{id:n.id,baseProps:s,textures:p.textures};var c=p.sprites,d=new Set(t.prevChildIds),l=[],u=c.map((function(n){if(!n)return n;if("pure"===n.type){l.push(n.props.id),d.delete(n.props.id);var o=t.childContainers[n.props.id];return o&&"pure"===o.type||(o=C(n),t.childContainers[n.props.id]=o),e(o,n.props,i,r,a,s.opacity)}return n})).filter(I);return d.forEach((function(e){delete t.childContainers[e]})),t.cache=u,t.prevChildIds=l,{id:n.id,baseProps:s,textures:u}}(m,t.props,f.size,u.didResize,a,d.opacity)}if("custom"===t.type){g.push(t.props.id),v.delete(t.props.id);var w=!1,y=e.childContainers[t.props.id],b=p+"--"+t.props.id;return y&&"custom"===y.type||(w=!0,y=k(t,f,e.prevTime,b),e.childContainers[t.props.id]=y),O(y,t.props,n,h,w,a,o,d.opacity,b,c)}return t})).filter(I);return u.didResize=!1,v.forEach((function(t){var n,i=e.childContainers[t];!function e(t,n){Object.entries(t).forEach((function(t){var i=t[0],r=t[1];if("custom"===r.type){var a=n+"--"+i;e(r.childContainers,a),r.loadFilesPromise&&r.loadFilesPromise.then((function(){var e,t;e=a,t=f.assetUtils,j(e,t.audioElements,t.cleanupAudioFile),j(e,t.imageElements,t.cleanupImageFile)}))}else"native"===r.type&&r.cleanup({state:r.state,parentGlobalId:p})}))}((n={},n[t]=i,n),p),delete e.childContainers[t]})),e.prevChildIds=g,{id:t.id,baseProps:d,textures:y}}var L=1/60*1e3;function k(e,t,n,i){var r,a,o=e.spriteObj,s=e.props,p=[],c=function(e){p.push(e)},d=null,l=null;return o.init&&(r=o.init({props:s,getState:function(){if(!d)throw Error("Cannot call getState synchronously in init");return d.state},device:t,updateState:c,preloadFiles:(a=Object(P.a)(x.a.mark((function e(n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=E(i,n,t.assetUtils),d?d.loadFilesPromise=r:l=r,e.next=4,r;case 4:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})})),d={type:"custom",state:r,childContainers:{},prevChildIds:[],prevTime:n,currentLag:0,loadFilesPromise:l,getSprites:function(e,t,n,i,r){var a=this,s=function(){a.state=p.reduce((function(e,t){return t(e)}),a.state),p.length=0};s(),!n&&o.loop&&(this.state=o.loop({props:e,state:this.state,device:t,updateState:c})),s();var d=o[i];d||(d="renderPXL"===i&&o.renderXL?o.renderXL:o.render);var l=d({props:e,state:this.state,device:t,updateState:c,extrapolateFactor:r});return s(),l}}}function z(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function C(e){var t=e.spriteObj;return{type:"pure",childContainers:{},prevChildIds:[],getSprites:function(e,n,i,r){var a=t[r];return a||(a="renderPXL"===r&&t.renderXL?t.renderXL:t.render),this.prevProps&&this.cache&&!t.shouldRerender(this.prevProps,e)&&!i?(this.prevProps=e,{type:"cachedTextures",textures:this.cache}):(this.prevProps=e,{type:"pureSprites",sprites:a({props:e,size:n})})}}}function I(e){return null!=e}var Y={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,numberPressed:0,justPressed:!1,justReleased:!1,x:0,y:0}},X=[];function G(e){return function(e,t){var n=e(t.pointer);return Object.assign({},t,{pointer:Object.assign({},t.pointer,{x:n.x,y:n.y})})}(e,Y)}function B(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),Y.keysDown[e.key]=!0,Y.keysJustPressed[e.key]=!0}function N(e){delete Y.keysDown[e.key]}function W(e,t,n){X.includes(n)||(X=[].concat(X,[n])),Y.pointer.pressed=!0,Y.pointer.numberPressed=X.length,Y.pointer.justPressed=!0,Y.pointer.x=e,Y.pointer.y=t}function D(e,t){Y.pointer.x=e,Y.pointer.y=t}function U(e,t,n){0===(X=X.filter((function(e){return e!==n}))).length&&(Y.pointer.justPressed=!1,Y.pointer.pressed=!1),Y.pointer.numberPressed=X.length,Y.pointer.justReleased=!0,Y.pointer.x=e,Y.pointer.y=t}function F(e){X=X.filter((function(t){return t!==e})),Y.pointer.numberPressed=X.length,0===X.length&&(Y.pointer.justPressed=!1,Y.pointer.pressed=!1)}function R(){Y={keysDown:Y.keysDown,keysJustPressed:{},pointer:Object.assign({},Y.pointer,{justPressed:!1,justReleased:!1})}}function A(e,t,n,i){var r=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,p=t.deviceWidth,c=t.deviceHeight;e.save();var d=Math.min(p/r,c/a),l=r+2*o,u=a+2*s;return e.translate(p/2,c/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-p/2/d,-c/2/d,p/d,c/d),e.fillStyle="white",e.fillRect(-l/2,-u/2,l,u),function e(t,n,i,r){var a=t.baseProps,o=t.textures;n.save(),$(n,a),o.forEach((function(t){if("type"in t){var o=V(n);return n.save(),$(n,t.props,a.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color,e.props.fillColor,e.props.lineCap),0;case"image":return t.image(H(n,e.props.fileName),e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(H(n,e.props.fileName),e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var H=function(e,t){var n=e[t];if(!n)throw Error('Image file "'+t+'" was not preloaded');if("then"in n.data)throw Error('Image file "'+t+'" did not finish loading before it was used');return n.data},J=Math.PI/180,$=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,p=t.anchorX,c=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(a*J),e.scale(o,s),e.translate(-p,c),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,i=n[0],r=i[0],a=i[1],o=n.slice(1);return e.beginPath(),e.moveTo(r,-a),o.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var q,V=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i,r,a){if(!(t.length<2)){var o=t[0],s=o[0],p=o[1],c=t.slice(1);e.beginPath(),e.moveTo(s,-p),c.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),r&&(e.fillStyle=r,e.fill()),i&&(e.strokeStyle=i,e.lineWidth=n,e.lineCap=a,e.stroke())}},text:function(t,n,i,r){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,a,o){var s=t.width/n,p=t.height/i,c=r%n,d=Math.floor(r/n)%i;e.drawImage(t,c*s,d*p,s,p,-a/2,-o/2,a,o)}}};function K(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var a=r,o=a.width,s=a.height,p=a.maxWidthMargin,c=void 0===p?0:p,d=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var l=o/s;if(l>e/t){var u=e,h=u/l,f=h/s*(void 0===d?0:d),m=Math.min(t,h+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(m-h)/2*(s/h),deviceWidth:u,deviceHeight:m}}var v=t,g=v*l,w=g/o*c,y=Math.min(e,g+2*w);return{width:o,height:s,widthMargin:(y-g)/2*(o/g),heightMargin:0,deviceWidth:y,deviceHeight:v}}function Q(){return(Q=Object(P.a)(x.a.mark((function e(t,n){var i,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return i=e.sent,e.next=5,i.arrayBuffer();case 5:return r=e.sent,e.next=8,new Promise((function(e,n){t.decodeAudioData(r,e,n)}));case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t){return function(n){if(!t[n])throw Error('Audio file "'+n+'" was not preloaded');var i=t[n].data;if("then"in i)throw Error('Audio file "'+n+'" did not finish loading before it was used');var r=i.buffer,a=i.playState;return{getPosition:function(){return a?a.isPaused?a.alreadyPlayedTime:e.currentTime-a.startTime:0},play:function(o,s){var p;void 0===s&&(s=!1);var c=e.createBufferSource();c.buffer=r,c.connect(e.destination);var d=null!==(p=null!=o?o:null==a?void 0:a.alreadyPlayedTime)&&void 0!==p?p:0;c.start(void 0,d),c.loop=s,c.onended=function(){var e;if(t[n]){var i=t[n].data;"then"in i||!1!==(null===(e=i.playState)||void 0===e?void 0:e.isPaused)||delete i.playState}},a&&!a.isPaused||(i.playState={startTime:e.currentTime-d,sample:c,alreadyPlayedTime:d,isPaused:!1})},pause:function(){a&&!a.isPaused&&(a.sample.stop(),i.playState=Object.assign({},a,{alreadyPlayedTime:e.currentTime-a.startTime,isPaused:!0}))}}}}function _(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)return!0;return window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches}var ee={name:"sans-serif",size:12};function te(e,t){var n=t||{},i=n.dimensions,r=void 0===i?"game-coords":i,a=n.canvas,o=n.nativeSpriteMap,s=void 0===o?{}:o,p=n.windowSize,c=a||document.createElement("canvas");a||document.body.appendChild(c);var d=window.PointerEvent?"pointerdown":"touchstart",l=window.PointerEvent?"pointermove":"touchmove",u=window.PointerEvent?"pointerup":"touchend",h=window.PointerEvent?"pointercancel":"touchcancel",f=c.getContext("2d",{alpha:!1}),m=new(window.AudioContext||window.webkitAudioContext),v=!0,g=!0,w=0,y=!1,b=0,x=0,P=function(){document.hidden&&g&&(b=w,m.suspend()),document.hidden||g||(y=!0,setTimeout((function(){m.suspend(),setTimeout((function(){m.resume()}),75)}),75)),g=!document.hidden};document.addEventListener("keydown",(function(e){v&&B(e)}),!1),document.addEventListener("keyup",(function(e){v&&N(e)}),!1),document.addEventListener("visibilitychange",P,!1),window.addEventListener("resize",X,!1);var E,T,S,j,M,C,I=function(){return X({didScroll:!0})};window.addEventListener("scroll",I,!1),document.addEventListener("contextmenu",(function(e){e.preventDefault()}));var Y={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function X(t){var n=Boolean(t&&"cleanup"in t&&t.cleanup),i=Boolean(t&&"didScroll"in t&&t.didScroll);if(!E||(f.restore(),document.removeEventListener(d,T),document.removeEventListener(l,S),document.removeEventListener(u,j),document.removeEventListener(h,M),!n)){var a=i&&E?E:function(e,t,n,i){var r=K(e,t,n,i);return q=r,r}((null==p?void 0:p.width)||window.innerWidth,(null==p?void 0:p.height)||window.innerHeight,r,e.props.size);c.width=a.deviceWidth,c.height=a.deviceHeight;var o=e.props.defaultFont||ee,s=A(f,a,H,o);C=s.scale,Z.ref=s.render,Y.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return t+i*(e+r/2+n)}}({canvasOffsetLeft:c.offsetLeft,width:a.width,widthMargin:a.widthMargin,scale:C}),Y.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return t-i*(e-r/2-n)}}({canvasOffsetTop:c.offsetTop,height:a.height,heightMargin:a.heightMargin,scale:C}),Y.didResize=!0,Y.scale=C;var m=function(e){var t=e.canvasOffsetLeft,n=e.scrollX,i=e.widthMargin,r=e.scale,a=e.width;return function(e){return(e.clientX-t+n)/r-i-a/2}}({canvasOffsetLeft:c.offsetLeft,scrollX:window.scrollX,width:a.width,widthMargin:a.widthMargin,scale:C}),g=function(e){var t=e.canvasOffsetTop,n=e.scrollY,i=e.heightMargin,r=e.scale,a=e.height;return function(e){return-(e.clientY-t+n)/r+i+a/2}}({canvasOffsetTop:c.offsetTop,scrollY:window.scrollY,height:a.height,heightMargin:a.heightMargin,scale:C}),w=function(e,t){return e>a.width/2+a.widthMargin||e<-a.width/2-a.widthMargin||t>a.height/2+a.heightMargin||t<-a.height/2-a.heightMargin};T=function(e){if("changedTouches"in e){v=!1;for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],i=m({clientX:n.screenX}),r=g({clientY:n.screenY});w(i,r)||(v=!0,W(i,r,n.identifier))}}else{var a=m(e),o=g(e);w(a,o)?v=!1:(v=!0,W(a,o,e.pointerId))}},S=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],i=m({clientX:n.screenX}),r=g({clientY:n.screenY});w(i,r)||D(i,r)}else{var a=m(e),o=g(e);w(a,o)||D(a,o)}},j=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],i=m({clientX:n.screenX}),r=g({clientY:n.screenY});w(i,r)?F(n.identifier):U(i,r,n.identifier)}else{var a=m(e),o=g(e);w(a,o)?F(e.pointerId):U(a,o,e.pointerId)}},M=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++)F(e.changedTouches[t].identifier);else F(e.pointerId)},document.addEventListener(d,T,!1),document.addEventListener(l,S,!1),document.addEventListener(u,j,!1),document.addEventListener(h,M,!1),E=a}}var G={},H={},J=function(e,t){return function(){throw Error("Failed to load "+e+' file "'+t+'"')}},$={audioElements:G,imageElements:H,loadAudioFile:function(e){return function(e,t){return Q.apply(this,arguments)}(m,e).then((function(e){return{buffer:e}})).catch(J("audio",e))},loadImageFile:function(e){return new Promise((function(t,n){var i=new Image;i.addEventListener("load",(function(){t(i)})),i.addEventListener("error",n),i.src=e})).catch(J("image",e))},cleanupAudioFile:function(e){var t=G[e].data;!("then"in t)&&t.playState&&(t.playState.sample.onended=null,t.playState.sample.disconnect(),t.playState.sample.buffer=null)},cleanupImageFile:function(){return null}},V={getGetDevice:ne(m,K((null==p?void 0:p.width)||window.innerWidth,(null==p?void 0:p.height)||window.innerHeight,r,e.props.size),$)},Z={ref:null};X();var _=!1,te=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener(d,e,!1),"suspended"===m.state&&m.resume(),m.onstatechange=function(){"suspended"!==m.state||document.hidden||m.resume()}};document.addEventListener("keydown",te,!1),document.addEventListener(d,te,!1);var ie=function(e,t,n,i){var r=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),o=a(r),s=k(n,a(r),0,n.props.id),p=i||n.props.size,c=z(o.size,p),d=0,l=0,u=O(s,n.props,a,r,!0,c,0,1,n.props.id,t);return{initTextures:u,getNextFrameTextures:function(i,a){var o=i-d;for(d=i,l+=o;l>=L;){var c=(l-=L)/L,h=e.getGetDevice(),f=z(h(r).size,p);u=O(s,n.props,h,r,!1,f,c,1,n.props.id,t),a()}return u}}}(V,{nativeSpriteMap:s,nativeSpriteUtils:Y},e),re=ie.initTextures,ae=ie.getNextFrameTextures,oe=null;return function e(t){var n;null===(n=Z.ref)||void 0===n||n.call(Z,t),window.requestAnimationFrame((function(t){_||(null===oe&&(oe=t-1/60),y&&(y=!1,x+=t-b),w=t,e(ae(t-oe-x,R)))}))}(re),{cleanup:function(){c.width=c.width,a||document.body.removeChild(c),_=!0,document.removeEventListener("keydown",B,!1),document.removeEventListener("keyup",N,!1),document.removeEventListener("visibilitychange",P,!1),window.removeEventListener("resize",X,!1),window.removeEventListener("scroll",I,!1),X({cleanup:!0})},audioElements:G,imageElements:H,audioContext:m}}function ne(e,t,n){var i,r={isTouchScreen:_(),log:console.log,random:Math.random,timer:(i={},{start:function(e,t){var n=window.setTimeout((function(){delete i[r],e()}),t),r=String(n);return i[r]={timeoutId:n,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},r},pause:function(e){var t=i[e];if(t&&!t.isPaused){var n=Date.now()-t.timeStartedMs;t.timeRemainingMs-=n,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=i[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var n=window.setTimeout((function(){delete i[e],t.callback()}),t.timeRemainingMs);t.timeoutId=n}},cancel:function(e){var t=i[e];t&&(window.clearTimeout(t.timeoutId),delete i[e])}}),audio:Z(e,n.audioElements),assetUtils:n,network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign({},r,{size:q||t,now:function(){return new Date}});return function(t){return Object.assign({},e,{inputs:G(t)})}}}function ie(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],a=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(i.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),s=o[0],p=o[1],c=Object(i.useState)(0),d=c[0],l=c[1],u=0,h=0,f=0;if(s&&s.height&&s.width){s.width/s.height>375/667?(h=s.height*(667/900),u=h*(375/667)):(u=s.width*(375/460),h=u/(375/667));var m=n.size.maxHeightMargin?0:.08*h;f=(s.height-h)/2+m}return Object(i.useEffect)((function(){if(u&&h){var e=document.getElementById("myCanvas"),i=te(t(n),{dimensions:"scale-up",canvas:e,windowSize:{width:u,height:h}}).cleanup;return function(){i()}}}),[u,h,d]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:p,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&r.a.createElement("img",{className:v.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return l((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:f},width:u,height:h}))}function re(e){var t=e.part,n=e.MDXContent,i=e.codesTs,p=e.codesJs,c=e.Game,d=e.gameProps,l=e.image,u=e.isEnd,h=i&&p,f=c&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(ie,{Game:c,gameProps:d,showReload:h})})):r.a.createElement("div",null,r.a.createElement("img",{src:l}));return r.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),u?r.a.createElement("div",null):r.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),h?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(g,{codesTs:i,codesJs:p})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},f)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},f)))}},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(141)),o={},s={unversionedId:"tutorial/14",id:"tutorial/14",isDocsHomePage:!1,title:"14",description:"14 - Pipes",source:"@site/docs/tutorial/14.md",permalink:"/docs/tutorial/14",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/14.md"},p=[],c={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"14---pipes"},"14 - Pipes"),Object(a.b)("p",null,"There's not much challenge to the game now, so let's add some green pipes that move across the screen for the bird to dodge."),Object(a.b)("p",null,"As you might have guessed by now, we'll add a ",Object(a.b)("inlineCode",{parentName:"p"},"Pipe")," Sprite for that. Each pipe is 2 rectangles with a gap in the middle. We need to do some math to calculate the ",Object(a.b)("inlineCode",{parentName:"p"},"y")," coordinate of each rectangle - remembering the ",Object(a.b)("inlineCode",{parentName:"p"},"y")," coordinate is the center of the rectangle."),Object(a.b)("p",null,"Next we need to add our pipes in the ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite's state, defining it in the ",Object(a.b)("inlineCode",{parentName:"p"},"init")," method. Then in the ",Object(a.b)("inlineCode",{parentName:"p"},"loop")," method we update the state to move the pipe. Lastly in ",Object(a.b)("inlineCode",{parentName:"p"},"render")," we map the ",Object(a.b)("inlineCode",{parentName:"p"},"pipe")," state to the ",Object(a.b)("inlineCode",{parentName:"p"},"Pipe")," Sprite."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"newPipe")," function sets a random ",Object(a.b)("inlineCode",{parentName:"p"},"y")," coordinate for the pipe gap, which our bird has to jump through. The ",Object(a.b)("inlineCode",{parentName:"p"},"device")," parameter has a ",Object(a.b)("inlineCode",{parentName:"p"},"random")," field, which works like ",Object(a.b)("inlineCode",{parentName:"p"},"Math.random"),". It's important to use Replay's ",Object(a.b)("inlineCode",{parentName:"p"},"random")," function to ensure the game works cross-platform."))}d.isMDXComponent=!0}}]);