import React from 'react';
import { CircuitBoard, Cpu, Globe2, Maximize2 } from 'lucide-react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';

function App() {
  const features = [
    {
      icon: <CircuitBoard className="w-8 h-8 text-cyan-400" />,
      title: "Quantum Processing",
      description: "Next-gen computing power at your fingertips"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-cyan-400" />,
      title: "Global Network",
      description: "Seamless connectivity across dimensions"
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: "Neural Interface",
      description: "Direct mind-to-machine communication"
    },
    {
      icon: <Maximize2 className="w-8 h-8 text-cyan-400" />,
      title: "Infinite Scaling",
      description: "Boundless expansion capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10" />
      <div className="relative">
        <NavBar />
        <HeroSection />
        
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 backdrop-blur-xl border border-cyan-500/20">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience the Future
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Step into a world where technology and imagination converge. Our platform brings tomorrow's innovations to today's reality.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 ease-out font-semibold">
              Join the Revolution
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;