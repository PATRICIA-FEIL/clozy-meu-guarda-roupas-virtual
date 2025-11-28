'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Shirt, Sparkles, Camera, Calendar, BarChart3, Box } from 'lucide-react';
import { useLanguage } from './language-provider';

export function BottomNavigation() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: '/', icon: Home, label: t('nav_home') },
    { href: '/closet', icon: Shirt, label: t('nav_closet') },
    { href: '/scanner', icon: Camera, label: t('nav_scanner'), highlight: true },
    { href: '/looks', icon: Sparkles, label: t('nav_looks') },
    { href: '/plan', icon: Calendar, label: t('nav_plan') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50 safe-area-bottom">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                  item.highlight
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white scale-110 -mt-4 shadow-lg'
                    : isActive
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${item.highlight ? 'w-6 h-6' : ''}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
