type DropdownItemProps = {
    title: string;
    value: string;
    isSelected: boolean;
};

const DropdownItem = ({ title, value, isSelected }: DropdownItemProps) => {
    return (
        <option value={value} selected={isSelected}>
            {title}
        </option>
    );
};

export default DropdownItem;
