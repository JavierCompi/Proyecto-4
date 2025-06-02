import './Section1.css';

export function Section1() {
  const section = document.createElement('section');
  section.classList.add('section-1');

  section.innerHTML = `
    <h2 class="section-title">Sobre mí</h2>
    <p class="sobre-mi">
      Como desarrollador web, soy responsable de diseñar y desarrollar páginas web.
      Mi principal objetivo es crear experiencias receptivas y fáciles de usar que satisfagan las necesidades de una audiencia en línea diversa.
    </p>
  `;

  return section;
}
