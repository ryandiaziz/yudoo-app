type DropdownItemProps = {
    title: string;
    value: string;
    isSelected: boolean;
    onChange?: any;
};

const DropdownItem = ({ title, value, isSelected, onChange }: DropdownItemProps) => {
    return (
        <option value={value} selected={isSelected} onChange={onChange} className="bordor border-red-500">
            {title}
        </option>
    );
};

export default DropdownItem;
