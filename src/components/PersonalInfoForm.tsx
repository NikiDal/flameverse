import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, User, Calendar, Briefcase } from 'lucide-react';
import { ComponentProps } from '../types';

const PersonalInfoForm: React.FC<ComponentProps> = ({ 
  onNext, 
  onPrev, 
  userData, 
  setUserData, 
  currentStep, 
  totalSteps 
}) => {
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {[key: string]: string} = {};
    
    if (!userData.gender) newErrors.gender = 'Παρακαλώ επιλέξτε φύλο';
    if (!userData.age) newErrors.age = 'Παρακαλώ επιλέξτε ηλικία';
    if (!userData.status) newErrors.status = 'Παρακαλώ επιλέξτε κατάσταση';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    onNext();
  };

  const updateUserData = (field: keyof typeof userData, value: string) => {
    setUserData({ ...userData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full mb-4 shadow-lg shadow-purple-500/25">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Ας γνωριστούμε καλύτερα
            </h2>
            <p className="text-blue-100/80">
              Μερικές βασικές πληροφορίες για να προσαρμόσουμε την εμπειρία σου
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-300" />
                Φύλο
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Άνδρας', 'Γυναίκα'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateUserData('gender', option)}
                    className={`p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                      userData.gender === option
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/50 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.gender && (
                <p className="text-red-300 text-sm mt-1 animate-pulse">{errors.gender}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-semibold mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-300" />
                Ηλικία
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['18-25', '26-35', '36-45', '46+'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateUserData('age', option)}
                    className={`p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                      userData.age === option
                        ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border-purple-400/50 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.age && (
                <p className="text-red-300 text-sm mt-1 animate-pulse">{errors.age}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-semibold mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-300" />
                Επαγγελματική/Εκπαιδευτική Κατάσταση
              </label>
              <div className="space-y-2">
                {[
                  'Φοιτητής/τρια',
                  'Εργαζόμενος/η',
                  'Άνεργος/η',
                  'Αναζητώ αλλαγή καριέρας'
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateUserData('status', option)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 text-left transform hover:scale-[1.02] ${
                      userData.status === option
                        ? 'bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border-indigo-400/50 text-white shadow-lg shadow-indigo-500/25'
                        : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.status && (
                <p className="text-red-300 text-sm mt-1 animate-pulse">{errors.status}</p>
              )}
            </div>

            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={onPrev}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white 
                         hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30
                         transform hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5" />
                Πίσω
              </button>
              
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r 
                         from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold
                         hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300
                         transform hover:scale-105 shadow-lg shadow-purple-500/25 border border-white/10"
              >
                Συνέχεια
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
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

export default PersonalInfoForm;