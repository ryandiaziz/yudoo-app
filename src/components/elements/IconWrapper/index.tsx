import React from 'react'

const IconWrapper = ({ children, onClick }: { children: React.ReactNode, onClick?: any }) => {
    return (
        <div onClick={onClick} className='text-text-200 p-2 hover:bg-bg-200 hover:rounded-full cursor-pointer'>
            {children}
        </div>
    )
}

export default IconWrapper