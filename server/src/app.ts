import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import Cors from "cors";
import bodyParser from "body-parser";

import routes from "./routes";
import errorMiddleware from "./middleware/error.middleware";
import config from "./config";

const corsOption = {};

const PORT = config.port || 3000;
// create an instance server
const app: Application = express();
// Middleware to parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
// HTTP request logger middleware
app.use(morgan("common"));
// HTTP security middleware headers
app.use(helmet());

app.use(bodyParser.json());

app.use(Cors(corsOption));

app.use("/api", routes);

app.get("/", function (_req: Request, res: Response) {
  res.send("Hello World");
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("connected successfully on port" + PORT);
});
export default app;
