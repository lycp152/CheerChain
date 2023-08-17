import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("全ての項目を入力してください。");
      return;
    }

    // サインアップ処理
    // サインアップ成功時にリダイレクト
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <h2>サインアップ</h2>
      <form className="auth-form" onSubmit={handleSignup}>
        <label htmlFor="username">ユーザー名</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">パスワード</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error-message">{error}</p> {/* エラーメッセージを表示 */}
        <button type="submit">サインアップ</button>
      </form>
    </div>
  );
};

export default Signup;
