const button = document.querySelector(".select__button");

button.addEventListener("click", function(event){
    event.preventDefault();
    
 const apagar = document.getElementById("selectInputArea")
    apagar.removeChild(apagar[apagar.selectedIndex]);
})
