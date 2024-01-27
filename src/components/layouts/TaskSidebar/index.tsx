import { useAppSelector } from "../../../store/hooks";
import SidebarLayout from "../SidebarLayout";
import IconClose from "../../elements/IconClose";
import InputTask from "../../elements/InputTask";
import InputDesc from "../../elements/InputDesc";
import PrimaryButton from "../../elements/PrimaryButton";
import OutlineButton from "../../elements/OutlineButton";
import Dropdown from "../../elements/Dropdown";
import ButtonContainerMenuBar from "../../fragments/ButtonContainerMenuBar";

const TaskSidebar = () => {
    const { isTaskSidebarOpen } = useAppSelector(state => state.menu)

    return (
        <SidebarLayout
            title="Task:"
            isOpen={isTaskSidebarOpen}
            position="top-0 right-0"
            hide="translate-x-96"
            className="w-96"
            icon={<IconClose />}>
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
