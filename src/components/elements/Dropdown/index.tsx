import DropdownItem from "./components/dropdowItem";
import DropdownContainer from "./components/dropdownContainer";
import Label from "../Label";

const Dropdown = () => {
    return (
        <div className="flex items-center gap-4">
            <Label name="Category" />
            <DropdownContainer >
                <DropdownItem
                    title="Personal"
                    value="personal"
                />
                <DropdownItem
                    title="Work"
                    value="work"
                />
            </DropdownContainer>
        </div>
    );
};

export default Dropdown;
