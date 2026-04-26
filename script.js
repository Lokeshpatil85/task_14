// ===============================
// ✅ TOGGLE MENU
// ===============================
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});


// ===============================
// ✅ IMAGE SLIDER
// ===============================
const images = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1016/600/300",
  "https://picsum.photos/id/1018/600/300"
];

let index = 0;
const slide = document.getElementById("slide");

function showSlide() {
  slide.src = images[index];
}

function nextSlide() {
  index = (index + 1) % images.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showSlide();
}

// Auto slider (optional)
setInterval(nextSlide, 3000);


// ===============================
// ✅ POPUP MODAL
// ===============================
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// click outside modal = close
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// ===============================
// ✅ PAGE LOAD FIX
// ===============================
window.onload = function () {
  showSlide();
};