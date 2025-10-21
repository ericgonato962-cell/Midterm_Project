// Smooth scroll animation for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar shadow effect on scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('shadow');
  } else {
    nav.classList.remove('shadow');
  }
});
// Smooth scroll animation for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar shadow effect on scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('shadow');
  } else {
    nav.classList.remove('shadow');
  }
});

// Contact button function
document.getElementById("contactBtn").addEventListener("click", function() {
  alert("Thank you for reaching out! Your email app will open shortly.");
  window.location.href = "mailto:ericgonato962@gmail.com";
});

document.getElementById("contactBtn").addEventListener("click", function() {
  alert("Thank you for reaching out! Opening your email...");
  setTimeout(() => {
    window.location.href = "mailto:ericgonato962@gmail.com";
  }, 1000);
});


// Track activity visits
let activitiesVisited = new Set();
document.querySelectorAll('.portfolio-item a').forEach(link => {
  link.addEventListener('click', () => {
    const activity = link.textContent.trim();
    activitiesVisited.add(activity);

    // when all 5 are done, show popup
    if (activitiesVisited.size === 5) {
      setTimeout(() => {
        document.getElementById('gamePopup').classList.remove('hidden');
      }, 500);
    }
  });
});

// Handle popup buttons
document.getElementById('yesGame').addEventListener('click', () => {
  document.getElementById('gamePopup').classList.add('hidden');
  document.getElementById('tetrisContainer').classList.remove('hidden');
  startTetris();
});

document.getElementById('noGame').addEventListener('click', () => {
  document.getElementById('gamePopup').classList.add('hidden');
  alert("🎉 Thank you for checking all my activities!");
});

document.getElementById('closeTetris').addEventListener('click', () => {
  document.getElementById('tetrisContainer').classList.add('hidden');
  cancelAnimationFrame(tetrisLoop);
});



