import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index'


const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="center">
      <h1>Welcome to Redux</h1>
      <h4 style={{marginLeft: '100px'}}>Using Redux</h4>

      <div className="main">
        <button onClick={() => dispatch(decNumber())}>-</button>
        <span>{myState}</span>
        <button onClick={() => dispatch(incNumber(5))}>+</button>
      </div>
    </div>
  )
}

export default App


