// src/components/Section1_5.js

export function Section1_5() {
  const section = document.createElement('section');
  section.classList.add('section1-5');

  // Se crea el tab
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  tabs.innerHTML = `
    <span class="tab active" data-tab="experiencia">Experiencia</span>
    <span class="tab" data-tab="estudios">Estudios</span>
  `;

  const content = document.createElement('div');
  content.classList.add('tab-content');

  //  Seccion Experiencia
  const getExperienciaHTML = () => `
    <div class="experiencia">
      <h2>AUXILIAR ADMINISTRATIVO - SECURITAS DIRECT (5 AÑOS)</h2>
      <p>Encargado de atención al cliente, responsable de incidencias y ayuda en el soporte técnico.</p>

      <h2>DEPENDIENTE DE TIENDA - AMETLLER ORIGEN (6 meses)</h2>
      <p>Atención al cliente, mozo de almacén y cajero.</p>

      <h2>ENCARGADO DE FLOTA - GRUAS CASTELLDEFELS (6 meses)</h2>
      <p>Gestión de vehículos (grúas), atención al cliente, trámite de seguros y facturación.</p>
    </div>
  `;

  // Seccion Estudios
  const getEstudiosHTML = () => `
    <div class="estudios">
      <h2>CFGM Gestión Administrativa</h2>
      <p>Título obtenido en 2013-2015.</p>

      <h2>CFGM Informática</h2>
      <p>Solo se realizó el primer año.</p>

      <h2>Bachillerato</h2>
      <p>Solo se realizó el primer año.</p>
    </div>
  `;

  //  empieza con la experiencia 
  content.innerHTML = getExperienciaHTML();

  // cambiar pestañas
  tabs.addEventListener('click', (e) => {
    if (!e.target.classList.contains('tab')) return;
    tabs.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');

    // se cambia segun la pestaña pinchada 
    const selectedTab = e.target.dataset.tab;
    content.innerHTML = selectedTab === 'experiencia' ? getExperienciaHTML() : getEstudiosHTML();
  });


  section.appendChild(tabs);
  section.appendChild(content);

  return section;
}
