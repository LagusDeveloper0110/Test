const slider = document.querySelector(".slider");
const sliderItems = document.querySelector(".slider-items");
const sliderItem = document.querySelectorAll(".slider-item");

let currentIndex = 0;
let timer;

function slide() {
  timer = setInterval(() => {
    currentIndex++;
    if (currentIndex > sliderItem.length - 1) {
      currentIndex = 0;
    }
    sliderItems.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  }, 3000);
}

slide();

slider.addEventListener("mouseenter", () => {
  clearInterval(timer);
});

slider.addEventListener("mouseleave", () => {
  slide();
});

