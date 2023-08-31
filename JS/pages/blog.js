// Selectors

let blogBoxes = document.querySelectorAll(".blogSrv .box");
let liBullte = document.querySelector(".theBulltes");

// Get Length

let lengthBox = blogBoxes.length;

// CurrentSlide

let currentSlide = 1;

// Prev Next Btn

let prevBtn = document.querySelector(".controls .prev");
let nextBtn = document.querySelector(".controls .next");

// Trigger Two Function

prevBtn.onclick = prev;
nextBtn.onclick = next;

// Create Bullte

for (let i = 1; i <= lengthBox; i++) {
  let li = document.createElement("li");
  li.dataset.index = i;
  liBullte.appendChild(li);
}
let theBulltesOfLis = liBullte.querySelectorAll("li");

for (let i = 0; i < theBulltesOfLis.length; i++) {
  theBulltesOfLis[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute(`data-index`));
    checker();
  }
}

// Checker

function checker() {
  // RemoveActiveClass
  RemoveActiveClass();
  blogBoxes[currentSlide - 1].classList.add("active");
  liBullte.children[currentSlide - 1].classList.add("active");
  if (currentSlide === 1) {
    prevBtn.classList.add("disapled");
  } else {
    prevBtn.classList.remove("disapled");
  }
  if (currentSlide == lengthBox) {
    nextBtn.classList.add("disapled");
  } else {
    nextBtn.classList.remove("disapled");
  }
}

function RemoveActiveClass() {
  blogBoxes.forEach((box) => {
    box.classList.remove("active");
  });
  theBulltesOfLis.forEach((li) => {
    li.classList.remove("active");
  });
}

checker();

// Function's

function prev() {
  if (prevBtn.classList.contains("disapled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}
function next() {
  if (nextBtn.classList.contains("disapled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}

