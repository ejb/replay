(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(141)),i={id:"web",title:"Web"},p={unversionedId:"web",id:"web",isDocsHomePage:!1,title:"Web",description:"To render a game for the browser use the @replay/web package.",source:"@site/docs/web.md",permalink:"/docs/web",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/web.md",sidebar:"someSidebar",previous:{title:"Replay Test",permalink:"/docs/test"},next:{title:"iOS",permalink:"/docs/ios"}},s=[{value:"<code>renderCanvas(game, options)</code>",id:"rendercanvasgame-options",children:[]},{value:"<code>mapInputCoordinates(getLocalCoords, inputs)</code>",id:"mapinputcoordinatesgetlocalcoords-inputs",children:[]},{value:"Inputs",id:"inputs",children:[]}],c={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To render a game for the browser use the ",Object(o.b)("inlineCode",{parentName:"p"},"@replay/web")," package."),Object(o.b)("h3",{id:"rendercanvasgame-options"},Object(o.b)("inlineCode",{parentName:"h3"},"renderCanvas(game, options)")),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"game"),": Your ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/top-level-game"}),"Top-Level Game")," Sprite called with its props passed in, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"Game(gameProps)"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options"),": (Optional) An object with the following properties:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dimensions"),": (Optional) A string that is either:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"game-coords"'),": (default) Use the game coordinates as pixels in the browser."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"scale-up"'),": Scales the game so that it fills up the browser window."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nativeSpriteMap"),": (Optional) A map of ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/native-sprites"}),"Native Sprite")," names and their web implementation."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"canvas"),": (Optional) A canvas element to render to. If omitted, Replay will create a canvas in the document."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"windowSize"),": (Optional) An object with width and height fields. Use to override the view size, instead of using the window size.")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { renderCanvas } from "@replay/web";\nimport { t } from "@replay/core";\nimport { Game, gameProps } from "../src";\n\nrenderCanvas(Game(gameProps), {\n  dimensions: "scale-up",\n});\n')),Object(o.b)("h3",{id:"mapinputcoordinatesgetlocalcoords-inputs"},Object(o.b)("inlineCode",{parentName:"h3"},"mapInputCoordinates(getLocalCoords, inputs)")),Object(o.b)("p",null,"This can be used by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/test"}),"Replay Test"),", see the docs there for more info."),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"device.inputs")," parameter of Sprite methods is of type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"type WebInputs = {\n  keysDown: KeysPressed;\n  keysJustPressed: KeysPressed;\n  pointer: {\n    pressed: boolean;\n    numberPressed: number; // multi-touch\n    justPressed: boolean;\n    justReleased: boolean;\n    x: number;\n    y: number;\n  };\n};\n\ntype KeysPressed = {\n  [key: string]: true | undefined;\n};\n")),Object(o.b)("p",null,"The keys of ",Object(o.b)("inlineCode",{parentName:"p"},"KeysPressed")," are based on the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," value of browser keyboard events. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://keycode.info"}),"keycode.info")," for values of ",Object(o.b)("inlineCode",{parentName:"p"},"event.key"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"justPressed")," is only ",Object(o.b)("inlineCode",{parentName:"p"},"true")," for one frame after an input is pressed, ",Object(o.b)("inlineCode",{parentName:"p"},"justReleased")," for one frame after an input is released."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'  loop({ device, state }) {\n    let { x } = state;\n    // Move when space bar is down\n    if (device.inputs.keysDown[" "]) {\n      x += 5;\n    }\n    return { ...state, x };\n  },\n')))}l.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,p(p({ref:t},c),{},{components:n})):a.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);