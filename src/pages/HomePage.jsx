import React from 'react'
import SideBar from '../components/SideBar'

const HomePage = () => {
  return (
    <div className='max-w-6xl mx-auto p-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
            <SideBar />
            <div className='lg:col-span-3 space-y-6'>
              <div className='bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:item-center justify-between gap-4'>
               <div className='flex items-center gap-4 flex-wrap'>
                <span className='text-sm text-white font-semibold'>Suggestion Feedback</span>
                <div className='flex items-center gap-2'>
                  <span className='text-gray-300 text-sm'>Sort by:</span>
                  <select name="" id="" className='bg-transparent text-gray-400 font-semibold text-sm border-none outline-none cursor-pointer'>
                  <option value="Most Vote">Most Vote</option>
                  <option value="Least Vote">Least Vote</option>
                  <option value="Most Comment">Most Comment</option>
                  <option value="Least Comment">Least Comment</option>
                  </select>
                </div>
               </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
