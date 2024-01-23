import React from 'react'

const DropdownContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <select id="countries" className="text-gray-900 text-sm block w-min p-3 bg-transparent border border-bg-200 rounded-md">
            {children}
        </select>
    )
}

export default DropdownContainer