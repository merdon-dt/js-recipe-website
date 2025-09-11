import React from 'react'
import Task from './task1'
import OddorEven from '../OddorEven'
import Calculator from './Calculator'
import Mark from './Mark'
import Divisiblecheck from './Divisiblecheck'
import PrimeNumber from './PrimeNumber'
import TimeFormat from './TimeFormat'
import TimeFind from './TimeFind'

const App = () => {
  return (
    <div>
      {/* <Task/>
      <OddorEven/> */}
      <Calculator/>
      <Mark/>
      <Divisiblecheck />
      <PrimeNumber/>
      <TimeFormat/>
      <TimeFind/>
      
    </div>
  )
}

export default App
