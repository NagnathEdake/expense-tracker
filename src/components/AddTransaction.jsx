import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function AddTransaction() {
  const { addTran } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTran(newTransaction);
  };

  function handleText(e) {
    setText(e.target.value);
  }
  function handleAmount(e) {
    setAmount(e.target.value);
  }
  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={handleText}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmount}
            placeholder="Enter amount..."
          />
        </div>
        <button onClick={onSubmit} className="btn">
          Add Transaction
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
