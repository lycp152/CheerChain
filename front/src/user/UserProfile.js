import React from "react";
import "./UserProfile.css";

const UserProfile = ({ userProfile }) => {
  return (
    <div className="profile-info">
      <img
        className="profile-picture"
        src={userProfile.profilePicture}
        alt="Profile"
      />
      <div className="username">{userProfile.username}</div>
      <div className="user-id">{userProfile.userId}</div>
      <div className="follow-info">
        <div className="follow">
          <span className="bold-number">{userProfile.following}</span>{" "}
          フォロー中
        </div>
        <div className="follower">
          <span className="bold-number">{userProfile.followers}</span>{" "}
          フォロワー
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
