import { useRef, useEffect } from "react";

import { onTaskSidebarHandler } from "../../../store/features/menuSlice";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import SidebarLayout from "../SidebarLayout";
import IconClose from "../../elements/IconClose";
import InputTask from "../../elements/InputTask";
import InputDesc from "../../elements/InputDesc";
import PrimaryButton from "../../elements/PrimaryButton";
import OutlineButton from "../../elements/OutlineButton";
import Dropdown from "../../elements/Dropdown";
import ButtonContainerMenuBar from "../../fragments/ButtonContainerMenuBar";

const TaskSidebar = () => {
    const dispatch = useAppDispatch()
    const { isTaskSidebarOpen } = useAppSelector(state => state.menu)

    const taskRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (taskRef.current && !taskRef.current.contains(event.target as Node)) {
                dispatch(onTaskSidebarHandler(false))
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dispatch]);

    return (
        <SidebarLayout
            title="Task:"
            className="w-96"
            hide="translate-x-96"
            position="top-0 right-0"
            icon={<IconClose />}
            useRef={taskRef}
            isOpen={isTaskSidebarOpen}
        >
            <div className="relative space-y-3 mt-3 h-full">
                <InputTask />
                <InputDesc />
                <Dropdown />
                <ButtonContainerMenuBar>
                    <OutlineButton name={"Delete Task"} />
                    <PrimaryButton name={"Save Changes"} />
                </ButtonContainerMenuBar>
            </div>
        </SidebarLayout>
    );
};

export default TaskSidebar;
