// src/components/Hero.js
import './Hero.css';

export function Hero() {
  const section = document.createElement('section');
  section.classList.add('hero');

  section.innerHTML = `
    <div class="Presentación">
      <div class="Presentación-texto">
        <p class="hello">Hola 👋</p>
        <h1>Soy Javier<span></span><br>Aprendiz a Developer</h1>
        <p class="subtext"></p>
      </div>
      <div class="Presentación-imagen">
        <img src="imagenes/Imagen-Hero.jpg" alt="Developer photo">
      </div>
    </div>
  `;

  return section;
}
