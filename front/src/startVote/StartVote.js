import React, { useState } from "react";
import "./StartVote.css"; // スタイルを適用するためのスタイルシート

const StartVote = () => {
  const [content, setContent] = useState("");
  const [voteOptions, setVoteOptions] = useState("");
  const [rewardAmount, setRewardAmount] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleVoteOptionsChange = (e) => {
    setVoteOptions(e.target.value);
  };

  const handleRewardAmountChange = (e) => {
    setRewardAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォームのデータを使用して新しい投稿を作成する処理を追加
    const newVote = {
      content,
      voteOptions: voteOptions.split(",").map((option) => option.trim()),
      rewardAmount: parseFloat(rewardAmount), // 仮想通貨の量を浮動小数点数に変換
    };
    console.log(newVote); // 作成した投票をログに表示
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
          step="0.01" // 小数を許可するためのステップ値
          value={rewardAmount}
          onChange={handleRewardAmountChange}
          required
          placeholder="0.01"
        />
        <br />
        <button type="submit">投票を開始</button>
      </form>
    </div>
  );
};

export default StartVote;
