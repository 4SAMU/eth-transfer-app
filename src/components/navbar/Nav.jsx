import React, { useEffect, useState } from "react";
import "./nav.css";
import Sol from "../../assets/solidity.png"
import { ethers } from "ethers";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("Transfer");
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  


  const showBalance = async (currentAccount) => {
    try {
      const provider = new ethers.providers.WebSocketProvider("wss://eth-goerli.g.alchemy.com/v2/sLQ6yaCH5ykUITWx8na3rGlXASlwN7Ia")
      const balance = await provider.getBalance(currentAccount)
      console.log("balance =", parseFloat(ethers.utils.formatEther(balance)));
      setCurrentBalance(parseFloat(ethers.utils.formatEther(balance)).toPrecision(4) + " ETH")
    } catch (error) {
      console.log(error)
      
    }
  }




  const checkIfWalletIsConnected = async () => {

    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });


      if (accounts.length !== 0) {
        const account = accounts[0];

        console.log("Found an authorized account:", account);

        showBalance(account)
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");

      }

    } catch (error) {
      console.log(error);
    }
  };


  const connectedToWallet = async () => {
    if (connectWallet) {
      alert("Already connected to wallet!!!");
    } else {
      connectWallet()
    }
  };


  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  });

  return (
    <>
      <nav>
        <button className="buy-button">
          <a
            href="#Swap"
            onClick={() => setActiveNav("#Swap")}
            className={activeNav === "#Swap" ? "active" : ""}
          >
            Buy
          </a>
        </button>
        <button className="sell_btn">
          <a
            href="#Sell"
            onClick={() => setActiveNav("#Sell")}
            className={activeNav === "#Sell" ? "active" : ""}
          >
            Sell
          </a>
        </button>
        <button className="transfer-button">
          <a
            href="#Transfer"
            onClick={() => setActiveNav("#Transfer")}
            className={activeNav === "#Transfer" ? "active" : ""}
          >
            Transfer
          </a>
        </button>
        <div className="account_box">
          <div className="green_circle" >
            <img src={Sol} alt='Sol'></img>
          </div>

          <div className="account_box-text">Account</div>
          {currentAccount ? <button className="input_address_text">{currentAccount}</button> : <button className="input_address_notconnect ">oops! you're not connected to wallet!!</button>}

          <div className="acc-balance">Balance</div>
          {currentAccount ? <button className="acc-balance-txt">{currentBalance}</button> : <button className="acc-balance-txt">unknown</button>}
        </div>

        {/*button check on wallet connect*/}
        <div>
          {currentAccount ? <button className='connectwallet' onClick={connectedToWallet}>Connected to Wallet</button> : <button className='connectwallet' onClick={connectWallet}>Connect Wallet</button>}
        </div>
      </nav>
    </>
  );
};


export default Nav;
