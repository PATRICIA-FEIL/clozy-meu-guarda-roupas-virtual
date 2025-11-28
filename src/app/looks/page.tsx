'use client';

import { useLanguage } from '@/components/custom/language-provider';
import { Sparkles, Wand2, Heart, Share2, Camera, Plus } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function LooksPage() {
  const { t } = useLanguage();
  const [generating, setGenerating] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);

  // Mock data
  const mockLooks = [
    {
      id: '1',
      name: 'Look Casual Trabalho',
      items: [
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop',
      ],
      occasion: 'work',
      style: 'casual',
      aiScore: 95,
      timesWorn: 3,
      favorite: true,
    },
    {
      id: '2',
      name: 'Look Festa Elegante',
      items: [
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=600&fit=crop',
      ],
      occasion: 'party',
      style: 'elegant',
      aiScore: 92,
      timesWorn: 1,
      favorite: false,
    },
    {
      id: '3',
      name: 'Look Casual Fim de Semana',
      items: [
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop',
      ],
      occasion: 'casual',
      style: 'casual',
      aiScore: 88,
      timesWorn: 5,
      favorite: true,
    },
  ];

  const occasions = [
    { id: 'work', label: t('occasion_work'), emoji: '💼' },
    { id: 'casual', label: t('occasion_casual'), emoji: '👕' },
    { id: 'party', label: t('occasion_party'), emoji: '🎉' },
    { id: 'formal', label: t('occasion_formal'), emoji: '🎩' },
    { id: 'sport', label: t('occasion_sport'), emoji: '⚽' },
    { id: 'date', label: t('occasion_date'), emoji: '💕' },
  ];

  const handleGenerateLook = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setShowGenerator(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-8 rounded-b-3xl shadow-2xl sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-1">{t('looks_title')}</h1>
              <p className="text-purple-100">{mockLooks.length} looks criados</p>
            </div>
            <button
              onClick={() => setShowGenerator(true)}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all p-3 rounded-full"
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-6 py-8">
        {/* AI Generator CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 mb-8 text-white shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Wand2 className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">{t('looks_ai_generate')}</h3>
              <p className="text-purple-100 text-sm">
                Deixe a IA criar combinações perfeitas para você
              </p>
            </div>
            <button
              onClick={() => setShowGenerator(true)}
              className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Gerar
            </button>
          </div>
        </div>

        {/* Looks Grid */}
        <div className="space-y-6">
          {mockLooks.map((look) => (
            <div
              key={look.id}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
            >
              {/* Look Preview */}
              <div className="grid grid-cols-3 gap-2 p-4">
                {look.items.map((item, idx) => (
                  <div key={idx} className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src={item}
                      alt={`Item ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Look Info */}
              <div className="px-6 pb-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {look.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <span>{t(`occasion_${look.occasion}`)}</span>
                      <span>•</span>
                      <span>{t(`style_${look.style}`)}</span>
                      <span>•</span>
                      <span>{look.timesWorn} {t('looks_worn')}</span>
                    </div>
                  </div>
                  <button className="text-red-500 hover:scale-110 transition-transform">
                    <Heart className={`w-6 h-6 ${look.favorite ? 'fill-red-500' : ''}`} />
                  </button>
                </div>

                {/* AI Score */}
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('looks_ai_score')}: {look.aiScore}%
                  </span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                      style={{ width: `${look.aiScore}%` }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Camera className="w-5 h-5" />
                    {t('looks_try_ar')}
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Generator Modal */}
      {showGenerator && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {!generating ? (
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('looks_ai_generate')}
                  </h2>
                  <button
                    onClick={() => setShowGenerator(false)}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    ✕
                  </button>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    {t('looks_for_occasion')}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {occasions.map((occasion) => (
                      <button
                        key={occasion.id}
                        className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 transition-all"
                      >
                        <span className="text-2xl">{occasion.emoji}</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {occasion.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-900 dark:text-blue-100">
                      <p className="font-semibold mb-1">A IA vai considerar:</p>
                      <ul className="space-y-1">
                        <li>• Clima atual (24°C, ensolarado)</li>
                        <li>• Seu estilo preferido</li>
                        <li>• Peças disponíveis no closet</li>
                        <li>• Combinações de cores harmoniosas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleGenerateLook}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Wand2 className="w-5 h-5" />
                  Gerar Looks com IA
                </button>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse mb-6">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t('looks_generating')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Analisando 127 peças e criando combinações perfeitas...
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
