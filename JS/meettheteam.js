
// Menu Button Functionality 
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const menuPanel = document.getElementById('menuPanel');
    const closeBtn = document.getElementById('closeMenu');
  
    // Hover effect
    menuIcon.addEventListener('mouseenter', () => {
      menuIcon.src = 'Icons/MenuIconHover.svg';
    });
  
    menuIcon.addEventListener('mouseleave', () => {
      menuIcon.src = 'Icons/MenuIconClosed.svg';
    });
  
    // Open panel
    menuIcon.addEventListener('click', () => {
      menuPanel.classList.add('open');
    });
  
    // Close panel
    closeBtn.addEventListener('click', () => {
      menuPanel.classList.remove('open');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Show first testimonial on load
    const testimonials = document.querySelectorAll(".testimonial");
    if (testimonials.length > 0) {
      testimonials[0].classList.add("active");
    }
  });
  
  function openPanel(id) {
    document.getElementById(id).classList.remove('hidden');
  }
  
  function closePanel(id) {
    document.getElementById(id).classList.add('hidden');
  }

 
  function toggleVacancies() {
    const panel = document.getElementById('vacanciesPanel');
    panel.classList.toggle('hidden');
  }

