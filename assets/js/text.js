document.addEventListener('DOMContentLoaded', () => {
  const heroTexts = document.querySelectorAll('.hero-text');
  let currentIndex = 0;

  function showNextText() {
    // Remove 'active' class from current text
    heroTexts[currentIndex].classList.remove('active');

    // Increment index, reset if at end
    currentIndex = (currentIndex + 1) % heroTexts.length;

    // Add 'active' class to next text
    heroTexts[currentIndex].classList.add('active');
  }

  // Initial display of the first text
  heroTexts[currentIndex].classList.add('active');

  // Change text every 5 seconds (adjust as needed)
  setInterval(showNextText, 5000);
});