import React from 'react'

const OutlineButton = ({ name }: { name: String }) => {
    return (
        <button className='hover:bg-bg-200 btn-size border border-text-200 font-medium text-text-100'>{name}</button>
    )
}

export default OutlineButton