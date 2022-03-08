// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  
  if (element) return element;
  throw new Error(`Algo deu errado, veja se o ${selector} existe ou se está digitado corretamente.`);
};

// Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement('#header');

  if (this.scrollY >= 15) {
    headerElement.classList.add('activated');
  } else {
    headerElement.classList.remove('activated');
  }
}
window.addEventListener('scroll', scrollHeader);

// Open menu and search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
}
menuToggleIcon.addEventListener('click', toggleMenu);
// Open/close search form pop-up

// Close the search form pop-up on ESC keypress

// Switch theme/add to local storage

// Swiper