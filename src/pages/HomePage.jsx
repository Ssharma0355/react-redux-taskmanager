import React from 'react'
import SideBar from '../components/SideBar'
import { Camera } from 'lucide-react';

const HomePage = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
            <SideBar />
            Sachin maoin
            <Camera color="red" size={48} />
        </div>
    </div>
  )
}

export default HomePage
