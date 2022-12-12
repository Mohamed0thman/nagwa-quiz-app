import QuizModel from "../model/quiz.model";
const quizModel = new QuizModel();

describe("helpers test", () => {
  it("test random 10 questions", async () => {
    const result = (await quizModel.getRandomQuestions()).length;
    expect(result).toBe(10);
  });

  it("test student rank ", async () => {
    const result = await quizModel.finalScore(90);
    expect(result).toEqual(80);
  });
});
