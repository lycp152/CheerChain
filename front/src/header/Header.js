import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ConnectWallet,
  useConnectionStatus,
  useAddress,
} from "@thirdweb-dev/react";
import { IconButton, ThemeProvider, createTheme } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";

const Header = ({ isLogin, setIsLoggedIn }) => {
  const navigation = useNavigate();
  const connectionStatus = useConnectionStatus();

  // テーマを作成
  const theme = createTheme();
  const address = useAddress();

  // ConnectWalletが接続されたときの処理
  const handleConnect = () => {
    console.log(address); // コンソールにログを出力
  };

  return (
    <ThemeProvider theme={theme}>
      <header className="app-header">
        <Link to="/" className="header-logo">
          <h1>CheerChain</h1>
        </Link>
        <div className="header-links">
          {connectionStatus === "connected" && (
            <>
              <button onClick={() => navigation("/StartVote")}>
                投票を作成
              </button>
              {/* プロフィールページへのリンク */}
              <IconButton
                component={Link}
                to="/profile"
                aria-label="プロフィール"
                className="header-button"
                sx={{
                  width: "56px", // カスタムのアイコン幅
                  height: "56px", // カスタムのアイコン高さ
                  "&:hover": {
                    background: "transparent", // ホバー時の背景を透明にする
                  },
                }}
              >
                <AccountCircleIcon sx={{ fontSize: "40px", color: "#fff" }} />{" "}
                {/* カスタムのアイコンサイズと色 */}
              </IconButton>
            </>
          )}
          {/* MetaMask連携ボタンを表示 */}
          <ConnectWallet
            theme="light"
            dropdownPosition={{
              side: "bottom",
              align: "center",
            }}
            className="header-button"
            onConnect={handleConnect}
          />
        </div>
      </header>
    </ThemeProvider>
  );
};

export default Header;
