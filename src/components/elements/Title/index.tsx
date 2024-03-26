const Title = ({ text }: { text: string }) => {
    return (
        <h1 className={`text-3xl font-bold text-text-100 w-max ml-4`}>{text}</h1>
    )
}

export default Title