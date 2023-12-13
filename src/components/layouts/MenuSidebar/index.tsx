import React from 'react'
import Link from 'next/link';
import { LuListTodo } from "react-icons/lu";
import { FaStickyNote } from "react-icons/fa";

import { useAppSelector } from '@/store/hooks';
import SidebarLayout from '../SidebarLayout'
import SidebarMenu from '@/components/fragments/SidebarMenu'
import SidebarManuItem from '@/components/elements/SidebarMenuItem'
import IconMenu from '@/components/elements/IconMenu';

const MenuSidebar = () => {
    const { isSidebarOpen } = useAppSelector(state => state.menu)
    const taskMenus = [
        {
            name: 'Today',
            path: '/task/todays',
            icon: <LuListTodo />,
        },
        {
            name: 'Stiky Wall',
            path: '/task/notes',
            icon: <FaStickyNote />,
        },
    ]
    return (
        <SidebarLayout
            title='Menu'
            position='left-0 top-0'
            hide='-translate-x-64'
            icon={<IconMenu />}
            isOpen={isSidebarOpen}
        >
            <SidebarMenu name={"Tasks"}>
                {
                    taskMenus.map((menu, id) => (
                        <Link key={id} href={menu.path}>
                            <SidebarManuItem
                                name={menu.name}
                                path={menu.path}
                                icon={menu.icon}
                            />
                        </Link>
                    ))
                }
            </SidebarMenu>
        </SidebarLayout>
    )
}

export default MenuSidebar