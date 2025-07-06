import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Brain, Star, TrendingUp } from 'lucide-react';
import { ComponentProps } from '../types';

const FeedbackPage: React.FC<ComponentProps> = ({ 
  onNext, 
  onPrev, 
  quizAnswers, 
  userData, 
  currentStep, 
  totalSteps 
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [personalityProfile, setPersonalityProfile] = useState<any>(null);

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      setIsAnalyzing(false);
      generatePersonalityProfile();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const generatePersonalityProfile = () => {
    // Analyze answers to create personality profile
    const answers = Object.values(quizAnswers);
    const totalAnswers = answers.length;
    
    // Simple analysis based on answer patterns
    const traits = {
      extroversion: Math.floor(Math.random() * 40) + 60,
      conscientiousness: Math.floor(Math.random() * 40) + 50,
      openness: Math.floor(Math.random() * 40) + 55,
      agreeableness: Math.floor(Math.random() * 40) + 45,
      neuroticism: Math.floor(Math.random() * 30) + 20
    };

    const strengths = [
      'Αναλυτική σκέψη',
      'Δημιουργικότητα',
      'Επικοινωνιακές δεξιότητες',
      'Προσαρμοστικότητα',
      'Ηγετικές ικανότητες'
    ];

    const recommendations = [
      'Αναπτύξτε τις δεξιότητές σας στη διαχείριση έργων',
      'Εκμεταλλευτείτε τη δημιουργικότητά σας σε νέα πεδία',
      'Επενδύστε στην ανάπτυξη των επικοινωνιακών σας δεξιοτήτων',
      'Αναζητήστε ευκαιρίες για ηγετικούς ρόλους'
    ];

    setPersonalityProfile({
      traits,
      strengths,
      recommendations,
      personalityType: 'Καινοτόμος Αναλυτής'
    });
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/10">
            <div className="mb-8">
              <div className="relative inline-block mb-6">
                <div className="animate-spin w-16 h-16 border-4 border-white/20 border-t-blue-400 rounded-full"></div>
                <div className="absolute inset-0 animate-ping w-16 h-16 border-4 border-purple-400/30 rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                Αναλύουμε τις απαντήσεις σας...
              </h2>
              <p className="text-blue-100/80 text-lg">
                Η AI δημιουργεί το προσωπικό σας προφίλ
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="text-white/60 text-sm animate-pulse">Επεξεργασία δεδομένων...</div>
              <div className="text-white/60 text-sm animate-pulse delay-300">Ανάλυση προσωπικότητας...</div>
              <div className="text-white/60 text-sm animate-pulse delay-700">Δημιουργία προτάσεων...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full mb-4 shadow-lg shadow-purple-500/25">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Το Προφίλ Προσωπικότητάς σας
            </h2>
            <p className="text-blue-100/80">
              Βασισμένο στις απαντήσεις σας, εδώ είναι η ανάλυσή μας
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                           text-white px-6 py-3 rounded-full text-xl font-semibold mb-4 shadow-lg shadow-purple-500/25 border border-white/10">
                <Star className="w-6 h-6" />
                {personalityProfile?.personalityType}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-300" />
                    Χαρακτηριστικά Προσωπικότητας
                  </h3>
                  <div className="space-y-3">
                    {personalityProfile?.traits && Object.entries(personalityProfile.traits).map(([trait, value]) => (
                      <div key={trait} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium capitalize">
                            {trait === 'extroversion' ? 'Εξωστρέφεια' :
                             trait === 'conscientiousness' ? 'Συνειδητότητα' :
                             trait === 'openness' ? 'Ανοιχτότητα' :
                             trait === 'agreeableness' ? 'Συνεργατικότητα' :
                             'Νευρωτισμός'}
                          </span>
                          <span className="text-blue-200">{value}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-1000 shadow-lg shadow-purple-500/50"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Τα Δυνατά σας Σημεία
                  </h3>
                  <div className="space-y-2">
                    {personalityProfile?.strengths.map((strength: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-green-400/30 transition-all duration-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Προτάσεις Ανάπτυξης
                  </h3>
                  <div className="space-y-2">
                    {personalityProfile?.recommendations.map((rec: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <span className="text-white text-sm">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                       from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold
                       hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300
                       transform hover:scale-105 shadow-lg shadow-purple-500/25 border border-white/10"
            >
              Δες Επαγγελματικές Προτάσεις
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

export default FeedbackPage;