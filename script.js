const topButton = document.querySelector('.scroll-to-top');
function updateTopButton() {
  topButton.classList.toggle('visible', window.scrollY > 300);
}
window.addEventListener('scroll', updateTopButton, { passive: true });
topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});
updateTopButton();
