import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { AreaSection } from "@/components/AreaSection";
import { Testimonial } from "@/components/Testimonial";
import { EstimateForm } from "@/components/EstimateForm";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: `${SITE.tagline} | ${SITE.name}`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Spesialis Keramik & Granit"
        title={
          <>
            Jasa Pasang Keramik
            <br />
            <em className="font-serif font-normal text-[#947e61]">Borongan</em> Jabodetabek
          </>
        }
        text="Solusi pemasangan keramik dan granit yang rapi, presisi, dan terukur untuk rumah tinggal hingga proyek komersial."
        primaryHref={waLink()}
      />
      <Stats />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <AreaSection />
      <Testimonial />
      <EstimateForm />
      <CtaBanner />
    </>
  );
}
