// Initialize Fancybox with carousel options
Fancybox.bind("[data-fancybox]", {
  // Toolbar configuration
  Toolbar: {
    display: [
      { id: "prev", position: "center" },
      { id: "counter", position: "center" },
      { id: "next", position: "center" },
      "zoom",
      "fullscreen",
      "close",
    ],
  },
  // Carousel configuration
  Carousel: {
    infinite: true,
    preload: 1,
  },
  // YouTube video settings
  Youtube: {
    autoplay: 1,
    mute: 0,
    showinfo: 0,
    rel: 0,
    fs: 1,
    modestbranding: 1
  },
  // Prevent click event propagation
  on: {
    init: (fancybox) => {
      const container = fancybox.$container;
      container.addEventListener('click', (e) => {
        e.stopPropagation();
      }, true);
    },
    reveal: (fancybox, slide) => {
      // Pause all other videos when a new one is opened
      document.querySelectorAll('video').forEach(video => {
        if (video !== slide.$el) {
          video.pause();
        }
      });
    }
  }
});

// Add click handler to prevent event bubbling
document.querySelectorAll('[data-fancybox]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation();
  }, true);
});
