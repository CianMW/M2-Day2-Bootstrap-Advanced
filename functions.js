let buttonLocation = document.getElementById("nukeCards")
let cardLocation = document.querySelectorAll(".card") ;

buttonLocation.addEventListener("click", e =>{
    let i = 0;

    while (i < cardLocation.length) {
  cardLocation[i].remove();
  i++;
}
})


let newBadgeNode = document.createElement("span")
    newBadgeNode.classList.add("badge")
    newBadgeNode.classList.add("badge-danger")
    newBadgeNode.innerHTML = "HOT"


let summerLocationButtons = document.querySelectorAll("#welcome-summer p")
let onClickLocation = document.getElementById("welcome-summer")
    onClickLocation.addEventListener("mouseover", e =>{
        let i = 0;
        let newBadgeNode = document.createElement("p")
    newBadgeNode.classList.add("badge")
    newBadgeNode.classList.add("badge-danger")
    newBadgeNode.innerHTML = "HOT"
    
        while (i < summerLocationButtons.length) {
      summerLocationButtons[i].appendChild(newBadgeNode);
      i++;
    }})