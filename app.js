let currentSlide = 0;
const totalSlides = document.querySelectorAll("#slider img").length;
console.log(totalSlides);

const nextSlide = function () {
  currentSlide = currentSlide + 1;
  console.log(currentSlide);

  if (currentSlide >= totalSlides) {
    console.log(currentSlide);
    currentSlide = 0;
  }

  const leftPosition = -currentSlide * 25 + "vw";
  document.querySelector("#slider").style.left = leftPosition;
};

const previousSlide = function () {
  currentSlide = currentSlide - 1;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  const leftPosition = -currentSlide * 20 + "vw";
  document.querySelector("#slider").style.left = leftPosition;
};

const autoSlide = setInterval(function () {
  nextSlide();
}, 3000);

// slider buttons

document.querySelector("#shift-right").addEventListener("click", function () {
  clearInterval(autoSlide);
  nextSlide();
});

document.querySelector("#shift-left").addEventListener("click", function () {
  clearInterval(autoSlide);
  previousSlide();
});

document.addEventListener("keyup", (event) => {
  if (event.key == "ArrowRight") {
    nextSlide();
  } else if (event.key == "ArrowLeft") {
    previousSlide();
  }
});
