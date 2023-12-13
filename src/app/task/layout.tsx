'use client'
import React from "react";
import type { Metadata } from "next";
import { useAppSelector } from "@/store/hooks";

import MenuSidebar from "@/components/layouts/MenuSidebar";

const TaskLayout = ({ children }: { children: React.ReactNode }) => {
    const { isSidebarOpen } = useAppSelector(state => state.menu)
    return (
        <main className={`mt-3 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-10'}`}>
            <MenuSidebar />
            <div>{children}</div>
        </main>
    );
};

export default TaskLayout;
