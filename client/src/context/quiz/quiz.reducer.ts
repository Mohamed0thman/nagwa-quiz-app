import { QuizActions } from "../@types/action.type";
import { QuizTypeAction } from "./quiz.type";

import { IQuizState } from "../@types/state.type";


export const quizState: IQuizState = {
  questions: [],
  currentQuestionIndex: 0,
  answerdQuestion: 0,
  correctAnswersCount: 0,
  currentAnswer: "",
  answerStatus: null,
  rank: 0,
  showResult: false,
};

const quizReducer = (state: IQuizState, action: QuizActions) => {
  switch (action.type) {
    case QuizTypeAction.FetchQuestions: {
      return {
        ...state,
        questions: action.payload,
      };
    }
    case QuizTypeAction.SelectAnswer: {
      const correctAnswer =
        state.questions[state.currentQuestionIndex]?.pos
          .toLowerCase()
          .trim() === action.payload.trim().toLowerCase();

      return {
        ...state,
        currentAnswer: action.payload,
        answerStatus: correctAnswer ? true : false,
        correctAnswersCount: correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount,
      };
    }
    case QuizTypeAction.NextQuestion: {
      const hasQuestion =
        state.currentQuestionIndex < state.questions?.length - 1;

      return {
        ...state,
        currentAnswer: "",
        currentQuestionIndex: hasQuestion
          ? state.currentQuestionIndex + 1
          : state.currentQuestionIndex,

        showResult: hasQuestion ? false : true,
        answerdQuestion: state.answerdQuestion + 1,
      };
    }
    case QuizTypeAction.GetStudentRank: {
      return {
        ...state,
        rank: action.payload,
      };
    }
    case QuizTypeAction.Restart: {
      return quizState;
    }
    default:
      return state;
  }
};

export default quizReducer;
