import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-9808d4ac.js";const i=(e,o)=>{new Promise((t,r)=>{setTimeout(()=>{o==="fulfilled"?t():r()},e)}).then(()=>{s.success({class:"popup-message",theme:"dark",backgroundColor:"#59A10D",messageColor:"#fff",iconUrl:"./img/checked-circle.svg",position:"topRight",pauseOnHover:!0,timeout:3e3,message:`Fulfilled promise in ${e}ms`})}).catch(()=>{s.error({class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"./img/octagone-x-mark.svg",position:"topRight",pauseOnHover:!0,timeout:3e3,message:`Rejected promise in ${e}ms`})})},m=()=>{const e=document.querySelector(".form");e.addEventListener("submit",o=>{o.preventDefault(),i(e.delay.value,e.state.value)})};m();
//# sourceMappingURL=commonHelpers2.js.map
