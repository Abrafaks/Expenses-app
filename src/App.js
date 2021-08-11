import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
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

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
