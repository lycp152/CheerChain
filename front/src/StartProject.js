import React, { useState } from "react";
import "./StartProject.css"; // スタイルを適用するためのスタイルシート

const StartProject = () => {
  const [content, setContent] = useState("");
  const [voteOptions, setVoteOptions] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleVoteOptionsChange = (e) => {
    setVoteOptions(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォームのデータを使用して新しい投稿を作成する処理を追加
  };

  return (
    <div className="start-project">
      <h2>新しい投稿を作成</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label>投稿内容：</label>
        <textarea value={content} onChange={handleContentChange} required />
        <br />
        <label>投票選択肢：</label>
        <input
          type="text"
          placeholder="選択肢をカンマで区切って入力（例: 選択肢1, 選択肢2, 選択肢3）"
          value={voteOptions}
          onChange={handleVoteOptionsChange}
          required
        />
        <br />
        <button type="submit">投稿する</button>
      </form>
    </div>
  );
};

export default StartProject;
