import React from "react";
import PostsLayout from "./PostsLayout";

const FeedLayout = ({ posts }) => {
  return (
    <>
      <PostsLayout posts={posts} />
    </>
  );
};

export default FeedLayout;
