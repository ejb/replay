(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},148:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(157),i=n(154),l=n(49),s=n.n(l),c=37,p=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,u=e.values,b=e.groupId,d=Object(o.a)(),m=d.tabGroupChoices,j=d.setTabGroupChoices,O=Object(a.useState)(l),f=O[0],h=O[1],g=Object(a.useState)(!1),x=g[0],y=g[1];if(null!=b){var N=m[b];null!=N&&N!==f&&u.some((function(e){return e.value===N}))&&h(N)}var v=function(e){h(e),null!=b&&j(b,e)},w=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},T=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",T)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===t}),style:x?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),C(e)},onFocus:function(){return v(t)},onClick:function(){v(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},154:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},157:function(e,t,n){"use strict";var a=n(0),r=n(159);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},159:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(142)),i=n(148),l=n(149),s={id:"test",title:"Replay Test"},c={unversionedId:"test",id:"test",isDocsHomePage:!1,title:"Replay Test",description:"Once you've worked on your game for a while, it's a good idea to add some tests to avoid things breaking in the future. It gives you the confidence to keep publishing new updates!",source:"@site/docs/test.md",permalink:"/docs/test",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/test.md",sidebar:"someSidebar",previous:{title:"Pure Sprites",permalink:"/docs/pure-sprites"},next:{title:"Web",permalink:"/docs/web"}},p=[{value:"<code>testSprite(sprite, gameProps, options)</code>",id:"testspritesprite-gameprops-options",children:[{value:"<code>nextFrame()</code>",id:"nextframe",children:[]},{value:"<code>jumpToFrame(condition, maxFrames)</code>",id:"jumptoframecondition-maxframes",children:[]},{value:"<code>setRandomNumbers(array)</code>",id:"setrandomnumbersarray",children:[]},{value:"<code>updateInputs(inputs)</code>",id:"updateinputsinputs",children:[]},{value:"<code>getTextures()</code>",id:"gettextures",children:[]},{value:"<code>getTexture(testId)</code>",id:"gettexturetestid",children:[]},{value:"<code>textureExists(testId)</code>",id:"textureexiststestid",children:[]},{value:"<code>getByText(text)</code>",id:"getbytexttext",children:[]},{value:"<code>log</code>",id:"log",children:[]},{value:"<code>audio</code>",id:"audio",children:[]},{value:"<code>network</code>",id:"network",children:[]},{value:"<code>store</code>",id:"store",children:[]},{value:"<code>alert</code>",id:"alert",children:[]},{value:"<code>updateAlertResponse(isOk)</code>",id:"updatealertresponseisok",children:[]},{value:"<code>clipboard</code>",id:"clipboard",children:[]}]},{value:"Example",id:"example",children:[]}],u={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once you've worked on your game for a while, it's a good idea to add some tests to avoid things breaking in the future. It gives you the confidence to keep publishing new updates!"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@replay/test")," package is useful for writing tests in Jest for your Replay game. It provides a test platform, which works the same as any other like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web"}),"web")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/ios"}),"iOS"),", but returns helpful utility functions for testing."),Object(o.b)("h2",{id:"testspritesprite-gameprops-options"},Object(o.b)("inlineCode",{parentName:"h2"},"testSprite(sprite, gameProps, options)")),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sprite"),": The Sprite you want to test called with its props, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"Player(playerProps)"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gameProps"),": The props defined for your top-level ",Object(o.b)("inlineCode",{parentName:"li"},"Game"),". This sets the device size during tests."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options"),": (Optional) An object with the following properties:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initInputs"),": (Optional) The inputs your ",Object(o.b)("inlineCode",{parentName:"li"},"device")," returns. Match with the platforms you're targeting."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mapInputCoordinates"),": (Optional) A mapping function to adjust an input's (x, y) coordinate to its relative value within a Sprite. The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web"}),"Web package")," exports this for pointer values."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initRandom"),": (Optional) An array of numbers that ",Object(o.b)("inlineCode",{parentName:"li"},"random()")," will call, starting from index 0 and looping if it reaches the end. Allows for predictable randomness."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"size"),": (Optional) Set the size parameter passed into Sprites."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initStore"),": (Optional) Set the init store for local storage."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"networkResponses"),": (Optional) Mock network responses by URL, e.g:")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  get: {\n    "/api/score": {\n      success: true,\n    },\n  },\n},\n')),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initAlertResponse"),": (Optional) Set which choice is chosen for OK / cancel alerts. Default ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nativeSpriteNames"),": (Optional) A list of ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/native-sprites"}),"Native Sprite")," names to mock."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"isTouchScreen"),": (Optional) Set the ",Object(o.b)("inlineCode",{parentName:"li"},"isTouchScreen")," parameter.")))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"testSprite")," returns an object with the following fields:"),Object(o.b)("h3",{id:"nextframe"},Object(o.b)("inlineCode",{parentName:"h3"},"nextFrame()")),Object(o.b)("p",null,"Increment game by one frame."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"nextFrame();\n")),Object(o.b)("h3",{id:"jumptoframecondition-maxframes"},Object(o.b)("inlineCode",{parentName:"h3"},"jumpToFrame(condition, maxFrames)")),Object(o.b)("h4",{id:"parameters-1"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"condition"),": A function that can return a boolean or throw an error."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"maxFrames"),": (Optional) Set the maximum number of frames that will run. Default ",Object(o.b)("inlineCode",{parentName:"li"},"1800"),".")),Object(o.b)("p",null,"Asynchronously progress frames of the game until condition is met and no errors are thrown. Condition can also return a Texture (useful for throwing methods like ",Object(o.b)("inlineCode",{parentName:"p"},"getTexture"),"). Rejects if 30 gameplay seconds (1800 frames) pass and condition not met / still errors."),Object(o.b)("p",null,"Note that this will run at almost synchronous speed, but doesn't block the event loop."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await jumpToFrame(() => props.x > 10);\n")),Object(o.b)("h3",{id:"setrandomnumbersarray"},Object(o.b)("inlineCode",{parentName:"h3"},"setRandomNumbers(array)")),Object(o.b)("p",null,"Reset the array of random numbers."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"setRandomNumbers([0.2, 0.3, 0.4]);\n")),Object(o.b)("h3",{id:"updateinputsinputs"},Object(o.b)("inlineCode",{parentName:"h3"},"updateInputs(inputs)")),Object(o.b)("p",null,"Update the input state for the next frame, such as to indicate the pointer is pressed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"updateInputs({\n  pointer: {\n    pressed: true,\n    justPressed: true,\n    justReleased: false,\n    // Here the pointer position will have the\n    // same coordinates in all Sprites unless\n    // you set mapInputCoordinates\n    x: 0,\n    y: 0,\n  },\n});\n")),Object(o.b)("h3",{id:"gettextures"},Object(o.b)("inlineCode",{parentName:"h3"},"getTextures()")),Object(o.b)("p",null,"Returns an array of textures that were just rendered to the screen."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const textures = getTextures();\n")),Object(o.b)("h3",{id:"gettexturetestid"},Object(o.b)("inlineCode",{parentName:"h3"},"getTexture(testId)")),Object(o.b)("p",null,"Get a Texture with a matching prop ",Object(o.b)("inlineCode",{parentName:"p"},"testId"),". Throws if there are no matches."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const player = getTexture("player");\n')),Object(o.b)("h3",{id:"textureexiststestid"},Object(o.b)("inlineCode",{parentName:"h3"},"textureExists(testId)")),Object(o.b)("p",null,"Boolean of whether a Texture with a ",Object(o.b)("inlineCode",{parentName:"p"},"testId")," prop exists."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'expect(textureExists("player")).toBe(true);\n')),Object(o.b)("h3",{id:"getbytexttext"},Object(o.b)("inlineCode",{parentName:"h3"},"getByText(text)")),Object(o.b)("p",null,"Get an array of text Textures which include text content. Case insensitive. Returns empty array if no matches found."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const scoreLabel = getByText("Score: 10")[0];\n')),Object(o.b)("h3",{id:"log"},Object(o.b)("inlineCode",{parentName:"h3"},"log")),Object(o.b)("p",null,"A Jest mock function to detect if ",Object(o.b)("inlineCode",{parentName:"p"},"log")," was called by a Sprite."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'expect(log).toBeCalledWith("Hello Replay");\n')),Object(o.b)("h3",{id:"audio"},Object(o.b)("inlineCode",{parentName:"h3"},"audio")),Object(o.b)("p",null,"An object of Jest mock functions for testing audio calls."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'expect(audio.play).toBeCalledWith("boop.wav");\n')),Object(o.b)("h3",{id:"network"},Object(o.b)("inlineCode",{parentName:"h3"},"network")),Object(o.b)("p",null,"An object of network mock functions for testing network responses."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"expect(network.get).toBeCalled();\n")),Object(o.b)("h3",{id:"store"},Object(o.b)("inlineCode",{parentName:"h3"},"store")),Object(o.b)("p",null,"A mock local storage store."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"expect(store).toEqual({ highScore: 5 });\n")),Object(o.b)("h3",{id:"alert"},Object(o.b)("inlineCode",{parentName:"h3"},"alert")),Object(o.b)("p",null,"A mock alert object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'expect(alert.okCancel).toBeCalledWith("Ok or cancel?", expect.any(Function));\n')),Object(o.b)("h3",{id:"updatealertresponseisok"},Object(o.b)("inlineCode",{parentName:"h3"},"updateAlertResponse(isOk)")),Object(o.b)("p",null,"Update whether OK / cancel alert chooses OK or cancel."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"updateAlertResponse(false);\n")),Object(o.b)("h3",{id:"clipboard"},Object(o.b)("inlineCode",{parentName:"h3"},"clipboard")),Object(o.b)("p",null,"A mock clipboard object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'expect(clipboard.copy).toBeCalledWith("ABCDEFG", expect.any(Function));\n')),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(i.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { testSprite } from "@replay/test";\nimport { Game, gameProps } from "..";\n\ntest("Can shoot bullet", () => {\n  const initInputs = {\n    pointer: {\n      pressed: false,\n      justPressed: false,\n      justReleased: false,\n      x: 0,\n      y: 0,\n    },\n  };\n\n  const { nextFrame, updateInputs, getTexture, textureExists } = testSprite(\n    Game(gameProps),\n    gameProps,\n    {\n      initInputs,\n    }\n  );\n\n  expect(textureExists("bullet")).toBe(false);\n\n  updateInputs({\n    pointer: {\n      pressed: true,\n      justPressed: true,\n      justReleased: false,\n      x: 0,\n      y: 0,\n    },\n  });\n  nextFrame();\n\n  updateInputs(initInputs);\n  nextFrame();\n\n  expect(textureExists("bullet")).toBe(true);\n  expect(getTexture("bullet").props.y).toBe(100);\n});\n'))),Object(o.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { testSprite } from "@replay/test";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Game, gameProps } from "..";\n\ntest("Can shoot bullet", () => {\n  const initInputs: WebInputs | iOSInputs = {\n    pointer: {\n      pressed: false,\n      justPressed: false,\n      justReleased: false,\n      x: 0,\n      y: 0,\n    },\n  };\n\n  const { nextFrame, updateInputs, getTexture, textureExists } = testSprite(\n    Game(gameProps),\n    {\n      initInputs,\n    }\n  );\n\n  expect(textureExists("bullet")).toBe(false);\n\n  updateInputs({\n    pointer: {\n      pressed: true,\n      justPressed: true,\n      justReleased: false,\n      x: 0,\n      y: 0,\n    },\n  });\n  nextFrame();\n\n  updateInputs(initInputs);\n  nextFrame();\n\n  expect(textureExists("bullet")).toBe(true);\n  expect(getTexture("bullet").props.y).toBe(100);\n});\n')))))}b.isMDXComponent=!0}}]);