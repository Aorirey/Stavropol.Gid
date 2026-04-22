'use client';

import { motion } from 'framer-motion';
import { Apple, Play, Smartphone } from 'lucide-react';

export function CTASection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-8 sm:p-12 lg:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-violet/30 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent-indigo/25 blur-[120px]"
          />

          <div className="relative flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                <Smartphone className="h-3.5 w-3.5 text-accent-violet" />
                Приложение
              </div>
              <h2
                id="cta-title"
                className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              >
                Скачай приложение и будь в курсе всех событий
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Уведомления о новых событиях, персональные подборки и быстрый
                доступ к бронированию — всё под рукой.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:w-auto lg:flex-col">
              <a
                href="#"
                aria-label="Скачать в App Store"
                className="group inline-flex min-w-[200px] items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-5 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-accent-indigo/50 hover:shadow-glow"
              >
                <Apple className="h-7 w-7 text-white" />
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                    Скачать в
                  </span>
                  <span className="block text-base font-semibold text-white">
                    App Store
                  </span>
                </span>
              </a>
              <a
                href="#"
                aria-label="Скачать в Google Play"
                className="group inline-flex min-w-[200px] items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-5 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-accent-violet/50 hover:shadow-glow"
              >
                <Play className="h-6 w-6 text-white" fill="currentColor" />
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                    Доступно в
                  </span>
                  <span className="block text-base font-semibold text-white">
                    Google Play
                  </span>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
