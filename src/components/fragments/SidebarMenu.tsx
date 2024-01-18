import React from "react";

const SidebarMenu = ({ children, name }: any) => {
    return (
        <div className="mt-3 border-b-[1px] border-bg-200 py-4">
            <h3 className="mb-2 text-base font-medium text-text-100">{name}</h3>
            <div className="">{children}</div>
        </div>
    );
};

export default SidebarMenu;
