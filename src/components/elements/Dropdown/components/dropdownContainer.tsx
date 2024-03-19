import React from "react";

const DropdownContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <select
            className="text-gray-900 text-base bg-transparent border rounded-md py-2 px-1 focus:outline-none md:w-3/4">
            {children}
        </select>
    );
};

export default DropdownContainer;
