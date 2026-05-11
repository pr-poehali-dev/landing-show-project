import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const POSTER_URL =
  "https://cdn.poehali.dev/projects/65a0d195-7b65-4362-ab9b-02d1c8ca4d32/bucket/9e988e4a-7f6d-4755-aa75-8984e2c4c103.png";

const NAV_ITEMS = [
  { label: "Сюжет", href: "#plot" },
  { label: "Актёры", href: "#actors" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Билеты", href: "#tickets" },
  { label: "Контакты", href: "#contacts" },
];

const ACTORS = [
  {
    name: "Остап Бендер",
    actor: "Иван Соколов",
    role: "Великий комбинатор",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=380&fit=crop&crop=face",
  },
  {
    name: "Ипполит Матвеевич",
    actor: "Сергей Воронов",
    role: "Киса Воробьянинов",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=380&fit=crop&crop=face",
  },
  {
    name: "Эллочка",
    actor: "Мария Петрова",
    role: "Людоедка",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=380&fit=crop&crop=face",
  },
  {
    name: "Отец Фёдор",
    actor: "Алексей Громов",
    role: "Священнослужитель",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=380&fit=crop&crop=face",
  },
];

const REVIEWS = [
  {
    author: "Елена К.",
    text: "Блестящий спектакль! Смеялась весь вечер — Остап неподражаем. Обязательно вернусь ещё раз с друзьями.",
    rating: 5,
    date: "Март 2024",
  },
  {
    author: "Владимир С.",
    text: "Великолепная постановка, декорации переносят прямиком в 20-е годы. Актёры живут на сцене!",
    rating: 5,
    date: "Февраль 2024",
  },
  {
    author: "Ольга М.",
    text: "Давно не видела такой живой и искромётной комедии. Текст Ильфа и Петрова звучит свежо.",
    rating: 5,
    date: "Январь 2024",
  },
];

const TICKETS = [
  {
    zone: "Партер",
    price: "2 500",
    desc: "Первые ряды, лучший обзор",
    color: "#C8171A",
  },
  {
    zone: "Амфитеатр",
    price: "1 800",
    desc: "Отличная видимость",
    color: "#8B5E3C",
  },
  {
    zone: "Балкон",
    price: "900",
    desc: "Панорамный вид",
    color: "#4A6741",
  },
];

const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1541976590-713941681591?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--cream)", color: "var(--ink)" }}>
      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(26,16,8,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.3)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <span
            className="section-title text-lg font-bold"
            style={{ color: "var(--gold)", letterSpacing: "0.15em" }}
          >
            12 СТУЛЬЕВ
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="nav-link text-white/80 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#tickets")}
              className="btn-red px-4 py-2 text-sm font-semibold rounded"
            >
              Купить билет
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden px-4 pb-4 flex flex-col gap-3"
            style={{ background: "rgba(26,16,8,0.98)" }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="nav-link text-white/80 hover:text-white text-left py-2 border-b border-white/10"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#tickets")}
              className="btn-red px-4 py-3 text-sm rounded mt-2"
            >
              Купить билет
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "var(--ink)" }}
      >
        {/* Background poster blurred */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${POSTER_URL})`,
            filter: "blur(2px) brightness(0.25)",
            transform: "scale(1.05)",
          }}
        />

        {/* Red top bar accent */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "var(--red)" }}
        />

        {/* Декоративные углы */}
        <div className="absolute top-20 left-6 text-3xl opacity-30" style={{ color: "var(--gold)" }}>
          ✦
        </div>
        <div className="absolute top-20 right-6 text-3xl opacity-30" style={{ color: "var(--gold)" }}>
          ✦
        </div>
        <div className="absolute bottom-12 left-6 text-3xl opacity-30" style={{ color: "var(--gold)" }}>
          ✦
        </div>
        <div className="absolute bottom-12 right-6 text-3xl opacity-30" style={{ color: "var(--gold)" }}>
          ✦
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div
            className={`transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Авторы */}
            <p
              className="nav-link mb-3 text-sm tracking-widest"
              style={{ color: "var(--gold)" }}
            >
              И. Ильф &nbsp;·&nbsp; Е. Петров
            </p>

            {/* Название */}
            <h1
              className="display-title font-bold leading-none mb-2"
              style={{
                fontSize: "clamp(4rem, 10vw, 8rem)",
                color: "#fff",
                textShadow: "0 4px 30px rgba(200,23,26,0.5)",
              }}
            >
              12
            </h1>
            <h1
              className="section-title font-bold leading-none mb-6"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                color: "var(--red)",
                letterSpacing: "0.1em",
              }}
            >
              СТУЛЬЕВ
            </h1>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "rgba(245,237,216,0.8)", fontFamily: "'Golos Text', sans-serif" }}
            >
              Авантюрная комедия о поиске сокровища, спрятанного в одном из двенадцати стульев.
              Остроумие, жадность и непредсказуемые повороты судьбы.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="btn-red px-8 py-4 text-base rounded"
                onClick={() => scrollTo("#tickets")}
              >
                Купить билет
              </button>
              <button
                className="btn-gold px-8 py-4 text-base rounded flex items-center gap-2"
                onClick={() => setVideoOpen(true)}
              >
                <Icon name="Play" size={18} />
                Смотреть трейлер
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
              {[
                { val: "2h 30min", label: "Продолжительность" },
                { val: "16+", label: "Возраст" },
                { val: "Гастроли", label: "Формат" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="section-title text-xl font-bold"
                    style={{ color: "var(--gold)" }}
                  >
                    {s.val}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "rgba(245,237,216,0.5)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Poster side */}
          <div
            className={`transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div
              className="relative mx-auto"
              style={{ maxWidth: 440 }}
            >
              {/* Декоративная рамка */}
              <div
                className="absolute -inset-3 rounded-lg"
                style={{
                  border: "2px solid var(--gold)",
                  opacity: 0.4,
                }}
              />
              <div
                className="absolute -inset-1 rounded-lg"
                style={{
                  border: "1px solid var(--red)",
                  opacity: 0.6,
                }}
              />
              <img
                src={POSTER_URL}
                alt="Афиша 12 стульев"
                className="relative w-full rounded-lg shadow-2xl"
                style={{ boxShadow: "0 30px 80px rgba(200,23,26,0.4)" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <Icon name="ChevronDown" size={20} style={{ color: "var(--gold)" }} />
        </div>
      </section>

      {/* ── СЮЖЕТ ── */}
      <section id="plot" className="py-24 paper-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="nav-link text-sm mb-3"
              style={{ color: "var(--red)" }}
            >
              О СПЕКТАКЛЕ
            </p>
            <h2
              className="section-title text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--ink)" }}
            >
              СЮЖЕТ
            </h2>
            <div className="ornament max-w-xs mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#3D2B1A", fontFamily: "'Golos Text', sans-serif" }}
              >
                Россия, 1927 год. Бывший предводитель дворянства Ипполит Матвеевич Воробьянинов
                узнаёт от умирающей тёщи тайну: всё фамильное состояние спрятано в одном из
                двенадцати стульев гарнитура, проданного после революции.
              </p>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#3D2B1A" }}
              >
                На его пути встречается обаятельный аферист Остап Бендер — «великий комбинатор»,
                который предлагает сотрудничество. Вместе они пускаются в невероятную авантюру
                по всей стране в погоне за сокровищем.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#3D2B1A" }}
              >
                Острая сатира на советский быт, галерея незабываемых персонажей и блистательные
                диалоги Ильфа и Петрова оживают на сцене в полную силу.
              </p>
            </div>

            {/* Video block */}
            <div
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "16/9", background: "#1A1008" }}
              onClick={() => setVideoOpen(true)}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop"
                alt="Трейлер"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{
                    background: "var(--red)",
                    boxShadow: "0 0 30px rgba(200,23,26,0.6)",
                  }}
                >
                  <Icon name="Play" size={32} className="text-white ml-1" />
                </div>
                <p className="nav-link text-white text-sm">СМОТРЕТЬ ТРЕЙЛЕР</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── АКТЁРЫ ── */}
      <section id="actors" className="py-24" style={{ background: "var(--ink)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="nav-link text-sm mb-3" style={{ color: "var(--red)" }}>
              ТРУППА
            </p>
            <h2
              className="section-title text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#fff" }}
            >
              АКТЁРЫ
            </h2>
            <div className="ornament max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ACTORS.map((a) => (
              <div
                key={a.actor}
                className="actor-card rounded-xl overflow-hidden"
                style={{ background: "#261A0E" }}
              >
                <div className="relative" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={a.img}
                    alt={a.actor}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(26,16,8,0.95) 30%, transparent 70%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p
                      className="text-xs mb-1"
                      style={{ color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
                    >
                      {a.name}
                    </p>
                    <p className="font-semibold text-white text-sm leading-tight">{a.actor}</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(245,237,216,0.5)" }}>
                      {a.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ГАЛЕРЕЯ ── */}
      <section id="gallery" className="py-24 paper-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="nav-link text-sm mb-3" style={{ color: "var(--red)" }}>
              ФОТО
            </p>
            <h2
              className="section-title text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--ink)" }}
            >
              ГАЛЕРЕЯ
            </h2>
            <div className="ornament max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMGS.map((img, i) => (
              <div
                key={i}
                className="gallery-item rounded-xl"
                style={{ aspectRatio: "4/3" }}
                onClick={() => setLightboxImg(img)}
              >
                <img
                  src={img}
                  alt={`Спектакль ${i + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Трейлер 2 */}
          <div className="mt-12">
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group mx-auto"
              style={{ maxWidth: 800, aspectRatio: "16/9", background: "#1A1008" }}
              onClick={() => setVideoOpen(true)}
            >
              <img
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&h=506&fit=crop"
                alt="Отрывок"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "var(--gold)" }}
                >
                  <Icon name="Play" size={28} style={{ color: "var(--ink)" }} className="ml-1" />
                </div>
                <p className="nav-link text-white text-sm">ОТРЫВОК ИЗ СПЕКТАКЛЯ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ОТЗЫВЫ ── */}
      <section id="reviews" className="py-24" style={{ background: "#261A0E" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="nav-link text-sm mb-3" style={{ color: "var(--red)" }}>
              МНЕНИЯ ЗРИТЕЛЕЙ
            </p>
            <h2
              className="section-title text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#fff" }}
            >
              ОТЗЫВЫ
            </h2>
            <div className="ornament max-w-xs mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.author}
                className="rounded-xl p-6"
                style={{
                  background: "#1A1008",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                {/* Stars */}
                <div className="stars flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} style={{ color: "var(--gold)" }}>★</span>
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "rgba(245,237,216,0.8)", fontStyle: "italic" }}
                >
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center section-title font-bold text-sm"
                    style={{ background: "var(--red)", color: "#fff" }}
                  >
                    {r.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{r.author}</p>
                    <p className="text-xs" style={{ color: "rgba(245,237,216,0.4)" }}>
                      {r.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── БИЛЕТЫ ── */}
      <section id="tickets" className="py-24 paper-bg">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="nav-link text-sm mb-3" style={{ color: "var(--red)" }}>
              РАСПИСАНИЕ
            </p>
            <h2
              className="section-title text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--ink)" }}
            >
              БИЛЕТЫ
            </h2>
            <div className="ornament max-w-xs mx-auto" />
            <p className="mt-6" style={{ color: "#3D2B1A" }}>
              Севастопольский театр им. А.В. Луначарского
            </p>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { date: "15 июня", day: "Пятница", time: "19:00" },
              { date: "16 июня", day: "Суббота", time: "19:00" },
              { date: "22 июня", day: "Пятница", time: "19:00" },
              { date: "23 июня", day: "Суббота", time: "14:00" },
            ].map((d) => (
              <button
                key={d.date}
                className="rounded-xl p-4 text-center border-2 transition-all hover:scale-105"
                style={{
                  borderColor: "var(--red)",
                  background: "rgba(200,23,26,0.05)",
                }}
              >
                <div
                  className="section-title text-xl font-bold mb-1"
                  style={{ color: "var(--red)" }}
                >
                  {d.date}
                </div>
                <div className="text-sm" style={{ color: "#3D2B1A" }}>
                  {d.day}
                </div>
                <div
                  className="text-sm font-semibold mt-1"
                  style={{ color: "var(--ink)" }}
                >
                  {d.time}
                </div>
              </button>
            ))}
          </div>

          {/* Zones */}
          <div className="grid md:grid-cols-3 gap-6">
            {TICKETS.map((t) => (
              <div
                key={t.zone}
                className="ticket-card rounded-xl overflow-hidden"
                style={{ border: "2px solid", borderColor: t.color }}
              >
                <div className="p-6" style={{ background: t.color + "15" }}>
                  <div
                    className="section-title text-sm font-bold mb-2"
                    style={{ color: t.color }}
                  >
                    {t.zone}
                  </div>
                  <div
                    className="display-title text-4xl font-bold mb-1"
                    style={{ color: "var(--ink)" }}
                  >
                    {t.price} ₽
                  </div>
                  <p className="text-sm mb-6" style={{ color: "#3D2B1A" }}>
                    {t.desc}
                  </p>
                  <button
                    className="w-full py-3 rounded-lg font-semibold text-white section-title text-sm tracking-widest transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: t.color }}
                  >
                    ВЫБРАТЬ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <section
        id="contacts"
        className="py-24"
        style={{ background: "var(--ink)", color: "#fff" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="nav-link text-sm mb-3" style={{ color: "var(--red)" }}>
              МЫ ЗДЕСЬ
            </p>
            <h2
              className="section-title text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#fff" }}
            >
              КОНТАКТЫ
            </h2>
            <div className="ornament max-w-xs mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  icon: "MapPin",
                  title: "Адрес",
                  text: "Севастополь, пл. Ушакова, 1\nСевастопольский театр им. Луначарского",
                },
                {
                  icon: "Phone",
                  title: "Телефон",
                  text: "+7 (8692) 54-40-01",
                },
                {
                  icon: "Mail",
                  title: "Email",
                  text: "info@theatre-sev.ru",
                },
                {
                  icon: "Clock",
                  title: "Касса",
                  text: "Ежедневно 10:00 – 19:00",
                },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--red)" }}
                  >
                    <Icon name={c.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <p
                      className="nav-link text-xs mb-1"
                      style={{ color: "var(--gold)" }}
                    >
                      {c.title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(245,237,216,0.8)", whiteSpace: "pre-line" }}
                    >
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "#261A0E",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <h3
                className="section-title text-xl font-bold mb-6"
                style={{ color: "var(--gold)" }}
              >
                НАПИСАТЬ НАМ
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2"
                  style={{
                    background: "#1A1008",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#fff",
                    fontFamily: "'Golos Text', sans-serif",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2"
                  style={{
                    background: "#1A1008",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#fff",
                    fontFamily: "'Golos Text', sans-serif",
                  }}
                />
                <textarea
                  placeholder="Ваш вопрос..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none focus:ring-2"
                  style={{
                    background: "#1A1008",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#fff",
                    fontFamily: "'Golos Text', sans-serif",
                  }}
                />
                <button className="btn-red w-full py-4 rounded-lg text-sm">
                  ОТПРАВИТЬ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-8 text-center border-t"
        style={{ background: "#0D0804", borderColor: "rgba(201,168,76,0.2)" }}
      >
        <p
          className="section-title text-sm font-bold mb-2"
          style={{ color: "var(--gold)" }}
        >
          12 СТУЛЬЕВ
        </p>
        <p className="text-xs" style={{ color: "rgba(245,237,216,0.3)" }}>
          По роману И. Ильфа и Е. Петрова &nbsp;·&nbsp; Все права защищены © 2024
        </p>
      </footer>

      {/* ── VIDEO MODAL ── */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ maxWidth: 900, aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "var(--red)" }}
              onClick={() => setVideoOpen(false)}
            >
              <Icon name="X" size={18} className="text-white" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Трейлер спектакля 12 стульев"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* ── LIGHTBOX ── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "var(--red)" }}
          >
            <Icon name="X" size={18} className="text-white" />
          </button>
          <img
            src={lightboxImg}
            alt="Фото"
            className="max-w-full max-h-full rounded-xl object-contain"
            style={{ maxHeight: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}