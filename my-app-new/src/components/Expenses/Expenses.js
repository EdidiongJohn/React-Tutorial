import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("");
  const filterYearHandler = (year) => {
    setSelectedYear(year);
    // console.log(selectedYear);
    // console.log(year);-
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterYear={filterYearHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
