import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen xl:min-h-[130vh] flex flex-col md:pt-36 items-center justify-center md:justify-start text-white rounded-b-[20px]"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/drddoxnsi/image/upload/v1724406331/PARTYBANK/ORGANIZER/hero-image_xqdvny.png")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 rounded-b-[30px]"></div>

      <div className="z-10 text-center flex flex-col items-center mx-5 md:mx-10">
        <Image
          src="/hero-banner.svg"
          height={1000}
          width={1000}
          alt="Hero Banner"
        />

        <p className="text-sm md:text-xl my-8 md:max-w-[60vw] mx-auto">
          Effortlessly plan, manage, and elevate your events with Partybank, the
          ultimate platform for organizers to create unforgettable experiences.
        </p>

        <div className="flex gap-4 my-5 md:my-6">
          <a
            href="/auth/signin"
            className="bg-[var(--pb-c-red)] text-white font-[500] border-[2px] border-[#4E0916] p-3 rounded-[8px] px-10 font-[700]"
          >
            Create Event
          </a>
        </div>

        <div className="flex gap-4 w-full max-w-[1000px] mx-auto mt-10">
          <Image
            src="/hero-image.png"
            layout="responsive"
            width={1200}
            height={350}
            alt="Partybank Logo"
            className="w-[80vw] md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
