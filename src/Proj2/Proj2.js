import React, { useState } from 'react';
import CourseGoalList from './CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './CourseGoals/CourseInput/CourseInput';
import './Proj2.css';
import NoWish from '../images/Nothing_Found.svg'

const Proj2 = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Car', id: 'g1' },
    { text: 'House', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    console.log(goalId)
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <div className='img_box_wish'>
      <h3 style={{ textAlign: 'center', opacity: 0.9 }} className='no_goals'>No wishes found. Maybe add one?</h3>
      <img src={NoWish} className='img_no_wish' />
    </div>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <div className='row'>
        <div className='col-12 mx-5'>
          <div className='new-intro'>
            <h1>MY WISH!</h1>
          </div>
        </div>
      </div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default Proj2;
