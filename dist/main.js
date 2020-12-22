(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("h1");n.textContent="To-Do or Not To-Do",t.classList.add("text-center"),t.appendChild(n),e.appendChild(t)},t=(()=>{const e=document.getElementById("content");return{complete:function(t){const n=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");d.textContent=t.name,r.textContent=t.dueDate,i.textContent=t.note,o.textContent=t.project,n.appendChild(d),n.appendChild(r),n.appendChild(i),n.appendChild(o),e.appendChild(n)},abv:function(e){const t=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div");return r.classList.add("check-box"),i.classList.add("task-box"),o.classList.add("task-contents"),c.classList.add("checkmark"),t.textContent=e.name,d.textContent=e.dueDate,r.addEventListener("click",(t=>{t.preventDefault(),c.style.display="block",setTimeout((function(){n.taskCheckedOff(e)}),700)})),o.appendChild(t),o.appendChild(d),r.appendChild(c),i.appendChild(r),i.appendChild(o),i}}})(),n=(()=>{const e=[];function t(t){let n=t.getElementsByTagName("input")[0].value,d=t.getElementsByTagName("input")[1].value,r=t.getElementsByTagName("input")[2].value,i=t.getElementsByTagName("input")[3].value,o="";const c=document.getElementsByName("priority");for(let e=0;e<c.length;e++)c[e].checked&&(o=c[e].value);let a=((e,t,n,d,r="Free Spirited")=>({name:e,dueDate:t,note:n,priority:d,project:r}))(n,d,r,o,i);e.push(a)}return{getAllTasks:function(){return e},createTask:t,getProjectTasks:function(t){const n=[];for(let d=0;d<e.length;d++){let r=e[d];r.project==t&&n.push(r)}return n},makeTaskForm:function(e,t){return u.create(e,t)},formSubmit:function(e){t(e),a.renderAllProjects()},taskCheckedOff:function(t){const n=e.indexOf(t);e.splice(n,1),a.renderAllProjects()}}})(),d=e=>({name:e}),r=(()=>{const e=document.getElementById("content"),n=document.createElement("div");return{render:function(d,r,i,o){const c=document.createElement("div"),u=document.createElement("h4"),l=document.createElement("div");n.setAttribute("class","row"),u.textContent=d.name,c.classList.add("project-box"),c.classList.add("col-12"),c.classList.add("order-"+o),c.classList.add("projBox-"+o),c.appendChild(u),l.textContent="+",l.setAttribute("class","p-2"),l.setAttribute("class","add-task"),l.addEventListener("click",(e=>{i.classList.toggle("task-form")}));for(let e=0;e<r.length;e++){const n=t.abv(r[e]);c.appendChild(n)}u.addEventListener("click",(e=>{e.preventDefault(),a.editProject(d,u,o)})),c.appendChild(l),c.appendChild(i),n.appendChild(c),e.appendChild(n)}}})(),i=function(){let e=document.querySelectorAll(".project-box");for(let t=0;t<e.length;t++)e[t].remove()},o=function(e){e.remove()},c=(()=>{const e=document.getElementById("content");return{render:function(){const t=document.createElement("form"),n=document.createElement("div"),d=document.createElement("input"),r=document.createElement("button");d.setAttribute("placeholder","New Project"),d.setAttribute("id","new-project"),d.setAttribute("type","text"),r.setAttribute("type","submit"),r.textContent="Create",n.appendChild(d),t.appendChild(n),t.appendChild(r),t.addEventListener("submit",(e=>{e.preventDefault(),a.formSubmit(t)})),e.appendChild(t)},edit:function(e,t,n){const d=document.createElement("form"),r=document.createElement("div"),i=document.createElement("input"),o=document.createElement("button");d.classList.add("order-"+t),i.setAttribute("placeholder","Edit Project Name"),i.setAttribute("value",e.name),i.setAttribute("id","new-project"),i.setAttribute("type","text"),o.setAttribute("type","submit"),o.textContent="Edit",r.appendChild(i),d.appendChild(r),d.appendChild(o),d.addEventListener("submit",(e=>{e.preventDefault(),a.formSubmit(d)})),console.log(n),n.prepend(d)}}})(),a=(()=>{const e=[d("Project 1"),d("Project 2")];function t(t){const n=t["new-project"].value.trim();if(n){const t=d(n);e.push(t)}}function a(){i();for(let t=0;t<e.length;t++){const d=e[t],i=n.getProjectTasks(d.name),o=n.makeTaskForm(d,t);r.render(d,i,o,t)}}return{createNewProject:t,getAllProjects:function(){return e},renderAllProjects:a,createNewProjectForm:function(){c.render()},formSubmit:function(e){t(e),a(),e.reset()},editProject:function(t,n,d){let r=n.parentNode;o(n),e.slice(d,1),c.edit(t,d,r)}}})(),u={create:function(e,t){const d=document.createElement("form");return d.setAttribute("id","task-form"+t),d.classList.add("order-"+t),d.classList.add("task-form"),d.addEventListener("submit",(e=>{e.preventDefault(),n.formSubmit(d)})),function(){const t=function(){const e=document.createElement("div"),t=document.createElement("input");return t.setAttribute("type","date"),t.setAttribute("id","duedate"),e.appendChild(t),e}(),n=function(){const e=document.createElement("div"),t=document.createElement("input");return t.setAttribute("type","text"),t.setAttribute("id","name"),t.setAttribute("placeholder","Task Name"),e.appendChild(t),e}(),r=function(){const e=document.createElement("div"),t=document.createElement("input");return t.setAttribute("placeholder","Notes about task"),t.setAttribute("id","note"),t.setAttribute("type","textarea"),e.appendChild(t),e}(),i=function(){const t=document.createElement("div"),n=document.createElement("input");return n.setAttribute("type","hidden"),n.setAttribute("id","project"),n.setAttribute("value",e.name),t.appendChild(n),t}(),o=function(){const e=document.createElement("div"),t=document.createElement("input"),n=document.createElement("label"),d=document.createElement("input"),r=document.createElement("label"),i=document.createElement("input"),o=document.createElement("label");return t.setAttribute("type","radio"),t.setAttribute("name","priority"),t.setAttribute("id","lowPriority"),t.setAttribute("value","low"),n.setAttribute("for","lowPriority"),n.textContent="Low",d.setAttribute("type","radio"),d.setAttribute("name","priority"),d.setAttribute("id","medPriority"),d.setAttribute("value","med"),r.setAttribute("for","medPriority"),r.textContent="Medium",i.setAttribute("type","radio"),i.setAttribute("name","priority"),i.setAttribute("id","highPriority"),i.setAttribute("value","high"),o.setAttribute("for","highPriority"),o.textContent="High",e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(r),e.appendChild(i),e.appendChild(o),e}();d.appendChild(n),d.appendChild(t),d.appendChild(r),d.appendChild(i),d.appendChild(o)}(),function(){const e=document.createElement("div"),t=function(){const e=document.createElement("button");return e.setAttribute("type","submit"),e.textContent="Add",e}();e.appendChild(t),d.appendChild(e)}(),d}},l=(document.getElementById("content"),{render:function(){a.createNewProjectForm(),a.renderAllProjects()}});e(),l.render()})();