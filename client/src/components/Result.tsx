import { useContext, useEffect, useState } from "react";
import agent from "../api/agent";
import { AppContext } from "../context/AppContext";
import { QuizTypeAction } from "../context/quiz/quiz.type";
import AnswerButton from "./AnswerButton";
import CustomProgressBar from "./CustomProgressBar";
import CustomSpinner from "./CustomSpinner";

const Result = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const controller = new AbortController();

    fetchResult();

    return () => controller.abort();
  }, []);

  /// fetch rank
  async function fetchResult() {
    try {
      setIsLoading(true);

      /// final student score by %
      const studentScore =
        (state.correctAnswersCount / state.questions.length) * 100;
      //send student score and get his rank
      await agent.Quiz.studentRank(studentScore)
        .then((res) => {
          dispatch({
            type: QuizTypeAction.GetStudentRank,
            payload: res.data,
          });
        })
        .catch((err) => setError(err.response.data.message))
        .finally(() => setIsLoading(false));
    } catch {
      setError("Something bad happened");
    }
  }

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1
        className="title"
        style={{
          marginBottom: "10px",
        }}
      >
        Congratulations
      </h1>
      <h3
        className="subtitle"
        style={{
          marginBottom: "15px",
        }}
      >
        Your Rank Is
      </h3>
      <h1
        className="larg-title"
        style={{
          marginBottom: "30px",
        }}
      >
        {state.rank}%
      </h1>

      <AnswerButton
        label="Try Again"
        status="primary-gradient"
        handleOnClick={() =>
          dispatch({
            type: QuizTypeAction.Restart,
          })
        }
        styleContainer={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <CustomProgressBar
        answerdQuestion={state.answerdQuestion}
        totalQuestions={state.questions.length}
        styleContainer={{
          marginTop: "50px",
        }}
      />
    </>
  );
};

export default Result;
