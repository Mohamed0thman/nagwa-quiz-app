import React from "react";
import { Question } from "../model/question";

type Props = {
  question?: Question;
  num: number;
  styleContainer?: React.CSSProperties;
};

const QuestionView = ({ question, num, styleContainer }: Props) => {

  return (
    <div
      className="custom-btn black-gradient d-flex  align-items-center"
      style={{ ...styleContainer }}
    >
      <div className="custom-btn__number">Q{num + 1}</div>

      <div className="custom-btn__label"> {question?.word}</div>
    </div>
  );
};

export default QuestionView;
