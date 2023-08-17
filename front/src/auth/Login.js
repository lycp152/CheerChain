import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("全ての項目を入力してください。");
      return;
    }

    // ログイン処理
    // ログイン成功時にリダイレクト
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <h2>ログイン</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <label htmlFor="username">ユーザー名</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">パスワード</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error-message">{error}</p> {/* エラーメッセージを表示 */}
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;
