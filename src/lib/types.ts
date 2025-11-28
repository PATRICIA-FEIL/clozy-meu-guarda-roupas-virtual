// ============================================
// CLOZI - Tipos TypeScript Completos
// ============================================

// ========== USUÁRIO E PERFIL ==========
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: UserPreferences;
  measurements?: BodyMeasurements;
  subscription: SubscriptionTier;
  credits: number;
  createdAt: Date;
}

export interface UserPreferences {
  style: StyleType[];
  colors: string[];
  occasions: OccasionType[];
  climate: ClimatePreference;
  language: Language;
  currency: Currency;
  timezone: string;
}

export interface BodyMeasurements {
  height: number;
  weight: number;
  chest: number;
  waist: number;
  hips: number;
  shoeSize: number;
  unit: 'metric' | 'imperial';
}

// ========== PEÇAS DE ROUPA ==========
export interface ClothingItem {
  id: string;
  userId: string;
  name: string;
  category: ClothingCategory;
  subcategory?: string;
  colors: string[];
  material: string[];
  brand?: string;
  price?: number;
  purchaseDate?: Date;
  imageUrl: string;
  imageProcessed: string; // Fundo removido
  tags: string[];
  style: StyleType[];
  season: Season[];
  occasion: OccasionType[];
  timesWorn: number;
  lastWorn?: Date;
  favorite: boolean;
  condition: 'new' | 'good' | 'fair' | 'worn';
  aiAnalysis?: AIAnalysis;
  createdAt: Date;
}

export type ClothingCategory = 
  | 'tops' 
  | 'bottoms' 
  | 'dresses' 
  | 'outerwear' 
  | 'shoes' 
  | 'accessories' 
  | 'bags' 
  | 'jewelry';

export type StyleType = 
  | 'casual' 
  | 'formal' 
  | 'business' 
  | 'sporty' 
  | 'bohemian' 
  | 'minimalist' 
  | 'vintage' 
  | 'streetwear' 
  | 'elegant' 
  | 'romantic';

export type Season = 'spring' | 'summer' | 'fall' | 'winter' | 'all';

export type OccasionType = 
  | 'work' 
  | 'casual' 
  | 'party' 
  | 'formal' 
  | 'sport' 
  | 'date' 
  | 'travel' 
  | 'home';

// ========== LOOKS ==========
export interface Look {
  id: string;
  userId: string;
  name: string;
  items: string[]; // IDs das peças
  occasion: OccasionType;
  season: Season;
  style: StyleType;
  weather?: WeatherCondition;
  rating?: number;
  timesWorn: number;
  lastWorn?: Date;
  favorite: boolean;
  aiGenerated: boolean;
  aiScore?: number;
  notes?: string;
  imageUrl?: string;
  createdAt: Date;
}

// ========== CLIMA ==========
export interface WeatherCondition {
  temperature: number;
  feelsLike: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'windy';
  humidity: number;
  location: string;
  timestamp: Date;
}

// ========== IA ==========
export interface AIAnalysis {
  colors: ColorAnalysis[];
  material: string[];
  style: StyleType[];
  occasion: OccasionType[];
  season: Season[];
  confidence: number;
  suggestions: string[];
}

export interface ColorAnalysis {
  name: string;
  hex: string;
  percentage: number;
}

export interface AILookSuggestion {
  look: Look;
  score: number;
  reason: string;
  alternatives: string[][];
}

// ========== 3D E AR ==========
export interface Wardrobe3D {
  id: string;
  userId: string;
  name: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  sections: WardrobeSection[];
  items: string[]; // IDs das peças
  modelUrl?: string;
}

export interface WardrobeSection {
  id: string;
  type: 'hanging' | 'shelf' | 'drawer' | 'shoe-rack';
  position: { x: number; y: number; z: number };
  capacity: number;
  items: string[];
}

export interface Avatar {
  id: string;
  userId: string;
  photoUrl: string;
  modelUrl?: string;
  measurements: BodyMeasurements;
  skinTone: string;
  hairColor: string;
  createdAt: Date;
}

