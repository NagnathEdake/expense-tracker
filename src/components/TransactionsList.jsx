import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TransactionsList(props) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = props.tran.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={props.tran.amount < 0 ? "minus" : "plus"}>
        {props.tran.text}
        <span>
          {sign}${Math.abs(props.tran.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(props.tran.id)}
          className="delete-btn"
        >
          X
        </button>
      </li>
    </>
  );
}

export default TransactionsList;
