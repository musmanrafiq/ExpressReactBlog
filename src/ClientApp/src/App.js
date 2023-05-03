import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Appheader from './layout/appheader';
import { decrement, increment, incrementByAmount } from "./statemanagement/counterSlice"

export default function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (

    <div className='App'>
      <Appheader />
      <h1>The count is {count}</h1>
      <div className="button">
        <button
          onClick={() => dispatch(increment())}
        >
          Increase
        </button>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))} > Increase by 10</button>

      </div>

    </div>

  )
} 