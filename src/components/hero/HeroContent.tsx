import { FC } from 'react';

const HeroContent: FC = () => (
  <div className="h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <div className="space-y-2 mb-6 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FF6600]">
          The Innovation Foundation at OSU
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold">
          Artificial Intelligence Division
        </h2>
      </div>
      <p className="text-2xl md:text-3xl font-semibold mb-4 animate-fade-in">
        Pioneering Tomorrow's Intelligence, Today
      </p>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay opacity-90">
        Explore groundbreaking research, cutting-edge technology, and collaborative solutions powered by AI.
      </p>
    </div>
  </div>
);

export default HeroContent;