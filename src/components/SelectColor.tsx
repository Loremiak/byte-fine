import { Dispatch } from "react";

type SelectColorProps = {
  selectedColor: string;
  color: string;
  setSelectedSelect: Dispatch<React.SetStateAction<string>>;
};

const SelectColor: React.FC<SelectColorProps> = ({
  selectedColor,
  color,
  setSelectedSelect,
}) => {
  const isSelected = selectedColor === color;

  return (
    <>
      <button
        className={`relative w-4 h-4 rounded-full flex items-center justify-center cursor-pointer ${
          isSelected ? "outline-3 outline-white" : ""
        }`}
        style={{
          padding: isSelected ? "2px" : "0",
        }}
        onClick={() => setSelectedSelect(color)}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            backgroundColor: color,
          }}
        />
      </button>
    </>
  );
};

export default SelectColor;
