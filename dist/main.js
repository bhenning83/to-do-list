(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("h1");n.textContent="To-Do or Not To-Do",t.classList.add("text-center"),t.appendChild(n),e.appendChild(t)},t=(e,t)=>({name:e,idx:t}),n=function(e){const t=document.createElement("form"),n=document.createElement("div");return n.classList.add("col-12"),t.setAttribute("id","task-form"+e),t.classList.add("order-"+e),t.classList.add("new-task-form"),t.classList.add("task-form"),t.classList.add("row"),t.addEventListener("submit",(e=>{e.preventDefault(),h.formSubmit(t)})),function(){const r=function(){const e=document.createElement("div"),t=document.createElement("input");return t.setAttribute("type","date"),t.classList.add("w-100"),e.classList.add("task-date"),e.classList.add("col-6"),e.classList.add("pl-0"),e.appendChild(t),e}(),a=function(){const e=document.createElement("div"),t=document.createElement("input");return t.setAttribute("type","text"),t.setAttribute("placeholder","Task Name"),t.classList.add("w-100"),t.required=!0,e.classList.add("task-name"),e.classList.add("col-6"),e.classList.add("pr-0"),e.appendChild(t),e}(),i=function(){const t=document.createElement("div"),n=document.createElement("textarea");return n.setAttribute("placeholder","Notes about task"),n.setAttribute("form","task-form"+e),n.classList.add("w-100"),t.classList.add("task-note"),t.appendChild(n),t}(),o=function(){const t=document.createElement("div"),n=document.createElement("input");return n.setAttribute("type","hidden"),n.setAttribute("id","project"+e),n.setAttribute("value",e),t.classList.add("task-project"),t.appendChild(n),t}(),s=function(){const t=document.createElement("div"),n=document.createElement("input"),r=document.createElement("label"),a=document.createElement("div"),i=document.createElement("input"),o=document.createElement("label"),s=document.createElement("div"),d=document.createElement("input"),c=document.createElement("label"),u=document.createElement("div");return a.classList.add("low-box"),a.classList.add("pri-box"),s.classList.add("med-box"),s.classList.add("pri-box"),s.classList.add("mx-3"),u.classList.add("high-box"),u.classList.add("pri-box"),t.classList.add("d-flex"),t.classList.add("col-9"),n.setAttribute("type","radio"),n.setAttribute("name","priority"),n.setAttribute("value","low"),n.classList.add("priority"+e),r.setAttribute("for","lowPriority"),r.classList.add("ml-1"),r.textContent="Low",i.setAttribute("type","radio"),i.setAttribute("name","priority"),i.setAttribute("value","med"),i.classList.add("priority"+e),o.setAttribute("for","medPriority"),o.classList.add("ml-1"),o.textContent="Medium",d.setAttribute("type","radio"),d.setAttribute("name","priority"),d.setAttribute("value","high"),d.classList.add("priority"+e),c.setAttribute("for","highPriority"),c.classList.add("ml-1"),c.textContent="High",a.appendChild(n),a.appendChild(r),t.appendChild(a),s.appendChild(i),s.appendChild(o),t.appendChild(s),u.appendChild(d),u.appendChild(c),t.appendChild(u),t.classList.add("pri-boxes"),t}();t.appendChild(a),t.appendChild(r),n.appendChild(i),t.appendChild(n),t.appendChild(o),t.appendChild(s)}(),function(){const e=document.createElement("div"),n=function(){const e=document.createElement("button");return e.setAttribute("type","submit"),e.textContent="Add",e}();e.appendChild(n),t.appendChild(e)}(),t},r=function(e){const t=document.createElement("div");return t.textContent="+",t.classList.add("add-task"),t.classList.add("my-2"),t.addEventListener("click",(t=>{t.preventDefault(),e.classList.toggle("new-task-form")})),t},a=function(){const e=document.querySelectorAll(".project-box");for(let t=0;t<e.length;t++)e[t].remove()},i=function(e){e.remove()},o=function(e){for(let t=e.length-1;t>=0;t--)e[t].remove()},s=function(){const e=document.querySelector(".leading-form"),t=document.querySelector("#main-content-wrap");e.remove(),t.remove()},d=function(e,t){const r=n(e.proj),a=e.idx;r.classList.remove("new-task-form"),r.classList.remove("order-undefined"),r.removeAttribute("id","task-formundefined"),r.setAttribute("id",`form-${a}`),t.classList.remove("row");let i=r.querySelector(".task-name input"),o=r.querySelector(".task-date input"),s=r.querySelector(".task-note textarea"),d=r.querySelector(".pri-boxes .pri-box:nth-of-type(1) input"),c=r.querySelector(".pri-boxes .pri-box:nth-of-type(2) input"),u=r.querySelector(".pri-boxes .pri-box:nth-of-type(3) input"),l=r.querySelector("button");switch(e.priority){case"low":d.setAttribute("checked",!0);break;case"med":c.setAttribute("checked",!0);break;case"high":u.setAttribute("checked",!0)}i.setAttribute("value",e.name),o.setAttribute("value",e.dueDate),s.value=e.note,s.removeAttribute("form","task-formundefined"),s.setAttribute("form",`form-${a}`),l.textContent="Edit",l.removeEventListener("submit",(e=>{e.preventDefault,h.formSubmit()})),l.addEventListener("click",(t=>{t.preventDefault(),h.editFormSubmit(r,e)})),t.prepend(r)};function c(e){var t;try{t=window[e];var n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}function u(){let e=l(),t=[];for(let n=0;n<=e;n++){let e=JSON.parse(localStorage.getItem("task-"+n));null!=e&&t.push(e)}return t}function l(){let e;return e=null!=localStorage.getItem("taskidx")?JSON.parse(localStorage.getItem("taskidx")):0,e}function m(){let e;return e=null!=localStorage.getItem("projectidx")?JSON.parse(localStorage.getItem("projectidx")):1,e}const h=(()=>{const e=u();let t=0==l()?0:l()+1;function r(n){let r=n.querySelector(".task-name input").value,a=n.querySelector(".task-date input").value,i=n.querySelector(".task-note textarea").value,o=n.querySelector(".task-project input").value,s=n.querySelector(".pri-boxes .pri-box:nth-of-type(1) input"),d=n.querySelector(".pri-boxes .pri-box:nth-of-type(2) input"),u=n.querySelector(".pri-boxes .pri-box:nth-of-type(3) input"),l=[],m="";l.push(s,d,u);for(let e=0;e<l.length;e++)l[e].checked&&(m=l[e].value);let h=((e,t,n,r,a,i="Free Spirited")=>({name:e,dueDate:t,note:n,priority:r,idx:a,project:i}))(r,a,i,m,t,o);e.push(h),c("localStorage")&&(localStorage.setItem("task-"+t,JSON.stringify(h)),localStorage.setItem("taskidx",JSON.stringify(t)))}function a(t){const n=[];for(let r=0;r<e.length;r++){let a=e[r];a.project==t&&n.push(a)}return n}return{getAllTasks:function(){return e},createTask:r,getProjectTasks:a,makeTaskForm:function(e,t){return n(e,t)},formSubmit:function(e){r(e),t++,s(),Te.render()},taskCheckedOff:function(t){const n=e.indexOf(t);e.splice(n,1),xe.renderAllProjects()},editTask:function(e,t){const n=t.children;o(n),d(e,t)},editFormSubmit:function(e,t){t.name=e.querySelector(".task-name input").value,t.dueDate=e.querySelector(".task-date input").value,t.note=e.querySelector(".task-note textarea").value;let n=e.querySelector(".pri-boxes .pri-box:nth-of-type(1) input"),r=e.querySelector(".pri-boxes .pri-box:nth-of-type(2) input"),a=e.querySelector(".pri-boxes .pri-box:nth-of-type(3) input"),i=[],o="";i.push(n,r,a);for(let e=0;e<i.length;e++)i[e].checked&&(o=i[e].value);t.priority=o,s(),Te.render()},delProjectTasks:function(t){const n=a(t);for(let t=0;t<n.length;t++){let r=e.indexOf(n[t]);e.splice(r,1)}}}})();var f=6e4;function p(e){return e.getTime()%f}function g(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var r=n>0?(f+p(t))%f:p(t);return n*f+r}function w(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function v(e){w(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function b(e){w(1,arguments);var t=v(e);return t.setHours(0,0,0,0),t}var y=864e5;function C(e,t){w(2,arguments);var n=b(e),r=b(t),a=n.getTime()-g(n),i=r.getTime()-g(r);return Math.round((a-i)/y)}function x(e){w(1,arguments);var t=v(e);return!isNaN(t)}var k={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function T(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var E,L={date:T({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:T({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:T({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},S={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,d=a.width?String(a.width):e.defaultWidth;r=e.values[d]||e.values[s]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function D(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=r.match(o);if(!s)return null;var d,c=s[0],u=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(c))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(c))return n}(u),d=e.valueCallback?e.valueCallback(d):d,{value:d=a.valueCallback?a.valueCallback(d):d,rest:r.slice(c.length)}}}const P={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof k[e]?k[e]:1===t?k[e].one:k[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:L,formatRelative:function(e,t,n,r){return S[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(E={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(E.matchPattern);if(!a)return null;var i=a[0],o=n.match(E.parsePattern);if(!o)return null;var s=E.valueCallback?E.valueCallback(o[0]):o[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(i.length)}}),era:D({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:D({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:D({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:D({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:D({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function A(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function j(e,t){w(2,arguments);var n=v(e).getTime(),r=A(t);return new Date(n+r)}function q(e,t){w(2,arguments);var n=A(t);return j(e,-n)}function U(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const N=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return U("yy"===t?r%100:r,t.length)},O=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):U(n+1,2)},W=function(e,t){return U(e.getUTCDate(),t.length)},Y=function(e,t){return U(e.getUTCHours()%12||12,t.length)},F=function(e,t){return U(e.getUTCHours(),t.length)},z=function(e,t){return U(e.getUTCMinutes(),t.length)},H=function(e,t){return U(e.getUTCSeconds(),t.length)},R=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return U(Math.floor(r*Math.pow(10,n-3)),t.length)};var Q=864e5;function X(e){w(1,arguments);var t=1,n=v(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function B(e){w(1,arguments);var t=v(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=X(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=X(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function I(e){w(1,arguments);var t=B(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=X(n);return r}var G=6048e5;function J(e,t){w(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:A(a),o=null==n.weekStartsOn?i:A(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=v(e),d=s.getUTCDay(),c=(d<o?7:0)+d-o;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function _(e,t){w(1,arguments);var n=v(e,t),r=n.getUTCFullYear(),a=t||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=null==o?1:A(o),d=null==a.firstWeekContainsDate?s:A(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,d),c.setUTCHours(0,0,0,0);var u=J(c,t),l=new Date(0);l.setUTCFullYear(r,0,d),l.setUTCHours(0,0,0,0);var m=J(l,t);return n.getTime()>=u.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function $(e,t){w(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:A(a),o=null==n.firstWeekContainsDate?i:A(n.firstWeekContainsDate),s=_(e,t),d=new Date(0);d.setUTCFullYear(s,0,o),d.setUTCHours(0,0,0,0);var c=J(d,t);return c}var V=6048e5;function K(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+U(i,2)}function Z(e,t){return e%60==0?(e>0?"-":"+")+U(Math.abs(e)/60,2):ee(e,t)}function ee(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+U(Math.floor(a/60),2)+n+U(a%60,2)}const te={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return N(e,t)},Y:function(e,t,n,r){var a=_(e,r),i=a>0?a:1-a;return"YY"===t?U(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):U(i,t.length)},R:function(e,t){return U(B(e),t.length)},u:function(e,t){return U(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return U(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return U(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return O(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return U(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){w(1,arguments);var n=v(e),r=J(n,t).getTime()-$(n,t).getTime();return Math.round(r/V)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):U(a,t.length)},I:function(e,t,n){var r=function(e){w(1,arguments);var t=v(e),n=X(t).getTime()-I(t).getTime();return Math.round(n/G)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):U(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):W(e,t)},D:function(e,t,n){var r=function(e){w(1,arguments);var t=v(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/Q)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):U(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return U(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return U(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return U(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Y(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):F(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):U(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):U(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):z(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):H(e,t)},S:function(e,t){return R(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return Z(a);case"XXXX":case"XX":return ee(a);case"XXXXX":case"XXX":default:return ee(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return Z(a);case"xxxx":case"xx":return ee(a);case"xxxxx":case"xxx":default:return ee(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+K(a,":");case"OOOO":default:return"GMT"+ee(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+K(a,":");case"zzzz":default:return"GMT"+ee(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return U(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return U((r._originalDate||e).getTime(),t.length)}};function ne(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function re(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const ae={p:re,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return ne(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",ne(a,t)).replace("{{time}}",re(i,t))}};var ie=["D","DD"],oe=["YY","YYYY"];function se(e){return-1!==ie.indexOf(e)}function de(e){return-1!==oe.indexOf(e)}function ce(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var ue=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,le=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,me=/^'([^]*?)'?$/,he=/''/g,fe=/[a-zA-Z]/;function pe(e,t,n){w(2,arguments);var r=String(t),a=n||{},i=a.locale||P,o=i.options&&i.options.firstWeekContainsDate,s=null==o?1:A(o),d=null==a.firstWeekContainsDate?s:A(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,u=null==c?0:A(c),l=null==a.weekStartsOn?u:A(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var m=v(e);if(!x(m))throw new RangeError("Invalid time value");var h=g(m),f=q(m,h),p={firstWeekContainsDate:d,weekStartsOn:l,locale:i,_originalDate:m},b=r.match(le).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,ae[t])(e,i.formatLong,p):e})).join("").match(ue).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return ge(n);var o=te[r];if(o)return!a.useAdditionalWeekYearTokens&&de(n)&&ce(n,t,e),!a.useAdditionalDayOfYearTokens&&se(n)&&ce(n,t,e),o(f,n,i.localize,p);if(r.match(fe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return b}function ge(e){return e.match(me)[1].replace(he,"'")}const we={render:function(e){const t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=function(e){const t=document.createElement("div"),n=document.createElement("div");return t.classList.add("check-box"),n.classList.add("checkmark"),t.addEventListener("click",(t=>{t.preventDefault(),n.style.display="block",setTimeout((function(){h.taskCheckedOff(e)}),700)})),t.appendChild(n),t}(e),o=function(e){const t=document.createElement("i");return t.classList.add("fa"),t.classList.add("fa-sticky-note-o"),t.classList.add("mr-auto"),t.addEventListener("click",(t=>{t.preventDefault(),e.classList.toggle("show-task-note")})),t}(a),s=document.createElement("div");switch(t.classList.add("row"),t.classList.add("task"),n.classList.add("task-name-rendered"),n.classList.add("mx-2"),n.textContent=e.name,r.classList.add("col-6"),r.classList.add("text-right"),r.textContent=function(e,t){const n=e.slice(0,4),r=e.slice(5,7)-1,a=e.slice(8,10);let i="";return e&&(i=function(e,t,n){w(2,arguments);var r=v(e),a=v(t),i=n||{},o=i.locale||P;if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");if(!o.formatRelative)throw new RangeError("locale must contain formatRelative property");var s,d=C(r,a);if(isNaN(d))throw new RangeError("Invalid time value");s=d<-6?"other":d<-1?"lastWeek":d<0?"yesterday":d<1?"today":d<2?"tomorrow":d<7?"nextWeek":"other";var c=q(r,g(r)),u=q(a,g(a)),l=o.formatRelative(s,c,u,i);return pe(r,l,i)}(new Date(n,r,a),new Date)),function(e){return w(1,arguments),v(e).getTime()<Date.now()}(new Date(n,r,a))&&t.classList.add("past-due"),i}(e.dueDate,r),s.classList.add("col-6"),s.classList.add("d-flex"),s.classList.add("align-items-center"),a.classList.add("col-8"),a.textContent=e.note,a.classList.add("render-task-note"),a.classList.add("show-task-note"),n.addEventListener("click",(n=>{n.preventDefault(),h.editTask(e,t)})),r.addEventListener("click",(n=>{n.preventDefault(),h.editTask(e,t)})),e.priority){case"high":n.classList.add("high-pri");break;case"med":n.classList.add("med-pri");break;case"low":n.classList.add("low-pri")}return s.appendChild(i),s.appendChild(n),e.note&&s.appendChild(o),t.appendChild(s),t.appendChild(r),t.appendChild(a),t},allTasks:function(){const e=h.getAllTasks(),t=document.createElement("div"),n=document.createElement("h4");return n.textContent="All Tasks",t.setAttribute("id","main-content-wrap"),t.appendChild(n),e.forEach((e=>{let n=we.render(e);t.appendChild(n)})),t}},ve=we,be=function(e,t,n,a){const i=document.createElement("div"),o=document.createElement("h4"),s=r(n);o.textContent=e.name,i.classList.add("project-box"),i.classList.add("col-12"),i.classList.add("my-2"),i.classList.add("order-"+a),i.classList.add("projBox-"+a),i.appendChild(o);for(let e=0;e<t.length;e++){const n=ve.render(t[e]);i.appendChild(n)}return o.addEventListener("click",(t=>{t.preventDefault(),xe.editProject(e,o)})),i.appendChild(s),i.appendChild(n),i},ye=function(){const e=document.createElement("form"),t=document.createElement("div"),n=document.createElement("input"),r=document.createElement("button");return e.classList.add("col-auto"),n.setAttribute("placeholder","New Project"),n.setAttribute("id","new-project"),n.setAttribute("type","text"),n.classList.add("mr-3"),r.setAttribute("type","submit"),r.textContent="Create",t.classList.add("d-flex"),t.appendChild(n),t.appendChild(r),e.appendChild(t),e.addEventListener("submit",(t=>{t.preventDefault(),xe.formSubmit(e)})),e},Ce=function(e,t){const n=document.createElement("div"),r=document.createElement("form"),a=document.createElement("div"),i=document.createElement("input"),o=document.createElement("button"),s=document.createElement("button");n.classList.add("row"),r.classList="col-9",i.setAttribute("placeholder","Edit Project Name"),i.setAttribute("value",e.name),i.setAttribute("id","newName"),i.setAttribute("type","text"),i.classList.add("mr-3"),o.setAttribute("type","submit"),o.textContent="Edit",s.textContent="Delete",a.appendChild(i),a.appendChild(o),a.appendChild(s),r.appendChild(a),r.addEventListener("submit",(t=>{t.preventDefault(),xe.editSubmit(r,e)})),s.addEventListener("click",(t=>{t.preventDefault(),xe.delProject(e)})),n.appendChild(r),t.prepend(n)},xe=(()=>{const e=function(){let e=m(),n=[];const r=t("Free Spirited Tasks",0);n.push(r);for(let t=0;t<=e;t++){let e=JSON.parse(localStorage.getItem("project-"+t));null!=e&&n.push(e)}return n}();let n=1==m()?1:m()+1;function r(r){const a=r["new-project"].value.trim();if(a){const r=t(a,n);e.push(r),c("localStorage")&&(localStorage.setItem("project-"+n,JSON.stringify(r)),localStorage.setItem("projectidx",JSON.stringify(n)))}}function o(){a();const t=document.createElement("div");t.setAttribute("id","main-content-wrap"),t.classList.add("row");for(let n=0;n<e.length;n++){const r=e[n],a=h.getProjectTasks(r.idx),i=h.makeTaskForm(r.idx),o=be(r,a,i,n);t.appendChild(o)}return t}return{createNewProject:r,getAllProjects:function(){return e},renderAllProjects:o,createNewProjectForm:function(){return ye()},formSubmit:function(e){r(e),n++,s(),Te.render(),e.reset()},editProject:function(e,t){let n=t.parentNode;i(t),Ce(e,n)},editSubmit:function(e,t){let n=e.newName.value;t.name=n,o()},delProject:function(t){const n=e.indexOf(t);e.splice(n,1),h.delProjectTasks(t),Te.render()}}})(),ke=function(e){const t=document.createElement("button"),n=document.createElement("div");return n.classList.add("col-auto"),"task"===e?(t.textContent="Project Mode",t.addEventListener("click",(e=>{e.preventDefault(),s(),Te.setMode("project"),Te.render()}))):(t.textContent="Task Mode",t.addEventListener("click",(e=>{e.preventDefault(),s(),Te.setMode("task"),Te.render()}))),n.appendChild(t),n},Te=(()=>{let e="project";const t=document.getElementById("content");return{render:function(){"project"===e?function(){const n=document.createElement("div"),r=xe.createNewProjectForm(),a=ke(e),i=xe.renderAllProjects();n.classList.add("row"),n.classList.add("align-items-center"),n.classList.add("leading-form"),n.appendChild(r),n.appendChild(a),u(),t.appendChild(n),t.appendChild(i)}():function(){const n=document.createElement("div"),a=h.makeTaskForm(0),i=r(a),o=ke(e),s=ve.allTasks(),d=document.createElement("div");n.classList.add("row"),n.classList.add("align-items-center"),n.classList.add("leading-form"),d.classList.add("mr-auto"),d.classList.add("col-auto"),i.classList.remove("my-2"),d.appendChild(i),n.appendChild(d),s.prepend(a),n.appendChild(o),t.appendChild(n),t.appendChild(s)}()},setMode:function(t){e=t}}})();e(),Te.render()})();