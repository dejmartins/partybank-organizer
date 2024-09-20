import Header from "./ui/landing/header";
import HeroSection from "./ui/landing/hero-section";
import WhatWeDo from "./ui/landing/what-we-do";

export default function Home() {
  return (
    <main className="">
      <Header />

      <div className="px-3 pb-3 bg-[#FFF3F5]">
        <HeroSection />

        <WhatWeDo />
      </div>
      {/* <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Partybank</strong>
          </p>
      </div> */}
    </main>
  );
}
