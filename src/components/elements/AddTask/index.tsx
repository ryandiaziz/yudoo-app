import React from 'react'
import { FaPlus } from "react-icons/fa6";

import { useAppDispatch } from '@/store/hooks';
import { onTaskSidebarHandler } from '@/store/slice/menuSlice';

const AddTask = () => {
    const dispatch = useAppDispatch()
    return (
        <div onClick={() => dispatch(onTaskSidebarHandler(true))} className='flex items-center border border-bg-200 rounded-md p-3 max-w-2xl cursor-pointer'>
            <div className='text-text-200 text-lg'>
                <FaPlus />
            </div>
            <p className='ml-2 font-medium text-text-200'>Add New Task</p>
        </div>
    )
}

export default AddTask