import"./assets/styles-23d4be25.js";const r="feedback-form-state",n=document.querySelector("form"),a=document.querySelector("input"),l=document.querySelector("textarea");let t=JSON.parse(localStorage.getItem(r))||{};function u({email:e,message:o}){a.value=e||"",l.value=o||""}try{t=JSON.parse(localStorage.getItem(r))||{}}catch(e){console.error("Error parsing localStorage:",e),t={}}u(t);n.addEventListener("input",e=>{const o=e.target.name,c=e.target.value;t[o]=c,localStorage.setItem(r,JSON.stringify(t))});n.addEventListener("submit",e=>{e.preventDefault(),a.value.trim()&&l.value.trim()?(localStorage.removeItem(r),a.value="",l.value="",console.log(t),t={}):alert("All fields should be filled in")});
//# sourceMappingURL=commonHelpers2.js.map
