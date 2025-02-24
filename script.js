document.addEventListener('DOMContentLoaded', () => {
  const reviews = document.querySelectorAll('.review');
  let currentReview = 0;
  let interval;

  // Create dots container if it doesn't exist
  let dotsContainer = document.querySelector('.carousel-dots');
  if (!dotsContainer) {
    dotsContainer = document.createElement('div');
    dotsContainer.classList.add('carousel-dots');
    document.querySelector('.review-grid').appendChild(dotsContainer);
  }

  // Create dots
  reviews.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      clearInterval(interval);
      showReview(index);
      startCarousel();
    });
    dotsContainer.appendChild(dot);
  });

  function showReview(index) {
    reviews.forEach(review => {
      review.classList.remove('active');
    });
    document.querySelectorAll('.dot').forEach(dot => {
      dot.classList.remove('active');
    });
    
    reviews[index].classList.add('active');
    document.querySelectorAll('.dot')[index].classList.add('active');
    currentReview = index;
  }

  function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
  }

  function startCarousel() {
    interval = setInterval(nextReview, 5000);
  }

  // Start the carousel
  startCarousel();
});