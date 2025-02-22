import React from 'react';
import { Shield, Flag, Code, Network } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Cybersecurity Challenges',
      description: 'Test your skills in cryptography, reverse engineering, and network security.',
    },
    {
      icon: Flag,
      title: 'Capture The Flag',
      description: 'Solve complex puzzles and challenges to capture virtual flags and earn points.',
    },
    {
      icon: Code,
      title: 'Social Engineering',
      description: 'Master the art of human hacking and psychological manipulation in cybersecurity.',
    },
    {
      icon: Network,
      title: 'Team Collaboration',
      description: 'Work together with fellow participants to tackle challenging problems.',
    },
  ];

  return (
    <div className="min-h-screen bg-mythological text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center text-saffron animate-glow">
            About Chakravyuh CTF
          </h1>

          <div className="mb-16 space-y-8">
            <div className="bg-darkBrown/80 backdrop-blur-sm p-8 rounded-lg border border-saffron/20">
              <h2 className="text-3xl font-bold mb-4 text-gold">What is Chakravyuh CTF?</h2>
              <p className="text-gray-300 leading-relaxed">
                A Capture The Flag (CTF) event is a cybersecurity competition where participants
                tackle various security-related challenges to capture virtual flags. These
                challenges often span areas like cryptography, reverse engineering, web
                security, and network exploitation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-darkBrown/60 backdrop-blur-sm p-6 rounded-lg border border-saffron/20 transform hover:scale-105 transition-transform duration-300"
                >
                  <feature.icon className="w-12 h-12 text-saffron mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gold">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-darkBrown/80 backdrop-blur-sm p-8 rounded-lg border border-saffron/20">
              <h2 className="text-3xl font-bold mb-4 text-gold">Event Structure</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  The event can be structured in different formats, such as Jeopardy style,
                  where teams solve independent challenges for points, or Attack-Defense,
                  where teams defend their systems while attempting to exploit others.
                </p>
                <p className="text-gray-300">
                  Participants gain points by solving these challenges and uncovering hidden
                  flags, with the highest-scoring team winning. CTF events not only test
                  technical skills and problem-solving abilities but also foster
                  collaboration and learning within the cybersecurity community.
                </p>
              </div>
            </div>

            <div className="bg-darkBrown/80 backdrop-blur-sm p-8 rounded-lg border border-saffron/20">
              <h2 className="text-3xl font-bold mb-4 text-gold">Community Impact</h2>
              <p className="text-gray-300 leading-relaxed">
                They are often organized by universities, clubs, or companies and serve as
                a valuable platform for skill development and networking in the field of
                cybersecurity. Our event brings together students, professionals, and
                enthusiasts to create a vibrant learning environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;