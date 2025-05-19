document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.getElementById('burger');
  
  if (!burgerButton) return;

  burgerButton.addEventListener('click', function() {
    this.classList.toggle('is-active');
    
    // Меняем title для доступности
    this.setAttribute('title', 
      this.classList.contains('is-active') ? 'Close Menu' : 'Open Menu');
    
    // Если используется MicroModal
    if (typeof MicroModal !== 'undefined') {
      if (this.classList.contains('is-active')) {
        MicroModal.show('burger-menu');
      } else {
        MicroModal.close('burger-menu');
      }
    }
  });
});

