import React from "react";
import FeedLayout from "../feedLayout/FeedLayout";

const mockPostsData = [
  {
    id: 1,
    username: "アスタロー",
    userId: "@astero",
    timestamp: "2023-07-05 10:00",
    content: "今朝の朝食は",
    mediaUrl: "", // メディアのURLを追加
    comments: 5,
    repost: 7,
    likes: 10,
  },
  {
    id: 2,
    username: "仮想 通子",
    userId: "@kaso-tsu-ko",
    timestamp: "2023-07-05 11:30",
    content:
      "仮想通貨の所有状況についてのアンケートを取りたいです！よろしくお願いします！",
    mediaUrl: "", // メディアのURLを追加
    comments: 8,
    repost: 10,
    likes: 20,
  },
  // ここに好きなデータを追加できます
];

const HomeFeed = () => {
  return <FeedLayout posts={mockPostsData} />;
};

export default HomeFeed;
