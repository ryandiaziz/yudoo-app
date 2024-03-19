type LabelProps = {
    name: string
}

const Label = ({ name }: LabelProps) => {
    return (
        <div className="w-24">
            <p className="w-min">{name}</p>
        </div>
    )
}

export default Label