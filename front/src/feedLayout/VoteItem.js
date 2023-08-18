import React from "react";
import "./VoteComponent.css";
import { useConnectionStatus } from "@thirdweb-dev/react";

const VoteItem = ({
  option,
  votes,
  selected,
  disabled,
  onVote,
  totalVotes,
}) => {
  const percentage = totalVotes === 0 ? 0 : (votes / totalVotes) * 100;

  const connectionStatus = useConnectionStatus();

  const handleClick = async () => {
    if (!selected && !disabled) {
      if (connectionStatus === "disconnected") {
        try {
          // ウォレット接続用のポップアップを表示する
        } catch (error) {
          console.error("Error connecting to wallet:", error);
          // エラーメッセージを表示するなどの処理を行う
        }
      } else {
        onVote(option);
      }
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
