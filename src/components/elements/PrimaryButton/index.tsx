import React from 'react'

const PrimaryButton = ({ name }: any) => {
    return (
        <button className='hover:bg-primary-100 btn-size bg-accent-200 text-bg-300 font-normal'>{name}</button>
    )
}

export default PrimaryButton