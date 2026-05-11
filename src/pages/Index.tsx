import { useState, useEffect } from "react";
import TheaterNav from "@/components/TheaterNav";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import TheaterModals from "@/components/TheaterModals";

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--cream)", color: "var(--ink)" }}>
      <TheaterNav
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <HeroSection
        heroVisible={heroVisible}
        scrollTo={scrollTo}
        onVideoOpen={() => setVideoOpen(true)}
      />
      <ContentSections
        onLightbox={setLightboxImg}
        onVideoOpen={() => setVideoOpen(true)}
      />
      <TheaterModals
        videoOpen={videoOpen}
        onVideoClose={() => setVideoOpen(false)}
        lightboxImg={lightboxImg}
        onLightboxClose={() => setLightboxImg(null)}
      />
    </div>
  );
}
