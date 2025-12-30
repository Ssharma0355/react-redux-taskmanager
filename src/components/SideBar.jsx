import React from 'react'


const SideBar = () => {
  return (
    <div className='lg:col-span-1 space-y-6'>
        <div className='bg-gray-800 rounded-xl p-6 text-white'>
            <h1 className='text-xl font-bold mb-1'>Client</h1>
            <p className='text-sm opacity-50'>Feedback Board</p>
            </div>
            <div className='bg-white rounded-xl p-8 shadow-md'>
                <div className='flex flex-wrap gap-2'>
                    <button className={`p-4 py-2 text-black rounded-lg text-sm font-semibold transistion-all`}>
                    Categories
                    </button>
                </div>

            </div>
    </div>
  )
}

export default SideBar
