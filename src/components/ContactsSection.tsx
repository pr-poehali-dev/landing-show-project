import Icon from "@/components/ui/icon";

export default function ContactsSection() {
  return (
    <>
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
                  text: "+7 (922) 415-44-63",
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