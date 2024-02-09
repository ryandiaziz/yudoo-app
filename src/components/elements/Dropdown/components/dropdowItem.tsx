type DropdownItemProps = {
    title: string;
    value: string;
    isSelected: boolean;
    onChange?: () => void;
};

const DropdownItem = ({ title, value, isSelected, onChange }: DropdownItemProps) => {
    return (
        <option value={value} selected={isSelected} onChange={onChange} onClick={() => console.log("")
        } className="bg-bg-100">
            {title}
        </option>
    );
};

export default DropdownItem;
