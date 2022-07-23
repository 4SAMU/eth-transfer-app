import React, { useState } from "react";
import "./Transferpage.css";
import "../../index.css";
import "../Swap-page/swappage.css";
import { transferAmount } from "../../utils/transfer"


function Transfer() {
  // const [value, setValue] = useState("");
  const [addressX, setAddressX] = useState("");
  const [amount, setAmount] = useState("")

  // const handleChange = (e) => {
  //   const result = e.target.value.replace();
  //   setValue(result);
  // };


  return (
    <section id="Transfer">
      <div className="container-D">
        <div className="header_name">SWAP CRYPTO</div>
        <div className="logo-button" />
        <div className="ksh">
          <div className="ksh-from">Transfer</div>
          <div className="ksh_text">ETH</div>
          <div className="ksh-amount">Amount</div>
          <div>
            <input
              type="text"
              placeholder="0"
              className="input-ksh-amount"
              value={amount}
              id={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="recipient-box">
          <div className="to-Text">To</div>
          <input
            type="text"
            placeholder="input address"
            id={addressX}
            value={addressX}
            onChange={(e) => setAddressX(e.target.value)}
            className="input_address">
          </input>
        </div>
        <button className="swap_button" id={addressX} value={addressX} onChange={(e) => setAddressX(e.target.value)} onClick={() => transferAmount(addressX, amount)} >Send</button>

      </div>
    </section>
  );
}

export default Transfer;
