import React from 'react'
import { Icon } from 'lucide-react';
import { coconut } from '@lucide/lab';


const SideBar = () => {
  return (
    <div className='lg:col-span-1 space-y-6'>
        <div className='bg-gray-800 rounded-xl p-6 text-white'>
            <h1 className='text-sm opacity-50'>Feedback Board</h1>
            <Icon iconNode={coconut} />

        </div>
    </div>
  )
}

export default SideBar
