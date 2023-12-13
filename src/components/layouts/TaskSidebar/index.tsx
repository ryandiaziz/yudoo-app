import React from 'react'

import { useAppSelector } from '@/store/hooks';
import SidebarLayout from '../SidebarLayout'
import IconClose from '@/components/elements/IconClose';

const TaskSidebar = () => {
    const { isTaskSidebarOpen } = useAppSelector(state => state.menu)

    return (
        <SidebarLayout
            title='Task:'
            isOpen={isTaskSidebarOpen}
            position='top-0 right-0'
            hide='translate-x-64'
            icon={<IconClose />}
        >
            <p>YOO</p>
        </SidebarLayout>
    )
}

export default TaskSidebar