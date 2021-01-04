(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("h1");n.textContent="To-Do or Not To-Do",t.classList.add("text-center"),t.appendChild(n),e.appendChild(t)},t=(e,t)=>({name:e,idx:t}),n=(e,t,n,d,a="Free Spirited")=>({name:e,dueDate:t,note:n,priority:d,project:a}),d=function(e){const t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),s=function(e){const t=document.createElement("div"),n=document.createElement("div");return t.classList.add("check-box"),n.classList.add("checkmark"),t.addEventListener("click",(t=>{t.preventDefault(),n.style.display="block",setTimeout((function(){l.taskCheckedOff(e)}),700)})),t.appendChild(n),t}(e),r=function(e){const t=document.createElement("i");return t.classList.add("fa"),t.classList.add("fa-sticky-note-o"),t.classList.add("mr-auto"),t.addEventListener("click",(t=>{t.preventDefault(),e.classList.toggle("show-task-note")})),t}(a),i=document.createElement("div");switch(t.classList.add("row"),n.classList.add("task-name-rendered"),n.classList.add("mx-2"),d.classList.add("col-4"),d.classList.add("text-right"),i.classList.add("col-8"),i.classList.add("d-flex"),i.classList.add("align-items-center"),a.classList.add("col-8"),n.textContent=e.name,d.textContent=e.dueDate,a.textContent=e.note,a.classList.add("render-task-note"),a.classList.add("show-task-note"),n.addEventListener("click",(n=>{n.preventDefault(),l.editTask(e,t)})),d.addEventListener("click",(n=>{n.preventDefault(),l.editTask(e,t)})),e.priority){case"high":n.classList.add("high-pri");break;case"med":n.classList.add("med-pri");break;case"low":n.classList.add("low-pri")}return i.appendChild(s),i.appendChild(n),e.note&&i.appendChild(r),t.appendChild(i),t.appendChild(d),t.appendChild(a),t},a=function(){let e=document.querySelectorAll(".project-box");for(let t=0;t<e.length;t++)e[t].remove()},s=function(e){e.remove()},r=function(e){for(let t=e.length-1;t>=0;t--)e[t].remove()},i=function(e,t){const n=m.create(e.proj);n.classList.remove("new-task-form"),n.classList.remove("order-undefined"),t.classList.remove("row");let d=n.querySelector(".task-name input"),a=n.querySelector(".task-date input"),s=n.querySelector(".task-note textarea"),r=n.querySelector(".pri-boxes .pri-box:nth-of-type(1) input"),i=n.querySelector(".pri-boxes .pri-box:nth-of-type(2) input"),c=n.querySelector(".pri-boxes .pri-box:nth-of-type(3) input"),o=n.querySelector("button");switch(e.priority){case"low":r.setAttribute("checked",!0);break;case"med":i.setAttribute("checked",!0);break;case"high":c.setAttribute("checked",!0)}d.setAttribute("value",e.name),a.setAttribute("value",e.dueDate),s.value=e.note,o.textContent="Edit",t.prepend(n)},c=function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("form"),d=document.createElement("div"),a=document.createElement("input"),s=document.createElement("button");t.classList.add("row"),n.classList.add("col-12"),a.setAttribute("placeholder","New Project"),a.setAttribute("id","new-project"),a.setAttribute("type","text"),a.classList.add("mr-3"),s.setAttribute("type","submit"),s.textContent="Create",d.classList.add("d-flex"),d.appendChild(a),d.appendChild(s),n.appendChild(d),n.addEventListener("submit",(e=>{e.preventDefault(),p.formSubmit(n)})),t.appendChild(n),e.appendChild(t)},o=function(e,t){const n=document.createElement("div"),d=document.createElement("form"),a=document.createElement("div"),s=document.createElement("input"),r=document.createElement("button");n.classList.add("row"),d.classList="col-12",s.setAttribute("placeholder","Edit Project Name"),s.setAttribute("value",e.name),s.setAttribute("id","newName"),s.setAttribute("type","text"),s.classList.add("mr-3"),r.setAttribute("type","submit"),r.textContent="Edit",a.appendChild(s),a.appendChild(r),d.appendChild(a),d.addEventListener("submit",(t=>{t.preventDefault(),p.editSubmit(d,e)})),n.appendChild(d),t.prepend(n)},l=(()=>{const e=[n("Task Name","2020-12-20","A note about the task","low","Project 1"),n("Task Name 2","2020-12-20","Another note about the task","high","Project 1")];function t(t){let d=t.querySelector(".task-name input").value,a=t.querySelector(".task-date input").value,s=t.querySelector(".task-note textarea").value,r=t.querySelector(".task-project input").value,i=t.querySelector(".pri-boxes .pri-box:nth-of-type(1) input"),c=t.querySelector(".pri-boxes .pri-box:nth-of-type(2) input"),o=t.querySelector(".pri-boxes .pri-box:nth-of-type(3) input"),l=[],u="";l.push(i,c,o);for(let e=0;e<l.length;e++)l[e].checked&&(u=l[e].value);let p=n(d,a,s,u,r);e.push(p)}return{getAllTasks:function(){return e},createTask:t,getProjectTasks:function(t){const n=[];for(let d=0;d<e.length;d++){let a=e[d];a.project==t&&n.push(a)}return n},makeTaskForm:function(e,t){return m.create(e,t)},formSubmit:function(e){t(e),p.renderAllProjects()},taskCheckedOff:function(t){const n=e.indexOf(t);e.splice(n,1),p.renderAllProjects()},editTask:function(e,t){const n=t.children;r(n),i(e,t)},editFormSubmit:function(e,t){t.name=e.querySelector(".task-name input").value,t.dueDate=e.querySelector(".task-date input").value,t.note=e.querySelector(".task-note textarea").value;let n=e.querySelector(".pri-boxes .pri-box:nth-of-type(1) input"),d=e.querySelector(".pri-boxes .pri-box:nth-of-type(2) input"),a=e.querySelector(".pri-boxes .pri-box:nth-of-type(3) input"),s=[],r="";s.push(n,d,a);for(let e=0;e<s.length;e++)s[e].checked&&(r=s[e].value);t.priority=r,p.renderAllProjects()}}})(),u=(()=>{const e=document.getElementById("content"),t=document.createElement("div");return t.setAttribute("id","all-proj-box"),{render:function(n,a,s,r){const i=document.createElement("div"),c=document.createElement("h4"),o=document.createElement("div");t.classList.add("row"),c.textContent=n.name,i.classList.add("project-box"),i.classList.add("col-12"),i.classList.add("my-2"),i.classList.add("order-"+r),i.classList.add("projBox-"+r),i.appendChild(c),o.textContent="+",o.classList.add("add-task"),o.addEventListener("click",(e=>{s.classList.toggle("new-task-form")}));for(let e=0;e<a.length;e++){const t=d(a[e]);i.appendChild(t)}c.addEventListener("click",(e=>{e.preventDefault(),p.editProject(n,c)})),i.appendChild(o),i.appendChild(s),t.appendChild(i),e.appendChild(t)}}})(),p=(()=>{const e=[t("Free Spirited Tasks",0)];let n=1;function d(d){const a=d["new-project"].value.trim();if(a){const d=t(a,n);n++,e.push(d)}}function r(){a();for(let t=0;t<e.length;t++){const n=e[t],d=l.getProjectTasks(n.idx),a=l.makeTaskForm(n.idx);u.render(n,d,a,t)}}return{createNewProject:d,getAllProjects:function(){return e},renderAllProjects:r,createNewProjectForm:function(){c()},formSubmit:function(e){d(e),r(),e.reset()},editProject:function(e,t){let n=t.parentNode;s(t),o(e,n)},editSubmit:function(e,t){let n=e.newName.value;t.name=n,r()}}})(),m={create:function(e){const t=document.createElement("form"),n=document.createElement("div");return n.classList.add("col-12"),t.setAttribute("id","task-form"+e),t.classList.add("order-"+e),t.classList.add("new-task-form"),t.classList.add("task-form"),t.classList.add("row"),t.addEventListener("submit",(e=>{e.preventDefault(),l.formSubmit(t)})),function(){const d=function(){const e=document.createElement("div"),t=document.createElement("input");return t.setAttribute("type","date"),t.classList.add("w-100"),e.classList.add("task-date"),e.classList.add("col-6"),e.classList.add("pl-0"),e.appendChild(t),e}(),a=function(){const e=document.createElement("div"),t=document.createElement("input");return t.setAttribute("type","text"),t.setAttribute("placeholder","Task Name"),t.classList.add("w-100"),t.required=!0,e.classList.add("task-name"),e.classList.add("col-6"),e.classList.add("pr-0"),e.appendChild(t),e}(),s=function(){const t=document.createElement("div"),n=document.createElement("textarea");return n.setAttribute("placeholder","Notes about task"),n.setAttribute("form","task-form"+e),n.classList.add("w-100"),t.classList.add("task-note"),t.appendChild(n),t}(),r=function(){const t=document.createElement("div"),n=document.createElement("input");return n.setAttribute("type","hidden"),n.setAttribute("id","project"+e),n.setAttribute("value",e),t.classList.add("task-project"),t.appendChild(n),t}(),i=function(){const t=document.createElement("div"),n=document.createElement("input"),d=document.createElement("label"),a=document.createElement("div"),s=document.createElement("input"),r=document.createElement("label"),i=document.createElement("div"),c=document.createElement("input"),o=document.createElement("label"),l=document.createElement("div");return a.classList.add("low-box"),a.classList.add("pri-box"),i.classList.add("med-box"),i.classList.add("pri-box"),i.classList.add("mx-3"),l.classList.add("high-box"),l.classList.add("pri-box"),t.classList.add("d-flex"),t.classList.add("col-9"),n.setAttribute("type","radio"),n.setAttribute("name","priority"),n.setAttribute("value","low"),n.classList.add("priority"+e),d.setAttribute("for","lowPriority"),d.classList.add("ml-1"),d.textContent="Low",s.setAttribute("type","radio"),s.setAttribute("name","priority"),s.setAttribute("value","med"),s.classList.add("priority"+e),r.setAttribute("for","medPriority"),r.classList.add("ml-1"),r.textContent="Medium",c.setAttribute("type","radio"),c.setAttribute("name","priority"),c.setAttribute("value","high"),c.classList.add("priority"+e),o.setAttribute("for","highPriority"),o.classList.add("ml-1"),o.textContent="High",a.appendChild(n),a.appendChild(d),t.appendChild(a),i.appendChild(s),i.appendChild(r),t.appendChild(i),l.appendChild(c),l.appendChild(o),t.appendChild(l),t.classList.add("pri-boxes"),t}();t.appendChild(a),t.appendChild(d),n.appendChild(s),t.appendChild(n),t.appendChild(r),t.appendChild(i)}(),function(){const e=document.createElement("div"),n=function(){const e=document.createElement("button");return e.setAttribute("type","submit"),e.textContent="Add",e}();e.appendChild(n),t.appendChild(e)}(),t}},h=(document.getElementById("content"),{render:function(){p.createNewProjectForm(),p.renderAllProjects()}});e(),h.render()})();