import React, { useContext } from 'react'
import { userContext } from './StateManagement'

const ChildA = () => {
    const data = useContext(userContext)
  return (
    <div>
      <h1 className='text-gray-600'>{data}</h1>
    </div>
  )
}

export default ChildA
