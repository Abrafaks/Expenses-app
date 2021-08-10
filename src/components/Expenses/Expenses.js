import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../../UI/Card.js";

import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState(2021);
  const { expenses } = props;

  const filteredExpenses = expenses.filter((expense) => {
    console.log(year, expense.date.getFullYear());
    return expense.date.getFullYear() == year;
  });
  console.log(filteredExpenses);

  const expensesList = filteredExpenses.map((expense) => {
    return (
      <ExpenseItem
        key={Math.random().toString()}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    );
  });

  const dateHandler = (filterDate) => {
    setYear(filterDate);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter dateHandler={dateHandler} />
        <div>{expensesList}</div>
      </Card>
    </div>
  );
}

export default Expenses;
