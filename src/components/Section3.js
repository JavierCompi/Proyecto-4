export function Section3() {
  const section = document.createElement('section');
  section.classList.add('contact-section');

  section.innerHTML = `
    <h2 class="contacta">CONTACTA CONMIGO</h2>
    <form class="formulario">
      <input type="text" placeholder="Nombre" required />
      <input type="email" placeholder="Correo electronicol" required />
      <textarea placeholder="mandame un mensaje" rows="5" required></textarea>
      <button type="submit">
        Enviar
      </button>
    </form>
  `;

  return section;
}
