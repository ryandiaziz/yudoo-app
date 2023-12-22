import React from 'react'

import { useAppSelector } from '@/store/hooks';
import SidebarLayout from '../SidebarLayout'
import IconClose from '@/components/elements/IconClose';
import InputTask from '@/components/elements/InputTask';
import InputDesc from '@/components/elements/InputDesc';

const TaskSidebar = () => {
    const { isTaskSidebarOpen } = useAppSelector(state => state.menu)

    return (
        <SidebarLayout
            title='Task:'
            isOpen={isTaskSidebarOpen}
            position='top-0 right-0'
            hide='translate-x-96'
            className='w-96'
            icon={<IconClose />}
        >
            <InputTask />
            <InputDesc />
        </SidebarLayout>
    )
}

export default TaskSidebar