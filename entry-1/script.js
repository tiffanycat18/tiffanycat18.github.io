const introScreen = document.getElementById('intro-screen');
    const storyScreen = document.getElementById('story-screen');
    const beginBtn = document.getElementById('begin-story');

    const slides = Array.from(document.querySelectorAll('.slide'));
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const stepIndicator = document.getElementById('step-indicator');

    let currentSlide = 0;

    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
      });
      stepIndicator.textContent = `${currentSlide + 1} / ${slides.length}`;
    }

    beginBtn.addEventListener('click', () => {
      introScreen.classList.add('hidden');
      storyScreen.classList.remove('hidden');
    });

    nextBtn.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
      }
    });
