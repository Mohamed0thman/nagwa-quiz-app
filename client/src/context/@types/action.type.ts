import { Question } from "../../model/question";
import { QuizTypeAction } from "../quiz/quiz.type";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type QuizPayload = {
  [QuizTypeAction.FetchQuestions]: Question[];
  [QuizTypeAction.SelectAnswer]: string;
  [QuizTypeAction.NextQuestion]: undefined;
  [QuizTypeAction.GetStudentRank]: number;
  [QuizTypeAction.Restart]: null;
};
export type QuizActions = ActionMap<QuizPayload>[keyof ActionMap<QuizPayload>];
