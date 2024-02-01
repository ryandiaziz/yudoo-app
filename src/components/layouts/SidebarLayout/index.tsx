import React from "react";

type SidebarLayoutType = {
    children: React.ReactNode,
    icon?: React.ReactNode,
    title: string,
    isOpen: boolean,
    position: string,
    hide: string,
    className?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useRef?: any
}

const SidebarLayout = ({
    children,
    title,
    icon,
    isOpen,
    position,
    hide,
    className,
    useRef
}: SidebarLayoutType) => {
    return (
        <nav ref={useRef} className={`sidebar-container ${className} ${position} ${isOpen ? 'translate-x-0' : hide}`}>
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
