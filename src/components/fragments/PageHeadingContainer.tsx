import React from 'react'

const PageHeadingContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex items-center'>{children}</div>
    )
}

export default PageHeadingContainer