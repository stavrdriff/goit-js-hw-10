import{E as c}from"./assets/octagone-x-mark-d43aa87c.js";/* empty css                      */import{f as u,i as l}from"./assets/vendor-9808d4ac.js";const m=(t,e)=>{t<Date.now()+400&&(clearInterval(e),e=null)},p=t=>{const s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return h(s,a,i,d)},h=(t,e,o,r)=>{const n=document.querySelector("[data-days]"),s=document.querySelector("[data-hours]"),a=document.querySelector("[data-minutes]"),i=document.querySelector("[data-seconds]");n.textContent=t.toString().padStart(2,"0"),s.textContent=e.toString().padStart(2,"0"),a.textContent=o.toString().padStart(2,"0"),i.textContent=r.toString().padStart(2,"0")},f=()=>{l.error({class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:c,position:"topRight",pauseOnHover:!0,timeout:3e3,message:"Please choose a date in the future"})},S=(t,e,o)=>{o.removeAttribute("disabled"),e.removeAttribute("disabled");let r;o.addEventListener("click",()=>{o.setAttribute("disabled",""),e.setAttribute("disabled",""),r=setInterval(()=>{p(t-Date.now()),m(t,r)},200)})},b=()=>{const t=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]");let o;if(!t||!e)return;e.setAttribute("disabled",""),u(t,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,dateFormat:"Y-m-d h:m",onClose(n){o=n[0],o<=Date.now()?(e.setAttribute("disabled",""),f()):S(o,t,e)}})};b();
//# sourceMappingURL=commonHelpers.js.map
