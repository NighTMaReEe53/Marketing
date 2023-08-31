let navLis = document.querySelectorAll(".nav-filter li");
let theBoxes = document.querySelectorAll(".landing-project .generate");
let theNavbar = document.querySelector(".navbar");

navLis.forEach(li => {
  li.addEventListener("click", (e) => {
    // ForEach To Remove Class Active From Li
    e.target.parentElement.querySelectorAll(".active").forEach(li => {
      li.classList.remove("active");
    })
    e.currentTarget.classList.add("active")
    // Boxes
    theBoxes.forEach(box => {
      box.style.display = "none";
    });
    document.querySelectorAll(e.target.dataset.filter).forEach(box => {
      box.style.display = "block";
    });
  })
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    theNavbar.classList.add("active")
  } else {
    theNavbar.classList.remove("active");
  }
})