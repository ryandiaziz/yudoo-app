'use client'
import React from "react";
import type { Metadata } from "next";
import { useAppSelector } from "@/store/hooks";

import Sidebar from "@/components/layouts/Sidebar";

const TaskLayout = ({ children }: { children: React.ReactNode }) => {
    const { isSidebarOpen } = useAppSelector(state => state.menu)
    return (
        <main className={`mt-3 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-10'}`}>
            <Sidebar />
            <div>{children}</div>
        </main>
    );
};

export default TaskLayout;
