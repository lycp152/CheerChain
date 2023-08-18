import React from "react";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

const Profile = () => {
  const userProfile = {
    profilePicture: "URL_TO_PROFILE_PICTURE",
    username: "ねこねこ🐈",
    userId: "@nekoneko",
    followers: 1000,
    following: 500,
  };

  return (
    <div className="profile-container">
      <UserProfile userProfile={userProfile} />
      <UserPosts />
    </div>
  );
};

export default Profile;
