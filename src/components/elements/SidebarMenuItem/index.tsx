import React from "react";

const SidebarManuItem = ({ icon, name }: any) => {
    return (
        <div className="flex items-center hover:bg-bg-200 cursor-pointer p-2 rounded-md">
            <div className="mr-3 text-text-100">{icon}</div>
            <h4 className="text-base text-text-100">{name}</h4>
        </div>
    );
};

export default SidebarManuItem;
