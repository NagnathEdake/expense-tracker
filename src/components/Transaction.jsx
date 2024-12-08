import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TransactionsList from "./TransactionsList";

function Transaction() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TransactionsList key={transaction.id} tran={transaction} />
        ))}
      </ul>
    </>
  );
}

export default Transaction;
