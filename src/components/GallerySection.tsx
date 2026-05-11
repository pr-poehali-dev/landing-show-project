import Icon from "@/components/ui/icon";

const GALLERY_IMGS = [
  "https://cdn.poehali.dev/projects/65a0d195-7b65-4362-ab9b-02d1c8ca4d32/bucket/8b7904e5-a528-4c58-82e2-3eebc6cd4cde.jpg",
  "https://cdn.poehali.dev/projects/65a0d195-7b65-4362-ab9b-02d1c8ca4d32/bucket/8901fb08-984b-48ba-aa96-6152fb784ed3.jpg",
  "https://cdn.poehali.dev/projects/65a0d195-7b65-4362-ab9b-02d1c8ca4d32/bucket/27e32660-81b4-4bc5-b2dc-5a3c3d3d1e62.jpg",
  "https://cdn.poehali.dev/projects/65a0d195-7b65-4362-ab9b-02d1c8ca4d32/bucket/024a14d3-ca78-48b6-8ec8-c61cd61ed84c.jpg",
  "https://cdn.poehali.dev/projects/65a0d195-7b65-4362-ab9b-02d1c8ca4d32/bucket/41569933-d78b-4de0-9000-dd6f85ae22c8.jpg",
  "https://cdn.poehali.dev/projects/65a0d195-7b65-4362-ab9b-02d1c8ca4d32/bucket/76a518f0-74d4-4a76-b8c0-15018a17de9e.jpeg",
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