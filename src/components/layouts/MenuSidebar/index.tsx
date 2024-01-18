'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuListTodo } from "react-icons/lu";
import { FaStickyNote } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";

import { useAppSelector } from '@/store/hooks';
import SidebarLayout from '../SidebarLayout'
import SidebarMenu from '@/components/fragments/SidebarMenu'
import SidebarManuItem from '@/components/elements/SidebarMenuItem'
import IconMenu from '@/components/elements/IconMenu';
import PrimaryButton from '@/components/elements/PrimaryButton';

const MenuSidebar = () => {
    const { isSidebarOpen } = useAppSelector(state => state.menu)
    const pathName = usePathname()
    const taskMenus = [
        {
            name: 'Upcoming',
            path: '/upcomings',
            icon: <MdKeyboardDoubleArrowRight />,
        },
        {
            name: 'Today',
            path: '/todays',
            icon: <LuListTodo />,
        },
        {
            name: 'Stiky Wall',
            path: '/notes',
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
            className={`w-64 ${pathName === '/' && 'hidden'}`}
        >
            <div className='relative h-full'>
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
                <SidebarMenu name={"List"}>
                    <SidebarManuItem
                        name={"Personal"}
                        path={"/personal"}
                        icon={<RiCheckboxBlankFill />}
                        iconColor={"text-red-500"}
                    />
                </SidebarMenu>
                <div className='absolute bottom-16 w-full flex justify-evenly px-5'>
                    {/* <OutlineButton name={"Delete Task"} /> */}
                    <PrimaryButton name={"Sign Out"} />
                </div>
            </div>
        </SidebarLayout>
    )
}

export default MenuSidebar