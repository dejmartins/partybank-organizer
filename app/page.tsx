import Header from "./ui/landing/header";
import HeroSection from "./ui/landing/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

      <HeroSection />
      {/* <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Partybank</strong>
          </p>
      </div> */}
    </main>
  );
}
