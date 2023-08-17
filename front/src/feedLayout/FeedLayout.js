import React from "react";
import PostsLayout from "./PostsLayout";
import PostForm from "../postform/PostForm";

const FeedLayout = ({ posts }) => {
  return (
    <>
      <PostsLayout posts={posts} />
    </>
  );
};

export default FeedLayout;
