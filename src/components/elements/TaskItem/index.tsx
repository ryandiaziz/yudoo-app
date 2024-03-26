import {
    ImCheckboxUnchecked,
    // ImCheckboxChecked
} from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";
import IconWrapper from '../IconWrapper';
import DueDate from "./components/DueDate";

type TaskItemProps = {
    index: number,
    title: string,
    due_date: string
}

const TaskItem = ({ index, title, due_date }: TaskItemProps) => {
    return (
        <div className={`flex items-center justify-between border-bg-200 p-3 ${index && 'border-t'}`}>
            <div className='flex gap-3 items-start'>
                <div className='text-bg-200 cursor-pointer hover:bg-bg-100 mt-[6px]'>
                    <ImCheckboxUnchecked />
                </div>
                <div>
                    <h4 className='text-text-100 font-medium p-0'>{title}</h4>
                    {due_date && <DueDate due_date={due_date} />}
                </div>
            </div>
            <IconWrapper>
                <MdArrowForwardIos />
            </IconWrapper>
        </div>
    )
}

export default TaskItem