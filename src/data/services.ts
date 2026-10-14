export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export const services: Service[] = [
  {
    id: 'cocinas',
    title: 'Cocinas de Diseño a Medida',
    category: 'Alta Ebanistería',
    description:
      'Proyectamos y fabricamos cocinas exclusivas concebidas al milímetro. Armónicos frentes alistonados, islas en isla de roble o nogal macizo, interiores hidrófugos y encimeras porcelánicas o de piedra natural.',
    features: ['Herrajes Blum / Grass con cierre amortiguado', 'Madera maciza tratada y tableros marinos', 'Integración de iluminación LED oculta'],
    highlight: true,
  },
  {
    id: 'cnc',
    title: 'Mecanizado & Corte CNC 5 Ejes',
    category: 'Tecnología de Precisión',
    description:
      'Centro de fresado computarizado de alta precisión para celosías tridimensionales, paneles acústicos palillería, grabados arquitectónicos y piezas curvadas con tolerancias centesimales.',
    features: ['Corte, ranurado y fresado 3D', 'Archivos CAD/CAM y planos técnicos', 'Repetibilidad y acabados perfectos'],
    highlight: true,
  },
  {
    id: 'vestidores',
    title: 'Armarios & Vestidores a Medida',
    category: 'Organización & Confort',
    description:
      'Aprovechamiento integral del espacio. Vestidores abiertos o cerrados con puertas coplanares, enrasadas o con vitrinas de vidrio y perfilería de aluminio negro/bronce, zapateros extraíbles y cajones forrados.',
    features: ['Distribución interior 100% personalizada', 'Puertas suelo a techo sin juntas vistas', 'Maderas nobles y lacados de alta resistencia'],
    highlight: false,
  },
  {
    id: 'revestimientos',
    title: 'Palillería & Revestimientos Acústicos',
    category: 'Arquitectura Interior',
    description:
      'Listones de madera maciza y paneles decorativos sobre fieltro fonoabsorbente para paredes, techos y divisorias de ambientes. Calidez visual y aislamiento acústico para hogares y espacios comerciales.',
    features: ['Madera de roble natural, fresno o teca', 'Mejora acústica certificada', 'Puertas enrasadas integradas en el panelado'],
    highlight: false,
  },
  {
    id: 'mobiliario',
    title: 'Mesas & Mobiliario de Autor',
    category: 'Piezas Exclusivas',
    description:
      'Creación de piezas singulares: mesas de comedor live-edge con cantos naturales del árbol, aparadores suspendidos, mesas de centro y muebles de baño hidrófugos acabados con aceites ecológicos.',
    features: ['Tablones seleccionados uno a uno', 'Uniones tradicionales en cola de milano', 'Acabados al aceite o cera natural'],
    highlight: false,
  },
  {
    id: 'viviendas',
    title: 'Proyectos Integrales de Carpintería',
    category: 'Llave en Mano',
    description:
      'Nos ocupamos de toda la madera de tu vivienda o local: puertas de paso, puertas acorazadas revestidas, rodapiés enrasados, tarimas flotantes y escaleras voladas. Coordinación total sin intermediarios.',
    features: ['Un solo interlocutor para toda la obra', 'Cumplimiento estricto de plazos', 'Fabricación e instalación por el mismo equipo'],
    highlight: true,
  },
];

