import { wordList, scoresList } from "../data/TestData.json";
import { getRandomQuestion, getStudentRank } from "../helpers";
import Question from "../types/question.types";
class QuizModel {
  // get random ten  Questions
  async getRandomQuestions(): Promise<Question[]> {
    try {
      const randomQuestions = getRandomQuestion(wordList, 10);

      return randomQuestions;
    } catch (error) {
      throw new Error(
        `Error at retrieving questions ${(error as Error).message}`
      );
    }
  }

  // take student score and return rank by %
  async finalScore(studentScore: number): Promise<number> {
    try {
      const studentRank = getStudentRank(scoresList, studentScore);

      return studentRank;
    } catch (error) {
      throw new Error(`Error at retrieving result ${(error as Error).message}`);
    }
  }
}
export default QuizModel;
