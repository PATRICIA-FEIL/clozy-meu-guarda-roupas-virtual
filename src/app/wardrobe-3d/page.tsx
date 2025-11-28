'use client';

import { useLanguage } from '@/components/custom/language-provider';
import { Box, Maximize2, Minimize2, RotateCw, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Wardrobe3DPage() {
  const { t } = useLanguage();
  const [dimensions, setDimensions] = useState({ width: 200, height: 250, depth: 60 });
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerated(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-8 rounded-b-3xl shadow-2xl">
        <div className="max-w-screen-xl mx-auto">
          <Link href="/" className="text-sm text-purple-100 mb-2 inline-block hover:text-white transition-colors">
            ← {t('back')}
          </Link>
          <h1 className="text-3xl font-bold mb-2">{t('wardrobe_3d_title')}</h1>
          <p className="text-purple-100">{t('wardrobe_3d_subtitle')}</p>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-6 py-8">
        {!generated ? (
          <div className="space-y-8">
            {/* Info Card */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3">
                  <Box className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                    Como funciona?
                  </h3>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Informe as medidas do seu guarda-roupa físico</li>
                    <li>• A IA gera um modelo 3D realista</li>
                    <li>• Visualize como suas peças se organizam no espaço</li>
                    <li>• Otimize a organização com sugestões inteligentes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dimensions Form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('wardrobe_3d_dimensions')}
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('wardrobe_3d_width')} (cm)
                  </label>
                  <input
                    type="number"
                    value={dimensions.width}
                    onChange={(e) => setDimensions({ ...dimensions, width: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('wardrobe_3d_height')} (cm)
                  </label>
                  <input
                    type="number"
                    value={dimensions.height}
                    onChange={(e) => setDimensions({ ...dimensions, height: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('wardrobe_3d_depth')} (cm)
                  </label>
                  <input
                    type="number"
                    value={dimensions.depth}
                    onChange={(e) => setDimensions({ ...dimensions, depth: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-600 outline-none transition-all"
                  />
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Dimensões informadas:</strong>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {dimensions.width}cm (L) × {dimensions.height}cm (A) × {dimensions.depth}cm (P)
                  </p>
                </div>

                <button
                  onClick={handleGenerate}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-6 h-6" />
                  {t('wardrobe_3d_generate')}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* 3D Viewer */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              {/* 3D Canvas Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative">
                <div className="text-center">
                  <Box className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Visualização 3D Interativa
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    {dimensions.width}cm × {dimensions.height}cm × {dimensions.depth}cm
                  </p>
                </div>

                {/* Controls Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <button className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-all">
                    <RotateCw className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                  <button className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-all">
                    <Maximize2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                  <button className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-all">
                    <Minimize2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Info Panel */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Meu Guarda-Roupa
                  </h3>
                  <button className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline">
                    Editar Dimensões
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      127
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Peças Totais
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      85%
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ocupação
                    </p>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      12
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Seções
                    </p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  {t('wardrobe_3d_organize')}
                </button>
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Sugestões da IA</h4>
                  <ul className="text-sm text-blue-100 space-y-1">
                    <li>• Reorganize casacos por cor para facilitar escolha</li>
                    <li>• Adicione divisórias na gaveta de acessórios</li>
                    <li>• Considere dobrar camisetas em vez de pendurar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
