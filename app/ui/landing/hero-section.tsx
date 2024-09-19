export default function HeroSection() {
    return (
      <section className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: 'url("/path-to-your-background-image.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Partybank
          </h1>
  
          <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto">
            Discover unforgettable events, organize your parties, and experience the best moments with Partybank.
          </p>
  
          <div className="flex gap-4">
            <a href="/signup" className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-bold">
              Get Started
            </a>
            <a href="#learn-more" className="bg-transparent border border-white py-3 px-6 rounded-lg font-bold hover:bg-white hover:text-black transition">
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  }
  