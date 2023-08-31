import React,{useState} from 'react';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';
import Card from './components/Card';
import bgimg from './images/359497-4k-wallpaper.jpg'
import './App.css'

const Dummy_Expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses)

  const addExpenseHandler = expense => {
    // console.log('In App.js');
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className='App'>
      <div className='row'>
        <div className='col-12 mx-5'>
          <div className='new-intro'>
            <h1>EXPENSE TRACKER</h1>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 px-5 mx-5'>
          <NewExpense onAddExpense={addExpenseHandler} />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 mx-5' style={{marginBottom:"1rem"}}>
          <Expenses items={expenses} />
        </div>
      </div>

    </div>
  );
}

export default ExpenseTracker;
