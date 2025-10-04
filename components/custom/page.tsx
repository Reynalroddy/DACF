"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { MissionSection } from "@/components/mission-section";
import { UrgentCauseSection } from "@/components/urgent-cause-section";
import { CausesSection } from "@/components/causes-section";
import { EventsSection } from "@/components/events-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { VolunteersSection } from "@/components/volunteers-section";
import { PhotoArchivesSection } from "@/components/photo-archives-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <UrgentCauseSection />
      <CausesSection />
      <EventsSection />
      <TestimonialsSection />
      <VolunteersSection />
      <PhotoArchivesSection />
      <SponsorsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
