
const btn= document.querySelector(".js-btn")
const modal=document.querySelector(".js-modal")
const modalclose = document.querySelector(".js-modal-close");
 const modalcontainer = document.querySelector(".js-modal-container");
 function showBuyTickets() {
     modal.classList.add("open");
   }
   function hideBuyTickets() {
     modal.classList.remove("open");
   }
   btn.addEventListener("click", showBuyTickets)
   modalclose.addEventListener("click", hideBuyTickets);
  //  panner



  