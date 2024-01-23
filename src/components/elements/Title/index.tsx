import React from 'react'

const Title = ({ text, isSidebarOpen }: any) => {
    return (
        <h1 className={`text-5xl font-bold text-text-100 w-max ${!isSidebarOpen && 'translate-x-3 transition-transform ease-in-out duration-150'}`}>{text}</h1>
    )
}

export default Title