import ExpenseForm from "./components/ExpenseForm";
import { useEffect, useState } from "react";
import Expenses from "./components/Expenses";
function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Soap",
      date: new Date(2026, 11, 26),
      amount: 200,
    },
    {
      title: "Car",
      date: new Date(2026, 11, 26),
      amount: 700000,
    },
    {
      title: "Bike",
      date: new Date(2026, 11, 26),
      amount: 200000,
    },
  ]);

  useEffect(() => {
    console.log(JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense) => {
    console.log("handleExpense", JSON.stringify(expense));

    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  return (
    <>
      <div>I am App</div>
      <ExpenseForm addExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
