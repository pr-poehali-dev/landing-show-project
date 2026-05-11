import Icon from "@/components/ui/icon";

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

interface ContentSectionsProps {
  onLightbox: (img: string) => void;
  onVideoOpen: () => void;
}

export default function ContentSections({ onLightbox, onVideoOpen }: ContentSectionsProps) {
  return (
    <>
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
                onClick={() => onLightbox(img)}
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
              onClick={onVideoOpen}
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
              Дом офицеров Черноморского флота, ул. Ленина 9, г. Севастополь
            </p>
          </div>

          {/* Date + CTA */}
          <div className="flex flex-col items-center gap-8">
            {/* Единственная дата */}
            <div
              className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 px-10 py-8 rounded-2xl w-full max-w-2xl"
              style={{
                background: "var(--ink)",
                border: "2px solid var(--red)",
              }}
            >
              <div className="text-center sm:text-left">
                <p className="nav-link text-xs mb-1" style={{ color: "var(--gold)" }}>ДАТА</p>
                <div
                  className="display-title font-bold leading-none"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff" }}
                >
                  18 августа
                </div>
              </div>
              <div
                className="hidden sm:block w-px self-stretch"
                style={{ background: "rgba(201,168,76,0.3)" }}
              />
              <div className="text-center sm:text-left">
                <p className="nav-link text-xs mb-1" style={{ color: "var(--gold)" }}>НАЧАЛО</p>
                <div
                  className="section-title font-bold"
                  style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--red)" }}
                >
                  19:00
                </div>
              </div>
              <div
                className="hidden sm:block w-px self-stretch"
                style={{ background: "rgba(201,168,76,0.3)" }}
              />
              <div className="text-center sm:text-left">
                <p className="nav-link text-xs mb-1" style={{ color: "var(--gold)" }}>ДЕНЬ</p>
                <div className="section-title font-bold text-2xl" style={{ color: "#fff" }}>
                  Понедельник
                </div>
              </div>
            </div>

            {/* Зоны */}
            <div className="grid md:grid-cols-3 gap-5 w-full max-w-2xl">
              {TICKETS.map((t) => (
                <div
                  key={t.zone}
                  className="rounded-xl p-5 text-center"
                  style={{
                    background: t.color + "12",
                    border: `1.5px solid ${t.color}`,
                  }}
                >
                  <div className="section-title text-xs font-bold mb-2" style={{ color: t.color }}>
                    {t.zone}
                  </div>
                  <div className="display-title text-3xl font-bold" style={{ color: "var(--ink)" }}>
                    {t.price} ₽
                  </div>
                  <p className="text-xs mt-1" style={{ color: "#5A3A20" }}>{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Кнопка */}
            <button
              className="btn-red px-16 py-5 rounded-xl text-lg"
              style={{ letterSpacing: "0.12em" }}
            >
              КУПИТЬ БИЛЕТ
            </button>
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
                  text: "ул. Ленина 9, г. Севастополь\nДом офицеров Черноморского флота",
                  href: "https://yandex.ru/maps/?text=Севастополь+ул.+Ленина+9+Дом+офицеров+Черноморского+флота",
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
                    {"href" in c ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-relaxed hover:underline"
                        style={{ color: "rgba(245,237,216,0.8)", whiteSpace: "pre-line", display: "block" }}
                      >
                        {c.text}
                        <span className="block text-xs mt-1" style={{ color: "var(--gold)" }}>
                          Открыть на карте →
                        </span>
                      </a>
                    ) : (
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(245,237,216,0.8)", whiteSpace: "pre-line" }}
                      >
                        {c.text}
                      </p>
                    )}
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

          {/* ── MAP ── */}
          <div className="mt-12 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=33.525123%2C44.616517&z=17&pt=33.525123,44.616517,pm2rdm&text=Дом+офицеров+Черноморского+флота+Севастополь"
              width="100%"
              height="340"
              frameBorder="0"
              allowFullScreen
              title="Карта — Дом офицеров ЧФ"
              style={{ display: "block" }}
            />
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
    </>
  );
}