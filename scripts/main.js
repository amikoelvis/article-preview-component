const shareBtn = document.getElementById('share-btn');
const closeBtn = document.getElementById('close-share');
const shareMenu = document.getElementById('share-menu');
const authorSection = document.getElementById('author-share');

function isMobileView() {
  return window.innerWidth < 768;
}

shareBtn.addEventListener('click', () => {
  if (isMobileView()) {
    authorSection.classList.add('hidden');
    shareMenu.classList.remove('hidden');
  } else {
    shareMenu.classList.toggle('hidden');
  }
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    shareMenu.classList.add('hidden');
    authorSection.classList.remove('hidden');
  });
}

window.addEventListener('resize', () => {
  if (!isMobileView()) {
    authorSection.classList.remove('hidden');
    shareMenu.classList.add('hidden');
  }
});
