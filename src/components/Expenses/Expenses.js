import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card.js";

import "./Expenses.css";

function Expenses(props) {
  const { expenses } = props;
  const expensesList = expenses.map((expense) => {
    return (
      <ExpenseItem
        key={Math.random().toString()}
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
