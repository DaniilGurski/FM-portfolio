(()=>{const e=document.querySelector("#burger-menu"),t=document.querySelector("#primary-nav");e.addEventListener("click",(()=>{"true"===e.getAttribute("aria-expanded")?e.setAttribute("aria-expanded","false"):e.setAttribute("aria-expanded","true"),t.classList.toggle("primary-nav--opened")}))})();