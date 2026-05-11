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
  );
}
