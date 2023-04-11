//1.Import Area
import React from 'react'
import './App.css';
import { useReducer } from 'react';

//2. Function defintion area
const Reducer = () => {
    //2.1 Hooks arae
    const initialState = 0
    //2.2 function defintion area
    const reducer = (state,action)=>{
      switch(action)
      {
        case 'increment':
          return state+1;
        case 'decrement':
          return state-1;
        case 'reset':
          return initialState;
        default:
          return state;
      }
    }
    const[count,dispatch]=useReducer(reducer,initialState);
    //2.3 Return Statement
  return (
    <div className='main'>
        <h3>Counter - Using useReduder Hook</h3>
        <hr/>
        <h1>Count = {count}</h1>
        <button className='btn btn-primary tbdr' type='button' onClick={()=>dispatch('increment')}>Increment</button>
        <button className='btn btn-primary tbdr' type='button' onClick={()=>dispatch('decrement')}>Decrement</button>
        <button className='btn btn-primary tbdr' type='button' onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Reducer