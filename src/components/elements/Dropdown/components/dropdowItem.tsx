type DropdownItemProps = {
    title: string;
    value: string;
};

const DropdownItem = ({ title, value }: DropdownItemProps) => {
    return (
        <option value={value} className="bg-bg-100">
            {title}
        </option>
    );
};

export default DropdownItem;
