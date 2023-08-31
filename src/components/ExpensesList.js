import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
import EmptyExpenses from '../images/EmptyExpenses.svg'
const ExpensesList = (props) => {

  let expensesContent = <p>No expenses found.</p>;

  if (props.items.length === 0) {
    return (
      <div className='img_box_expense'>
        <h2 className='expenses-list__fallback'>Found no expenses.</h2>
        <img src={EmptyExpenses} alt="" className='img_no_expense'/>
      </div>
    )
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
