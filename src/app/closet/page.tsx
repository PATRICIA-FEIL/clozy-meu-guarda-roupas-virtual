'use client';

import { useLanguage } from '@/components/custom/language-provider';
import { Filter, Grid3x3, Heart, Clock, TrendingDown, Plus } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ClosetPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock data - será substituído por dados reais
  const mockItems = [
    { id: '1', name: 'Blusa Branca', category: 'tops', imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=600&fit=crop', favorite: true, timesWorn: 12 },
    { id: '2', name: 'Calça Jeans', category: 'bottoms', imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop', favorite: false, timesWorn: 8 },
    { id: '3', name: 'Vestido Floral', category: 'dresses', imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop', favorite: true, timesWorn: 5 },
    { id: '4', name: 'Jaqueta Jeans', category: 'outerwear', imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop', favorite: false, timesWorn: 15 },
    { id: '5', name: 'Tênis Branco', category: 'shoes', imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop', favorite: true, timesWorn: 20 },
    { id: '6', name: 'Bolsa Preta', category: 'bags', imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=600&fit=crop', favorite: false, timesWorn: 10 },
    { id: '7', name: 'Camisa Social', category: 'tops', imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop', favorite: false, timesWorn: 3 },
    { id: '8', name: 'Short Jeans', category: 'bottoms', imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=600&fit=crop', favorite: false, timesWorn: 7 },
  ];

  const filters = [
    { id: 'all', label: t('closet_all'), icon: Grid3x3 },
    { id: 'favorites', label: t('closet_favorites'), icon: Heart },
    { id: 'recent', label: t('closet_recent'), icon: Clock },
    { id: 'unused', label: t('closet_unused'), icon: TrendingDown },
  ];

  const filteredItems = mockItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'favorites') return item.favorite;
    if (activeFilter === 'recent') return item.timesWorn > 10;
    if (activeFilter === 'unused') return item.timesWorn < 5;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-8 rounded-b-3xl shadow-2xl sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-1">{t('closet_title')}</h1>
              <p className="text-purple-100">{mockItems.length} {t('closet_items')}</p>
            </div>
            <Link
              href="/scanner"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all p-3 rounded-full"
            >
              <Plus className="w-6 h-6" />
            </Link>
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeFilter === filter.id
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-6 py-8">
        {/* Insights */}
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 mb-6 border border-amber-200 dark:border-amber-800">
          <div className="flex items-start gap-3">
            <div className="bg-amber-500 rounded-full p-2 mt-1">
              <TrendingDown className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                {t('closet_insights')}
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                3 {t('closet_unused_items')}. {t('closet_suggest_donate')}
              </p>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Favorite Badge */}
                  {item.favorite && (
                    <div className="absolute top-2 right-2 bg-red-500 rounded-full p-2 shadow-lg">
                      <Heart className="w-4 h-4 text-white fill-white" />
                    </div>
                  )}

                  {/* Times Worn Badge */}
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {item.timesWorn}x usado
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="w-full space-y-2">
                      <button className="w-full bg-white text-gray-900 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all">
                        Ver Detalhes
                      </button>
                      <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all">
                        Criar Look
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {t(`cat_${item.category}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <Grid3x3 className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t('closet_empty')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('closet_empty_subtitle')}
            </p>
            <Link
              href="/scanner"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              {t('home_scan_item')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
