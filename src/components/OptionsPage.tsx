import React from 'react';
import { Download, Mail, Share2, BookOpen, Users, Calendar } from 'lucide-react';
import { ComponentProps } from '../types';

const OptionsPage: React.FC<ComponentProps> = ({ 
  userData, 
  currentStep, 
  totalSteps 
}) => {
  const handleDownloadReport = () => {
    // Simulate PDF download
    const element = document.createElement('a');
    element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Αναφορά Προσωπικότητας - Flameverse');
    element.download = 'personality-report.txt';
    element.click();
  };

  const handleShareResults = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Η Ανάλυση Προσωπικότητάς μου',
        text: 'Μόλις ολοκλήρωσα την ανάλυση προσωπικότητας στο Flameverse!',
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Ο σύνδεσμος αντιγράφηκε στο clipboard!');
    }
  };

  const options = [
    {
      title: 'Κατέβασε την Αναφορά σου',
      description: 'Λήψη αναλυτικής αναφοράς με τα αποτελέσματα και τις προτάσεις',
      icon: Download,
      action: handleDownloadReport,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Λάβε Προσωπικό Coaching',
      description: 'Συνεδρίες 1-προς-1 με εξειδικευμένους career coaches',
      icon: Users,
      action: () => window.open('mailto:coaching@flameverse.com', '_blank'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Εγγραφή σε Εκπαιδευτικό Πρόγραμμα',
      description: 'Εξειδικευμένα προγράμματα για την ανάπτυξη των δεξιοτήτων σου',
      icon: BookOpen,
      action: () => window.open('https://flameverse.com/courses', '_blank'),
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Κλείσε Συνάντηση Καθοδήγησης',
      description: 'Δωρεάν 30-λεπτη συνάντηση με έναν από τους συμβούλους μας',
      icon: Calendar,
      action: () => window.open('https://calendly.com/flameverse', '_blank'),
      color: 'from-slate-500 to-slate-600'
    },
    {
      title: 'Μοιράσου τα Αποτελέσματα',
      description: 'Μοιράσου την εμπειρία σου με φίλους και οικογένεια',
      icon: Share2,
      action: handleShareResults,
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Επικοινωνία για Προσωπικές Συμβουλές',
      description: 'Στείλε μας email για εξατομικευμένες συμβουλές',
      icon: Mail,
      action: () => window.open('mailto:advice@flameverse.com', '_blank'),
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Επιλογές για το Επόμενο Βήμα
            </h2>
            <p className="text-blue-100/80 text-lg">
              Τι θα θέλατε να κάνετε τώρα;
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 
                         group text-left border border-white/10 hover:border-white/30
                         transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${option.color} p-3 rounded-lg flex-shrink-0 shadow-lg shadow-purple-500/25`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-blue-100/80 text-sm leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Ευχαριστούμε που συμμετείχατε!
            </h3>
            <p className="text-blue-100/80 mb-6">
              Το ταξίδι ανακάλυψης της προσωπικότητάς σας μόλις ξεκίνησε. 
              Είμαστε εδώ για να σας υποστηρίξουμε σε κάθε βήμα.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-blue-100/60">
              <div>💫 Flameverse 2024</div>
              <div>•</div>
              <div>Ανακαλύψτε τον εαυτό σας</div>
              <div>•</div>
              <div>Φτιάξτε το μέλλον σας</div>
            </div>
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

export default OptionsPage;