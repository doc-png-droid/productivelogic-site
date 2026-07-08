// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// Active nav link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});
