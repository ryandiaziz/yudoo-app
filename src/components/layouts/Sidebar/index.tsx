import React from "react";
import { LuMenu, LuListTodo } from "react-icons/lu";
import { FaStickyNote } from "react-icons/fa";

import SidebarMenu from "@/components/fragments/SidebarMenu";
import SidebarManuItem from "@/components/elements/SidebarMenuItem";

const Sidebar = () => {
    return (
        <nav className="fixed left-0 top-0 h-screen w-60 p-3">
            <div className="rounded-xl bg-bg-100 h-full px-2 pt-3">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl text-text-100">Menu</h3>
                    <div className="text-2xl cursor-pointer text-slate-600 hover:bg-bg-200 hover:rounded-full p-1">
                        <LuMenu />
                    </div>
                </div>
                <SidebarMenu name={"Tasks"}>
                    <SidebarManuItem icon={<LuListTodo />} name={"Today"} />
                    <SidebarManuItem icon={<FaStickyNote />} name={"Stiky Wall"} />
                </SidebarMenu>
            </div>
        </nav>
    );
};

export default Sidebar;
