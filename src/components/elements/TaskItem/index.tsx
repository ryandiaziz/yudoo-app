import {
    ImCheckboxUnchecked,
    // ImCheckboxChecked
} from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";
import IconWrapper from '../IconWrapper';

type TaskItemProps = {
    index: number,
    name: string
}

const TaskItem = ({ index, name }: TaskItemProps) => {
    return (
        <div className={`flex items-center justify-between border-bg-200 p-3 max-w-2xl ${index && 'border-t'}`}>
            <div className='flex gap-3 items-center '>
                <div className='text-bg-200 cursor-pointer hover:bg-bg-100'>
                    <ImCheckboxUnchecked />
                </div>
                <h4 className='text-text-100'>{name}</h4>
            </div>
            <IconWrapper>
                <MdArrowForwardIos />
            </IconWrapper>
        </div>
    )
}

export default TaskItem