/* empty css                      */import{f as u,i as d}from"./assets/vendor-9808d4ac.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function l(r){const t=Math.floor(r/864e5),i=Math.floor(r%864e5/36e5),c=Math.floor(r%864e5%36e5/6e4),a=Math.floor(r%864e5%36e5%6e4/1e3);return f({days:t,hours:i,minutes:c,seconds:a})}const f=({days:r,hours:o,minutes:n,seconds:s})=>{const e=document.querySelector("[data-days]"),t=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),c=document.querySelector("[data-seconds]");e.textContent=r,t.textContent=o,i.textContent=n,c.textContent=s},m=()=>{d.error({class:"error-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",color:"#fff",icon:"icon-x-octagon",iconColor:"#fff",position:"topRight",pauseOnHover:!0,timeout:5e3,message:"Please choose a date in the future"})},h=(r,o,n)=>{n.removeAttribute("disabled"),o.removeAttribute("disabled");let s;n.addEventListener("click",()=>{s?(clearInterval(s),s=null):(n.setAttribute("disabled",""),o.setAttribute("disabled",""),s=setInterval(()=>{l(r-Date.now())},1e3))})},p=()=>{const r=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");let n;if(!r||!o)return;o.setAttribute("disabled",""),u(r,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,dateFormat:"Y-m-d h:m",onClose(e){n=e[0],n<=Date.now()?(o.setAttribute("disabled",""),m()):h(n,r,o)}})};p();
//# sourceMappingURL=commonHelpers.js.map