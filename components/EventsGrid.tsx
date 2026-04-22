'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket, ArrowUpRight } from 'lucide-react';

type Event = {
  id: string;
  title: string;
  place: string;
  date: string;
  price: string;
  category: string;
  image: string;
};

const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Фестиваль электронной музыки',
    place: 'Парк Победы',
    date: '15 мая · 19:00',
    price: 'от 800 ₽',
    category: 'Концерты',
    image: 'https://placehold.co/800x500/111827/6366F1?text=Festival',
  },
  {
    id: '2',
    title: 'Выставка современного искусства',
    place: 'Галерея «Пространство»',
    date: '18 мая · 12:00',
    price: 'Бесплатно',
    category: 'Выставки',
    image: 'https://placehold.co/800x500/111827/8B5CF6?text=Art+Expo',
  },
  {
    id: '3',
    title: 'Мастер-класс по керамике',
    place: 'Студия «Глина»',
    date: '20 мая · 18:30',
    price: '1500 ₽',
    category: 'Мастер-классы',
    image: 'https://placehold.co/800x500/111827/6366F1?text=Ceramics',
  },
  {
    id: '4',
    title: 'Вечер джаза',
    place: 'Бар «Сигма»',
    date: '22 мая · 21:00',
    price: 'от 500 ₽',
    category: 'Концерты',
    image: 'https://placehold.co/800x500/111827/8B5CF6?text=Jazz+Night',
  },
  {
    id: '5',
    title: 'Премьера: городская драма',
    place: 'Кинотеатр «Салют»',
    date: '24 мая · 20:00',
    price: '400 ₽',
    category: 'Кино',
    image: 'https://placehold.co/800x500/111827/6366F1?text=Cinema',
  },
  {
    id: '6',
    title: 'Футбольный матч',
    place: 'Стадион «Динамо»',
    date: '26 мая · 17:00',
    price: 'от 300 ₽',
    category: 'Спорт',
    image: 'https://placehold.co/800x500/111827/8B5CF6?text=Football',
  },
  {
    id: '7',
    title: 'Детский научный парк',
    place: 'ТРЦ «Космос»',
    date: '27 мая · 11:00',
    price: '600 ₽',
    category: 'Дети',
    image: 'https://placehold.co/800x500/111827/6366F1?text=Kids',
  },
  {
    id: '8',
    title: 'Ночная вечеринка',
    place: 'Клуб «Орбита»',
    date: '28 мая · 23:00',
    price: 'от 1000 ₽',
    category: 'Ночная жизнь',
    image: 'https://placehold.co/800x500/111827/8B5CF6?text=Night+Party',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export function EventsGrid() {
  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <h2
              id="events-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Ближайшие события
            </h2>
            <p className="mt-3 text-slate-400 leading-relaxed">
              Мы собираем всё лучшее в одной афише — от громких концертов до
              камерных встреч.
            </p>
          </div>
          <a
            href="#categories"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
          >
            Все категории
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {EVENTS.map((e) => (
            <motion.li key={e.id} variants={card}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-indigo/40 hover:shadow-glow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {e.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <h3 className="line-clamp-2 text-lg font-semibold text-white">
                    {e.title}
                  </h3>

                  <dl className="flex flex-col gap-2 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar
                        className="h-4 w-4 text-accent-indigo"
                        aria-hidden
                      />
                      <dt className="sr-only">Дата</dt>
                      <dd>{e.date}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin
                        className="h-4 w-4 text-accent-violet"
                        aria-hidden
                      />
                      <dt className="sr-only">Место</dt>
                      <dd>{e.place}</dd>
                    </div>
                  </dl>

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                      <Ticket className="h-4 w-4 text-accent-indigo" />
                      {e.price}
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-100 transition-colors hover:bg-gradient-accent hover:text-white"
                      aria-label={`Подробнее: ${e.title}`}
                    >
                      Подробнее
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
