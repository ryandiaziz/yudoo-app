import { useLocation } from "react-router-dom";

type SidebarManuItemProps = {
    icon: any,
    name: string,
    path: string,
    iconColor?: string
}

const SidebarManuItem = ({
    icon,
    name,
    path,
    iconColor = "text-text-200",
}: SidebarManuItemProps) => {

    const { pathname } = useLocation();
    return (
        <div
            className={`flex items-center hover:bg-bg-200 cursor-pointer p-2 rounded-md ${pathname.includes(path) && "bg-bg-200"
                }`}>
            <div className={`mr-3 ${iconColor}`}>{icon}</div>
            <h4 className={`text-base text-text-100 ${pathname.includes(path) && "font-medium"}`}>
                {name}
            </h4>
        </div>
    );
};

export default SidebarManuItem;
