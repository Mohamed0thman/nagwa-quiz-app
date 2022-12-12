import express from "express";
import quizRoutes from "./api/quiz";

const routes = express.Router();

routes.use("/quiz", quizRoutes);

export default routes;
