import React, { useState ,createContext}  from 'react'
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';


// import Pagination from './Pagination';
function App() {
 const [name,setname] = useLocalStorage("name","abid")
 useUpdateLogger(name)
  return (  
    <>
    <input 
    type="text"
    value={name}
    onChange={e => setname(e.target.value)} />
    </>
  )

}

export default App;
 