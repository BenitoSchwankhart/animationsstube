document.addEventListener('DOMContentLoaded', function() {
  // Initialize Splide
  const splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '1rem',
    pagination: false, // We'll use Webflow's pagination
    arrows: false, // We'll use Webflow's arrows
    breakpoints: {
      768: {
        perPage: 1,
      }
    }
  });

  // Mount Splide
  splide.mount();

  // Handle Webflow arrow clicks
  document.querySelector('.w-slider-arrow-left').addEventListener('click', () => {
    splide.go('<');
  });
  
  document.querySelector('.w-slider-arrow-right').addEventListener('click', () => {
    splide.go('>');
  });
});
