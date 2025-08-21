let menue = document.querySelector(`.menu`);
let bar = document.querySelector(`.bar`);

menue.addEventListener("click" , ()=>{
    bar.classList.toggle(`active`);
})