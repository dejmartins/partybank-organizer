export default function HeroSection() {
    return (
      <section className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-white rounded-b-[20px]"
        style={{
            backgroundImage: 'url("https://res.cloudinary.com/drddoxnsi/image/upload/v1724406331/PARTYBANK/ORGANIZER/hero-image_xqdvny.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 rounded-b-[30px]"></div>
  
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Partybank
          </h1>
  
          <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto">
            Effortlessly plan, manage, and elevate your events with Partybank, the ultimate platform for organizers to create unforgettable experiences.
          </p>
  
          <div className="flex gap-4">
            <a href="/auth/signin" className="bg-[var(--pb-c-red)] text-white font-[500] border-[2px] border-[#4E0916] p-3 rounded-[8px] px-10 font-[700]">
              Create Event
            </a>
          </div>
        </div>
      </section>
    );
  }
  