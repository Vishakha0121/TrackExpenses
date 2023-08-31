import React, { useState } from 'react'; //allows us to reflect changes in components as react ignores them

import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


function ExpenseItem(props) {

    // const [title, setTitle]=useState(props.title);

    // const clickHandler =()=>{
    //     setTitle('Updated!');
    //     console.log(title);

    // }

    return (
        <li>
            <Card className="expense-item">

                <div className="expense-item__description">
                    <ExpenseDate date={props.date} />
                    <h2 >"{props.title}"</h2>
                    <div className="expense-item__price">
                        ${props.amount}
                    </div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card >F
        </li>
    );
}

export default ExpenseItem;