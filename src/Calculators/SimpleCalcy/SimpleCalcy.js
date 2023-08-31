import React, { useState } from 'react';
import './SimpleCalcy.css';

const SimpleCalcy = () => {
    const[result,setResult]=useState('');

    const handleClick = (e)=>{
        setResult(result.concat(e.target.name));
    }

    const clear=(e)=>{
        setResult('');
    }
    const backspace=(e)=>{
        setResult(result.slice(0,-1))
    }
    const calculate=(e)=>{
        try{
            setResult(eval(result).toString());
        }catch(err){
            setResult("Error")
        }
        
    }
  return (
    <div className='container calcy'>
        <form>
            <input type="text" value={result} className='simpCalcIn' readOnly />
        </form>
        <div className='keypad'>
            <button className='calcyButton highlight' id='clear' onClick={clear}>Clear</button>
            <button className='calcyButton highlight' id='backspace' onClick={backspace}>C</button>
            <button className='calcyButton highlight' name='/' onClick={handleClick}>&divide;</button>
            <button className='calcyButton' name='7' onClick={handleClick}>7</button>
            <button className='calcyButton' name='8' onClick={handleClick}>8</button>
            <button className='calcyButton' name='9' onClick={handleClick}>9</button>
            <button className='calcyButton highlight' name='*' onClick={handleClick}>&times;</button>
            <button className='calcyButton' name='4' onClick={handleClick}>4</button>
            <button className='calcyButton' name='5' onClick={handleClick}>5</button>
            <button className='calcyButton' name='6' onClick={handleClick}>6</button>
            <button className='calcyButton highlight' name='-' onClick={handleClick}>&ndash;</button>
            <button className='calcyButton' name='1' onClick={handleClick}>1</button>
            <button className='calcyButton' name='2' onClick={handleClick}>2</button>
            <button className='calcyButton' name='3' onClick={handleClick}>3</button>
            <button className='calcyButton highlight' name='+' onClick={handleClick}>+</button>
            <button className='calcyButton' name='0' onClick={handleClick}>0</button>
            <button className='calcyButton' name='.' onClick={handleClick}>.</button>
            <button className='calcyButton highlight' id='result' onClick={calculate}>=</button>
        </div>
      
    </div>
  );
}

export default SimpleCalcy;
