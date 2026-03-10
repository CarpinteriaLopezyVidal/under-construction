export interface Service {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const services: Service[] = [
  {
    icon: '🪵',
    title: 'Carpintería en Madera',
    description:
      'Trabajamos la madera con maestría artesanal. Muebles, estructuras, revestimientos y todo tipo de elementos en madera maciza o tablero, acabados a mano con materiales de primera calidad.',
    highlight: false,
  },
  {
    icon: '⚙️',
    title: 'Trabajos de CNC',
    description:
      'Tecnología de control numérico computarizado para cortes, fresados y grabados de máxima precisión. Diseños complejos, repeticiones perfectas y acabados imposibles de lograr a mano.',
    highlight: true,
  },
  {
    icon: '🏠',
    title: 'Proyectos Personalizados',
    description:
      'Cada proyecto es único. Escuchamos tus ideas, las convertimos en planos y las hacemos realidad. Desde una estantería especial hasta una obra arquitectónica compleja en madera.',
    highlight: false,
  },
  {
    icon: '🍳',
    title: 'Cocinas a Medida',
    description:
      'Diseñamos y fabricamos cocinas completamente personalizadas. Desde el concepto hasta la instalación, optimizamos cada centímetro del espacio con materiales duraderos y estéticos.',
    highlight: false,
  },
  {
    icon: '🏡',
    title: 'Viviendas Completas',
    description:
      'Carpintería integral para toda la vivienda: puertas, ventanas, escaleras, tarimas, armarios empotrados y cualquier elemento de madera que necesite tu hogar. Un equipo, toda la obra.',
    highlight: true,
  },
  {
    icon: '🚚',
    title: 'Transporte e Instalación',
    description:
      'Nos encargamos de todo: fabricación, transporte y montaje en destino. Sin complicaciones para ti. Llegamos con nuestro equipo a donde nos necesites, garantizando un acabado perfecto.',
    highlight: false,
  },
  {
    icon: '🌍',
    title: 'Toda España y Extranjero',
    description:
      'Trabajamos en toda España y más allá de las fronteras. Hemos completado proyectos en múltiples regiones y países. La distancia no es un obstáculo para ofrecer nuestra mejor carpintería.',
    highlight: false,
  },
  {
    icon: '💡',
    title: 'Todo Tipo de Presupuesto',
    description:
      'Desde soluciones económicas hasta retos de ingeniería más innovadores. Adaptamos materiales y procesos sin renunciar a la calidad. No hay proyecto demasiado pequeño ni demasiado grande.',
    highlight: false,
  },
];
