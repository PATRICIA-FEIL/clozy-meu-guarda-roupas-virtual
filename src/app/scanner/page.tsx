'use client';

import { useLanguage } from '@/components/custom/language-provider';
import { Camera, Upload, Sparkles, Check } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ScannerPage() {
  const { t } = useLanguage();
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleScan = () => {
    setScanning(true);
    // Simular processamento de IA
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-8 rounded-b-3xl shadow-2xl">
        <div className="max-w-screen-xl mx-auto">
          <Link href="/" className="text-sm text-purple-100 mb-2 inline-block hover:text-white transition-colors">
            ← {t('back')}
          </Link>
          <h1 className="text-3xl font-bold mb-2">{t('scanner_title')}</h1>
          <p className="text-purple-100">{t('scanner_subtitle')}</p>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-6 py-8">
        {!scanning && !scanned && (
          <div className="space-y-6">
            {/* Camera Preview Area */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-80 border-4 border-dashed border-purple-400 rounded-3xl flex items-center justify-center">
                    <Camera className="w-16 h-16 text-purple-400" />
                  </div>
                </div>
                <p className="absolute bottom-8 text-gray-600 dark:text-gray-400 text-sm">
                  Posicione a peça no centro
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleScan}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <Camera className="w-6 h-6" />
                {t('scanner_take_photo')}
              </button>

              <button className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-4 rounded-2xl font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 transition-all flex items-center justify-center gap-3">
                <Upload className="w-5 h-5" />
                {t('scanner_upload')}
              </button>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-900 dark:text-blue-100 font-medium mb-2">💡 Dicas para melhor resultado:</p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Use boa iluminação natural</li>
                <li>• Coloque a peça em fundo liso</li>
                <li>• Tire foto de frente, sem dobras</li>
              </ul>
            </div>
          </div>
        )}

        {scanning && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('scanner_processing')}
            </h2>

            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse" />
                </div>
                <span>{t('scanner_analyzing')}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse" />
                </div>
                <span>{t('scanner_removing_bg')}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse" />
                </div>
                <span>Categorizando automaticamente</span>
              </div>
            </div>
          </div>
        )}

        {scanned && (
          <div className="space-y-6">
            {/* Success Message */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800 text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                {t('scanner_success')}
              </h2>
              <p className="text-emerald-700 dark:text-emerald-300">
                A IA detectou automaticamente todos os detalhes
              </p>
            </div>

            {/* Scanned Item Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=600&fit=crop"
                  alt="Scanned item"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                    {t('scanner_auto_detected')}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3">Blusa Branca Básica</h3>
                  <p className="text-gray-600 dark:text-gray-400">Categoria: {t('cat_tops')}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Cores detectadas</p>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300" />
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-gray-300" />
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Estilo</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{t('style_casual')}</p>
                  </div>

                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Material</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Algodão</p>
                  </div>

                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Estação</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{t('season_all')}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Link
                    href="/closet"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-center"
                  >
                    {t('save')}
                  </Link>
                  <button
                    onClick={() => setScanned(false)}
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                  >
                    {t('scanner_add_details')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
