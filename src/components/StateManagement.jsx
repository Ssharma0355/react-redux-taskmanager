import React, { createContext } from 'react'
import ChildA from './ChildA';


const userContext = createContext();
const StateManagement = () => {
   
    const UserValue = {"Name":"Sachin"}
  return (
    <div>
        <userContext.Provider value={"sachin"}>
            <ChildA />
        </userContext.Provider>
      
    </div>
  )
}

export default StateManagement
export { userContext };
