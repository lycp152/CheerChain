import React, { useState } from 'react';

import { Header } from "./src/header/Header";
import { StartVote } from "./src/startVote/StartVote";
import { VoteComponent } from "./src/feedLayout/VoteComponent";

const Send = ({  }) => {
    
  const handleSubmit = async () => {
    
    fetch('http://localhost:3001/vote/submit')
      .then(address => ownerid)
      .then(formData.content => title)
      .then(formData.voteOptions => item)
      .then(formData.rewardAmount => reward)
      .then(formData.recruitmentCount => count)
      
      .then(voteid => index)
      .then(respondentid => address)
      .then(selecteditem => selectedOption)
      .catch();
  };

  return (
    <div>
      <h1>APIリクエストの送信</h1>
      <button onClick={handleSubmit}>送信</button>
    </div>
  );
};

export default Send;