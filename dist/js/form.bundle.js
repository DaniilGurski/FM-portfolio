(()=>{const e=document.querySelector("#form"),t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function l(e,t){e.setAttribute("data-invalid",""),e.closest("label").dataset.error=t}const r=e=>{const r=e.id,i=e.value;return"email-input"!==r||t.test(i)?""===e.value?(l(e,"This field is required"),e):void e.removeAttribute("data-invalid"):(l(e,"Please use a valid email address"),e)};e.addEventListener("submit",(t=>{t.preventDefault(),[...e.querySelectorAll("input"),...e.querySelectorAll("textarea")].filter(r).length||console.log("form submitted !")}))})();