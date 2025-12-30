import React, { useState } from 'react'
import FeedbackItem from './FeedbackItem'
import NoRecord from './NoRecord'

const FeedbackList = () => {
    const [records, setRecords] = useState(false)
  return (
    <div>
        <button className='p-2 bg-blue-400 rounded-lg' onClick={()=>setRecords(!records)}>for records</button>
        {records ? <FeedbackItem /> :    <NoRecord /> }
    </div>
  )
}

export default FeedbackList
