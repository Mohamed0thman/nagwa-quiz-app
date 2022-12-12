import React from "react";

type Props = {
  label?: string;
  handleOnClick?: () => void;
  status?: string;
  disabled?: boolean;
  styleContainer?: React.CSSProperties;
  letterList?: string;
};

const AnswerButton = ({
  label,
  handleOnClick,
  status,
  disabled,
  styleContainer,
  letterList,
}: Props) => {
  return (
    <button
      onClick={handleOnClick}
      disabled={disabled}
      className={`custom-btn answer-gradient ${status}`}
      style={{
        ...styleContainer,
      }}
    >
      {letterList && <div className="custom-btn__number">{letterList}</div>}

      <div
        className="custom-btn__label"
        style={{
          color: "#fff",
        }}
      >
        {label}
      </div>
    </button>
  );
};

export default AnswerButton;
