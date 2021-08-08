import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card.js";

import "./Expenses.css";

function Expenses() {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 294.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Car insurance",
      amount: 294.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car insurance",
      amount: 294.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "xd",
      amount: 294.12,
      date: new Date(2021, 2, 28),
    },
  ];

  const expensesList = expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    );
  });

  return (
    <Card className="expense-item">
      <div className="expenses">{expensesList}</div>{" "}
    </Card>
  );
}

export default Expenses;
