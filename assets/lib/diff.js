// https://github.com/kpdecker/jsdiff
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.JsDiff=n():e.JsDiff=n()}(this,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}return t.m=e,t.c=n,t.p="",t(0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.canonicalize=n.convertChangesToXML=n.convertChangesToDMP=n.parsePatch=n.applyPatches=n.applyPatch=n.createPatch=n.createTwoFilesPatch=n.structuredPatch=n.diffArrays=n.diffJson=n.diffCss=n.diffSentences=n.diffTrimmedLines=n.diffLines=n.diffWordsWithSpace=n.diffWords=n.diffChars=n.Diff=void 0;var r,i=t(1),o=(r=i)&&r.__esModule?r:{default:r},f=t(2),s=t(3),u=t(5),a=t(6),l=t(7),c=t(8),d=t(9),p=t(10),h=t(11),v=t(13),g=t(14),m=t(15);n.Diff=o.default,n.diffChars=f.diffChars,n.diffWords=s.diffWords,n.diffWordsWithSpace=s.diffWordsWithSpace,n.diffLines=u.diffLines,n.diffTrimmedLines=u.diffTrimmedLines,n.diffSentences=a.diffSentences,n.diffCss=l.diffCss,n.diffJson=c.diffJson,n.diffArrays=d.diffArrays,n.structuredPatch=v.structuredPatch,n.createTwoFilesPatch=v.createTwoFilesPatch,n.createPatch=v.createPatch,n.applyPatch=p.applyPatch,n.applyPatches=p.applyPatches,n.parsePatch=h.parsePatch,n.convertChangesToDMP=g.convertChangesToDMP,n.convertChangesToXML=m.convertChangesToXML,n.canonicalize=c.canonicalize},function(e,n){"use strict";function t(){}function r(e,n,t,r,i){for(var o=0,f=n.length,s=0,u=0;o<f;o++){var a=n[o];if(a.removed){if(a.value=e.join(r.slice(u,u+a.count)),u+=a.count,o&&n[o-1].added){var l=n[o-1];n[o-1]=n[o],n[o]=l}}else{if(!a.added&&i){var c=t.slice(s,s+a.count);c=c.map(function(e,n){var t=r[u+n];return t.length>e.length?t:e}),a.value=e.join(c)}else a.value=e.join(t.slice(s,s+a.count));s+=a.count,a.added||(u+=a.count)}}var d=n[f-1];return f>1&&(d.added||d.removed)&&e.equals("",d.value)&&(n[f-2].value+=d.value,n.pop()),n}Object.defineProperty(n,"__esModule",{value:!0}),n.default=t,t.prototype={diff:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.callback;"function"==typeof t&&(i=t,t={}),this.options=t;var o=this;function f(e){return i?(setTimeout(function(){i(void 0,e)},0),!0):e}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e));var s=(n=this.removeEmpty(this.tokenize(n))).length,u=e.length,a=1,l=s+u,c=[{newPos:-1,components:[]}],d=this.extractCommon(c[0],n,e,0);if(c[0].newPos+1>=s&&d+1>=u)return f([{value:this.join(n),count:n.length}]);function p(){for(var t=-1*a;t<=a;t+=2){var i=void 0,l=c[t-1],d=c[t+1],p=(d?d.newPos:0)-t;l&&(c[t-1]=void 0);var h=l&&l.newPos+1<s,v=d&&0<=p&&p<u;if(h||v){if(!h||v&&l.newPos<d.newPos?(i={newPos:(g=d).newPos,components:g.components.slice(0)},o.pushComponent(i.components,void 0,!0)):((i=l).newPos++,o.pushComponent(i.components,!0,void 0)),p=o.extractCommon(i,n,e,t),i.newPos+1>=s&&p+1>=u)return f(r(o,i.components,n,e,o.useLongestToken));c[t]=i}else c[t]=void 0}var g;a++}if(i)!function e(){setTimeout(function(){if(a>l)return i();p()||e()},0)}();else for(;a<=l;){var h=p();if(h)return h}},pushComponent:function(e,n,t){var r=e[e.length-1];r&&r.added===n&&r.removed===t?e[e.length-1]={count:r.count+1,added:n,removed:t}:e.push({count:1,added:n,removed:t})},extractCommon:function(e,n,t,r){for(var i=n.length,o=t.length,f=e.newPos,s=f-r,u=0;f+1<i&&s+1<o&&this.equals(n[f+1],t[s+1]);)f++,s++,u++;return u&&e.components.push({count:u}),e.newPos=f,s},equals:function(e,n){return e===n},removeEmpty:function(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.characterDiff=void 0,n.diffChars=function(e,n,t){return f.diff(e,n,t)};var r,i=t(1),o=(r=i)&&r.__esModule?r:{default:r};var f=n.characterDiff=new o.default},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.wordDiff=void 0,n.diffWords=function(e,n,t){var r=(0,f.generateOptions)(t,{ignoreWhitespace:!0});return a.diff(e,n,r)},n.diffWordsWithSpace=function(e,n,t){return a.diff(e,n,t)};var r,i=t(1),o=(r=i)&&r.__esModule?r:{default:r},f=t(4);var s=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,u=/\S/,a=n.wordDiff=new o.default;a.equals=function(e,n){return e===n||this.options.ignoreWhitespace&&!u.test(e)&&!u.test(n)},a.tokenize=function(e){for(var n=e.split(/(\s+|\b)/),t=0;t<n.length-1;t++)!n[t+1]&&n[t+2]&&s.test(n[t])&&s.test(n[t+2])&&(n[t]+=n[t+2],n.splice(t+1,2),t--);return n}},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.generateOptions=function(e,n){if("function"==typeof e)n.callback=e;else if(e)for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.lineDiff=void 0,n.diffLines=function(e,n,t){return s.diff(e,n,t)},n.diffTrimmedLines=function(e,n,t){var r=(0,f.generateOptions)(t,{ignoreWhitespace:!0});return s.diff(e,n,r)};var r,i=t(1),o=(r=i)&&r.__esModule?r:{default:r},f=t(4);var s=n.lineDiff=new o.default;s.tokenize=function(e){var n=[],t=e.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(var r=0;r<t.length;r++){var i=t[r];r%2&&!this.options.newlineIsToken?n[n.length-1]+=i:(this.options.ignoreWhitespace&&(i=i.trim()),n.push(i))}return n}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sentenceDiff=void 0,n.diffSentences=function(e,n,t){return f.diff(e,n,t)};var r,i=t(1),o=(r=i)&&r.__esModule?r:{default:r};var f=n.sentenceDiff=new o.default;f.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.cssDiff=void 0,n.diffCss=function(e,n,t){return f.diff(e,n,t)};var r,i=t(1),o=(r=i)&&r.__esModule?r:{default:r};var f=n.cssDiff=new o.default;f.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.jsonDiff=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.diffJson=function(e,n,t){return a.diff(e,n,t)},n.canonicalize=l;var i,o=t(1),f=(i=o)&&i.__esModule?i:{default:i},s=t(5);var u=Object.prototype.toString,a=n.jsonDiff=new f.default;function l(e,n,t){n=n||[],t=t||[];var i=void 0;for(i=0;i<n.length;i+=1)if(n[i]===e)return t[i];var o=void 0;if("[object Array]"===u.call(e)){for(n.push(e),o=new Array(e.length),t.push(o),i=0;i<e.length;i+=1)o[i]=l(e[i],n,t);return n.pop(),t.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),"object"===(void 0===e?"undefined":r(e))&&null!==e){n.push(e),o={},t.push(o);var f=[],s=void 0;for(s in e)e.hasOwnProperty(s)&&f.push(s);for(f.sort(),i=0;i<f.length;i+=1)o[s=f[i]]=l(e[s],n,t);n.pop(),t.pop()}else o=e;return o}a.useLongestToken=!0,a.tokenize=s.lineDiff.tokenize,a.castInput=function(e){var n=this.options.undefinedReplacement;return"string"==typeof e?e:JSON.stringify(l(e),function(e,t){return void 0===t?n:t},"  ")},a.equals=function(e,n){return f.default.prototype.equals(e.replace(/,([\r\n])/g,"$1"),n.replace(/,([\r\n])/g,"$1"))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.arrayDiff=void 0,n.diffArrays=function(e,n,t){return f.diff(e,n,t)};var r,i=t(1),o=(r=i)&&r.__esModule?r:{default:r};var f=n.arrayDiff=new o.default;f.tokenize=f.join=function(e){return e.slice()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.applyPatch=s,n.applyPatches=function(e,n){"string"==typeof e&&(e=(0,i.parsePatch)(e));var t=0;!function r(){var i=e[t++];if(!i)return n.complete();n.loadFile(i,function(e,t){if(e)return n.complete(e);var o=s(t,i,n);n.patched(i,o,function(e){if(e)return n.complete(e);r()})})}()};var r,i=t(11),o=t(12),f=(r=o)&&r.__esModule?r:{default:r};function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n&&(n=(0,i.parsePatch)(n)),Array.isArray(n)){if(n.length>1)throw new Error("applyPatch only works with a single input.");n=n[0]}var r=e.split(/\r\n|[\n\v\f\r\x85]/),o=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],s=n.hunks,u=t.compareLine||function(e,n,t,r){return n===r},a=0,l=t.fuzzFactor||0,c=0,d=0,p=void 0,h=void 0;function v(e,n){for(var t=0;t<e.lines.length;t++){var i=e.lines[t],o=i[0],f=i.substr(1);if(" "===o||"-"===o){if(!u(n+1,r[n],o,f)&&++a>l)return!1;n++}}return!0}for(var g=0;g<s.length;g++){for(var m=s[g],y=r.length-m.oldLines,P=0,w=d+m.oldStart-1,_=(0,f.default)(w,c,y);void 0!==P;P=_())if(v(m,w+P)){m.offset=d+=P;break}if(void 0===P)return!1;c=m.offset+m.oldStart+m.oldLines}for(var b=0;b<s.length;b++){var j=s[b],M=j.offset+j.newStart-1;0==j.newLines&&M++;for(var x=0;x<j.lines.length;x++){var L=j.lines[x],S=L[0],k=L.substr(1),O=j.linedelimiters[x];if(" "===S)M++;else if("-"===S)r.splice(M,1),o.splice(M,1);else if("+"===S)r.splice(M,0,k),o.splice(M,0,O),M++;else if("\\"===S){var C=j.lines[x-1]?j.lines[x-1][0]:null;"+"===C?p=!0:"-"===C&&(h=!0)}}}if(p)for(;!r[r.length-1];)r.pop(),o.pop();else h&&(r.push(""),o.push("\n"));for(var D=0;D<r.length-1;D++)r[D]=r[D]+o[D];return r.join("")}},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.parsePatch=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.split(/\r\n|[\n\v\f\r\x85]/),r=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],i=[],o=0;function f(){var e={};for(i.push(e);o<t.length;){var r=t[o];if(/^(\-\-\-|\+\+\+|@@)\s/.test(r))break;var f=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);f&&(e.index=f[1]),o++}for(s(e),s(e),e.hunks=[];o<t.length;){var a=t[o];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(a))break;if(/^@@/.test(a))e.hunks.push(u());else{if(a&&n.strict)throw new Error("Unknown line "+(o+1)+" "+JSON.stringify(a));o++}}}function s(e){var n=/^(---|\+\+\+)\s+([\S ]*)(?:\t(.*?)\s*)?$/.exec(t[o]);if(n){var r="---"===n[1]?"old":"new";e[r+"FileName"]=n[2],e[r+"Header"]=n[3],o++}}function u(){for(var e=o,i=t[o++],f=i.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),s={oldStart:+f[1],oldLines:+f[2]||1,newStart:+f[3],newLines:+f[4]||1,lines:[],linedelimiters:[]},u=0,a=0;o<t.length&&!(0===t[o].indexOf("--- ")&&o+2<t.length&&0===t[o+1].indexOf("+++ ")&&0===t[o+2].indexOf("@@"));o++){var l=t[o][0];if("+"!==l&&"-"!==l&&" "!==l&&"\\"!==l)break;s.lines.push(t[o]),s.linedelimiters.push(r[o]||"\n"),"+"===l?u++:"-"===l?a++:" "===l&&(u++,a++)}if(u||1!==s.newLines||(s.newLines=0),a||1!==s.oldLines||(s.oldLines=0),n.strict){if(u!==s.newLines)throw new Error("Added line count did not match for hunk at line "+(e+1));if(a!==s.oldLines)throw new Error("Removed line count did not match for hunk at line "+(e+1))}return s}for(;o<t.length;)f();return i}},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,t){var r=!0,i=!1,o=!1,f=1;return function s(){if(r&&!o){if(i?f++:r=!1,e+f<=t)return f;o=!0}if(!i)return o||(r=!0),n<=e-f?-f++:(i=!0,s())}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.structuredPatch=o,n.createTwoFilesPatch=f,n.createPatch=function(e,n,t,r,i,o){return f(e,e,n,t,r,i,o)};var r=t(5);function i(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function o(e,n,t,o,f,s,u){u||(u={}),void 0===u.context&&(u.context=4);var a=(0,r.diffLines)(t,o,u);function l(e){return e.map(function(e){return" "+e})}a.push({value:"",lines:[]});for(var c=[],d=0,p=0,h=[],v=1,g=1,m=function(e){var n=a[e],r=n.lines||n.value.replace(/\n$/,"").split("\n");if(n.lines=r,n.added||n.removed){var f;if(!d){var s=a[e-1];d=v,p=g,s&&(h=u.context>0?l(s.lines.slice(-u.context)):[],d-=h.length,p-=h.length)}(f=h).push.apply(f,i(r.map(function(e){return(n.added?"+":"-")+e}))),n.added?g+=r.length:v+=r.length}else{if(d)if(r.length<=2*u.context&&e<a.length-2){var m;(m=h).push.apply(m,i(l(r)))}else{var y,P=Math.min(r.length,u.context);(y=h).push.apply(y,i(l(r.slice(0,P))));var w={oldStart:d,oldLines:v-d+P,newStart:p,newLines:g-p+P,lines:h};if(e>=a.length-2&&r.length<=u.context){var _=/\n$/.test(t),b=/\n$/.test(o);0!=r.length||_?_&&b||h.push("\\ No newline at end of file"):h.splice(w.oldLines,0,"\\ No newline at end of file")}c.push(w),d=0,p=0,h=[]}v+=r.length,g+=r.length}},y=0;y<a.length;y++)m(y);return{oldFileName:e,newFileName:n,oldHeader:f,newHeader:s,hunks:c}}function f(e,n,t,r,i,f,s){var u=o(e,n,t,r,i,f,s),a=[];e==n&&a.push("Index: "+e),a.push("==================================================================="),a.push("--- "+u.oldFileName+(void 0===u.oldHeader?"":"\t"+u.oldHeader)),a.push("+++ "+u.newFileName+(void 0===u.newHeader?"":"\t"+u.newHeader));for(var l=0;l<u.hunks.length;l++){var c=u.hunks[l];a.push("@@ -"+c.oldStart+","+c.oldLines+" +"+c.newStart+","+c.newLines+" @@"),a.push.apply(a,c.lines)}return a.join("\n")+"\n"}},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.convertChangesToDMP=function(e){for(var n=[],t=void 0,r=void 0,i=0;i<e.length;i++)t=e[i],r=t.added?1:t.removed?-1:0,n.push([r,t.value]);return n}},function(e,n){"use strict";function t(e){var n=e;return n=(n=(n=(n=n.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")}Object.defineProperty(n,"__esModule",{value:!0}),n.convertChangesToXML=function(e){for(var n=[],r=0;r<e.length;r++){var i=e[r];i.added?n.push("<ins>"):i.removed&&n.push("<del>"),n.push(t(i.value)),i.added?n.push("</ins>"):i.removed&&n.push("</del>")}return n.join("")}}])});