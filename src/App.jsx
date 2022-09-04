import React, { useState ,createContext}  from 'react'
import CurrencyRow from './CurrencyRow';
import "./app.css"

// import Pagination from './Pagination';
function App() {
 return (  
    <>
    <h1 >Currency converter</h1>
    <CurrencyRow/>
    <div>=</div>
    <CurrencyRow/>
    </>
  )

}

export default App;
