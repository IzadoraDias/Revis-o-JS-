const aumentar = document.querySelector(".aumentar__fonte");
const diminuir = document.querySelector(".diminuir__fonte");
let font = 16

aumentar.addEventListener("click", function(event){
  event.preventDefault();
    font = font + 1
    document.querySelector("body").style.fontSize = (font) + "px"
})

diminuir.addEventListener("click", function(event){
   event.preventDefault();
   font = font - 1
   document.querySelector("body").style.fontSize = (font) + "px"
})