"use client";
import React from "react";
// import { usePathname } from "next/navigation";

const SidebarManuItem = ({
    icon,
    name,
    path,
    iconColor = "text-text-200",
}: any) => {
    // const pathName = usePathname();
    return (
        <div
            className={`flex items-center hover:bg-bg-200 cursor-pointer p-2 rounded-md ${
                "pathName.includes(path)" && "bg-bg-200"
            }`}>
            <div className={`mr-3 ${iconColor}`}>{icon}</div>
            <h4
                className={`text-base text-text-100 ${
                    "pathName.includes(path)" && "font-medium"
                }`}>
                {name}
            </h4>
        </div>
    );
};

export default SidebarManuItem;
