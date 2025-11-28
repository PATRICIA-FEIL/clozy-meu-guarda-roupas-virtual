'use client';

import { useLanguage } from '@/components/custom/language-provider';
import { Calendar, Sparkles, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function PlanPage() {
  const { t } = useLanguage();
  const [currentWeek, setCurrentWeek] = useState(0);

  // Mock data
  const weekDays = [
    { day: 'Seg', date: '15', look: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=300&fit=crop' },
    { day: 'Ter', date: '16', look: null },
    { day: 'Qua', date: '17', look: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=300&fit=crop' },
    { day: 'Qui', date: '18', look: null },
    { day: 'Sex', date: '19', look: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=300&fit=crop' },
    { day: 'Sáb', date: '20', look: null },
    { day: 'Dom', date: '21', look: null },
  ];

  const capsules = [
    { id: '1', name: 'Cápsula Trabalho', items: 15, looks: 45, season: 'all' },
    { id: '2', name: 'Cápsula Verão', items: 20, looks: 60, season: 'summer' },
    { id: '3', name: 'Cápsula Inverno', items: 18, looks: 54, season: 'winter' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-8 rounded-b-3xl shadow-2xl">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{t('plan_title')}</h1>
          <p className="text-purple-100">Organize seus looks da semana</p>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-6 py-8 space-y-8">
        {/* Weekly Planner */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-6 h-6 text-purple-600" />
              {t('plan_weekly')}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentWeek(currentWeek - 1)}
                className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 px-4">
                {t('plan_week_of')} 15/01
              </span>
              <button
                onClick={() => setCurrentWeek(currentWeek + 1)}
                className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6">
            <div className="grid grid-cols-7 gap-3">
              {weekDays.map((day, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                    {day.day}
                  </div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                    {day.date}
                  </div>
                  
                  {day.look ? (
                    <div className="relative aspect-[2/3] rounded-xl overflow-hidden group cursor-pointer">
                      <img
                        src={day.look}
                        alt={`Look ${day.day}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="bg-white text-gray-900 px-3 py-1 rounded-lg text-xs font-semibold">
                          Editar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button className="w-full aspect-[2/3] border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl flex items-center justify-center hover:border-purple-600 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group">
                      <Plus className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Preencher Semana com IA
              </button>
            </div>
          </div>
        </section>

        {/* Capsule Wardrobes */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('plan_capsule_title')}
            </h2>
            <button className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline">
              + Nova Cápsula
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t('plan_capsule_subtitle')}
          </p>

          <div className="grid gap-4">
            {capsules.map((capsule) => (
              <div
                key={capsule.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {capsule.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{capsule.items} {t('plan_capsule_items')}</span>
                      <span>•</span>
                      <span>{capsule.looks} {t('plan_capsule_looks')}</span>
                      <span>•</span>
                      <span>{t(`season_${capsule.season}`)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all">
                      Ver Looks
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Planner CTA */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                <Calendar className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{t('plan_travel_title')}</h3>
                <p className="text-blue-100">
                  Planeje sua mala perfeitamente com checklist automático
                </p>
              </div>
              <Link
                href="/travel"
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all whitespace-nowrap"
              >
                Planejar Viagem
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
