const previous = document.getElementById("previous");
const next = document.getElementById("next");
const imgOne = document.getElementById("one");
const imgTwo = document.getElementById("two");
const imgThree = document.getElementById("three");
const images = document.getElementsByClassName("img");
const dots = document.getElementsByClassName("dot");

let slideIndex = 1;

function controlSlides() {
  previous.addEventListener("click", () => {
    if (slideIndex == 1) {
      slideIndex = images.length;
    } else {
      slideIndex -= 1;
    }
    clearSelection();
    displayImage(slideIndex - 1);
  });

  next.addEventListener("click", () => {
    if (slideIndex == images.length) {
      slideIndex = 1;
    } else {
      slideIndex += 1;
    }
    clearSelection();
    displayImage(slideIndex - 1);
  });

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", (e) => {
      slideIndex = i + 1;
      clearSelection();
      e.target.classList.add("active");
      images[i].classList.add("selected");
    });
  }
}

function carousel() {
  if (slideIndex > images.length) {
    slideIndex = 1;
  }
  clearSelection();
  displayImage(slideIndex - 1);
  setTimeout(carousel, 5000);
  slideIndex++;
}



function displayImage(x) {
  images[x].classList.add("selected");
  dots[x].classList.add("active");
}

function clearSelection() {
  for (let j = 0; j < dots.length; j++) {
    dots[j].classList.remove("active");
    images[j].classList.remove("selected");
  }
}

carousel(slideIndex);

controlSlides();
