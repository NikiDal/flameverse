import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
import { ComponentProps } from '../types';

const LandingPage: React.FC<ComponentProps> = ({ onNext }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Darker enhanced animated background elements */}
      <div className="absolute inset-0">
        {/* Large floating orbs with darker tones */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 via-purple-700/10 to-indigo-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-700/10 via-indigo-800/10 to-blue-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-800/8 via-purple-900/8 to-blue-900/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Smaller floating particles with darker colors */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-600/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-indigo-700/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-800/40 rounded-full animate-bounce delay-500"></div>
        
        {/* Animated gradient lines with darker tones */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-600/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-700/20 to-transparent animate-pulse delay-700"></div>
      </div>

      {/* Mouse follower effect with darker colors */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-700/3 via-purple-800/3 to-indigo-900/3 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Main glass container with enhanced darker effects */}
        <div className="relative group">
          {/* Darker glow background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-700/15 via-purple-800/15 to-indigo-900/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          
          {/* Main container with darker background */}
          <div className="relative bg-black/20 backdrop-blur-2xl rounded-3xl p-8 md:p-16 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:bg-black/30">
            {/* Inner glow effect with darker tones */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/3 via-purple-900/3 to-indigo-900/3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="mb-12">
                {/* Enhanced icon with multiple layers and darker colors */}
                <div className="relative inline-block mb-8">
                  {/* Outer glow with darker tones */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-700/20 to-indigo-800/20 rounded-full blur-xl animate-pulse"></div>
                  
                  {/* Middle glow with darker tones */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-700/30 via-purple-800/30 to-indigo-900/30 rounded-full blur-lg animate-pulse delay-300"></div>
                  
                  {/* Main icon container with darker gradient */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 rounded-full group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-purple-800/50 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white animate-pulse" />
                    
                    {/* Floating mini icons with darker colors */}
                    <Star className="absolute -top-2 -right-2 w-4 h-4 text-blue-200 animate-bounce delay-500" />
                    <Zap className="absolute -bottom-2 -left-2 w-4 h-4 text-purple-200 animate-bounce delay-1000" />
                  </div>
                </div>

                {/* Enhanced title with gradient text */}
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-blue-100 via-purple-100 via-indigo-100 to-blue-100 bg-clip-text text-transparent animate-pulse">
                    Συνδέεσαι...
                  </span>
                </h1>
                
                <div className="text-3xl md:text-4xl mb-12 font-light">
                  <span className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 bg-clip-text text-transparent">
                    πρώτη φορά;
                  </span>
                </div>
              </div>
              
              {/* Enhanced subtitle */}
              <div className="text-2xl md:text-3xl text-white/80 mb-16 leading-relaxed">
                <span className="bg-gradient-to-r from-white/90 via-blue-50 to-purple-50 bg-clip-text text-transparent">
                  πάμε να σε γνωρίσουμε καλύτερα...
                </span>
              </div>
              
              <div className="space-y-8">
                {/* Enhanced description with darker glass effect */}
                <div className="bg-black/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-purple-800/10">
                  <p className="text-xl text-blue-50/90 max-w-3xl mx-auto leading-relaxed">
                    Ανακάλυψε την προσωπικότητά σου και εξερεύνησε επαγγελματικές ευκαιρίες 
                    που ταιριάζουν με τον μοναδικό σου χαρακτήρα.
                  </p>
                </div>
                
                {/* Enhanced CTA button with darker colors */}
                <div className="relative inline-block">
                  {/* Button glow effect with darker tones */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 via-purple-800 to-indigo-900 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <button
                    onClick={onNext}
                    className="relative group inline-flex items-center gap-4 bg-gradient-to-r from-blue-700 via-purple-800 to-indigo-900 
                             text-white px-12 py-5 rounded-full text-xl font-semibold
                             hover:from-blue-600 hover:via-purple-700 hover:to-indigo-800 transition-all duration-300
                             transform hover:scale-110 shadow-2xl shadow-purple-800/50
                             border-2 border-white/20 hover:border-white/40"
                  >
                    <span className="relative z-10">Ξεκίνησε το ταξίδι</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    
                    {/* Inner button glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced progress dots */}
        <div className="mt-12 flex justify-center space-x-3">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`relative transition-all duration-500 ${
                i === 0 ? 'scale-150' : 'scale-100'
              }`}
            >
              {i === 0 && (
                <div className="absolute -inset-2 bg-white/30 rounded-full blur-md animate-pulse"></div>
              )}
              <div
                className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                  i === 0 
                    ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 shadow-lg shadow-white/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;