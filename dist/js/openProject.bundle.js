(()=>{const e=document.querySelector("#project-list");Array.from(e.children).forEach((e=>{const t=e.dataset.project;e.querySelector(".button").addEventListener("click",(()=>{localStorage.setItem("projectViewKey",t)}))}))})();