import Label from "../Label"

const InputDate = () => {
    return (
        <div className="flex items-center gap-4">
            <Label name="Due" />
            <input
                type="date"
                placeholder='New task'
                className='input-style md:w-3/4'
            />
        </div>
    )
}

export default InputDate