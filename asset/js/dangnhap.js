const btndkt = document.querySelector(".js-btn1")
const modall=document.querySelector(".js-modal1")

const modallclose = document.querySelector(".js-modal1-close");
 const modallcontainer = document.querySelector(".js-modal1-container");
 function showBuy() {
     modall.classList.add("open");
   }
   function hideBuy() {
     modall.classList.remove("open");
   }
   btndkt.addEventListener("click", showBuy)
   modallclose.addEventListener("click", hideBuy);



   ////////////////////////////////////////////
   