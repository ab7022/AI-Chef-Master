/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
const EmployeeCard = ({name, role, task, feedback, timeline}) => {
  return (
    <div className='bg-zinc-800 border border-zinc-500 rounded-lg w-full p-8 my-8 text-white relative'>
        <div className='flex flex-col lg:flex-row text-white justify-between items-center py-8'>

            <div className='flex flex-col items-center'>
            <div className="bg-gradient-to-b rounded-full from-blue-500 to-zinc-800 p-2">
            
            <img className='rounded-full w-[175px] h-[175px] object-cover  ' src="https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="profile pic" />
            
            </div>
            
            <p className='text-2xl font-medium'>{name}</p>
            <p className=''>{role}</p>
            </div>

            <div>
                <p className='text-2xl'>Responsibilities</p>
                <p className=''>{task}</p>
            </div>

        </div>

        <div className='flex flex-col  text-white'>
            <p className='text-2xl font-medium'>Feedback from us</p>
            <p>{feedback}</p>
            <p className='absolute right-8 bottom-8'>{timeline}</p>
        </div>

        
    </div>
  )
}

export default EmployeeCard