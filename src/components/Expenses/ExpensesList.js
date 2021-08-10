import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const { filteredExpenses } = props;
  let expensesList;

  if (filteredExpenses.length > 0) {
    expensesList = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={Math.random().toString()}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      );
    });
  } else {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return <ul className="expenses-list">{expensesList}</ul>;
};

export default ExpensesList;
