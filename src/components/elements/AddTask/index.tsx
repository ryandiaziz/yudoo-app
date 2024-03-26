import { FaPlus } from "react-icons/fa6";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { onTaskSidebarHandler } from "../../../store/features/menuSlice";

const AddTask = () => {
    const dispatch = useAppDispatch();
    const { isOpen } = useAppSelector(state => state.menu.taskSidebar)

    return (
        <div
            onClick={() => {
                if (!isOpen) dispatch(onTaskSidebarHandler(true))
            }}
            className="flex items-center border border-bg-200 rounded-md p-3 cursor-pointer">
            <div className="text-text-200 text-lg">
                <FaPlus />
            </div>
            <p className="ml-2 font-medium text-text-200">Add New Task</p>
        </div>
    );
};

export default AddTask;
