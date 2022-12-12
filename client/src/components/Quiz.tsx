import { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import agent from "../api/agent";
import { AppContext } from "../context/AppContext";
import { QuizTypeAction } from "../context/quiz/quiz.type";
import { Answer } from "../model/answer";
import AnswerButton from "./AnswerButton";
import CustomProgressBar from "./CustomProgressBar";
import CustomSpinner from "./CustomSpinner";
import QuestionView from "./QuestionView";

const answers: Answer[] = [
  { id: 1, letter: "A", answer: "adverb" },
  { id: 2, letter: "B", answer: "verb" },
  { id: 3, letter: "C", answer: "noun" },
  { id: 4, letter: "D", answer: "adjective" },
];

const Quiz = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { state, dispatch } = useContext(AppContext);

  const [selectedButtonIndex, setSelectedButtonIndex] = useState<
    number | null
  >();
  const [canAnswer, setCanAnswer] = useState<boolean>(true);

  const handleOnClick = (answer: string, buttonIndex: number) => {
    // dispatch selected answer
    dispatch({ type: QuizTypeAction.SelectAnswer, payload: answer });
    // target selected button
    setSelectedButtonIndex(buttonIndex);
    // disable button
    setCanAnswer(false);
    // wait .5s then  transfer to next question
    setTimeout(() => {
      dispatch({ type: QuizTypeAction.NextQuestion });
      setSelectedButtonIndex(null);
      setCanAnswer(true);
    }, 500);
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchQuestions();

    return () => controller.abort();
  }, []);

  // fetch questions data
  async function fetchQuestions() {
    // set loading to true
    setIsLoading(true);
    try {
      await agent.Quiz.questions()
        .then((res) => {
          dispatch({
            type: QuizTypeAction.FetchQuestions,
            payload: res.data,
          });
        })
        .catch((err) => setError(err.response.data.message))
        .finally(() => setIsLoading(false));
    } catch (error) {
      setError("Something bad happened");
    }
  }

  /// change button answer status to show if answer correct or incorrect
  function buttonStatus(index: number) {
    const correctAnswer: boolean =
      state.currentAnswer === state.questions[state.currentQuestionIndex]?.pos;

    if (selectedButtonIndex === index && correctAnswer) {
      return "correct";
    } else if (selectedButtonIndex === index && !correctAnswer) {
      return "incorrect";
    }
    return "";
  }

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div
      className=" d-flex flex-column justify-content-center align-items-center  "
      style={{ width: "80%", paddingTop: "40px" }}
    >
      <h1 className="title" style={{ marginBottom: "50px" }}>
        Part of Speech Quiz
      </h1>

      {state.questions.length ? (
        <QuestionView
          question={state.questions[state.currentQuestionIndex]}
          num={state.currentQuestionIndex}
          styleContainer={{ marginBottom: "50px" }}
        />
      ) : null}

      <Row>
        {answers.map((item: Answer, index: number) => (
          <Col className=" d-flex justify-content-center" key={item.id}>
            <AnswerButton
              label={item.answer}
              handleOnClick={() => handleOnClick(item.answer, index)}
              status={buttonStatus(index)}
              disabled={!canAnswer}
              letterList={item.letter}
              styleContainer={{ marginBottom: "30px" }}
            />
          </Col>
        ))}
      </Row>
      <CustomProgressBar
        answerdQuestion={state.answerdQuestion}
        totalQuestions={state.questions.length}
        styleContainer={{
          marginTop: "50px",
        }}
      />
    </div>
  );
};

export default Quiz;
