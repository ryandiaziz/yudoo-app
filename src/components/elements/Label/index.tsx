type LabelProps = {
    name: string
}

const Label = ({ name }: LabelProps) => {
    return (
        <label className='mr-8'>{name}</label>
    )
}

export default Label