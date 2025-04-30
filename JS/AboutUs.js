
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

// Animate company description lines on scroll
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4 // trigger when 40% of section is visible
  });

  const companySection = document.querySelector('.company-description');
  if (companySection) {
    observer.observe(companySection);
  }
});


function toggleDropdown(button) {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');
    const isOpen = content.style.display === 'block';
  
    // Close all
    document.querySelectorAll('.dropdown-content').forEach(drop => drop.style.display = 'none');
    document.querySelectorAll('.dropdown-title .arrow').forEach(a => a.innerHTML = '&#9660;'); // ▼
  
    if (!isOpen) {
      content.style.display = 'block';
      arrow.innerHTML = '&#9650;'; // ▲
    }
  }
  

  function openPanel(id) {
    document.getElementById(id).classList.remove('hidden');
  }
  
  function closePanel(id) {
    document.getElementById(id).classList.add('hidden');
  }