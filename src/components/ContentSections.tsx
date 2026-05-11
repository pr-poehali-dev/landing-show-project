import ActorsSection from "@/components/ActorsSection";
import GallerySection from "@/components/GallerySection";
import ReviewsAndTicketsSection from "@/components/ReviewsAndTicketsSection";
import ContactsSection from "@/components/ContactsSection";

interface ContentSectionsProps {
  onLightbox: (img: string) => void;
  onVideoOpen: () => void;
}

export default function ContentSections({ onLightbox, onVideoOpen }: ContentSectionsProps) {
  return (
    <>
      <ActorsSection />
      <GallerySection onLightbox={onLightbox} onVideoOpen={onVideoOpen} />
      <ReviewsAndTicketsSection />
      <ContactsSection />
    </>
  );
}
