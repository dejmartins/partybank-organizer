import Header from "./ui/landing/header";
import HeroSection from "./ui/landing/hero-section";
import WhatWeDo from "./ui/landing/what-we-do";
import WhyChooseUs from "./ui/landing/why-choose-us";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="px-3 pb-3 bg-[#FFF3F5]">
        <HeroSection />

        <WhatWeDo />
      </div>

      <div className="p-4 md:p-8">
        <WhyChooseUs />
      </div>
    </main>
  );
}
