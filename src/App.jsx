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
import Findbig from './Forloop/Findbig'
import Vowels from './Forloop/Vowels'
import Fibonacci from './Forloop/Fibonacci'
import Starprinting from './Forloop/Starprinting'
import Number from './Forloop/numberPrint'
import ArrayKeyandObject from './Forloop/ArrayKeyandObject'
import Printusername from './Printusername'
import Printtotalprice from './Printtotalprice'
import PrinthighProduct from './PrinthighProduct'
import Hobbies from './Forloop/Hobbies'
import Average from './Forloop/Average'
import PrintCities from './Forloop/PrintCities'
import Orders from './Forloop/Orders'
import CartAdding from './Forloop/CartAdding'
import Orders2 from './Forloop/Orders2'
import Twistedorder from './Forloop/Twistedorder'
import Orderstwisted from './Forloop/Orderstwisted'
import Demo from './Forloop/Demo'
import 'bootstrap-icons/font/bootstrap-icons.css';
import OrderList from './Orderlist'
import { OrderProvider } from './OrderContext'
import Demo2 from './Demo2'



const App = () => {
  return (
    <div>
      {/* <Task/>
      <OddorEven/>
      <Calculator/>
      <Mark/>
      <Divisiblecheck />
      <PrimeNumber/>
      <TimeFormat/>
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
      <Findbig/>
      <Vowels/>
      <Fibonacci/>
      <Starprinting/>
      <Number/>
      <ArrayKeyandObject/>
      <Printusername/>
      <Printtotalprice/>
      <PrinthighProduct/>
      <Hobbies/>
      <Average/>
      <PrintCities/>
      <Orders/> */}
      {/* <CartAdding/> */}
      {/* <Orders2/> */}
      {/* <Twistedorder/> */}
      {/* <Orderstwisted/> */}
      {/* <Demo/> */}
      {/* <Demo2/> */}

        <OrderProvider>
      <div>
        <h1>Order Management</h1>
        <OrderList/>
      </div>
    </OrderProvider>
      
      
      
    </div>
  )
}

export default App
