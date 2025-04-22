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
  