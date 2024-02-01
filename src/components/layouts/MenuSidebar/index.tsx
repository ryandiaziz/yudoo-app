import { LuListTodo } from "react-icons/lu";
import { FaStickyNote } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";

import { useAppSelector } from '../../../store/hooks';
import SidebarLayout from "../SidebarLayout";
import SidebarMenu from "../../fragments/SidebarMenu";
import SidebarManuItem from "../../elements/SidebarMenuItem";
import PrimaryButton from "../../elements/PrimaryButton";
import ButtonContainerMenuBar from "../../fragments/ButtonContainerMenuBar";

const MenuSidebar = () => {
    const { isSidebarOpen } = useAppSelector(state => state.menu)

    const taskMenus = [
        {
            name: "Upcoming",
            path: "/upcomings",
            icon: <MdKeyboardDoubleArrowRight />,
        },
        {
            name: "Today",
            path: "/todays",
            icon: <LuListTodo />,
        },
        {
            name: "Stiky Wall",
            path: "/notes",
            icon: <FaStickyNote />,
        },
    ];

    return (
        <SidebarLayout
            title="Menu"
            position="left-0 top-0"
            hide="-translate-x-64"
            isOpen={isSidebarOpen}
            className={`w-64`}>
            <div className="relative h-full">
                <SidebarMenu name={"Tasks"}>
                    {taskMenus.map((menu, id) => (
                        <a key={id} href={menu.path}>
                            <SidebarManuItem
                                name={menu.name}
                                path={menu.path}
                                icon={menu.icon}
                            />
                        </a>
                    ))}
                </SidebarMenu>
                <SidebarMenu name={"List"}>
                    <SidebarManuItem
                        name={"Personal"}
                        path={"/personal"}
                        icon={<RiCheckboxBlankFill />}
                        iconColor={"text-red-500"}
                    />
                </SidebarMenu>
                <ButtonContainerMenuBar>
                    <PrimaryButton name={"Sign Out"} />
                </ButtonContainerMenuBar>
            </div>
        </SidebarLayout>
    );
};

export default MenuSidebar;
