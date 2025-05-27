const st = document.querySelector(".js-tags");
st.addEventListener("click", otc)
function otc(e){
    if (e.target.nodeName !== "BUTTON") {
        return
    }
   // e.target.classList.toggle("tags__btn--active");

   const cat = document.querySelector(".tags__btn--active");
   if (cat) {
       cat.classList.remove("tags__btn--active");
   }
      e.target.classList.add("tags__btn--active");
}