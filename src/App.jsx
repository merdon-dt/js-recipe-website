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
import Divisibleby3 from './Forloop/Divisibleby3'
import Reversestring from './Forloop/Reversestring'
import Factorial from './Forloop/Factorial'
import Arraynumber from './Forloop/Arraynumber'
import ArrayNumberadd from './Forloop/ArrayNumberadd'

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
      <h1>Forloop task</h1>
      <Print1to10/>
      <PrintEven1to20/>
      <PrintReverse/>
      <Sumofnumbers/>
      <Divisibleby3/>
      <Reversestring/>
      <Factorial/>
      <Arraynumber/>
      <ArrayNumberadd/>
      
    </div>
  )
}

export default App
