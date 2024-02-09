import React from "react";

const DropdownContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <select
            className="text-gray-900 text-base w-min bg-transparent border rounded-md p-3 focus:outline-none">
            {children}
        </select>
    );
};

export default DropdownContainer;
