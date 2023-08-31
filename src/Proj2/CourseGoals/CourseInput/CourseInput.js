import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(''); 
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label><h2 style={{color: !isValid?'red':'white'}}>Wish List</h2></label>
        <input type="text" onChange={goalInputChangeHandler} style={{backgroundColor: !isValid?'#ff8d8d':'',borderColor: !isValid?'red':''}} value={enteredValue}/>
      </div>
      <Button type="submit">My Wish</Button>
    </form>
  );
};

export default CourseInput;
