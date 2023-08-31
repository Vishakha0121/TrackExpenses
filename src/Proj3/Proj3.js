import React, { useState } from 'react';
import AddPending from './ComponentsPending/Pending/AddPending';
import TaskList from './ComponentsPending/Pending/TaskList';
import '../App.css'
const Proj3 = () => {

    const [taskList, setTaskList] = useState([]);

    const addTaskHandler = (uname, uamount) => {
        setTaskList((prevList) => {
            return [...prevList, { name: uname, amount: uamount, id: Math.random().toString() }]
        })
    };

    const deleteItemHandler = tListId => {
        setTaskList(prevList => {
          const updatedTask = prevList.filter(tList => tList.id !== tListId);
          return updatedTask;
        });
      };

    return (
        <div>
            <div className='row'>
                <div className='col-12 mx-5'>
                    <div className='new-intro'>
                        <h1>PENDING!</h1>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 mx-5'>
                    <AddPending onAddTask={addTaskHandler} />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 mx-5'>
                    {/* {taskList.length>0 && taskList.map((user)=>{
                        return <TaskList users={user} onDeleteTask={deleteItemHandler}/>
                    })} */}
                    <TaskList users={taskList} onDeleteTask={deleteItemHandler}/>
                </div>
            </div>


        </div>
    );
}

export default Proj3;
