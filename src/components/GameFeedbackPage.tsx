import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Brain, Star, TrendingUp, Lightbulb } from 'lucide-react';
import { ComponentProps } from '../types';

const GameFeedbackPage: React.FC<ComponentProps> = ({ 
  onNext, 
  onPrev, 
  currentStep, 
  totalSteps 
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [gameProfile, setGameProfile] = useState<any>(null);

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      setIsAnalyzing(false);
      generateGameProfile();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const generateGameProfile = () => {
    const profile = {
      decisionStyle: 'Συνεργατικός Στρατηγικός',
      strengths: [
        'Ισορροπημένη προσέγγιση στις αποφάσεις',
        'Ικανότητα εύρεσης συμβιβαστικών λύσεων',
        'Σεβασμός προς την ομάδα και τον πελάτη',
        'Στρατηγική σκέψη υπό πίεση'
      ],
      insights: [
        'Προτιμάς λύσεις που ωφελούν όλους τους εμπλεκόμενους',
        'Δεν παίρνεις βιαστικές αποφάσεις υπό πίεση',
        'Αναγνωρίζεις τη σημασία της ομαδικής συνεργασίας',
        'Έχεις ικανότητα να βλέπεις το μεγάλο εικόνα'
      ],
      careerFit: [
        'Project Management',
        'Consulting',
        'Team Leadership',
        'Strategic Planning'
      ]
    };

    setGameProfile(profile);
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/10">
            <div className="mb-8">
              <div className="relative inline-block mb-6">
                <div className="animate-spin w-16 h-16 border-4 border-white/20 border-t-emerald-400 rounded-full"></div>
                <div className="absolute inset-0 animate-ping w-16 h-16 border-4 border-emerald-400/30 rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Αναλύουμε την απόφασή σας...
              </h2>
              <p className="text-blue-100/80 text-lg">
                Εξετάζουμε τον τρόπο που αντιμετωπίζετε τις προκλήσεις
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="text-white/60 text-sm animate-pulse">Ανάλυση στρατηγικής σκέψης...</div>
              <div className="text-white/60 text-sm animate-pulse delay-300">Αξιολόγηση ηγετικών ικανοτήτων...</div>
              <div className="text-white/60 text-sm animate-pulse delay-700">Δημιουργία προφίλ αποφάσεων...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-full mb-4 shadow-lg shadow-purple-500/25">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Ανάλυση Λήψης Αποφάσεων
            </h2>
            <p className="text-blue-100/80">
              Βασισμένο στην επιλογή σας στο σενάριο
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 
                           text-white px-6 py-3 rounded-full text-xl font-semibold mb-4 shadow-lg shadow-purple-500/25 border border-white/10">
                <Star className="w-6 h-6" />
                {gameProfile?.decisionStyle}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-300" />
                    Δυνάμεις στη Λήψη Αποφάσεων
                  </h3>
                  <div className="space-y-3">
                    {gameProfile?.strengths.map((strength: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-white">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Καταλληλότητα για Καριέρες
                  </h3>
                  <div className="space-y-2">
                    {gameProfile?.careerFit.map((career: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-medium">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-300" />
                    Ψυχολογικές Διαπιστώσεις
                  </h3>
                  <div className="space-y-3">
                    {gameProfile?.insights.map((insight: string, index: number) => (
                      <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                          <span className="text-white text-sm leading-relaxed">{insight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Συνολική Αξιολόγηση
              </h3>
              <p className="text-blue-100/90 text-center leading-relaxed">
                Η επιλογή σας δείχνει έναν ισορροπημένο και στρατηγικό τρόπο σκέψης. 
                Αναγνωρίζετε τη σημασία τόσο των ανθρώπινων σχέσεων όσο και των επιχειρηματικών στόχων, 
                και αναζητάτε λύσεις που εξυπηρετούν όλους τους εμπλεκόμενους.
              </p>
            </div>
          </div>

          <div className="flex justify-between pt-8">
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
              Δες Αόρατα Επαγγέλματα
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

export default GameFeedbackPage;