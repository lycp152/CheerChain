import React, { useState } from "react";
import VoteItem from "./VoteItem";

const VoteComponent = ({ question, options }) => {
  const [votes, setVotes] = useState(options.map(() => 0));
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = votes.reduce((total, count) => total + count, 0);

  const handleVote = (selectedOption) => {
    if (!hasVoted) {
      const optionIndex = options.indexOf(selectedOption);
      if (optionIndex !== -1) {
        const newVotes = [...votes];
        newVotes[optionIndex] += 1;
        setVotes(newVotes);
        setSelectedOption(selectedOption);
        setHasVoted(true);
      }
    }
  };

  return (
    <div className="vote-component">
      <h2 className="vote-question">{question}</h2>
      <div className="vote-options">
        {options.map((option, index) => (
          <VoteItem
            key={index}
            option={option}
            votes={votes[index]}
            selected={selectedOption === option}
            disabled={hasVoted}
            onVote={handleVote}
            totalVotes={totalVotes}
          />
        ))}
      </div>
    </div>
  );
};

export default VoteComponent;
