import React from 'react'
import Task from './task1'
import OddorEven from '../OddorEven'
import Calculator from './Calculator'
import Mark from './Mark'
import Divisiblecheck from './Divisiblecheck'
import PrimeNumber from './PrimeNumber'
import TimeFormat from './TimeFormat'

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
      
    </div>
  )
}

export default App
