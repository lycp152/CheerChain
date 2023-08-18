import React from "react";
import { Link } from "react-router-dom"; // react-router-dom の Link をインポート
import "./PostsLayout.css";
import VoteComponent from "./VoteComponent";

const PostsLayout = ({ posts }) => {
  return (
    <div>
      {/* 投稿をマップ表示 */}
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            {/* ユーザー名をクリックすると該当の URL に遷移 */}
            <Link to={`/user/${post.userId}`} className="username">
              {post.username}
            </Link>
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
