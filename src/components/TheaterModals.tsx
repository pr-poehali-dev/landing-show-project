import Icon from "@/components/ui/icon";

interface TheaterModalsProps {
  videoOpen: boolean;
  onVideoClose: () => void;
  lightboxImg: string | null;
  onLightboxClose: () => void;
}

export default function TheaterModals({
  videoOpen,
  onVideoClose,
  lightboxImg,
  onLightboxClose,
}: TheaterModalsProps) {
  return (
    <>
      {/* ── VIDEO MODAL ── */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={onVideoClose}
        >
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ maxWidth: 900, aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "var(--red)" }}
              onClick={onVideoClose}
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
          onClick={onLightboxClose}
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
    </>
  );
}
