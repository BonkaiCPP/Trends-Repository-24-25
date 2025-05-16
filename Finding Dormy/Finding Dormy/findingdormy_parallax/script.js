window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // Get the current scroll position

  document.querySelectorAll('.layer').forEach(layer => {
    const depth = parseFloat(layer.getAttribute('data-depth')); // Get the depth value
    const movement = scrollY * depth; // Calculate movement based on depth
    layer.style.transform = `translate3d(0, ${movement}px, 0)`; // Apply vertical movement
  });
});