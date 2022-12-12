import { Router } from "express";
import * as controllers from "../../controllers/quiz.controllers";

const routes = Router();
// // api/quiz/questions
routes.route("/questions").get(controllers.getRandomQuestion);

// // api/quiz/result
routes.route("/result").post(controllers.finalScore);

export default routes;
