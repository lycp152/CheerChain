import React from "react";
import MockPosts from "../feedLayout/PostsLayout";

const mockPostsData = [
  {
    id: 1,
    username: "アスタロー",
    userId: "@astaro",
    timestamp: "2023-07-05 10:00",
    content: "ここに自分の投稿履歴を追加",
    mediaUrl: "", // メディアのURLを追加
    comments: 5,
    repost: 7,
    likes: 10,
  },
  {
    id: 2,
    username: "アスタロー",
    userId: "@astaro",
    timestamp: "2023-07-05 11:30",
    content: "ここに自分の投稿履歴を追加",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  // ここに好きなデータを追加できます
];

const UserPosts = () => {
  return (
    <div className="page-contentFeed">
      <MockPosts posts={mockPostsData} />
    </div>
  );
};

export default UserPosts;
