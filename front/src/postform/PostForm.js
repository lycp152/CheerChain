import React, { useState } from "react";
import "./PostForm.css";

const PostForm = () => {
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleMediaChange = (event) => {
    setMedia(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // フォームの送信処理を実行
    // content と media を利用して投稿処理を行う
    console.log("投稿が送信されました:", content, media);

    // フォームをリセット
    setContent("");
    setMedia(null);
  };

  return (
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="投稿内容を入力してください"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <input type="file" accept="image/*" onChange={handleMediaChange} />
        <button type="submit">投稿する</button>
      </form>
    </div>
  );
};

export default PostForm;
