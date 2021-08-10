import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
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

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
