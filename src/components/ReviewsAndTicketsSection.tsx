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

export default function ReviewsAndTicketsSection() {
  return (
    <>
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
      <section id="tickets" className="py-24 overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Заголовок */}
          <div className="text-center mb-14">
            <p className="nav-link text-sm mb-3" style={{ color: "var(--red)" }}>РАСПИСАНИЕ</p>
            <h2 className="section-title text-4xl md:text-5xl font-bold mb-4" style={{ color: "#fff" }}>
              БИЛЕТЫ
            </h2>
            <div className="ornament max-w-xs mx-auto" />
          </div>

          {/* Главный блок — билет */}
          <div
            className="relative rounded-3xl overflow-hidden mx-auto"
            style={{ maxWidth: 860, background: "var(--cream)" }}
          >
            {/* Декоративная красная полоса слева */}
            <div
              className="absolute left-0 top-0 bottom-0 w-2"
              style={{ background: "var(--red)" }}
            />

            {/* Перфорация */}
            <div
              className="absolute left-0 right-0 flex justify-between px-0 pointer-events-none"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <div className="w-6 h-6 rounded-full -translate-x-3" style={{ background: "var(--ink)" }} />
              <div className="w-6 h-6 rounded-full translate-x-3" style={{ background: "var(--ink)" }} />
            </div>
            <div
              className="absolute left-8 right-8"
              style={{
                top: "50%",
                borderTop: "2px dashed rgba(26,16,8,0.15)",
              }}
            />

            <div className="grid md:grid-cols-2">
              {/* Левая часть — дата и место */}
              <div className="p-8 md:p-10 flex flex-col justify-between" style={{ borderRight: "2px dashed rgba(26,16,8,0.15)" }}>
                <div>
                  <p className="nav-link text-xs mb-4" style={{ color: "var(--red)" }}>МУЗЫКАЛЬНАЯ КОМЕДИЯ В ДВУХ ДЕЙСТВИЯХ</p>
                  <h3
                    className="section-title font-bold mb-1 leading-tight"
                    style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "var(--ink)" }}
                  >
                    12 СТУЛЬЕВ
                  </h3>
                  <p className="text-sm mb-8" style={{ color: "#6B4C30", fontFamily: "'Golos Text', sans-serif" }}>
                    по роману И. Ильфа и Е. Петрова
                  </p>

                  <div className="flex gap-6 mb-6">
                    <div>
                      <p className="nav-link text-xs mb-1" style={{ color: "var(--red)" }}>ДАТА</p>
                      <p className="display-title font-bold text-3xl" style={{ color: "var(--ink)" }}>18 августа</p>
                      <p className="text-sm" style={{ color: "#6B4C30" }}>вторник</p>
                    </div>
                    <div
                      className="w-px self-stretch"
                      style={{ background: "rgba(26,16,8,0.12)" }}
                    />
                    <div>
                      <p className="nav-link text-xs mb-1" style={{ color: "var(--red)" }}>НАЧАЛО</p>
                      <p className="section-title font-bold text-3xl" style={{ color: "var(--red)" }}>19:00</p>
                      <p className="text-sm" style={{ color: "#6B4C30" }}>с одним антрактом</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-xs mt-0.5" style={{ color: "var(--red)" }}>📍</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                        Дом офицеров Черноморского флота
                      </p>
                      <p className="text-xs" style={{ color: "#6B4C30" }}>ул. Ленина 9, г. Севастополь</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <span
                    className="px-3 py-1 rounded-full text-xs nav-link"
                    style={{ background: "rgba(200,23,26,0.1)", color: "var(--red)", border: "1px solid var(--red)" }}
                  >
                    12+
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs nav-link"
                    style={{ background: "rgba(26,16,8,0.07)", color: "var(--ink)", border: "1px solid rgba(26,16,8,0.2)" }}
                  >
                    2 ч 45 мин
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs nav-link"
                    style={{ background: "rgba(26,16,8,0.07)", color: "var(--ink)", border: "1px solid rgba(26,16,8,0.2)" }}
                  >
                    Гастроли
                  </span>
                </div>
              </div>

              {/* Правая часть — цена и кнопка */}
              <div
                className="p-8 md:p-10 flex flex-col justify-between"
                style={{ background: "var(--ink)" }}
              >
                <div>
                  <p className="nav-link text-xs mb-4" style={{ color: "var(--gold)" }}>СТОИМОСТЬ БИЛЕТОВ</p>
                  <div className="flex items-end gap-3 mb-2">
                    <span
                      className="display-title font-bold"
                      style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "#fff", lineHeight: 1 }}
                    >1 700</span>
                    <span className="text-2xl mb-1 font-light" style={{ color: "rgba(245,237,216,0.5)" }}>₽</span>
                  </div>
                  <div className="flex items-center gap-2 mb-8">
                    <div className="h-px flex-1" style={{ background: "rgba(201,168,76,0.3)" }} />
                    <span className="nav-link text-xs" style={{ color: "var(--gold)" }}>до</span>
                    <div className="h-px flex-1" style={{ background: "rgba(201,168,76,0.3)" }} />
                  </div>
                  <div className="flex items-end gap-3 mb-6">
                    <span
                      className="display-title font-bold"
                      style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "var(--gold)", lineHeight: 1 }}
                    >
                      3 500
                    </span>
                    <span className="text-2xl mb-1 font-light" style={{ color: "var(--gold-light, #E8C96E)" }}>₽</span>
                  </div>

                  <p className="text-xs leading-relaxed" style={{ color: "rgba(245,237,216,0.4)" }}>
                    Партер, амфитеатр, балкон.<br />
                    Точная стоимость зависит от зоны.
                  </p>
                </div>

                <div className="relative mt-8">
                  <a
                    href="https://iframeab-pre11992.intickets.ru/seance/72243185/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-red w-full py-4 rounded-xl text-base flex items-center justify-center gap-2"
                  >
                    <span>КУПИТЬ БИЛЕТ</span>
                    <span style={{ fontSize: "1.1em" }}>→</span>
                  </a>
                  <span
                    className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "var(--gold)", color: "var(--ink)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em", whiteSpace: "nowrap" }}
                  >
                    без комиссии
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}