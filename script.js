document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");
    const menuToggle = document.getElementById("menuToggle");
    const navbarLinks = document.getElementById("navbarLinks");
    const hamburger = document.getElementById("hamburger");
  
    searchIcon.addEventListener("click", function () {
      searchInput.style.display = searchInput.style.display === "block" ? "none" : "block";
    });
  
    menuToggle.addEventListener("click", function () {
      const isOpen = navbarLinks.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll('.number');

    // Function to run the progress animation
    const runProgress = (skill) => {
      const progress = skill.getAttribute('data-progress');
      skill.parentElement.parentElement.style.setProperty('--progress', progress);

      let counter = 0;
      const interval = setInterval(() => {
        if (counter >= progress) {
          clearInterval(interval);
        } else {
          counter++;
          skill.textContent = counter + '%';
        }
      }, 20);
    };

    // IntersectionObserver to detect when element is in the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runProgress(entry.target);
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as per your requirement (0.5 means half of the element should be visible)

    skills.forEach(skill => {
      observer.observe(skill);
    });
});

document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('navbarLinks').classList.toggle('active');
  this.classList.toggle('active');
});

// smooth-behaviour
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.getElementById('scrollButton').addEventListener('click', function() {
  console.log("btn know click");
  document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
  });
});