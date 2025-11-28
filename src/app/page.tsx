'use client';

import { useLanguage } from '@/components/custom/language-provider';
import { LanguageSwitcher } from '@/components/custom/language-switcher';
import { Sparkles, Camera, Shirt, Calendar, TrendingUp, Box, Cloud, Sun, CloudRain } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const { t } = useLanguage();

  // Simulação de dados (será substituído por dados reais do backend)
  const mockWeather = {
    temp: 24,
    condition: 'sunny' as const,
    location: 'São Paulo, BR',
  };

  const mockLookOfDay = {
    items: [
      { id: '1', name: 'Blusa Branca', category: 'tops', imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=600&fit=crop' },
      { id: '2', name: 'Calça Jeans', category: 'bottoms', imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop' },
      { id: '3', name: 'Tênis Branco', category: 'shoes', imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop' },
    ],
    style: 'casual',
    occasion: 'work',
    aiScore: 95,
  };

  const weatherIcon = {
    sunny: Sun,
    cloudy: Cloud,
    rainy: CloudRain,
  };

  const WeatherIcon = weatherIcon[mockWeather.condition];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-8 rounded-b-3xl shadow-2xl">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">{t('home_title')}</h1>
              <p className="text-purple-100 text-sm">{t('app_tagline')}</p>
            </div>
            <LanguageSwitcher />
          </div>

          {/* Weather Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
            <div className="bg-white/20 rounded-full p-3">
              <WeatherIcon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-2xl font-bold">{mockWeather.temp}°C</p>
              <p className="text-sm text-purple-100">{mockWeather.location}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-6 py-8 space-y-8">
        {/* Look do Dia */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-600" />
              {t('home_look_of_day')}
            </h2>
            <span className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full">
              {t('home_ai_suggestion')} • {mockLookOfDay.aiScore}%
            </span>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {mockLookOfDay.items.map((item) => (
                <div key={item.id} className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="absolute bottom-2 left-2 text-white text-xs font-medium">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Link
                href="/looks"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-center"
              >
                {t('looks_try_ar')}
              </Link>
              <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">
                {t('looks_save')}
              </button>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {t('home_quick_actions')}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/scanner"
              className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Camera className="w-8 h-8 mb-3" />
              <p className="font-bold text-lg">{t('home_scan_item')}</p>
              <p className="text-sm text-purple-100 mt-1">IA automática</p>
            </Link>

            <Link
              href="/looks"
              className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Sparkles className="w-8 h-8 mb-3" />
              <p className="font-bold text-lg">{t('home_create_look')}</p>
              <p className="text-sm text-blue-100 mt-1">Gerado por IA</p>
            </Link>

            <Link
              href="/closet"
              className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Shirt className="w-8 h-8 mb-3" />
              <p className="font-bold text-lg">{t('home_view_closet')}</p>
              <p className="text-sm text-emerald-100 mt-1">Ver todas as peças</p>
            </Link>

            <Link
              href="/plan"
              className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Calendar className="w-8 h-8 mb-3" />
              <p className="font-bold text-lg">{t('home_plan_week')}</p>
              <p className="text-sm text-orange-100 mt-1">Organize seus looks</p>
            </Link>
          </div>
        </section>

        {/* Insights Rápidos */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {t('home_insights')}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2">
                  <Shirt className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">127</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('closet_items')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">43</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('looks_title')}</p>
                </div>
              </div>
            </div>

            <Link
              href="/stats"
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ 12,50</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('stats_cost_per_wear')}</p>
                </div>
              </div>
            </Link>

            <Link
              href="/wardrobe-3d"
              className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <Box className="w-6 h-6" />
                <div>
                  <p className="font-bold">{t('nav_3d')}</p>
                  <p className="text-xs text-purple-100">Visualizar em 3D</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
