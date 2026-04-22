# Ставрополь.Гид

Production-ready сайт локального городского гида-агрегатора на Next.js 14 (App Router), TypeScript, Tailwind CSS и Framer Motion.

## Стек

- Next.js 14 (App Router)
- React 18, TypeScript 5
- Tailwind CSS 3 + CSS Variables
- Framer Motion (анимации)
- lucide-react (иконки)
- next/font (Inter, subset: latin + cyrillic)

## Структура

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Header.tsx
  Hero.tsx
  Categories.tsx
  EventsGrid.tsx
  Benefits.tsx
  CTASection.tsx
  Footer.tsx
lib/
  utils.ts
```

## Запуск

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

## Скрипты

- `npm run dev` — dev-сервер
- `npm run build` — production-сборка
- `npm start` — запуск production-сборки
- `npm run lint` — ESLint

## Особенности

- Mobile-first, полная адаптивность 320px–1440px+
- Тёмная тема с glassmorphism и градиентными акцентами
- Анимации через `whileInView` и `transform/opacity` (без layout thrashing)
- Семантичная верстка, ARIA-атрибуты, `prefers-reduced-motion`
- `next/image` + `remotePatterns` для `placehold.co`
