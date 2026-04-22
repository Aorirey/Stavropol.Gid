'use client';

import { motion } from 'framer-motion';
import { Search, Sparkles, CalendarDays, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const events = document.getElementById('events');
    events?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 noise"
      aria-label="Главный экран"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-radial"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-indigo/20 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent-violet" />
            Городской гид нового поколения
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
            Всё, что происходит в{' '}
            <span className="gradient-text">Ставрополе</span> —
            <br className="hidden sm:block" /> в одном месте
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Афиша, услуги и доставка любимого города. Находи события, бронируй
            места и открывай новое — быстро, удобно и без лишнего шума.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-10 w-full max-w-2xl"
            role="search"
            aria-label="Поиск событий"
          >
            <div className="group relative flex items-center rounded-2xl border border-white/10 bg-surface/70 p-2 backdrop-blur-xl shadow-card transition-colors focus-within:border-accent-indigo/60">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-slate-300">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Концерт, выставка, мастер-класс…"
                className="w-full bg-transparent px-3 py-2 text-base text-white placeholder:text-slate-500 focus:outline-none"
                aria-label="Поиск событий"
              />
              <button
                type="submit"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Найти
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#events"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <CalendarDays className="h-4 w-4" />
              Смотреть афишу
            </a>
            <a
              href="#benefits"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10 sm:w-auto"
            >
              Узнать больше
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mx-auto mt-12 flex max-w-md items-center justify-around gap-6 text-center"
            aria-label="Статистика"
          >
            {[
              { value: '1 200+', label: 'событий' },
              { value: '350+', label: 'мест' },
              { value: '24/7', label: 'обновление' },
            ].map((s) => (
              <li key={s.label}>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  {s.label}
                </div>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
