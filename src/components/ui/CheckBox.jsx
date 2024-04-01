const CheckBox = ({ itemName }) => {
  return (
    <div className="flex items-center gap-3">
      <input id={itemName} type="checkbox" />
      <label
        className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize"
        htmlFor={itemName}
      >
        {itemName}
      </label>
    </div>
  );
};

export default CheckBox;
