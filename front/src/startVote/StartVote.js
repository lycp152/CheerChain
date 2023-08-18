import React, { useState } from "react";
import "./StartVote.css";

const StartVote = () => {
  const [content, setContent] = useState("");
  const [voteOptions, setVoteOptions] = useState("");
  const [rewardAmount, setRewardAmount] = useState("");
  const [recruitmentCount, setRecruitmentCount] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleVoteOptionsChange = (e) => {
    setVoteOptions(e.target.value);
  };

  const handleRewardAmountChange = (e) => {
    setRewardAmount(e.target.value);
  };

  const handleRecruitmentCountChange = (e) => {
    setRecruitmentCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVote = {
      content,
      voteOptions: voteOptions.split(",").map((option) => option.trim()),
      rewardAmount: parseFloat(rewardAmount),
      recruitmentCount: parseInt(recruitmentCount), // 募集する投票数を整数に変換
    };
    console.log(newVote);
  };

  return (
    <div className="start-project">
      <h2>新しい投票を作成</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label>質問：</label>
        <textarea
          value={content}
          onChange={handleContentChange}
          required
          placeholder="例: どのお菓子が一番好き？"
        />
        <br />
        <label>投票選択肢</label>
        <input
          type="text"
          placeholder="選択肢をカンマで区切って入力（例: きのこ, たけのこ, すぎのこ）"
          value={voteOptions}
          onChange={handleVoteOptionsChange}
          required
        />
        <br />
        <label>報酬(ASTR)：</label>
        <input
          type="number"
          step="0.01"
          value={rewardAmount}
          onChange={handleRewardAmountChange}
          required
          placeholder="0.01"
        />
        <br />
        <label>募集する投票数：</label>
        <input
          type="number"
          value={recruitmentCount}
          onChange={handleRecruitmentCountChange}
          required
          placeholder="100"
        />
        <br />
        <button type="submit">投票を開始</button>
      </form>
    </div>
  );
};

export default StartVote;