// ========== PLANEJAMENTO ==========
export interface WeeklyPlan {
  id: string;
  userId: string;
  weekStart: Date;
  days: DayPlan[];
}

export interface DayPlan {
  date: Date;
  looks: {
    morning?: string;
    afternoon?: string;
    evening?: string;
  };
  weather?: WeatherCondition;
  events?: string[];
}

export interface CapsuleWardrobe {
  id: string;
  userId: string;
  name: string;
  items: string[];
  possibleLooks: number;
  season: Season;
  style: StyleType;
  createdAt: Date;
}

export interface TravelPlan {
  id: string;
  userId: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  items: string[];
  looks: string[];
  checklist: ChecklistItem[];
}

export interface ChecklistItem {
  id: string;
  item: string;
  packed: boolean;
}

// ========== ESTATÍSTICAS ==========
export interface Statistics {
  userId: string;
  totalItems: number;
  totalLooks: number;
  mostWornItems: ClothingItem[];
  leastWornItems: ClothingItem[];
  costPerWear: CostPerWear[];
  categoryDistribution: Record<ClothingCategory, number>;
  colorPalette: ColorAnalysis[];
  styleDistribution: Record<StyleType, number>;
  monthlyInsights: MonthlyInsight[];
}

export interface CostPerWear {
  itemId: string;
  item: ClothingItem;
  cost: number;
  timesWorn: number;
  costPerWear: number;
}

export interface MonthlyInsight {
  month: string;
  itemsAdded: number;
  itemsRemoved: number;
  totalWears: number;
  favoriteStyle: StyleType;
  spending: number;
}

// ========== MARKETPLACE ==========
export interface MarketplaceItem {
  id: string;
  sellerId: string;
  item: ClothingItem;
  price: number;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  description: string;
  status: 'available' | 'sold' | 'reserved';
  createdAt: Date;
}

// ========== STYLIST ==========
export interface Stylist {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  specialties: StyleType[];
  rating: number;
  reviews: number;
  pricePerHour: number;
  available: boolean;
}

export interface StylistSession {
  id: string;
  userId: string;
  stylistId: string;
  scheduledAt: Date;
  duration: number;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  notes?: string;
  recommendations?: string[];
}

// ========== INFLUENCER CLONE ==========
export interface InfluencerStyle {
  id: string;
  name: string;
  avatar: string;
  style: StyleType[];
  signature: string[];
  looks: Look[];
}

// ========== ASSINATURA ==========
export type SubscriptionTier = 'free' | 'premium' | 'pro';

export interface Subscription {
  userId: string;
  tier: SubscriptionTier;
  startDate: Date;
  endDate?: Date;
  autoRenew: boolean;
  features: SubscriptionFeatures;
}

export interface SubscriptionFeatures {
  maxItems: number;
  aiLooks: boolean;
  ar: boolean;
  wardrobe3D: boolean;
  videoGeneration: boolean;
  stylistAccess: boolean;
  advancedAnalytics: boolean;
  sharedCloset: boolean;
}

// ========== INTERNACIONALIZAÇÃO ==========
export type Language = 'pt' | 'en' | 'es';
export type Currency = 'BRL' | 'USD' | 'EUR' | 'GBP';

export interface LocalizationConfig {
  language: Language;
  currency: Currency;
  dateFormat: string;
  timezone: string;
  measurementUnit: 'metric' | 'imperial';
}

// ========== NOTIFICAÇÕES ==========
export interface Notification {
  id: string;
  userId: string;
  type: 'look-suggestion' | 'weather-alert' | 'unused-item' | 'style-tip' | 'event-reminder';
  title: string;
  message: string;
  data?: any;
  read: boolean;
  createdAt: Date;
}

// ========== VÍDEOS ==========
export interface VideoTemplate {
  id: string;
  name: string;
  style: 'reels' | 'tiktok' | 'story';
  duration: number;
  transitions: string[];
  music?: string;
}

export interface GeneratedVideo {
  id: string;
  userId: string;
  looks: string[];
  template: VideoTemplate;
  videoUrl: string;
  thumbnail: string;
  createdAt: Date;
}
