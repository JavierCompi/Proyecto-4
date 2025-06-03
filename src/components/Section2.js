// src/components/Section2.js

export function Section2() {
  const section = document.createElement('section');
  section.classList.add('section2');

  const title = document.createElement('h2');
  title.textContent = 'Proyectos';

  const sliderWrapper = document.createElement('div');
  sliderWrapper.classList.add('slider-wrapper');

  // Botones de navegación
  const leftArrow = document.createElement('button');
  leftArrow.classList.add('slider-arrow', 'left');
  leftArrow.innerHTML = '&#8592;'; // Flecha izquierda

  const rightArrow = document.createElement('button');
  rightArrow.classList.add('slider-arrow', 'right');
  rightArrow.innerHTML = '&#8594;'; // Flecha derecha

  const slider = document.createElement('div');
  slider.classList.add('slider');

  // Mostrador 
  const projects = [
    {
      titulo: 'Landing Page',
      descripcion: 'Presentación de una landing page con HTML y CSS.',
      link: 'https://github.com/JavierCompi/Proyecto_1'
    },
    {
      titulo: 'Tienda de Filtros',
      descripcion: 'Tienda con filtros desarrollada con HTML, CSS y JavaScript.',
      link: 'https://github.com/JavierCompi/Proyecto_2'
    },
    {
      titulo: 'Pinterest Async',
      descripcion: 'Buscador de imágenes conectado a una API (en desarrollo).',
      link: '#enlace3'
    },
    {
      titulo: 'Portfolio',
      descripcion: 'Página donde muestro mis proyectos y experiencia.',
      link: 'https://github.com/JavierCompi/Proyecto-4.git'
    },
    {
      titulo: 'Games Hub',
      descripcion: '3 minijuegos desarrollados con HTML, CSS y JS (en desarrollo).',
      link: 'https://github.com/JavierCompi/Proyecto_5.git'
    }
  ];

  // Inicio de los proyectos 
  projects.forEach(({ titulo, descripcion, link }) => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    card.innerHTML = `
      <h3>${titulo}</h3>
      <p>${descripcion}</p>
      <a href="${link}" target="_blank" class="project-button">Ver</a>
    `;

    slider.appendChild(card);
  });

  //  para el slaider ( barra letal )
  leftArrow.addEventListener('click', () => {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  });

  // Estructura del componente
  sliderWrapper.appendChild(leftArrow);
  sliderWrapper.appendChild(slider);
  sliderWrapper.appendChild(rightArrow);

  section.appendChild(title);
  section.appendChild(sliderWrapper);

  return section;
}
