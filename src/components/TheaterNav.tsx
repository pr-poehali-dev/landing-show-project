import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Сюжет", href: "#plot" },
  { label: "Актёры", href: "#actors" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Билеты", href: "#tickets" },
  { label: "Контакты", href: "#contacts" },
];

interface TheaterNavProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  scrollTo: (href: string) => void;
}

export default function TheaterNav({ scrolled, menuOpen, setMenuOpen, scrollTo }: TheaterNavProps) {
  return (
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
          <div className="relative inline-block">
            <a
              href="https://iframeab-pre11992.intickets.ru/seance/72243185/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red px-4 py-2 text-sm font-semibold rounded"
            >
              Купить билет
            </a>
            <span
              className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded text-xs font-semibold"
              style={{ background: "var(--gold)", color: "var(--ink)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em", whiteSpace: "nowrap" }}
            >
              без комиссии
            </span>
          </div>
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
  );
}