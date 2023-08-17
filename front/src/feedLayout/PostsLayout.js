import React from "react";
import "./PostsLayout.css";
import VoteComponent from "./VoteComponent";

const PostsLayout = ({ posts }) => {
  return (
    <div>
      {/* 投稿をマップ表示 */}
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <span className="username">{post.username}</span>
            <span className="userId">{post.userId}</span>
            <span className="timestamp">{post.timestamp}</span>
          </div>
          <div className="post-content">{post.content}</div>
          {post.mediaUrl && <img src={post.mediaUrl} alt="Post Media" />}
          {/* 投稿ごとに異なる選択肢を持つ投票コンポーネントを追加 */}
          {post.voteOptions && <VoteComponent options={post.voteOptions} />}
        </div>
      ))}
    </div>
  );
};

export default PostsLayout;
