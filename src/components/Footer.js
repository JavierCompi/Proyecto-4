// src/components/Footer.js
export function Footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  footer.innerHTML = `
    <p>&copy; Javier Pérez — Gracias por visitar mi portfolio.</p>
  `;

  return footer;
}