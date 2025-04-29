const shareBtn = document.getElementById('share-btn');
const closeBtn = document.getElementById('close-share');
const shareMenu = document.getElementById('share-menu');
const authorSection = document.getElementById('author-share');

function isMobileView() {
  return window.innerWidth < 768;
}

shareBtn.addEventListener('click', () => {
  if (isMobileView()) {
    authorSection.classList.add('hidden'); // Hide author section on mobile view
    shareMenu.classList.remove('hidden'); // Show share menu on mobile view
  } else {
    shareMenu.classList.toggle('hidden'); // Toggle share menu on larger screens
  }
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    shareMenu.classList.add('hidden'); // Hide share menu
    authorSection.classList.remove('hidden'); // Show author section
  }); // Hide share menu on close button click
}

window.addEventListener('resize', () => {
  if (!isMobileView()) {
    authorSection.classList.remove('hidden'); // Show author section on larger screens
    shareMenu.classList.add('hidden'); // Hide share menu on larger screens
  }
}); // Ensure author section is visible on resize
