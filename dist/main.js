!function(){var e,t,n,r,o,i,u={825:function(e,t,n){"use strict";var r=new Error;e.exports=new Promise((function(e,t){if("undefined"!=typeof MFE1)return e();n.l("https://storage.googleapis.com/frontend-astreav2/remoteEntry.js",(function(n){if("undefined"!=typeof MFE1)return e();var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;r.message="Loading script failed.\n("+o+": "+i+")",r.name="ScriptExternalLoadError",r.type=o,r.request=i,t(r)}),"MFE1")})).then((function(){return MFE1}))}},f={};function a(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={id:e,exports:{}};return u[e](n,n.exports,a),n.exports}a.m=u,a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);a.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return n[e]}}));return i.default=function(){return n},a.d(o,i),o},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return e+".js"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="mfe2:",a.l=function(e,t,o,i){if(n[e])n[e].push(t);else{var u,f;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var l=c[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+o){u=l;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",r+o),u.src=e),n[e]=[t];var p=function(t,r){u.onerror=u.onload=null,clearTimeout(d);var o=n[e];if(delete n[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),f&&document.head.appendChild(u)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={216:[1]},i={1:["default","./Button",825]},a.f.remotes=function(e,t){a.o(o,e)&&o[e].forEach((function(e){var n=a.R;n||(n=[]);var r=i[e];if(!(n.indexOf(r)>=0)){if(n.push(r),r.p)return t.push(r.p);var o=function(t){t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+r[1]+'" from '+r[2]),u[e]=function(){throw t},r.p=0},f=function(e,n,i,u,f,a){try{var c=e(n,i);if(!c||!c.then)return f(c,u,a);var s=c.then((function(e){return f(e,u)}),o);if(!a)return s;t.push(r.p=s)}catch(e){o(e)}},c=function(e,t,o){return f(t.get,r[1],n,0,s,o)},s=function(t){r.p=1,u[e]=function(e){e.exports=t()}};f(a,r[2],0,0,(function(e,t,n){return e?f(a.I,r[0],0,e,c,n):o()}),1)}}))},function(){a.S={};var e={},t={};a.I=function(n,r){r||(r=[]);var o=t[n];if(o||(o=t[n]={}),!(r.indexOf(o)>=0)){if(r.push(o),e[n])return e[n];a.o(a.S,n)||(a.S[n]={}),a.S[n];var i=[];return"default"===n&&function(e){var t=function(e){var t;t="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(t)};try{var o=a(825);if(!o)return;var u=function(e){return e&&e.init&&e.init(a.S[n],r)};if(o.then)return i.push(o.then(u,t));var f=u(o);f&&f.then&&i.push(f.catch(t))}catch(e){t(e)}}(),i.length?e[n]=Promise.all(i).then((function(){return e[n]=1})):e[n]=1}}}(),function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e={179:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(216!=t){var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=a.p+a.u(t),u=new Error;a.l(i,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}}),"chunk-"+t,t)}else e[t]=0};var t=function(t,n){var r,o,i=n[0],u=n[1],f=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)a.o(u,r)&&(a.m[r]=u[r]);f&&f(a)}for(t&&t(n);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0},n=self.webpackChunkmfe2=self.webpackChunkmfe2||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),Promise.all([a.e(248),a.e(200)]).then(a.bind(a,200))}();