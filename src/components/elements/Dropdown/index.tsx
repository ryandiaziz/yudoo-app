import React from "react";

import DropdownItem from "./components/dropdowItem";
import DropdownContainer from "./components/dropdownContainer";
import Label from "../Label";

const Dropdown = () => {
    return (
        <div className="flex items-center">
            <Label name="Category" />
            <DropdownContainer>
                <DropdownItem
                    title="Personal"
                    value="personal"
                    isSelected={false}
                />
                <DropdownItem title="Work" value="work" isSelected={false} />
            </DropdownContainer>
        </div>
    );
};

export default Dropdown;
