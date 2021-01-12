(()=>{"use strict";const t=function(){const t=document.getElementById("content"),e=document.createElement("header"),n=document.createElement("h1");n.textContent="To-Do or Not To-Do",e.classList.add("text-center"),e.appendChild(n),t.appendChild(e)},e=(t,e)=>({name:t,idx:e}),n=function(t){const e=document.createElement("form"),n=document.createElement("div");return n.classList.add("col-12"),e.setAttribute("id","task-form"+t),e.classList.add("order-"+t),e.classList.add("new-task-form"),e.classList.add("task-form"),e.classList.add("row"),e.addEventListener("submit",(t=>{t.preventDefault(),f.formSubmit(e)})),function(){const r=function(){const t=document.createElement("div"),e=document.createElement("input");return e.setAttribute("type","text"),e.setAttribute("placeholder","Task Name"),e.classList.add("w-100"),e.required=!0,t.classList.add("task-name"),t.classList.add("col-6"),t.classList.add("pr-0"),t.appendChild(e),t}(),a=function(){const t=document.createElement("div"),e=document.createElement("input");return e.setAttribute("type","datetime-local"),e.classList.add("w-100"),t.classList.add("task-date"),t.classList.add("col-6"),t.classList.add("pl-0"),t.appendChild(e),t}(),i=function(){const e=document.createElement("div"),n=document.createElement("textarea");return n.setAttribute("placeholder","Notes about task"),n.setAttribute("form","task-form"+t),n.classList.add("w-100"),e.classList.add("task-note"),e.appendChild(n),e}(),o=function(){const e=document.createElement("div"),n=document.createElement("input");return n.setAttribute("type","hidden"),n.setAttribute("id","project"+t),n.setAttribute("value",t),e.classList.add("task-project"),e.appendChild(n),e}(),s=function(){const e=document.createElement("div"),n=document.createElement("input"),r=document.createElement("label"),a=document.createElement("div"),i=document.createElement("input"),o=document.createElement("label"),s=document.createElement("div"),d=document.createElement("input"),c=document.createElement("label"),u=document.createElement("div");return a.classList.add("low-box"),a.classList.add("pri-box"),s.classList.add("med-box"),s.classList.add("pri-box"),s.classList.add("mx-3"),u.classList.add("high-box"),u.classList.add("pri-box"),e.classList.add("d-flex"),e.classList.add("col-9"),n.setAttribute("type","radio"),n.setAttribute("name","priority"),n.setAttribute("value","low"),n.classList.add("priority"+t),r.setAttribute("for","lowPriority"),r.classList.add("ml-1"),r.textContent="Low",i.setAttribute("type","radio"),i.setAttribute("name","priority"),i.setAttribute("value","med"),i.classList.add("priority"+t),o.setAttribute("for","medPriority"),o.classList.add("ml-1"),o.textContent="Medium",d.setAttribute("type","radio"),d.setAttribute("name","priority"),d.setAttribute("value","high"),d.classList.add("priority"+t),c.setAttribute("for","highPriority"),c.classList.add("ml-1"),c.textContent="High",a.appendChild(n),a.appendChild(r),e.appendChild(a),s.appendChild(i),s.appendChild(o),e.appendChild(s),u.appendChild(d),u.appendChild(c),e.appendChild(u),e.classList.add("pri-boxes"),e}();e.appendChild(r),e.appendChild(a),n.appendChild(i),e.appendChild(n),e.appendChild(o),e.appendChild(s)}(),function(){const t=document.createElement("div"),n=function(){const t=document.createElement("button");return t.setAttribute("type","submit"),t.textContent="Add",t}();t.appendChild(n),e.appendChild(t)}(),e},r=function(t){const e=document.createElement("div");return e.textContent="+",e.classList.add("add-task"),e.classList.add("my-2"),e.addEventListener("click",(e=>{e.preventDefault(),t.classList.toggle("new-task-form")})),e},a=function(){const t=document.querySelectorAll(".project-box");for(let e=0;e<t.length;e++)t[e].remove()},i=function(t){t.remove()},o=function(t){for(let e=t.length-1;e>=0;e--)t[e].remove()},s=function(){const t=document.querySelector(".leading-form"),e=document.querySelector("#main-content-wrap");t.remove(),e.remove()},d=function(t,e){const r=n(t.proj),a=t.idx;r.classList.remove("new-task-form"),r.classList.remove("order-undefined"),r.removeAttribute("id","task-formundefined"),r.setAttribute("id",`form-${a}`),e.classList.remove("row");let i=r.querySelector(".task-name input"),o=r.querySelector(".task-date input"),s=r.querySelector(".task-note textarea"),d=r.querySelector(".pri-boxes .pri-box:nth-of-type(1) input"),c=r.querySelector(".pri-boxes .pri-box:nth-of-type(2) input"),u=r.querySelector(".pri-boxes .pri-box:nth-of-type(3) input"),l=r.querySelector("button");switch(t.priority){case"low":d.setAttribute("checked",!0);break;case"med":c.setAttribute("checked",!0);break;case"high":u.setAttribute("checked",!0)}i.setAttribute("value",t.name),o.setAttribute("value",t.dueDate),s.value=t.note,s.removeAttribute("form","task-formundefined"),s.setAttribute("form",`form-${a}`),l.textContent="Edit",l.removeEventListener("submit",(t=>{t.preventDefault,f.formSubmit()})),l.addEventListener("click",(e=>{e.preventDefault(),f.editFormSubmit(r,t)})),e.prepend(r)};function c(t){var e;try{e=window[t];var n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}function u(){let t=l(),e=[];for(let n=0;n<=t;n++){let t=JSON.parse(localStorage.getItem("task-"+n));null!=t&&e.push(t)}return e}function l(){let t;return t=null!=localStorage.getItem("taskidx")?JSON.parse(localStorage.getItem("taskidx")):0,t}function m(){let t;return t=null!=localStorage.getItem("projectidx")?JSON.parse(localStorage.getItem("projectidx")):1,t}const f=(()=>{const t=u();let e=0==l()?0:l()+1;function r(n){let r=n.querySelector(".task-name input").value,a=n.querySelector(".task-date input").value,i=n.querySelector(".task-note textarea").value,o=n.querySelector(".task-project input").value,s=n.querySelector(".pri-boxes .pri-box:nth-of-type(1) input"),d=n.querySelector(".pri-boxes .pri-box:nth-of-type(2) input"),u=n.querySelector(".pri-boxes .pri-box:nth-of-type(3) input"),l=[],m="";l.push(s,d,u);for(let t=0;t<l.length;t++)l[t].checked&&(m=l[t].value);let f=((t,e,n,r,a,i="Free Spirited")=>({name:t,dueDate:e,note:n,priority:r,idx:a,project:i}))(r,a,i,m,e,o);t.push(f),c("localStorage")&&(localStorage.setItem("task-"+e,JSON.stringify(f)),localStorage.setItem("taskidx",JSON.stringify(e)))}function a(e){const n=[];for(let r=0;r<t.length;r++){let a=t[r];a.project==e&&n.push(a)}return n}return{getAllTasks:function(){return t},createTask:r,getProjectTasks:a,makeTaskForm:function(t,e){return n(t,e)},formSubmit:function(t){r(t),e++,s(),Tt.render()},taskCheckedOff:function(e){const n=t.indexOf(e);t.splice(n,1),localStorage.removeItem("task-"+e.idx),s(),Tt.render()},editTask:function(t,e){const n=e.children;o(n),d(t,e)},editFormSubmit:function(t,e){e.name=t.querySelector(".task-name input").value,e.dueDate=t.querySelector(".task-date input").value,e.note=t.querySelector(".task-note textarea").value;let n=t.querySelector(".pri-boxes .pri-box:nth-of-type(1) input"),r=t.querySelector(".pri-boxes .pri-box:nth-of-type(2) input"),a=t.querySelector(".pri-boxes .pri-box:nth-of-type(3) input"),i=[],o="";i.push(n,r,a);for(let t=0;t<i.length;t++)i[t].checked&&(o=i[t].value);e.priority=o,localStorage.setItem("task-"+e.idx,JSON.stringify(e)),s(),Tt.render()},delProjectTasks:function(e){const n=a(e);for(let e=0;e<n.length;e++){let r=t.indexOf(n[e]);t.splice(r,1)}}}})();var h=6e4;function p(t){return t.getTime()%h}function g(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(h+p(e))%h:p(e);return n*h+r}function w(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function v(t){w(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function b(t){w(1,arguments);var e=v(t);return e.setHours(0,0,0,0),e}var y=864e5;function C(t,e){w(2,arguments);var n=b(t),r=b(e),a=n.getTime()-g(n),i=r.getTime()-g(r);return Math.round((a-i)/y)}function x(t){w(1,arguments);var e=v(t);return!isNaN(e)}var k={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function T(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var L,E={date:T({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:T({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:T({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},S={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function D(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,d=a.width?String(a.width):t.defaultWidth;r=t.values[d]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function M(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=r.match(o);if(!s)return null;var d,c=s[0],u=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(c))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(c))return n}(u),d=t.valueCallback?t.valueCallback(d):d,{value:d=a.valueCallback?a.valueCallback(d):d,rest:r.slice(c.length)}}}const P={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof k[t]?k[t]:1===e?k[t].one:k[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:E,formatRelative:function(t,e,n,r){return S[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:D({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:D({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:D({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:D({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:D({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(L={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(L.matchPattern);if(!a)return null;var i=a[0],o=n.match(L.parsePattern);if(!o)return null;var s=L.valueCallback?L.valueCallback(o[0]):o[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(i.length)}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function A(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function j(t,e){w(2,arguments);var n=v(t).getTime(),r=A(e);return new Date(n+r)}function N(t,e){w(2,arguments);var n=A(e);return j(t,-n)}function q(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const U=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return q("yy"===e?r%100:r,e.length)},O=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):q(n+1,2)},W=function(t,e){return q(t.getUTCDate(),e.length)},Y=function(t,e){return q(t.getUTCHours()%12||12,e.length)},F=function(t,e){return q(t.getUTCHours(),e.length)},z=function(t,e){return q(t.getUTCMinutes(),e.length)},H=function(t,e){return q(t.getUTCSeconds(),e.length)},I=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return q(Math.floor(r*Math.pow(10,n-3)),e.length)};var R=864e5;function Q(t){w(1,arguments);var e=1,n=v(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function X(t){w(1,arguments);var e=v(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=Q(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=Q(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function B(t){w(1,arguments);var e=X(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Q(n);return r}var G=6048e5;function J(t,e){w(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:A(a),o=null==n.weekStartsOn?i:A(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=v(t),d=s.getUTCDay(),c=(d<o?7:0)+d-o;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function _(t,e){w(1,arguments);var n=v(t,e),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=null==o?1:A(o),d=null==a.firstWeekContainsDate?s:A(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,d),c.setUTCHours(0,0,0,0);var u=J(c,e),l=new Date(0);l.setUTCFullYear(r,0,d),l.setUTCHours(0,0,0,0);var m=J(l,e);return n.getTime()>=u.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function $(t,e){w(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:A(a),o=null==n.firstWeekContainsDate?i:A(n.firstWeekContainsDate),s=_(t,e),d=new Date(0);d.setUTCFullYear(s,0,o),d.setUTCHours(0,0,0,0);var c=J(d,e);return c}var V=6048e5;function K(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+q(i,2)}function Z(t,e){return t%60==0?(t>0?"-":"+")+q(Math.abs(t)/60,2):tt(t,e)}function tt(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+q(Math.floor(a/60),2)+n+q(a%60,2)}const et={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return U(t,e)},Y:function(t,e,n,r){var a=_(t,r),i=a>0?a:1-a;return"YY"===e?q(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):q(i,e.length)},R:function(t,e){return q(X(t),e.length)},u:function(t,e){return q(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return O(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){w(1,arguments);var n=v(t),r=J(n,e).getTime()-$(n,e).getTime();return Math.round(r/V)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):q(a,e.length)},I:function(t,e,n){var r=function(t){w(1,arguments);var e=v(t),n=Q(e).getTime()-B(e).getTime();return Math.round(n/G)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):W(t,e)},D:function(t,e,n){var r=function(t){w(1,arguments);var e=v(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/R)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):q(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return q(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return q(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Y(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):F(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):q(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):z(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):H(t,e)},S:function(t,e){return I(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return Z(a);case"XXXX":case"XX":return tt(a);case"XXXXX":case"XXX":default:return tt(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return Z(a);case"xxxx":case"xx":return tt(a);case"xxxxx":case"xxx":default:return tt(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+K(a,":");case"OOOO":default:return"GMT"+tt(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+K(a,":");case"zzzz":default:return"GMT"+tt(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return q(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return q((r._originalDate||t).getTime(),e.length)}};function nt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function rt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const at={p:rt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return nt(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",nt(a,e)).replace("{{time}}",rt(i,e))}};var it=["D","DD"],ot=["YY","YYYY"];function st(t){return-1!==it.indexOf(t)}function dt(t){return-1!==ot.indexOf(t)}function ct(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var ut=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,lt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,mt=/^'([^]*?)'?$/,ft=/''/g,ht=/[a-zA-Z]/;function pt(t,e,n){w(2,arguments);var r=String(e),a=n||{},i=a.locale||P,o=i.options&&i.options.firstWeekContainsDate,s=null==o?1:A(o),d=null==a.firstWeekContainsDate?s:A(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,u=null==c?0:A(c),l=null==a.weekStartsOn?u:A(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var m=v(t);if(!x(m))throw new RangeError("Invalid time value");var f=g(m),h=N(m,f),p={firstWeekContainsDate:d,weekStartsOn:l,locale:i,_originalDate:m},b=r.match(lt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,at[e])(t,i.formatLong,p):t})).join("").match(ut).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return gt(n);var o=et[r];if(o)return!a.useAdditionalWeekYearTokens&&dt(n)&&ct(n,e,t),!a.useAdditionalDayOfYearTokens&&st(n)&&ct(n,e,t),o(h,n,i.localize,p);if(r.match(ht))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return b}function gt(t){return t.match(mt)[1].replace(ft,"'")}const wt={render:function(t){const e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=function(t){const e=document.createElement("div"),n=document.createElement("div");return e.classList.add("check-box"),n.classList.add("checkmark"),e.addEventListener("click",(e=>{e.preventDefault(),n.style.display="block",setTimeout((function(){f.taskCheckedOff(t)}),700)})),e.appendChild(n),e}(t),o=function(t){const e=document.createElement("i");return e.classList.add("fa"),e.classList.add("fa-sticky-note-o"),e.classList.add("mr-auto"),e.addEventListener("click",(e=>{e.preventDefault(),t.classList.toggle("show-task-note")})),e}(a),s=document.createElement("div");switch(e.classList.add("row"),e.classList.add("task"),n.classList.add("task-name-rendered"),n.classList.add("mx-2"),n.textContent=t.name,r.classList.add("col-6"),r.classList.add("text-right"),r.textContent=function(t,e){const n=t.slice(0,4),r=t.slice(5,7)-1,a=t.slice(8,10),i=t.slice(11,13),o=t.slice(14,16);let s="";return t&&(s=function(t,e,n){w(2,arguments);var r=v(t),a=v(e),i=n||{},o=i.locale||P;if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");if(!o.formatRelative)throw new RangeError("locale must contain formatRelative property");var s,d=C(r,a);if(isNaN(d))throw new RangeError("Invalid time value");s=d<-6?"other":d<-1?"lastWeek":d<0?"yesterday":d<1?"today":d<2?"tomorrow":d<7?"nextWeek":"other";var c=N(r,g(r)),u=N(a,g(a)),l=o.formatRelative(s,c,u,i);return pt(r,l,i)}(new Date(n,r,a,i,o),new Date)),function(t){return w(1,arguments),v(t).getTime()<Date.now()}(new Date(n,r,a,i,o))&&e.classList.add("past-due"),s}(t.dueDate,r),s.classList.add("col-6"),s.classList.add("d-flex"),s.classList.add("align-items-center"),a.classList.add("col-8"),a.textContent=t.note,a.classList.add("render-task-note"),a.classList.add("show-task-note"),n.addEventListener("click",(n=>{n.preventDefault(),f.editTask(t,e)})),r.addEventListener("click",(n=>{n.preventDefault(),f.editTask(t,e)})),t.priority){case"high":n.classList.add("high-pri");break;case"med":n.classList.add("med-pri");break;case"low":n.classList.add("low-pri")}return s.appendChild(i),s.appendChild(n),t.note&&s.appendChild(o),e.appendChild(s),e.appendChild(r),e.appendChild(a),e},allTasks:function(){let t=f.getAllTasks();t.sort((function(t,e){return new Date(t.dueDate)-new Date(e.dueDate)}));const e=document.createElement("div");e.setAttribute("id","main-content-wrap");const n=document.createElement("h4");return n.textContent="All Tasks",e.appendChild(n),t.forEach((t=>{let n=wt.render(t);e.appendChild(n)})),e}},vt=wt,bt=function(t,e,n,a){const i=document.createElement("div"),o=document.createElement("h4"),s=r(n);o.textContent=t.name,i.classList.add("project-box"),i.classList.add("col-12"),i.classList.add("my-2"),i.classList.add("order-"+a),i.classList.add("projBox-"+a),i.appendChild(o);for(let t=0;t<e.length;t++){const n=vt.render(e[t]);i.appendChild(n)}return o.addEventListener("click",(e=>{e.preventDefault(),xt.editProject(t,o)})),i.appendChild(s),i.appendChild(n),i},yt=function(){const t=document.createElement("form"),e=document.createElement("div"),n=document.createElement("input"),r=document.createElement("button");return t.classList.add("col-auto"),n.setAttribute("placeholder","New Project"),n.setAttribute("id","new-project"),n.setAttribute("type","text"),n.classList.add("mr-3"),r.setAttribute("type","submit"),r.textContent="Create",e.classList.add("d-flex"),e.appendChild(n),e.appendChild(r),t.appendChild(e),t.addEventListener("submit",(e=>{e.preventDefault(),xt.formSubmit(t)})),t},Ct=function(t,e){const n=document.createElement("div"),r=document.createElement("form"),a=document.createElement("div"),i=document.createElement("input"),o=document.createElement("button"),s=document.createElement("button");n.classList.add("row"),r.classList="col-9",i.setAttribute("placeholder","Edit Project Name"),i.setAttribute("value",t.name),i.setAttribute("id","newName"),i.setAttribute("type","text"),i.classList.add("mr-3"),o.setAttribute("type","submit"),o.classList.add("mr-3"),o.textContent="Edit",s.textContent="Delete",a.appendChild(i),a.appendChild(o),a.appendChild(s),r.appendChild(a),r.addEventListener("submit",(e=>{e.preventDefault(),xt.editSubmit(r,t)})),s.addEventListener("click",(e=>{e.preventDefault(),xt.delProject(t)})),n.appendChild(r),e.prepend(n)},xt=(()=>{const t=function(){let t=m(),n=[];const r=e("Free Spirited Tasks",0);n.push(r);for(let e=0;e<=t;e++){let t=JSON.parse(localStorage.getItem("project-"+e));null!=t&&n.push(t)}return n}();let n=1==m()?1:m()+1;function r(r){const a=r["new-project"].value.trim();if(a){const r=e(a,n);t.push(r),c("localStorage")&&(localStorage.setItem("project-"+n,JSON.stringify(r)),localStorage.setItem("projectidx",JSON.stringify(n)))}}return{createNewProject:r,getAllProjects:function(){return t},renderAllProjects:function(){a();const e=document.createElement("div");e.setAttribute("id","main-content-wrap"),e.classList.add("row");for(let n=0;n<t.length;n++){const r=t[n],a=f.getProjectTasks(r.idx),i=f.makeTaskForm(r.idx),o=bt(r,a,i,n);e.appendChild(o)}return e},createNewProjectForm:function(){return yt()},formSubmit:function(t){r(t),n++,s(),Tt.render(),t.reset()},editProject:function(t,e){const n=e.parentNode;i(e),Ct(t,n)},editSubmit:function(t,e){const n=t.newName.value;e.name=n,localStorage.setItem("project-"+e.idx,JSON.stringify(e)),s(),Tt.render()},delProject:function(e){const n=t.indexOf(e);t.splice(n,1),f.delProjectTasks(e),localStorage.removeItem("project-"+e.idx),s(),Tt.render()}}})(),kt=function(t){const e=document.createElement("button"),n=document.createElement("div");return n.classList.add("col-auto"),"task"===t?(e.textContent="Project Mode",e.addEventListener("click",(t=>{t.preventDefault(),s(),Tt.setMode("project"),Tt.render()}))):(e.textContent="Task Mode",e.addEventListener("click",(t=>{t.preventDefault(),s(),Tt.setMode("task"),Tt.render()}))),n.appendChild(e),n},Tt=(()=>{let t="project";const e=document.getElementById("content");return{render:function(){"project"===t?function(){const n=document.createElement("div"),r=xt.createNewProjectForm(),a=kt(t),i=xt.renderAllProjects();n.classList.add("row"),n.classList.add("align-items-center"),n.classList.add("leading-form"),n.classList.add("mt-3"),a.classList.add("ml-auto"),n.appendChild(r),n.appendChild(a),u(),e.appendChild(n),e.appendChild(i)}():function(){const n=document.createElement("div"),a=f.makeTaskForm(0),i=r(a),o=kt(t),s=vt.allTasks(),d=document.createElement("div");n.classList.add("row"),n.classList.add("align-items-center"),n.classList.add("leading-form"),n.classList.add("mt-3"),o.classList.add("ml-auto"),d.classList.add("col-auto"),i.classList.remove("my-2"),d.appendChild(i),n.appendChild(d),s.prepend(a),n.appendChild(o),e.appendChild(n),e.appendChild(s)}()},setMode:function(e){t=e}}})();t(),Tt.render()})();