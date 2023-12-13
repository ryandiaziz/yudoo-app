import React from "react";

type SidebarLayoutType = {
    children: React.ReactNode,
    icon: React.ReactNode,
    title: string,
    isOpen: boolean,
    position: string,
    hide: string,
}

const SidebarLayout = ({
    children,
    title,
    icon,
    isOpen,
    position,
    hide,
}: SidebarLayoutType) => {
    return (
        <nav className={`fixed h-screen w-64 p-3 transition-transform duration-300 ease-in-out ${position} ${isOpen ? 'translate-x-0' : hide}`}>
            <div className="rounded-xl bg-bg-100 h-full px-2 pt-3">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl text-text-100">{title}</h3>
                    {icon}
                </div>
                {children}
            </div>
        </nav>
    );
};

export default SidebarLayout;
