import { MouseEventHandler } from "react";

type ResetButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-[18px] font-medium p-6 px-4 gap-[8px] w-[90px] h-[32px] text-[#CB0000] border-b-[1px] border-[#CB0000] flex items-center hover:cursor-pointer"
    >
      Reset
      <img src="src\assets\reset.svg" alt="Reset button" />
    </button>
  );
};

export default ResetButton;
