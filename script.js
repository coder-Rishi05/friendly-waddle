const ham = document.querySelector(".hamburger-menu");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close");
const goTop = document.querySelector(".go-to-top");
const nav = document.querySelector("nav");
const main = document.querySelector("main-content");

ham.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.toggle("menu-open");
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.remove("menu-open");
});

// goTop.addEventListener("click", () => {

//     scrollTo(0, 0);
// })

goTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
