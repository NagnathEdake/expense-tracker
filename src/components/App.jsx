import { useState } from "react";
import "../App.css";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import Transaction from "./Transaction";
import AddTransaction from "./AddTransaction";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <IncomeExpense />
      <Transaction />
      <AddTransaction />
    </>
  );
}

export default App;
