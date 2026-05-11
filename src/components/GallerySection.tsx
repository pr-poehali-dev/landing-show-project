import Icon from "@/components/ui/icon";

const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1541976590-713941681591?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
];

interface GallerySectionProps {
  onLightbox: (img: string) => void;
  onVideoOpen: () => void;
}

export default function GallerySection({ onLightbox, onVideoOpen }: GallerySectionProps) {
  return (
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
  );
}
