import React from "react";
import type { Metadata } from "next";

import Sidebar from "@/components/layouts/Sidebar";

export const metadata: Metadata = {
    title: "Todo",
};

const TaskLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="ml-64 mt-3">
            <Sidebar />
            <div>{children}</div>
        </main>
    );
};

export default TaskLayout;
