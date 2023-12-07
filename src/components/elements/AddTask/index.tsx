import React from 'react'
import { FaPlus } from "react-icons/fa6";

const AddTask = () => {
    return (
        <div className='flex items-center border border-bg-200 rounded-md p-3 max-w-2xl cursor-pointer'>
            <div className='text-text-200 text-lg'>
                <FaPlus />
            </div>
            <p className='ml-2 font-medium text-text-200'>Add New Task</p>
        </div>
    )
}

export default AddTask