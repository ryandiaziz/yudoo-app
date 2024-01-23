import React from 'react'

const ButtonContainerMenuBar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='absolute bottom-16 w-full flex justify-evenly px-5'>{children}</div>
    )
}

export default ButtonContainerMenuBar