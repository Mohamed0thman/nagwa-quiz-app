import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/quiz";
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
};

//quiz end_point
const Quiz = {
  questions: () => requests.get("questions"),
  studentRank: (studentScore: number) =>
    requests.post(`result`, { score: studentScore }),
};
const agent = {
  Quiz,
};

export default agent;
