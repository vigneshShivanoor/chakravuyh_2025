import React from 'react';
import { RingLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-darkBrown flex flex-col items-center justify-center">
      <div className="relative">
        <RingLoader
          color="#FF9933"
          size={120}
          speedMultiplier={0.7}
        />
        
        {/* Shakuni's Dice Container with Perspective */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 perspective-[1000px]">
          {/* Floating Effect Container */}
          <div className="relative w-full h-full animate-float">
            {/* 3D Dice with Complex Rotation */}
            <div className="relative w-full h-full transform-style-3d animate-complex-roll">
              {/* Front face */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-saffron transform translate-z-[32px] flex items-center justify-center border-2 border-saffron/50 shadow-lg backdrop-blur-sm">
                <span className="text-darkBrown text-2xl font-bold filter drop-shadow-glow">१</span>
              </div>
              {/* Back face */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-saffron transform -translate-z-[32px] rotate-y-180 flex items-center justify-center border-2 border-saffron/50 shadow-lg backdrop-blur-sm">
                <span className="text-darkBrown text-2xl font-bold filter drop-shadow-glow">२</span>
              </div>
              {/* Right face */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-saffron transform translate-x-[32px] rotate-y-90 flex items-center justify-center border-2 border-saffron/50 shadow-lg backdrop-blur-sm">
                <span className="text-darkBrown text-2xl font-bold filter drop-shadow-glow">३</span>
              </div>
              {/* Left face */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-saffron transform -translate-x-[32px] -rotate-y-90 flex items-center justify-center border-2 border-saffron/50 shadow-lg backdrop-blur-sm">
                <span className="text-darkBrown text-2xl font-bold filter drop-shadow-glow">४</span>
              </div>
              {/* Top face */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-saffron transform translate-y-[32px] rotate-x-90 flex items-center justify-center border-2 border-saffron/50 shadow-lg backdrop-blur-sm">
                <span className="text-darkBrown text-2xl font-bold filter drop-shadow-glow">५</span>
              </div>
              {/* Bottom face */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-saffron transform -translate-y-[32px] -rotate-x-90 flex items-center justify-center border-2 border-saffron/50 shadow-lg backdrop-blur-sm">
                <span className="text-darkBrown text-2xl font-bold filter drop-shadow-glow">६</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gold text-2xl font-cinzel mb-2 animate-pulse">
          Entering Chakravyuh
        </p>
        <p className="text-saffron/80 font-spectral">
          Rolling the dice of destiny...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;