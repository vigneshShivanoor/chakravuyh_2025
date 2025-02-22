import React from 'react';
import { Users } from 'lucide-react';

const Team = () => {
  const facultyCoordinators = [
    {
      name: 'Dr. Neha Nandal',
      role: 'Head of Department',
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=1000',
    },
    {
      name: 'Prof. Mamatha',
      role: 'Faculty Coordinator',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1000',
    },
  ];

  const studentCoordinators = [
    {
      name: 'Vardhan',
      role: 'Chair',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000',
    },
    {
      name: 'Dhanush',
      role: 'Vice Chair',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
    },
    {
      name: 'Rahul',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000',
    },
    {
      name: 'Priya',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
    },
    {
      name: 'Karthik',
      role: 'Marketing Lead',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000',
    },
    {
      name: 'Sneha',
      role: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000',
    },
  ];

  return (
    <div className="min-h-screen bg-mythological text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-saffron mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-saffron mb-4 animate-glow">
              Our Sacred Warriors
            </h1>
            <p className="text-xl text-gray-300">
              Meet the team behind Chakravyuh CTF
            </p>
          </div>

          {/* Faculty Coordinators */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gold mb-8 text-center">
              Faculty Coordinators
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {facultyCoordinators.map((faculty, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-saffron via-gold to-saffron rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative flex items-center bg-darkBrown/80 backdrop-blur-sm p-6 rounded-lg border border-saffron/20">
                    <div className="w-32 h-32 relative mr-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-saffron to-gold rounded-lg transform -rotate-6"></div>
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover rounded-lg transform rotate-3 transition-transform group-hover:rotate-0 duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-saffron mb-2">{faculty.name}</h3>
                      <p className="text-gold">{faculty.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Coordinators */}
          <div>
            <h2 className="text-3xl font-bold text-gold mb-8 text-center">
              Student Coordinators
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {studentCoordinators.map((student, index) => (
                <div
                  key={index}
                  className="relative group transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-saffron via-gold to-saffron rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-darkBrown/80 backdrop-blur-sm p-6 rounded-lg border border-saffron/20">
                    <div className="w-full h-48 relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-saffron to-gold rounded-lg transform -rotate-3"></div>
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover rounded-lg transform rotate-3 transition-transform group-hover:rotate-0 duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-saffron mb-1">{student.name}</h3>
                    <p className="text-gold">{student.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;