let bgImageEl = document.getElementById("bg_image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
  bgImageEl.style.backgroundSize = 120 - window.pageYOffset / 32 + "%";
}
