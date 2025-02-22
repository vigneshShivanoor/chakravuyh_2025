import React from 'react';
import Countdown from '../components/Countdown';
import { Sword, Shield, Scroll, Target } from 'lucide-react';

const Schedule = () => {
  const scheduleItems = [
    {
      day: 'Day 1: The Training Grounds',
      title: 'Divine Knowledge Transfer',
      description: 'As Dronacharya trained the Pandavas, our masters will guide you through the sacred arts of cybersecurity',
      icon: Shield,
      time: '9:00 AM - 5:00 PM',
    },
    {
      day: 'Day 2: The First Battle',
      title: 'Initial Chakravyuh Challenge',
      description: 'Like young Abhimanyu, face your first test in the art of digital warfare',
      icon: Sword,
      time: '9:00 AM - 6:00 PM',
    },
    {
      day: 'Day 3: The Final Conquest',
      title: 'Ultimate Warrior Trials',
      description: 'Channel your inner Arjuna and face the most challenging battles',
      icon: Target,
      time: '9:00 AM - 7:00 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-mythological text-white">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=2000')] bg-cover bg-center opacity-5"
        style={{ filter: 'sepia(100%) hue-rotate(340deg)' }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Sanskrit Symbol */}
          <div className="text-center text-6xl mb-6 text-saffron war-drums">॥</div>
          
          <h1 className="text-5xl font-bold mb-8 text-center text-saffron animate-glow ancient-text">
            Sacred Battle Plan
          </h1>
          
          <div className="mb-16">
            <h2 className="text-2xl text-center mb-6 text-gold ancient-text">Time Until the Battle Begins</h2>
            <Countdown />
          </div>
          
          <div className="space-y-8 scroll-container">
            {scheduleItems.map((item, index) => (
              <div
                key={item.day}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-saffron/20 via-gold/20 to-saffron/20 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative flex items-start gap-8 bg-parchment p-6 rounded-lg transform hover:scale-102 transition-all duration-500">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center group-hover:animate-spin-slow">
                    <item.icon className="w-8 h-8 text-darkBrown" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-saffron ancient-text">{item.day}</h3>
                    <h4 className="text-xl text-gold mb-2 ancient-text">{item.title}</h4>
                    <p className="text-gray-300 mb-2">{item.description}</p>
                    <p className="text-sm text-saffron/80">{item.time}</p>
                  </div>
                  
                  {index < scheduleItems.length - 1 && (
                    <div className="absolute bottom-0 left-8 w-0.5 h-8 bg-gradient-to-b from-saffron to-gold" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;