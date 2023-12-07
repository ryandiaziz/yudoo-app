'use client'
import React from "react";
import Link from "next/link";
import { LuMenu, LuListTodo } from "react-icons/lu";
import { FaStickyNote } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { onSidebarHandler } from "@/store/slice/menuSlice";
import SidebarMenu from "@/components/fragments/SidebarMenu";
import SidebarManuItem from "@/components/elements/SidebarMenuItem";

const Sidebar = () => {
    const { isSidebarOpen } = useAppSelector(state => state.menu)
    const dispatch = useAppDispatch()
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
        <nav className={`fixed left-0 top-0 h-screen w-64 p-3 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-52'}`}>
            <div className="rounded-xl bg-bg-100 h-full px-2 pt-3">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl text-text-100">Menu</h3>
                    <div onClick={(() => dispatch(onSidebarHandler()))} className="text-2xl cursor-pointer text-text-200 hover:bg-bg-200 hover:rounded-full p-1">
                        <LuMenu />
                    </div>
                </div>
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
            </div>
        </nav>
    );
};

export default Sidebar;
