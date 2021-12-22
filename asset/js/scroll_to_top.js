//Get the button:
scrollToTopBtn = document.getElementById('btnScrollToTop');

// When the user scrolls down 350px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    scrollToTopBtn.style.bottom = '60px';
  } else {
    scrollToTopBtn.style.bottom = '-60px';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollToTopBtn.onclick = function () {
  topFunction();
};
