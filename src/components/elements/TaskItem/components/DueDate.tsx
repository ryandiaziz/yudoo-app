import { MdDateRange } from "react-icons/md";


const DueDate = ({ due_date }) => {
    return (
        <div className="flex items-center gap-2">
            <MdDateRange className="text-text-200" />
            <p className='text-text-100 font-light'>{due_date}</p>
        </div>
    )
}

export default DueDate