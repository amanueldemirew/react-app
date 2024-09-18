import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import catagories from "./expense-tracker/catagories";

function App() {
  const [selectedCatagory, setSelectedCatagory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, catagories: "utilites" },
    { id: 2, description: "bbb", amount: 10, catagories: "utilites" },
    { id: 3, description: "ccc", amount: 10, catagories: "utilites" },
    { id: 4, description: "ddd", amount: 10, catagories: "utilites" },
  ]);

  const visibleExpense = selectedCatagory
    ? expenses.filter((e) => e.catagories === selectedCatagory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCatagory={(Catagories) => setSelectedCatagory(Catagories)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpense}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
