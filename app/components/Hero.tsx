// components/Hero.js
import Image from "next/image";

const Hero = () => (
  <div className="relative h-screen">
    <Image
      src="/images/hero-background.jpg" // Ensure the image path is correct
      alt="Hero Background"
      fill
      className="object-cover"
    />
    <section className="absolute inset-0 flex flex-col justify-center items-center text-blue-600">
      <h1 className="text-4xl font-bold text-white">
        Welcome to the Stanford Alumni Network
      </h1>
      <p className="text-lg mt-4 text-white">
        Stay connected with your alumni community
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
        Join Now
      </button>
    </section>
  </div>
);

export default Hero;
