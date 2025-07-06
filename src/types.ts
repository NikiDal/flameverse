export interface UserData {
  gender: string;
  age: string;
  status: string;
}

export interface QuizAnswers {
  [key: string]: number;
}

export interface ComponentProps {
  onNext: () => void;
  onPrev: () => void;
  userData: UserData;
  setUserData: (data: UserData) => void;
  quizAnswers: QuizAnswers;
  setQuizAnswers: (answers: QuizAnswers) => void;
  currentStep: number;
  totalSteps: number;
}

export interface Question {
  id: string;
  text: string;
  theory: string;
  options: string[];
}