'use client';

import { motion } from 'framer-motion';
import {
  Music,
  Palette,
  Hammer,
  UtensilsCrossed,
  Dumbbell,
  Film,
  Baby,
  Moon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Category = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

const CATEGORIES: Category[] = [
  {
    title: 'Концерты',
    description: 'Живая музыка и фестивали',
    icon: Music,
    accent: 'from-indigo-500/30 to-violet-500/10',
  },
  {
    title: 'Выставки',
    description: 'Искусство и культура',
    icon: Palette,
    accent: 'from-fuchsia-500/30 to-indigo-500/10',
  },
  {
    title: 'Мастер-классы',
    description: 'Учись новому рядом',
    icon: Hammer,
    accent: 'from-amber-500/25 to-pink-500/10',
  },
  {
    title: 'Еда',
    description: 'Рестораны и бары',
    icon: UtensilsCrossed,
    accent: 'from-orange-500/25 to-rose-500/10',
  },
  {
    title: 'Спорт',
    description: 'Матчи и активности',
    icon: Dumbbell,
    accent: 'from-emerald-500/25 to-teal-500/10',
  },
  {
    title: 'Кино',
    description: 'Премьеры и показы',
    icon: Film,
    accent: 'from-sky-500/25 to-indigo-500/10',
  },
  {
    title: 'Дети',
    description: 'Семейный досуг',
    icon: Baby,
    accent: 'from-pink-500/25 to-violet-500/10',
  },
  {
    title: 'Ночная жизнь',
    description: 'Клубы и вечеринки',
    icon: Moon,
    accent: 'from-violet-500/30 to-indigo-500/10',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Categories() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-title"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            id="categories-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Выбирай, что по душе
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Восемь категорий, объединяющих всё городское — от концертов до
            ночной жизни.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4"
        >
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <motion.li key={c.title} variants={item}>
                <a
                  href="#events"
                  className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-indigo/40 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo"
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.accent} opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative flex flex-col gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-accent-indigo ring-1 ring-white/10 transition-colors group-hover:bg-gradient-accent group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <div className="text-base font-semibold text-white">
                        {c.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-400">
                        {c.description}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
