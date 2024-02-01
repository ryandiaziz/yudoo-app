import { LuMenu } from "react-icons/lu";

import { useAppDispatch } from "../../../store/hooks";
import { onSidebarHandler } from "../../../store/features/menuSlice";

const IconMenu = () => {
    const dispatch = useAppDispatch();
    return (
        <div
            onClick={() => dispatch(onSidebarHandler())}
            className={`text-2xl cursor-pointer text-text-200 hover:bg-bg-200 hover:rounded-full p-1 h-min w-min transition-opacity ease-linear duration-500`}>
            <LuMenu />
        </div>
    );
};

export default IconMenu;
