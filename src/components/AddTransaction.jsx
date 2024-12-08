import React from "react";

function AddTransaction() {
  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount">Amount</label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
