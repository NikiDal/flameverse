import React from 'react';
import { ArrowRight, ArrowLeft, Gamepad2, Sparkles } from 'lucide-react';
import { ComponentProps } from '../types';

const GameIntroPage: React.FC<ComponentProps> = ({ 
  onNext, 
  onPrev, 
  currentStep, 
  totalSteps 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-full mb-6 shadow-lg shadow-purple-500/25 relative">
              <Gamepad2 className="w-10 h-10 text-white" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Ώρα για Παιχνίδι!
            </h2>
            <p className="text-blue-100/80 text-lg">
              Με βάση τα χαρακτηριστικά που ανακαλύψαμε, ας ξεκινήσουμε ένα σύντομο παιχνίδι...
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                Τι θα κάνουμε;
              </h3>
              <p className="text-blue-100/80 leading-relaxed">
                Θα σου παρουσιάσουμε ένα επαγγελματικό σενάριο και θα σου δώσουμε επιλογές. 
                Οι απαντήσεις σου θα μας βοηθήσουν να κατανοήσουμε καλύτερα τον τρόπο που σκέφτεσαι 
                και αντιδράς σε πραγματικές καταστάσεις.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                Γιατί είναι χρήσιμο;
              </h3>
              <p className="text-blue-100/80 leading-relaxed">
                Αυτό το παιχνίδι θα μας δώσει πολύτιμες πληροφορίες για τον τρόπο που προσεγγίζεις 
                τις προκλήσεις, παίρνεις αποφάσεις και συνεργάζεσαι με άλλους. Θα εμπλουτίσει 
                την ανάλυση της προσωπικότητάς σου!
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                Πόσο θα διαρκέσει;
              </h3>
              <p className="text-blue-100/80 leading-relaxed">
                Μόλις 2-3 λεπτά! Ένα σύντομο σενάριο με μερικές επιλογές. 
                Απλά διάλεξε αυτό που νιώθεις ότι θα έκανες στην πραγματικότητα.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 
                         text-white px-6 py-3 rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="font-medium">Έτοιμος/η για την πρόκληση;</span>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={onPrev}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white 
                       hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30
                       transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Πίσω
            </button>
            
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r 
                       from-emerald-600 via-blue-600 to-purple-600 text-white font-semibold
                       hover:from-emerald-500 hover:via-blue-500 hover:to-purple-500 transition-all duration-300
                       transform hover:scale-105 shadow-lg shadow-purple-500/25 border border-white/10"
            >
              Ξεκινάμε το Παιχνίδι!
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(totalSteps)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentStep ? 'bg-white scale-125 shadow-lg shadow-white/50' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameIntroPage;