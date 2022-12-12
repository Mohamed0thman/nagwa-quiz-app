import dotnv from "dotenv";

dotnv.config();
console.log(process.env.PORT);
const { PORT } = process.env;

export default {
  port: PORT,
};
