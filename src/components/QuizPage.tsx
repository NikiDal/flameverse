import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Brain, CheckCircle } from 'lucide-react';
import { ComponentProps, Question } from '../types';

const QuizPage: React.FC<ComponentProps> = ({ 
  onNext, 
  onPrev, 
  quizAnswers, 
  setQuizAnswers, 
  currentStep, 
  totalSteps 
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 'q1',
      text: 'Προτιμάς να εργάζεσαι σε ομάδα ή μόνος/μόνη;',
      theory: 'Εξωστρέφεια',
      options: ['Σε ομάδα', 'Μόνος/μόνη', 'Εξαρτάται από την κατάσταση', 'Δεν έχω προτίμηση']
    },
    {
      id: 'q2',
      text: 'Πώς αντιμετωπίζεις τις νέες καταστάσεις;',
      theory: 'Προσαρμοστικότητα',
      options: ['Με ενθουσιασμό', 'Με προσοχή', 'Με άγχος', 'Με αδιαφορία']
    },
    {
      id: 'q3',
      text: 'Τι σε παρακινεί περισσότερο στη δουλειά;',
      theory: 'Κίνητρα',
      options: ['Η επιτυχία', 'Η μάθηση', 'Η αναγνώριση', 'Η σταθερότητα']
    },
    {
      id: 'q4',
      text: 'Πώς λαμβάνεις αποφάσεις;',
      theory: 'Λήψη Αποφάσεων',
      options: ['Με λογική', 'Με συναίσθημα', 'Με διαβούλευση', 'Με διαίσθηση']
    },
    {
      id: 'q5',
      text: 'Τι είδους εργασιακό περιβάλλον προτιμάς;',
      theory: 'Περιβάλλον',
      options: ['Δημιουργικό', 'Οργανωμένο', 'Δυναμικό', 'Ήρεμο']
    },
    {
      id: 'q6',
      text: 'Πώς διαχειρίζεσαι τις προκλήσεις;',
      theory: 'Αντιμετώπιση Στρες',
      options: ['Τις αντιμετωπίζω άμεσα', 'Σχεδιάζω προσεκτικά', 'Ζητώ βοήθεια', 'Τις αποφεύγω']
    },
    {
      id: 'q7',
      text: 'Τι είδους δραστηριότητες σε εμπνέουν;',
      theory: 'Ενδιαφέροντα',
      options: ['Αναλυτικές', 'Δημιουργικές', 'Κοινωνικές', 'Πρακτικές']
    },
    {
      id: 'q8',
      text: 'Πώς αντιδράς στην κριτική;',
      theory: 'Συναισθηματική Νοημοσύνη',
      options: ['Την αποδέχομαι', 'Την αμφισβητώ', 'Με στεναχωρεί', 'Την αγνοώ']
    },
    {
      id: 'q9',
      text: 'Ποιος είναι ο στόχος σου στην καριέρα;',
      theory: 'Αξίες',
      options: ['Επαγγελματική εξέλιξη', 'Προσωπική ικανοποίηση', 'Οικονομική ασφάλεια', 'Κοινωνική προσφορά']
    },
    {
      id: 'q10',
      text: 'Πώς οργανώνεις τον χρόνο σου;',
      theory: 'Οργάνωση',
      options: ['Με αυστηρό πρόγραμμα', 'Με ευελιξία', 'Με προτεραιότητες', 'Αυθόρμητα']
    },
    {
      id: 'q11',
      text: 'Τι σε κουράζει περισσότερο στη δουλειά;',
      theory: 'Στρεσογόνοι Παράγοντες',
      options: ['Η πίεση', 'Η μονοτονία', 'Οι συγκρούσεις', 'Η αβεβαιότητα']
    },
    {
      id: 'q12',
      text: 'Πώς μαθαίνεις καλύτερα;',
      theory: 'Μαθησιακό Στυλ',
      options: ['Με πρακτική', 'Με θεωρία', 'Με συζήτηση', 'Με παρατήρηση']
    },
    {
      id: 'q13',
      text: 'Τι ρόλο προτιμάς σε μια ομάδα;',
      theory: 'Ηγεσία',
      options: ['Ηγέτης', 'Στρατηγικός', 'Υποστηρικτικός', 'Εκτελεστικός']
    },
    {
      id: 'q14',
      text: 'Πώς αντιμετωπίζεις τις αλλαγές;',
      theory: 'Προσαρμοστικότητα',
      options: ['Με ενθουσιασμό', 'Με επιφύλαξη', 'Με αντίσταση', 'Με ουδετερότητα']
    },
    {
      id: 'q15',
      text: 'Τι είδους επικοινωνία προτιμάς;',
      theory: 'Επικοινωνία',
      options: ['Άμεση', 'Γραπτή', 'Οπτική', 'Διαδραστική']
    },
    {
      id: 'q16',
      text: 'Ποια είναι η μεγαλύτερη δύναμή σου;',
      theory: 'Δυνάμεις',
      options: ['Αναλυτική σκέψη', 'Δημιουργικότητα', 'Επικοινωνία', 'Οργάνωση']
    },
    {
      id: 'q17',
      text: 'Πώς διαχειρίζεσαι τη σύγκρουση;',
      theory: 'Διαχείριση Συγκρούσεων',
      options: ['Με διάλογο', 'Με αποφυγή', 'Με επιμονή', 'Με συμβιβασμό']
    },
    {
      id: 'q18',
      text: 'Τι σε κάνει πιο παραγωγικό;',
      theory: 'Παραγωγικότητα',
      options: ['Η πίεση', 'Η ελευθερία', 'Οι στόχοι', 'Η ποικιλία']
    },
    {
      id: 'q19',
      text: 'Πώς αξιολογείς την επιτυχία;',
      theory: 'Αξίες',
      options: ['Με αποτελέσματα', 'Με προσωπική ικανοποίηση', 'Με αναγνώριση', 'Με κοινωνικό αντίκτυπο']
    },
    {
      id: 'q20',
      text: 'Ποιο είναι το ιδανικό σου εργασιακό μοντέλο;',
      theory: 'Εργασιακή Ισορροπία',
      options: ['Πλήρης απασχόληση', 'Μερική απασχόληση', 'Ελεύθερος επαγγελματίας', 'Τηλεργασία']
    }
  ];

  useEffect(() => {
    if (quizAnswers[questions[currentQuestion].id] !== undefined) {
      setSelectedAnswer(quizAnswers[questions[currentQuestion].id]);
    } else {
      setSelectedAnswer(null);
    }
  }, [currentQuestion, quizAnswers]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setQuizAnswers({
      ...quizAnswers,
      [questions[currentQuestion].id]: answerIndex
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onNext();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onPrev();
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-300" />
                <span className="text-white font-semibold">
                  Ερώτηση {currentQuestion + 1} από {questions.length}
                </span>
              </div>
              <div className="text-blue-200 text-sm bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                {currentQ.theory}
              </div>
            </div>
            
            <div className="w-full bg-white/20 rounded-full h-3 mb-6 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-500 shadow-lg shadow-purple-500/50"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              {currentQ.text}
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-6 rounded-xl border transition-all duration-300 text-left relative group transform hover:scale-[1.02] ${
                  selectedAnswer === index
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/50 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">{option}</span>
                  {selectedAnswer === index && (
                    <CheckCircle className="w-6 h-6 text-blue-300 animate-pulse" />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white 
                       hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30
                       transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Πίσω
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={selectedAnswer === null}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r 
                       from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold
                       hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300
                       transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                       disabled:hover:scale-100 shadow-lg shadow-purple-500/25 border border-white/10"
            >
              {currentQuestion === questions.length - 1 ? 'Τέλος' : 'Συνέχεια'}
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

export default QuizPage;