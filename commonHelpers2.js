import"./assets/styles-a5059763.js";const e=document.createElement("form");e.className="feedback-form";e.autocomplete="off";e.innerHTML=`<label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>`;document.body.appendChild(e);const r="feedback-form-state",o=e.querySelector("input"),n=e.querySelector("textarea");let a=JSON.parse(localStorage.getItem(r))||{};function m({email:t,message:l}){o.value=t||"",n.value=l||""}a?m(a):a={email:"",message:""};e.addEventListener("input",t=>{const l=t.target.name,s=t.target.value;a[l]=s,localStorage.setItem("feedback-form-state",JSON.stringify(a))});e.addEventListener("submit",t=>{t.preventDefault(),o.value&&n.value?(localStorage.removeItem("feedback-form-state"),o.value="",n.value="",console.log(a)):alert("All fields should be filled in")});
//# sourceMappingURL=commonHelpers2.js.map
