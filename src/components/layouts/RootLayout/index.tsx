import { Outlet } from "react-router-dom";
import MenuSidebar from "../MenuSidebar";

const RootLayout = () => {
    return (
        <>
            <MenuSidebar />
            <Outlet />
        </>
    );
};

export default RootLayout;
