import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Users, Clock, Target } from 'lucide-react';
import { ComponentProps } from '../types';

const ScenarioPage: React.FC<ComponentProps> = ({ 
  onNext, 
  onPrev, 
  currentStep, 
  totalSteps 
}) => {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  const scenario = {
    title: "Η Πρόκληση της Ομάδας",
    context: "Εργάζεσαι σε μια εταιρεία τεχνολογίας και η ομάδα σου έχει αναλάβει ένα σημαντικό έργο. Υπάρχει σφιχτό χρονοδιάγραμμα και πρέπει να παραδώσετε το προϊόν σε 2 εβδομάδες.",
    situation: "Την τελευταία στιγμή, ο πελάτης ζητάει μια σημαντική αλλαγή που θα απαιτήσει επιπλέον εργασία. Η ομάδα είναι διχασμένη: μερικοί θέλουν να δεχτούν την αλλαγή, άλλοι πιστεύουν ότι είναι αδύνατη με το υπάρχον χρονοδιάγραμμα.",
    question: "Ως μέλος της ομάδας, τι θα προτείνεις;"
  };

  const choices = [
    {
      id: 1,
      text: "Να δεχτούμε την αλλαγή και να δουλέψουμε επιπλέον ώρες",
      description: "Προτεραιότητα στην ικανοποίηση του πελάτη",
      icon: Target,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      text: "Να εξηγήσουμε στον πελάτη ότι η αλλαγή δεν είναι εφικτή",
      description: "Προστασία της ομάδας και του χρονοδιαγράμματος",
      icon: Clock,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      text: "Να προτείνουμε μια συμβιβαστική λύση",
      description: "Μερική υλοποίηση της αλλαγής με παράταση",
      icon: Users,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 4,
      text: "Να ζητήσουμε από τη διοίκηση να αποφασίσει",
      description: "Μεταφορά της ευθύνης στα ανώτερα επίπεδα",
      icon: ArrowRight,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const handleNext = () => {
    if (selectedChoice !== null) {
      onNext();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              {scenario.title}
            </h2>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-100 px-4 py-2 rounded-full text-sm border border-emerald-400/30">
              <Users className="w-4 h-4" />
              Σενάριο Ομαδικής Εργασίας
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Το Πλαίσιο:</h3>
              <p className="text-blue-100/80 leading-relaxed">
                {scenario.context}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10 border-l-4 border-l-yellow-400">
              <h3 className="text-lg font-semibold text-white mb-3">Η Κατάσταση:</h3>
              <p className="text-blue-100/80 leading-relaxed">
                {scenario.situation}
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-6">
                {scenario.question}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => setSelectedChoice(choice.id)}
                  className={`p-6 rounded-xl border transition-all duration-300 text-left group transform hover:scale-[1.02] ${
                    selectedChoice === choice.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/50 shadow-lg shadow-blue-500/25'
                      : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${choice.color} p-3 rounded-lg flex-shrink-0 shadow-lg`}>
                      <choice.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2 group-hover:text-blue-100 transition-colors">
                        {choice.text}
                      </h4>
                      <p className="text-blue-100/70 text-sm">
                        {choice.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
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
              onClick={handleNext}
              disabled={selectedChoice === null}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r 
                       from-emerald-600 via-blue-600 to-purple-600 text-white font-semibold
                       hover:from-emerald-500 hover:via-blue-500 hover:to-purple-500 transition-all duration-300
                       transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                       disabled:hover:scale-100 shadow-lg shadow-purple-500/25 border border-white/10"
            >
              Συνέχεια
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

export default ScenarioPage;