import React from "react";

import Sidebar from "@/components/layouts/Sidebar";

const TaskLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="ml-64 mt-3">
            <Sidebar />
            <div>{children}</div>
        </main>
    );
};

export default TaskLayout;
