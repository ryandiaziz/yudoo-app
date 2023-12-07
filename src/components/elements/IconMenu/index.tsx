import React from 'react'
import { LuMenu } from 'react-icons/lu'

import { useAppDispatch } from "@/store/hooks";
import { onSidebarHandler } from '@/store/slice/menuSlice';

const IconMenu = ({ isSidebarOpen = false }: { isSidebarOpen?: boolean }) => {
    const dispatch = useAppDispatch()
    return (
        <div
            onClick={(() => dispatch(onSidebarHandler()))}
            className={`text-2xl cursor-pointer text-text-200 hover:bg-bg-200 hover:rounded-full p-1 h-min w-min ${isSidebarOpen ? 'hidden' : 'animate-show mr-3'}`}
        >
            <LuMenu />
        </div>
    )
}

export default IconMenu