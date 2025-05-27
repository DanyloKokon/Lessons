const btncont = document.querySelector(".js-container");
const p = document.querySelector(".btn_Name");
btncont.addEventListener("click", (e) => {
console.log(e.target);
console.log(e.currentTarget);

if(e.target === e.currentTarget){
    return
} else{
    p.textContent = e.target.textContent;
}
} )