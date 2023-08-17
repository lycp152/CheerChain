import React from "react";
import "./VoteComponent.css";

const VoteItem = ({
  option,
  votes,
  selected,
  disabled,
  onVote,
  totalVotes,
}) => {
  const percentage = totalVotes === 0 ? 0 : (votes / totalVotes) * 100;

  const handleClick = () => {
    if (!selected && !disabled) {
      onVote(option);
    }
  };

  return (
    <div
      className={`vote-item ${selected ? "selected" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={handleClick}
    >
      <div className="vote-content">
        <span className="vote-option">{option}</span>
        {selected && (
          <span className="vote-count">
            {votes} 票 ({percentage.toFixed(1)}%)
          </span>
        )}
      </div>
      <div className="vote-bar">
        <div
          className="vote-bar-filled"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="vote-icon">{selected ? "✔️" : "◯"}</div>
    </div>
  );
};

export default VoteItem;
