import React from 'react'
import SideBar from '../components/SideBar'

const HomePage = () => {
  return (
    <div className='max-w-6xl mx-auto p-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
            <SideBar />
            <div className='lg:col-span-3 space-y-6'>
              <div className='bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:item-center justify-between gap-4'>

              
              </div>

            </div>
        </div>
    </div>
  )
}

export default HomePage
