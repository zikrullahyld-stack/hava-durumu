const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("touchstart", () => {
    card.classList.add("pressed");
    if(navigator.vibrate) navigator.vibrate(20);
  });

  card.addEventListener("touchend", () => {
    card.classList.remove("pressed");
  });

  card.addEventListener("mousedown", () => {
    card.classList.add("pressed");
  });

  card.addEventListener("mouseup", () => {
    card.classList.remove("pressed");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("pressed");
  });

});

function openSite(url){
  document.body.classList.add("fadeout");
  setTimeout(() => {
    window.open(url, "_blank");
    document.body.classList.remove("fadeout");
  }, 350);
}
