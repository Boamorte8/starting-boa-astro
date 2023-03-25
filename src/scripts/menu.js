const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  document.querySelector(".nav-links").classList.toggle("expanded");
});
