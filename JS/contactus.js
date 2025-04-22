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