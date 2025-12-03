document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".text-slides");
  const slides = document.querySelectorAll(".text-slides li");
  let currentIndex = 0;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});