"use client";
import { HeroSection } from "@/components/custom/hero-section";
import { StatsSection } from "@/components/custom/stats-section";
import { MissionSection } from "@/components/custom/mission-section";
import { UrgentCauseSection } from "@/components/custom/urgent-cause-section";
import { CausesSection } from "@/components/custom/causes-section";
import { EventsSection } from "@/components/custom/events-section";
import { TestimonialsSection } from "@/components/custom/testimonials-section";
import { VolunteersSection } from "@/components/custom/volunteers-section";
import { PhotoArchivesSection } from "@/components/custom/photo-archives-section";
import { SponsorsSection } from "@/components/custom/sponsors-section";
import { NewsletterSection } from "@/components/custom/newsletter-section";
import { Footer } from "@/components/custom/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Header } from "@/components/custom/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <UrgentCauseSection />
      <CausesSection />
      {/* <EventsSection /> */}
      <TestimonialsSection />
      {/* <VolunteersSection /> */}
      <PhotoArchivesSection />
      <SponsorsSection />
      <NewsletterSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
