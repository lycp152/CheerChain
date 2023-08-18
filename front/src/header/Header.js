import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";
import "./Header.css";

const Header = ({ isLogin, setIsLoggedIn }) => {
  const navigation = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation("/");
  };

  // // MetaMask連携の処理
  // const handleConnectMetaMask = async () => {
  //   try {
  //     // MetaMaskとの接続処理を実行
  //     await window.ethereum.enable(); // ユーザーに接続を許可するダイアログが表示されます
  //     setIsLoggedIn(true); // ログイン状態に設定
  //   } catch (error) {
  //     console.error("MetaMask連携エラー:", error);
  //   }
  // };

  return (
    <header className="app-header">
      <Link to="/" className="header-logo">
        <h1>CheerChain</h1>
      </Link>
      <div className="header-links">
        {!isLogin && (
          <>
            {/* MetaMask連携ボタンを表示 */}
            <ConnectWallet
              theme="light"
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </>
        )}
        {isLogin && (
          <>
            <button onClick={() => navigation("/makeproject")}>
              プロジェクト作成
            </button>
            <button onClick={handleLogout}>MetaMask連携解除</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
