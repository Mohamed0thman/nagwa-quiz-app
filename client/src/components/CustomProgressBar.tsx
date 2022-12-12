import React from "react";
import { ProgressBar } from "react-bootstrap";

type Props = {
  answerdQuestion: number;
  totalQuestions: number;
  styleContainer?: React.CSSProperties;
};

const CustomProgressBar = ({
  answerdQuestion,
  totalQuestions,
  styleContainer,
}: Props) => {
  const progress: number = Math.floor((answerdQuestion / totalQuestions) * 100);

  function changeColor(progress: number) {
    if (progress > 0 && progress < 30) {
      return "red-progress-bar";
    } else if (progress >= 30 && progress < 60) {
      return "yellow-progress-bar";
    } else if (progress >= 60 && progress < 90) {
      return "green-progress-bar";
    } else if (progress <= 100) {
      return "blue-progress-bar";
    }
  }

  return (
    <div
      style={{
        ...styleContainer,
        width: "90%",
      }}
    >
      <p style={{ textAlign: "left" }}>Progress</p>
      <ProgressBar
        className={`${changeColor(progress)}`}
        now={Math.floor((answerdQuestion / totalQuestions) * 100)}
      />
      <p>{progress ? progress : 0 + "%"}</p>
    </div>
  );
};

export default CustomProgressBar;
