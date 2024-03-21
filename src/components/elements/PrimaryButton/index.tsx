// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrimaryButton = ({ name, onClick }: any) => {
    return (
        <button onClick={onClick} className='hover:bg-primary-100 btn-size bg-accent-200 text-bg-300 font-normal'>{name}</button>
    )
}

export default PrimaryButton