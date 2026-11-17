// Menu responsive
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  menuButton.textContent = isOpen ? '✕' : '☰';
});

// Fermer le menu après avoir choisi une section
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Ouvrir le menu');
    menuButton.textContent = '☰';
  });
});

// Année du pied de page
 document.querySelector('#year').textContent = new Date().getFullYear();

// Liens à personnaliser : ne pas ouvrir de fausses destinations
 document.querySelectorAll('.placeholder-link').forEach(link => {
   link.addEventListener('click', event => {
     event.preventDefault();
     alert(`Personnalise d'abord le lien ${link.dataset.placeholder} dans index.html.`);
   });
 });

