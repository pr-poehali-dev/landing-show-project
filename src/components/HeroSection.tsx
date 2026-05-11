import { useRef } from "react";
import Icon from "@/components/ui/icon";

const POSTER_URL =
  "https://cdn.poehali.dev/projects/65a0d195-7b65-4362-ab9b-02d1c8ca4d32/bucket/9e988e4a-7f6d-4755-aa75-8984e2c4c103.png";

interface HeroSectionProps {
  heroVisible: boolean;
  scrollTo: (href: string) => void;
  onVideoOpen: () => void;
}

export default function HeroSection({ heroVisible, scrollTo, onVideoOpen }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
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

            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative inline-block">
                <a
                  href="https://iframeab-pre11992.intickets.ru/seance/72243185/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red px-8 py-4 text-base rounded block"
                >
                  Купить билет
                </a>
                <span
                  className="absolute -bottom-3 -right-3 px-2 py-0.5 rounded text-xs font-semibold"
                  style={{ background: "var(--gold)", color: "var(--ink)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em", whiteSpace: "nowrap", zIndex: 1 }}
                >
                  без комиссии
                </span>
              </div>
              <button
                className="btn-gold px-8 py-4 text-base rounded flex items-center gap-2"
                onClick={onVideoOpen}
              >
                <Icon name="Play" size={18} />
                Смотреть трейлер
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
              {[
                { val: "2 ч 45 мин", label: "Продолжительность" },
                { val: "12+", label: "Возраст" },
                { val: "Муз. комедия", label: "Жанр" },
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
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#3D2B1A" }}
              >Острая сатира на советский быт, галерея незабываемых персонажей и блистательные диалоги Ильфа и Петрова оживают на сцене в полную силу.</p>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#3D2B1A" }}
              >Вас ждут: яркие персонажи, азарт, любовь, волнующий джаз, чувственное танго, стильные костюмы и декорации! Лёд тронулся, господа присяжные заседатели! Вы никогда не будете лишним на этом празднике жизни!</p>
            </div>

            {/* Video block */}
            <div
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "16/9", background: "#1A1008" }}
              onClick={onVideoOpen}
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
    </>
  );
}