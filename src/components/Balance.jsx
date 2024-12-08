import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce(
    (prevalue, currvalue) => (prevalue += currvalue),
    0
  );
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${Math.abs(total).toFixed(2)}</h1>
    </>
  );
}

export default Balance;
