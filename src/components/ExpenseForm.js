import { useState, useEffect } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    console.log(title);
  }, [title]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(date);
    console.log(amount);
    props.addExpense({ title: title, date: date, amount: amount });
    setTitle("");
    setDate("");
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        <br />
        <br />
        <label htmlFor="title">Date: </label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={(event) => {
            setDate(new Date(event.target.value));
          }}
        />
        <br />
        <br />
        <label htmlFor="title">Amount: </label>
        <input
          type="text"
          name="amount"
          id="amount"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
          value={amount}
        />
        <br />
        <br />
        <input type="submit" name="submit" value="submit" />
      </form>
    </div>
  );
}

export default ExpenseForm;
