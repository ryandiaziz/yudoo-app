/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <>
            <h1>YO</h1>
            <Outlet />
        </>
    )
}

export default RootLayout