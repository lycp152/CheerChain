import React from "react";
import FeedLayout from "../feedLayout/FeedLayout";

const mockPostsData = [
  {
    id: 1,
    username: "アスタロー",
    userId: "@astaro",
    timestamp: "2023-07-05 10:00",
    content: "朝食は",
    mediaUrl: "", // メディアのURLを追加
    voteOptions: ["パン派", "ごはん派", "シリアル派"], // 投票の選択肢
  },
  {
    id: 2,
    username: "仮想 通子",
    userId: "@kaso-tsu-ko",
    timestamp: "2023-07-05 11:30",
    content: "仮想通貨を",
    mediaUrl: "", // メディアのURLを追加
    voteOptions: ["持っている", "持っていない"], // 投票の選択肢
  },
  // ここに好きなデータを追加できます
];

const HomeFeed = () => {
  return <FeedLayout posts={mockPostsData} />;
};

export default HomeFeed;
