import { Outlet } from "react-router-dom";
import MenuSidebar from "../MenuSidebar";
import Alert from "../../elements/Alert";

const RootLayout = () => {
    return (
        <>
            <MenuSidebar />
            <Alert />
            <Outlet />
        </>
    );
};

export default RootLayout;
