const F = "https://cdn.poehali.dev/projects/65a0d195-7b65-4362-ab9b-02d1c8ca4d32/files/ed936a27-f924-4db0-bc67-99e9bbfc54f8.jpg";
const M = "https://cdn.poehali.dev/projects/65a0d195-7b65-4362-ab9b-02d1c8ca4d32/files/e7c348e4-fc4b-47c7-ade2-d10ee355ef26.jpg";

const ACTORS = [
  { actor: "Анастасия Мельникова", img: F },
  { actor: "Майя Барковская", img: F },
  { actor: "Полина Нестерова", img: F },
  { actor: "Анастасия Фриско", img: F },
  { actor: "Анастасия Пугина", img: F },
  { actor: "Надежда Леньшина-Симутенкова", img: F },
  { actor: "Майя Штылёва", img: F },
  { actor: "Николай Семёнов", img: M },
  { actor: "Игорь Оробей", img: M },
  { actor: "Дмитрий Опаричев", img: M },
  { actor: "Сергей Рязанов", img: M },
  { actor: "Андрей Апанасов", img: M },
  { actor: "Константин Ужва", img: M },
  { actor: "Никита Доброжицкий", img: M },
  { actor: "Дмитрий Хромов", img: M },
  { actor: "Юрий Ильиных", img: M },
  { actor: "Александр Миненко", img: M },
  { actor: "Вячеслав Иванов", img: M, title: "Заслуженный артист России" },
  { actor: "Роман Котляров", img: M },
  { actor: "Дмитрий Кондраткин", img: M },
  { actor: "Павел Бадрах", img: M },
];

export default function ActorsSection() {
  return (
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
                      "linear-gradient(to top, rgba(26,16,8,0.97) 35%, transparent 70%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  {"title" in a && (
                    <p className="text-xs mb-1" style={{ color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em", lineHeight: 1.2 }}>
                      {a.title}
                    </p>
                  )}
                  <p className="font-semibold text-white text-xs leading-tight">{a.actor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
