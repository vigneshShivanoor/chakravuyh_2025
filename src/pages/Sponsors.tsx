import React from 'react';
import { Shield } from 'lucide-react';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Supraja Technologies',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000',
      description: 'Leading provider of cybersecurity solutions and training.',
      type: 'Title Sponsor'
    },
    {
      name: 'Computer Science Department',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000',
      description: 'Department of Computer Science, REVA University.',
      type: 'Academic Partner'
    },
    {
      name: 'IEEE Student Branch',
      image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1000',
      description: 'IEEE Student Branch, REVA University Chapter.',
      type: 'Technical Partner'
    },
    {
      name: 'GCTC',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000',
      description: 'Global Cyber Threat Council.',
      type: 'Knowledge Partner'
    },
    {
      name: 'Red Bull',
      image: 'https://images.unsplash.com/photo-1611567149354-716c7c2f836c?q=80&w=1000',
      description: 'Official Energy Drink Partner.',
      type: 'Beverage Partner'
    }
  ];

  return (
    <div className="min-h-screen bg-mythological text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-saffron mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-saffron mb-4 animate-glow">
              Our Divine Allies
            </h1>
            <p className="text-xl text-gray-300">
              The mighty forces supporting our sacred battle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="relative group transform hover:scale-105 transition-transform duration-300"
              >
                {/* Ancient Frame Border */}
                <div className="absolute -inset-1">
                  <div className="w-full h-full opacity-75 blur-sm bg-gradient-to-r from-saffron via-gold to-saffron"></div>
                </div>
                
                {/* Content Container */}
                <div className="relative bg-darkBrown/80 backdrop-blur-sm rounded-lg overflow-hidden border border-saffron/20">
                  {/* Image Container with Decorative Elements */}
                  <div className="relative h-48">
                    {/* Corner Ornaments */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-saffron"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-saffron"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-saffron"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-saffron"></div>
                    
                    {/* Sponsor Image */}
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-darkBrown via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="p-6">
                    <div className="mb-2 text-gold font-medium">{sponsor.type}</div>
                    <h3 className="text-2xl font-bold text-saffron mb-2">{sponsor.name}</h3>
                    <p className="text-gray-300">{sponsor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;