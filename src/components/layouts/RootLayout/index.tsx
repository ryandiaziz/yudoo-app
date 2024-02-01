import { Outlet } from "react-router-dom";
import MyModal from "../../ClickOutSide";
// import MenuSidebar from "../MenuSidebar";

const RootLayout = () => {
    return (
        <>
            {/* <MenuSidebar /> */}
            <MyModal />
            <Outlet />
        </>
    );
};

export default RootLayout;
