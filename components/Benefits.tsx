'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Compass, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const BENEFITS: Benefit[] = [
  {
    title: 'Актуально 24/7',
    description:
      'Афиша обновляется автоматически — ты всегда знаешь, что происходит в городе прямо сейчас.',
    icon: Zap,
  },
  {
    title: 'Проверенные места',
    description:
      'Только надёжные площадки и организаторы. Мы сами проверяем, прежде чем добавить в каталог.',
    icon: ShieldCheck,
  },
  {
    title: 'Удобная навигация',
    description:
      'Карта, фильтры, категории и умный поиск — найди нужное за пару секунд.',
    icon: Compass,
  },
  {
    title: 'Поддержка локального',
    description:
      'Продвигаем ставропольских авторов, артистов и предпринимателей — вместе с тобой.',
    icon: HeartHandshake,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            Почему мы
          </div>
          <h2
            id="benefits-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Почему <span className="gradient-text">Ставрополь.Гид</span>?
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Мы строим сервис, которым пользуются ежедневно — чтобы город
            открывался заново каждый вечер.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <motion.li key={b.title} variants={item}>
                <div className="group h-full rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/40 hover:shadow-glow">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-white shadow-glow">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
