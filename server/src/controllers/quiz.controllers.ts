import { NextFunction, Request, Response } from "express";
import QuizModel from "../model/quiz.model";

const quizModel = new QuizModel();

export const getRandomQuestion = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const randomQuestions = await quizModel.getRandomQuestions();

    res.json({
      status: "success",
      data: randomQuestions,
      message: "User retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const finalScore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const studentRank = await quizModel.finalScore(req.body.score);
    res.json({
      status: "success",
      data: studentRank,
      message: "student get his rank successfully",
    });
  } catch (err) {
    next(err);
  }
};
