var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n="Expected a function",i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),p=Object.prototype.toString,v=Math.max,y=Math.min,m=function(){return s.Date.now()};function g(t,e,i){var r,o,u,f,a,c,l=0,d=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function g(e){var n=r,i=o;return r=o=void 0,l=e,f=t.apply(i,n)}function w(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function T(){var t=m();if(w(t))return h(t);a=setTimeout(T,function(t){var n=e-(t-c);return s?y(n,u-(t-l)):n}(t))}function h(t){return a=void 0,p&&r?g(t):(r=o=void 0,f)}function O(){var t=m(),n=w(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(T,e),d?g(t):f}(c);if(s)return a=setTimeout(T,e),g(c)}return void 0===a&&(a=setTimeout(T,e)),f}return e=j(e)||0,b(i)&&(d=!!i.leading,u=(s="maxWait"in i)?v(j(i.maxWait)||0,e):u,p="trailing"in i?!!i.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},O.flush=function(){return void 0===a?f:h(m())},O}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==r}(t))return i;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=f.test(t);return n||a.test(t)?c(t.slice(2),n?2:8):u.test(t)?i:+t}e=function(t,e,i){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(n);return b(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),g(t,e,{leading:r,maxWait:e,trailing:o})};const w=document.querySelector("iframe"),T=new Vimeo.Player(w);T.on("timeupdate",e((function(t){localStorage.setItem("videoplayer-current-time",t.seconds)}),1e3)),T.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
//# sourceMappingURL=02-video.b709cb80.js.map