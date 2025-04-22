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

  // Case Dropdown Functionality
  function toggleCaseDropdown() {
    const dropdown = document.getElementById("caseDropdown");
    if (dropdown.style.display === "grid") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "grid";
    }
  }

  // Project Image Functionality Add more here if needed.
  const projectImages = {
    project1: [
      "Images/SobellCafeIMG1.svg",
      "Images/SobellCafeIMG2.svg",
      "Images/SobellCafeIMG3.svg",
      
    ],

    project2: [
      "Images/ChilternPoolsIMG.svg",
      "Images/ChilternPoolsIMG2.svg",
      "Images/ChilternPoolsIMG3.svg",
 
    ],

    project3: [
      "Images/ChingfordVillageIMG1.svg",
      "Images/ChingfordVillageIMG2.svg",
      "Images/ChingfordVillageIMG3.svg",
      "Images/ChingfordVillageIMG4.svg", 
 
    ],

    project4: [
      "Images/ElthamChangingAreaIMG1.svg", 
      "Images/ElthamChangingAreaIMG2.svg",
      "Images/ElthamChangingAreaIMG3.svg",
 
    ],

    project5: [
      "Images/GoslingTrampolineParkIMG1.svg",
      "Images/GoslingTrampolineParkIMG2.svg",
      "Images/GoslingTrampolineParkIMG3.svg",
 
    ],

    project6: [
      "Images/HighElmsRefurbishmentIMG1.svg",
      "Images/HighElmsRefurbishmentIMG2.svg",
      "Images/HighElmsRefurbishmentIMG3.svg",
      "Images/HighElmsRefurbishmentIMG4.svg",
 
    ],

    project7: [
      "Images/KensingtonTreatmentIMG1.svg",
      "Images/KensingtonTreatmentIMG2.svg",
      "Images/KensingtonTreatmentIMG3.svg",
      "Images/KensingtonTreatmentIMG4.svg",

    ],

    project8: [
      "Images/LondonAquaticsIMG1.svg",
      "Images/LondonAquaticsIMG2.svg",
      "Images/LondonAquaticsIMG3.svg",
      "Images/LondonAquaticsIMG4.svg",
 
    ],

    project9: [
      "Images/WalthamstowStadiumIMG1.svg",
      "Images/WalthamstowStadiumIMG2.svg",
      "Images/WalthamstowStadiumIMG3.svg",
 
    ],

    project10: [
      "Images/SobellTrampolineParkIMG1.svg",
      "Images/SobellTrampolineParkIMG2.svg",
      "Images/SobellTrampolineParkIMG3.svg",
      "Images/SobellTrampolineParkIMG4.svg",
      "Images/SobellTrampolineParkIMG5.svg",
      "Images/SobellTrampolineParkIMG6.svg",
      "Images/SobellTrampolineParkIMG7.svg",
      "Images/SobellTrampolineParkIMG8.svg",
      "Images/SobellTrampolineParkIMG9.svg",
      "Images/SobellTrampolineParkIMG10.svg",

    ],

    // Add other projects here...
  };
  
  let currentImageIndex = {};
  
  function openProjectPanel(id) {
    document.getElementById(id).classList.remove("hidden");
    currentImageIndex[id] = 0;
    updateProjectImage(id);
  }
  
  function closeProjectPanel(id) {
    document.getElementById(id).classList.add("hidden");
  }
  
  function updateProjectImage(id) {
    const img = document.getElementById(`${id}Image`);
    img.src = projectImages[id][currentImageIndex[id]];
  }
  
  function nextImage(id) {
    if (currentImageIndex[id] < projectImages[id].length - 1) {
      currentImageIndex[id]++;
    } else {
      currentImageIndex[id] = 0;
    }
    updateProjectImage(id);
  }
  
  function prevImage(id) {
    if (currentImageIndex[id] > 0) {
      currentImageIndex[id]--;
    } else {
      currentImageIndex[id] = projectImages[id].length - 1;
    }
    updateProjectImage(id);
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