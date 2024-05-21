(()=>{"use strict";function e(e){return e[0].toUpperCase()+e.substring(1)}const t=document.querySelector("#project-banner"),r=document.querySelector("#project-name"),o=document.querySelector("#project-desc"),c=document.querySelector("#project-development"),n=document.querySelector("#project-previews"),a=document.querySelector("#project-switcher");let s=null,u=localStorage.getItem("projectViewKey"),i=e(u);function l(e,t){const r=e.querySelectorAll("source"),o=e.querySelector("img"),c=r.length;r.forEach(((e,r)=>{const o=t[r];e.setAttribute("srcset",o)})),o.setAttribute("src",t[c]),o.setAttribute("srcset",t[c-1])}function d(e){const t=e.currentTarget;e.target.closest("[data-interactable]")&&(localStorage.setItem("projectViewKey",t.dataset.project),u=localStorage.getItem("projectViewKey"),y())}async function p(){if(null===s){const e=await fetch("/project-data.json");if(!e.ok)throw new Error("error fetching data");const t=await e.json();s=t}return s}async function y(){const s=await p(),y=s[u],{banner:j,description:f,development:S,staticPreviews:w}=y,{previousKeyIndex:g,nextKeyIndex:h}=function(e,t){const r=Object.keys(e),o=r.indexOf(t);if(o<0)throw new Error("key not found");return{previousKeyIndex:o>0?o-1:r.length-1,nextKeyIndex:o<r.length-1?o+1:0}}(s,u);l(t,j),r.textContent=i,o.textContent=f,c.textContent=S,n.querySelectorAll("picture").forEach(((e,t)=>{l(e,w[t])})),function(t,r){const o=Object.keys(t),c=a.querySelector("[data-switch-to='next'"),n=a.querySelector("[data-switch-to='prev'"),s=(c.getAttribute("data-project"),n.getAttribute("data-project"),c.querySelector("#next-project")),u=n.querySelector("#prev-project");n.dataset.project=o[r[0]],c.dataset.project=o[r[1]],s.textContent=e(c.dataset.project),u.textContent=e(n.dataset.project)}(s,[g,h]),a.querySelectorAll("[data-switch-to]").forEach((e=>{e.addEventListener("click",d)}))}y()})();