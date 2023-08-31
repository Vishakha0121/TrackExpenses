import React from 'react';
import CardPending from '../UI_Pending/CardPending';
import './TaskList.css';
import noPays_task from '../../../images/Manage money-bro.svg';

const TaskList = (props) => {

    if (props.users.length === 0) {
        return (
          <div className='img_box_task'>
            <h2 className='task-list__fallback'>Hurray! No Pending Pays</h2>
            <img src={noPays_task} alt="" className='img_no_task'/>
          </div>
        )
      }
      const deleteHandler = (task) => {
        
        // setDeleteText('(Deleted!)');
        props.onDeleteTask(task);
      };

    return (
        <CardPending className='task_Pending'>
            <ul>
                {props.users.map((tasks) => (
                    <li key={tasks.id} onClick={()=>deleteHandler(tasks.id)}>{tasks.name} (Amount: {tasks.amount})</li>
                ))}
            </ul>
        </CardPending>
    );
}

export default TaskList;
 