import { ThemeToggle } from "@/components/theme-toggle";
import { StarBackground } from "@/components/star-background";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      <ThemeToggle />

      <StarBackground />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />

        <ContactSection />
      </main>

    </div>
  );
};