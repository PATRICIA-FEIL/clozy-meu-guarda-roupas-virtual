'use client';

import { useLanguage } from '@/components/custom/language-provider';
import { TrendingUp, TrendingDown, DollarSign, PieChart, Download, Shirt, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function StatsPage() {
  const { t } = useLanguage();

  // Mock data
  const stats = {
    totalItems: 127,
    totalLooks: 43,
    avgCostPerWear: 12.5,
    totalValue: 8500,
    mostWornCategory: 'tops',
    leastWornCategory: 'dresses',
  };

  const mostWorn = [
    { id: '1', name: 'Tênis Branco', timesWorn: 45, imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=300&fit=crop' },
    { id: '2', name: 'Calça Jeans', timesWorn: 38, imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=300&fit=crop' },
    { id: '3', name: 'Blusa Branca', timesWorn: 32, imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=300&fit=crop' },
  ];

  const leastWorn = [
    { id: '1', name: 'Vestido Festa', timesWorn: 1, imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=300&fit=crop' },
    { id: '2', name: 'Blazer Formal', timesWorn: 2, imageUrl: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=200&h=300&fit=crop' },
    { id: '3', name: 'Sapato Social', timesWorn: 2, imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=300&fit=crop' },
  ];

  const categoryDistribution = [
    { category: 'tops', count: 35, percentage: 28 },
    { category: 'bottoms', count: 28, percentage: 22 },
    { category: 'shoes', count: 22, percentage: 17 },
    { category: 'dresses', count: 18, percentage: 14 },
    { category: 'outerwear', count: 15, percentage: 12 },
    { category: 'accessories', count: 9, percentage: 7 },
  ];

  const colorPalette = [
    { color: '#000000', name: 'Preto', percentage: 25 },
    { color: '#FFFFFF', name: 'Branco', percentage: 20 },
    { color: '#1E40AF', name: 'Azul', percentage: 15 },
    { color: '#DC2626', name: 'Vermelho', percentage: 12 },
    { color: '#059669', name: 'Verde', percentage: 10 },
    { color: '#D97706', name: 'Laranja', percentage: 8 },
    { color: '#7C3AED', name: 'Roxo', percentage: 10 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-8 rounded-b-3xl shadow-2xl">
        <div className="max-w-screen-xl mx-auto">
          <Link href="/" className="text-sm text-purple-100 mb-2 inline-block hover:text-white transition-colors">
            ← {t('back')}
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{t('stats_title')}</h1>
              <p className="text-purple-100">Análise completa do seu closet</p>
            </div>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all px-4 py-2 rounded-xl flex items-center gap-2">
              <Download className="w-5 h-5" />
              <span className="font-semibold">{t('stats_export_pdf')}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-6 py-8 space-y-8">
        {/* Overview Cards */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('stats_overview')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3">
                  <Shirt className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stats.totalItems}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('stats_total_items')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stats.totalLooks}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('stats_total_looks')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-3">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                R$ {stats.avgCostPerWear}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('stats_cost_per_wear')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-3">
                  <PieChart className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                R$ {stats.totalValue.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Valor Total
              </p>
            </div>
          </div>
        </section>

        {/* Most & Least Worn */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Most Worn */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('stats_most_worn')}
              </h3>
            </div>

            <div className="space-y-4">
              {mostWorn.map((item, idx) => (
                <div key={item.id} className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-400 w-8">
                    {idx + 1}
                  </span>
                  <div className="w-16 h-20 rounded-lg overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.timesWorn}x usado
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Least Worn */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('stats_least_worn')}
              </h3>
            </div>

            <div className="space-y-4">
              {leastWorn.map((item, idx) => (
                <div key={item.id} className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-400 w-8">
                    {idx + 1}
                  </span>
                  <div className="w-16 h-20 rounded-lg overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.timesWorn}x usado
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full text-orange-600 dark:text-orange-400 font-semibold text-sm hover:underline">
                Sugerir doação/venda
              </button>
            </div>
          </div>
        </section>

        {/* Category Distribution */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            {t('stats_category_dist')}
          </h3>

          <div className="space-y-4">
            {categoryDistribution.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {t(`cat_${cat.category}`)}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {cat.count} peças ({cat.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all"
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Color Palette */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            {t('stats_color_palette')}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {colorPalette.map((color) => (
              <div key={color.color} className="text-center">
                <div
                  className="w-full aspect-square rounded-2xl mb-3 shadow-lg"
                  style={{ backgroundColor: color.color }}
                />
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  {color.name}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {color.percentage}%
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
