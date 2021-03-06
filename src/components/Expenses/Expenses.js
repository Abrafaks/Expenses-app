import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../../UI/Card.js";

import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState(2022);
  const { expenses } = props;

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year.toString();
  });

  const dateHandler = (filterDate) => {
    setYear(filterDate);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter dateHandler={dateHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
