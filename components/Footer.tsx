import { MapPin, Instagram, Youtube, Send, Mail } from 'lucide-react';

const NAV = {
  Разделы: [
    { href: '#events', label: 'Афиша' },
    { href: '#categories', label: 'Категории' },
    { href: '#benefits', label: 'О проекте' },
  ],
  Сервис: [
    { href: '#cta', label: 'Приложение' },
    { href: '#', label: 'Партнёрам' },
    { href: '#', label: 'Реклама' },
  ],
  Документы: [
    { href: '#', label: 'Политика конфиденциальности' },
    { href: '#', label: 'Условия использования' },
    { href: '#', label: 'Контакты' },
  ],
};

const SOCIAL = [
  { href: '#', label: 'Telegram', icon: Send },
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'YouTube', icon: Youtube },
];

export function Footer() {
  return (
    <footer
      id="about"
      className="relative border-t border-white/10 bg-surface-2"
      aria-labelledby="footer-title"
    >
      <h2 id="footer-title" className="sr-only">
        Подвал сайта
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#top" className="inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-accent shadow-glow">
                <MapPin className="h-5 w-5 text-white" strokeWidth={2.4} />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Ставрополь<span className="gradient-text">.Гид</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-slate-400 leading-relaxed">
              Локальный городской гид-агрегатор: афиша, услуги и доставка
              Ставрополя в одном месте.
            </p>
            <a
              href="mailto:hello@stavropol.guide"
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-accent-indigo" />
              hello@stavropol.guide
            </a>
          </div>

          {Object.entries(NAV).map(([group, items]) => (
            <nav key={group} aria-label={group}>
              <div className="text-sm font-semibold text-white">{group}</div>
              <ul className="mt-4 flex flex-col gap-2">
                {items.map((i) => (
                  <li key={i.label}>
                    <a
                      href={i.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ставрополь.Гид. Все права защищены.
          </p>
          <ul className="flex items-center gap-2">
            {SOCIAL.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent-indigo/40 hover:text-white hover:shadow-glow"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
