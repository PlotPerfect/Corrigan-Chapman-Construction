
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
  

// cookies banner functionality
  document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineLink = document.getElementById('declineCookies');

    // Show banner only if not already accepted or declined
    if (!localStorage.getItem('cookieConsent')) {
      setTimeout(() => {
        banner.classList.add('show');
      }, 500);
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      banner.classList.remove('show');
    });

    declineLink.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.setItem('cookieConsent', 'declined');
      banner.classList.remove('show');
    });
  });


  
  // Testimonial Slider Functionality
  let currentTestimonial = 0;

  function changeTestimonial(direction) {
    const testimonials = document.querySelectorAll(".testimonial");
    testimonials[currentTestimonial].classList.remove("active");
  
    currentTestimonial += direction;
  
    if (currentTestimonial < 0) currentTestimonial = testimonials.length - 1;
    if (currentTestimonial >= testimonials.length) currentTestimonial = 0;
  
    testimonials[currentTestimonial].classList.add("active");
  }
  
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
  