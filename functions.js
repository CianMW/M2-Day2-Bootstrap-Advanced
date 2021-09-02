let buttonLocation = document.getElementById("nukeCards")
let cardLocation = document.querySelectorAll(".card") ;

buttonLocation.addEventListener("click", e =>{
    let i = 0;

    while (i < cardLocation.length) {
  cardLocation[i].remove();
  i++;
}
})
