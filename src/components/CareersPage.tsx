import React from 'react';
import { ArrowRight, ArrowLeft, Eye, Lightbulb, Users, Zap } from 'lucide-react';
import { ComponentProps } from '../types';

const CareersPage: React.FC<ComponentProps> = ({ 
  onNext, 
  onPrev, 
  currentStep, 
  totalSteps 
}) => {
  const invisibleCareers = [
    {
      title: 'UX Research Specialist',
      description: 'Μελετάς τη συμπεριφορά των χρηστών και δημιουργείς εμπειρίες που αλλάζουν τη ζωή τους',
      icon: Eye,
      skills: ['Ψυχολογία', 'Ανάλυση δεδομένων', 'Εμπάθεια'],
      growth: '15% ετήσια αύξηση'
    },
    {
      title: 'Sustainability Consultant',
      description: 'Βοηθάς εταιρείες να γίνουν περιβαλλοντικά υπεύθυνες και οικονομικά αποδοτικές',
      icon: Lightbulb,
      skills: ['Περιβαλλοντική επιστήμη', 'Στρατηγική', 'Επικοινωνία'],
      growth: '8% ετήσια αύξηση'
    },
    {
      title: 'Digital Wellness Coach',
      description: 'Καθοδηγείς ανθρώπους να αναπτύξουν υγιή σχέση με την τεχνολογία',
      icon: Users,
      skills: ['Ψυχολογία', 'Coaching', 'Ψηφιακή παιδεία'],
      growth: '22% ετήσια αύξηση'
    },
    {
      title: 'Innovation Facilitator',
      description: 'Δημιουργείς και διευκολύνεις διαδικασίες που οδηγούν σε breakthrough ιδέες',
      icon: Zap,
      skills: ['Δημιουργικότητα', 'Διαχείριση ομάδων', 'Design thinking'],
      growth: '12% ετήσια αύξηση'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full mb-4 shadow-lg shadow-purple-500/25">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Αόρατα Επαγγέλματα για Εσάς
            </h2>
            <p className="text-blue-100/80 text-lg">
              Επαγγέλματα του μέλλοντος που ταιριάζουν με το προφίλ σας
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {invisibleCareers.map((career, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-white/20 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-3 rounded-lg flex-shrink-0 shadow-lg shadow-purple-500/25">
                    <career.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">
                      {career.title}
                    </h3>
                    <p className="text-blue-100/80 text-sm mb-4 leading-relaxed">
                      {career.description}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-blue-200 font-medium mb-1">Βασικές Δεξιότητες:</div>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill, i) => (
                            <span key={i} className="bg-white/10 text-white px-2 py-1 rounded-full text-xs border border-white/20">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-green-300 font-medium bg-green-500/20 px-2 py-1 rounded-full border border-green-400/30">
                          📈 {career.growth}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Γιατί αυτά τα επαγγέλματα είναι "αόρατα";
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <div>
                  <div className="text-white font-medium mb-1">Νεοεμφανιζόμενα</div>
                  <div className="text-blue-100/70">Δημιουργούνται από τεχνολογικές και κοινωνικές αλλαγές</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse delay-300"></div>
                <div>
                  <div className="text-white font-medium mb-1">Υβριδικά</div>
                  <div className="text-blue-100/70">Συνδυάζουν δεξιότητες από διαφορετικούς τομείς</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0 animate-pulse delay-700"></div>
                <div>
                  <div className="text-white font-medium mb-1">Υψηλή Ζήτηση</div>
                  <div className="text-blue-100/70">Έχουν μεγάλη ζήτηση αλλά λίγους εξειδικευμένους</div>
                </div>
              </div>
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
                       from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold
                       hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300
                       transform hover:scale-105 shadow-lg shadow-purple-500/25 border border-white/10"
            >
              Δες τις Επιλογές σου
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

export default CareersPage;