// Preload

let preload = document.querySelector(".preload");

window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    preload.classList.add("loaded");
    document.body.style.overflow = "auto";
  }, 10);
});

// Scroller
let scroller = document.querySelector(".scroller");

let theHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let theTop = document.documentElement.scrollTop;
  scroller.style.width = `${(theTop / theHeight) * 100}%`;
});

let scrollTop = document.querySelector(".scrollTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});