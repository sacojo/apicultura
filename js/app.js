/**
 * MELÍFERA DIGITAL — LÓGICA OPERATIVA Y REACTIVIDAD (Fases 1 y 2)
 * Delegación semántica de eventos, renderizado modular (Bento, Calendario, Productos),
 * cálculo reactivo quirúrgico del estimador y gestión accesible del acordeón FAQ.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Delegación Semántica Centralizada de Clics
  // =========================================================================
  document.addEventListener('click', function (event) {
    const actionElement = event.target.closest('[data-action]');
    if (!actionElement) return;

    const action = actionElement.getAttribute('data-action');
    const targetSelector = actionElement.getAttribute('data-target');

    switch (action) {
      // Desplazamiento suave hacia anclaje
      case 'scroll': {
        event.preventDefault();
        if (targetSelector) {
          const targetEl = document.querySelector(targetSelector);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
        break;
      }

      // Conmutación accesible del acordeón FAQ
      case 'toggle-faq': {
        event.preventDefault();
        const faqId = targetSelector || actionElement.getAttribute('data-faq-id');
        if (!faqId) return;

        const contentEl = document.getElementById(`faq-content-${faqId}`);
        const iconEl = document.getElementById(`faq-icon-${faqId}`);

        if (contentEl) {
          const isHidden = contentEl.classList.contains('hidden');
          if (isHidden) {
            contentEl.classList.remove('hidden');
            if (iconEl) iconEl.textContent = '−';
            actionElement.setAttribute('aria-expanded', 'true');
          } else {
            contentEl.classList.add('hidden');
            if (iconEl) iconEl.textContent = '+';
            actionElement.setAttribute('aria-expanded', 'false');
          }
        }
        break;
      }

      // Resaltado visual de inspección en Bento Grid
      case 'inspect-bento': {
        const cardId = actionElement.getAttribute('data-card-id');
        const card = document.getElementById(`bento-${cardId}`);
        if (card) {
          card.classList.add('ring-2', 'ring-honey-500');
          setTimeout(() => card.classList.remove('ring-2', 'ring-honey-500'), 1200);
        }
        break;
      }

      default:
        break;
    }
  });

  // =========================================================================
  // 2. Renderizado Modular: Bento Grid Biofísico (Fase 1)
  // =========================================================================
  function renderBentoGrid() {
    const container = document.getElementById('bento-grid-container');
    if (!container || !window.BENTO_APICOLA_DATA) return;

    const htmlCards = window.BENTO_APICOLA_DATA.map((item) => {
      const isSpan2 = item.gridSpan === 'md:col-span-2';
      const isDark = item.cardTheme === 'dark';
      const isBotanic = item.cardTheme === 'botanic';
      const isHoney = item.cardTheme === 'honey';

      let containerClasses = `bento-card rounded-3xl p-8 flex flex-col justify-between ${item.gridSpan} `;
      let iconBoxClasses = 'w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ';
      let badgeClasses = 'text-xs font-bold uppercase tracking-wider ';
      let titleClasses = `font-serif font-bold mt-1 mb-3 ${isSpan2 ? 'text-2xl' : 'text-xl'} `;
      let descClasses = 'text-sm leading-relaxed ';
      let footerBorder = 'border-t pt-4 mt-6 flex flex-wrap items-center justify-between text-xs font-medium gap-2 ';

      if (isBotanic) {
        containerClasses += 'bg-gradient-to-br from-botanic-900 to-botanic-950 text-white border border-botanic-800 shadow-sm';
        iconBoxClasses += 'bg-botanic-800/90 text-honey-400';
        badgeClasses += 'text-honey-300';
        titleClasses += 'text-white';
        descClasses += 'text-stone-300 text-xs';
        footerBorder += 'border-botanic-800/80 text-honey-300';
      } else if (isDark) {
        containerClasses += 'bg-stone-900 text-white border border-stone-800 shadow-sm';
        iconBoxClasses += 'bg-stone-800 text-honey-300';
        badgeClasses += 'text-honey-400';
        titleClasses += 'text-white';
        descClasses += 'text-stone-300 max-w-lg';
        footerBorder += 'border-stone-800 text-stone-400';
      } else if (isHoney) {
        containerClasses += 'bg-honey-50/90 border border-honey-200/90 shadow-sm';
        iconBoxClasses += 'bg-honey-200/80 text-honey-900 mb-4';
        badgeClasses += 'text-honey-800';
        titleClasses += 'text-stone-900';
        descClasses += 'text-stone-700 mb-4';
        footerBorder += 'border-honey-200/80 text-stone-600';
      } else {
        containerClasses += 'bg-white border border-stone-200/80 shadow-sm group';
        iconBoxClasses += 'bg-honey-100 text-honey-800 group-hover:scale-105 transition-transform';
        badgeClasses += 'text-honey-700';
        titleClasses += 'text-stone-900';
        descClasses += 'text-stone-600';
        footerBorder += 'border-stone-100 text-stone-500';
      }

      let complementHtml = '';
      if (item.detalles && item.detalles.length) {
        complementHtml = `
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            ${item.detalles.map(d => `
              <div class="bg-white/85 p-3.5 rounded-2xl border border-honey-200/80">
                <span class="block font-bold text-stone-900 text-xs">${d.item}</span>
                <span class="text-[11px] text-stone-600 block mt-0.5 leading-snug">${d.desc}</span>
              </div>
            `).join('')}
          </div>
        `;
      } else if (item.etiquetas && item.etiquetas.length) {
        complementHtml = `
          <div class="flex flex-wrap gap-2 my-4">
            ${item.etiquetas.map(e => `
              <span class="px-3 py-1 rounded-full bg-stone-800 text-xs text-honey-200 border border-stone-700">${e}</span>
            `).join('')}
          </div>
        `;
      }

      return `
        <article id="bento-${item.id}" class="${containerClasses}" data-role="bento-card">
          <div>
            <div class="${iconBoxClasses}">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${item.iconSvg}
              </svg>
            </div>
            <span class="${badgeClasses}">${item.badge}</span>
            <h3 class="${titleClasses}">${item.titulo}</h3>
            <p class="${descClasses}">${item.descripcion}</p>
            ${complementHtml}
          </div>
          <footer class="${footerBorder}">
            <span class="font-semibold">${item.metrica}</span>
            <span class="${isDark || isBotanic ? 'text-honey-400 font-medium' : 'text-honey-600 font-bold'}">${item.distincion}</span>
          </footer>
        </article>
      `;
    }).join('');

    container.innerHTML = htmlCards;
  }

  // =========================================================================
  // 3. Renderizado Modular: Matriz Fenológica Estacional (Fase 2)
  // =========================================================================
  function renderCalendarioEstacional() {
    const container = document.getElementById('calendario-grid-container');
    if (!container || !window.CALENDARIO_ESTACIONAL_DATA) return;

    const estaciones = ['primavera', 'verano', 'otono', 'invierno'];
    const htmlEstaciones = estaciones.map((key) => {
      const data = window.CALENDARIO_ESTACIONAL_DATA[key];
      if (!data) return '';

      return `
        <article class="fenologia-card bg-white rounded-3xl p-6 border border-stone-200 shadow-sm relative overflow-hidden flex flex-col justify-between" data-estacion="${key}">
          <div class="h-2.5 w-full ${data.accentBg} absolute top-0 left-0"></div>
          <div>
            <div class="flex items-center justify-between mt-2 mb-3">
              <span class="text-3xl">${data.icono}</span>
              <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${data.badgeClase}">
                ${data.estacion}
              </span>
            </div>
            <h3 class="font-serif text-xl font-bold text-stone-900">${data.estacion}</h3>
            <p class="text-xs font-semibold text-stone-600 mt-1 mb-4 leading-snug">
              ${data.etapa}
            </p>
            <ul class="text-xs text-stone-600 space-y-2.5">
              ${data.labores.map(labor => `
                <li class="flex items-start gap-2 leading-relaxed">
                  <span class="text-honey-600 font-bold text-sm">⬡</span>
                  <span>${labor}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="mt-6 pt-3 border-t border-stone-100 text-[11px] text-stone-400 italic">
            Sincronización fenológica estricta
          </div>
        </article>
      `;
    }).join('');

    container.innerHTML = htmlEstaciones;
  }

  // =========================================================================
  // 4. Renderizado Modular: Botica Apícola y Derivados (Fase 2)
  // =========================================================================
  function renderProductosColmena() {
    const container = document.getElementById('productos-grid-container');
    if (!container || !window.PRODUCTOS_COLMENA_DATA) return;

    const htmlProductos = window.PRODUCTOS_COLMENA_DATA.map((prod) => {
      return `
        <article class="producto-card bg-stone-800/85 p-6 rounded-3xl border border-stone-700/80 flex flex-col justify-between" data-producto="${prod.id}">
          <div>
            <div class="text-4xl mb-4">${prod.icono}</div>
            <h3 class="font-serif text-xl font-bold text-white mb-2">${prod.nombre}</h3>
            <div class="space-y-3 text-xs">
              <div>
                <span class="text-honey-400 font-semibold block text-[10px] uppercase tracking-wider">Identidad Bioquímica:</span>
                <p class="text-stone-300 leading-relaxed mt-0.5">${prod.bioquimica}</p>
              </div>
              <div>
                <span class="text-honey-400 font-semibold block text-[10px] uppercase tracking-wider">Función en el Superorganismo:</span>
                <p class="text-stone-400 leading-relaxed mt-0.5">${prod.funcionColmena}</p>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-stone-700/80 flex items-center justify-between text-xs">
            <span class="text-honey-300 font-semibold">${prod.metrica}</span>
          </div>
        </article>
      `;
    }).join('');

    container.innerHTML = htmlProductos;
  }

  // =========================================================================
  // 5. Simulador Reactivo Quirúrgico de Cosecha & Polinización (Fase 2)
  // =========================================================================
  function actualizarCalculo() {
    const colmenasInput = document.getElementById('num-colmenas');
    if (!colmenasInput) return;

    const colmenas = parseInt(colmenasInput.value, 10) || 1;
    const floraRadio = document.querySelector('input[name="flora"]:checked');
    const tipoFlora = floraRadio ? floraRadio.value : 'alta';

    const config = window.ESTIMADOR_CONFIG || {
      factoresFlora: { alta: 28, media: 18, baja: 10 },
      factorEnvasado: 2,
      polinizacion: { base: 1.5, factorPorColmena: 0.4, maximoKm2: 15.0 }
    };

    // 1. Rendimiento base R según flora
    const rendimientoBase = config.factoresFlora[tipoFlora] || 28;

    // 2. Miel total extraíble
    const totalKilos = colmenas * rendimientoBase;

    // 3. Frascos comerciales de 500 g
    const totalFrascos = totalKilos * config.factorEnvasado;

    // 4. Radio de polinización con tope biológico amortiguado
    const radioKm2 = Math.min(
      config.polinizacion.maximoKm2,
      config.polinizacion.base + (colmenas * config.polinizacion.factorPorColmena)
    ).toFixed(1);

    // Actualización QUIRÚRGICA: únicamente textContent de los nodos receptores
    const elColmenasVal = document.getElementById('colmenas-val');
    const elResMiel = document.getElementById('res-miel');
    const elResFrascos = document.getElementById('res-frascos');
    const elResFlores = document.getElementById('res-flores');

    if (elColmenasVal) elColmenasVal.textContent = `${colmenas} ${colmenas === 1 ? 'colmena' : 'colmenas'}`;
    if (elResMiel) elResMiel.textContent = `${totalKilos} kg`;
    if (elResFrascos) elResFrascos.textContent = `${totalFrascos} ud.`;
    if (elResFlores) elResFlores.textContent = `~${radioKm2} km²`;
  }

  function initSimuladorEvents() {
    const calcContainer = document.getElementById('calculadora');
    if (!calcContainer) return;

    // Escuchador único delegado para 'input' (deslizador en tiempo real)
    calcContainer.addEventListener('input', function (event) {
      if (event.target && (event.target.id === 'num-colmenas' || event.target.name === 'flora')) {
        actualizarCalculo();
      }
    });

    // Escuchador único delegado para 'change' (selector radio)
    calcContainer.addEventListener('change', function (event) {
      if (event.target && event.target.name === 'flora') {
        actualizarCalculo();
      }
    });

    // Prevención de envío de formulario sin controladores inline
    calcContainer.addEventListener('submit', function (event) {
      event.preventDefault();
    });
  }

  // =========================================================================
  // 6. Telemetría de Lectura y Navegación
  // =========================================================================
  function initReadingTelemetry() {
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;

    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          const docEl = document.documentElement;
          const winScroll = docEl.scrollTop || document.body.scrollTop;
          const height = docEl.scrollHeight - docEl.clientHeight;
          const percent = height > 0 ? (winScroll / height) * 100 : 0;
          progressBar.style.width = percent + '%';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // =========================================================================
  // 7. Auditoría Global de Nodos del DOM (< 1.500 Nodos)
  // =========================================================================
  function auditDomBudget() {
    const totalNodes = document.getElementsByTagName('*').length;
    const maxBudget = 1500;
    const isWithinBudget = totalNodes <= maxBudget;

    const logStyle = isWithinBudget
      ? 'color: #059669; font-weight: bold; background: #ecfdf5; padding: 2px 6px; border-radius: 4px;'
      : 'color: #dc2626; font-weight: bold; background: #fef2f2; padding: 2px 6px; border-radius: 4px;';

    console.info(
      `%c[DOM AUDIT FASE 2]%c Nodos totales activos: ${totalNodes} / ${maxBudget} límite (${isWithinBudget ? 'CUMPLE' : 'EXCEDE'})`,
      logStyle,
      'color: inherit;'
    );
  }

  // =========================================================================
  // 8. Inicialización en Ciclo de Vida del Documento
  // =========================================================================
  function init() {
    // Actualizar año en pie de página
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Renderizadores modulares
    renderBentoGrid();
    renderCalendarioEstacional();
    renderProductosColmena();

    // Inicializar eventos reactivos del simulador
    initSimuladorEvents();
    actualizarCalculo();

    // Telemetría de lectura
    initReadingTelemetry();

    // Auditoría de presupuesto de nodos DOM
    auditDomBudget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
