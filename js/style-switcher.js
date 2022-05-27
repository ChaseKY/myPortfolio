// Toggle Style Switcher
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');

styleSwitcherToggle.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});

// Hide Style Switcher on Scroll
window.addEventListener('scroll', () => {
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    document.querySelector('.style-switcher').classList.remove('open');
  }
});

// Theme Colors
const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(skin) {
  alternateStyles.forEach((style) => {
    if (skin === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  });
}
