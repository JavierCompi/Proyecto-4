// src/components/Nav.js
import './Nav.css';

export function Nav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  nav.innerHTML = `
    <ul class="Parte_inicial-2">
      <li><a href="#inicio">Sobre mí</a></li>
      <li><a href="#experiencia-estudios">Habilidades</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
      <li><a href="#contacta">Contacta</a></li>
    </ul>
  `;

  // Hace que todo el li sea click
  setTimeout(() => {
    nav.querySelectorAll('.Parte_inicial-2 li').forEach(li => {
      li.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() !== 'a') {
          const link = li.querySelector('a');
          if (link) link.click();
        }
      });
    });
  });

  return nav;
}

