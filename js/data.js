/**
 * MELÍFERA DIGITAL — CAPA PURA DE DATOS (Fases 1 y 2)
 * Dataset inmutable con rigor biofísico, entomológico y zootécnico.
 * Contratos de datos:
 * - BENTO_APICOLA_DATA (Fase 1)
 * - CALENDARIO_ESTACIONAL_DATA (Fase 2)
 * - PRODUCTOS_COLMENA_DATA (Fase 2)
 * - ESTIMADOR_CONFIG (Fase 2)
 * - FAQS_APICULTURA_DATA (Fase 2)
 */

(function () {
  'use strict';

  // 1. Bento Grid Biofísico (Fase 1 - Preservado íntegro)
  const bentoData = [
    {
      id: 'waggle-dance',
      badge: 'Lenguaje Vectorial y Polar',
      titulo: 'La Danza del Meneo',
      subtitulo: 'Traducción polar en oscuridad vertical',
      descripcion: 'Descifrada por Karl von Frisch, este sistema de comunicación traduce el ángulo azimutal entre la flor y el sol con respecto a la vertical gravitatoria del panal, operando con una precisión polar de ±5° en completa oscuridad. La abeja modula la duración y frecuencia acústica del circuito central para codificar la distancia métrica exacta hacia el parche floral.',
      metrica: 'Precisión: ±5° | 1 s de meneo ≈ 1.000 m',
      distincion: 'Premio Nobel de Fisiología o Medicina (1973)',
      gridSpan: 'md:col-span-2',
      cardTheme: 'light',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.5 6.5l-2 5.5-5.5 2 2-5.5 5.5-2z"/>'
    },
    {
      id: 'climatizacion-homeostasis',
      badge: 'Termorregulación Homeostática',
      titulo: '34.5 °C en Cámara de Cría',
      subtitulo: 'Control microclimático del superorganismo',
      descripcion: 'El desarrollo embrionario de Apis mellifera exige una estricta estabilidad térmica de 34.5 °C (±0.5 °C). Las obreras calientan la colmena mediante la contracción isométrica desacoplada de sus músculos indirectos del vuelo (generando calor torácico por fricción metabólica) o disipan el sobrecalentamiento acarreando microgotas de agua asociadas a ventilación alar sincronizada.',
      metrica: '34.5 °C constantes (Rango crítico: ±0.5 °C)',
      distincion: 'Termogénesis por desacople neuromuscular',
      gridSpan: 'md:col-span-1',
      cardTheme: 'botanic',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>'
    },
    {
      id: 'geometria-hexagonal',
      badge: 'Optimización Biofísica',
      titulo: 'Conjetura del Panal & Economía de Cera',
      subtitulo: 'Teselación euclidiana de mínima energía',
      descripcion: 'La conjetura del panal, matemáticamente formalizada y demostrada por Thomas Hales (1999), prueba que el prisma hexagonal regular es la teselación óptima que confina celdillas de igual área minimizando el perímetro de material. Esta economía geométrica es vital: sintetizar 1 g de cera exige a las glándulas cereras el catabolismo de entre 7 y 8 g de miel pura.',
      metrica: 'Ratio metabólico colonial: 7-8 g miel / 1 g cera',
      distincion: 'Teorema de Thomas Hales (1999)',
      gridSpan: 'md:col-span-1',
      cardTheme: 'light',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zM12 11l8-4.5M12 11v9M12 11L4 6.5"/>'
    },
    {
      id: 'instrumental-esencial',
      badge: 'Técnica & Etoecología',
      titulo: 'Instrumental y Bloqueo Químico',
      subtitulo: 'Neutralización del isopentil acetato',
      descripcion: 'La aplicación de humo denso y frío satura las antenas de las obreras inhibiendo los receptores olfativos de isopentil acetato (feromona de alarma defensiva), cortando la cascada de reclutamiento agresivo y activando el reflejo ancestral de ingesta preventiva de reservas. Se combina con la palanca metálica para romper el sellado aséptico de propóleo y el velo de microtrama.',
      metrica: 'Inhibición olfativa: Isopentil acetato',
      distincion: 'Manejo etológico sin disrupción colonial',
      gridSpan: 'md:col-span-2',
      cardTheme: 'honey',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>',
      detalles: [
        { item: 'Ahumador', desc: 'Neutraliza feromona de alarma y reduce excitabilidad' },
        { item: 'Palanca', desc: 'Vence sellos mecánicos y resinosos de propóleo' },
        { item: 'Velo técnico', desc: 'Malla micrométrica transpirable de alta visibilidad' }
      ]
    },
    {
      id: 'botanica-perfiles',
      badge: 'Ecosistema & Fenología Floral',
      titulo: 'Botánica y Perfiles Florales',
      subtitulo: 'Quimiometría del néctar y maduración',
      descripcion: 'La miel adquiere su espectro analítico, cromático y organoléptico a partir del perfil botánico del pecoreo: néctar de romero (ámbar translúcido, alta glucosa), azahar (compuestos volátiles sedantes de antranilato de metilo) o brezo (tixotrópica y mineral). La colmena reduce activamente la humedad hasta valores inferiores al 18% para garantizar su estabilidad enzimática e inhibir fermentaciones.',
      metrica: 'Humedad de operculado: < 18% | Brix > 80°',
      distincion: 'Trazabilidad melisopalinológica',
      gridSpan: 'md:col-span-2',
      cardTheme: 'dark',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
      etiquetas: ['Romero (Ámbar claro)', 'Azahar (Cítrica & Sedante)', 'Brezo (Tixotrópica & Mineral)']
    }
  ];

  // 2. Matriz Fenológica Estacional (Fase 2)
  const calendarioData = {
    primavera: {
      estacion: 'Primavera',
      icono: '🌱',
      etapa: 'Expansión de Cría, Sanidad Inicial y Control de Enjambrazón',
      colorClase: 'border-emerald-500',
      badgeClase: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      accentBg: 'bg-emerald-500',
      labores: [
        'Revisión post-invernada y descarte sanitario de panales con más de dos años de uso.',
        'Instalación progresiva de alzas melarias con láminas de cera estampada según tasa de postura.',
        'Inspección biométrica de celdas reales y división artificial para mitigar enjambrazones espontáneas.'
      ]
    },
    verano: {
      estacion: 'Verano',
      icono: '☀️',
      etapa: 'Gran Melada y Cosecha de Cuadros Operculados',
      colorClase: 'border-honey-500',
      badgeClase: 'text-honey-800 bg-honey-50 border-honey-200',
      accentBg: 'bg-honey-500',
      labores: [
        'Cosecha selectiva exclusiva de cuadros con >80% de opérculo maduro (humedad garantizada <18%).',
        'Garantizar abrevaderos limpios cercanos para sostener la refrigeración evaporativa de la colmena.',
        'Desoperculado en frío, extracción centrífuga mecánica y decantación aséptica previa al envasado.'
      ]
    },
    otono: {
      estacion: 'Otoño',
      icono: '🍂',
      etapa: 'Tratamiento contra Varroosis y Blindaje de Reservas',
      colorClase: 'border-amber-600',
      badgeClase: 'text-amber-900 bg-amber-50 border-amber-200',
      accentBg: 'bg-amber-600',
      labores: [
        'Tratamiento veterinario obligatorio contra Varroa destructor (protección del cuerpo graso e inhibición de DWV).',
        'Verificación estricta de 15 a 20 kg de reservas de miel sellada en cámara de cría para el invierno.',
        'Instalación de reductores de piquera contra el pillaje intercolonial y bloqueo de corrientes frías.'
      ]
    },
    invierno: {
      estacion: 'Invierno',
      icono: '❄️',
      etapa: 'Invernada, Termorregulación del Racimo y Cero Disrupción',
      colorClase: 'border-sky-500',
      badgeClase: 'text-sky-800 bg-sky-50 border-sky-200',
      accentBg: 'bg-sky-500',
      labores: [
        'Prohibición taxativa de aperturas para no quebrar la termodinámica del racimo (núcleo a 34.5 °C).',
        'Limpieza, desinfección química y flameado sanitario de material de madera en taller.',
        'Monitoreo indirecto de piqueras y suministro de pasta proteica de emergencia si se agotan reservas.'
      ]
    }
  };

  // 3. Catálogo Analítico de la Botica Apícola (Fase 2)
  const productosData = [
    {
      id: 'miel-cruda',
      nombre: 'Miel Cruda de Paraje',
      icono: '🍯',
      bioquimica: 'Solución sobresaturada de fructosa y glucosa rica en inhibina, peróxido de hidrógeno sintetizado in situ por la enzima viva glucosa oxidasa, invertasa y ácidos orgánicos naturales (ácido glucónico).',
      funcionColmena: 'Combustible metabólico del superorganismo indispensable para la termogénesis por fricción torácica y sustento nutricional de obreras adultas.',
      metrica: 'Humedad < 18% | pH 3.9'
    },
    {
      id: 'propeoleo',
      nombre: 'Propóleo Bioactivo',
      icono: '🛡️',
      bioquimica: 'Complejo fitoquímico de resinas botánicas y gomas recolectadas de yemas arbóreas (álamo, abedul), esterificado con bioflavonoides (galangina, crisina), ácidos fenólicos y terpenos.',
      funcionColmena: 'Escudo aséptico microbiano: sellador hermético del nido, esterilizador previo de celdillas para la postura de la reina y embalsamador bactericida de intrusos.',
      metrica: 'Capacidad bacteriostática y antiviral'
    },
    {
      id: 'polen-corbicula',
      nombre: 'Polen Corbicula (Pan de Abejas)',
      icono: '🌼',
      bioquimica: 'Gránulos de polen recolectados en corbículas de las patas posteriores, fermentados anaeróbicamente con néctar y bacterias ácido-lácticas. Concentra aminoácidos esenciales y lípidos.',
      funcionColmena: 'Pilar proteico y estructural de la colmena; catalizador obligatorio para la maduración de las glándulas hipofaríngeas de nodrizas que segregan jalea real.',
      metrica: '20-30% de proteína bruta biodisponible'
    },
    {
      id: 'cera-virgen',
      nombre: 'Cera Virgen de Opérculo',
      icono: '🕯️',
      bioquimica: 'Ésteres de ácidos grasos (predominio de palmitato de miricilo), hidrocarburos alifáticos saturados y alcoholes grasos libres sintetizados por 8 glándulas cereras ventrales.',
      funcionColmena: 'Matriz arquitectónica tridimensional de teselación prismática hexagonal para confinamiento aséptico de cría, polen compactado y miel de reserva.',
      metrica: 'Punto de fusión exacto: 62 - 65 °C'
    }
  ];

  // 4. Parámetros del Estimador Matemático Zootécnico (Fase 2)
  const estimadorConfig = {
    factoresFlora: {
      alta: 28,  // kg por colmena en bosque o pradera densa
      media: 18, // kg por colmena en áreas agrícolas mixtas
      baja: 10   // kg por colmena en secano o vegetación árida
    },
    factorEnvasado: 2, // Multiplicador para envases de 500 g (2 frascos / kg)
    polinizacion: {
      base: 1.5,
      factorPorColmena: 0.4,
      maximoKm2: 15.0
    },
    reservaInvernalMinKg: 15,
    reservaInvernalMaxKg: 20
  };

  // 5. Castas de la Colonia (Estructura Social)
  const castasData = [
    {
      id: 'reina',
      nombre: 'La Reina',
      icono: '👑',
      poblacion: '1 por colmena',
      esperanzaVida: '3 a 5 años',
      morfologia: 'Abdomen alargado y alas cortas relativas; glándulas mandibulares desarrolladas.',
      funcion: 'Única hembra fértil dedicada a la postura (hasta 2.000 huevos/día en pico) y cohesión química colonial mediante feromona real.',
      metrica: '2.000 huevos/día | 100% Cohesión'
    },
    {
      id: 'obrera',
      nombre: 'Las Obreras',
      icono: '🐝',
      poblacion: '20.000 - 60.000',
      esperanzaVida: '4-6 semanas (verano) / 4-6 meses (invierno)',
      morfologia: 'Patas posteriores adaptadas con corbículas (cestillas de polen), 8 glándulas cereras y aguijón aserrado.',
      funcion: 'Polietismo etario: nodriza, limpiadora, cerera, guardiana y pecoreadora de néctar, polen, agua y propóleo.',
      metrica: 'Polietismo dinámico | 1/12 cdta miel/vida'
    },
    {
      id: 'zangano',
      nombre: 'Los Zánganos',
      icono: '♂️',
      poblacion: '200 - 500 (primavera/verano)',
      esperanzaVida: '2 a 4 meses',
      morfologia: 'Ojos holópticos de gran tamaño, tórax robusto, carecen de aguijón y de glándulas cereras.',
      funcion: 'Fecundación de reinas vírgenes en Áreas de Concentración de Zánganos (ACZ) y auxilio en la termorregulación indirecta.',
      metrica: 'Ojos holópticos 360° | Fecundación nupcial'
    }
  ];

  // 6. Consultas Técnicas Frecuentes (FAQ - Fase 2)
  const faqsData = [
    {
      id: 1,
      pregunta: '¿Por qué la miel auténtica se solidifica o cristaliza de forma espontánea?',
      respuesta: 'La cristalización es un fenómeno físico natural e inexorable producto de la sobresaturación de azúcares (proporción glucosa/fructosa superior a 1.2). La glucosa, de menor solubilidad, precipita formando microcristales alrededor de partículas naturales de polen. Este proceso certifica categóricamente que la miel es cruda y pura: no ha sufrido pasteurización ni sobrecalentamiento térmico industrial (>40 °C), conservando intactas sus enzimas termolábiles (invertasa y glucosa oxidasa) y sus propiedades antimicrobianas.'
    },
    {
      id: 2,
      pregunta: '¿Por qué es letal para la colonia extraer la totalidad de la miel en otoño?',
      respuesta: 'Las abejas no hibernan en estado de letargo o dormancia: forman un racimo térmico compacto donde decenas de miles de obreras consumen miel continuamente para generar fricción muscular torácica y mantener la cámara de cría a 34.5 °C contra temperaturas bajo cero. Una colonia típica consume entre 15 y 20 kg de miel operculada durante el periodo frío. Despojarla de dicha reserva la condena a la muerte por inanición o a sobrevivir con jarabes de azúcar deficitarios en inmunoglobulinas y acidez defensiva.'
    },
    {
      id: 3,
      pregunta: '¿Por qué el ácaro Varroa destructor exige tratamiento veterinario inmediato post-cosecha?',
      respuesta: 'Varroa destructor se alimenta destructivamente del cuerpo graso de la abeja (órgano equivalente al hígado humano, vital para la síntesis de vitelogenina, detoxificación celular e inmunidad humoral). Al perforar la cutícula, inocula el virus de las alas deformadas (DWV). El tratamiento veterinario reglamentario en otoño es imperativo para que la generación de abejas de invierno nazca sana y protegida, garantizando una longevidad de 4 a 6 meses capaz de alcanzar la primavera.'
    }
  ];

  // Inmutabilidad estricta: congelamiento profundo de todas las colecciones
  bentoData.forEach(item => Object.freeze(item));
  productosData.forEach(item => Object.freeze(item));
  faqsData.forEach(item => Object.freeze(item));
  Object.freeze(calendarioData.primavera.labores);
  Object.freeze(calendarioData.verano.labores);
  Object.freeze(calendarioData.otono.labores);
  Object.freeze(calendarioData.invierno.labores);
  Object.freeze(calendarioData.primavera);
  Object.freeze(calendarioData.verano);
  Object.freeze(calendarioData.otono);
  Object.freeze(calendarioData.invierno);
  Object.freeze(calendarioData);
  Object.freeze(estimadorConfig.factoresFlora);
  Object.freeze(estimadorConfig.polinizacion);
  Object.freeze(estimadorConfig);

  // Exposición global
  castasData.forEach(item => Object.freeze(item));

  window.BENTO_APICOLA_DATA = Object.freeze(bentoData);
  window.CALENDARIO_ESTACIONAL_DATA = calendarioData;
  window.PRODUCTOS_COLMENA_DATA = Object.freeze(productosData);
  window.CASTAS_COLMENA_DATA = Object.freeze(castasData);
  window.ESTIMADOR_CONFIG = estimadorConfig;
  window.FAQS_APICULTURA_DATA = Object.freeze(faqsData);
})();
