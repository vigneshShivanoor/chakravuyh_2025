import React from 'react';
import { Sword } from 'lucide-react';

const ChakravyuhAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Rotating Chakra Formation */}
      <div className="absolute inset-0 animate-spin-slow">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 border-saffron/20 rounded-full"
            style={{
              transform: `scale(${0.2 + i * 0.12}) rotate(${i * 45}deg)`,
              animation: `chakraBorderPulse ${3 + i}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Decorative Swords */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${i * 45}deg) translateY(-50vh)`,
            }}
          >
            <Sword 
              className="w-8 h-8 text-saffron/30 transform -rotate-45"
              style={{
                animation: `war-drums ${2 + i * 0.2}s ease-in-out infinite`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Parallax Dust Clouds */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute dust-cloud"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
      </div>

      {/* Flying Arrows */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute flying-arrow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Pulsing Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-darkBrown/50 animate-pulse-slow" />
    </div>
  );
};

export default ChakravyuhAnimation;