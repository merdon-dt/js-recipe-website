import React from 'react'
import Task from './task1'
import OddorEven from '../OddorEven'
import Calculator from './Calculator'
import Mark from './Mark'
import Divisiblecheck from './Divisiblecheck'
import PrimeNumber from './PrimeNumber'
import TimeFormat from './TimeFormat'
import TimeFind from './TimeFind'
import Cart from './Cart'
import Print1to10 from './Forloop/Print1to10'
import PrintEven1to20 from './Forloop/PrintEven1to20'
import PrintReverse from './Forloop/PrintReverse'
import Sumofnumbers from './Forloop/Sumofnumbers'

const App = () => {
  return (
    <div>
      {/* <Task/>
      <OddorEven/>
      <Calculator/>
      <Mark/>
      <Divisiblecheck />
      <PrimeNumber/> */}
      {/* <TimeFormat/> */}
      <TimeFind/>
      <Cart/>
      <Print1to10/>
      <PrintEven1to20/>
      <PrintReverse/>
      <Sumofnumbers/>
      
    </div>
  )
}

export default App
