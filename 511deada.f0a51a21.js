(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{115:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(145),o=n(140),s=Object(o.a)({render:function(){return[o.b.rectangle({width:50,height:40,color:"yellow"})]}}),c=Object(o.a)({render:function(e){var t=e.props,n=function(e,t){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:t+85,yLowerTop:t-85,yLowerBottom:-e.height/2-e.heightMargin}}(e.device.size,t.pipe.gapY),i=n.yUpperTop,r=n.yUpperBottom,a=n.yLowerTop,s=n.yLowerBottom;return[o.b.rectangle({color:"green",width:40,height:i-r,y:(i+r)/2}),o.b.rectangle({color:"green",width:40,height:a-s,y:(a+s)/2})]}});var p=Object(o.a)({init:function(e){return{birdY:10,birdGravity:-12,pipes:[d(e.device)]}},loop:function(e){var t=e.props,n=e.state,i=e.device;if(t.paused)return n;var r=i.inputs,a=n.birdGravity,o=n.birdY,s=n.pipes;return o-=a+=.8,(r.pointer.justPressed||r.keysJustPressed[" "])&&(a=-12),s[s.length-1].x<140&&(s=[].concat(s,[d(i)]).filter((function(e){return e.x>-(i.size.width+i.size.widthMargin+40)}))),{birdGravity:a,birdY:o,pipes:s=s.map((function(e){var t=e.passed;return!t&&e.x<-45&&(t=!0),Object.assign({},e,{passed:t,x:e.x-2})}))}},render:function(e){var t=e.state,n=e.device.size;return[o.b.rectangle({color:"#add8e6",width:n.width+2*n.widthMargin,height:n.height+2*n.heightMargin}),s({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})].concat(t.pipes.map((function(e,t){return c({id:"pipe-"+t,pipe:e,x:e.x})})))}});function d(e){var t=(e.size.height+2*e.size.heightMargin-340)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}var u=Object(o.a)({render:function(e){var t=e.props,n=e.device,i=n.inputs;return(i.pointer.justReleased||i.keysJustPressed[" "])&&t.start(),[o.b.text({text:n.isTouchScreen?"Tap to Start":"Click or Space Bar to Start",color:"white",y:100})]}}),l=Object(o.a)({init:function(){return{view:"menu"}},render:function(e){var t=e.state,n=e.updateState,i="menu"===t.view;return[p({id:"level",paused:i}),i?u({id:"menu",start:function(){n((function(e){return Object.assign({},e,{view:"level"})}))}}):null]}}),h={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},f=n(59);t.default=function(){return r.a.createElement(a.a,{part:14,MDXContent:f.default,codesTs:[{file:"pipe.ts",code:'import { makeSprite, t, DeviceSize } from "@replay/core";\n\nexport type PipeT = {\n  x: number;\n  gapY: number;\n  passed: boolean;\n};\n\nexport const pipeWidth = 40;\nexport const pipeGap = 170;\n\ntype PipeProps = {\n  pipe: PipeT;\n};\n\nexport const Pipe = makeSprite<PipeProps>({\n  render({ props, device }) {\n    const { size } = device;\n    const { pipe } = props;\n\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n\n    return [\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yUpperTop - yUpperBottom,\n        y: (yUpperTop + yUpperBottom) / 2,\n      }),\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yLowerTop - yLowerBottom,\n        y: (yLowerTop + yLowerBottom) / 2,\n      }),\n    ];\n  },\n});\n\nexport function getPipeYPositions(size: DeviceSize, gapY: number) {\n  return {\n    yUpperTop: size.height / 2 + size.heightMargin,\n    yUpperBottom: gapY + pipeGap / 2,\n    yLowerTop: gapY - pipeGap / 2,\n    yLowerBottom: -size.height / 2 - size.heightMargin,\n  };\n}\n'},{file:"level.ts",code:'import { makeSprite, t, Device } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird, birdWidth } from "./bird";\nimport { Pipe, PipeT, pipeWidth, pipeGap } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\ntype LevelProps = {\n  paused: boolean;\n};\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n  pipes: PipeT[];\n};\n\nexport const Level = makeSprite<LevelProps, LevelState, WebInputs | iOSInputs>({\n  init({ device }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: [newPipe(device)],\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (inputs.pointer.justPressed || inputs.keysJustPressed[" "]) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n    ];\n  },\n});\n\nfunction newPipe(device: Device<{}>): PipeT {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n',highlight:[1,4,5,7,17,21,25,36,"45-63",68,"86-92","97-106"]}],codesJs:[{file:"pipe.js",code:'import { makeSprite, t } from "@replay/core";\n\nexport const pipeWidth = 40;\nexport const pipeGap = 170;\n\nexport const Pipe = makeSprite({\n  render({ props, device }) {\n    const { size } = device;\n    const { pipe } = props;\n\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n\n    return [\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yUpperTop - yUpperBottom,\n        y: (yUpperTop + yUpperBottom) / 2,\n      }),\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yLowerTop - yLowerBottom,\n        y: (yLowerTop + yLowerBottom) / 2,\n      }),\n    ];\n  },\n});\n\nexport function getPipeYPositions(size, gapY) {\n  return {\n    yUpperTop: size.height / 2 + size.heightMargin,\n    yUpperBottom: gapY + pipeGap / 2,\n    yLowerTop: gapY - pipeGap / 2,\n    yLowerBottom: -size.height / 2 - size.heightMargin,\n  };\n}\n'},{file:"level.js",code:'import { makeSprite, t } from "@replay/core";\nimport { Bird, birdWidth } from "./bird";\nimport { Pipe, pipeWidth, pipeGap } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init({ device }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: [newPipe(device)],\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (inputs.pointer.justPressed || inputs.keysJustPressed[" "]) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n    ];\n  },\n});\n\nfunction newPipe(device) {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n',highlight:[2,3,5,9,13,24,"33-51",56,"74-80","85-94"]}],Game:l,gameProps:h})}},140:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(142),r={text:function(e){return{type:"text",props:Object.assign({testId:e.testId},Object(i.a)(e),{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign({testId:e.testId},Object(i.a)(e),{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign({testId:e.testId},Object(i.a)(e),{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign({testId:e.testId},Object(i.a)(e),{color:e.color,fillColor:e.fillColor,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,lineCap:e.lineCap||"butt",path:e.path})}},image:function(e){return{type:"image",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},142:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return i}))},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return ee}));var i=n(0),r=n.n(i),a=n(149),o=n(146),s=n(153),c=n(2),p=n(152),d=n(151),u=n(147),l=n(148),h=n(150),f=n.n(h),m=n(48),g=n.n(m);function v(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(u.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(l.a,{value:"js"},r.a.createElement(w,{lang:"js",codes:n})),r.a.createElement(l.a,{value:"ts"},r.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(i.useState)(a[0]),s=o[0],c=o[1],p=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return r.a.createElement("button",{className:g.a.fileButton+(s===e?" "+g.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),r.a.createElement(y,{key:p.file,lang:t,code:p.code,highlight:p.highlight}))}function y(e){var t=e.lang,n=e.code,i=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(p.a,Object(c.a)({},p.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:g.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:f()(t,g.a.codeBlock)},r.a.createElement("div",{className:g.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}var b=n(143),x=n.n(b),P=n(144),T=n(142);function M(e,t,n,i,r,a,o,s,c,p){var d=Object(T.a)(t);d.opacity*=s;var u=p.nativeSpriteMap,l=p.nativeSpriteUtils,h=function(e){var t=i(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var i=t.x,r=t.y,a=i-e.x,o=r-e.y,s=a*Math.cos(n)+o*Math.sin(n),c=-a*Math.sin(n)+o*Math.cos(n),p=s/e.scaleX,d=c/e.scaleY;return{x:p+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(h),m=e.getSprites(t,f,r,a,o),g=[],v=m.map((function(t){if(!t)return t;if("native"===t.type){g.push(t.props.id);var i=u[t.name];if(!i)throw Error('Cannot find Native Sprite "'+t.name+'"');var r=e.childContainers[t.props.id];return r&&"native"===r.type||(r={type:"native",state:i.create({props:t.props,parentGlobalId:c,getState:function(){return r.state},updateState:function(e){r.state=Object.assign({},r.state,e)},utils:l}),cleanup:i.cleanup},e.childContainers[t.props.id]=r),r.state=i.loop({props:t.props,state:r.state,parentGlobalId:c,utils:l}),l.didResize=!1,null}if("custom"===t.type){g.push(t.props.id);var s=!1,m=e.childContainers[t.props.id];return m&&"custom"===m.type||(s=!0,m=E(t,f,e.prevTime),e.childContainers[t.props.id]=m),M(m,t.props,n,h,s,a,o,d.opacity,c+"--"+t.props.id,p)}return t})).filter(S);return function e(t){Object.keys(t).forEach((function(n){if(!g.includes(n)){var i=t[n];"native"===i.type?i.cleanup({state:i.state,parentGlobalId:c}):e(i.childContainers),delete t[n]}}))}(e.childContainers),{id:t.id,baseProps:d,textures:v}}var j=1/60*1e3;function E(e,t,n){var i,r=e.spriteObj,a=e.props,o=[],s=function(e){o.push(e)};return r.init&&(i=r.init({props:a,device:t,updateState:s})),{type:"custom",state:i,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,i,a){var c=this,p=function(){c.state=o.reduce((function(e,t){return t(e)}),c.state),o.length=0};p(),!n&&r.loop&&(this.state=r.loop({props:e,state:this.state,device:t,updateState:s})),p();var d=r[i];d||(d="renderPXL"===i&&r.renderXL?r.renderXL:r.render);var u=d({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:a});return p(),u}}}function k(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function S(e){return null!==e}var O={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,numberPressed:0,justPressed:!1,justReleased:!1,x:0,y:0}},L=[];function z(e){return function(e,t){var n=e(t.pointer);return Object.assign({},t,{pointer:Object.assign({},t.pointer,{x:n.x,y:n.y})})}(e,O)}function C(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),O.keysDown[e.key]=!0,O.keysJustPressed[e.key]=!0}function Y(e){delete O.keysDown[e.key]}function I(e,t,n){L.includes(n)||(L=[].concat(L,[n])),O.pointer.pressed=!0,O.pointer.numberPressed=L.length,O.pointer.justPressed=!0,O.pointer.x=e,O.pointer.y=t}function X(e,t){O.pointer.x=e,O.pointer.y=t}function G(e,t,n){0===(L=L.filter((function(e){return e!==n}))).length&&(O.pointer.justPressed=!1,O.pointer.pressed=!1),O.pointer.numberPressed=L.length,O.pointer.justReleased=!0,O.pointer.x=e,O.pointer.y=t}function N(e){L=L.filter((function(t){return t!==e})),O.pointer.numberPressed=L.length,0===L.length&&(O.pointer.justPressed=!1,O.pointer.pressed=!1)}function B(){O={keysDown:O.keysDown,keysJustPressed:{},pointer:Object.assign({},O.pointer,{justPressed:!1,justReleased:!1})}}function W(e,t,n,i){var r=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,c=t.deviceWidth,p=t.deviceHeight;e.save();var d=Math.min(c/r,p/a),u=r+2*o,l=a+2*s;return e.translate(c/2,p/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-c/2/d,-p/2/d,c/d,p/d),e.fillStyle="white",e.fillRect(-u/2,-l/2,u,l),function e(t,n,i,r){var a=t.baseProps,o=t.textures;n.save(),U(n,a),o.forEach((function(t){if("type"in t){var o=H(n);return n.save(),U(n,t.props,a.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color,e.props.fillColor,e.props.lineCap),0;case"image":var r=n[e.props.fileName];if(!r)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(r,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var D=Math.PI/180,U=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,c=t.anchorX,p=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(a*D),e.scale(o,s),e.translate(-c,p),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,i=n[0],r=i[0],a=i[1],o=n.slice(1);return e.beginPath(),e.moveTo(r,-a),o.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var R,H=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i,r,a){if(!(t.length<2)){var o=t[0],s=o[0],c=o[1],p=t.slice(1);e.beginPath(),e.moveTo(s,-c),p.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),r&&(e.fillStyle=r,e.fill()),i&&(e.strokeStyle=i,e.lineWidth=n,e.lineCap=a,e.stroke())}},text:function(t,n,i,r){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,a,o){var s=t.width/n,c=t.height/i,p=r%n,d=Math.floor(r/n)%i;e.drawImage(t,p*s,d*c,s,c,-a/2,-o/2,a,o)}}};function J(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var a=r,o=a.width,s=a.height,c=a.maxWidthMargin,p=void 0===c?0:c,d=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var u=o/s;if(u>e/t){var l=e,h=l/u,f=h/s*(void 0===d?0:d),m=Math.min(t,h+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(m-h)/2*(s/h),deviceWidth:l,deviceHeight:m}}var g=t,v=g*u,w=v/o*p,y=Math.min(e,v+2*w);return{width:o,height:s,widthMargin:(y-v)/2*(o/v),heightMargin:0,deviceWidth:y,deviceHeight:g}}function A(e,t){return F.apply(this,arguments)}function F(){return(F=Object(P.a)(x.a.mark((function e(t,n){var i,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return i=e.sent,e.next=5,i.arrayBuffer();case 5:return r=e.sent,e.next=8,new Promise((function(e,n){t.decodeAudioData(r,e,n)}));case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t){return function(n){var i=t[n],r=i.data,a=i.mutPlayState;return{getPosition:function(){return a?a.isPaused?a.alreadyPlayedTime:e.currentTime-a.startTime:0},play:function(i,o){var s;void 0===o&&(o=!1);var c=e.createBufferSource();c.buffer=r,c.connect(e.destination);var p=null!==(s=null!=i?i:null==a?void 0:a.alreadyPlayedTime)&&void 0!==s?s:0;c.start(void 0,p),c.loop=o,c.onended=function(){var e;!1===(null===(e=t[n].mutPlayState)||void 0===e?void 0:e.isPaused)&&delete t[n].mutPlayState},a&&!a.isPaused||(t[n].mutPlayState={startTime:e.currentTime-p,sample:c,alreadyPlayedTime:p,isPaused:!1})},pause:function(){a&&!a.isPaused&&(a.sample.stop(),t[n].mutPlayState=Object.assign({},a,{alreadyPlayedTime:e.currentTime-a.startTime,isPaused:!0}))}}}}function q(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)return!0;return window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches}var V={name:"sans-serif",size:12};function K(e,t){var n,i=t.loadingTextures,r=void 0===i?[]:i,a=t.assets,o=void 0===a?{}:a,s=t.dimensions,c=void 0===s?"game-coords":s,p=t.nativeSpriteMap,d=void 0===p?{}:p,u=t.canvas,l=t.windowSize,h=u||document.createElement("canvas");u||document.body.appendChild(h);var f,m,g,v,w,y,b=window.PointerEvent?"pointerdown":"touchstart",S=window.PointerEvent?"pointermove":"touchmove",O=window.PointerEvent?"pointerup":"touchend",L=window.PointerEvent?"pointercancel":"touchcancel",z=h.getContext("2d",{alpha:!1}),D=new(window.AudioContext||window.webkitAudioContext),U=!0,H=!0,F=0,$=!1,q=0,K=0,Z=function(){document.hidden&&H&&(q=F,D.suspend()),document.hidden||H||($=!0,setTimeout((function(){D.suspend(),setTimeout((function(){D.resume()}),75)}),75)),H=!document.hidden};document.addEventListener("keydown",(function(e){U&&C(e)}),!1),document.addEventListener("keyup",(function(e){U&&Y(e)}),!1),document.addEventListener("visibilitychange",Z,!1),window.addEventListener("resize",ee,!1),document.addEventListener("contextmenu",(function(e){e.preventDefault()}));var _={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function ee(t){if(!f||(z.restore(),document.removeEventListener(b,m),document.removeEventListener(S,g),document.removeEventListener(O,v),document.removeEventListener(L,w),!0!==t)){var n=function(e,t,n,i){var r=J(e,t,n,i);return R=r,r}((null==l?void 0:l.width)||window.innerWidth,(null==l?void 0:l.height)||window.innerHeight,c,e.props.size);h.width=n.deviceWidth,h.height=n.deviceHeight;var i=e.props.defaultFont||V,r=W(z,n,ne,i);y=r.scale,re.ref=r.render,_.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return t+i*(e+r/2+n)}}({canvasOffsetLeft:h.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:y}),_.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return t-i*(e-r/2-n)}}({canvasOffsetTop:h.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:y}),_.didResize=!0,_.scale=y;var a=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return(e.clientX-t)/i-n-r/2}}({canvasOffsetLeft:h.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:y}),o=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return-(e.clientY-t)/i+n+r/2}}({canvasOffsetTop:h.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:y}),s=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin};m=function(e){if("changedTouches"in e){U=!1;for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],i=a({clientX:n.screenX}),r=o({clientY:n.screenY});s(i,r)||(U=!0,I(i,r,n.identifier))}}else{var c=a(e),p=o(e);s(c,p)?U=!1:(U=!0,I(c,p,e.pointerId))}},g=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],i=a({clientX:n.screenX}),r=o({clientY:n.screenY});s(i,r)||X(i,r)}else{var c=a(e),p=o(e);s(c,p)||X(c,p)}},v=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],i=a({clientX:n.screenX}),r=o({clientY:n.screenY});s(i,r)?N(n.identifier):G(i,r,n.identifier)}else{var c=a(e),p=o(e);s(c,p)?N(e.pointerId):G(c,p,e.pointerId)}},w=function(e){if("changedTouches"in e)for(var t=0;t<e.changedTouches.length;t++)N(e.changedTouches[t].identifier);else N(e.pointerId)},document.addEventListener(b,m,!1),document.addEventListener(S,g,!1),document.addEventListener(O,v,!1),document.addEventListener(L,w,!1),f=n}}var te={},ne={},ie={getGetDevice:Q(D,te,J((null==l?void 0:l.width)||window.innerWidth,(null==l?void 0:l.height)||window.innerHeight,c,e.props.size))},re={ref:null};ee();var ae=!1,oe=function(){var e=Object(P.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(o.audioFileNames||[]).forEach((function(e){t.push(A(D,e).then((function(t){te[e]={data:t}})))})),(o.imageFileNames||[]).forEach((function(e){ne[e]=new Image,t.push(new Promise((function(t,n){ne[e].addEventListener("load",t),ne[e].addEventListener("error",n),ne[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(n=re.ref)||void 0===n||n.call(re,{id:"Loading",baseProps:Object(T.a)({}),textures:r}),{cleanup:function(){h.width=h.width,u||document.body.removeChild(h),ae=!0,document.removeEventListener("keydown",C,!1),document.removeEventListener("keyup",Y,!1),document.removeEventListener("visibilitychange",Z,!1),window.removeEventListener("resize",ee,!1),ee(!0)},loadPromise:oe().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener(b,e,!1),"suspended"===D.state&&D.resume()};document.addEventListener("keydown",t,!1),document.addEventListener(b,t,!1);var n=function(e,t,n,i){var r=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),o=a(r),s=E(n,a(r),0),c=i||n.props.size,p=k(o.size,c),d=0,u=0,l=M(s,n.props,a,r,!0,p,0,1,n.props.id,t);return{initTextures:l,getNextFrameTextures:function(i,a){var o=i-d;for(d=i,u+=o;u>=j;){var p=(u-=j)/j,h=e.getGetDevice(),f=k(h(r).size,c);l=M(s,n.props,h,r,!1,f,p,1,n.props.id,t),a()}return l}}}(ie,{nativeSpriteMap:d,nativeSpriteUtils:_},e),i=n.initTextures,r=n.getNextFrameTextures,a=null;!function e(t){var n;null===(n=re.ref)||void 0===n||n.call(re,t),window.requestAnimationFrame((function(t){ae||(null===a&&(a=t-1/60),$&&($=!1,K+=t-q),F=t,e(r(t-a-K,B)))}))}(i)})),audioElements:te,audioContext:D}}function Q(e,t,n){var i,r={isTouchScreen:q(),log:console.log,random:Math.random,timer:(i={},{start:function(e,t){var n=window.setTimeout((function(){delete i[r],e()}),t),r=String(n);return i[r]={timeoutId:n,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},r},pause:function(e){var t=i[e];if(t&&!t.isPaused){var n=Date.now()-t.timeStartedMs;t.timeRemainingMs-=n,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=i[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var n=window.setTimeout((function(){delete i[e],t.callback()}),t.timeRemainingMs);t.timeoutId=n}},cancel:function(e){var t=i[e];t&&(window.clearTimeout(t.timeoutId),delete i[e])}}),audio:$(e,t),network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign({},r,{size:R||n,now:function(){return new Date}});return function(t){return Object.assign({},e,{inputs:z(t)})}}}var Z=n(140);function _(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=e.assets,s=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],a=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(i.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),c=s[0],p=s[1],d=Object(i.useState)(0),u=d[0],l=d[1],h=0,f=0,m=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(f=c.height*(667/900),h=f*(375/667)):(h=c.width*(375/460),f=h/(375/667));var v=n.size.maxHeightMargin?0:.08*f;m=(c.height-f)/2+v}return Object(i.useEffect)((function(){if(h&&f){var e=document.getElementById("myCanvas"),i=K(t(n),{loadingTextures:[Z.b.text({color:"black",text:"Loading..."})],assets:o,dimensions:"scale-up",canvas:e,windowSize:{width:h,height:f}}).cleanup;return function(){i()}}}),[h,f,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:p,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&r.a.createElement("img",{className:g.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return l((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:h,height:f}))}function ee(e){var t=e.part,n=e.MDXContent,i=e.codesTs,c=e.codesJs,p=e.Game,d=e.gameProps,u=e.image,l=e.isEnd,h=e.assets,f=i&&c,m=p&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(_,{Game:p,gameProps:d,showReload:f,assets:h})})):r.a.createElement("div",null,r.a.createElement("img",{src:u}));return r.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),l?r.a.createElement("div",null):r.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(v,{codesTs:i,codesJs:c})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(141)),o={},s={unversionedId:"tutorial/14",id:"tutorial/14",isDocsHomePage:!1,title:"14",description:"14 - Pipes",source:"@site/docs/tutorial/14.md",permalink:"/docs/tutorial/14",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/14.md"},c=[],p={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"14---pipes"},"14 - Pipes"),Object(a.b)("p",null,"There's not much challenge to the game now, so let's add some green pipes that move across the screen for the bird to dodge."),Object(a.b)("p",null,"As you might have guessed by now, we'll add a ",Object(a.b)("inlineCode",{parentName:"p"},"Pipe")," Sprite for that. Each pipe is 2 rectangles with a gap in the middle. We need to do some math to calculate the ",Object(a.b)("inlineCode",{parentName:"p"},"y")," coordinate of each rectangle - remembering the ",Object(a.b)("inlineCode",{parentName:"p"},"y")," coordinate is the center of the rectangle."),Object(a.b)("p",null,"Next we need to add our pipes in the ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite's state, defining it in the ",Object(a.b)("inlineCode",{parentName:"p"},"init")," method. Then in the ",Object(a.b)("inlineCode",{parentName:"p"},"loop")," method we update the state to move the pipe. Lastly in ",Object(a.b)("inlineCode",{parentName:"p"},"render")," we map the ",Object(a.b)("inlineCode",{parentName:"p"},"pipe")," state to the ",Object(a.b)("inlineCode",{parentName:"p"},"Pipe")," Sprite."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"newPipe")," function sets a random ",Object(a.b)("inlineCode",{parentName:"p"},"y")," coordinate for the pipe gap, which our bird has to jump through. The ",Object(a.b)("inlineCode",{parentName:"p"},"device")," parameter has a ",Object(a.b)("inlineCode",{parentName:"p"},"random")," field, which works like ",Object(a.b)("inlineCode",{parentName:"p"},"Math.random"),". It's important to use Replay's ",Object(a.b)("inlineCode",{parentName:"p"},"random")," function to ensure the game works cross-platform."))}d.isMDXComponent=!0}}]);