'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MapPin, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#events', label: 'Афиша' },
  { href: '#categories', label: 'Услуги' },
  { href: '#benefits', label: 'Доставка' },
  { href: '#about', label: 'О проекте' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Основная навигация"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo rounded-xl"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-accent shadow-glow transition-transform group-hover:scale-105">
            <MapPin className="h-5 w-5 text-white" strokeWidth={2.4} />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Ставрополь<span className="gradient-text">.Гид</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Скачать приложение
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden"
          >
            <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-surface/95 p-4 shadow-card backdrop-blur-xl">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={close}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#cta"
                onClick={close}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-4 py-3 text-sm font-semibold text-white shadow-glow"
              >
                <Download className="h-4 w-4" />
                Скачать приложение
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
