// 'use client'
import React from "react";
import type { Metadata } from "next";
import { useAppSelector } from "@/store/hooks";

import MenuSidebar from "@/components/layouts/MenuSidebar";

export const metadata: Metadata = {
    title: "Task",
};

const TaskLayout = ({ children }: { children: React.ReactNode }) => {
    // const { isSidebarOpen } = useAppSelector(state => state.menu)
    return (
        <main className={`mt-3 transition-all duration-300 ease-in-out `}>
            <MenuSidebar />
            <div>{children}</div>
        </main>
    );
};

export default TaskLayout;
