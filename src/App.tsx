import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import PersonalInfoForm from './components/PersonalInfoForm';
import QuizPage from './components/QuizPage';
import FeedbackPage from './components/FeedbackPage';
import GameIntroPage from './components/GameIntroPage';
import ScenarioPage from './components/ScenarioPage';
import GameFeedbackPage from './components/GameFeedbackPage';
import CareersPage from './components/CareersPage';
import OptionsPage from './components/OptionsPage';
import { UserData, QuizAnswers } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    gender: '',
    age: '',
    status: ''
  });
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({});

  const steps = [
    { component: LandingPage, title: 'Καλώς ήρθες' },
    { component: PersonalInfoForm, title: 'Προσωπικά Στοιχεία' },
    { component: QuizPage, title: 'Ερωτηματολόγιο' },
    { component: FeedbackPage, title: 'Ανάλυση Προσωπικότητας' },
    { component: GameIntroPage, title: 'Εισαγωγή Παιχνιδιού' },
    { component: ScenarioPage, title: 'Σενάριο' },
    { component: GameFeedbackPage, title: 'Ανάλυση Αποφάσεων' },
    { component: CareersPage, title: 'Επαγγελματικές Προτάσεις' },
    { component: OptionsPage, title: 'Επιλογές' }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {/* Large floating orbs with more colors */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 via-indigo-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Additional color layers */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
        
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
        </div>
      </div>
      
      {/* Enhanced glass overlay with color */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 to-black/40 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <CurrentComponent
          onNext={nextStep}
          onPrev={prevStep}
          userData={userData}
          setUserData={setUserData}
          quizAnswers={quizAnswers}
          setQuizAnswers={setQuizAnswers}
          currentStep={currentStep}
          totalSteps={steps.length}
        />
      </div>
    </div>
  );
}

export default App;