import { Question } from "../../model/question";

export interface IQuizState {
  questions: Question[];
  currentQuestionIndex: number;
  answerdQuestion: number;
  currentAnswer: string;
  correctAnswersCount: number;
  answerStatus: boolean | null;
  rank: number;
  showResult: boolean;
}
