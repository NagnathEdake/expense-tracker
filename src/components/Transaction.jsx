import React from "react";

function Transaction() {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash
          <span>-$400</span>
          <button className="delete">x</button>
        </li>
      </ul>
    </>
  );
}

export default Transaction;