import React from "react";
import { AiOutlineClose } from "react-icons/ai";

// import { useAppDispatch } from '@/store/hooks';
// import { onTaskSidebarHandler } from '@/store/slice/menuSlice';
import IconWrapper from "../IconWrapper";

const IconClose = () => {
    // const dispatch = useAppDispatch();

    const closeHandler = () => {
        // dispatch(onTaskSidebarHandler(false));
    };
    return (
        <IconWrapper onClick={closeHandler}>
            <AiOutlineClose />
        </IconWrapper>
    );
};

export default IconClose;
