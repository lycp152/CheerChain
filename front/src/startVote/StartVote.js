import React, { useState } from "react";
import "./StartVote.css";

const StartVote = () => {
  const [formData, setFormData] = useState({
    content: "",
    voteOptions: "",
    rewardAmount: "",
    recruitmentCount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVote = {
      ...formData,
      voteOptions: formData.voteOptions
        .split(",")
        .map((option) => option.trim()),
      rewardAmount: parseFloat(formData.rewardAmount),
      recruitmentCount: parseInt(formData.recruitmentCount),
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
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          required
          placeholder="例: どのお菓子が一番好き？"
        />
        <br />
        <label>投票選択肢</label>
        <input
          type="text"
          name="voteOptions"
          placeholder="選択肢をカンマで区切って入力（例: きのこ, たけのこ, すぎのこ）"
          value={formData.voteOptions}
          onChange={handleInputChange}
          required
        />
        <br />
        <label>報酬(ASTR)：</label>
        <input
          type="number"
          step="0.01"
          name="rewardAmount"
          value={formData.rewardAmount}
          onChange={handleInputChange}
          required
          placeholder="0.01"
        />
        <br />
        <label>募集する投票数：</label>
        <input
          type="number"
          name="recruitmentCount"
          value={formData.recruitmentCount}
          onChange={handleInputChange}
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
