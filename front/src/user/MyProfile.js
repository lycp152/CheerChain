import React from "react";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

const Profile = () => {
  const userProfile = {
    profilePicture: "URL_TO_PROFILE_PICTURE",
    username: "アスタロー",
    userId: "@astaro",
    followers: 1000,
    following: 500,
  };

  return (
    <div className="profile-container">
      <UserProfile userProfile={userProfile} />
      <UserPosts UserPosts={userProfile} />
    </div>
  );
};

export default Profile;
