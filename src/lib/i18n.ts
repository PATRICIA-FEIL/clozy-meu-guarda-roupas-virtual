// ============================================
// CLOZI - Sistema de Internacionalização
// ============================================

import { Language } from './types';

export const translations = {
  pt: {
    // Geral
    app_name: 'CLOZI',
    app_tagline: 'IA, 3D, Estilo e AR',
    loading: 'Carregando...',
    save: 'Salvar',
    cancel: 'Cancelar',
    delete: 'Excluir',
    edit: 'Editar',
    close: 'Fechar',
    next: 'Próximo',
    back: 'Voltar',
    finish: 'Concluir',
    
    // Navegação
    nav_home: 'Início',
    nav_closet: 'Closet',
    nav_looks: 'Looks',
    nav_scanner: 'Scanner',
    nav_plan: 'Planejar',
    nav_stats: 'Estatísticas',
    nav_3d: 'Guarda-Roupa 3D',
    nav_profile: 'Perfil',
    
    // Home
    home_title: 'Olá! 👋',
    home_look_of_day: 'Look do Dia',
    home_weather: 'Clima',
    home_quick_actions: 'Ações Rápidas',
    home_scan_item: 'Digitalizar Peça',
    home_create_look: 'Criar Look',
    home_view_closet: 'Ver Closet',
    home_plan_week: 'Planejar Semana',
    home_insights: 'Insights',
    home_ai_suggestion: 'Sugestão da IA',
    home_based_on: 'Baseado em',
    
    // Scanner
    scanner_title: 'Scanner Inteligente',
    scanner_subtitle: 'Tire uma foto da peça para digitalizar',
    scanner_take_photo: 'Tirar Foto',
    scanner_upload: 'Escolher da Galeria',
    scanner_processing: 'Processando com IA...',
    scanner_analyzing: 'Analisando cores, material e estilo',
    scanner_removing_bg: 'Removendo fundo',
    scanner_success: 'Peça digitalizada com sucesso!',
    scanner_add_details: 'Adicionar Detalhes',
    scanner_auto_detected: 'Detectado Automaticamente',
    
    // Closet
    closet_title: 'Meu Closet',
    closet_items: 'peças',
    closet_filter: 'Filtrar',
    closet_sort: 'Ordenar',
    closet_all: 'Todas',
    closet_favorites: 'Favoritas',
    closet_recent: 'Recentes',
    closet_unused: 'Não Usadas',
    closet_category: 'Categoria',
    closet_style: 'Estilo',
    closet_season: 'Estação',
    closet_color: 'Cor',
    closet_empty: 'Seu closet está vazio',
    closet_empty_subtitle: 'Comece digitalizando suas primeiras peças',
    closet_insights: 'Insights do Closet',
    closet_unused_items: 'peças não usadas há 30+ dias',
    closet_suggest_donate: 'Considere doar ou vender',
    
    // Looks
    looks_title: 'Meus Looks',
    looks_create: 'Criar Look',
    looks_ai_generate: 'Gerar com IA',
    looks_manual: 'Criar Manualmente',
    looks_for_occasion: 'Para qual ocasião?',
    looks_weather: 'Clima atual',
    looks_style: 'Estilo',
    looks_generating: 'Gerando looks perfeitos...',
    looks_ai_score: 'Pontuação IA',
    looks_try_ar: 'Provar em AR',
    looks_save: 'Salvar Look',
    looks_worn: 'vezes usado',
    looks_empty: 'Nenhum look criado ainda',
    looks_empty_subtitle: 'Use a IA para gerar combinações perfeitas',
    
    // Planejamento
    plan_title: 'Planejamento',
    plan_weekly: 'Semanal',
    plan_capsule: 'Cápsula',
    plan_travel: 'Viagem',
    plan_week_of: 'Semana de',
    plan_drag_drop: 'Arraste looks para os dias',
    plan_add_look: 'Adicionar Look',
    plan_capsule_title: 'Guarda-Roupa Cápsula',
    plan_capsule_subtitle: 'Crie looks infinitos com peças selecionadas',
    plan_capsule_items: 'peças',
    plan_capsule_looks: 'looks possíveis',
    plan_travel_title: 'Planejador de Mala',
    plan_travel_destination: 'Destino',
    plan_travel_dates: 'Datas',
    plan_travel_checklist: 'Checklist',
    
    // Estatísticas
    stats_title: 'Estatísticas',
    stats_overview: 'Visão Geral',
    stats_total_items: 'Total de Peças',
    stats_total_looks: 'Total de Looks',
    stats_most_worn: 'Mais Usadas',
    stats_least_worn: 'Menos Usadas',
    stats_cost_per_wear: 'Custo por Uso',
    stats_category_dist: 'Distribuição por Categoria',
    stats_color_palette: 'Paleta de Cores',
    stats_style_dist: 'Distribuição de Estilos',
    stats_export_pdf: 'Exportar PDF',
    stats_monthly: 'Insights Mensais',
    
    // 3D
    wardrobe_3d_title: 'Guarda-Roupa 3D',
    wardrobe_3d_subtitle: 'Visualize seu closet físico em 3D realista',
    wardrobe_3d_dimensions: 'Dimensões',
    wardrobe_3d_width: 'Largura',
    wardrobe_3d_height: 'Altura',
    wardrobe_3d_depth: 'Profundidade',
    wardrobe_3d_generate: 'Gerar Modelo 3D',
    wardrobe_3d_view: 'Visualizar',
    wardrobe_3d_organize: 'Organizar Peças',
    
    // Avatar & AR
    avatar_title: 'Meu Avatar',
    avatar_create: 'Criar Avatar',
    avatar_photo: 'Tire uma foto de corpo inteiro',
    avatar_measurements: 'Medidas Corporais',
    avatar_generating: 'Gerando avatar fotorrealista...',
    ar_try_on: 'Provar em AR',
    ar_camera: 'Abrir Câmera AR',
    ar_view_avatar: 'Ver no Avatar',
    
    // Marketplace
    market_title: 'Marketplace',
    market_sell: 'Vender',
    market_donate: 'Doar',
    market_buy: 'Comprar',
    market_price: 'Preço',
    market_condition: 'Condição',
    market_list_item: 'Anunciar Peça',
    
    // Stylist
    stylist_title: 'Consultoria de Stylist',
    stylist_book: 'Agendar Sessão',
    stylist_available: 'Disponível',
    stylist_per_hour: '/hora',
    stylist_specialties: 'Especialidades',
    stylist_rating: 'Avaliação',
    
    // Assinatura
    sub_free: 'Gratuito',
    sub_premium: 'Premium',
    sub_pro: 'PRO',
    sub_upgrade: 'Fazer Upgrade',
    sub_features: 'Recursos',
    sub_current: 'Plano Atual',
    
    // Categorias
    cat_tops: 'Blusas',
    cat_bottoms: 'Calças',
    cat_dresses: 'Vestidos',
    cat_outerwear: 'Casacos',
    cat_shoes: 'Sapatos',
    cat_accessories: 'Acessórios',
    cat_bags: 'Bolsas',
    cat_jewelry: 'Joias',
    
    // Estilos
    style_casual: 'Casual',
    style_formal: 'Formal',
    style_business: 'Executivo',
    style_sporty: 'Esportivo',
    style_bohemian: 'Boho',
    style_minimalist: 'Minimalista',
    style_vintage: 'Vintage',
    style_streetwear: 'Streetwear',
    style_elegant: 'Elegante',
    style_romantic: 'Romântico',
    
    // Ocasiões
    occasion_work: 'Trabalho',
    occasion_casual: 'Casual',
    occasion_party: 'Festa',
    occasion_formal: 'Formal',
    occasion_sport: 'Esporte',
    occasion_date: 'Encontro',
    occasion_travel: 'Viagem',
    occasion_home: 'Casa',
    
    // Estações
    season_spring: 'Primavera',
    season_summer: 'Verão',
    season_fall: 'Outono',
    season_winter: 'Inverno',
    season_all: 'Todas',
  },
  
  en: {
    // General
    app_name: 'CLOZI',
    app_tagline: 'AI, 3D, Style & AR',
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    close: 'Close',
    next: 'Next',
    back: 'Back',
    finish: 'Finish',
    
    // Navigation
    nav_home: 'Home',
    nav_closet: 'Closet',
    nav_looks: 'Looks',
    nav_scanner: 'Scanner',
    nav_plan: 'Plan',
    nav_stats: 'Stats',
    nav_3d: '3D Wardrobe',
    nav_profile: 'Profile',
    
    // Home
    home_title: 'Hello! 👋',
    home_look_of_day: 'Look of the Day',
    home_weather: 'Weather',
    home_quick_actions: 'Quick Actions',
    home_scan_item: 'Scan Item',
    home_create_look: 'Create Look',
    home_view_closet: 'View Closet',
    home_plan_week: 'Plan Week',
    home_insights: 'Insights',
    home_ai_suggestion: 'AI Suggestion',
    home_based_on: 'Based on',
    
    // Scanner
    scanner_title: 'Smart Scanner',
    scanner_subtitle: 'Take a photo of the item to digitize',
    scanner_take_photo: 'Take Photo',
    scanner_upload: 'Choose from Gallery',
    scanner_processing: 'Processing with AI...',
    scanner_analyzing: 'Analyzing colors, material and style',
    scanner_removing_bg: 'Removing background',
    scanner_success: 'Item digitized successfully!',
    scanner_add_details: 'Add Details',
    scanner_auto_detected: 'Auto Detected',
    
    // Closet
    closet_title: 'My Closet',
    closet_items: 'items',
    closet_filter: 'Filter',
    closet_sort: 'Sort',
    closet_all: 'All',
    closet_favorites: 'Favorites',
    closet_recent: 'Recent',
    closet_unused: 'Unused',
    closet_category: 'Category',
    closet_style: 'Style',
    closet_season: 'Season',
    closet_color: 'Color',
    closet_empty: 'Your closet is empty',
    closet_empty_subtitle: 'Start by scanning your first items',
    closet_insights: 'Closet Insights',
    closet_unused_items: 'items unused for 30+ days',
    closet_suggest_donate: 'Consider donating or selling',
    
    // Looks
    looks_title: 'My Looks',
    looks_create: 'Create Look',
    looks_ai_generate: 'Generate with AI',
    looks_manual: 'Create Manually',
    looks_for_occasion: 'For which occasion?',
    looks_weather: 'Current weather',
    looks_style: 'Style',
    looks_generating: 'Generating perfect looks...',
    looks_ai_score: 'AI Score',
    looks_try_ar: 'Try in AR',
    looks_save: 'Save Look',
    looks_worn: 'times worn',
    looks_empty: 'No looks created yet',
    looks_empty_subtitle: 'Use AI to generate perfect combinations',
    
    // Planning
    plan_title: 'Planning',
    plan_weekly: 'Weekly',
    plan_capsule: 'Capsule',
    plan_travel: 'Travel',
    plan_week_of: 'Week of',
    plan_drag_drop: 'Drag looks to days',
    plan_add_look: 'Add Look',
    plan_capsule_title: 'Capsule Wardrobe',
    plan_capsule_subtitle: 'Create infinite looks with selected items',
    plan_capsule_items: 'items',
    plan_capsule_looks: 'possible looks',
    plan_travel_title: 'Travel Planner',
    plan_travel_destination: 'Destination',
    plan_travel_dates: 'Dates',
    plan_travel_checklist: 'Checklist',
    
    // Statistics
    stats_title: 'Statistics',
    stats_overview: 'Overview',
    stats_total_items: 'Total Items',
    stats_total_looks: 'Total Looks',
    stats_most_worn: 'Most Worn',
    stats_least_worn: 'Least Worn',
    stats_cost_per_wear: 'Cost per Wear',
    stats_category_dist: 'Category Distribution',
    stats_color_palette: 'Color Palette',
    stats_style_dist: 'Style Distribution',
    stats_export_pdf: 'Export PDF',
    stats_monthly: 'Monthly Insights',
    
    // 3D
    wardrobe_3d_title: '3D Wardrobe',
    wardrobe_3d_subtitle: 'Visualize your physical closet in realistic 3D',
    wardrobe_3d_dimensions: 'Dimensions',
    wardrobe_3d_width: 'Width',
    wardrobe_3d_height: 'Height',
    wardrobe_3d_depth: 'Depth',
    wardrobe_3d_generate: 'Generate 3D Model',
    wardrobe_3d_view: 'View',
    wardrobe_3d_organize: 'Organize Items',
    
    // Avatar & AR
    avatar_title: 'My Avatar',
    avatar_create: 'Create Avatar',
    avatar_photo: 'Take a full body photo',
    avatar_measurements: 'Body Measurements',
    avatar_generating: 'Generating photorealistic avatar...',
    ar_try_on: 'Try in AR',
    ar_camera: 'Open AR Camera',
    ar_view_avatar: 'View on Avatar',
    
    // Marketplace
    market_title: 'Marketplace',
    market_sell: 'Sell',
    market_donate: 'Donate',
    market_buy: 'Buy',
    market_price: 'Price',
    market_condition: 'Condition',
    market_list_item: 'List Item',
    
    // Stylist
    stylist_title: 'Stylist Consultation',
    stylist_book: 'Book Session',
    stylist_available: 'Available',
    stylist_per_hour: '/hour',
    stylist_specialties: 'Specialties',
    stylist_rating: 'Rating',
    
    // Subscription
    sub_free: 'Free',
    sub_premium: 'Premium',
    sub_pro: 'PRO',
    sub_upgrade: 'Upgrade',
    sub_features: 'Features',
    sub_current: 'Current Plan',
    
    // Categories
    cat_tops: 'Tops',
    cat_bottoms: 'Bottoms',
    cat_dresses: 'Dresses',
    cat_outerwear: 'Outerwear',
    cat_shoes: 'Shoes',
    cat_accessories: 'Accessories',
    cat_bags: 'Bags',
    cat_jewelry: 'Jewelry',
    
    // Styles
    style_casual: 'Casual',
    style_formal: 'Formal',
    style_business: 'Business',
    style_sporty: 'Sporty',
    style_bohemian: 'Bohemian',
    style_minimalist: 'Minimalist',
    style_vintage: 'Vintage',
    style_streetwear: 'Streetwear',
    style_elegant: 'Elegant',
    style_romantic: 'Romantic',
    
    // Occasions
    occasion_work: 'Work',
    occasion_casual: 'Casual',
    occasion_party: 'Party',
    occasion_formal: 'Formal',
    occasion_sport: 'Sport',
    occasion_date: 'Date',
    occasion_travel: 'Travel',
    occasion_home: 'Home',
    
    // Seasons
    season_spring: 'Spring',
    season_summer: 'Summer',
    season_fall: 'Fall',
    season_winter: 'Winter',
    season_all: 'All',
  },
  
  es: {
    // General
    app_name: 'CLOZI',
    app_tagline: 'IA, 3D, Estilo y AR',
    loading: 'Cargando...',
    save: 'Guardar',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    edit: 'Editar',
    close: 'Cerrar',
    next: 'Siguiente',
    back: 'Atrás',
    finish: 'Finalizar',
    
    // Navegación
    nav_home: 'Inicio',
    nav_closet: 'Closet',
    nav_looks: 'Looks',
    nav_scanner: 'Escáner',
    nav_plan: 'Planificar',
    nav_stats: 'Estadísticas',
    nav_3d: 'Armario 3D',
    nav_profile: 'Perfil',
    
    // Home
    home_title: '¡Hola! 👋',
    home_look_of_day: 'Look del Día',
    home_weather: 'Clima',
    home_quick_actions: 'Acciones Rápidas',
    home_scan_item: 'Escanear Prenda',
    home_create_look: 'Crear Look',
    home_view_closet: 'Ver Closet',
    home_plan_week: 'Planificar Semana',
    home_insights: 'Insights',
    home_ai_suggestion: 'Sugerencia de IA',
    home_based_on: 'Basado en',
    
    // Scanner
    scanner_title: 'Escáner Inteligente',
    scanner_subtitle: 'Toma una foto de la prenda para digitalizarla',
    scanner_take_photo: 'Tomar Foto',
    scanner_upload: 'Elegir de Galería',
    scanner_processing: 'Procesando con IA...',
    scanner_analyzing: 'Analizando colores, material y estilo',
    scanner_removing_bg: 'Eliminando fondo',
    scanner_success: '¡Prenda digitalizada con éxito!',
    scanner_add_details: 'Agregar Detalles',
    scanner_auto_detected: 'Detectado Automáticamente',
    
    // Closet
    closet_title: 'Mi Closet',
    closet_items: 'prendas',
    closet_filter: 'Filtrar',
    closet_sort: 'Ordenar',
    closet_all: 'Todas',
    closet_favorites: 'Favoritas',
    closet_recent: 'Recientes',
    closet_unused: 'Sin Usar',
    closet_category: 'Categoría',
    closet_style: 'Estilo',
    closet_season: 'Temporada',
    closet_color: 'Color',
    closet_empty: 'Tu closet está vacío',
    closet_empty_subtitle: 'Comienza escaneando tus primeras prendas',
    closet_insights: 'Insights del Closet',
    closet_unused_items: 'prendas sin usar por 30+ días',
    closet_suggest_donate: 'Considera donar o vender',
    
    // Looks
    looks_title: 'Mis Looks',
    looks_create: 'Crear Look',
    looks_ai_generate: 'Generar con IA',
    looks_manual: 'Crear Manualmente',
    looks_for_occasion: '¿Para qué ocasión?',
    looks_weather: 'Clima actual',
    looks_style: 'Estilo',
    looks_generating: 'Generando looks perfectos...',
    looks_ai_score: 'Puntuación IA',
    looks_try_ar: 'Probar en AR',
    looks_save: 'Guardar Look',
    looks_worn: 'veces usado',
    looks_empty: 'No hay looks creados aún',
    looks_empty_subtitle: 'Usa la IA para generar combinaciones perfectas',
    
    // Planificación
    plan_title: 'Planificación',
    plan_weekly: 'Semanal',
    plan_capsule: 'Cápsula',
    plan_travel: 'Viaje',
    plan_week_of: 'Semana del',
    plan_drag_drop: 'Arrastra looks a los días',
    plan_add_look: 'Agregar Look',
    plan_capsule_title: 'Armario Cápsula',
    plan_capsule_subtitle: 'Crea looks infinitos con prendas seleccionadas',
    plan_capsule_items: 'prendas',
    plan_capsule_looks: 'looks posibles',
    plan_travel_title: 'Planificador de Maleta',
    plan_travel_destination: 'Destino',
    plan_travel_dates: 'Fechas',
    plan_travel_checklist: 'Checklist',
    
    // Estadísticas
    stats_title: 'Estadísticas',
    stats_overview: 'Resumen',
    stats_total_items: 'Total de Prendas',
    stats_total_looks: 'Total de Looks',
    stats_most_worn: 'Más Usadas',
    stats_least_worn: 'Menos Usadas',
    stats_cost_per_wear: 'Costo por Uso',
    stats_category_dist: 'Distribución por Categoría',
    stats_color_palette: 'Paleta de Colores',
    stats_style_dist: 'Distribución de Estilos',
    stats_export_pdf: 'Exportar PDF',
    stats_monthly: 'Insights Mensuales',
    
    // 3D
    wardrobe_3d_title: 'Armario 3D',
    wardrobe_3d_subtitle: 'Visualiza tu closet físico en 3D realista',
    wardrobe_3d_dimensions: 'Dimensiones',
    wardrobe_3d_width: 'Ancho',
    wardrobe_3d_height: 'Alto',
    wardrobe_3d_depth: 'Profundidad',
    wardrobe_3d_generate: 'Generar Modelo 3D',
    wardrobe_3d_view: 'Visualizar',
    wardrobe_3d_organize: 'Organizar Prendas',
    
    // Avatar & AR
    avatar_title: 'Mi Avatar',
    avatar_create: 'Crear Avatar',
    avatar_photo: 'Toma una foto de cuerpo completo',
    avatar_measurements: 'Medidas Corporales',
    avatar_generating: 'Generando avatar fotorrealista...',
    ar_try_on: 'Probar en AR',
    ar_camera: 'Abrir Cámara AR',
    ar_view_avatar: 'Ver en Avatar',
    
    // Marketplace
    market_title: 'Marketplace',
    market_sell: 'Vender',
    market_donate: 'Donar',
    market_buy: 'Comprar',
    market_price: 'Precio',
    market_condition: 'Condición',
    market_list_item: 'Publicar Prenda',
    
    // Stylist
    stylist_title: 'Consultoría de Stylist',
    stylist_book: 'Agendar Sesión',
    stylist_available: 'Disponible',
    stylist_per_hour: '/hora',
    stylist_specialties: 'Especialidades',
    stylist_rating: 'Calificación',
    
    // Suscripción
    sub_free: 'Gratuito',
    sub_premium: 'Premium',
    sub_pro: 'PRO',
    sub_upgrade: 'Mejorar',
    sub_features: 'Características',
    sub_current: 'Plan Actual',
    
    // Categorías
    cat_tops: 'Blusas',
    cat_bottoms: 'Pantalones',
    cat_dresses: 'Vestidos',
    cat_outerwear: 'Abrigos',
    cat_shoes: 'Zapatos',
    cat_accessories: 'Accesorios',
    cat_bags: 'Bolsos',
    cat_jewelry: 'Joyas',
    
    // Estilos
    style_casual: 'Casual',
    style_formal: 'Formal',
    style_business: 'Ejecutivo',
    style_sporty: 'Deportivo',
    style_bohemian: 'Boho',
    style_minimalist: 'Minimalista',
    style_vintage: 'Vintage',
    style_streetwear: 'Streetwear',
    style_elegant: 'Elegante',
    style_romantic: 'Romántico',
    
    // Ocasiones
    occasion_work: 'Trabajo',
    occasion_casual: 'Casual',
    occasion_party: 'Fiesta',
    occasion_formal: 'Formal',
    occasion_sport: 'Deporte',
    occasion_date: 'Cita',
    occasion_travel: 'Viaje',
    occasion_home: 'Casa',
    
    // Estaciones
    season_spring: 'Primavera',
    season_summer: 'Verano',
    season_fall: 'Otoño',
    season_winter: 'Invierno',
    season_all: 'Todas',
  },
};

export type TranslationKey = keyof typeof translations.pt;

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key] || translations.pt[key] || key;
}

export function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return 'pt';
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('es')) return 'es';
  return 'en';
}
