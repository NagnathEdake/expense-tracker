import { useState } from "react";
import "../App.css";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import Transaction from "./Transaction";
import AddTransaction from "./AddTransaction";

import { GlobalProvider } from "../context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
        </div>
        <IncomeExpense />
        <Transaction />
        <AddTransaction />
      </GlobalProvider>
    </>
  );
}

export default App;
