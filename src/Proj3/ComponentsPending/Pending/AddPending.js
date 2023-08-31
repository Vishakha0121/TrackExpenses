import React from 'react';
import { useState } from 'react';
import CardPending from '../UI_Pending/CardPending';
import './AddPending.css'
import ButtonPending from '../UI_Pending/ButtonPending';
import ErrorModal from '../UI_Pending/ErrorModal';

const AddPending = (props) => {

    const [addEnteredTask, SetAddEnteredTask] = useState('')
    const [addEnteredTaskAmount, SetAddEnteredTaskAmount] = useState('')
    const [error,setError]=useState();
    const AddPendingHandler = (event) => {
        event.preventDefault();
        if(addEnteredTask.trim().length===0 || addEnteredTaskAmount.trim().length===0){
            setError({
                title:'Invalid Input',
                message:"Please enter a valid task and amount(non-empty values)."
            })
            return;
        }
        if(+addEnteredTaskAmount<1){
            setError({
                title:'Invalid Amount',
                message:"Please enter a valid amount(>1)."
            })
            return;
        }
        props.onAddTask(addEnteredTask,addEnteredTaskAmount);
        SetAddEnteredTask('');
        SetAddEnteredTaskAmount('');
    }

    const taskChangeHandler=(event)=>{
        SetAddEnteredTask(event.target.value)
    }
    const taskAmountChangeHandler=(event)=>{
        SetAddEnteredTaskAmount(event.target.value)
    }

    const  errorHandler=()=>{
        setError(null);
    }

    return (
       <div>
         {error&&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <CardPending className='input_Pending'>
            <form onSubmit={AddPendingHandler}>
                <label htmlFor='taskname'>Task</label>
                <input id='taskname' type='text' value={addEnteredTask} onChange={taskChangeHandler} />
                <label htmlFor='task_amount'>Amount</label>
                <input id='task_amount' type='number' value={addEnteredTaskAmount} onChange={taskAmountChangeHandler} />
                <ButtonPending type='submit'>Add</ButtonPending>
            </form>
        </CardPending>
       </div>
    );
}

export default AddPending;
